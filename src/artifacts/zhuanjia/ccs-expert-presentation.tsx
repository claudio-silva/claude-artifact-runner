import React, { useState, useEffect } from 'react';
import { Award, Briefcase, Users, BookOpen, Rocket } from 'lucide-react';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // 封面
    {
      title: "CCS技术专家评选汇报",
      type: "cover",
      content: {
        name: "洪浩东",
        position: "高级项目主办",
        company: "中通南方七分公司/项目一部",
        specialty: "人工智能与大数据",
        subSpecialty: "自然语言处理/NLP",
        titles: ["省公司AI研究院副院长", "中通南方AI行业赛道总监"],
        date: "2025年10月31日"
      }
    },
    
    // 个人基本情况
    {
      title: "个人基本情况",
      type: "profile",
      icon: <Award className="w-8 h-8" />,
      content: {
        photo: "/myself.jpg",
        education: [
          { label: "学历背景", value: "本科 | 华南农业大学 | 软件工程" },
          { label: "专业关联", value: "专业与工作高度相关" }
        ],
        experience: [
          { label: "工作年限", value: "5年+" },
          { label: "专业方向", value: "人工智能与大数据 - 自然语言处理/NLP" }
        ],
        positions: [
          { title: "重要职务", items: ["省公司AI研究院副院长", "中通南方AI行业赛道总监", "高级项目主办"] }
        ],
        qualifications: [
          { title: "职称资质", items: ["软考中级 - 软件设计师(2020)", "CISP - 注册信息安全工程师(2024)"] },
          { title: "专家头衔", items: ["2025年优秀三级技术专家", "揭榜挂帅项目负责人(2项)"] }
        ],
        summary: "作为一名充满激情的软件设计师，拥有5年的工作经验。我专注于利用创新技术提升项目效率和质量，尤其在人工智能、系统架构和项目管理领域有深厚造诣。我不仅负责多个关键项目的设计和实施，且积极参与推动公司的数字化转型和技术进步的工作。我对新技术保持持续学习的热情，并善于将这些技术应用于实际工作中，不断优化流程，提高团队的整体能力。"
      }
    },

    // 揭榜挂帅项目与内部创新
    {
      title: "揭榜挂帅项目与内部创新",
      type: "innovation-projects",
      icon: <Rocket className="w-8 h-8" />,
      content: {
        intro: "作为负责人主持2个揭榜挂帅项目，均为自主独立开发，已成功验收并广泛应用",
        projects: [
          {
            name: "SmartSVG智能图形生成平台",
            type: "揭榜挂帅项目",
            role: "项目负责人 & 独立开发",
            highlights: [
              "基于AI大模型的SVG矢量图形自动生成系统",
              "自然语言生成网络拓扑图、系统架构图、数据分析图表",
              "采用Langchain框架、大语言模型(DeepSeek系列)、提示词优化引擎",
              "已在公司内部应用，显著提升设计、投标、数据分析效率"
            ],
            value: "解决图形化表达痛点，实现'一个平台、全场景赋能'"
          },
          {
            name: "CC-Extension中移全生命周期流程辅助工具",
            type: "揭榜挂帅项目",
            role: "项目负责人 & 独立开发",
            highlights: [
              "基于浏览器扩展的多系统协同自动化工具",
              "Chrome Extension Manifest V3架构，非侵入式设计",
              "单站点流程操作时间从150分钟缩短至30分钟，效率提升80%",
              "已在中国移动PMS系统实际应用并验证"
            ],
            value: "解决多系统操作繁琐、重复录入等痛点，年节省工时4000+小时"
          }
        ],
        summary: "两个项目均体现了AI技术与业务场景的深度融合，实现了从痛点识别到方案落地的完整闭环"
      }
    },

    // 重点项目攻坚
    {
      title: "重点项目攻坚",
      type: "projects1",
      icon: <Briefcase className="w-8 h-8" />,
      content: {
        description: [
          "说明：项目应当逐个填写，合同额填写本单位完成承接部分的合同规模",
          "说明：近三年，攻坚的重点项目应当是企业内部的重大项目，实际参与项目实施，为公司带来业绩贡献，发挥一定重要作用，根据参与的重点项目实际合同规模计分，参与多个重点项目可以累计加分，其中2千万以下项目数量合计不超过5个，合计不超过10个。"
        ],
        projects: [
          {
            name: "广东省政法跨部门大数据办案平台广州分中心（市司法局分平台）二期项目",
            contractNo: "/",
            role: "总负责人",
            amount: "99万元",
            score: "3.00",
            description: "作为项目经理主持该项目，投资约99万元，主要内容包括在市属三所监狱部署省监狱业务系统、开发跨部门协同组卷功能、在司法大脑上进行政法跨部门大数据办案平台数据分析等。项目运用大数据技术，解决跨部门案件办理效率低、数据共享不足等问题，显著提升了广州市司法服务的质量和效率，计划于2025年9月完成建设并通过验收。"
          },
          {
            name: "广州市文旅局公共文化云信创改造项目",
            contractNo: "/",
            role: "总负责人",
            amount: "25万元",
            score: "3.00",
            description: "作为软件工程师参与方案设计（合同金额25万元）。在此期间，受广州市文化广电旅游局委托进行信息化现状调研（合同金额8万元），通过深入分析发现现有实施单位存在的诸多问题，并向文旅局提供客观、有依据的改进建议，获得了高度认可。随后，与咨询院研发团队密切合作，对现有平台交付的源码进行完整性验证。展示了在信息化咨询和系统评估方面的专业能力。"
          },
          {
            name: "自治区一体化数据资源服务平台建设项目可行性研究报告编制",
            contractNo: "/",
            role: "总负责人",
            amount: "22万元",
            score: "3.00",
            description: "参与自治区一体化数据资源服务平台建设项目可行性研究报告（代项目建议书）编制项目，负责项目需求分析、技术方案设计等工作。项目规模较大，涉及数据资源整合、平台建设等多个方面。"
          },
          {
            name: "天翼视联科技有限公司视联网AI产品端到端适配测试项目",
            contractNo: "/",
            role: "总负责人",
            amount: "185万元",
            score: "3.00",
            description: "作为项目经理参与天翼视联科技有限公司视联网AI产品端到端适配测试项目软件开发，合同金额185万元。负责应用软件的设计开发、移交、培训及相关服务工作。项目采用人工智能技术进行视联网AI产品的端到端适配测试，涉及软件开发、系统集成、测试验证等多个环节。通过本项目的实施，成功完成了视联网AI产品的适配测试工作，提升了产品的稳定性和可靠性，为客户的业务发展提供了有力的技术支撑。"
          },
          {
            name: "广州市文旅局全过程咨询服务项目",
            contractNo: "NF-SRHT-DX-2024-01172",
            role: "总负责人",
            amount: "44.588万元",
            score: "3.00",
            description: "作为技术人员参与广州市文旅局全过程咨询服务项目，负责项目审核咨询、验收前符合性审查咨询等工作。项目服务期为12个月，主要内容包括对省直各单位政务信息化项目进行第三方咨询服务，协助广东省政务服务和数据管理局进行项目审核、验收符合性审查、项目编制单位调研等工作。通过本项目的实施，提升了广东省政务信息化项目的建设质量和规范性，为省级数字政府建设提供专业技术支撑。"
          }
        ]
      }
    },

    // 重大项目支撑 - 第2页
    {
      title: "内部创新项目展示",
      type: "projects2",
      icon: <Briefcase className="w-8 h-8" />,
      content: {
        innovation: [
          {
            name: "SmartSVG智能图形生成平台",
            role: "项目负责人 & 独立开发",
            desc: "基于AI大模型的SVG矢量图形自动生成系统，支持自然语言生成网络拓扑图、系统架构图、数据分析图表。采用Langchain框架和大语言模型，已在公司内部广泛应用。",
            image: "/smartsvg.png",
            highlights: [
              "自然语言生成专业图形",
              "Langchain + DeepSeek架构",
              "显著提升设计效率"
            ]
          },
          {
            name: "CC-Extension中移全生命周期流程辅助工具",
            role: "项目负责人 & 独立开发",
            desc: "基于Chrome Extension Manifest V3的多系统协同自动化工具，单站点操作时间从150分钟缩短至30分钟，效率提升80%，年节省工时4000+小时。",
            image: "/cc-extension.png",
            highlights: [
              "非侵入式浏览器扩展",
              "效率提升80%",
              "年节省4000+工时"
            ]
          }
        ]
      }
    },

    // 科技项目承接与研究成果
    {
      title: "科技项目承接与研究成果",
      type: "research-reports",
      icon: <BookOpen className="w-8 h-8" />,
      content: {
        intro: "作为负责人主持多项咨询研究项目，形成高质量研究报告",
        patent: {
          title: "发明专利",
          name: "一种AI驱动的智能投行服务系统及方法",
          role: "主要发明人",
          status: "2024年10月递交国家知识产权局",
          desc: "涉及大语言模型微调与训练、AI应用开发、知识图谱构建"
        },
        reports: [
          {
            title: "广州市公共文化云平台现状分析调研报告",
            date: "2024年6月",
            level: "地市级",
            highlight: "受广州市文化广电旅游局委托，提供客观改进建议，获得高度认可"
          },
          {
            title: "数智型交易平台成熟度指标体系构建报告",
            date: "2024年9月",
            level: "地市级",
            highlight: "构建科学评估体系，包含数字化治理、数据管理等多个维度"
          },
          {
            title: "南方联合产权交易中心数智型交易平台建设路径研究报告",
            date: "2025年10月",
            level: "地市级",
            highlight: "研究平台发展现状，提出数智型平台建设的关键路径"
          },
          {
            title: "南方产权数智型交易平台成熟度评估诊断报告",
            date: "2025年10月",
            level: "地市级",
            highlight: "全面评估数字化水平，识别问题和差距"
          }
        ]
      }
    },

    // 其他价值输出
    {
      title: "其他价值输出工作",
      type: "value",
      icon: <Users className="w-8 h-8" />,
      content: {
        aiLeadership: {
          title: "AI创新引领",
          items: [
            { label: "团队成绩", desc: "中通南方在集团AI创新活动3～6月连续四月均有同事获奖" },
            { label: "平台建设", desc: "主导SmartSVG和CC-Extension两个揭榜挂帅项目，推动AI技术在公司落地" },
            { label: "内部研发", desc: "为公司内部研发多个生产效率提升工具，善用AI工具赋能业务" }
          ]
        },
        training: {
          title: "培训赋能",
          items: [
            { name: "AI行业赛道培训", scale: "覆盖公司50+员工", impact: "显著提高员工使用AI工具的能力和工作效率" },
            { name: "数字政府行业赛道培训", scale: "培训公司20+员工", impact: "数字政府行业赛道培训，提高员工对数字政府行业的理解和能力" }
          ]
        },
        mentoring: {
          title: "团队培养",
          intro: "带教5名技术人才，形成梯队培养体系",
          members: [
            { name: "施唯", level: "下一级专家", achievement: "2025年优秀科技新星" },
            { name: "宋宇烨", level: "青年骨干", achievement: "2025年度考核良好" },
          ]
        }
      }
    },

    // 总结与反思
    {
      title: "个人反思与改进计划",
      type: "summary",
      icon: <Award className="w-8 h-8" />,
      content: {
        reflection: {
          title: "自我认知与反思",
          issues: [
            {
              problem: "时间管理能力不足",
              manifestation: "经常在承诺的时间内未能完成任务，影响团队协作效率",
              impact: "给领导和团队成员带来困扰，降低个人信誉度"
            },
            {
              problem: "不会合理拒绝",
              manifestation: "面对超出能力范围或时间冲突的任务，习惯性接受",
              impact: "导致任务积压、质量下降，增加自身压力和焦虑"
            }
          ]
        },
        improvement: {
          title: "改进措施与行动计划",
          plans: [
            {
              area: "时间管理优化",
              actions: [
                "采用番茄工作法，提高专注度和时间利用效率",
                "每天开始前制定任务优先级清单，区分紧急重要事项",
                "使用项目管理工具(Jira/Trello)追踪任务进度，及时预警延期风险",
                "为每个任务预留20%缓冲时间，应对突发情况"
              ]
            },
            {
              area: "学会合理拒绝",
              actions: [
                "评估新任务前，先审视当前工作负荷和时间安排",
                "对超出能力或时间冲突的任务，诚恳说明原因并提出替代方案",
                "建立'承诺前评估'机制：任务复杂度、所需时间、资源需求",
                "与领导保持透明沟通，及时反馈工作进展和困难"
              ]
            }
          ]
        },
        commitment: [
          "认真对待时间管理问题，将改进措施落到实处",
          "建立任务评估习惯，合理安排工作节奏",
          "提升沟通能力，学会在适当时候说'不'",
          "定期复盘反思，持续优化个人工作方法",
          "在保证质量的前提下，提高任务完成的及时性"
        ]
      }
    }
  ];

  // 键盘事件监听
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      } else if (event.key === 'ArrowRight') {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [slides.length]);

  const renderSlideContent = (slide) => {
    switch (slide.type) {
      case 'cover':
        return (
          <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-blue-600 to-purple-700 text-white p-12">
            <h1 className="text-5xl font-bold mb-8">{slide.title}</h1>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl w-full">
              <h2 className="text-4xl font-bold mb-6">{slide.content.name}</h2>
              <div className="space-y-3 text-xl">
                <p>{slide.content.position}</p>
                <p>{slide.content.company}</p>
                <div className="border-t border-white/30 my-4 pt-4">
                  {slide.content.titles.map((title, i) => (
                    <p key={i} className="text-yellow-300 font-semibold">✦ {title}</p>
                  ))}
                </div>
                <p className="text-blue-200 text-lg">{slide.content.specialty}</p>
                <p className="text-sm text-blue-200">{slide.content.subSpecialty}</p>
              </div>
              <p className="mt-8 text-lg text-blue-200">{slide.content.date}</p>
            </div>
          </div>
        );

      case 'profile':
        return (
          <div className="p-8 h-full overflow-y-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-blue-600">{slide.icon}</div>
              <h2 className="text-3xl font-bold text-gray-800">{slide.title}</h2>
            </div>

            {/* 上半部分：个人照片 + 基本信息 */}
            <div className="grid grid-cols-4 gap-6 mb-6">
              {/* 个人照片 - 占据1列，居中显示 */}
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="w-56 h-56 rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-500">
                    <img
                      src={slide.content.photo}
                      alt="个人照片"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-5 py-1.5 rounded-full text-base font-bold shadow-lg">
                    洪浩东
                  </div>
                </div>
              </div>

              {/* 右侧信息栏 - 占据3列 */}
              <div className="col-span-3 flex flex-col justify-center space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-xl p-4">
                    <h3 className="font-bold text-base mb-2 text-blue-900">教育背景</h3>
                    {slide.content.education.map((item, i) => (
                      <div key={i} className="mb-1 text-sm">
                        <span className="font-semibold text-gray-700">{item.label}:</span>
                        <span className="text-gray-600 ml-2">{item.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-green-50 rounded-xl p-4">
                    <h3 className="font-bold text-base mb-2 text-green-900">工作经验</h3>
                    {slide.content.experience.map((item, i) => (
                      <div key={i} className="mb-1 text-sm">
                        <span className="font-semibold text-gray-700">{item.label}:</span>
                        <span className="text-gray-600 ml-2">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl p-4">
                  <h3 className="font-bold text-base mb-2">重要职务</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {slide.content.positions[0].items.map((item, i) => (
                      <div key={i} className="flex items-center">
                        <span className="text-yellow-300 mr-2">★</span>
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 资质认证 */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {slide.content.qualifications.map((qual, i) => (
                <div key={i} className="bg-purple-50 rounded-xl p-4">
                  <h3 className="font-bold text-base mb-2 text-purple-900">{qual.title}</h3>
                  <ul className="space-y-1">
                    {qual.items.map((item, j) => (
                      <li key={j} className="text-gray-700 text-sm flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* 个人总结 */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl p-5 shadow-lg">
              <h3 className="font-bold text-lg mb-3 flex items-center">
                <span className="mr-2">💡</span>
                个人总结
              </h3>
              <p className="text-sm leading-relaxed opacity-95">
                {slide.content.summary}
              </p>
            </div>
          </div>
        );

      case 'innovation-projects':
        return (
          <div className="p-8 h-full overflow-y-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-blue-600">{slide.icon}</div>
              <h2 className="text-3xl font-bold text-gray-800">{slide.title}</h2>
            </div>

            <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg p-4 mb-6">
              <p className="text-lg font-semibold">{slide.content.intro}</p>
            </div>

            <div className="space-y-5">
              {slide.content.projects.map((project, i) => (
                <div key={i} className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl p-6 shadow-lg">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-bold flex-1">{project.name}</h3>
                    <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold ml-4">
                      {project.type}
                    </span>
                  </div>
                  <p className="text-yellow-200 font-semibold mb-3">担任角色: {project.role}</p>
                  <div className="bg-white/20 rounded-lg p-4 mb-3">
                    <p className="font-semibold mb-2">核心亮点:</p>
                    <ul className="space-y-1.5 text-sm">
                      {project.highlights.map((highlight, j) => (
                        <li key={j} className="flex items-start">
                          <span className="mr-2">✓</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-green-400/30 rounded-lg p-3">
                    <p className="font-semibold text-sm">转化价值: {project.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 bg-purple-100 rounded-lg p-4">
              <p className="text-purple-900 font-semibold">{slide.content.summary}</p>
            </div>
          </div>
        );

      case 'projects1':
        return (
          <div className="p-8 h-full overflow-y-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-blue-600">{slide.icon}</div>
              <h2 className="text-3xl font-bold text-gray-800">{slide.title}</h2>
            </div>

            {/* 说明文字 */}
            <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-4 mb-6">
              {slide.content.description.map((desc, i) => (
                <p key={i} className="text-sm text-amber-900 mb-1 last:mb-0">{desc}</p>
              ))}
            </div>

            {/* 项目列表 */}
            <div className="space-y-4">
              {slide.content.projects.map((project, i) => (
                <div key={i} className="bg-white border-l-4 border-blue-500 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-base text-gray-800 flex-1">{project.name}</h3>
                    <div className="flex gap-2 ml-3 shrink-0">
                      <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
                        {project.amount}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mb-2 text-sm">
                    <p className="text-gray-600">
                      <span className="font-semibold text-gray-700">合同编号:</span> {project.contractNo}
                    </p>
                    <p className="text-blue-600 font-semibold">
                      担任角色: {project.role}
                    </p>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'projects2':
        return (
          <div className="p-8 h-full overflow-y-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-blue-600">{slide.icon}</div>
              <h2 className="text-3xl font-bold text-gray-800">{slide.title}</h2>
            </div>

            <div className="space-y-6">
              {slide.content.innovation.map((proj, i) => (
                <div key={i} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 shadow-lg border border-blue-200">
                  <div className="grid grid-cols-5 gap-6">
                    {/* 左侧：项目信息 */}
                    <div className="col-span-3 flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-3">{proj.name}</h3>
                        <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                          揭榜挂帅项目
                        </div>
                        <p className="text-purple-600 font-semibold mb-3">
                          <span className="text-gray-700">担任角色:</span> {proj.role}
                        </p>
                        <p className="text-gray-700 text-sm leading-relaxed mb-4">{proj.desc}</p>
                      </div>

                      {/* 核心亮点 */}
                      <div className="bg-white/80 rounded-lg p-4 border border-blue-200">
                        <h4 className="font-bold text-blue-900 mb-2 text-sm">核心亮点:</h4>
                        <ul className="space-y-1">
                          {proj.highlights.map((highlight, j) => (
                            <li key={j} className="text-xs text-gray-700 flex items-start">
                              <span className="text-blue-500 mr-2">✓</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* 右侧：项目截图 */}
                    <div className="col-span-2 flex items-center justify-center">
                      <div className="relative w-full rounded-xl overflow-hidden shadow-xl border-4 border-white">
                        <img
                          src={proj.image}
                          alt={proj.name}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'research-reports':
        return (
          <div className="p-8 h-full overflow-y-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-blue-600">{slide.icon}</div>
              <h2 className="text-3xl font-bold text-gray-800">{slide.title}</h2>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl p-5 mb-6">
              <h3 className="text-xl font-bold mb-2">{slide.content.patent.title}</h3>
              <p className="text-2xl font-bold mb-3">{slide.content.patent.name}</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold mb-1">担任角色: {slide.content.patent.role}</p>
                  <p className="opacity-90">{slide.content.patent.desc}</p>
                </div>
                <div>
                  <p className="text-yellow-200">✓ {slide.content.patent.status}</p>
                </div>
              </div>
            </div>

            <div className="bg-amber-100 rounded-lg p-4 mb-4">
              <p className="text-lg font-semibold text-amber-900">{slide.content.intro}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {slide.content.reports.map((report, i) => (
                <div key={i} className="bg-white border-l-4 border-amber-500 rounded-lg p-4 shadow-md">
                  <div className="flex justify-between items-start mb-2">
                    <span className="bg-amber-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      {report.level}
                    </span>
                    <span className="text-gray-500 text-xs">{report.date}</span>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2 text-sm">{report.title}</h4>
                  <p className="text-gray-700 text-xs">{report.highlight}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'value':
        return (
          <div className="p-8 h-full overflow-y-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-blue-600">{slide.icon}</div>
              <h2 className="text-3xl font-bold text-gray-800">{slide.title}</h2>
            </div>

            <div className="space-y-5">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl p-5">
                <h3 className="text-xl font-bold mb-3">{slide.content.aiLeadership.title}</h3>
                <div className="space-y-3">
                  {slide.content.aiLeadership.items.map((item, i) => (
                    <div key={i} className="bg-white/20 rounded-lg p-3">
                      <p className="font-bold text-lg">{item.label}</p>
                      <p className="text-sm mt-1">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-5">
                <h3 className="text-xl font-bold text-blue-900 mb-3">{slide.content.training.title}</h3>
                <div className="space-y-3">
                  {slide.content.training.items.map((item, i) => (
                    <div key={i} className="bg-white rounded-lg p-3">
                      <p className="font-bold text-gray-800">{item.name}</p>
                      <p className="text-blue-600 text-sm">{item.scale}</p>
                      <p className="text-gray-700 text-sm mt-1">{item.impact}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-5">
                <h3 className="text-xl font-bold text-green-900 mb-2">{slide.content.mentoring.title}</h3>
                <p className="text-gray-700 mb-3">{slide.content.mentoring.intro}</p>
                <div className="grid grid-cols-3 gap-2">
                  {slide.content.mentoring.members.map((member, i) => (
                    <div key={i} className="bg-white rounded-lg p-3">
                      <p className="font-bold text-gray-800 text-sm">{member.name}</p>
                      <p className="text-green-600 text-xs">{member.level}</p>
                      <p className="text-gray-600 text-xs mt-1">{member.achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'summary':
        return (
          <div className="p-8 h-full overflow-y-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-blue-600">{slide.icon}</div>
              <h2 className="text-3xl font-bold text-gray-800">{slide.title}</h2>
            </div>

            {/* 自我认知与反思 */}
            <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-4 mb-4">
              <h3 className="text-xl font-bold text-red-900 mb-3">{slide.content.reflection.title}</h3>
              <div className="space-y-3">
                {slide.content.reflection.issues.map((issue, i) => (
                  <div key={i} className="bg-white rounded-lg p-3 shadow-sm">
                    <h4 className="font-bold text-gray-800 mb-2">问题 {i + 1}: {issue.problem}</h4>
                    <p className="text-sm text-gray-700 mb-1">
                      <span className="font-semibold">表现：</span>{issue.manifestation}
                    </p>
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold">影响：</span>{issue.impact}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 改进措施 */}
            <div className="space-y-3">
              {slide.content.improvement.plans.map((plan, i) => (
                <div key={i} className="bg-white border-l-4 border-blue-500 rounded-lg p-4 shadow-md">
                  <h4 className="font-bold text-base text-gray-800 mb-3">{plan.area}</h4>
                  <ul className="space-y-1">
                    {plan.actions.map((action, j) => (
                      <li key={j} className="flex items-start text-sm text-gray-700">
                        <span className="text-blue-500 mr-2 shrink-0">✓</span>
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* 个人承诺 */}
            <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-4 mt-4">
              <h3 className="text-lg font-bold text-green-900 mb-3">个人承诺</h3>
              <ul className="space-y-2">
                {slide.content.commitment.map((item, i) => (
                  <li key={i} className="flex items-start text-sm text-gray-700">
                    <span className="text-green-600 mr-2 shrink-0">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );

      default:
        return <div>Unknown slide type</div>;
    }
  };

  return (
    <div className="w-full h-screen bg-gray-100">
      {/* 幻灯片主体 */}
      <div className="w-full h-full bg-white shadow-lg overflow-hidden">
        {renderSlideContent(slides[currentSlide])}
      </div>
    </div>
  );
};

export default Presentation;