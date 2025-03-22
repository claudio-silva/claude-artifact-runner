import React, { useState } from 'react';
import {
  ResponsiveContainer, AreaChart, Area, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell, LineChart, Line
} from 'recharts';
import { motion } from 'framer-motion';
import * as Tabs from '@radix-ui/react-tabs';

// 创新活动进度数据
const sprintData = [
  { week: '第1周', 进度: 15, 参与度: 30, 创意数: 8 },
  { week: '第2周', 进度: 35, 参与度: 45, 创意数: 12 },
  { week: '第3周', 进度: 50, 参与度: 60, 创意数: 15 },
  { week: '第4周', 进度: 65, 参与度: 70, 创意数: 20 },
  { week: '第5周', 进度: 85, 参与度: 80, 创意数: 25 },
  { week: '第6周', 进度: 100, 参与度: 95, 创意数: 30 },
];

// 各部门参与情况
const departmentData = [
  { name: '技术部', 人数: 25, 提案: 12, 采纳: 5 },
  { name: '市场部', 人数: 15, 提案: 8, 采纳: 3 },
  { name: '运营部', 人数: 20, 提案: 10, 采纳: 4 },
  { name: '人事部', 人数: 10, 提案: 6, 采纳: 2 },
  { name: '财务部', 人数: 8, 提案: 4, 采纳: 1 },
];

// 创新主题分布
const themeDistribution = [
  { name: '流程优化', value: 35 },
  { name: '技术创新', value: 25 },
  { name: '用户体验', value: 20 },
  { name: '产品迭代', value: 15 },
  { name: '成本控制', value: 5 },
];

// 预期成果分布
const outcomeDistribution = [
  { name: '效率提升', value: 40 },
  { name: '成本节约', value: 25 },
  { name: '用户满意度', value: 20 },
  { name: '员工积极性', value: 15 },
];

// 关键里程碑
const milestones = [
  { name: '启动大会', 时间: '6月1日', 完成: true, description: '召开集团创新冲刺启动大会，宣布活动规则与奖励机制' },
  { name: '创意收集', 时间: '6月2日-6月10日', 完成: true, description: '各部门组织头脑风暴，收集创新提案' },
  { name: '方案评审', 时间: '6月11日-6月15日', 完成: false, description: '评审委员会筛选优质提案，确定入围名单' },
  { name: '原型开发', 时间: '6月16日-6月25日', 完成: false, description: '技术团队帮助入围项目开发最小可行原型' },
  { name: '成果展示', 时间: '6月30日', 完成: false, description: '创新成果汇报展示，评选优胜团队并颁发奖励' },
];

// 颜色配置
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

const InnovationSprintPlan = () => {
  const [activeTab, setActiveTab] = useState('progress');

  // 自定义工具提示
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 shadow-md rounded-md">
          <p className="font-medium text-gray-700">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color }}>
              {`${entry.name}: ${entry.value}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-xl overflow-hidden"
    >
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6">
        <h2 className="text-2xl font-bold text-white">五、集团创新活动冲刺计划</h2>
        <p className="text-indigo-100 mt-2">六周快速创新，激发团队创造力，推动企业创新文化建设</p>
      </div>

      <div className="p-6">
        <Tabs.Root value={activeTab} onValueChange={setActiveTab} className="w-full">
          <Tabs.List className="flex border-b border-gray-200 mb-6">
            <Tabs.Trigger 
              value="progress" 
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-indigo-600 border-b-2 border-transparent data-[state=active]:border-indigo-600 data-[state=active]:text-indigo-600"
            >
              冲刺进度
            </Tabs.Trigger>
            <Tabs.Trigger 
              value="departments" 
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-indigo-600 border-b-2 border-transparent data-[state=active]:border-indigo-600 data-[state=active]:text-indigo-600"
            >
              部门参与
            </Tabs.Trigger>
            <Tabs.Trigger 
              value="themes" 
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-indigo-600 border-b-2 border-transparent data-[state=active]:border-indigo-600 data-[state=active]:text-indigo-600"
            >
              创新主题
            </Tabs.Trigger>
            <Tabs.Trigger 
              value="milestones" 
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-indigo-600 border-b-2 border-transparent data-[state=active]:border-indigo-600 data-[state=active]:text-indigo-600"
            >
              关键里程碑
            </Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content value="progress" className="space-y-6">
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-indigo-800 mb-2">总体进度</h3>
                <p className="text-3xl font-bold text-indigo-700">65%</p>
                <p className="text-sm text-indigo-600 mt-1">预计6月30日完成</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-green-800 mb-2">参与人数</h3>
                <p className="text-3xl font-bold text-green-700">78人</p>
                <p className="text-sm text-green-600 mt-1">占员工总数 52%</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-purple-800 mb-2">创新提案</h3>
                <p className="text-3xl font-bold text-purple-700">25个</p>
                <p className="text-sm text-purple-600 mt-1">已采纳 15个</p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-700 mb-4">六周冲刺进度图</h3>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart
                  data={sprintData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Area type="monotone" dataKey="进度" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
                  <Area type="monotone" dataKey="参与度" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-700 mb-4">创意数量走势</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart
                  data={sprintData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Line type="monotone" dataKey="创意数" stroke="#ff7300" activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Tabs.Content>

          <Tabs.Content value="departments" className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-700 mb-4">各部门参与情况</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={departmentData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Bar dataKey="人数" fill="#8884d8" />
                  <Bar dataKey="提案" fill="#82ca9d" />
                  <Bar dataKey="采纳" fill="#ffc658" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-700 mb-4">部门创新提案率</h3>
                <div className="flex flex-col space-y-4">
                  {departmentData.map((dept, index) => {
                    const proposalRate = (dept.提案 / dept.人数 * 100).toFixed(0);
                    return (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700">{dept.name}</span>
                          <span className="text-sm font-medium text-gray-700">{proposalRate}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div 
                            className="h-2.5 rounded-full" 
                            style={{ 
                              width: `${proposalRate}%`,
                              backgroundColor: COLORS[index % COLORS.length] 
                            }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-700 mb-4">部门创新成果采纳率</h3>
                <div className="flex flex-col space-y-4">
                  {departmentData.map((dept, index) => {
                    const adoptionRate = (dept.采纳 / dept.提案 * 100).toFixed(0);
                    return (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700">{dept.name}</span>
                          <span className="text-sm font-medium text-gray-700">{adoptionRate}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div 
                            className="h-2.5 rounded-full" 
                            style={{ 
                              width: `${adoptionRate}%`,
                              backgroundColor: COLORS[(index + 3) % COLORS.length] 
                            }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Tabs.Content>

          <Tabs.Content value="themes" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-700 mb-4">创新主题分布</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={themeDistribution}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {themeDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-700 mb-4">预期成果分布</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={outcomeDistribution}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {outcomeDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-700 mb-4">创新主题详情</h3>
              <div className="space-y-4">
                {themeDistribution.map((theme, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 border rounded-lg"
                    style={{ borderColor: COLORS[index % COLORS.length] + '40' }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium" style={{ color: COLORS[index % COLORS.length] }}>{theme.name}</h4>
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100">{theme.value}%</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      {index === 0 && '通过优化业务流程和工作方式，提升工作效率，减少资源浪费。'}
                      {index === 1 && '引入新技术和工具，增强企业技术实力，提升产品核心竞争力。'}
                      {index === 2 && '改进产品和服务的用户体验，提高客户满意度与忠诚度。'}
                      {index === 3 && '基于用户反馈持续迭代产品功能，确保市场竞争力。'}
                      {index === 4 && '优化资源配置，降低生产和运营成本，提高利润率。'}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </Tabs.Content>

          <Tabs.Content value="milestones" className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-700 mb-4">关键里程碑时间表</h3>
              <div className="relative">
                <div className="absolute left-9 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex mb-8 last:mb-0 relative"
                  >
                    <div className={`w-6 h-6 rounded-full border-2 flex-shrink-0 mt-1 z-10 ${
                      milestone.完成 
                        ? 'bg-green-100 border-green-500 text-green-500' 
                        : 'bg-gray-100 border-gray-400 text-gray-400'
                    } flex items-center justify-center`}>
                      {milestone.完成 ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : index + 1}
                    </div>
                    <div className="ml-6">
                      <div className="flex items-center">
                        <h4 className="font-medium text-gray-800">{milestone.name}</h4>
                        <span className={`ml-3 px-2 py-0.5 text-xs rounded-full ${
                          milestone.完成 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {milestone.时间}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-gray-600">{milestone.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-700 mb-4">冲刺三大目标</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2 mt-0.5">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">激发创新思维</h4>
                      <p className="text-sm text-gray-600">打破常规思维限制，培养员工创新意识和能力</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mr-2 mt-0.5">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">解决实际问题</h4>
                      <p className="text-sm text-gray-600">针对企业运营中的痛点问题，提出创新解决方案</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2 mt-0.5">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">建立创新文化</h4>
                      <p className="text-sm text-gray-600">营造持续创新的组织氛围，形成长效创新机制</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-700 mb-4">奖励机制</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center mr-2 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">金点子奖</h4>
                      <p className="text-sm text-gray-600">最具创新价值提案，奖金10000元</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center mr-2 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">最佳团队奖</h4>
                      <p className="text-sm text-gray-600">协作效果最佳团队，团队奖金5000元</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center mr-2 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">创新之星</h4>
                      <p className="text-sm text-gray-600">贡献突出的个人，奖金3000元</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </motion.div>
  );
};

export default InnovationSprintPlan; 