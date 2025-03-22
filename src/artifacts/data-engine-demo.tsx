import React, { useState } from 'react';
import {
  ResponsiveContainer, LineChart, Line, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell
} from 'recharts';
import { motion } from 'framer-motion';
import * as Tabs from '@radix-ui/react-tabs';

// 项目数据
const projectData = [
  { name: '项目A', 进度: 85, 预算使用率: 80, 风险等级: 2, 状态: '正常', 责任人: '张三', 类型: '基建', 开始日期: '2023-06-01', 预计完成日期: '2024-04-30' },
  { name: '项目B', 进度: 60, 预算使用率: 75, 风险等级: 3, 状态: '延期', 责任人: '李四', 类型: '信息化', 开始日期: '2023-08-15', 预计完成日期: '2024-05-30' },
  { name: '项目C', 进度: 92, 预算使用率: 95, 风险等级: 1, 状态: '正常', 责任人: '王五', 类型: '设备升级', 开始日期: '2023-09-20', 预计完成日期: '2024-03-15' },
  { name: '项目D', 进度: 35, 预算使用率: 40, 风险等级: 4, 状态: '高风险', 责任人: '赵六', 类型: '研发', 开始日期: '2023-10-05', 预计完成日期: '2024-07-30' },
  { name: '项目E', 进度: 70, 预算使用率: 65, 风险等级: 2, 状态: '正常', 责任人: '孙七', 类型: '基建', 开始日期: '2023-11-10', 预计完成日期: '2024-06-20' },
  { name: '项目F', 进度: 45, 预算使用率: 50, 风险等级: 3, 状态: '延期', 责任人: '周八', 类型: '信息化', 开始日期: '2023-12-01', 预计完成日期: '2024-08-15' },
];

// 项目类型分布数据
const typeDistribution = [
  { name: '基建', value: 2 },
  { name: '信息化', value: 2 },
  { name: '设备升级', value: 1 },
  { name: '研发', value: 1 },
];

// 项目状态分布数据
const statusDistribution = [
  { name: '正常', value: 3 },
  { name: '延期', value: 2 },
  { name: '高风险', value: 1 },
];

// 月度进度数据
const monthlyProgress = [
  { month: '1月', 总体进度: 25, 资金使用: 30 },
  { month: '2月', 总体进度: 35, 资金使用: 38 },
  { month: '3月', 总体进度: 45, 资金使用: 52 },
  { month: '4月', 总体进度: 60, 资金使用: 65 },
  { month: '5月', 总体进度: 70, 资金使用: 78 },
  { month: '6月', 总体进度: 80, 资金使用: 85 },
];

// 颜色配置
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];
const STATUS_COLORS = {
  '正常': '#52c41a',
  '延期': '#faad14',
  '高风险': '#f5222d',
};

const DataEngineDemo = () => {
  const [selectedProject, setSelectedProject] = useState(projectData[0]);

  // AI 分析建议
  const aiSuggestions = [
    {
      title: '风险预警',
      content: '项目D存在重大延期风险，预计完成时间可能推迟1-2个月。建议安排额外资源支持或调整项目范围。',
      priority: 'high',
    },
    {
      title: '资源优化',
      content: '项目B与项目F在基础设施方面存在资源重叠，建议整合相关资源提高利用率，预计可节省15%成本。',
      priority: 'medium',
    },
    {
      title: '进度提速建议',
      content: '项目E的某些任务可并行处理，通过调整工作顺序，预计可缩短项目周期2周。',
      priority: 'medium',
    },
    {
      title: '预算优化',
      content: '项目C预算使用率达95%但进度为92%，建议检查剩余工作预算是否充足，可能需要额外2-3%的预算备用。',
      priority: 'low',
    },
  ];

  // 风险等级映射
  const getRiskLevel = (level) => {
    const levels = ['低', '中低', '中高', '高'];
    return levels[level - 1] || '未知';
  };

  // 状态标签样式
  const getStatusBadge = (status) => {
    return (
      <span 
        className="px-2 py-1 rounded-full text-xs font-medium" 
        style={{ 
          backgroundColor: `${STATUS_COLORS[status]}20`, 
          color: STATUS_COLORS[status] 
        }}
      >
        {status}
      </span>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-xl overflow-hidden"
    >
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6">
        <h2 className="text-2xl font-bold text-white">《数擎》- 项目数据分析与决策助手</h2>
        <p className="text-blue-100 mt-2">基于DeepSeek大模型的数据驱动项目管理决策平台</p>
      </div>

      <div className="p-6">
        <Tabs.Root defaultValue="dashboard" className="w-full">
          <Tabs.List className="flex border-b border-gray-200 mb-6">
            <Tabs.Trigger 
              value="dashboard" 
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600"
            >
              项目仪表盘
            </Tabs.Trigger>
            <Tabs.Trigger 
              value="analysis" 
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600"
            >
              数据分析
            </Tabs.Trigger>
            <Tabs.Trigger 
              value="ai" 
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600"
            >
              AI 决策建议
            </Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-blue-800 mb-2">项目总数</h3>
                <p className="text-3xl font-bold text-blue-700">6</p>
                <p className="text-sm text-blue-600 mt-1">较上月 +1</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-green-800 mb-2">正常进行</h3>
                <p className="text-3xl font-bold text-green-700">3</p>
                <p className="text-sm text-green-600 mt-1">占比 50%</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-amber-800 mb-2">有风险项目</h3>
                <p className="text-3xl font-bold text-amber-700">3</p>
                <p className="text-sm text-amber-600 mt-1">需要关注</p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                <h3 className="font-medium text-gray-700">项目进度概览</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">项目名称</th>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">状态</th>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">责任人</th>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">类型</th>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">进度</th>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">风险等级</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {projectData.map((project, index) => (
                      <tr key={index} className="hover:bg-gray-50 cursor-pointer" onClick={() => setSelectedProject(project)}>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{project.name}</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{getStatusBadge(project.状态)}</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{project.责任人}</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{project.类型}</td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${project.进度}%` }}></div>
                          </div>
                          <span className="text-xs text-gray-500 mt-1">{project.进度}%</span>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{getRiskLevel(project.风险等级)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Tabs.Content>

          <Tabs.Content value="analysis" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-700 mb-4">项目类型分布</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={typeDistribution}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {typeDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-700 mb-4">项目状态分布</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={statusDistribution}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {statusDistribution.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={STATUS_COLORS[entry.name] || COLORS[index % COLORS.length]} 
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-700 mb-4">月度进度跟踪</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart
                  data={monthlyProgress}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="总体进度" stroke="#8884d8" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="资金使用" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-700 mb-4">项目预算使用情况</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={projectData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="预算使用率" fill="#8884d8" />
                  <Bar dataKey="进度" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Tabs.Content>

          <Tabs.Content value="ai" className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-blue-800">DeepSeek AI 决策助手</h3>
                  <p className="text-sm text-blue-600">基于项目数据和历史模式的智能建议</p>
                </div>
              </div>

              <div className="space-y-4">
                {aiSuggestions.map((suggestion, index) => {
                  const priorityColors = {
                    high: 'bg-red-50 border-red-200 text-red-800',
                    medium: 'bg-amber-50 border-amber-200 text-amber-800',
                    low: 'bg-green-50 border-green-200 text-green-800',
                  };
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className={`p-4 border rounded-lg ${priorityColors[suggestion.priority]}`}
                    >
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium">{suggestion.title}</h4>
                        <span className="text-xs uppercase px-2 py-1 rounded-full bg-white bg-opacity-50">
                          {suggestion.priority === 'high' ? '高优先级' : 
                           suggestion.priority === 'medium' ? '中优先级' : '低优先级'}
                        </span>
                      </div>
                      <p className="mt-2 text-sm">{suggestion.content}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                <h3 className="font-medium text-gray-700">项目详情分析</h3>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-medium text-lg text-gray-800">{selectedProject.name}</h4>
                  {getStatusBadge(selectedProject.状态)}
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-sm text-gray-500">负责人</p>
                    <p className="font-medium">{selectedProject.责任人}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">项目类型</p>
                    <p className="font-medium">{selectedProject.类型}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">开始日期</p>
                    <p className="font-medium">{selectedProject.开始日期}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">预计完成日期</p>
                    <p className="font-medium">{selectedProject.预计完成日期}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">项目进度</span>
                      <span className="text-sm font-medium text-gray-700">{selectedProject.进度}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-blue-600 h-2.5 rounded-full" 
                        style={{ width: `${selectedProject.进度}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">预算使用</span>
                      <span className="text-sm font-medium text-gray-700">{selectedProject.预算使用率}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className={`h-2.5 rounded-full ${
                          selectedProject.预算使用率 > selectedProject.进度 + 10 
                            ? 'bg-red-500' 
                            : 'bg-green-500'
                        }`}
                        style={{ width: `${selectedProject.预算使用率}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-700 mb-2">AI 风险预测</h4>
                  <p className="text-sm text-gray-600">
                    {selectedProject.风险等级 >= 3 
                      ? `该项目当前风险等级为${getRiskLevel(selectedProject.风险等级)}，存在延期风险。建议增加资源投入，重点关注关键路径任务。`
                      : `该项目当前风险等级为${getRiskLevel(selectedProject.风险等级)}，进展顺利。建议保持当前项目节奏，定期检查质量指标。`
                    }
                  </p>
                </div>
              </div>
            </div>
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </motion.div>
  );
};

export default DataEngineDemo; 