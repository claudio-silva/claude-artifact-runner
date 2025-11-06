import React, { useState, useEffect, useCallback } from 'react';
import { Eye, EyeOff, RefreshCw, Lock, User, Shield, CheckCircle, AlertCircle} from 'lucide-react';
import { DESEncryption } from '../../lib/des-encryption.js';

const PMISLoginTool = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    validateCode: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [captchaUrl, setCaptchaUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [sessionId, setSessionId] = useState('');
  const [sessionInfo, setSessionInfo] = useState('');

  // 检测运行环境
  const isLocalDev = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  const proxyUrl = isLocalDev ? 'http://localhost:3001/api' : '/.netlify/functions';

  // 消息显示函数
  const showMessage = useCallback((msg, type = 'info') => {
    setMessage(msg);
    setMessageType(type);
    setTimeout(() => {
      setMessage('');
      setMessageType('');
    }, 5000);
  }, []);

  // 获取验证码
  const refreshCaptcha = useCallback(async () => {
    try {
      const timestamp = new Date().getTime();
      let response;
      
      console.log('正在获取验证码...');
      
      if (isLocalDev) {
        // 本地开发环境 - 直接请求Express代理服务器
        const url = sessionId 
          ? `${proxyUrl}/pmis-captcha?t=${timestamp}&sessionId=${sessionId}`
          : `${proxyUrl}/pmis-captcha?t=${timestamp}`;
        response = await fetch(url, {
          method: 'GET',
        });
      } else {
        // 生产环境 - 使用Netlify函数
        response = await fetch(`${proxyUrl}/pmis-proxy?action=captcha&t=${timestamp}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            action: 'captcha'
          })
        });
      }

      if (response.ok) {
        // 检查内容类型
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('image/jpeg')) {
          // 直接使用图片响应
          const imageBlob = await response.blob();
          const imageUrl = URL.createObjectURL(imageBlob);
          setCaptchaUrl(imageUrl);
          
          // 获取会话ID和cookies信息
          const newSessionId = response.headers.get('X-Session-ID');
          const sessionCookies = response.headers.get('X-Session-Cookies');
          
          console.log('响应头中的Session ID:', newSessionId);
          console.log('响应头中的Session Cookies:', sessionCookies);
          
          if (newSessionId) {
            setSessionId(newSessionId);
            setSessionInfo('会话已建立');
            console.log('设置会话ID:', newSessionId);
            showMessage('验证码获取成功，会话已建立', 'success');
          } else {
            console.warn('未从响应头获取到Session ID');
            showMessage('验证码获取成功，但会话建立失败', 'error');
          }
        } else {
          // 处理JSON错误响应
          const result = await response.json();
          showMessage('获取验证码失败: ' + (result.error || '未知错误'), 'error');
        }
      } else {
        showMessage('获取验证码失败，请检查网络连接', 'error');
      }
    } catch (error) {
      console.error('获取验证码错误:', error);
      showMessage('获取验证码失败，请检查网络连接或代理服务器', 'error');
    }
  }, [isLocalDev, proxyUrl, showMessage]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleLogin = useCallback(async () => {
    
    if (!formData.username.trim()) {
      showMessage('请填写用户名', 'error');
      return;
    }
    
    if (!formData.password.trim()) {
      showMessage('请填写密码', 'error');
      return;
    }
    
    if (!formData.validateCode.trim()) {
      showMessage('请填写验证码', 'error');
      return;
    }

    if (!sessionId) {
      showMessage('请先获取验证码', 'error');
      return;
    }

    setLoading(true);
    
    try {
      // 检查用户名长度和非法字符
      const cleanUsername = formData.username.replace(/\s+/g, "");
      const pattern = /[`~!@#$^&*()=|{}':;',\\[\].<>/?~！@#￥……&*（）——|{}【】'；：""'。，、？]/;
      
      if (pattern.test(cleanUsername)) {
        showMessage('输入包含非法字符串，请重新输入！', 'error');
        setLoading(false);
        return;
      }
      
      if (cleanUsername.length > 50) {
        showMessage('您输入的用户名过长，不能超过50位', 'error');
        setLoading(false);
        return;
      }
      
      if (formData.password.length > 50) {
        showMessage('您输入的密码过长，不能超过50位', 'error');
        setLoading(false);
        return;
      }

      console.log('开始登录，会话ID:', sessionId);

      // DES加密用户名和密码
      const encryptedUsername = DESEncryption.strEnc(cleanUsername, '3', '2', '1');
      const encryptedPassword = DESEncryption.strEnc(formData.password, 'A', 'B', 'C');

      console.log('加密后的用户名:', encryptedUsername);
      console.log('加密后的密码:', encryptedPassword);

      // 通过代理发送登录请求
      let response;
      if (isLocalDev) {
        // 本地开发环境
        response = await fetch(`${proxyUrl}/pmis-login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: encryptedUsername,
            password: encryptedPassword,
            validateCode: formData.validateCode,
            rememberMe: formData.rememberMe,
            sessionId: sessionId // 传递会话ID
          })
        });
      } else {
        // 生产环境 - Netlify函数
        response = await fetch(`${proxyUrl}/pmis-proxy`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            action: 'login',
            data: {
              username: encryptedUsername,
              password: encryptedPassword,
              validateCode: formData.validateCode,
              rememberMe: formData.rememberMe,
              sessionId: sessionId
            }
          })
        });
      }

      const result = await response.json();
      console.log('登录响应:', result);
      
      if (result.success && result.status === 200) {
        if (result.loginSuccess) {
          // 登录成功
          showMessage('登录成功！正在跳转...', 'success');
          setSessionInfo('登录成功');
          
          // 保存登录状态和cookies
          if (result.cookies) {
            localStorage.setItem('pmis_session', JSON.stringify(result.cookies));
            console.log('登录成功，session已保存');
          }
          
          // 跳转到PMIS系统
          setTimeout(() => {
            window.open('https://pmis.gmcc.net/a', '_blank');
          }, 2000);
        } else {
          // 登录失败，分析原因
          if (result.html.includes('验证码不正确') || result.html.includes('验证码')) {
            showMessage('验证码错误，请重新输入', 'error');
            refreshCaptcha(); // 自动刷新验证码
          } else if (result.html.includes('用户名或密码错误') || result.html.includes('密码')) {
            showMessage('用户名或密码错误', 'error');
          } else {
            showMessage('登录失败，请检查输入信息', 'error');
          }
        }
      } else {
        showMessage(`登录失败: ${result.error || result.message || '未知错误'}`, 'error');
      }
      
    } catch (error) {
      console.error('登录错误:', error);
      showMessage('网络错误，请检查网络连接', 'error');
    } finally {
      setLoading(false);
    }
  }, [formData, sessionId, isLocalDev, proxyUrl, showMessage, refreshCaptcha]);

  // 初始化获取验证码
  useEffect(() => {
    refreshCaptcha();
  }, [refreshCaptcha]);

  // 键盘事件监听
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Enter' && !loading) {
        handleLogin();
      }
      if (e.key === 'F5' || (e.ctrlKey && e.key === 'r')) {
        e.preventDefault();
        refreshCaptcha();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleLogin, refreshCaptcha, loading]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white text-center">
          <div className="flex items-center justify-center mb-2">
            <Shield className="w-8 h-8 mr-2" />
            <h1 className="text-2xl font-bold">PMIS登录工具</h1>
          </div>
          <p className="text-blue-100">中移全生命周期流程辅助系统</p>
        </div>

        {/* Form */}
        <div className="p-6">
          {message && (
            <div className={`mb-4 p-3 rounded-lg text-sm flex items-center ${
              messageType === 'error' 
                ? 'bg-red-100 text-red-700 border border-red-200' 
                : messageType === 'success'
                ? 'bg-green-100 text-green-700 border border-green-200'
                : 'bg-blue-100 text-blue-700 border border-blue-200'
            }`}>
              {messageType === 'error' && <AlertCircle className="w-4 h-4 mr-2" />}
              {messageType === 'success' && <CheckCircle className="w-4 h-4 mr-2" />}
              {message}
            </div>
          )}

          <div className="space-y-4">
            {/* Username */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <User className="w-4 h-4 inline mr-1" />
                用户名
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="请输入用户名"
                maxLength={50}
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Lock className="w-4 h-4 inline mr-1" />
                密码
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="请输入密码"
                  maxLength={50}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Captcha */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                验证码
              </label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  name="validateCode"
                  value={formData.validateCode}
                  onChange={handleInputChange}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="请输入验证码"
                  maxLength={5}
                  required
                />
                <div className="flex items-center space-x-2">
                  {captchaUrl && (
                    <img
                      src={captchaUrl}
                      alt="验证码"
                      className="h-10 border border-gray-300 rounded cursor-pointer hover:border-blue-400"
                      onClick={refreshCaptcha}
                      title="点击刷新验证码"
                    />
                  )}
                  <button
                    type="button"
                    onClick={refreshCaptcha}
                    className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-all"
                    title="刷新验证码"
                  >
                    <RefreshCw className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-1">点击图片或刷新按钮可更换验证码</p>
            </div>

            {/* Remember Me */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleInputChange}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-700">
                记住密码 <span className="text-gray-500">(公共场所慎用，一个月内自动登录)</span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="button"
              onClick={handleLogin}
              disabled={loading || !sessionId}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 px-4 rounded-lg hover:from-blue-700 hover:to-indigo-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                  登录中...
                </div>
              ) : (
                '登 录'
              )}
            </button>
          </div>

          <div className="mt-6 text-center text-xs text-gray-500">
            <p>* 如果您使用公用电脑请勿勾选记住密码</p>
            <p className="mt-2">PMIS系统登录辅助工具 v2.1</p>
            
            {/* 会话状态显示 */}
            <div className="mt-3 p-3 bg-blue-50 rounded-lg">
              <p className="text-blue-700 font-medium mb-1">功能说明:</p>
              <ul className="text-blue-600 text-left space-y-1">
                <li>• 支持完整DES加密算法</li>
                <li>• 智能会话管理</li>
                <li>• 自动验证码处理</li>
                <li>• 安全的跨域代理请求</li>
              </ul>
              
              {/* 会话状态 */}
              <div className="mt-2 pt-2 border-t border-blue-200">
                <div className="flex items-center justify-between text-xs">
                  <span>会话状态:</span>
                  <span className={`font-medium ${sessionId ? 'text-green-600' : 'text-red-600'}`}>
                    {sessionId ? '已连接' : '未连接'}
                  </span>
                </div>
                {sessionId && (
                  <div className="mt-1 text-xs text-gray-600">
                    ID: {sessionId.substring(sessionId.length - 8)}
                  </div>
                )}
                {sessionInfo && (
                  <div className="mt-1 text-xs text-green-600">
                    {sessionInfo}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const meta = {
  title: "PMIS登录工具",
  description: "中移全生命周期流程辅助系统登录工具，支持DES加密和验证码识别",
  isHidden: false,
  category: "企业工具",
  order: 1
};

export default PMISLoginTool;