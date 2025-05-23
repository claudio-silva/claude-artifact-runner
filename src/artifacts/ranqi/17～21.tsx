import React, { useState, useEffect } from 'react';
import { CheckCircle, Star, Users, Clock, Shield, BookOpen, Award, PhoneCall, Heart, Bell, Laptop } from 'lucide-react';

const PPTSlide = ({ children, title }) => (
  <div className="bg-white min-h-screen w-full text-gray-800 p-8 flex flex-col shadow-lg">
    <div className="mb-8">
      <h1 className="text-4xl font-bold text-center text-blue-600">{title}</h1>
    </div>
    <div className="flex-1 flex items-center justify-center">
      {children}
    </div>
  </div>
);

const ImplementationGuarantee = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "项目工作计划甘特图",
      content: <Slide1Content />
    },
    {
      title: "项目团队组成",
      content: <Slide2Content />
    },
    {
      title: "专家委员会配备",
      content: <Slide3Content />
    },
    {
      title: "质量保障体系",
      content: <Slide4Content />
    },
    {
      title: "驻场服务承诺",
      content: <Slide5Content />
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        nextSlide();
      } else if (event.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const currentSlideContent = slides[currentSlide];

  return (
    <div className="relative">
      <PPTSlide title={currentSlideContent.title}>
        {currentSlideContent.content}
      </PPTSlide>
    </div>
  );
};

// Slide1: 项目工作计划甘特图
const Slide1Content = () => {
  const weeks = [
    { week: "Week 1", phase: "Assessment", task: "评估框架设计", color: "bg-red-500" },
    { week: "Week 2", phase: "Assessment", task: "现场调研评估", color: "bg-red-500" },
    { week: "Week 3", phase: "Insight", task: "洞察工作坊", color: "bg-orange-500" },
    { week: "Week 4", phase: "Prioritization", task: "场景优先级排序", color: "bg-yellow-500" },
    { week: "Week 5", phase: "Opportunity", task: "蓝图设计", color: "bg-green-500" },
    { week: "Week 6", phase: "Workflow", task: "流程重塑", color: "bg-teal-500" },
    { week: "Week 7-8", phase: "Enablement", task: "平台架构设计", color: "bg-blue-500" },
    { week: "Week 9-10", phase: "Enablement", task: "治理体系设计", color: "bg-blue-500" },
    { week: "Week 11", phase: "Roadmap", task: "路线图制定", color: "bg-purple-500" },
    { week: "Week 12", phase: "Review", task: "方案完善评审", color: "bg-indigo-500" }
  ];

  return (
    <div className="w-full">
      {/* 甘特图主体 */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-6 text-center">12周详细工作计划可视化</h3>
        <div className="relative">
          <div className="grid gap-2">
            {weeks.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-24 text-right font-bold">{item.week}</div>
                <div className={`flex-1 h-8 ${item.color} rounded flex items-center justify-between px-4 text-white`}>
                  <span className="font-bold">{item.task}</span>
                  <span className="text-sm">{item.phase}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 关键工作节点 */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border border-red-400">
          <h4 className="font-bold text-red-600 mb-3">现状评估节点</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• 第1-2周：现状调研完成</li>
            <li>• 评估报告交付评审</li>
            <li>• 对标分析完成</li>
          </ul>
        </div>
        <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg border border-green-400">
          <h4 className="font-bold text-green-600 mb-3">规划设计节点</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• 第5周：AI蓝图评审</li>
            <li>• 第7-8周：平台架构评审</li>
            <li>• 第9-10周：治理体系评审</li>
          </ul>
        </div>
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-400">
          <h4 className="font-bold text-blue-600 mb-3">成果交付节点</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• 第11周：路线图评审</li>
            <li>• 第12周：最终评审</li>
            <li>• 所有成果物验收</li>
          </ul>
        </div>
      </div>

      {/* 质量检查关键节点 */}
      <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg border border-gray-300">
        <h3 className="text-lg font-bold mb-4 text-center text-gray-800">质量检查关键节点</h3>
        <div className="grid grid-cols-5 gap-4">
          {[
            { week: "W2", quality: "调研质量检查", check: "数据完整性" },
            { week: "W5", quality: "蓝图质量检查", check: "可行性评估" },
            { week: "W8", quality: "平台方案检查", check: "技术合规性" },
            { week: "W10", quality: "治理体系检查", check: "制度完整性" },
            { week: "W12", quality: "成果物检查", check: "交付标准"  }
          ].map((item, index) => (
            <div key={index} className="bg-green-100 p-4 rounded text-center">
              <CheckCircle className="w-8 h-8 mx-auto mb-2 text-green-500" />
              <div className="font-bold text-gray-800">{item.week}</div>
              <div className="text-sm text-gray-700">{item.quality}</div>
              <div className="text-xs text-gray-600">{item.check}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Slide2: 项目团队组成
const Slide2Content = () => {
  return (
    <div className="w-full">
      {/* 项目总监重点展示 */}
      <div className="flex gap-8 mb-8">
        <div className="w-1/3">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg border border-blue-400 text-center">
            <div className="w-32 h-32 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Users className="w-16 h-16 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">洪浩东</h3>
            <p className="text-lg text-blue-600">项目总监/技术专家</p>
          </div>
        </div>
        <div className="w-2/3">
          <h3 className="text-lg font-bold mb-4 text-gray-800">核心能力突出展示</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-4 rounded-lg border border-red-400">
              <Star className="w-6 h-6 text-red-500 mb-2" />
              <h4 className="font-bold text-gray-800">专业背景</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 软件设计师 + CISP认证</li>
                <li>• 5年专注AI方向创新</li>
                <li>• 多项发明专利持有人</li>
              </ul>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-teal-50 p-4 rounded-lg border border-green-400">
              <Award className="w-6 h-6 text-green-500 mb-2" />
              <h4 className="font-bold text-gray-800">项目经验</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 智慧投行服务平台负责人</li>
                <li>• 数智型交易平台项目总监</li>
                <li>• 大型国企AI转型顾问</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 核心团队结构图 */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4 text-center text-gray-800">核心团队组成结构</h3>
        <div className="grid grid-cols-5 gap-4">
          {[
            { name: "洪浩东", role: "项目总监", bg: "bg-blue-100", color: "text-blue-600" },
            { name: "曾晶", role: "咨询顾问", bg: "bg-green-100", color: "text-green-600" },
            { name: "刘大畅", role: "技术专家", bg: "bg-purple-100", color: "text-purple-600" },
            { name: "刘景彬", role: "业务分析师", bg: "bg-yellow-100", color: "text-yellow-600" },
            { name: "赵子龙", role: "架构师", bg: "bg-red-100", color: "text-red-600" }
          ].map((member, index) => (
            <div key={index} className="text-center">
              <div className={`${member.bg} p-6 rounded-lg mb-2`}>
                <div className="w-16 h-16 bg-white rounded-full mx-auto mb-2 flex items-center justify-center border border-gray-300">
                  <Users className="w-8 h-8 text-gray-600" />
                </div>
                <h5 className="font-bold text-gray-800">{member.name}</h5>
                <p className={`text-sm ${member.color}`}>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 专业背景匹配度 */}
      <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg border border-gray-300">
        <h3 className="text-lg font-bold mb-4 text-center text-gray-800">团队专业背景与项目需求匹配度</h3>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-indigo-50 p-4 rounded border border-indigo-400">
            <h4 className="font-bold text-indigo-600 mb-2">AI技术专长</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• AI框架研发经验</li>
              <li>• 智能投行创新实践</li>
              <li>• 大数据分析能力</li>
            </ul>
          </div>
          <div className="bg-orange-50 p-4 rounded border border-orange-400">
            <h4 className="font-bold text-orange-600 mb-2">能源行业背景</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 光伏发电项目经验</li>
              <li>• 数字城市项目实践</li>
              <li>• 供水信息化建设</li>
            </ul>
          </div>
          <div className="bg-teal-50 p-4 rounded border border-teal-400">
            <h4 className="font-bold text-teal-600 mb-2">系统集成能力</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 架构设计专长</li>
              <li>• 数据治理经验</li>
              <li>• 安全体系建设</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// Slide3: 专家委员会配备
const Slide3Content = () => {
  const expertGroups = [
    {
      title: "燃气行业专家组",
      color: "red",
      experts: [
        { title: "首席燃气运营专家", desc: "20+年燃气运营经验" },
        { title: "管网安全专家", desc: "多项国家标准参与者" },
        { title: "综合能源专家", desc: "智慧能源试点顾问" }
      ]
    },
    {
      title: "AI技术专家组",
      color: "blue",
      experts: [
        { title: "AI算法架构师", desc: "工业AI应用专家" },
        { title: "大模型应用专家", desc: "垂直行业应用专家" },
        { title: "计算机视觉专家", desc: "管网巡检场景专家" }
      ]
    },
    {
      title: "安全管理专家组",
      color: "green",
      experts: [
        { title: "工业安全专家", desc: "危化品安全管理专家" },
        { title: "网络安全专家", desc: "关键基础设施安全专家" },
        { title: "合规管理专家", desc: "AI伦理与合规专家" }
      ]
    },
    {
      title: "数据治理专家组",
      color: "purple",
      experts: [
        { title: "数据架构专家", desc: "数据中台建设专家" },
        { title: "数据安全专家", desc: "关键数据保护专家" },
        { title: "数据分析专家", desc: "时序数据分析专家" }
      ]
    }
  ];

  return (
    <div className="w-full">
      <h3 className="text-xl font-bold mb-6 text-center text-gray-800">专家委员会组成架构</h3>
      
      <div className="grid grid-cols-2 gap-6">
        {expertGroups.map((group, index) => {
          const bgClass = `bg-gradient-to-r from-${group.color}-50 to-${group.color}-100`;
          const textClass = `text-${group.color}-600`;
          const iconClass = `text-${group.color}-500`;
          
          return (
            <div key={index} className={`${bgClass} p-6 rounded-lg border border-${group.color}-400`}>
              <h4 className={`text-lg font-bold ${textClass} mb-4`}>{group.title}</h4>
              <div className="space-y-3">
                {group.experts.map((expert, idx) => (
                  <div key={idx} className="flex gap-3">
                    <Shield className={`w-5 h-5 ${iconClass} flex-shrink-0 mt-1`} />
                    <div>
                      <div className="font-bold text-sm text-gray-800">{expert.title}</div>
                      <div className="text-xs text-gray-600">{expert.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      
      {/* 专家参与机制 */}
      <div className="mt-8 bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg border border-gray-300">
        <h3 className="text-lg font-bold mb-4 text-center text-gray-800">专家参与机制</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-blue-100 p-4 rounded text-center">
            <Clock className="w-8 h-8 mx-auto mb-2 text-blue-500" />
            <h5 className="font-bold text-gray-800">定期驻场</h5>
            <p className="text-sm text-gray-600">核心专家月度驻场2-3天</p>
          </div>
          <div className="bg-green-100 p-4 rounded text-center">
            <BookOpen className="w-8 h-8 mx-auto mb-2 text-green-500" />
            <h5 className="font-bold text-gray-800">专题研讨</h5>
            <p className="text-sm text-gray-600">关键节点专题评审</p>
          </div>
          <div className="bg-purple-100 p-4 rounded text-center">
            <PhoneCall className="w-8 h-8 mx-auto mb-2 text-purple-500" />
            <h5 className="font-bold text-gray-800">远程支持</h5>
            <p className="text-sm text-gray-600">7×24小时专家响应通道</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Slide4: 质量保障体系
const Slide4Content = () => {
  return (
    <div className="w-full">
      {/* 三级质量控制机制 */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-6 text-center text-gray-800">三级质量控制机制</h3>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-gradient-to-b from-green-50 to-green-100 p-6 rounded-lg border border-green-400 text-center">
            <CheckCircle className="w-12 h-12 mx-auto mb-4 text-green-500" />
            <h4 className="text-lg font-bold mb-3 text-gray-800">第一级：自检</h4>
            <ul className="text-sm text-gray-600 space-y-2 text-left">
              <li>• 项目组成员自查</li>
              <li>• 成果格式规范检查</li>
              <li>• 内容初步验证</li>
            </ul>
          </div>
          <div className="bg-gradient-to-b from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-400 text-center">
            <Shield className="w-12 h-12 mx-auto mb-4 text-blue-500" />
            <h4 className="text-lg font-bold mb-3 text-gray-800">第二级：专家评审</h4>
            <ul className="text-sm text-gray-600 space-y-2 text-left">
              <li>• 专家团队评估</li>
              <li>• 专业性深度审查</li>
              <li>• 可行性验证</li>
            </ul>
          </div>
          <div className="bg-gradient-to-b from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-400 text-center">
            <Award className="w-12 h-12 mx-auto mb-4 text-purple-500" />
            <h4 className="text-lg font-bold mb-3 text-gray-800">第三级：客户验收</h4>
            <ul className="text-sm text-gray-600 space-y-2 text-left">
              <li>• 甲方需求符合度检查</li>
              <li>• 最终成果验收</li>
              <li>• 满意度评估</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* 周报与例会制度 */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4 text-center text-gray-800">周报与例会制度</h3>
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 p-4 rounded-lg border border-red-400">
            <h5 className="font-bold text-red-600 mb-2">日会制度</h5>
            <p className="text-sm text-gray-600">15分钟站立会议</p>
            <p className="text-sm text-gray-600">快速同步进展</p>
          </div>
          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-4 rounded-lg border border-yellow-400">
            <h5 className="font-bold text-yellow-600 mb-2">周报制度</h5>
            <p className="text-sm text-gray-600">周度进展总结</p>
            <p className="text-sm text-gray-600">问题及时上报</p>
          </div>
          <div className="bg-gradient-to-r from-green-50 to-teal-50 p-4 rounded-lg border border-green-400">
            <h5 className="font-bold text-green-600 mb-2">专题会议</h5>
            <p className="text-sm text-gray-600">技术方案研讨</p>
            <p className="text-sm text-gray-600">难题攻坚</p>
          </div>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-400">
            <h5 className="font-bold text-blue-600 mb-2">里程碑评审</h5>
            <p className="text-sm text-gray-600">阶段成果评估</p>
            <p className="text-sm text-gray-600">方向调整</p>
          </div>
        </div>
      </div>
      
      {/* 全流程质量管理体系 */}
      <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg border border-gray-300">
        <h3 className="text-lg font-bold mb-4 text-center text-gray-800">全流程质量管理体系</h3>
        <div className="flex justify-between">
          {["规划", "设计", "实施", "验收", "持续改进"].map((phase, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full mx-auto mb-2 flex items-center justify-center">
                <div className="font-bold text-gray-800">{phase}</div>
              </div>
              {index < 4 && (
                <div className="absolute left-1/2 w-20 h-0.5 bg-gray-400 mt-10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Slide5: 驻场服务承诺
const Slide5Content = () => {
  return (
    <div className="w-full">
      {/* 驻场团队组成 */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-6 text-center text-gray-800">驻场团队组成与工作方式</h3>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-400">
            <h4 className="font-bold text-blue-600 mb-3">核心驻场团队</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• 项目经理（全职）</li>
              <li>• 技术专家（80%驻场）</li>
              <li>• 咨询顾问（60%驻场）</li>
              <li>• 业务分析师（40%驻场）</li>
            </ul>
          </div>
          <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg border border-green-400">
            <h4 className="font-bold text-green-600 mb-3">驻场时间安排</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• 第1-4周：全员驻场</li>
              <li>• 第5-8周：核心团队驻场</li>
              <li>• 第9-12周：专家轮值驻场</li>
              <li>• 关键节点全员到场</li>
            </ul>
          </div>
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-400">
            <h4 className="font-bold text-purple-600 mb-3">工作地点安排</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• 深圳燃气总部为主</li>
              <li>• 分公司现场调研</li>
              <li>• 线上协作支持</li>
              <li>• 远程紧急响应</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* 7×24小时服务机制 */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4 text-center text-gray-800">7×24小时服务机制</h3>
        <div className="flex justify-center gap-12">
          <div className="text-center">
            <div className="bg-red-100 w-24 h-24 rounded-full flex items-center justify-center mb-4">
              <PhoneCall className="w-12 h-12 text-red-500" />
            </div>
            <h5 className="font-bold text-gray-800">24h热线</h5>
            <p className="text-sm text-gray-600">专享服务通道</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-24 h-24 rounded-full flex items-center justify-center mb-4">
              <Bell className="w-12 h-12 text-blue-500" />
            </div>
            <h5 className="font-bold text-gray-800">实时告警</h5>
            <p className="text-sm text-gray-600">15分钟响应</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mb-4">
              <Laptop className="w-12 h-12 text-green-500" />
            </div>
            <h5 className="font-bold text-gray-800">远程支持</h5>
            <p className="text-sm text-gray-600">随时协作</p>
          </div>
        </div>
      </div>
      
      {/* 知识转移保障 */}
      <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg border border-gray-300">
        <h3 className="text-lg font-bold mb-4 text-center text-gray-800">知识转移保障承诺</h3>
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-indigo-100 p-4 rounded text-center">
            <BookOpen className="w-8 h-8 mx-auto mb-2 text-indigo-500" />
            <h5 className="font-bold text-gray-800">培训体系</h5>
            <p className="text-sm text-gray-600">全员培训计划</p>
          </div>
          <div className="bg-purple-100 p-4 rounded text-center">
            <Users className="w-8 h-8 mx-auto mb-2 text-purple-500" />
            <h5 className="font-bold text-gray-800">专家指导</h5>
            <p className="text-sm text-gray-600">一对一带教</p>
          </div>
          <div className="bg-blue-100 p-4 rounded text-center">
            <Heart className="w-8 h-8 mx-auto mb-2 text-blue-500" />
            <h5 className="font-bold text-gray-800">能力转移</h5>
            <p className="text-sm text-gray-600">持续知识传递</p>
          </div>
          <div className="bg-green-100 p-4 rounded text-center">
            <Award className="w-8 h-8 mx-auto mb-2 text-green-500" />
            <h5 className="font-bold text-gray-800">持续支持</h5>
            <p className="text-sm text-gray-600">3个月免费服务</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImplementationGuarantee;