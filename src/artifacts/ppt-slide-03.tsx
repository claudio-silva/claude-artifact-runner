import React from 'react';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const ValueAnalysis = () => {
  // 数据安全与合规需求的行业分布
  const securityNeedsData = [
    { name: '金融', value: 30 },
    { name: '医疗', value: 25 },
    { name: '政府', value: 20 },
    { name: '制造', value: 15 },
    { name: '教育', value: 10 },
  ];

  // TCO对比数据 (总拥有成本)
  const tcoComparisonData = [
    { name: '初始部署', api: 5, local: 25 },
    { name: '1年使用', api: 30, local: 30 },
    { name: '2年使用', api: 60, local: 35 },
    { name: '3年使用', api: 90, local: 40 },
  ];

  // 业务价值雷达图数据
  const businessValueData = [
    { subject: '决策支持', value: 85, fullMark: 100 },
    { subject: '流程自动化', value: 90, fullMark: 100 },
    { subject: '知识管理', value: 80, fullMark: 100 },
    { subject: '创新能力', value: 75, fullMark: 100 },
    { subject: '合规保障', value: 95, fullMark: 100 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  return (
    <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-blue-800 mb-6">03 本地化部署价值分析</h2>
      
      <div className="grid grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-700">核心价值维度</h3>
          
          <div className="bg-blue-50 p-4 rounded-lg mb-4">
            <h4 className="font-semibold text-blue-700 mb-2">数据安全与合规需求</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li><span className="font-medium">核心数据不出墙</span>：敏感数据完全在企业内部处理</li>
              <li><span className="font-medium">监管合规</span>：满足GDPR、数据安全法、个人信息保护法等要求</li>
              <li><span className="font-medium">商业机密保护</span>：核心知识产权、研发数据可控</li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg mb-4">
            <h4 className="font-semibold text-green-700 mb-2">成本与可控性优势</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li><span className="font-medium">长期TCO优化</span>：高频使用场景下成本更低</li>
              <li><span className="font-medium">不依赖外部网络</span>：服务可用性自主可控</li>
              <li><span className="font-medium">算力资源灵活扩展</span>：根据业务需求弹性调整</li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-semibold text-yellow-700 mb-2">定制化与场景适配</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li><span className="font-medium">行业专属模型</span>：针对专业领域深度优化</li>
              <li><span className="font-medium">业务流程融合</span>：与现有系统深度集成</li>
              <li><span className="font-medium">实时响应</span>：特定场景下低延迟保障</li>
            </ul>
          </div>
          
          <h3 className="text-xl font-semibold mt-6 mb-3 text-blue-700">高需求行业分布</h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={securityNeedsData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={60} label>
                  {securityNeedsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, '占比']} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-700">经济价值分析</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={tcoComparisonData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value) => [`${value}万元`, '成本']} />
                <Legend />
                <Bar dataKey="api" name="API调用模式" fill="#8884d8" />
                <Bar dataKey="local" name="本地化部署" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <h3 className="text-xl font-semibold mt-4 mb-3 text-blue-700">业务价值雷达图</h3>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={businessValueData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                <Radar name="业务价值" dataKey="value" stroke="#FF8042" fill="#FF8042" fillOpacity={0.6} />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-4 bg-purple-50 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-700 mb-2">典型客户需求场景</h4>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-white p-2 rounded shadow-sm">
                <h5 className="font-medium text-purple-700 text-sm">金融机构</h5>
                <p className="text-xs">风控合规与智能投顾</p>
              </div>
              <div className="bg-white p-2 rounded shadow-sm">
                <h5 className="font-medium text-purple-700 text-sm">制造企业</h5>
                <p className="text-xs">研发创新与供应链优化</p>
              </div>
              <div className="bg-white p-2 rounded shadow-sm">
                <h5 className="font-medium text-purple-700 text-sm">政府机构</h5>
                <p className="text-xs">政策解读与数据安全</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValueAnalysis;