import React from 'react';
import { Users, Heart, Building2, Stethoscope, BadgeDollarSign } from 'lucide-react';

const PainPointCard = ({ icon: Icon, title, points }) => (
  <div className="bg-white rounded-lg p-6 shadow-md h-full">
    <div className="flex items-center gap-3 mb-4">
      <div className="bg-blue-50 p-2 rounded-lg">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    </div>
    <ul className="space-y-3">
      {points.map((point, index) => (
        <li key={index} className="flex items-start gap-2">
          <div className="mt-2 w-1 h-1 rounded-full bg-blue-600 flex-shrink-0" />
          <span className="text-gray-600 leading-relaxed">{point}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Slide = () => {
  const painPoints = [
    {
      icon: Building2,
      title: "医疗机构挑战",
      points: [
        "优质医疗资源分布不均，难以满足基层医疗需求",
        "医生工作负荷大，人均诊疗时间受限",
        "疑难病例会诊流程复杂，跨机构协作困难"
      ]
    },
    {
      icon: Users,
      title: "患者就医难点",
      points: [
        "预约挂号困难，专家号源紧张",
        "就医流程复杂，多科室反复往返",
        "优质医疗资源难以满足患者需求"
      ]
    },
    {
      icon: Stethoscope,
      title: "基层医疗短板",
      points: [
        "专业医疗人才缺乏，技术水平有限",
        "医疗设备配置不足，诊疗能力受限",
        "分级诊疗落实困难，双向转诊不畅"
      ]
    },
    {
      icon: BadgeDollarSign,
      title: "医保管理难点",
      points: [
        "医保费用审核工作量大，人工成本高",
        "医保控费难度大，监管手段有限",
        "异地就医结算效率低，服务体验待提升"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-8">
        {/* 标题区域 */}
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-2">
            <div className="h-8 w-1 bg-blue-600 rounded-full" />
            <h1 className="text-3xl font-bold text-gray-800">行业洞察</h1>
          </div>
          <p className="text-xl text-gray-600 ml-12">医疗行业痛点分析</p>
        </div>

        {/* 内容区域 */}
        <div className="grid grid-cols-2 gap-6">
          {painPoints.map((point, index) => (
            <PainPointCard
              key={index}
              icon={point.icon}
              title={point.title}
              points={point.points}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slide;