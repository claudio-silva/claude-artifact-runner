import React, { useState, useEffect, useCallback } from 'react';
import {
  Building2, Brain, Database, Shield, Cog, TrendingUp, Layers, Network,
  CheckCircle, ArrowRight, Target, Cloud, GitBranch, Users, BarChart3,
  Sparkles, FileText, Search, MessageSquare, Lightbulb, Globe, Cpu, HardDrive,
  Lock, Server, Activity, Award, Zap, Workflow
} from 'lucide-react';

export const meta = {
  title: "南方产权智能服务平台 - 技术述标",
  description: "AI技术与产权交易深度融合的技术方案",
  category: "产权项目",
  order: 1
};

interface Slide {
  type: 'cover' | 'content';
  title?: string;
  subtitle?: string;
  content: React.ReactNode;
}

const PropertyRightsTechPresentation: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const slides: Slide[] = [
    // 封面
    {
      type: 'cover',
      content: (
        <div className="h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white p-12">
          <div className="text-center space-y-6">
            <div className="flex justify-center mb-6">
              <Building2 className="w-24 h-24 text-blue-200" />
            </div>
            <h1 className="text-6xl font-bold mb-4">南方产权智能服务平台</h1>
            <h2 className="text-3xl font-light mb-8">技术述标方案</h2>
            <div className="flex items-center justify-center gap-4 text-xl">
              <Brain className="w-8 h-8" />
              <span>AI技术与产权交易深度融合</span>
            </div>
            <div className="mt-12 text-blue-200 text-lg">
              <p>广东南方电信规划咨询设计院有限公司</p>
              <p>2025年技术方案汇报</p>
            </div>
          </div>
        </div>
      )
    },

    // 目录
    {
      type: 'content',
      title: '汇报目录',
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: Target, title: '01 业务理解深度', desc: '基于成熟度评估的精准需求洞察' },
              { icon: Layers, title: '02 核心技术方案', desc: '六层架构设计与RAG优先策略' },
              { icon: Sparkles, title: '03 技术创新点', desc: 'RAG+微调双轮驱动的务实路线' },
              { icon: Network, title: '04 兼容性保障', desc: '与粤交易一张网深度融合' },
              { icon: Shield, title: '05 私有化部署', desc: 'H3C高性能服务器本地化方案' },
              { icon: TrendingUp, title: '06 数据产品化', desc: '广州数交所挂牌交易路径' },
            ].map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border-l-4 border-blue-600 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <item.icon className="w-10 h-10 text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },

    // 业务理解深度 - 第1页
    {
      type: 'content',
      title: '01 业务理解深度',
      subtitle: '基于成熟度评估项目的深入调研基础',
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg border-2 border-indigo-300">
            <h3 className="text-xl font-bold text-indigo-800 mb-3 text-center">2024年完成的成熟度评估项目奠定深厚业务理解</h3>
            <p className="text-center text-gray-700">
              我公司为南方产权完成了"数智型交易平台成熟度评估与建设路径课题研究项目"，历时6个月，形成<strong>三份核心研究成果</strong>，为本次智能服务平台建设提供了扎实的数据支撑和精准的需求洞察
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                <BarChart3 className="w-6 h-6" />
                扎实的调研基础
              </h3>
              <ul className="space-y-2.5 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span><strong>19个部门访谈</strong>：覆盖业务、技术、管理全链条</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span><strong>600+份文档</strong>：战略规划、业务流程、系统架构全面梳理</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span><strong>115份问卷</strong>：全员数字化认知和能力调查</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span><strong>238台设备评估</strong>：时代广场机房完整盘点，67.6%设备超5年</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span><strong>六大核心系统</strong>：综合交易、粤易租、粤采易等深度分析</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-green-300">
              <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                <Award className="w-6 h-6" />
                科学的评估体系
              </h3>
              <div className="space-y-3">
                <div className="bg-green-50 p-3 rounded">
                  <div className="font-bold text-gray-800 mb-1">三级指标框架</div>
                  <p className="text-sm text-gray-700">8大能力要素 × 19个能力域 × 38个能力子域</p>
                </div>
                <div className="bg-green-50 p-3 rounded">
                  <div className="font-bold text-gray-800 mb-1">定量+定性结合</div>
                  <p className="text-sm text-gray-700">600+文档分析 + 19部门访谈 + 115份问卷 + 标杆对比</p>
                </div>
                <div className="bg-green-50 p-3 rounded">
                  <div className="font-bold text-gray-800 mb-1">专家评审验证</div>
                  <p className="text-sm text-gray-700">内外部专家评审，确保评估客观公正</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-purple-600">
            <h3 className="text-xl font-bold text-purple-800 mb-4 text-center">三份核心研究成果</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="w-5 h-5 text-purple-600" />
                  <div className="text-lg font-bold text-purple-600">成熟度指标体系</div>
                </div>
                <div className="text-sm text-gray-600">构建8大能力要素×19能力域×38子域三级框架，科学评估数字化水平</div>
              </div>
              <div className="bg-white p-4 rounded shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Search className="w-5 h-5 text-purple-600" />
                  <div className="text-lg font-bold text-purple-600">评估诊断报告</div>
                </div>
                <div className="text-sm text-gray-600">综合得分3.16分(发展级)，识别数据管理(2.82)、内控数字化(2.85)两大短板</div>
              </div>
              <div className="bg-white p-4 rounded shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Workflow className="w-5 h-5 text-purple-600" />
                  <div className="text-lg font-bold text-purple-600">建设路径研究</div>
                </div>
                <div className="text-sm text-gray-600">渐进式演进路径，数字化→网络化→智能化→平台化，技术切入点明确</div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // 业务理解深度 - 第2页:八大能力要素评估
    {
      type: 'content',
      title: '01 业务理解深度',
      subtitle: '八大能力要素评估结果与核心痛点识别',
      content: (
        <div className="space-y-2.5">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-3 rounded-lg border-2 border-blue-400">
            <h3 className="text-base font-bold text-blue-800 mb-2 text-center">成熟度综合评分：3.16分（发展级/三级）</h3>
            <div className="grid grid-cols-3 gap-2.5 text-center">
              <div className="bg-white p-2 rounded">
                <div className="text-xl font-bold text-green-600">3.85</div>
                <div className="text-xs text-gray-600">数字化治理（优势）</div>
              </div>
              <div className="bg-white p-2 rounded">
                <div className="text-xl font-bold text-red-600">2.82</div>
                <div className="text-xs text-gray-600">数据管理（短板）</div>
              </div>
              <div className="bg-white p-2 rounded">
                <div className="text-xl font-bold text-amber-600">2.85</div>
                <div className="text-xs text-gray-600">内控数字化（短板）</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            {[
              { name: '数字化治理', score: 3.85, color: 'blue', issues: '战略实施效果监测不足，创新文化建设有待加强' },
              { name: '数据管理', score: 2.82, color: 'red', issues: '数据标准缺失，部门间数据壁垒明显，数据质量参差不齐' },
              { name: '数字基础设施', score: 3.21, color: 'amber', issues: '设备老旧问题突出，云化率不足50%，智能运维水平较低' },
              { name: '产品服务数字化', score: 3.20, color: 'green', issues: '线上业务流程优化不足，缺乏个性化智能推荐能力' },
              { name: '经营管理数字化', score: 3.15, color: 'indigo', issues: '业务与技术协同不足，创新项目落地机制不完善' },
              { name: '运营数字化', score: 3.00, color: 'purple', issues: '流程自动化率不足60%，重复性工作占比高' },
              { name: '内控数字化', score: 2.85, color: 'pink', issues: '风险监测预警不及时，合规管理平台有待升级' },
              { name: '可持续发展基础', score: 3.00, color: 'emerald', issues: '标准制修订参与广度不够，标准应用深度不足' }
            ].map((item, idx) => (
              <div key={idx} className={`bg-${item.color}-50 p-2.5 rounded-lg border-l-4 border-${item.color}-600`}>
                <div className="flex justify-between items-center mb-1.5">
                  <h3 className="font-bold text-gray-800 text-sm">{item.name}</h3>
                  <span className={`text-base font-bold ${
                    item.score >= 3.5 ? 'text-green-600' :
                    item.score >= 3.0 ? 'text-blue-600' :
                    'text-red-600'
                  }`}>{item.score}</span>
                </div>
                <div className="w-full h-1.5 bg-gray-200 rounded-full mb-1.5">
                  <div
                    className={`h-full rounded-full ${
                      item.score >= 3.5 ? 'bg-green-500' :
                      item.score >= 3.0 ? 'bg-blue-500' :
                      'bg-red-500'
                    }`}
                    style={{ width: `${(item.score / 5) * 100}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-600">{item.issues}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-red-50 to-orange-50 p-3 rounded-lg border-2 border-red-400">
            <h3 className="text-base font-bold text-red-800 mb-2.5 text-center">四大核心痛点 → AI智能服务平台切入点</h3>
            <div className="grid grid-cols-2 gap-2.5">
              <div className="bg-white p-2.5 rounded">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-xs">1</div>
                  <h4 className="font-bold text-gray-800 text-sm">数据价值难以发挥</h4>
                </div>
                <p className="text-xs text-gray-700 mb-1.5">存在"信息孤岛"问题，数据分散于各业务系统，无法形成统一数据视图</p>
                <p className="text-xs text-blue-600 font-semibold">→ 通过RAG技术构建统一知识库，打通数据孤岛</p>
              </div>
              <div className="bg-white p-2.5 rounded">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-xs">2</div>
                  <h4 className="font-bold text-gray-800 text-sm">业务系统割裂</h4>
                </div>
                <p className="text-xs text-gray-700 mb-1.5">跨系统协同效率低下，无法提供一站式服务体验</p>
                <p className="text-xs text-blue-600 font-semibold">→ AI助手作为统一交互入口，智能调度各系统能力</p>
              </div>
              <div className="bg-white p-2.5 rounded">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-xs">3</div>
                  <h4 className="font-bold text-gray-800 text-sm">智能化水平不足</h4>
                </div>
                <p className="text-xs text-gray-700 mb-1.5">人工智能、区块链等新技术应用不足，业务智能化程度较低</p>
                <p className="text-xs text-blue-600 font-semibold">→ 32B大模型本地部署，提供产权垂直领域智能服务</p>
              </div>
              <div className="bg-white p-2.5 rounded">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-xs">4</div>
                  <h4 className="font-bold text-gray-800 text-sm">知识管理碎片化</h4>
                </div>
                <p className="text-xs text-gray-700 mb-1.5">业务知识分散于文档和人员记忆，难以系统化沉淀和传承</p>
                <p className="text-xs text-blue-600 font-semibold">→ 知识图谱+向量检索，实现知识智能化管理和应用</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // 业务理解深度 - 第3页:战略协同
    {
      type: 'content',
      title: '01 业务理解深度',
      subtitle: '与"粤交易"一张网的战略协同',
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-2 border-blue-400">
            <h3 className="text-xl font-bold text-blue-800 mb-3 text-center">广东省交易控股集团"粤交易"战略融合</h3>
            <p className="text-center text-gray-700">
              智能服务平台作为南方产权数字化转型的重要组成，与集团"粤交易"一张网建设高度契合，在保持独立性的同时实现深度融合
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-lg border-2 border-blue-300 shadow-md">
              <h3 className="text-lg font-bold text-blue-800 mb-3">统一规划</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 认证体系对接</li>
                <li>• 数据标准统一</li>
                <li>• 接口规范一致</li>
                <li>• SSO单点登录</li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-lg border-2 border-purple-300 shadow-md">
              <h3 className="text-lg font-bold text-purple-800 mb-3">分步实施</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 核心功能独立部署</li>
                <li>• 稳定运行后集成</li>
                <li>• 逐步深化融合</li>
                <li>• 风险可控推进</li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-lg border-2 border-green-300 shadow-md">
              <h3 className="text-lg font-bold text-green-800 mb-3">协同发展</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 数据中台对接</li>
                <li>• 双向数据流转</li>
                <li>• 成果反馈共享</li>
                <li>• 价值闭环形成</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-5 rounded-lg border-2 border-orange-400">
            <h3 className="text-xl font-bold text-orange-800 mb-4 text-center">技术架构定位</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded">
                <h4 className="font-bold text-gray-800 mb-2">专注数据应用层</h4>
                <p className="text-sm text-gray-600">构建数据应用层和智能分析层，专注于数据的智能分析、知识提取和应用服务</p>
              </div>
              <div className="bg-white p-4 rounded">
                <h4 className="font-bold text-gray-800 mb-2">避免重复建设</h4>
                <p className="text-sm text-gray-600">不重复造轮子，专注做特色，充分利用集团数据中台基础设施</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // 第1页：RAG技术深度实现方案
    {
      type: 'content',
      title: '02 核心技术方案',
      subtitle: 'RAG检索增强技术深度实现',
      content: (
        <div className="space-y-2.5">

          {/* 四大技术支柱 */}
          <div className="grid grid-cols-2 gap-2.5">
            {/* 1. 可视化智能分块 */}
            <div className="bg-white border-2 border-purple-300 rounded-lg p-3">
              <h3 className="text-sm font-bold text-purple-800 mb-2 flex items-center gap-1.5">
                <Layers className="w-4 h-4" />
                1. 可视化智能分块
              </h3>
              <div className="space-y-1.5">
                <div className="bg-purple-50 p-2 rounded">
                  <div className="font-bold text-gray-800 text-xs">语义感知分块</div>
                  <p className="text-xs text-gray-700">• 基于文档结构自动识别语义边界</p>
                  <p className="text-xs text-gray-700">• 保持段落完整性，避免信息截断</p>
                </div>
                <div className="bg-purple-50 p-2 rounded">
                  <div className="font-bold text-gray-800 text-xs">可视化调整</div>
                  <p className="text-xs text-gray-700">• 实时预览分块效果，手动优化边界</p>
                  <p className="text-xs text-gray-700">• 产权文档特殊格式智能识别</p>
                </div>
                <div className="bg-purple-50 p-2 rounded">
                  <div className="font-bold text-gray-800 text-xs">动态分块策略</div>
                  <p className="text-xs text-gray-700">• 政策文件：按章节条款分块</p>
                  <p className="text-xs text-gray-700">• 交易案例：按交易环节分块</p>
                </div>
              </div>
            </div>

            {/* 2. 混合检索融合 */}
            <div className="bg-white border-2 border-green-300 rounded-lg p-3">
              <h3 className="text-sm font-bold text-green-800 mb-2 flex items-center gap-1.5">
                <GitBranch className="w-4 h-4" />
                2. 三路混合检索融合
              </h3>
              <div className="space-y-1.5">
                <div className="bg-green-50 p-2 rounded">
                  <div className="font-bold text-gray-800 text-xs">向量检索（语义理解）</div>
                  <p className="text-xs text-gray-700">• BGE-M3向量化（8192维度）</p>
                  <p className="text-xs text-gray-700">• Milvus向量数据库+HNSW索引</p>
                </div>
                <div className="bg-green-50 p-2 rounded">
                  <div className="font-bold text-gray-800 text-xs">关键词检索（精确匹配）</div>
                  <p className="text-xs text-gray-700">• Elasticsearch + BM25算法</p>
                  <p className="text-xs text-gray-700">• 产权专业词典（5万+术语）</p>
                </div>
                <div className="bg-green-50 p-2 rounded">
                  <div className="font-bold text-gray-800 text-xs">RRF融合算法</div>
                  <p className="text-xs text-gray-700">• 倒数排名融合 + 动态权重</p>
                  <p className="text-xs text-gray-700">• Cross-Encoder精排序（Top10）</p>
                </div>
              </div>
            </div>

            {/* 3. 上下文管理 */}
            <div className="bg-white border-2 border-blue-300 rounded-lg p-3">
              <h3 className="text-sm font-bold text-blue-800 mb-2 flex items-center gap-1.5">
                <Database className="w-4 h-4" />
                3. 智能上下文管理
              </h3>
              <div className="space-y-1.5">
                <div className="bg-blue-50 p-2 rounded">
                  <div className="font-bold text-gray-800 text-xs">窗口动态分配</div>
                  <p className="text-xs text-gray-700">• 简单查询：5个片段×512 tokens</p>
                  <p className="text-xs text-gray-700">• 复杂分析：10个片段×256 tokens</p>
                </div>
                <div className="bg-blue-50 p-2 rounded">
                  <div className="font-bold text-gray-800 text-xs">优先级排序</div>
                  <p className="text-xs text-gray-700">• 政策法规 &gt; 官方公告 &gt; 案例</p>
                  <p className="text-xs text-gray-700">• 时效性权重动态调整</p>
                </div>
                <div className="bg-blue-50 p-2 rounded">
                  <div className="font-bold text-gray-800 text-xs">元数据标注</div>
                  <p className="text-xs text-gray-700">• 来源、时间、类型自动标记</p>
                  <p className="text-xs text-gray-700">• 引用链接精确定位原文</p>
                </div>
              </div>
            </div>

            {/* 4. 知识库管理 */}
            <div className="bg-white border-2 border-orange-300 rounded-lg p-3">
              <h3 className="text-sm font-bold text-orange-800 mb-2 flex items-center gap-1.5">
                <Workflow className="w-4 h-4" />
                4. 专业知识库体系
              </h3>
              <div className="space-y-1.5">
                <div className="bg-orange-50 p-2 rounded">
                  <div className="font-bold text-gray-800 text-xs">分类知识库</div>
                  <p className="text-xs text-gray-700">• 政策法规库（国家+地方）</p>
                  <p className="text-xs text-gray-700">• 交易案例库（10万+案例）</p>
                  <p className="text-xs text-gray-700">• 操作指南库（全流程覆盖）</p>
                </div>
                <div className="bg-orange-50 p-2 rounded">
                  <div className="font-bold text-gray-800 text-xs">增量更新</div>
                  <p className="text-xs text-gray-700">• 新文档自动向量化入库</p>
                  <p className="text-xs text-gray-700">• 无需重训练，即更即用</p>
                </div>
                <div className="bg-orange-50 p-2 rounded">
                  <div className="font-bold text-gray-800 text-xs">质量保障</div>
                  <p className="text-xs text-gray-700">• 自动去重 + 版本管理</p>
                  <p className="text-xs text-gray-700">• 定期清理过期文档</p>
                </div>
              </div>
            </div>
          </div>

          {/* RAG处理流程 */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-3 rounded-lg border-2 border-indigo-400">
            <h3 className="text-sm font-bold text-indigo-800 mb-2 text-center">端到端RAG处理流程</h3>
            <div className="flex items-center justify-between">
              {[
                {icon: FileText, step: '文档解析', desc: '20+格式\nOCR识别'},
                {icon: Layers, step: '智能分块', desc: '可视化\n语义切分'},
                {icon: Zap, step: '向量化', desc: 'BGE-M3\n8192维'},
                {icon: Search, step: '混合检索', desc: '三路召回\nRRF融合'},
                {icon: TrendingUp, step: '重排序', desc: 'Cross-Encoder\nTop10'},
                {icon: Sparkles, step: '生成回答', desc: '32B模型\n引用溯源'}
              ].map((item, idx) => (
                <React.Fragment key={idx}>
                  <div className="text-center">
                    <div className="w-10 h-10 bg-indigo-500 text-white rounded-full flex items-center justify-center mb-1">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <p className="text-xs font-bold text-gray-700">{item.step}</p>
                    <p className="text-xs text-gray-600 whitespace-pre-line">{item.desc}</p>
                  </div>
                  {idx < 5 && <ArrowRight className="w-4 h-4 text-indigo-400" />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      )
    },

    // 第2页：多模型协同与系统架构
    {
      type: 'content',
      title: '02 核心技术方案',
      subtitle: '多模型协同与六层架构体系',
      content: (
        <div className="space-y-2">
          {/* 三大模型协同作战 */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-3 rounded-lg border-2 border-purple-400">
            <h3 className="text-base font-bold text-purple-800 mb-2 text-center">三大开源模型协同作战体系</h3>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-white p-2.5 rounded-lg">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <Brain className="w-4 h-4 text-purple-600" />
                  <h4 className="font-bold text-gray-800 text-xs">QwQ-32B</h4>
                </div>
                <div className="text-xs text-gray-700 space-y-0.5">
                  <p>• <strong>优势：</strong>逻辑推理能力强</p>
                  <p>• <strong>场景：</strong>复杂规则判断</p>
                  <p>• <strong>任务：</strong>交易流程分析</p>
                  <p>• <strong>权重：</strong>40%</p>
                </div>
              </div>
              <div className="bg-white p-2.5 rounded-lg">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <Zap className="w-4 h-4 text-purple-600" />
                  <h4 className="font-bold text-gray-800 text-xs">DeepSeek-R1</h4>
                </div>
                <div className="text-xs text-gray-700 space-y-0.5">
                  <p>• <strong>优势：</strong>推理速度快</p>
                  <p>• <strong>场景：</strong>高并发查询</p>
                  <p>• <strong>任务：</strong>实时问答</p>
                  <p>• <strong>权重：</strong>35%</p>
                </div>
              </div>
              <div className="bg-white p-2.5 rounded-lg">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <FileText className="w-4 h-4 text-purple-600" />
                  <h4 className="font-bold text-gray-800 text-xs">Skywork-R1V3</h4>
                </div>
                <div className="text-xs text-gray-700 space-y-0.5">
                  <p>• <strong>优势：</strong>长文本理解</p>
                  <p>• <strong>场景：</strong>报告生成</p>
                  <p>• <strong>任务：</strong>文档分析</p>
                  <p>• <strong>权重：</strong>25%</p>
                </div>
              </div>
            </div>
            <div className="mt-2 bg-purple-100 p-2 rounded text-center">
              <p className="text-xs text-purple-800 font-bold">多模型投票机制：3个模型独立推理 → 加权投票 → 置信度评估 → 最优结果输出</p>
            </div>
          </div>

          {/* 模型调度策略 */}
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white border-2 border-blue-300 rounded-lg p-2.5">
              <h3 className="text-xs font-bold text-blue-800 mb-1.5 flex items-center gap-1">
                <Cog className="w-4 h-4" />
                智能模型调度策略
              </h3>
              <div className="space-y-1">
                <div className="bg-blue-50 p-1.5 rounded text-xs">
                  <strong>任务路由：</strong>根据查询类型智能选择模型
                </div>
                <div className="bg-blue-50 p-1.5 rounded text-xs">
                  <strong>负载均衡：</strong>动态分配请求，避免单点过载
                </div>
                <div className="bg-blue-50 p-1.5 rounded text-xs">
                  <strong>降级策略：</strong>主模型异常自动切换备用
                </div>
                <div className="bg-blue-50 p-1.5 rounded text-xs">
                  <strong>成本优化：</strong>简单查询用小模型，复杂用大模型
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-green-300 rounded-lg p-2.5">
              <h3 className="text-xs font-bold text-green-800 mb-1.5 flex items-center gap-1">
                <GitBranch className="w-4 h-4" />
                模型热插拔机制
              </h3>
              <div className="space-y-1">
                <div className="bg-green-50 p-1.5 rounded text-xs">
                  <strong>标准接口：</strong>统一API规范，新模型即插即用
                </div>
                <div className="bg-green-50 p-1.5 rounded text-xs">
                  <strong>灰度发布：</strong>5%→30%→100%逐步切换
                </div>
                <div className="bg-green-50 p-1.5 rounded text-xs">
                  <strong>版本管理：</strong>多版本并存，支持快速回滚
                </div>
                <div className="bg-green-50 p-1.5 rounded text-xs">
                  <strong>A/B测试：</strong>实时对比新旧模型效果
                </div>
              </div>
            </div>
          </div>

          {/* 六层技术架构 */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-2.5 rounded-lg border-2 border-blue-400">
            <h3 className="text-sm font-bold text-blue-800 mb-2 text-center">六层技术架构技术选型</h3>
            <div className="grid grid-cols-2 gap-1.5">
              <div className="space-y-1">
                <div className="bg-white p-1.5 rounded">
                  <div className="text-xs font-bold text-gray-800">应用层</div>
                  <p className="text-xs text-gray-600">Vue3 + Spring Cloud + RESTful API</p>
                </div>
                <div className="bg-white p-1.5 rounded">
                  <div className="text-xs font-bold text-gray-800">AI服务层</div>
                  <p className="text-xs text-gray-600">RAGFlow + Prefect + FastAPI</p>
                </div>
                <div className="bg-white p-1.5 rounded">
                  <div className="text-xs font-bold text-gray-800">数据处理层</div>
                  <p className="text-xs text-gray-600">Apache NiFi + Kafka + Flink</p>
                </div>
              </div>
              <div className="space-y-1">
                <div className="bg-white p-1.5 rounded">
                  <div className="text-xs font-bold text-gray-800">数据接入层</div>
                  <p className="text-xs text-gray-600">Kong网关 + GraphQL + CDC</p>
                </div>
                <div className="bg-white p-1.5 rounded">
                  <div className="text-xs font-bold text-gray-800">模型层</div>
                  <p className="text-xs text-gray-600">vLLM + TensorRT + ONNX</p>
                </div>
                <div className="bg-white p-1.5 rounded">
                  <div className="text-xs font-bold text-gray-800">基础设施层</div>
                  <p className="text-xs text-gray-600">K8s + Docker + Prometheus</p>
                </div>
              </div>
            </div>
          </div>

          {/* 性能承诺 */}
          <div className="bg-gradient-to-r from-orange-100 to-red-100 p-2.5 rounded-lg border-2 border-orange-400">
            <div className="grid grid-cols-5 gap-2 text-center">
              <div className="bg-white p-1.5 rounded">
                <div className="text-base font-bold text-orange-600">≥92%</div>
                <div className="text-xs text-gray-600">检索准确率</div>
              </div>
              <div className="bg-white p-1.5 rounded">
                <div className="text-base font-bold text-red-600">≥85%</div>
                <div className="text-xs text-gray-600">对话准确率</div>
              </div>
              <div className="bg-white p-1.5 rounded">
                <div className="text-base font-bold text-blue-600">≤3秒</div>
                <div className="text-xs text-gray-600">响应时间</div>
              </div>
              <div className="bg-white p-1.5 rounded">
                <div className="text-base font-bold text-green-600">50+</div>
                <div className="text-xs text-gray-600">并发用户</div>
              </div>
              <div className="bg-white p-1.5 rounded">
                <div className="text-base font-bold text-purple-600">≥99%</div>
                <div className="text-xs text-gray-600">系统可用率</div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    {
      type: 'content',
      title: '03 技术创新点',
      subtitle: '六大核心技术创新',
      content: (
        <div className="space-y-2">
          {/* 创新点网格布局 - 2行3列 */}
          <div className="grid grid-cols-3 gap-2">
            {/* 1. 可视化分块创新 */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-2.5 rounded-lg border-l-4 border-purple-600">
              <div className="flex items-center gap-1.5 mb-1.5">
                <Layers className="w-4 h-4 text-purple-600" />
                <h3 className="font-bold text-purple-800 text-xs">可视化分块</h3>
              </div>
              <div className="space-y-1 text-xs">
                <div className="bg-white p-1.5 rounded">
                  <strong className="text-purple-700">突破性创新：</strong>
                  <p className="text-gray-600">支持可视化调整的RAG分块系统</p>
                </div>
                <div className="bg-white p-1.5 rounded">
                  <strong className="text-purple-700">核心价值：</strong>
                  <p className="text-gray-600">• 有效提升分块质量提升</p>
                  <p className="text-gray-600">• 提升检索准确率</p>
                </div>
                <div className="bg-white p-1.5 rounded">
                  <strong className="text-purple-700">技术优势：</strong>
                  <p className="text-gray-600">手动优化语义边界，确保信息完整</p>
                </div>
              </div>
            </div>
    
            {/* 2. 混合检索融合 */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-2.5 rounded-lg border-l-4 border-blue-600">
              <div className="flex items-center gap-1.5 mb-1.5">
                <GitBranch className="w-4 h-4 text-blue-600" />
                <h3 className="font-bold text-blue-800 text-xs">三路检索+RRF融合</h3>
              </div>
              <div className="space-y-1 text-xs">
                <div className="bg-white p-1.5 rounded">
                  <strong className="text-blue-700">技术突破：</strong>
                  <p className="text-gray-600">向量+关键词+图谱三路并行</p>
                </div>
                <div className="bg-white p-1.5 rounded">
                  <strong className="text-blue-700">融合算法：</strong>
                  <p className="text-gray-600">• 倒数排名融合(RRF)</p>
                  <p className="text-gray-600">• Cross-Encoder二次精排</p>
                </div>
                <div className="bg-white p-1.5 rounded">
                  <strong className="text-blue-700">性能提升：</strong>
                  <p className="text-gray-600">提升召回率、准确率</p>
                </div>
              </div>
            </div>
    
            {/* 3. 多模型投票 */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-2.5 rounded-lg border-l-4 border-green-600">
              <div className="flex items-center gap-1.5 mb-1.5">
                <Users className="w-4 h-4 text-green-600" />
                <h3 className="font-bold text-green-800 text-xs">独立微调+集成投票</h3>
              </div>
              <div className="space-y-1 text-xs">
                <div className="bg-white p-1.5 rounded">
                  <strong className="text-green-700">创新机制：</strong>
                  <p className="text-gray-600">3个32B模型独立推理后投票</p>
                </div>
                <div className="bg-white p-1.5 rounded">
                  <strong className="text-green-700">质量保障：</strong>
                  <p className="text-gray-600">• 错误率降低</p>
                  <p className="text-gray-600">• 稳定性提升</p>
                </div>
                <div className="bg-white p-1.5 rounded">
                  <strong className="text-green-700">灵活扩展：</strong>
                  <p className="text-gray-600">支持动态增减模型</p>
                </div>
              </div>
            </div>
    
            {/* 4. Prompt模板体系 */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-2.5 rounded-lg border-l-4 border-orange-600">
              <div className="flex items-center gap-1.5 mb-1.5">
                <FileText className="w-4 h-4 text-orange-600" />
                <h3 className="font-bold text-orange-800 text-xs">产权垂直Prompt库</h3>
              </div>
              <div className="space-y-1 text-xs">
                <div className="bg-white p-1.5 rounded">
                  <strong className="text-orange-700">专业积累：</strong>
                  <p className="text-gray-600">200+产权场景模板</p>
                </div>
                <div className="bg-white p-1.5 rounded">
                  <strong className="text-orange-700">动态优化：</strong>
                  <p className="text-gray-600">• A/B测试持续迭代</p>
                  <p className="text-gray-600">• 参数化动态组装</p>
                </div>
                <div className="bg-white p-1.5 rounded">
                  <strong className="text-orange-700">效果提升：</strong>
                  <p className="text-gray-600">生成质量提升</p>
                </div>
              </div>
            </div>
    
            {/* 5. 智能体编排 */}
            <div className="bg-gradient-to-br from-pink-50 to-red-50 p-2.5 rounded-lg border-l-4 border-pink-600">
              <div className="flex items-center gap-1.5 mb-1.5">
                <Workflow className="w-4 h-4 text-pink-600" />
                <h3 className="font-bold text-pink-800 text-xs">可视化智能体编排</h3>
              </div>
              <div className="space-y-1 text-xs">
                <div className="bg-white p-1.5 rounded">
                  <strong className="text-pink-700">拖拽设计：</strong>
                  <p className="text-gray-600">业务人员0代码构建AI流程</p>
                </div>
                <div className="bg-white p-1.5 rounded">
                  <strong className="text-pink-700">节点丰富：</strong>
                  <p className="text-gray-600">• 50+预置AI节点</p>
                  <p className="text-gray-600">• 支持自定义扩展</p>
                </div>
                <div className="bg-white p-1.5 rounded">
                  <strong className="text-pink-700">流程引擎：</strong>
                  <p className="text-gray-600">基于Prefect工作流引擎</p>
                </div>
              </div>
            </div>
    
            {/* 6. LoRA轻量微调 */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-2.5 rounded-lg border-l-4 border-indigo-600">
              <div className="flex items-center gap-1.5 mb-1.5">
                <Zap className="w-4 h-4 text-indigo-600" />
                <h3 className="font-bold text-indigo-800 text-xs">LoRA轻量化微调</h3>
              </div>
              <div className="space-y-1 text-xs">
                <div className="bg-white p-1.5 rounded">
                  <strong className="text-indigo-700">成本优化：</strong>
                  <p className="text-gray-600">训练成本降低90%</p>
                </div>
                <div className="bg-white p-1.5 rounded">
                  <strong className="text-indigo-700">快速迭代：</strong>
                  <p className="text-gray-600">• 2张NVIDIA A6000 Pro即可训练</p>
                  <p className="text-gray-600">• 15天完成微调</p>
                </div>
                <div className="bg-white p-1.5 rounded">
                  <strong className="text-indigo-700">能力保持：</strong>
                  <p className="text-gray-600">避免灾难性遗忘</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // 兼容性保障
    {
      type: 'content',
      title: '04 兼容性保障',
      subtitle: '与现有系统无缝集成方案',
      content: (
        <div className="space-y-3">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border-2 border-blue-400">
            <h3 className="text-lg font-bold text-blue-800 mb-2 text-center">完整对接南方产权现有六大核心业务系统</h3>
            <p className="text-center text-gray-600 text-sm">综合业务交易系统、粤易租、粤采易、全流程电子化招投标、破产财产处置、行政事业单位资产处置</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white border-2 border-blue-300 rounded-lg p-4">
              <h3 className="text-base font-bold text-blue-800 mb-3 flex items-center gap-2">
                <Network className="w-5 h-5" />
                统一API网关
              </h3>
              <ul className="space-y-1.5 text-xs text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RESTful API</strong>：标准化接口设计规范</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Kong/APISIX</strong>：统一鉴权、限流、监控</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span><strong>OpenAPI规范</strong>：自动生成接口文档</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span><strong>降级策略</strong>：AI服务异常自动降级</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-purple-300 rounded-lg p-4">
              <h3 className="text-base font-bold text-purple-800 mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                统一身份认证(SSO)
              </h3>
              <ul className="space-y-1.5 text-xs text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span><strong>OAuth 2.0</strong>：对接"粤交易"统一认证中心</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBAC权限</strong>：与现有角色体系无缝衔接</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span><strong>审计日志</strong>：完整记录所有访问操作</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span><strong>数据隔离</strong>：基于权限的数据访问控制</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white border-2 border-green-300 rounded-lg p-4">
              <h3 className="text-base font-bold text-green-800 mb-3 flex items-center gap-2">
                <Database className="w-5 h-5" />
                数据中台对接
              </h3>
              <ul className="space-y-1.5 text-xs text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>集团数据中台</strong>：对接"粤交易"数据服务</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>GraphQL接口</strong>：精确数据查询和订阅</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>数据适配层</strong>：异构数据格式转换</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>增量同步</strong>：实时/准实时/批量混合</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-orange-300 rounded-lg p-4">
              <h3 className="text-base font-bold text-orange-800 mb-3 flex items-center gap-2">
                <Cog className="w-5 h-5" />
                技术栈兼容
              </h3>
              <ul className="space-y-1.5 text-xs text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Java+Spring Boot</strong>：与现有技术栈一致</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span><strong>PostgreSQL+Redis</strong>：复用现有数据存储</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span><strong>VMware虚拟化</strong>：兼容现有基础设施</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Tengine/Nginx</strong>：统一负载均衡方案</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-4 rounded-lg border-2 border-indigo-400">
            <h3 className="text-lg font-bold text-indigo-800 mb-3 text-center">灰度发布与验证体系</h3>
            <div className="grid grid-cols-4 gap-3">
              {[
                { title: '金丝雀发布', desc: '5%用户试用\n逐步扩大范围', Icon: GitBranch },
                { title: 'A/B测试', desc: '新旧方案并行\n效果对比验证', Icon: Activity },
                { title: '性能监控', desc: '实时监控指标\n及时发现问题', Icon: BarChart3 },
                { title: '快速回滚', desc: '1小时内回滚\n降低风险影响', Icon: ArrowRight }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-3 rounded text-center">
                  <div className="flex justify-center mb-1.5">
                    <item.Icon className="w-8 h-8 text-indigo-600" />
                  </div>
                  <div className="font-bold text-gray-800 mb-1 text-sm">{item.title}</div>
                  <div className="text-xs text-gray-600 whitespace-pre-line leading-tight">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },

    // 私有化部署
    {
      type: 'content',
      title: '05 私有化大模型部署',
      subtitle: '高性能本地化部署方案',
      content: (
        <div className="space-y-2.5">
          {/* 第一行：硬件配置与性能指标 */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white border-2 border-blue-400 rounded-lg p-3">
              <h3 className="text-base font-bold text-blue-800 mb-2 flex items-center gap-2">
                <Server className="w-5 h-5" />
                硬件配置清单
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { icon: Server, title: 'H3C R5300 G6服务器', desc: '4U准系统，双路CPU，多GPU扩展，2+2冗余电源' },
                  { icon: Cpu, title: 'Intel Xeon双处理器', desc: 'Platinum 8470Q×2，总计104核心，2.1-3.8GHz' },
                  { icon: Zap, title: 'NVIDIA PRO 6000显卡', desc: '2张×96GB显存，总计192GB，ECC纠错功能' },
                  { icon: HardDrive, title: '256GB DDR5内存', desc: '4条×64GB，4800MHz，支持ECC纠错' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-blue-50 p-2 rounded">
                    <div className="font-bold text-gray-800 mb-0.5 flex items-center gap-1.5 text-xs">
                      <item.icon className="w-4 h-4 text-blue-600" />
                      {item.title}
                    </div>
                    <p className="text-xs text-gray-700">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border-2 border-purple-400 rounded-lg p-3">
              <h3 className="text-base font-bold text-purple-800 mb-2 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                性能指标承诺
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { icon: Zap, title: '推理速度', desc: '不低于100 tokens/秒，响应延迟<2秒' },
                  { icon: Users, title: '并发支持', desc: '支持两个32B模型同时运行，50个并发用户' },
                  { icon: Activity, title: '系统可用率', desc: '不低于95%，故障自动恢复' },
                  { icon: Lock, title: '数据安全', desc: '内网物理隔离，数据不出域' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-purple-50 p-2 rounded">
                    <div className="font-bold text-gray-800 mb-0.5 flex items-center gap-1.5 text-xs">
                      <item.icon className="w-4 h-4 text-purple-600" />
                      {item.title}
                    </div>
                    <p className="text-xs text-gray-700">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 第二行：运维保障体系 */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 rounded-lg border-2 border-green-400">
            <h3 className="text-base font-bold text-green-800 mb-2 text-center">运维保障体系</h3>
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: Cog, title: '技术支持', items: ['7×24小时远程支持', '4小时内响应', '8小时内到场', '三年整机质保'] },
                { icon: Users, title: '驻场服务', items: ['2名专职人员驻场', 'AI模型运维监控', '用户培训支持', '定期巡检维护'] },
                { icon: TrendingUp, title: '性能优化', items: ['负载均衡调优', '模型量化压缩', '缓存策略优化', '批处理并行化'] }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-2.5 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-1.5 flex items-center gap-1.5 text-xs">
                    <item.icon className="w-4 h-4 text-gray-600" />
                    {item.title}
                  </h4>
                  <ul className="text-xs text-gray-700 space-y-0.5">
                    {item.items.map((point, i) => (
                      <li key={i}>• {point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* 第三行：部署时间承诺 */}
          <div className="bg-gradient-to-r from-orange-100 to-red-100 p-3 rounded-lg border-2 border-orange-400">
            <h3 className="text-base font-bold text-orange-800 mb-2 text-center">部署时间承诺</h3>
            <div className="flex items-center justify-between">
              {[
                { step: '设备交付', time: '2个月内', Icon: Server },
                { step: '现场部署', time: '1周内', Icon: Cog },
                { step: '系统调试', time: '1周内', Icon: Activity },
                { step: '性能验收', time: '验收通过', Icon: CheckCircle }
              ].map((item, idx) => (
                <React.Fragment key={idx}>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mb-1.5">
                      <item.Icon className="w-6 h-6" />
                    </div>
                    <p className="text-xs font-medium text-gray-700">{item.step}</p>
                    <p className="text-xs text-gray-600">{item.time}</p>
                  </div>
                  {idx < 3 && <ArrowRight className="w-5 h-5 text-orange-400" />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      )
    },

    // 数据产品化
    {
      type: 'content',
      title: '06 数据产品开发',
      subtitle: '广州数据交易所挂牌路径',
      content: (
        <div className="space-y-2.5">
          {/* 第一行：核心目标和数据资产基本信息 */}
          <div className="grid grid-cols-2 gap-3">
            {/* 左侧：核心目标 */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-3 rounded-lg border-2 border-blue-400">
              <h3 className="text-base font-bold mb-2 text-center">标准化数据产品商业化变现</h3>
              <div className="bg-white bg-opacity-20 p-2.5 rounded space-y-1.5">
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-200 flex-shrink-0" />
                  <span className="text-sm font-bold">2025年12月底前开发至少1个标准化数据产品</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-blue-200 flex-shrink-0" />
                  <span className="text-sm font-bold">在广州数据交易所实现挂牌交易</span>
                </div>
              </div>
            </div>

            {/* 右侧：数据资产基本信息 */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-3 rounded-lg border-2 border-purple-400">
              <h3 className="text-base font-bold text-purple-800 mb-2 text-center">数据资产基本信息</h3>
              <div className="space-y-1">
                {[
                  { label: '数据资产名称', value: '产权交易数智服务产品' },
                  { label: '数据资产类别', value: '其他互联网相关服务' },
                  { label: '数据资产形态', value: '数据资源' },
                  { label: '数据来源', value: '合法间接获取的数据，衍生创造' },
                  { label: '产品类型', value: '数据服务或数据API' },
                  { label: '应用范围', value: '金融机构、产业投资人和第三方服务商等' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-1.5 rounded flex">
                    <span className="font-bold text-purple-800 text-xs min-w-[90px]">{item.label}：</span>
                    <span className="text-xs text-gray-700">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 第二行：数据类型及应用场景 + 基础数据产品 */}
          <div className="space-y-2">

            {/* 基础数据产品 */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-3 rounded-lg border-2 border-blue-400">
              <h3 className="text-base font-bold text-blue-800 mb-2 text-center">一、基础数据产品</h3>
              <div className="grid grid-cols-2 gap-2.5">
                <div className="bg-white p-2.5 rounded">
                  <h4 className="font-bold text-gray-800 mb-1.5 text-xs flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-blue-600" />
                    静态数据包
                  </h4>
                  <ul className="text-xs text-gray-700 space-y-0.5">
                    {[
                      '股权转让历史交易数据集',
                      '资产处置历史交易数据集',
                      '市场分析数据集',
                      '合规审计数据集'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-1">
                        <CheckCircle className="w-3 h-3 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-gray-600 mt-1.5 bg-blue-50 p-1.5 rounded">供使用方下载用于市场分析或合规审计等场景</p>
                </div>
                <div className="bg-white p-2.5 rounded">
                  <h4 className="font-bold text-gray-800 mb-1.5 text-xs flex items-center gap-1.5">
                    <Activity className="w-4 h-4 text-blue-600" />
                    动态API接口
                  </h4>
                  <ul className="text-xs text-gray-700 space-y-0.5">
                    {[
                      '实时挂牌项目查询',
                      '成交价格实时获取',
                      '竞价动态跟踪',
                      '按需调用服务'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-1">
                        <CheckCircle className="w-3 h-3 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-gray-600 mt-1.5 bg-blue-50 p-1.5 rounded">支持企业系统集成（按次数或时长计费）</p>
                </div>
              </div>
            </div>
          </div>

          {/* 第三行：交易指数和交易活跃度热力图 */}
          <div className="bg-gradient-to-r from-orange-50 to-red-50 p-3 rounded-lg border-2 border-orange-400">
            <h3 className="text-base font-bold text-orange-800 mb-2 text-center">二、交易指数和交易活跃度热力图</h3>
            <div className="grid grid-cols-2 gap-2.5">
              {/* 交易指数 */}
              <div className="bg-white p-2.5 rounded">
                <h4 className="font-bold text-gray-800 mb-1.5 text-xs flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-orange-600" />
                  交易指数
                </h4>
                <div className="space-y-1.5">
                  <div className="bg-orange-50 p-1.5 rounded">
                    <p className="text-xs text-gray-700"><span className="font-bold text-orange-700">覆盖类型：</span>股权、实物资产、增资等交易类型</p>
                  </div>
                  <div className="bg-orange-50 p-1.5 rounded">
                    <p className="text-xs text-gray-700"><span className="font-bold text-orange-700">技术方案：</span>机器学习模型分析</p>
                    <ul className="text-xs text-gray-600 mt-1 space-y-0.5 ml-3">
                      <li>• 历史成交价格</li>
                      <li>• 行业、区域分布</li>
                      <li>• 挂牌金额、评估金额</li>
                      <li>• 竞价轮次、溢价率</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 p-1.5 rounded">
                    <p className="text-xs text-gray-700"><span className="font-bold text-orange-700">输出结果：</span>行业/区域/资产类型的价值波动曲线</p>
                  </div>
                </div>
              </div>

              {/* 交易活跃度热力图 */}
              <div className="bg-white p-2.5 rounded">
                <h4 className="font-bold text-gray-800 mb-1.5 text-xs flex items-center gap-1.5">
                  <BarChart3 className="w-4 h-4 text-orange-600" />
                  交易活跃度热力图
                </h4>
                <div className="space-y-1.5">
                  <div className="bg-orange-50 p-1.5 rounded">
                    <p className="text-xs text-gray-700"><span className="font-bold text-orange-700">数据维度：</span></p>
                    <ul className="text-xs text-gray-600 mt-1 space-y-0.5 ml-3">
                      <li>• 项目数量</li>
                      <li>• 交易金额</li>
                      <li>• 竞价轮次</li>
                      <li>• 围观人数</li>
                      <li>• 项目延挂次数</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 p-1.5 rounded">
                    <p className="text-xs text-gray-700"><span className="font-bold text-orange-700">技术方案：</span>空间聚类分析</p>
                  </div>
                  <div className="bg-orange-50 p-1.5 rounded">
                    <p className="text-xs text-gray-700"><span className="font-bold text-orange-700">输出结果：</span>区域/行业热力图可视化</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // 总结
    {
      type: 'content',
      title: '项目价值总结',
      content: (
        <div className="space-y-2.5">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-4 rounded-lg text-center">
            <h2 className="text-xl font-bold mb-2">构建产权交易行业智能化标杆</h2>
            <p className="text-base text-blue-100">
              基于成熟度评估的深刻理解，以RAG优先的务实路线<br />
              实现AI与产权交易业务的深度融合，创造显著商业价值
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[
              {
                icon: Target,
                title: '业务价值',
                color: 'blue',
                points: [
                  '提升交易撮合效率',
                  '降低运营成本',
                  '提升客户满意度',
                ]
              },
              {
                icon: Sparkles,
                title: '技术优势',
                color: 'purple',
                points: [
                  'RAG优先快速上线(3个月)',
                  '32B大模型本地部署',
                  '六层架构松耦合设计',
                  '与粤交易深度融合'
                ]
              },
              {
                icon: Shield,
                title: '实施保障',
                color: 'green',
                points: [
                  '21人专业团队',
                  '2名驻场服务人员',
                  'ISO9001/ISO27001认证',
                  '等保二级合规建设'
                ]
              }
            ].map((card, idx) => (
              <div key={idx} className={`bg-${card.color}-50 p-3 rounded-lg border-2 border-${card.color}-400`}>
                <div className="flex items-center gap-2 mb-2">
                  <card.icon className={`w-6 h-6 text-${card.color}-600`} />
                  <h3 className="font-bold text-gray-800 text-base">{card.title}</h3>
                </div>
                <ul className="space-y-1 text-xs text-gray-700">
                  {card.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <CheckCircle className={`w-3 h-3 text-${card.color}-600 flex-shrink-0 mt-0.5`} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-3 rounded-lg border-2 border-purple-400">
            <h3 className="text-base font-bold text-purple-800 mb-2 text-center">我们的独特优势</h3>
            <div className="grid grid-cols-2 gap-2.5 text-xs">
              <div className="bg-white p-2.5 rounded-lg">
                <div className="font-bold text-gray-800 mb-1">深度理解业务</div>
                <p className="text-gray-700">基于成熟度评估项目的深入调研，比任何其他投标方都更懂南方产权的业务现状和需求</p>
              </div>
              <div className="bg-white p-2.5 rounded-lg">
                <div className="font-bold text-gray-800 mb-1">技术路线务实</div>
                <p className="text-gray-700">RAG优先快速见效，微调为辅持续优化，不盲目追新，确保投资回报</p>
              </div>
              <div className="bg-white p-2.5 rounded-lg">
                <div className="font-bold text-gray-800 mb-1">方案切实可行</div>
                <p className="text-gray-700">每个模块都有清晰的技术实现路径，H3C高性能服务器已承诺交付</p>
              </div>
              <div className="bg-white p-2.5 rounded-lg">
                <div className="font-bold text-gray-800 mb-1">长期合作伙伴</div>
                <p className="text-gray-700">不仅是项目交付，更是长期价值共创，12个月免费运维保障</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-lg text-lg font-bold">
              携手共建产权交易智能化未来！
            </div>
          </div>
        </div>
      )
    },

    // 结束页
    {
      type: 'cover',
      content: (
        <div className="h-full flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-800 text-white p-12">
          <div className="text-center space-y-8">
            <div className="flex justify-center mb-6">
              <Sparkles className="w-32 h-32 text-purple-200" />
            </div>
            <h1 className="text-6xl font-bold mb-4">感谢聆听</h1>
            <h2 className="text-3xl font-light mb-8">期待与您的深入交流</h2>
            <div className="text-xl text-purple-200 space-y-3">
              <p>深度理解业务 · 务实技术路线</p>
              <p>创新亮点突出 · 商业价值显著</p>
              <p>实施保障完善 · 长期合作共赢</p>
            </div>
            <div className="mt-12 text-purple-100">
              <p>广东南方电信规划咨询设计院有限公司</p>
              <p>联系方式：待补充</p>
            </div>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  }, [currentSlide, slides.length]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  }, [currentSlide]);

  // 键盘事件处理
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className="fixed inset-0 bg-white flex flex-col">
      {/* 幻灯片内容 */}
      <div className="flex-1 overflow-auto">
        {slides[currentSlide].type === 'cover' ? (
          slides[currentSlide].content
        ) : (
          <div className="h-full flex flex-col px-12 pt-6 pb-8">
            <div className="mb-4">
              <h1 className="text-3xl font-bold text-gray-800 mb-1">
                {slides[currentSlide].title}
              </h1>
              {slides[currentSlide].subtitle && (
                <h2 className="text-lg text-gray-600">
                  {slides[currentSlide].subtitle}
                </h2>
              )}
            </div>
            <div className="flex-1 overflow-auto">
              {slides[currentSlide].content}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyRightsTechPresentation;