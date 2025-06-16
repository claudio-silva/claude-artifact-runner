import React from 'react';

export const meta = {
  title: "咨询基础逻辑与知识库关系图",
  description: "AI时代咨询服务的基础逻辑分析与知识库关系可视化",
  isHidden: false,
  category: "AI项目规划咨询",
  order: 1
};

const AiConsultingAnalysis: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-50 p-4">
      <svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-w-[1200px] max-h-[800px]">
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
        
        {/* 背景 */}
        <rect width="1200" height="800" fill="#f8f9fa"/>
        
        {/* 标题 */}
        <text x="600" y="40" textAnchor="middle" fontFamily="Microsoft YaHei, Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#2c3e50">咨询基础逻辑与知识库关系图</text>
        
        {/* 知识库区域 */}
        {/* 行业知识库 */}
        <rect x="50" y="200" width="160" height="120" rx="10" fill="url(#redGrad)" filter="url(#shadow)"/>
        <text x="130" y="240" textAnchor="middle" fontFamily="Microsoft YaHei" fontSize="14" fontWeight="bold" fill="white">行业知识库</text>
        <text x="130" y="260" textAnchor="middle" fontFamily="Microsoft YaHei" fontSize="11" fill="white">Industry Knowledge</text>
        <text x="130" y="280" textAnchor="middle" fontFamily="Microsoft YaHei" fontSize="10" fill="white">行业和业务理解</text>
        <text x="130" y="295" textAnchor="middle" fontFamily="Microsoft YaHei" fontSize="10" fill="white">最佳实践积累</text>
        
        {/* 个人经验库 */}
        <rect x="50" y="350" width="160" height="120" rx="10" fill="url(#redGrad)" filter="url(#shadow)"/>
        <text x="130" y="390" textAnchor="middle" fontFamily="Microsoft YaHei" fontSize="14" fontWeight="bold" fill="white">个人经验库</text>
        <text x="130" y="410" textAnchor="middle" fontFamily="Microsoft YaHei" fontSize="11" fill="white">Personal Experience</text>
        <text x="130" y="430" textAnchor="middle" fontFamily="Microsoft YaHei" fontSize="10" fill="white">咨询方法论</text>
        <text x="130" y="445" textAnchor="middle" fontFamily="Microsoft YaHei" fontSize="10" fill="white">经验模式库</text>
        
        {/* 咨询三阶段 */}
        {/* 问题定义 */}
        <rect x="300" y="120" width="200" height="140" rx="10" fill="url(#blueGrad)" filter="url(#shadow)"/>
        <text x="400" y="145" textAnchor="middle" fontFamily="Microsoft YaHei" fontSize="16" fontWeight="bold" fill="white">问题定义</text>
        <text x="400" y="165" textAnchor="middle" fontFamily="Microsoft YaHei" fontSize="12" fill="white">Problem Definition</text>
        <text x="310" y="185" fontFamily="Microsoft YaHei" fontSize="11" fill="white">• 现状调研</text>
        <text x="310" y="200" fontFamily="Microsoft YaHei" fontSize="11" fill="white">• 人员访谈</text>
        <text x="310" y="215" fontFamily="Microsoft YaHei" fontSize="11" fill="white">• 资料收集</text>
        <text x="310" y="230" fontFamily="Microsoft YaHei" fontSize="11" fill="white">• 问题诊断定义</text>
        <text x="310" y="245" fontFamily="Microsoft YaHei" fontSize="11" fill="white">• 沟通交互</text>
        
        {/* 问题分析 */}
        <rect x="550" y="120" width="200" height="140" rx="10" fill="url(#greenGrad)" filter="url(#shadow)"/>
        <text x="650" y="145" textAnchor="middle" fontFamily="Microsoft YaHei" fontSize="16" fontWeight="bold" fill="white">问题分析</text>
        <text x="650" y="165" textAnchor="middle" fontFamily="Microsoft YaHei" fontSize="12" fill="white">Problem Analysis</text>
        <text x="560" y="185" fontFamily="Microsoft YaHei" fontSize="11" fill="white">• 业界对标</text>
        <text x="560" y="200" fontFamily="Microsoft YaHei" fontSize="11" fill="white">• 差距分析</text>
        <text x="560" y="215" fontFamily="Microsoft YaHei" fontSize="11" fill="white">• 解决方案设计</text>
        <text x="560" y="230" fontFamily="Microsoft YaHei" fontSize="11" fill="white">• 架构规划</text>
        <text x="560" y="245" fontFamily="Microsoft YaHei" fontSize="11" fill="white">• 总体设计</text>
        
        {/* 问题解决 */}
        <rect x="800" y="120" width="200" height="140" rx="10" fill="url(#purpleGrad)" filter="url(#shadow)"/>
        <text x="900" y="145" textAnchor="middle" fontFamily="Microsoft YaHei" fontSize="16" fontWeight="bold" fill="white">问题解决</text>
        <text x="900" y="165" textAnchor="middle" fontFamily="Microsoft YaHei" fontSize="12" fill="white">Problem Solving</text>
        <text x="810" y="185" fontFamily="Microsoft YaHei" fontSize="11" fill="white">• 演进路线</text>
        <text x="810" y="200" fontFamily="Microsoft YaHei" fontSize="11" fill="white">• 实施计划</text>
        <text x="810" y="215" fontFamily="Microsoft YaHei" fontSize="11" fill="white">• 建设+执行+监督</text>
        <text x="810" y="230" fontFamily="Microsoft YaHei" fontSize="11" fill="white">• 跟踪落地</text>
        <text x="810" y="245" fontFamily="Microsoft YaHei" fontSize="11" fill="white">• 复盘总结</text>
        
        {/* 箭头连线 */}
        {/* 知识库到问题定义的输入 */}
        <path d="M 210 240 Q 250 200 300 180" stroke="#2c3e50" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>
        <path d="M 210 390 Q 250 350 300 220" stroke="#2c3e50" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>
        
        {/* 知识库到问题分析的输入 */}
        <path d="M 210 260 Q 380 280 550 200" stroke="#2c3e50" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>
        <path d="M 210 370 Q 380 320 550 220" stroke="#2c3e50" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>
        
        {/* 问题定义到问题分析 */}
        <path d="M 500 190 L 550 190" stroke="#2c3e50" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)"/>
        
        {/* 问题分析到问题解决 */}
        <path d="M 750 190 L 800 190" stroke="#2c3e50" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)"/>
        
        {/* 问题解决的复盘结果回到知识库 */}
        <path d="M 800 240 Q 600 350 210 280" stroke="#e74c3c" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" strokeDasharray="5,5"/>
        <path d="M 800 250 Q 600 400 210 420" stroke="#e74c3c" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" strokeDasharray="5,5"/>
        
        {/* 标注文字 */}
        <text x="250" y="170" fontFamily="Microsoft YaHei" fontSize="10" fill="#2c3e50">知识输入</text>
        <text x="450" y="170" fontFamily="Microsoft YaHei" fontSize="10" fill="#2c3e50">定义完成</text>
        <text x="700" y="170" fontFamily="Microsoft YaHei" fontSize="10" fill="#2c3e50">方案确定</text>
        <text x="500" y="320" fontFamily="Microsoft YaHei" fontSize="10" fill="#e74c3c">复盘入库</text>
        
        {/* AI时代影响分析区域 */}
        <rect x="50" y="520" width="1100" height="240" rx="10" fill="#ecf0f1" stroke="#bdc3c7" strokeWidth="2"/>
        <text x="600" y="545" textAnchor="middle" fontFamily="Microsoft YaHei" fontSize="18" fontWeight="bold" fill="#2c3e50">AI时代四种咨询场景影响分析</text>
        
        {/* 四种场景 */}
        {/* 清楚问题型 */}
        <rect x="80" y="570" width="240" height="90" rx="8" fill="#ffe6e6" stroke="#e74c3c" strokeWidth="2"/>
        <rect x="85" y="575" width="60" height="20" rx="10" fill="#e74c3c"/>
        <text x="115" y="588" textAnchor="middle" fontFamily="Microsoft YaHei" fontSize="10" fontWeight="bold" fill="white">高风险</text>
        <text x="200" y="610" textAnchor="middle" fontFamily="Microsoft YaHei" fontSize="12" fontWeight="bold" fill="#2c3e50">清楚问题型</text>
        <text x="85" y="625" fontFamily="Microsoft YaHei" fontSize="9" fill="#2c3e50">能详细描述现状和问题</text>
        <text x="85" y="638" fontFamily="Microsoft YaHei" fontSize="9" fill="#2c3e50">但不知道解决方案</text>
        <text x="85" y="651" fontFamily="Microsoft YaHei" fontSize="9" fill="#e74c3c" fontWeight="bold">AI可大幅替代</text>
        
        {/* 只有目标型 */}
        <rect x="340" y="570" width="240" height="90" rx="8" fill="#e6ffe6" stroke="#27ae60" strokeWidth="2"/>
        <rect x="345" y="575" width="40" height="20" rx="10" fill="#27ae60"/>
        <text x="365" y="588" textAnchor="middle" fontFamily="Microsoft YaHei" fontSize="10" fontWeight="bold" fill="white">安全</text>
        <text x="460" y="610" textAnchor="middle" fontFamily="Microsoft YaHei" fontSize="12" fontWeight="bold" fill="#2c3e50">只有目标型</text>
        <text x="345" y="625" fontFamily="Microsoft YaHei" fontSize="9" fill="#2c3e50">只有目标，不清楚分析过程</text>
        <text x="345" y="638" fontFamily="Microsoft YaHei" fontSize="9" fill="#2c3e50">涉及大量人际沟通</text>
        <text x="345" y="651" fontFamily="Microsoft YaHei" fontSize="9" fill="#27ae60" fontWeight="bold">仍是核心价值所在</text>
        
        {/* 假设验证型 */}
        <rect x="600" y="570" width="240" height="90" rx="8" fill="#fff4e6" stroke="#f39c12" strokeWidth="2"/>
        <rect x="605" y="575" width="70" height="20" rx="10" fill="#f39c12"/>
        <text x="640" y="588" textAnchor="middle" fontFamily="Microsoft YaHei" fontSize="10" fontWeight="bold" fill="white">部分风险</text>
        <text x="720" y="610" textAnchor="middle" fontFamily="Microsoft YaHei" fontSize="12" fontWeight="bold" fill="#2c3e50">假设验证型</text>
        <text x="605" y="625" fontFamily="Microsoft YaHei" fontSize="9" fill="#2c3e50">有思路但需验证正确性</text>
        <text x="605" y="638" fontFamily="Microsoft YaHei" fontSize="9" fill="#2c3e50">涉及权力政治因素</text>
        <text x="605" y="651" fontFamily="Microsoft YaHei" fontSize="9" fill="#f39c12" fontWeight="bold">第三方背锅仍需人工</text>
        
        {/* 陪跑顾问型 */}
        <rect x="860" y="570" width="240" height="90" rx="8" fill="#f4e6ff" stroke="#9b59b6" strokeWidth="2"/>
        <rect x="865" y="575" width="70" height="20" rx="10" fill="#9b59b6"/>
        <text x="900" y="588" textAnchor="middle" fontFamily="Microsoft YaHei" fontSize="10" fontWeight="bold" fill="white">需求增长</text>
        <text x="980" y="610" textAnchor="middle" fontFamily="Microsoft YaHei" fontSize="12" fontWeight="bold" fill="#2c3e50">陪跑顾问型</text>
        <text x="865" y="625" fontFamily="Microsoft YaHei" fontSize="9" fill="#2c3e50">长期合作教练式咨询</text>
        <text x="865" y="638" fontFamily="Microsoft YaHei" fontSize="9" fill="#2c3e50">涉及情感价值传递</text>
        <text x="865" y="651" fontFamily="Microsoft YaHei" fontSize="9" fill="#9b59b6" fontWeight="bold">需求量会越来越多</text>
        
        {/* 核心洞察 */}
        <rect x="200" y="680" width="800" height="50" rx="25" fill="url(#redGrad)" filter="url(#shadow)"/>
        <text x="600" y="700" textAnchor="middle" fontFamily="Microsoft YaHei" fontSize="14" fontWeight="bold" fill="white">🔥 核心洞察：咨询本身是有温度的！</text>
        <text x="600" y="715" textAnchor="middle" fontFamily="Microsoft YaHei" fontSize="12" fill="white">咨询可以传导情感价值和情绪价值，这是AI短期内无法做到的</text>
      </svg>
    </div>
  );
};

export default AiConsultingAnalysis;