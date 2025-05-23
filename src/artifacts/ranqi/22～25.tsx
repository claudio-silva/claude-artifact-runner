import React, { useState, useEffect } from 'react';
import { Award, CheckCircle, TrendingUp, Shield, BookOpen, Target, Users, Briefcase, Handshake, Star } from 'lucide-react';

const PPTSlide = ({ children, title }) => (
  <div className="bg-white min-h-screen w-full text-gray-800 p-12 flex flex-col shadow-lg">
    <div className="mb-8">
      <h1 className="text-4xl font-bold text-center text-blue-600">{title}</h1>
    </div>
    <div className="flex-1 flex items-center justify-center">
      {children}
    </div>
  </div>
);

const PPTPart5 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "类似项目成功案例概览",
      content: <CaseOverview />
    },
    {
      title: "数智型交易平台项目背景与目标",
      content: <ProjectBackground />
    },
    {
      title: "数智型交易平台评估方法论",
      content: <AssessmentMethodology />
    },
    {
      title: "数字化成熟度评估结果",
      content: <MaturityResults />
    },
    {
      title: "六大核心建设路径",
      content: <BuildingPaths />
    },
    {
      title: "预期价值实现",
      content: <ExpectedValue />
    },
    {
      title: "团队优势展示",
      content: <TeamAdvantages />
    },
    {
      title: "服务承诺与价值保障",
      content: <ServiceCommitment />
    },
    {
      title: "致谢与合作期待",
      content: <ThankYou />
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

const CaseOverview = () => {
  const projects = [
    {
      title: "数智型交易平台项目",
      client: "南方联合产权交易中心",
      highlight: true,
      description: "构建数智型交易平台，提升数字化成熟度，加速业务转型升级"
    },
    {
      title: "智慧城市项目",
      client: "中新生态城",
      description: "城市级别的全域管理数字化，打破传统能源系统各自为政的局面"
    },
    {
      title: "数字化转型项目",
      client: "龙华区数字城市",
      description: "公共服务领域的智能化转型，深度理解燃气等关键基础设施特殊需求"
    }
  ];

  return (
    <div className="w-full max-w-6xl">
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <div 
            key={index}
            className={`rounded-lg p-6 border-2 transition-transform hover:scale-102 ${
              project.highlight 
                ? 'border-yellow-500 bg-gradient-to-r from-yellow-50 to-orange-50 scale-105' 
                : 'border-blue-500 bg-gradient-to-r from-blue-50 to-purple-50'
            }`}
          >
            <div className="flex items-center gap-4">
              <Award className={`w-10 h-10 ${project.highlight ? 'text-yellow-500' : 'text-blue-500'}`} />
              <div>
                <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
                <p className="text-lg text-gray-600">{project.client}</p>
              </div>
            </div>
            <p className="mt-4 text-lg text-gray-700">{project.description}</p>
            {project.highlight && (
              <div className="mt-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="text-yellow-600 font-bold">本次案例重点分享</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const ProjectBackground = () => {
  return (
    <div className="w-full max-w-6xl grid grid-cols-2 gap-8">
      <div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-lg border border-red-400">
        <h2 className="text-2xl font-bold mb-6 text-red-600">核心挑战</h2>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Shield className="w-6 h-6 text-orange-500 mt-1" />
            <div>
              <h3 className="font-bold text-gray-800">行业竞争压力</h3>
              <p className="text-gray-600">传统证券类交易场所加大创新力度</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Shield className="w-6 h-6 text-orange-500 mt-1" />
            <div>
              <h3 className="font-bold text-gray-800">数据价值发掘不足</h3>
              <p className="text-gray-600">存在"信息孤岛"，数据共享机制不完善</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Shield className="w-6 h-6 text-orange-500 mt-1" />
            <div>
              <h3 className="font-bold text-gray-800">系统协同困境</h3>
              <p className="text-gray-600">核心业务系统间集成度不高</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Shield className="w-6 h-6 text-orange-500 mt-1" />
            <div>
              <h3 className="font-bold text-gray-800">人才队伍建设滞后</h3>
              <p className="text-gray-600">复合型人才储备不足</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-green-50 to-teal-50 p-8 rounded-lg border border-green-400">
        <h2 className="text-2xl font-bold mb-6 text-green-600">战略定位</h2>
        <div className="space-y-6">
          <div className="bg-gray-100 p-4 rounded">
            <p className="text-lg italic text-gray-700">"打造集约高效、智能精准的现代化综合性产权交易平台，构建开放共享、协同创新的服务生态"</p>
          </div>
          <div className="flex items-center gap-4">
            <Target className="w-8 h-8 text-green-500" />
            <div>
              <h3 className="font-bold text-lg text-gray-800">四化建设理念</h3>
              <div className="flex gap-4 mt-2">
                <span className="bg-green-100 px-3 py-1 rounded-full text-green-700">数字化</span>
                <span className="bg-green-100 px-3 py-1 rounded-full text-green-700">智能化</span>
                <span className="bg-green-100 px-3 py-1 rounded-full text-green-700">平台化</span>
                <span className="bg-green-100 px-3 py-1 rounded-full text-green-700">生态化</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Users className="w-8 h-8 text-green-500" />
            <div>
              <h3 className="font-bold text-lg text-gray-800">核心团队</h3>
              <p className="text-gray-600">7位专家，涵盖数字化转型、产权交易、AI战略等专业领域</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AssessmentMethodology = () => {
  const capabilities = [
    { name: "数字化治理", weight: "15%", icon: Shield },
    { name: "数据管理", weight: "15%", icon: BookOpen },
    { name: "数字基础设施", weight: "15%", icon: Award },
    { name: "产品服务数字化", weight: "15%", icon: Target },
    { name: "经营管理数字化", weight: "15%", icon: Users },
    { name: "运营数字化", weight: "10%", icon: TrendingUp },
    { name: "内控体系数字化", weight: "10%", icon: CheckCircle },
    { name: "可持续发展基础", weight: "5%", icon: Star }
  ];

  return (
    <div className="w-full max-w-7xl">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">8大能力要素评估框架</h2>
        <div className="bg-gray-100 rounded-lg p-6 inline-block">
          <p className="text-lg text-gray-700">构建了8大能力要素 × 19个能力域 × 38个能力子域的三级评估框架</p>
        </div>
      </div>
      
      <div className="grid grid-cols-4 gap-4">
        {capabilities.map((cap, index) => {
          const Icon = cap.icon;
          return (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-400">
              <Icon className="w-8 h-8 text-blue-500 mb-3" />
              <h3 className="font-bold mb-2 text-gray-800">{cap.name}</h3>
              <div className="bg-blue-100 text-blue-700 rounded-full px-3 py-1 inline-block">
                <span className="text-sm font-bold">权重: {cap.weight}</span>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-8 bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg border border-green-400">
        <h3 className="text-xl font-bold mb-4 text-gray-800">评估方法</h3>
        <div className="grid grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-2 flex items-center justify-center">
              <BookOpen className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="font-bold text-gray-800">资料收集</h4>
            <p className="text-sm text-gray-600">梳理分析600余份内部文档</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-2 flex items-center justify-center">
              <Users className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="font-bold text-gray-800">实地调研</h4>
            <p className="text-sm text-gray-600">对19个部门进行访谈</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-2 flex items-center justify-center">
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="font-bold text-gray-800">数据分析</h4>
            <p className="text-sm text-gray-600">定量定性结合评估</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const MaturityResults = () => {
  const scores = [
    { name: "数字化治理", score: 3.85, color: "from-green-200 to-teal-200" },
    { name: "数据管理", score: 2.82, color: "from-yellow-200 to-orange-200" },
    { name: "数字基础设施", score: 3.21, color: "from-blue-200 to-indigo-200" },
    { name: "产品服务数字化", score: 3.20, color: "from-purple-200 to-pink-200" },
    { name: "经营管理数字化", score: 3.15, color: "from-red-200 to-rose-200" },
    { name: "运营数字化", score: 3.00, color: "from-orange-200 to-amber-200" },
    { name: "内控数字化", score: 2.85, color: "from-indigo-200 to-violet-200" },
    { name: "可持续发展基础", score: 3.00, color: "from-teal-200 to-cyan-200" }
  ];

  return (
    <div className="w-full max-w-7xl">
      <div className="text-center mb-8">
        <div className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg p-6 border border-blue-400">
          <h2 className="text-3xl font-bold mb-2 text-gray-800">综合成熟度等级：三级（发展级）</h2>
          <p className="text-2xl text-gray-700">总体得分：3.16分（满分5分）</p>
        </div>
      </div>
      
      <div className="space-y-4">
        {scores.map((item, index) => (
          <div key={index} className="bg-gray-100 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold w-48 text-gray-800">{item.name}</span>
              <span className="font-bold text-gray-800">{item.score}分</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-3">
              <div 
                className={`h-3 rounded-full bg-gradient-to-r ${item.color}`}
                style={{ width: `${(item.score / 5) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 grid grid-cols-3 gap-4">
        <div className="bg-red-50 p-4 rounded-lg border border-red-400">
          <h3 className="font-bold text-red-600 mb-2">关键发现1</h3>
          <p className="text-gray-700">数据治理基础薄弱，缺乏企业级数据中台</p>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-400">
          <h3 className="font-bold text-yellow-600 mb-2">关键发现2</h3>
          <p className="text-gray-700">系统集成度不足，难以提供一站式服务</p>
        </div>
        <div className="bg-orange-50 p-4 rounded-lg border border-orange-400">
          <h3 className="font-bold text-orange-600 mb-2">关键发现3</h3>
          <p className="text-gray-700">复合型数字化人才储备不足</p>
        </div>
      </div>
    </div>
  );
};

const BuildingPaths = () => {
  const paths = [
    {
      title: "强化数字化顶层设计",
      actions: ["成立数字化转型领导小组", "制定五年数字化转型规划", "设立CDO/CIO岗位"],
      icon: Shield
    },
    {
      title: "夯实数据资源管理",
      actions: ["建立数据分类分级体系", "构建企业级数据中台", "推动数据资产化"],
      icon: BookOpen
    },
    {
      title: "加快关键信息系统升级",
      actions: ["推进核心系统云原生架构", "引入区块链技术创新", "打造开放API平台"],
      icon: Award
    },
    {
      title: "培育平台经济+开放生态",
      actions: ["搭建开发者平台", "开展数据要素交易试点", "构建完整开放生态体系"],
      icon: Target
    },
    {
      title: "深化机制体制改革",
      actions: ["实施契约化管理", "建立数字化绩效考核", "打造敏捷决策执行体系"],
      icon: Users
    },
    {
      title: "加快数字化人才建设",
      actions: ["制定人才引进计划", "建立数字技能培训体系", "构建多元化激励体系"],
      icon: TrendingUp
    }
  ];

  return (
    <div className="w-full max-w-7xl">
      <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">六大核心建设路径赋能转型</h2>
      <div className="grid grid-cols-3 gap-6">
        {paths.map((path, index) => {
          const Icon = path.icon;
          return (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-400">
              <div className="flex items-center gap-3 mb-4">
                <Icon className="w-8 h-8 text-blue-500" />
                <h3 className="font-bold text-lg text-gray-800">{path.title}</h3>
              </div>
              <ul className="space-y-2">
                {path.actions.map((action, actionIndex) => (
                  <li key={actionIndex} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-700">{action}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      
      <div className="mt-8 text-center">
        <div className="inline-block bg-gradient-to-r from-green-100 to-teal-100 rounded-lg p-6 border border-green-400">
          <h3 className="text-xl font-bold text-gray-800">24项具体实施举措已形成完整建设路径</h3>
        </div>
      </div>
    </div>
  );
};

const ExpectedValue = () => {
  const values = [
    {
      title: "数据资产价值",
      value: "+30%",
      description: "通过数据治理提升数据资产价值",
      icon: BookOpen,
      color: "blue"
    },
    {
      title: "运营效率提升",
      value: "+40%",
      description: "通过流程再造和自动化提升效率",
      icon: TrendingUp,
      color: "green"
    },
    {
      title: "IT运维成本",
      value: "-25%",
      description: "通过系统整合和云化改造降低成本",
      icon: Award,
      color: "yellow"
    },
    {
      title: "业务增长预期",
      value: "+15-20%",
      description: "通过数字化创新带来业务增长",
      icon: Target,
      color: "purple"
    }
  ];

  return (
    <div className="w-full max-w-7xl">
      <div className="grid grid-cols-2 gap-8">
        {values.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className={`bg-${item.color}-50 p-8 rounded-lg border-2 border-${item.color}-400`}>
              <div className="flex items-center gap-4 mb-4">
                <Icon className={`w-12 h-12 text-${item.color}-500`} />
                <h3 className="text-2xl font-bold text-gray-800">{item.title}</h3>
              </div>
              <div className="text-5xl font-bold mb-2 text-yellow-600">{item.value}</div>
              <p className="text-gray-600">{item.description}</p>
            </div>
          );
        })}
      </div>
      
      <div className="mt-8 bg-gradient-to-r from-green-50 to-teal-50 p-8 rounded-lg border border-green-400">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">核心交付成果</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
            <CheckCircle className="w-6 h-6 text-green-500" />
            <span className="text-gray-700">《数智型交易平台成熟度指标体系构建报告》</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="w-6 h-6 text-green-500" />
            <span className="text-gray-700">《数智型交易平台成熟度评估诊断报告》</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="w-6 h-6 text-green-500" />
            <span className="text-gray-700">《数智型交易平台建设路径研究报告》</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="w-6 h-6 text-green-500" />
            <span className="text-gray-700">数字化转型关键项目库（25个）</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const TeamAdvantages = () => {
  const advantages = [
    {
      title: "专利成果",
      items: [
        "AI驱动智能投行服务系统专利",
        "基于人工智能的智能表格数据处理分析工具",
        "多项技术创新专利申请中"
      ],
      icon: Award
    },
    {
      title: "资质证书",
      items: [
        "软件设计师",
        "注册信息安全专业人员（CISP）",
        "咨询工程师（投资）"
      ],
      icon: Shield
    },
    {
      title: "大型项目经验",
      items: [
        "福田区妇幼保健院信息化咨询（100万元）",
        "宝安区教育数字化转型（126.8万元）",
        "中国移动数字化服务支撑（372.6万元）"
      ],
      icon: Briefcase
    }
  ];

  return (
    <div className="w-full max-w-7xl">
      <div className="grid gap-8">
        {advantages.map((advantage, index) => {
          const Icon = advantage.icon;
          return (
            <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg border border-blue-400">
              <div className="flex items-center gap-4 mb-6">
                <Icon className="w-10 h-10 text-blue-500" />
                <h3 className="text-2xl font-bold text-gray-800">{advantage.title}</h3>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {advantage.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="bg-gray-100 p-4 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 mb-2" />
                    <p className="text-sm text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-8 text-center">
        <div className="inline-block bg-gradient-to-r from-green-100 to-teal-100 rounded-lg p-8 border border-green-400">
          <h3 className="text-xl font-bold mb-4 text-gray-800">核心团队价值</h3>
          <p className="text-lg text-gray-700">项目总监洪浩东先生：AI规划咨询专家，已评选为公司三级技术专家</p>
          <p className="text-lg text-gray-700">7人专家团队：涵盖数字化转型、产权交易、AI战略等专业领域</p>
        </div>
      </div>
    </div>
  );
};

const ServiceCommitment = () => {
  const commitments = [
    {
      title: "项目成果质量保障",
      items: [
        "三级质量控制机制",
        "阶段性评审验收",
        "专家委员会复核"
      ],
      icon: Shield
    },
    {
      title: "持续服务保障",
      items: [
        "项目后3个月免费咨询",
        "24小时紧急响应",
        "年度AI应用评估"
      ],
      icon: Target
    },
    {
      title: "投资收益预估",
      items: [
        "AI投资综合回报率>200%",
        "运营成本降低15-25%",
        "数据价值提升30%"
      ],
      icon: TrendingUp
    }
  ];

  return (
    <div className="w-full max-w-7xl">
      <div className="grid gap-8">
        {commitments.map((commitment, index) => {
          const Icon = commitment.icon;
          return (
            <div key={index} className="bg-gradient-to-r from-green-50 to-teal-50 p-8 rounded-lg border border-green-400">
              <div className="flex items-center gap-4 mb-6">
                <Icon className="w-10 h-10 text-green-500" />
                <h3 className="text-2xl font-bold text-gray-800">{commitment.title}</h3>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {commitment.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="bg-gray-100 p-4 rounded-lg text-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mx-auto mb-2" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg border border-blue-400">
        <h3 className="text-xl font-bold text-center mb-4 text-gray-800">服务承诺总结</h3>
        <p className="text-center text-lg text-gray-700">"确保深圳燃气在AI转型过程中实现价值最大化，保质保量完成战略规划，助力成为行业智能化转型标杆"</p>
      </div>
    </div>
  );
};

const ThankYou = () => {
  return (
    <div className="w-full max-w-7xl flex flex-col items-center justify-center text-center">
      <div className="mb-8">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">感谢各位专家的聆听与指导</h2>
        <p className="text-2xl text-gray-600 mb-6">期待与深圳燃气共同开创AI转型新篇章</p>
      </div>
      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg border border-blue-400 w-full max-w-4xl">
        <div className="flex items-center justify-center gap-8 mb-8">
          <Handshake className="w-16 h-16 text-blue-500" />
          <Star className="w-16 h-16 text-yellow-500" />
          <Handshake className="w-16 h-16 text-green-500" />
        </div>
        
        <h3 className="text-2xl font-bold mb-6 text-gray-800">我们对深圳燃气的理解与承诺</h3>
        <div className="grid grid-cols-2 gap-6 text-left">
          <div>
            <h4 className="font-bold mb-2 text-blue-600">理解</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• 城市关键基础设施的特殊性</li>
              <li>• 四大业务板块的协同需求</li>
              <li>• 安全第一的核心价值观</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2 text-green-600">承诺</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• 12周高质量完成规划任务</li>
              <li>• 知识转移与能力建设</li>
              <li>• 长期合作伙伴共创未来</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
          共创智慧能源未来，成就AI转型标杆
        </h3>
        <p className="text-xl text-gray-500">谢谢大家！</p>
      </div>
    </div>
  );
};

export default PPTPart5;