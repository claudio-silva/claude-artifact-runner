import React, { useState, useRef, useCallback } from 'react'

// SSE 测试工具组件
export default function SSETestTool() {
  const [url, setUrl] = useState('http://localhost:3001/api/svg/generate-stream')
  const [method, setMethod] = useState('POST')
  const [headers, setHeaders] = useState(`{
  "Content-Type": "application/json",
  "Authorization": "Bearer YOUR_TOKEN_HERE"
}`)
  const [body, setBody] = useState(`{
  "prompt": "测试生成一个简单的太阳图标",
  "options": {
    "temperature": 0.7
  }
}`)
  
  const [isConnected, setIsConnected] = useState(false)
  const [messages, setMessages] = useState([])
  const [error, setError] = useState(null)
  const [stats, setStats] = useState({
    connectTime: 0,
    messageCount: 0,
    dataSize: 0,
    lastMessageTime: 0
  })
  
  const abortControllerRef = useRef(null)
  const startTimeRef = useRef(null)
  const messagesEndRef = useRef(null)

  // 自动滚动到底部
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  React.useEffect(() => {
    scrollToBottom()
  }, [messages])

  // 测试连接
  const testConnection = useCallback(async () => {
    try {
      setError(null)
      setMessages([])
      setIsConnected(true)
      startTimeRef.current = Date.now()
      
      // 创建 AbortController
      abortControllerRef.current = new AbortController()
      
      // 解析 headers 和 body
      let parsedHeaders = {}
      let parsedBody = undefined
      
      try {
        parsedHeaders = JSON.parse(headers)
      } catch (e) {
        throw new Error('Headers JSON 格式错误')
      }
      
      if (method !== 'GET' && body.trim()) {
        try {
          parsedBody = JSON.parse(body)
        } catch (e) {
          throw new Error('Body JSON 格式错误')
        }
      }
      
      // 添加日志
      setMessages(prev => [...prev, {
        type: 'info',
        content: `正在连接到 ${url}...`,
        timestamp: new Date().toISOString()
      }])
      
      // 发起请求
      const response = await fetch(url, {
        method,
        headers: parsedHeaders,
        body: parsedBody ? JSON.stringify(parsedBody) : undefined,
        signal: abortControllerRef.current.signal
      })
      
      const connectTime = Date.now() - startTimeRef.current
      setStats(prev => ({ ...prev, connectTime }))
      
      // 检查响应
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }
      
      const contentType = response.headers.get('content-type')
      setMessages(prev => [...prev, {
        type: 'success',
        content: `连接成功！Content-Type: ${contentType}`,
        timestamp: new Date().toISOString()
      }])
      
      // 检查是否是 SSE
      if (!contentType?.includes('text/event-stream')) {
        setMessages(prev => [...prev, {
          type: 'warning',
          content: `警告：响应类型不是 text/event-stream`,
          timestamp: new Date().toISOString()
        }])
      }
      
      // 读取流
      await readStream(response)
      
    } catch (error) {
      if (error.name !== 'AbortError') {
        setError(error.message)
        setMessages(prev => [...prev, {
          type: 'error',
          content: `错误：${error.message}`,
          timestamp: new Date().toISOString()
        }])
      }
    } finally {
      setIsConnected(false)
      abortControllerRef.current = null
    }
  }, [url, method, headers, body])

  // 读取 SSE 流
  const readStream = async (response) => {
    const reader = response.body?.getReader()
    if (!reader) {
      throw new Error('无法获取 reader')
    }
    
    const decoder = new TextDecoder()
    let buffer = ''
    let messageCount = 0
    let totalSize = 0
    
    try {
      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        
        const chunk = decoder.decode(value, { stream: true })
        buffer += chunk
        totalSize += chunk.length
        
        // 处理完整的行
        const lines = buffer.split('\n')
        buffer = lines.pop() || ''
        
        for (const line of lines) {
          if (line.trim() === '') continue
          
          // 记录原始行
          setMessages(prev => [...prev, {
            type: 'raw',
            content: line,
            timestamp: new Date().toISOString()
          }])
          
          // 解析 SSE 数据
          if (line.startsWith('data: ')) {
            const data = line.slice(6).trim()
            messageCount++
            
            if (data === '[DONE]') {
              setMessages(prev => [...prev, {
                type: 'info',
                content: '流结束标记：[DONE]',
                timestamp: new Date().toISOString()
              }])
              return
            }
            
            try {
              const parsed = JSON.parse(data)
              setMessages(prev => [...prev, {
                type: 'data',
                content: JSON.stringify(parsed, null, 2),
                parsed: parsed,
                timestamp: new Date().toISOString()
              }])
              
              // 更新统计
              setStats(prev => ({
                ...prev,
                messageCount,
                dataSize: totalSize,
                lastMessageTime: Date.now() - startTimeRef.current
              }))
              
            } catch (e) {
              setMessages(prev => [...prev, {
                type: 'warning',
                content: `无法解析 JSON: ${data}`,
                timestamp: new Date().toISOString()
              }])
            }
          }
          
          // 其他 SSE 字段
          if (line.startsWith('event: ')) {
            const event = line.slice(7).trim()
            setMessages(prev => [...prev, {
              type: 'event',
              content: `事件: ${event}`,
              timestamp: new Date().toISOString()
            }])
          }
          
          if (line.startsWith('id: ')) {
            const id = line.slice(4).trim()
            setMessages(prev => [...prev, {
              type: 'event',
              content: `ID: ${id}`,
              timestamp: new Date().toISOString()
            }])
          }
          
          if (line.startsWith('retry: ')) {
            const retry = line.slice(7).trim()
            setMessages(prev => [...prev, {
              type: 'event',
              content: `重试间隔: ${retry}ms`,
              timestamp: new Date().toISOString()
            }])
          }
        }
      }
    } finally {
      reader.releaseLock()
      setMessages(prev => [...prev, {
        type: 'info',
        content: '连接已关闭',
        timestamp: new Date().toISOString()
      }])
    }
  }

  // 断开连接
  const disconnect = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort()
      setMessages(prev => [...prev, {
        type: 'info',
        content: '用户主动断开连接',
        timestamp: new Date().toISOString()
      }])
    }
  }

  // 清空日志
  const clearLogs = () => {
    setMessages([])
    setError(null)
    setStats({
      connectTime: 0,
      messageCount: 0,
      dataSize: 0,
      lastMessageTime: 0
    })
  }

  // 导出日志
  const exportLogs = () => {
    const logsText = messages.map(msg => 
      `[${msg.timestamp}] ${msg.type.toUpperCase()}: ${msg.content}`
    ).join('\n')
    
    const blob = new Blob([logsText], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `sse-test-${new Date().toISOString()}.log`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-6 space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6">SSE 测试工具</h1>
        
        {/* 配置区域 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">URL</label>
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="http://localhost:3001/api/stream"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">方法</label>
              <select
                value={method}
                onChange={(e) => setMethod(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="GET">GET</option>
                <option value="POST">POST</option>
                <option value="PUT">PUT</option>
                <option value="PATCH">PATCH</option>
              </select>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Headers (JSON)</label>
              <textarea
                value={headers}
                onChange={(e) => setHeaders(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
                rows={4}
                placeholder='{"Authorization": "Bearer token"}'
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Body (JSON)</label>
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
                rows={4}
                placeholder='{"prompt": "test"}'
                disabled={method === 'GET'}
              />
            </div>
          </div>
        </div>
        
        {/* 控制按钮 */}
        <div className="flex gap-3 mb-6">
          {!isConnected ? (
            <button
              onClick={testConnection}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              开始测试
            </button>
          ) : (
            <button
              onClick={disconnect}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              断开连接
            </button>
          )}
          
          <button
            onClick={clearLogs}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            清空日志
          </button>
          
          <button
            onClick={exportLogs}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            disabled={messages.length === 0}
          >
            导出日志
          </button>
        </div>
        
        {/* 统计信息 */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-gray-50 p-3 rounded-lg">
            <div className="text-sm text-gray-600">连接时间</div>
            <div className="text-lg font-semibold">{stats.connectTime}ms</div>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <div className="text-sm text-gray-600">消息数量</div>
            <div className="text-lg font-semibold">{stats.messageCount}</div>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <div className="text-sm text-gray-600">数据大小</div>
            <div className="text-lg font-semibold">{(stats.dataSize / 1024).toFixed(2)}KB</div>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <div className="text-sm text-gray-600">持续时间</div>
            <div className="text-lg font-semibold">{(stats.lastMessageTime / 1000).toFixed(1)}s</div>
          </div>
        </div>
        
        {/* 错误显示 */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg mb-6">
            <strong>错误:</strong> {error}
          </div>
        )}
        
        {/* 日志区域 */}
        <div className="bg-gray-900 text-gray-100 rounded-lg p-4 h-96 overflow-y-auto font-mono text-sm">
          {messages.length === 0 ? (
            <div className="text-gray-500 text-center py-8">
              等待测试开始...
            </div>
          ) : (
            <div className="space-y-1">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`
                    ${msg.type === 'error' ? 'text-red-400' : ''}
                    ${msg.type === 'warning' ? 'text-yellow-400' : ''}
                    ${msg.type === 'success' ? 'text-green-400' : ''}
                    ${msg.type === 'info' ? 'text-blue-400' : ''}
                    ${msg.type === 'data' ? 'text-purple-400' : ''}
                    ${msg.type === 'event' ? 'text-cyan-400' : ''}
                    ${msg.type === 'raw' ? 'text-gray-500' : ''}
                  `}
                >
                  <span className="text-gray-600">[{new Date(msg.timestamp).toLocaleTimeString()}]</span>
                  {' '}
                  {msg.type === 'data' ? (
                    <details className="inline">
                      <summary className="cursor-pointer">
                        数据: {msg.parsed?.type || 'JSON'}
                      </summary>
                      <pre className="ml-4 mt-1">{msg.content}</pre>
                    </details>
                  ) : (
                    msg.content
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>
      </div>
      
      {/* 使用说明 */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="font-semibold mb-2">使用说明</h3>
        <ul className="text-sm space-y-1 list-disc list-inside">
          <li>输入你的 SSE 端点 URL 和认证信息</li>
          <li>点击"开始测试"连接到 SSE 服务</li>
          <li>实时查看接收到的消息和统计信息</li>
          <li>不同颜色代表不同类型的消息</li>
          <li>可以导出日志用于调试分析</li>
        </ul>
      </div>
    </div>
  )
}