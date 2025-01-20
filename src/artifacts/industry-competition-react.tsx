import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Brain, TrendingUp, Shield, Clock } from 'lucide-react';

// 市场份额数据
const marketData = [
  { name: '传统医疗IT企业', value: 35 },
  { name: '互联网科技巨头', value: 30 },
  { name: 'AI医疗创新公司', value: 20 },
  { name: '传统医疗器械企业', value: 15 }
];

const COLORS = ['#2563eb', '#3b82f6', '#60a5fa', '#93c5fd'];

const CompetitionCard = ({ icon: Icon, title, content }) => (
  <div className="bg-white rounded-lg p-4 shadow-md flex items-start">
    <Icon className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
    <div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  </div>
);

const ValueCard = ({ title, points }) => (
  <div className="bg-white rounded-lg p-4 shadow-md">
    <h3 className="text-lg font-semibold text-gray-800 mb-3 border-b pb-2">{title}</h3>
    <ul className="space-y-2">
      {points.map((point, index) => (
        <li key={index} className="flex items-center">
          <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
          <span className="text-gray-600">{point}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Slide = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-8">
        {/* 标题区域 */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2 pb-2 border-b-2 border-blue-600">
            行业竞争态势及AI价值期望
          </h1>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {/* 左侧：竞争态势分析 */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">竞争格局分析</h2>
            
            {/* 市场份额图表 */}
            <div className="bg-white rounded-lg p-4 shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">市场参与者分布</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={marketData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {marketData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* 竞争特点 */}
            <div className="grid grid-cols-2 gap-4">
              <CompetitionCard
                icon={Brain}
                title="技术壁垒高"
                content="需要深厚的AI技术积累和医疗专业知识储备"
              />
              <CompetitionCard
                icon={Shield}
                title="准入门槛严格"
                content="医疗行业监管严格，资质要求高"
              />
              <CompetitionCard
                icon={Clock}
                title="落地周期长"
                content="医疗机构决策流程长，试点验证周期长"
              />
              <CompetitionCard
                icon={TrendingUp}
                title="区域性明显"
                content="不同地区医疗政策和需求差异大"
              />
            </div>
          </div>

          {/* 右侧：AI价值分析 */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">AI赋能价值</h2>
            
            <ValueCard
              title="提升医疗服务效率"
              points={[
                "智能分诊，优化就医流程",
                "辅助诊断，提高诊断效率",
                "智能随访，提升患者管理效率"
              ]}
            />
            
            <ValueCard
              title="降低医疗成本"
              points={[
                "减少人工重复劳动",
                "优化资源配置",
                "降低医疗差错率"
              ]}
            />
            
            <ValueCard
              title="提升医疗质量"
              points={[
                "标准化诊疗流程",
                "智能辅助决策",
                "全程质量监控"
              ]}
            />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;