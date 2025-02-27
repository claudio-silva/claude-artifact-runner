import React from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Presentation = () => {
  // 页面02 - 市场背景与趋势数据
  const marketGrowthData = [
    { year: '2022', value: 1650 },
    { year: '2023', value: 1966.3 },
    { year: '2024', value: 2500 },
    { year: '2025', value: 3200 },
    { year: '2026', value: 4000 },
    { year: '2027', value: 5100 },
    { year: '2028', value: 6400 },
    { year: '2029', value: 8000 },
    { year: '2030', value: 10800 },
  ];

  const userGrowthData = [
    { name: 'ChatGPT (2个月)', users: 100 },
    { name: 'DeepSeek (7天)', users: 100 },
  ];

  // 页面04 - 核心竞争力数据
  const trainingCostData = [
    { name: 'DeepSeek', cost: 5.576 },
    { name: 'GPT-4', cost: 78.35 },
    { name: 'Gemini Ultra', cost: 191 },
  ];

  const radarData = [
    { subject: '算法创新', A: 90, fullMark: 100 },
    { subject: '中文处理', A: 95, fullMark: 100 },
    { subject: '开源开放', A: 100, fullMark: 100 },
    { subject: '部署灵活性', A: 85, fullMark: 100 },
    { subject: '成本效率', A: 95, fullMark: 100 },
  ];

  // 页面07 - 市场机会数据
  const penetrationData = [
    { name: '互联网', current: 70, potential: 90 },
    { name: '金融', current: 60, potential: 85 },
    { name: '运营商', current: 55, potential: 80 },
    { name: '政府', current: 20, potential: 75 },
    { name: '制造业', current: 25, potential: 85 },
    { name: '教育', current: 15, potential: 70 },
    { name: '医疗', current: 10, potential: 80 },
  ];

  const marketValueData = [
    { name: '基础部署', value: 75 },
    { name: '定制开发', value: 200 },
    { name: '运维服务', value: 35 },
  ];

  // 页面08 - 竞争格局数据
  const marketShareData = [
    { name: '美国AI大模型', value: 61 },
    { name: '中国AI大模型', value: 15 },
    { name: '其他地区', value: 24 },
  ];

  const indexGrowthData = [
    { name: '云计算指数', growth: 39.9 },
    { name: 'AI应用指数', growth: 18.6 },
    { name: '人形机器人', growth: 24.6 },
    { name: '智能驾驶', growth: 15.9 },
    { name: 'GPU指数', growth: 4.0 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  return (
    <div className="flex flex-col items-center w-full">
      {/* 页面02 - 市场背景与趋势 */}
      <div className="mb-10 w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-blue-800 mb-6">02 市场背景与趋势</h2>
        
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-700">全球AI市场蓬勃发展</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><span className="font-medium">市场规模</span>: 2023年全球AI市场达1966.3亿美元</li>
              <li><span className="font-medium">增长预期</span>: 预计2030年CAGR高达36.6%</li>
              <li><span className="font-medium">用户基础</span>: DeepSeek日活用户达2215万</li>
            </ul>
            
            <div className="h-64 mt-6">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={marketGrowthData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`${value}亿美元`, '市场规模']} />
                  <Legend />
                  <Line type="monotone" dataKey="value" name="全球AI市场规模(亿美元)" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-700">DeepSeek爆发式增长</h3>
            <div className="h-48 mb-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={userGrowthData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`${value}百万用户`, '用户增长']} />
                  <Legend />
                  <Bar dataKey="users" name="获得1亿用户所需时间" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <h3 className="text-xl font-semibold mb-2 text-blue-700">四大关键趋势</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-blue-50 p-2 rounded">
                <h4 className="font-medium text-blue-700">本地化部署需求激增</h4>
                <p className="text-sm">敏感行业数据隐私与合规需求</p>
              </div>
              <div className="bg-green-50 p-2 rounded">
                <h4 className="font-medium text-green-700">中文处理能力需求爆发</h4>
                <p className="text-sm">本土语言与文化理解优势明显</p>
              </div>
              <div className="bg-yellow-50 p-2 rounded">
                <h4 className="font-medium text-yellow-700">成本效率重塑竞争</h4>
                <p className="text-sm">优化算力资源利用，降低门槛</p>
              </div>
              <div className="bg-purple-50 p-2 rounded">
                <h4 className="font-medium text-purple-700">行业应用多元化</h4>
                <p className="text-sm">从互联网金融向全行业渗透</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 页面04 - DeepSeek核心竞争力 */}
      <div className="mb-10 w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-blue-800 mb-6">04 DeepSeek核心竞争力</h2>
        
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-700">技术架构优势</h3>
            <p className="mb-2">训练成本对比（百万美元）：</p>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={trainingCostData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number"/>
                  <YAxis dataKey="name" type="category" />
                  <Tooltip formatter={(value) => [`${value}百万美元`, '训练成本']} />
                  <Legend />
                  <Bar dataKey="cost" name="训练成本" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-4 bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-700 mb-2">算法创新亮点</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>混合专家MoE技术大幅提升算力效率</li>
                <li>训练时间：2048卡H800 GPU集群仅需2个月</li>
                <li>推理阶段缓存数据量降低50倍</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-700">核心能力雷达图</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} />
                  <Radar name="DeepSeek能力" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                  <Legend />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-4 grid grid-cols-2 gap-2">
              <div className="bg-green-50 p-2 rounded">
                <h4 className="font-medium text-green-700">中文处理卓越</h4>
                <p className="text-sm">专业领域文档处理优势明显</p>
              </div>
              <div className="bg-yellow-50 p-2 rounded">
                <h4 className="font-medium text-yellow-700">开源生态战略</h4>
                <p className="text-sm">MIT协议最大化自由度</p>
              </div>
              <div className="bg-purple-50 p-2 rounded">
                <h4 className="font-medium text-purple-700">部署灵活性</h4>
                <p className="text-sm">消费级GPU即可高效运行</p>
              </div>
              <div className="bg-blue-50 p-2 rounded">
                <h4 className="font-medium text-blue-700">能源优化</h4>
                <p className="text-sm">节能幅度达30%-50%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 页面07 - 市场机会规模 */}
      <div className="mb-10 w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-blue-800 mb-6">07 市场机会规模</h2>
        
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-700">潜在客户基数</h3>
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <ul className="list-disc pl-5 space-y-2">
                <li><span className="font-medium">企业市场</span>: 全国大中型企业与政府机构超10万家</li>
                <li><span className="font-medium">行业覆盖</span>: 98家A股上市公司已接入DeepSeek</li>
                <li><span className="font-medium">用户基础</span>: 中国移动互联网月活用户12.57亿</li>
                <li><span className="font-medium">渗透率</span>: 当前市场渗透率低于5%</li>
              </ul>
            </div>
            
            <h3 className="text-xl font-semibold mb-4 text-blue-700">行业渗透率与潜力</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={penetrationData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis dataKey="name" type="category" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="current" name="当前渗透率" fill="#8884d8" />
                  <Bar dataKey="potential" name="潜在渗透率" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-700">客户价值量分布(万元)</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={marketValueData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                    {marketValueData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value}万元`, '客单价']} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            <h3 className="text-xl font-semibold mb-3 text-blue-700 mt-4">垂直行业增长亮点</h3>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-blue-50 p-2 rounded">
                <h4 className="font-medium text-blue-700">医疗行业</h4>
                <p className="text-xs">AI辅助诊断纳入医保立项</p>
              </div>
              <div className="bg-green-50 p-2 rounded">
                <h4 className="font-medium text-green-700">智能驾驶</h4>
                <p className="text-xs">高阶驾驶下探至7万元级</p>
              </div>
              <div className="bg-purple-50 p-2 rounded">
                <h4 className="font-medium text-purple-700">人形机器人</h4>
                <p className="text-xs">2025年进入量产关键点</p>
              </div>
            </div>
            
            <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-700 mb-1">市场增长预期</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>年增长率：持续保持30%以上</li>
                <li>发展阶段：处于市场导入期，未来3-5年为爆发期</li>
                <li>渗透速度：云计算市场同比增长率已显著提升</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 页面08 - 竞争格局分析 */}
      <div className="mb-10 w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-blue-800 mb-6">08 竞争格局分析</h2>
        
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-700">全球顶尖大模型分布</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={marketShareData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                    {marketShareData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value}个`, '顶尖大模型数量']} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-4 bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-700 mb-2">全球AI市场格局</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>云计算市场：亚马逊、微软、谷歌三家全球份额近七成</li>
                <li>中国市场：本土云计算企业主导国内市场</li>
                <li>AI应用领域：中国在商业化速度和规模方面具有潜在优势</li>
                <li>未来演变：从云端API向本地化部署迁移</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-700">市场指数增长表现(1-2月)</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={indexGrowthData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`${value}%`, '增长率']} />
                  <Legend />
                  <Bar dataKey="growth" name="涨幅(%)" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <h3 className="text-xl font-semibold mt-4 mb-2 text-blue-700">DeepSeek差异化优势</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-blue-50 p-2 rounded">
                <h4 className="font-medium text-blue-700">算法创新</h4>
                <p className="text-xs">训练成本降低90%</p>
              </div>
              <div className="bg-green-50 p-2 rounded">
                <h4 className="font-medium text-green-700">价格优势</h4>
                <p className="text-xs">API价格远低于同类产品</p>
              </div>
              <div className="bg-yellow-50 p-2 rounded">
                <h4 className="font-medium text-yellow-700">开源战略</h4>
                <p className="text-xs">MIT协议最大自由度</p>
              </div>
              <div className="bg-purple-50 p-2 rounded">
                <h4 className="font-medium text-purple-700">生态融合</h4>
                <p className="text-xs">16家国产芯片公司适配</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
