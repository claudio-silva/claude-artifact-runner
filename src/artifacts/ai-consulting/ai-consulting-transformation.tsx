import React, { useState } from 'react';
import { 
  ChevronRight, Building2, Zap, Brain, Target, Users, 
  TrendingUp, Shield, AlertCircle, Lightbulb, CheckCircle,
  BarChart3, Layers, GitBranch, Globe, Award, Clock,
  ArrowRight, Activity, Database, Sparkles, Wrench,
  GraduationCap, HandshakeIcon, RocketIcon
} from 'lucide-react';

export const meta = {
  title: "AI规划咨询 - 国央企转型的新引擎",
  description: "第三部分：AI规划咨询助力国央企数字化转型（30分钟）",
  isHidden: false,
  category: "AI项目规划咨询",
  order: 4
};

const AiConsultingTransformation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('3.1');

  const sections = {
    '3.1': {
      title: '国央企AI转型的背景与挑战',
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">为何国央企需要AI规划咨询？</h4>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* 复杂性挑战 */}
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  <Layers className="w-6 h-6 text-red-600 mr-2" />
                  <h5 className="font-semibold text-red-800">复杂性挑战</h5>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="font-medium text-red-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">业务条线多：</span>
                      <span className="text-gray-700">横跨多个产业板块，业务逻辑复杂</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium text-red-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">组织层级复杂：</span>
                      <span className="text-gray-700">集团-二级-三级公司的多层级管理体系</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium text-red-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">系统架构庞大：</span>
                      <span className="text-gray-700">历史遗留系统众多，技术债务沉重</span>
                    </div>
                  </li>
                </ul>
                <div className="mt-3 p-3 bg-red-50 rounded text-sm">
                  <span className="font-medium text-red-800">案例：</span>
                  <span className="text-gray-700">某央企集团拥有200+个信息系统，数据标准不统一</span>
                </div>
              </div>

              {/* 效率挑战 */}
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  <Activity className="w-6 h-6 text-orange-600 mr-2" />
                  <h5 className="font-semibold text-orange-800">效率挑战</h5>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="font-medium text-orange-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">人工流程多：</span>
                      <span className="text-gray-700">大量重复性工作占用人力资源</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium text-orange-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">决策链条长：</span>
                      <span className="text-gray-700">层层审批导致响应速度慢</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium text-orange-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">运营成本高：</span>
                      <span className="text-gray-700">人力成本和管理成本居高不下</span>
                    </div>
                  </li>
                </ul>
                <div className="mt-3 p-3 bg-orange-50 rounded text-sm">
                  <span className="font-medium text-orange-800">数据：</span>
                  <span className="text-gray-700">调研显示，国央企平均决策周期比民企长2-3倍</span>
                </div>
              </div>

              {/* 创新挑战 */}
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  <Lightbulb className="w-6 h-6 text-yellow-600 mr-2" />
                  <h5 className="font-semibold text-yellow-800">创新挑战</h5>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="font-medium text-yellow-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">创新机制不健全：</span>
                      <span className="text-gray-700">缺乏容错机制和创新激励</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium text-yellow-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">技术应用滞后：</span>
                      <span className="text-gray-700">新技术采用谨慎，试点周期长</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium text-yellow-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">转型动力不足：</span>
                      <span className="text-gray-700">传统业务惯性大，变革阻力强</span>
                    </div>
                  </li>
                </ul>
                <div className="mt-3 p-3 bg-yellow-50 rounded text-sm">
                  <span className="font-medium text-yellow-800">现状：</span>
                  <span className="text-gray-700">仅有15%的国央企建立了专门的AI创新部门</span>
                </div>
              </div>

              {/* 人才挑战 */}
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  <Users className="w-6 h-6 text-purple-600 mr-2" />
                  <h5 className="font-semibold text-purple-800">人才挑战</h5>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="font-medium text-purple-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">专业人才缺乏：</span>
                      <span className="text-gray-700">AI人才引进困难，薪酬缺乏竞争力</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium text-purple-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">知识结构老化：</span>
                      <span className="text-gray-700">现有员工数字化技能不足</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium text-purple-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">学习更新慢：</span>
                      <span className="text-gray-700">培训体系跟不上技术发展速度</span>
                    </div>
                  </li>
                </ul>
                <div className="mt-3 p-3 bg-purple-50 rounded text-sm">
                  <span className="font-medium text-purple-800">困境：</span>
                  <span className="text-gray-700">既懂业务又懂AI的复合型人才极度稀缺</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    '3.2': {
      title: '国央企AI规划咨询的五大价值',
      content: (
        <div className="space-y-6">
          {/* 价值一：战略引领 */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-blue-600 mr-3" />
              <h4 className="text-xl font-semibold text-gray-800">价值一：战略引领 - 定义AI转型愿景与路径</h4>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h5 className="font-medium text-blue-700 mb-2">梳理组织数字基因</h5>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• 评估企业数字化成熟度现状</li>
                  <li>• 识别数字化转型的优势与短板</li>
                  <li>• 找准AI应用的最佳切入点</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h5 className="font-medium text-blue-700 mb-2">明确AI战略定位</h5>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• 定义AI在企业战略中的角色</li>
                  <li>• 明确AI带来的核心价值主张</li>
                  <li>• 设计差异化的AI竞争策略</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h5 className="font-medium text-blue-700 mb-2">设计战略路线图</h5>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• 制定3-5年AI发展规划</li>
                  <li>• 明确各阶段的关键举措</li>
                  <li>• 设定可量化的目标指标</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 价值二：能力打造 */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <Brain className="w-8 h-8 text-green-600 mr-3" />
              <h4 className="text-xl font-semibold text-gray-800">价值二：能力打造 - 构建AI核心竞争力</h4>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h5 className="font-medium text-green-700 mb-2">评估现有能力差距</h5>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• 技术能力：基础设施、平台工具、算法模型</li>
                  <li>• 数据能力：数据质量、数据治理、数据资产</li>
                  <li>• 人才能力：团队规模、技能水平、创新能力</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h5 className="font-medium text-green-700 mb-2">设计AI能力体系</h5>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• 构建企业AI能力全景图</li>
                  <li>• 明确核心能力和支撑能力</li>
                  <li>• 制定能力建设优先级</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h5 className="font-medium text-green-700 mb-2">规划技术与数据基础</h5>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• AI技术平台架构设计</li>
                  <li>• 数据中台建设方案</li>
                  <li>• 算力资源配置策略</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 价值三：场景创新 */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <Sparkles className="w-8 h-8 text-purple-600 mr-3" />
              <h4 className="text-xl font-semibold text-gray-800">价值三：场景创新 - 发掘AI应用新价值</h4>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h5 className="font-medium text-purple-700 mb-2">识别高价值场景</h5>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• 业务价值评估：ROI分析</li>
                  <li>• 技术可行性评估：成熟度判断</li>
                  <li>• 风险评估：合规性和安全性</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h5 className="font-medium text-purple-700 mb-2">设计创新业务模式</h5>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• AI赋能的新产品和服务</li>
                  <li>• 商业模式创新机会</li>
                  <li>• 生态合作新模式</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h5 className="font-medium text-purple-700 mb-2">打造差异化优势</h5>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• 行业领先的AI应用</li>
                  <li>• 独特的数据资产价值</li>
                  <li>• 难以复制的AI能力</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 价值四：落地保障 */}
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 text-orange-600 mr-3" />
              <h4 className="text-xl font-semibold text-gray-800">价值四：落地保障 - 确保AI项目成功实施</h4>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h5 className="font-medium text-orange-700 mb-2">制定实施路线</h5>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• 项目优先级排序</li>
                  <li>• 资源投入计划</li>
                  <li>• 风险应对策略</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h5 className="font-medium text-orange-700 mb-2">设计组织保障</h5>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• AI治理架构</li>
                  <li>• 跨部门协同机制</li>
                  <li>• 变革管理方案</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h5 className="font-medium text-orange-700 mb-2">建立评估体系</h5>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• KPI指标体系</li>
                  <li>• 投资回报分析</li>
                  <li>• 持续优化机制</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 价值五：生态共建 */}
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <Globe className="w-8 h-8 text-indigo-600 mr-3" />
              <h4 className="text-xl font-semibold text-gray-800">价值五：生态共建 - 构建AI创新生态圈</h4>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h5 className="font-medium text-indigo-700 mb-2">规划开放合作</h5>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• 与科技公司的合作模式</li>
                  <li>• 与创业公司的创新机制</li>
                  <li>• 与同业的经验交流</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h5 className="font-medium text-indigo-700 mb-2">设计产学研协同</h5>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• 与高校的人才培养合作</li>
                  <li>• 与研究院的技术研发</li>
                  <li>• 与行业协会的标准制定</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h5 className="font-medium text-indigo-700 mb-2">打造行业影响力</h5>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• 最佳实践分享</li>
                  <li>• 行业标准引领</li>
                  <li>• 生态平台构建</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    '3.3': {
      title: 'AI-POWER咨询方法论详解',
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">方法论概述</h4>
            <p className="text-gray-700">基于多个国央企AI转型成功案例，我们构建了"AI-POWER"七步法，为国央企提供系统化的AI规划咨询服务。</p>
          </div>

          {/* A - Assessment */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 rounded-full p-3 mr-4">
                <BarChart3 className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">A - Assessment（全面评估）</h4>
                <p className="text-sm text-gray-600">目标：建立AI转型的现状基线</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-medium text-blue-800 mb-2">评估维度</h5>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• 数字化基础评估</li>
                  <li>• AI就绪度评估</li>
                  <li>• 组织能力评估</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-medium text-blue-800 mb-2">评估工具</h5>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• 成熟度评估模型（5级评分）</li>
                  <li>• 标杆对比分析</li>
                  <li>• SWOT分析框架</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-medium text-blue-800 mb-2">输出成果</h5>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• 《AI就绪度评估报告》</li>
                  <li>• 能力差距分析图</li>
                  <li>• 改进优先级建议</li>
                </ul>
              </div>
            </div>
          </div>

          {/* I - Insight */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 rounded-full p-3 mr-4">
                <Lightbulb className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">I - Insight（深度洞察）</h4>
                <p className="text-sm text-gray-600">目标：发现AI创造价值的关键机会</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-medium text-green-800 mb-2">洞察方法</h5>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• 业务流程分析</li>
                  <li>• 数据价值挖掘</li>
                  <li>• 竞争态势研判</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-medium text-green-800 mb-2">关键活动</h5>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• 高管访谈（20-30人）</li>
                  <li>• 业务部门工作坊（5-8场）</li>
                  <li>• 数据探索分析会（3-5次）</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-medium text-green-800 mb-2">输出成果</h5>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• 《业务机会洞察报告》</li>
                  <li>• AI应用机会图谱</li>
                  <li>• 创新场景建议书</li>
                </ul>
              </div>
            </div>
          </div>

          {/* P - Prioritization */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
            <div className="flex items-center mb-4">
              <div className="bg-purple-100 rounded-full p-3 mr-4">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">P - Prioritization（优先级确定）</h4>
                <p className="text-sm text-gray-600">目标：科学排序AI项目，确保资源最优配置</p>
              </div>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg mt-4">
              <h5 className="font-medium text-purple-800 mb-2">评估模型</h5>
              <p className="text-sm font-mono bg-white p-2 rounded text-gray-700">
                优先级得分 = 业务价值(40%) × 技术可行性(30%) × 战略契合度(20%) × 风险系数(10%)
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="space-y-3">
                <div className="bg-purple-50 p-3 rounded-lg">
                  <h6 className="font-medium text-purple-800 mb-1">业务价值评估</h6>
                  <p className="text-xs text-gray-700">成本节降、效率提升、收入增长、客户体验</p>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <h6 className="font-medium text-purple-800 mb-1">技术可行性分析</h6>
                  <p className="text-xs text-gray-700">技术成熟度、数据可得性、实施复杂度、投资规模</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-purple-50 p-3 rounded-lg">
                  <h6 className="font-medium text-purple-800 mb-1">战略契合度判断</h6>
                  <p className="text-xs text-gray-700">与企业战略一致性、核心竞争力贡献、长期价值</p>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <h6 className="font-medium text-purple-800 mb-1">风险评估</h6>
                  <p className="text-xs text-gray-700">技术风险、业务风险、合规风险、变革风险</p>
                </div>
              </div>
            </div>
          </div>

          {/* O - Opportunity */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
            <div className="flex items-center mb-4">
              <div className="bg-orange-100 rounded-full p-3 mr-4">
                <Sparkles className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">O - Opportunity（机会设计）</h4>
                <p className="text-sm text-gray-600">目标：将AI机会转化为可落地的创新方案</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="bg-orange-50 p-4 rounded-lg">
                <h5 className="font-medium text-orange-800 mb-2">应用场景设计</h5>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• 用户旅程优化</li>
                  <li>• 业务模式创新</li>
                  <li>• 价值主张定义</li>
                </ul>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h5 className="font-medium text-orange-800 mb-2">技术方案设计</h5>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• 算法模型选择</li>
                  <li>• 系统架构设计</li>
                  <li>• 数据流程规划</li>
                </ul>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h5 className="font-medium text-orange-800 mb-2">商业价值设计</h5>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• 收益模型测算</li>
                  <li>• 成本效益分析</li>
                  <li>• 投资回收期预测</li>
                </ul>
              </div>
            </div>
          </div>

          {/* W - Workflow */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
            <div className="flex items-center mb-4">
              <div className="bg-red-100 rounded-full p-3 mr-4">
                <GitBranch className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">W - Workflow（流程重塑）</h4>
                <p className="text-sm text-gray-600">目标：以AI为核心重新设计业务流程</p>
              </div>
            </div>
            
            <div className="bg-red-50 p-4 rounded-lg mt-4">
              <h5 className="font-medium text-red-800 mb-2">重塑原则</h5>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-red-600 mr-2 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-800">端到端优化</p>
                    <p className="text-xs text-gray-600">打破部门墙，全流程重构</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-red-600 mr-2 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-800">人机协同</p>
                    <p className="text-xs text-gray-600">明确人和AI的最佳分工</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-red-600 mr-2 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-800">数据驱动</p>
                    <p className="text-xs text-gray-600">以数据流驱动业务流</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-red-600 mr-2 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-800">持续迭代</p>
                    <p className="text-xs text-gray-600">建立反馈和优化机制</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* E - Enablement */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
            <div className="flex items-center mb-4">
              <div className="bg-indigo-100 rounded-full p-3 mr-4">
                <Wrench className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">E - Enablement（赋能保障）</h4>
                <p className="text-sm text-gray-600">目标：构建支撑AI落地的全方位保障体系</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h5 className="font-medium text-indigo-800 mb-2">技术赋能</h5>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• 平台建设：AI开发平台、数据中台</li>
                  <li>• 工具配置：开发工具链、运维工具</li>
                  <li>• 标准制定：开发、数据、安全标准</li>
                </ul>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h5 className="font-medium text-indigo-800 mb-2">组织赋能</h5>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• 治理架构：AI委员会、数据治理体系</li>
                  <li>• 人才发展：能力模型、培训体系</li>
                  <li>• 文化变革：创新文化、数字思维</li>
                </ul>
              </div>
            </div>
          </div>

          {/* R - Roadmap */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <div className="bg-pink-100 rounded-full p-3 mr-4">
                <Clock className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">R - Roadmap（路线规划）</h4>
                <p className="text-sm text-gray-600">目标：制定清晰可行的AI转型实施路径</p>
              </div>
            </div>
            
            <div className="space-y-4 mt-4">
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-medium text-pink-800">短期目标（0-6个月）</h5>
                  <span className="text-xs bg-pink-100 text-pink-700 px-2 py-1 rounded">快速见效</span>
                </div>
                <p className="text-sm text-gray-700">快速见效项目、能力基础建设、团队组建完成</p>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-medium text-purple-800">中期目标（6-18个月）</h5>
                  <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">规模推广</span>
                </div>
                <p className="text-sm text-gray-700">核心场景落地、平台建设完成、规模化推广</p>
              </div>
              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-medium text-indigo-800">长期目标（18-36个月）</h5>
                  <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded">全面转型</span>
                </div>
                <p className="text-sm text-gray-700">全面AI转型、生态体系构建、行业引领地位</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    '3.4': {
      title: '国央企AI转型的最佳实践',
      content: (
        <div className="space-y-6">
          <h4 className="text-xl font-semibold text-gray-800 mb-4">成功案例分析</h4>
          
          {/* 案例1 */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <Building2 className="w-8 h-8 text-blue-600 mr-3" />
              <h5 className="text-lg font-semibold text-gray-800">案例1：某大型央企集团 - 智慧运营中心</h5>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-medium text-red-700 mb-2">挑战</h6>
                <p className="text-sm text-gray-700">多业态运营效率低，数据孤岛严重</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-medium text-blue-700 mb-2">方案</h6>
                <p className="text-sm text-gray-700">构建AI驱动的集团运营大脑</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-medium text-green-700 mb-2">成效</h6>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 运营效率提升35%</li>
                  <li>• 决策速度加快50%</li>
                  <li>• 年节省成本2.3亿元</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 案例2 */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 text-green-600 mr-3" />
              <h5 className="text-lg font-semibold text-gray-800">案例2：某国有银行 - 智能风控体系</h5>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-medium text-red-700 mb-2">挑战</h6>
                <p className="text-sm text-gray-700">传统风控模型准确率低，响应慢</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-medium text-green-700 mb-2">方案</h6>
                <p className="text-sm text-gray-700">基于AI的实时风控平台</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-medium text-green-700 mb-2">成效</h6>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 风险识别准确率提升至95%</li>
                  <li>• 审批时间从天缩短到分钟</li>
                  <li>• 不良率下降40%</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 案例3 */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <Activity className="w-8 h-8 text-purple-600 mr-3" />
              <h5 className="text-lg font-semibold text-gray-800">案例3：某能源国企 - 设备预测性维护</h5>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-medium text-red-700 mb-2">挑战</h6>
                <p className="text-sm text-gray-700">设备故障造成巨大损失</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-medium text-purple-700 mb-2">方案</h6>
                <p className="text-sm text-gray-700">IoT+AI的预测性维护系统</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-medium text-green-700 mb-2">成效</h6>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 故障预测准确率达85%</li>
                  <li>• 维护成本降低30%</li>
                  <li>• 设备寿命延长20%</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl">
            <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <Award className="w-6 h-6 mr-2 text-orange-600" />
              关键成功要素
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-500">
                <h5 className="font-medium text-red-800 mb-2">一把手工程</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 最高领导亲自推动</li>
                  <li>• 战略高度重视</li>
                  <li>• 资源充分保障</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-500">
                <h5 className="font-medium text-orange-800 mb-2">试点先行</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 选择痛点明显的场景</li>
                  <li>• 快速验证价值</li>
                  <li>• 形成示范效应</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
                <h5 className="font-medium text-yellow-800 mb-2">数据先行</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 优先进行数据治理</li>
                  <li>• 建立数据标准</li>
                  <li>• 打通数据孤岛</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
                <h5 className="font-medium text-green-800 mb-2">人才并重</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 外部引进+内部培养</li>
                  <li>• 建立AI人才特区</li>
                  <li>• 创新激励机制</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
                <h5 className="font-medium text-blue-800 mb-2">生态协同</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 与领先科技公司合作</li>
                  <li>• 参与行业标准制定</li>
                  <li>• 构建创新联盟</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    '3.5': {
      title: '实施建议与行动指南',
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
            <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <RocketIcon className="w-6 h-6 mr-2 text-blue-600" />
              启动AI转型的行动建议
            </h4>
            
            <div className="space-y-4">
              {/* 第一步 */}
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">1</div>
                <div className="flex-1 bg-white p-4 rounded-lg shadow-sm">
                  <h5 className="font-semibold text-blue-800 mb-2">第一步：高层共识</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 组织高管AI认知培训</li>
                    <li>• 考察行业最佳实践</li>
                    <li>• 达成转型共识</li>
                  </ul>
                </div>
              </div>

              {/* 第二步 */}
              <div className="flex items-start">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">2</div>
                <div className="flex-1 bg-white p-4 rounded-lg shadow-sm">
                  <h5 className="font-semibold text-green-800 mb-2">第二步：现状评估</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 开展AI就绪度评估</li>
                    <li>• 识别快赢机会</li>
                    <li>• 制定初步规划</li>
                  </ul>
                </div>
              </div>

              {/* 第三步 */}
              <div className="flex items-start">
                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">3</div>
                <div className="flex-1 bg-white p-4 rounded-lg shadow-sm">
                  <h5 className="font-semibold text-purple-800 mb-2">第三步：试点突破</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 选择1-2个场景试点</li>
                    <li>• 组建敏捷团队</li>
                    <li>• 快速迭代优化</li>
                  </ul>
                </div>
              </div>

              {/* 第四步 */}
              <div className="flex items-start">
                <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">4</div>
                <div className="flex-1 bg-white p-4 rounded-lg shadow-sm">
                  <h5 className="font-semibold text-orange-800 mb-2">第四步：能力建设</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 搭建AI平台</li>
                    <li>• 培养核心团队</li>
                    <li>• 建立治理体系</li>
                  </ul>
                </div>
              </div>

              {/* 第五步 */}
              <div className="flex items-start">
                <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">5</div>
                <div className="flex-1 bg-white p-4 rounded-lg shadow-sm">
                  <h5 className="font-semibold text-red-800 mb-2">第五步：规模推广</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 总结试点经验</li>
                    <li>• 制定推广计划</li>
                    <li>• 全面铺开实施</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-xl">
            <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <AlertCircle className="w-6 h-6 mr-2 text-red-600" />
              常见误区与规避
            </h4>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-red-500">
                <h5 className="font-semibold text-red-800 mb-2">误区一：技术至上</h5>
                <p className="text-sm text-gray-700 mb-2">表现：过度关注技术先进性</p>
                <p className="text-sm font-medium text-green-700">规避：始终以业务价值为导向</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-orange-500">
                <h5 className="font-semibold text-orange-800 mb-2">误区二：大干快上</h5>
                <p className="text-sm text-gray-700 mb-2">表现：追求大而全的方案</p>
                <p className="text-sm font-medium text-green-700">规避：小步快跑，持续迭代</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-yellow-500">
                <h5 className="font-semibold text-yellow-800 mb-2">误区三：闭门造车</h5>
                <p className="text-sm text-gray-700 mb-2">表现：完全自主开发</p>
                <p className="text-sm font-medium text-green-700">规避：开放合作，借力发展</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-purple-500">
                <h5 className="font-semibold text-purple-800 mb-2">误区四：忽视变革</h5>
                <p className="text-sm text-gray-700 mb-2">表现：只关注技术不管人</p>
                <p className="text-sm font-medium text-green-700">规避：技术与组织变革并重</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl">
            <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <TrendingUp className="w-6 h-6 mr-2 text-purple-600" />
              未来展望
            </h4>
            
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-semibold text-purple-800">2025-2026：AI应用普及期</h5>
                  <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full">起步阶段</span>
                </div>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 所有国央企都将启动AI项目</li>
                  <li>• 行业标准逐步形成</li>
                  <li>• 人才竞争白热化</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-semibold text-indigo-800">2027-2028：AI深度融合期</h5>
                  <span className="text-xs bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">发展阶段</span>
                </div>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• AI成为业务标配</li>
                  <li>• 新业态不断涌现</li>
                  <li>• 生态体系基本形成</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-semibold text-pink-800">2029-2030：AI价值爆发期</h5>
                  <span className="text-xs bg-pink-100 text-pink-700 px-3 py-1 rounded-full">成熟阶段</span>
                </div>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 智能化转型基本完成</li>
                  <li>• 新增长极充分显现</li>
                  <li>• 引领行业发展方向</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-100 to-pink-100 border-2 border-red-300 text-gray-900 p-6 rounded-xl text-center">
            <h4 className="text-xl font-bold mb-2 text-red-700">🚀 行动号召</h4>
            <p className="text-lg font-semibold text-red-800">AI转型不是选择题，而是必答题</p>
            <p className="text-sm mt-2 text-gray-700">早行动、早布局、早受益，让AI成为国央企高质量发展的新引擎</p>
          </div>
        </div>
      )
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 头部导航 */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-800">AI规划咨询 - 国央企转型的新引擎</h1>
          <p className="text-gray-600 mt-1">第三部分：AI规划咨询助力国央企数字化转型（30分钟）</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* 左侧导航 */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-4 sticky top-4">
              <h3 className="font-semibold text-gray-800 mb-4">课程大纲</h3>
              <nav className="space-y-2">
                {Object.entries(sections).map(([key, section]) => (
                  <button
                    key={key}
                    onClick={() => setActiveSection(key)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      activeSection === key
                        ? 'bg-blue-50 text-blue-700 font-medium'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center">
                      <span className="mr-2">{key}</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                    <div className="text-sm mt-1">{section.title}</div>
                  </button>
                ))}
              </nav>

              <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                <h4 className="text-sm font-semibold text-blue-800 mb-2 flex items-center">
                  <Sparkles className="w-4 h-4 mr-1" />
                  方法论亮点
                </h4>
                <div className="space-y-2 text-xs text-gray-700">
                  <div className="flex items-center">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-1" />
                    <span>AI-POWER七步法</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-1" />
                    <span>100+成功案例</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-1" />
                    <span>行业最佳实践</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 右侧内容区 */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                {activeSection} {sections[activeSection].title}
              </h2>
              {sections[activeSection].content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiConsultingTransformation;