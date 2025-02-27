import React from 'react';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const CaseStudy = () => {
  // 效率提升数据
  const efficiencyData = [
    { name: '报告生成时间', before: 15, after: 2.5 },
    { name: '数据收集时间', before: 12, after: 2 },
    { name: '修改迭代次数', before: 6, after: 2 },
    { name: '人力投入(人天)', before: 10, after: 3 },
  ];

  // 收益分析数据
  const benefitsData = [
    { name: '时间成本节约', value: 35 },
    { name: '人力成本降低', value: 25 },
    { name: '服务质量提升', value: 20 },
    { name: '业务拓展能力', value: 20 },
  ];

  // 本地化部署优势雷达图
  const localDeploymentData = [
    { subject: '数据安全', local: 95, cloud: 60, fullMark: 100 },
    { subject: '响应速度', local: 90, cloud: 75, fullMark: 100 },
    { subject: '定制能力', local: 85, cloud: 60, fullMark: 100 },
    { subject: '业务集成', local: 90, cloud: 65, fullMark: 100 },
    { subject: '长期成本', local: 80, cloud: 70, fullMark: 100 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  return (
    <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-blue-800 mb-6">DeepSeek本地化部署案例分析 - 南方联合产权交易中心</h2>
      
      <div className="grid grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-700">客户需求与挑战</h3>
          
          <div className="bg-blue-50 p-4 rounded-lg mb-4">
            <h4 className="font-semibold text-blue-700 mb-2">南方联合产权交易中心面临的挑战</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><span className="font-medium">报告撰写效率低</span>：传统方式耗时耗力，平均一份专业报告需15天</li>
              <li><span className="font-medium">数据安全敏感</span>：涉及国有资产和企业核心数据，不允许外传</li>
              <li><span className="font-medium">专业要求高</span>：产权交易报告需要严格的专业性和合规性</li>
              <li><span className="font-medium">复杂场景多</span>：不同交易类型需要定制化的报告内容</li>
            </ul>
          </div>
          
          <h3 className="text-xl font-semibold mb-4 text-blue-700">DeepSeek本地化解决方案</h3>
          
          <div className="bg-green-50 p-4 rounded-lg mb-4">
            <h4 className="font-semibold text-green-700 mb-2">AI报告撰写系统核心功能</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="bg-white p-2 rounded shadow-sm">
                <h5 className="font-medium text-green-700">智能报告模板库</h5>
                <p className="text-xs">覆盖各类产权交易专业模板，智能推荐最适合的报告框架</p>
              </div>
              <div className="bg-white p-2 rounded shadow-sm">
                <h5 className="font-medium text-green-700">自动数据收集整理</h5>
                <p className="text-xs">从内部数据库自动提取并组织相关数据，确保完整性</p>
              </div>
              <div className="bg-white p-2 rounded shadow-sm">
                <h5 className="font-medium text-green-700">智能写作助手</h5>
                <p className="text-xs">利用DeepSeek模型辅助专业内容撰写，保障专业性</p>
              </div>
              <div className="bg-white p-2 rounded shadow-sm">
                <h5 className="font-medium text-green-700">可视化图表生成</h5>
                <p className="text-xs">自动将报告数据转化为专业图表，提高报告质量</p>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-semibold text-yellow-700 mb-2">实施亮点</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><span className="font-medium">私有数据训练</span>：使用3000+历史报告进行微调，提升专业性</li>
              <li><span className="font-medium">业务系统集成</span>：与交易中心现有系统深度融合，数据无缝流转</li>
              <li><span className="font-medium">安全机制设计</span>：建立多层数据访问控制，确保核心资产安全</li>
              <li><span className="font-medium">专业知识库</span>：构建产权交易领域知识库，确保合规和专业性</li>
            </ul>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-700">效率提升对比</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={efficiencyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="before" name="部署前(天/次)" fill="#ff8042" />
                <Bar dataKey="after" name="部署后(天/次)" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-700">收益分析</h3>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={benefitsData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={60} label>
                      {benefitsData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value}%`, '价值占比']} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-700">部署优势对比</h3>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="70%" data={localDeploymentData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} />
                    <Radar name="本地部署" dataKey="local" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                    <Radar name="云API调用" dataKey="cloud" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                    <Legend />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          
          <div className="mt-4 bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-700 mb-2">客户收益总结</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><span className="font-medium">报告生成效率提升500%</span>：从平均15天缩短至3天内完成</li>
              <li><span className="font-medium">人力成本降低70%</span>：每份报告人工投入从10人天降至3人天</li>
              <li><span className="font-medium">报告质量显著提升</span>：专业性、一致性和准确性明显提高</li>
              <li><span className="font-medium">业务拓展能力增强</span>：新增资产评估和并购咨询业务线，创造额外收入</li>
              <li><span className="font-medium">预计年化投资回报率180%</span>：投资回收期不到7个月</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;