import React, { useState } from 'react';
import { ChevronRight, Brain, PenTool, MessageSquare, TrendingUp, Shield, AlertCircle, Users } from 'lucide-react';

export const meta = {
  title: "AI+咨询顾问：专业性+写作+表达能力",
  description: "AI时代咨询服务转型的完整讲座内容",
  isHidden: false,
  category: "AI项目规划咨询",
  order: 2
};

const AiConsultingLecture: React.FC = () => {
  const [activeSection, setActiveSection] = useState('1.1');

  const sections = {
    '1.1': {
      title: '咨询行业的AI转型压力',
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-3">行业现状分析</h4>
            <div className="space-y-3">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                <h5 className="font-medium text-red-800 mb-1">效率瓶颈</h5>
                <p className="text-gray-700">传统咨询模式下，高质量交付依赖人力密集投入</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                <h5 className="font-medium text-orange-800 mb-1">知识管理困境</h5>
                <p className="text-gray-700">经验知识难以沉淀和复用</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                <h5 className="font-medium text-yellow-800 mb-1">客户期待升级</h5>
                <p className="text-gray-700">从方案设计到落地实施的全链条服务需求</p>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-3">AI带来的机遇</h4>
            <div className="space-y-3">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                <h5 className="font-medium text-green-800 mb-1">生产力革命</h5>
                <p className="text-gray-700">单位时间内的价值输出提升10倍</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                <h5 className="font-medium text-blue-800 mb-1">知识资产化</h5>
                <p className="text-gray-700">将专家经验转化为可复用的智能工具</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                <h5 className="font-medium text-purple-800 mb-1">服务边界拓展</h5>
                <p className="text-gray-700">从咨询到陪伴式实施的全周期服务</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    '1.2': {
      title: 'AI赋能的三大核心能力',
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <Brain className="w-8 h-8 text-blue-600 mr-3" />
              <h4 className="text-xl font-semibold text-gray-800">专业性增强</h4>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h5 className="font-medium text-gray-800 mb-2">知识图谱构建</h5>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• 行业知识库：整合产权交易、金融、法律等跨领域知识</li>
                  <li>• 案例经验库：历史项目的方法论提炼与模式识别</li>
                  <li>• 动态更新机制：持续学习最新政策、市场动态</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h5 className="font-medium text-gray-800 mb-2">智能分析能力</h5>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• 数据洞察：从海量数据中提取关键信息</li>
                  <li>• 趋势预测：基于历史数据的发展趋势分析</li>
                  <li>• 风险识别：潜在问题的提前预警</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <PenTool className="w-8 h-8 text-green-600 mr-3" />
              <h4 className="text-xl font-semibold text-gray-800">写作能力革新</h4>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h5 className="font-medium text-gray-800 mb-2">AI辅助写作系统</h5>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• 结构化思维：自动生成报告框架和逻辑结构</li>
                  <li>• 内容生成：基于模板的专业内容快速生成</li>
                  <li>• 多样化输出：方案、报告、演示材料的一键转换</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h5 className="font-medium text-gray-800 mb-2">质量保障机制</h5>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• 专业术语校验：确保行业术语使用准确</li>
                  <li>• 逻辑一致性检查：避免前后矛盾</li>
                  <li>• 合规性审核：自动检查法律法规符合性</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <MessageSquare className="w-8 h-8 text-purple-600 mr-3" />
              <h4 className="text-xl font-semibold text-gray-800">表达能力升级</h4>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h5 className="font-medium text-gray-800 mb-2">多模态呈现</h5>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• 数据可视化：复杂数据的直观展示</li>
                  <li>• 交互式报告：动态、可探索的分析结果</li>
                  <li>• 场景化演示：基于客户需求的定制化展示</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h5 className="font-medium text-gray-800 mb-2">沟通效率提升</h5>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• 智能问答：实时响应客户疑问</li>
                  <li>• 个性化方案：根据不同受众调整表达方式</li>
                  <li>• 多语言支持：跨地域业务的无障碍沟通</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    '1.3': {
      title: '咨询服务的四种场景与AI影响',
      content: (
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-gray-800 mb-4">场景分析矩阵</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <div className="flex items-center justify-between mb-3">
                <h5 className="font-semibold text-red-800">清楚问题型</h5>
                <span className="bg-red-600 text-white text-xs px-2 py-1 rounded">高风险</span>
              </div>
              <div className="space-y-2 text-sm">
                <p className="text-gray-700"><strong>特征：</strong>客户能详细描述问题但不知解决方案</p>
                <p className="text-red-700"><strong>AI影响：</strong>可大幅替代，标准化解决方案的快速匹配</p>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <div className="flex items-center justify-between mb-3">
                <h5 className="font-semibold text-green-800">只有目标型</h5>
                <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">安全</span>
              </div>
              <div className="space-y-2 text-sm">
                <p className="text-gray-700"><strong>特征：</strong>只有目标方向，需要大量沟通梳理</p>
                <p className="text-green-700"><strong>AI影响：</strong>仍需人工主导，AI辅助信息收集和方案设计</p>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-5">
              <div className="flex items-center justify-between mb-3">
                <h5 className="font-semibold text-orange-800">假设验证型</h5>
                <span className="bg-orange-600 text-white text-xs px-2 py-1 rounded">部分风险</span>
              </div>
              <div className="space-y-2 text-sm">
                <p className="text-gray-700"><strong>特征：</strong>有初步思路需要验证和背书</p>
                <p className="text-orange-700"><strong>AI影响：</strong>AI提供数据支撑，人工把控政治因素</p>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-5">
              <div className="flex items-center justify-between mb-3">
                <h5 className="font-semibold text-purple-800">陪跑顾问型</h5>
                <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded">需求增长</span>
              </div>
              <div className="space-y-2 text-sm">
                <p className="text-gray-700"><strong>特征：</strong>长期合作的教练式咨询</p>
                <p className="text-purple-700"><strong>AI影响：</strong>AI增强服务能力，但情感价值仍需人工传递</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    '1.4': {
      title: '咨询顾问的AI转型路径',
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-xl">
            <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <TrendingUp className="w-6 h-6 mr-2 text-indigo-600" />
              个人能力建设
            </h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h5 className="font-medium text-indigo-700 mb-2">AI工具掌握</h5>
                <p className="text-sm text-gray-600">ChatGPT、Claude、专业分析工具的熟练使用</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h5 className="font-medium text-indigo-700 mb-2">提示工程能力</h5>
                <p className="text-sm text-gray-600">如何与AI高效协作</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h5 className="font-medium text-indigo-700 mb-2">复合思维培养</h5>
                <p className="text-sm text-gray-600">业务+技术+AI的三维能力</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-xl">
            <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <Users className="w-6 h-6 mr-2 text-green-600" />
              团队协作模式
            </h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h5 className="font-medium text-green-700 mb-2">人机协同工作流</h5>
                <p className="text-sm text-gray-600">明确人工和AI的分工界面</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h5 className="font-medium text-green-700 mb-2">知识管理平台</h5>
                <p className="text-sm text-gray-600">团队经验的数字化沉淀</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h5 className="font-medium text-green-700 mb-2">质量控制体系</h5>
                <p className="text-sm text-gray-600">AI输出的人工审核机制</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-100 to-red-100 border-2 border-red-300 text-gray-900 p-6 rounded-xl text-center">
            <h4 className="text-xl font-bold mb-2 text-red-700">🔥 核心洞察</h4>
            <p className="text-lg font-semibold text-red-800">咨询本身是有温度的！</p>
            <p className="text-sm mt-2 text-gray-700">咨询可以传导情感价值和情绪价值，这是AI短期内无法做到的</p>
          </div>
        </div>
      )
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 头部导航 */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-800">AI+咨询顾问：专业性+写作+表达能力</h1>
          <p className="text-gray-600 mt-1">第一部分：AI时代咨询能力的进化（25分钟）</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* 左侧导航 */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-4 sticky top-4">
              <h3 className="font-semibold text-gray-800 mb-4">课程大纲</h3>
              <nav className="space-y-2">
                {Object.entries(sections).map(([key, section]) => (
                  <button
                    key={key}
                    onClick={() => setActiveSection(key)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      activeSection === key
                        ? 'bg-blue-50 text-blue-700 font-medium'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center">
                      <span className="mr-2">{key}</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                    <div className="text-sm mt-1">{section.title}</div>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* 右侧内容区 */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                {activeSection} {sections[activeSection].title}
              </h2>
              {sections[activeSection].content}
            </div>

            {/* 原始图表 */}
            <div className="mt-8 bg-white rounded-lg shadow-sm p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">咨询基础逻辑与知识库关系图</h3>
              <div className="w-full flex items-center justify-center">
                <svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[900px]">
                  <defs>
                    <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor:'#3498db',stopOpacity:1}} />
                      <stop offset="100%" style={{stopColor:'#2980b9',stopOpacity:1}} />
                    </linearGradient>
                    <linearGradient id="redGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor:'#e74c3c',stopOpacity:1}} />
                      <stop offset="100%" style={{stopColor:'#c0392b',stopOpacity:1}} />
                    </linearGradient>
                    <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor:'#27ae60',stopOpacity:1}} />
                      <stop offset="100%" style={{stopColor:'#229954',stopOpacity:1}} />
                    </linearGradient>
                    <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor:'#9b59b6',stopOpacity:1}} />
                      <stop offset="100%" style={{stopColor:'#8e44ad',stopOpacity:1}} />
                    </linearGradient>
                    <filter id="shadow">
                      <feDropShadow dx="2" dy="2" stdDeviation="3" floodColor="rgba(0,0,0,0.3)"/>
                    </filter>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="#2c3e50" />
                    </marker>
                  </defs>
                  
                  <rect width="1200" height="800" fill="#f8f9fa"/>
                  
                  <text x="600" y="40" textAnchor="middle" fontFamily="Microsoft YaHei, Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#2c3e50">咨询基础逻辑与知识库关系图</text>
                  
                  <rect x="50" y="200" width="160" height="120" rx="10" fill="url(#redGrad)" filter="url(#shadow)"/>
                  <text x="130" y="240" textAnchor="middle" fontFamily="Microsoft YaHei" fontSize="14" fontWeight="bold" fill="white">行业知识库</text>
                  <text x="130" y="260" textAnchor="middle" fontFamily="Microsoft YaHei" fontSize="11" fill="white">Industry Knowledge</text>
                  <text x="130" y="280" textAnchor="middle" fontFamily="Microsoft YaHei" fontSize="10" fill="white">行业和业务理解</text>
                  <text x="130" y="295" textAnchor="middle" fontFamily="Microsoft YaHei" fontSize="10" fill="white">最佳实践积累</text>
                  
                  <rect x="50" y="350" width="160" height="120" rx="10" fill="url(#redGrad)" filter="url(#shadow)"/>
                  <text x="130" y="390" textAnchor="middle" fontFamily="Microsoft YaHei" fontSize="14" fontWeight="bold" fill="white">个人经验库</text>
                  <text x="130" y="410" textAnchor="middle" fontFamily="Microsoft YaHei" fontSize="11" fill="white">Personal Experience</text>
                  <text x="130" y="430" textAnchor="middle" fontFamily="Microsoft YaHei" fontSize="10" fill="white">咨询方法论</text>
                  <text x="130" y="445" textAnchor="middle" fontFamily="Microsoft YaHei" fontSize="10" fill="white">经验模式库</text>
                  
                  <rect x="300" y="120" width="200" height="140" rx="10" fill="url(#blueGrad)" filter="url(#shadow)"/>
                  <text x="400" y="145" textAnchor="middle" fontFamily="Microsoft YaHei" fontSize="16" fontWeight="bold" fill="white">问题定义</text>
                  <text x="400" y="165" textAnchor="middle" fontFamily="Microsoft YaHei" fontSize="12" fill="white">Problem Definition</text>
                  <text x="310" y="185" fontFamily="Microsoft YaHei" fontSize="11" fill="white">• 现状调研</text>
                  <text x="310" y="200" fontFamily="Microsoft YaHei" fontSize="11" fill="white">• 人员访谈</text>
                  <text x="310" y="215" fontFamily="Microsoft YaHei" fontSize="11" fill="white">• 资料收集</text>
                  <text x="310" y="230" fontFamily="Microsoft YaHei" fontSize="11" fill="white">• 问题诊断定义</text>
                  <text x="310" y="245" fontFamily="Microsoft YaHei" fontSize="11" fill="white">• 沟通交互</text>
                  
                  <rect x="550" y="120" width="200" height="140" rx="10" fill="url(#greenGrad)" filter="url(#shadow)"/>
                  <text x="650" y="145" textAnchor="middle" fontFamily="Microsoft YaHei" fontSize="16" fontWeight="bold" fill="white">问题分析</text>
                  <text x="650" y="165" textAnchor="middle" fontFamily="Microsoft YaHei" fontSize="12" fill="white">Problem Analysis</text>
                  <text x="560" y="185" fontFamily="Microsoft YaHei" fontSize="11" fill="white">• 业界对标</text>
                  <text x="560" y="200" fontFamily="Microsoft YaHei" fontSize="11" fill="white">• 差距分析</text>
                  <text x="560" y="215" fontFamily="Microsoft YaHei" fontSize="11" fill="white">• 解决方案设计</text>
                  <text x="560" y="230" fontFamily="Microsoft YaHei" fontSize="11" fill="white">• 架构规划</text>
                  <text x="560" y="245" fontFamily="Microsoft YaHei" fontSize="11" fill="white">• 总体设计</text>
                  
                  <rect x="800" y="120" width="200" height="140" rx="10" fill="url(#purpleGrad)" filter="url(#shadow)"/>
                  <text x="900" y="145" textAnchor="middle" fontFamily="Microsoft YaHei" fontSize="16" fontWeight="bold" fill="white">问题解决</text>
                  <text x="900" y="165" textAnchor="middle" fontFamily="Microsoft YaHei" fontSize="12" fill="white">Problem Solving</text>
                  <text x="810" y="185" fontFamily="Microsoft YaHei" fontSize="11" fill="white">• 演进路线</text>
                  <text x="810" y="200" fontFamily="Microsoft YaHei" fontSize="11" fill="white">• 实施计划</text>
                  <text x="810" y="215" fontFamily="Microsoft YaHei" fontSize="11" fill="white">• 建设+执行+监督</text>
                  <text x="810" y="230" fontFamily="Microsoft YaHei" fontSize="11" fill="white">• 跟踪落地</text>
                  <text x="810" y="245" fontFamily="Microsoft YaHei" fontSize="11" fill="white">• 复盘总结</text>
                  
                  <path d="M 210 240 Q 250 200 300 180" stroke="#2c3e50" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>
                  <path d="M 210 390 Q 250 350 300 220" stroke="#2c3e50" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>
                  <path d="M 210 260 Q 380 280 550 200" stroke="#2c3e50" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>
                  <path d="M 210 370 Q 380 320 550 220" stroke="#2c3e50" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>
                  <path d="M 500 190 L 550 190" stroke="#2c3e50" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)"/>
                  <path d="M 750 190 L 800 190" stroke="#2c3e50" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)"/>
                  <path d="M 800 240 Q 600 350 210 280" stroke="#e74c3c" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" strokeDasharray="5,5"/>
                  <path d="M 800 250 Q 600 400 210 420" stroke="#e74c3c" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" strokeDasharray="5,5"/>
                  
                  <text x="250" y="170" fontFamily="Microsoft YaHei" fontSize="10" fill="#2c3e50">知识输入</text>
                  <text x="450" y="170" fontFamily="Microsoft YaHei" fontSize="10" fill="#2c3e50">定义完成</text>
                  <text x="700" y="170" fontFamily="Microsoft YaHei" fontSize="10" fill="#2c3e50">方案确定</text>
                  <text x="500" y="320" fontFamily="Microsoft YaHei" fontSize="10" fill="#e74c3c">复盘入库</text>
                  
                  <rect x="50" y="520" width="1100" height="240" rx="10" fill="#ecf0f1" stroke="#bdc3c7" strokeWidth="2"/>
                  <text x="600" y="545" textAnchor="middle" fontFamily="Microsoft YaHei" fontSize="18" fontWeight="bold" fill="#2c3e50">AI时代四种咨询场景影响分析</text>
                  
                  <rect x="80" y="570" width="240" height="90" rx="8" fill="#ffe6e6" stroke="#e74c3c" strokeWidth="2"/>
                  <rect x="85" y="575" width="60" height="20" rx="10" fill="#e74c3c"/>
                  <text x="115" y="588" textAnchor="middle" fontFamily="Microsoft YaHei" fontSize="10" fontWeight="bold" fill="white">高风险</text>
                  <text x="200" y="610" textAnchor="middle" fontFamily="Microsoft YaHei" fontSize="12" fontWeight="bold" fill="#2c3e50">清楚问题型</text>
                  <text x="85" y="625" fontFamily="Microsoft YaHei" fontSize="9" fill="#2c3e50">能详细描述现状和问题</text>
                  <text x="85" y="638" fontFamily="Microsoft YaHei" fontSize="9" fill="#2c3e50">但不知道解决方案</text>
                  <text x="85" y="651" fontFamily="Microsoft YaHei" fontSize="9" fill="#e74c3c" fontWeight="bold">AI可大幅替代</text>
                  
                  <rect x="340" y="570" width="240" height="90" rx="8" fill="#e6ffe6" stroke="#27ae60" strokeWidth="2"/>
                  <rect x="345" y="575" width="40" height="20" rx="10" fill="#27ae60"/>
                  <text x="365" y="588" textAnchor="middle" fontFamily="Microsoft YaHei" fontSize="10" fontWeight="bold" fill="white">安全</text>
                  <text x="460" y="610" textAnchor="middle" fontFamily="Microsoft YaHei" fontSize="12" fontWeight="bold" fill="#2c3e50">只有目标型</text>
                  <text x="345" y="625" fontFamily="Microsoft YaHei" fontSize="9" fill="#2c3e50">只有目标，不清楚分析过程</text>
                  <text x="345" y="638" fontFamily="Microsoft YaHei" fontSize="9" fill="#2c3e50">涉及大量人际沟通</text>
                  <text x="345" y="651" fontFamily="Microsoft YaHei" fontSize="9" fill="#27ae60" fontWeight="bold">仍是核心价值所在</text>
                  
                  <rect x="600" y="570" width="240" height="90" rx="8" fill="#fff4e6" stroke="#f39c12" strokeWidth="2"/>
                  <rect x="605" y="575" width="70" height="20" rx="10" fill="#f39c12"/>
                  <text x="640" y="588" textAnchor="middle" fontFamily="Microsoft YaHei" fontSize="10" fontWeight="bold" fill="white">部分风险</text>
                  <text x="720" y="610" textAnchor="middle" fontFamily="Microsoft YaHei" fontSize="12" fontWeight="bold" fill="#2c3e50">假设验证型</text>
                  <text x="605" y="625" fontFamily="Microsoft YaHei" fontSize="9" fill="#2c3e50">有思路但需验证正确性</text>
                  <text x="605" y="638" fontFamily="Microsoft YaHei" fontSize="9" fill="#2c3e50">涉及权力政治因素</text>
                  <text x="605" y="651" fontFamily="Microsoft YaHei" fontSize="9" fill="#f39c12" fontWeight="bold">第三方背锅仍需人工</text>
                  
                  <rect x="860" y="570" width="240" height="90" rx="8" fill="#f4e6ff" stroke="#9b59b6" strokeWidth="2"/>
                  <rect x="865" y="575" width="70" height="20" rx="10" fill="#9b59b6"/>
                  <text x="900" y="588" textAnchor="middle" fontFamily="Microsoft YaHei" fontSize="10" fontWeight="bold" fill="white">需求增长</text>
                  <text x="980" y="610" textAnchor="middle" fontFamily="Microsoft YaHei" fontSize="12" fontWeight="bold" fill="#2c3e50">陪跑顾问型</text>
                  <text x="865" y="625" fontFamily="Microsoft YaHei" fontSize="9" fill="#2c3e50">长期合作教练式咨询</text>
                  <text x="865" y="638" fontFamily="Microsoft YaHei" fontSize="9" fill="#2c3e50">涉及情感价值传递</text>
                  <text x="865" y="651" fontFamily="Microsoft YaHei" fontSize="9" fill="#9b59b6" fontWeight="bold">需求量会越来越多</text>
                  
                  <rect x="200" y="680" width="800" height="50" rx="25" fill="url(#redGrad)" filter="url(#shadow)"/>
                  <text x="600" y="700" textAnchor="middle" fontFamily="Microsoft YaHei" fontSize="14" fontWeight="bold" fill="white">🔥 核心洞察：咨询本身是有温度的！</text>
                  <text x="600" y="715" textAnchor="middle" fontFamily="Microsoft YaHei" fontSize="12" fill="white">咨询可以传导情感价值和情绪价值，这是AI短期内无法做到的</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiConsultingLecture;