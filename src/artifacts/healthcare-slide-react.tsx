import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { BarChart3, Users, Heart, Activity } from 'lucide-react';

// 模拟趋势数据
const trendData = [
  { year: '2020', value: 45 },
  { year: '2021', value: 52 },
  { year: '2022', value: 61 },
  { year: '2023', value: 68 },
  { year: '2024', value: 76 },
];

const PainPointCard = ({ icon: Icon, title, points }) => (
  <div className="bg-white rounded-lg p-6 shadow-md">
    <div className="flex items-center mb-4">
      <Icon className="w-6 h-6 text-blue-600 mr-2" />
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    </div>
    <ul className="space-y-2">
      {points.map((point, index) => (
        <li key={index} className="flex items-start">
          <span className="text-blue-600 mr-2">•</span>
          <span className="text-gray-600">{point}</span>
        </li>
      ))}
    </ul>
  </div>
);

const StatBox = ({ value, label }) => (
  <div className="bg-blue-600 rounded-lg p-4 text-white text-center">
    <div className="text-2xl font-bold mb-1">{value}</div>
    <div className="text-sm opacity-90">{label}</div>
  </div>
);

const Slide = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-8">
        {/* 标题区域 */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2 pb-2 border-b-2 border-blue-600">
            一、行业洞察
          </h1>
          <h2 className="text-xl text-gray-600">行业及主要客户痛点分析</h2>
        </div>

        {/* 内容区域 */}
        <div className="grid grid-cols-2 gap-8">
          {/* 左侧内容 */}
          <div className="space-y-6">
            <PainPointCard
              icon={Users}
              title="医疗机构痛点"
              points={[
                "医疗资源分配不均衡，优质资源过度集中",
                "基层医疗机构专业人才缺乏，设备落后",
                "诊疗效率和质量有待提升，医生工作负荷大"
              ]}
            />
            <PainPointCard
              icon={Heart}
              title="患者痛点"
              points={[
                "就医体验差：挂号难、等待时间长",
                "优质医疗资源获取困难",
                "健康管理和预防意识不足"
              ]}
            />
          </div>

          {/* 右侧内容 */}
          <div className="space-y-6">
            {/* 统计数据 */}
            <div className="grid grid-cols-2 gap-4">
              <StatBox value="76.8%" label="三甲医院就诊集中度" />
              <StatBox value="＜10分钟" label="医生平均问诊时长" />
            </div>

            {/* 趋势图 */}
            <div className="bg-white rounded-lg p-4 shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">医疗资源集中度趋势</h3>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={trendData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#2563eb" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <PainPointCard
              icon={Activity}
              title="医保机构痛点"
              points={[
                "医保费用审核工作量大",
                "欺诈骗保行为识别难",
                "医保控费难度大，数据分析应用不足"
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;