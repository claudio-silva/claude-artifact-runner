import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Users, ClipboardList, Calendar, Target, Flag, Rocket, Map, BarChart2, Monitor, FileCheck, Wrench, GitMerge, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProjectPlanSlides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        nextSlide();
      } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        prevSlide();
      } else if (event.key === 'Escape') {
        navigate('/presentation-0');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [navigate]);

  const slides = [
    // 项目角色与分工
    {
      type: 'roles',
      content: {
        title: '项目角色与分工',
        subtitle: '双项目经理制下的多方协作',
        roles: [
          {
            title: '业主项目部',
            icon: <Users className="w-8 h-8 text-blue-600" />,
            responsibilities: [
              '项目牵头与统筹',
              '业务目标把控',
              '资源协调',
              '需求审批'
            ]
          },
          {
            title: '业务部门/专业条线',
            icon: <ClipboardList className="w-8 h-8 text-blue-600" />,
            responsibilities: [
              '需求提出与确认',
              '过程反馈与测试',
              '培训与推广'
            ]
          },
          {
            title: '产品经理/技术团队',
            icon: <Monitor className="w-8 h-8 text-blue-600" />,
            responsibilities: [
              '需求分析与落地',
              '开发与测试支持',
              '上线维护'
            ]
          },
          {
            title: 'PMO',
            icon: <BarChart2 className="w-8 h-8 text-blue-600" />,
            responsibilities: [
              '过程监督与质量管控',
              '工具和方法支持',
              '文档与资料归档'
            ]
          }
        ]
      }
    },
    // 项目里程碑
    {
      type: 'timeline',
      content: {
        title: '项目里程碑计划',
        timeline: [
          {
            phase: '启动与调研',
            period: '1-2月',
            tasks: [
              '成立项目团队',
              '需求调研',
              '现状评估'
            ]
          },
          {
            phase: '体系设计',
            period: '2-3月',
            tasks: [
              '流程与标准制订',
              '角色权责定义',
              '培训与试点计划'
            ]
          },
          {
            phase: '试点实施',
            period: '3-5月',
            tasks: [
              '试点开展',
              '收集反馈与调整',
              '成熟度评估'
            ]
          },
          {
            phase: '全面推广',
            period: '5-8月',
            tasks: [
              '多业务线铺开',
              '强化组织保障',
              '阶段性评估'
            ]
          }
        ]
      }
    },
    // 详细进度计划
    {
      type: 'schedule',
      content: {
        title: '各阶段重点工作',
        phases: [
          {
            name: '启动阶段',
            duration: '1-2月',
            deliverables: [
              '项目章程',
              '需求调研报告',
              '现状评估报告'
            ],
            milestones: [
              '项目组成立',
              '调研完成',
              '评估报告通过'
            ]
          },
          {
            name: '设计阶段',
            duration: '2-3月',
            deliverables: [
              '需求管理流程规范',
              '角色职责矩阵',
              '试点实施方案'
            ],
            milestones: [
              '流程规范评审通过',
              '试点方案确定',
              '培训计划制定'
            ]
          }
        ]
      }
    },
    // 下一步行动
    {
      type: 'actions',
      content: {
        title: '下一步行动计划',
        actions: [
          {
            title: '确认核心团队',
            icon: <Users className="w-8 h-8 text-blue-600" />,
            tasks: [
              '召开项目启动会',
              '明确双项目经理',
              '确定关键角色'
            ]
          },
          {
            title: '需求梳理',
            icon: <FileCheck className="w-8 h-8 text-blue-600" />,
            tasks: [
              '收集核心需求',
              '分析现有痛点',
              '评估技术可行性'
            ]
          },
          {
            title: '方案准备',
            icon: <ClipboardList className="w-8 h-8 text-blue-600" />,
            tasks: [
              '起草管理流程',
              '设计评审机制',
              '制定实施计划'
            ]
          },
          {
            title: '环境准备',
            icon: <Wrench className="w-8 h-8 text-blue-600" />,
            tasks: [
              '部署管理工具',
              '准备培训材料',
              '建立协作机制'
            ]
          }
        ]
      }
    },
    // 保障措施
    {
      type: 'guarantee',
      content: {
        title: '项目实施保障措施',
        measures: [
          {
            icon: <Target className="w-8 h-8 text-blue-600" />,
            title: '组织保障',
            points: [
              '建立项目决策机制',
              '明确各方职责',
              '资源优先保障'
            ]
          },
          {
            icon: <BarChart2 className="w-8 h-8 text-blue-600" />,
            title: '过程管理',
            points: [
              '定期进度跟踪',
              '质量监控机制',
              '风险预警处置'
            ]
          },
          {
            icon: <GitMerge className="w-8 h-8 text-blue-600" />,
            title: '沟通协作',
            points: [
              '例会制度建立',
              '问题快速响应',
              '信息及时共享'
            ]
          }
        ]
      }
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const next = prev + 1;
      if (next >= slides.length) {
        // 如果是最后一页，返回目录
        navigate('/presentation-0');
        return prev;
      }
      return next;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      if (prev === 0) {
        // 如果是第一页，返回目录
        navigate('/presentation-0');
        return prev;
      }
      return prev - 1;
    });
  };

  const goHome = () => {
    navigate('/presentation-0');
  };

  const renderSlide = (slide) => {
    switch (slide.type) {
      case 'roles':
        return (
          <div className="p-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">{slide.content.title}</h2>
            <h3 className="text-xl text-gray-600 mb-8">{slide.content.subtitle}</h3>
            <div className="grid grid-cols-2 gap-6">
              {slide.content.roles.map((role, index) => (
                <div key={index} className="bg-gray-50 shadow-sm rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-3">{role.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-800">{role.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {role.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-sm text-gray-600">• {resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );

      case 'timeline':
        return (
          <div className="p-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">{slide.content.title}</h2>
            <div className="space-y-6">
              {slide.content.timeline.map((phase, index) => (
                <div key={index} className="flex items-start bg-gray-50 shadow-sm rounded-lg p-6">
                  <div className="w-32 flex-shrink-0">
                    <div className="text-lg font-semibold text-gray-800">{phase.phase}</div>
                    <div className="text-sm text-gray-600">{phase.period}</div>
                  </div>
                  <ul className="flex-grow space-y-2">
                    {phase.tasks.map((task, idx) => (
                      <li key={idx} className="text-sm text-gray-600">• {task}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );

      case 'schedule':
        return (
          <div className="p-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">{slide.content.title}</h2>
            <div className="space-y-8">
              {slide.content.phases.map((phase, index) => (
                <div key={index} className="bg-gray-50 shadow-sm rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">{phase.name}</h3>
                    <span className="ml-4 text-sm text-gray-600">{phase.duration}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-800">交付物</h4>
                      <ul className="space-y-2">
                        {phase.deliverables.map((item, idx) => (
                          <li key={idx} className="text-sm text-gray-600">• {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-800">里程碑</h4>
                      <ul className="space-y-2">
                        {phase.milestones.map((item, idx) => (
                          <li key={idx} className="text-sm text-gray-600">• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'actions':
        return (
          <div className="p-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">{slide.content.title}</h2>
            <div className="grid grid-cols-2 gap-6">
              {slide.content.actions.map((action, index) => (
                <div key={index} className="bg-gray-50 shadow-sm rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-3">{action.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-800">{action.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {action.tasks.map((task, idx) => (
                      <li key={idx} className="text-sm text-gray-600">• {task}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );

      case 'guarantee':
        return (
          <div className="p-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">{slide.content.title}</h2>
            <div className="grid grid-cols-3 gap-6">
              {slide.content.measures.map((measure, index) => (
                <div key={index} className="bg-gray-50 shadow-sm rounded-lg p-6">
                  <div className="text-4xl mb-4">{measure.icon}</div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">{measure.title}</h3>
                  <ul className="space-y-2">
                    {measure.points.map((point, idx) => (
                      <li key={idx} className="text-sm text-gray-600">• {point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <div className="container mx-auto">
        <div className="relative h-screen flex items-center justify-center">
          {/* Slide content */}
          <div className="w-full max-w-6xl">
            {renderSlide(slides[currentSlide])}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPlanSlides;