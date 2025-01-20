import React from 'react';
import { Zap, Target, Shield, Lightbulb, Award, Network, PieChart, LineChart } from 'lucide-react';

const AnalysisCard = ({ icon: Icon, title, items }) => (
  <div className="bg-white rounded-lg p-6 shadow-md h-full">
    <div className="flex items-center gap-3 mb-4">
      <div className="bg-blue-50 p-2 rounded-lg">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    </div>
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-2">
          <div className="mt-2 w-1 h-1 rounded-full bg-blue-600 flex-shrink-0" />
          <span className="text-gray-600 leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Slide = () => {
  const marketAnalysis = {
    competitors: [
      {
        icon: Network,
        title: "主要市场参与者",
        items: [
          "传统医疗信息化企业：依托既有医院客户资源进行AI转型",
          "互联网科技巨头：利用技术优势切入医疗AI领域",
          "专业医疗AI初创公司：聚焦细分场景深耕",
          "医疗器械企业：基于设备延伸AI应用"
        ]
      },
      {
        icon: Shield,
        title: "竞争壁垒",
        items: [
          "医疗专业知识与AI技术的深度融合门槛",
          "数据获取与应用的合规要求",
          "医疗行业准入资质要求",
          "产品落地与验证周期长"
        ]
      }
    ],
    aiValue: [
      {
        icon: Target,
        title: "医疗机构赋能",
        items: [
          "提升诊疗效率：智能辅助诊断、影像识别",
          "优化医疗流程：智能预问诊、自动随访",
          "提高医疗质量：标准化诊疗、智能质控",
          "降低运营成本：资源优化配置、智能管理"
        ]
      },
      {
        icon: Lightbulb,
        title: "行业创新价值",
        items: [
          "突破传统诊疗模式局限，实现远程智能诊疗",
          "促进优质医疗资源下沉，提升基层医疗水平",
          "加速医学知识图谱构建，助力精准医疗发展",
          "推动医疗服务模式创新，提升医疗服务可及性"
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-8">
        {/* 标题区域 */}
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-2">
            <div className="h-8 w-1 bg-blue-600 rounded-full" />
            <h1 className="text-3xl font-bold text-gray-800">竞争格局分析与AI赋能价值</h1>
          </div>
        </div>

        {/* 竞争格局分析 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4 ml-4">市场竞争格局</h2>
          <div className="grid grid-cols-2 gap-6">
            {marketAnalysis.competitors.map((item, index) => (
              <AnalysisCard
                key={index}
                icon={item.icon}
                title={item.title}
                items={item.items}
              />
            ))}
          </div>
        </div>

        {/* AI赋能价值 */}
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-4 ml-4">AI赋能价值</h2>
          <div className="grid grid-cols-2 gap-6">
            {marketAnalysis.aiValue.map((item, index) => (
              <AnalysisCard
                key={index}
                icon={item.icon}
                title={item.title}
                items={item.items}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;