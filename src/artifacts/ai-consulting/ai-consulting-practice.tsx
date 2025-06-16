import React, { useState } from 'react';
import { 
  ChevronRight, Building, Target, Layers, TrendingUp, Database, 
  Brain, BarChart, FileText, Globe, Shield, Users, Zap, 
  CheckCircle, AlertCircle, Clock, ArrowRight, Lightbulb,
  GitBranch, Cpu, Search, PenTool, Activity
} from 'lucide-react';

export const meta = {
  title: "南方产权AI项目规划实践",
  description: "第二部分：南方产权AI项目规划实践案例分享（35分钟）",
  isHidden: false,
  category: "AI项目规划咨询",
  order: 3
};

const AiConsultingPractice: React.FC = () => {
  const [activeSection, setActiveSection] = useState('2.1');

  const sections = {
    '2.1': {
      title: '项目背景与挑战',
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
            <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <Building className="w-6 h-6 mr-2 text-blue-600" />
              企业概况
            </h4>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h5 className="font-medium text-blue-800 mb-2">南方联合产权交易中心</h5>
                <p className="text-gray-700">广东省属国有资本市场重要平台</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h5 className="font-medium text-blue-800 mb-2">业务范围</h5>
                <p className="text-gray-700">产权交易、投融资服务、要素市场运营</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h5 className="font-medium text-blue-800 mb-2">转型诉求</h5>
                <p className="text-gray-700">从传统交易平台向智能服务平台升级</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <AlertCircle className="w-6 h-6 mr-2 text-red-600" />
              面临的核心挑战
            </h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-red-50 border border-red-200 rounded-lg p-5">
                <h5 className="font-semibold text-red-800 mb-3">市场竞争加剧</h5>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    北交所等同业机构的竞争压力
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    价格战导致的盈利能力下降
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    客户对服务质量要求不断提升
                  </li>
                </ul>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-5">
                <h5 className="font-semibold text-orange-800 mb-3">数字化基础薄弱</h5>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    系统孤岛严重，数据难以打通
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    业务流程数字化程度低
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    缺乏统一的数据治理体系
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-5">
                <h5 className="font-semibold text-yellow-800 mb-3">AI应用空白</h5>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    尚未系统性引入AI技术
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    缺乏AI人才和技术储备
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    对AI应用场景认识不足
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    '2.2': {
      title: 'AI规划咨询方法论应用',
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl">
            <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <BarChart className="w-6 h-6 mr-2 text-green-600" />
              诊断评估阶段
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h5 className="font-medium text-green-700 mb-3">现状调研方法</h5>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded">
                    <span className="text-sm font-medium">深度访谈</span>
                    <span className="text-sm text-green-700 font-bold">19个部门负责人</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded">
                    <span className="text-sm font-medium">系统梳理</span>
                    <span className="text-sm text-green-700 font-bold">600+份内部文档</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded">
                    <span className="text-sm font-medium">问卷调查</span>
                    <span className="text-sm text-green-700 font-bold">115份有效问卷</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h5 className="font-medium text-green-700 mb-3">AI就绪度评估</h5>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">数据基础</span>
                    <div className="flex items-center">
                      <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                        <div className="bg-red-500 h-2 rounded-full" style={{width: '56.4%'}}></div>
                      </div>
                      <span className="text-sm font-bold text-red-600">2.82分</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">技术能力</span>
                    <div className="flex items-center">
                      <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                        <div className="bg-orange-500 h-2 rounded-full" style={{width: '64.2%'}}></div>
                      </div>
                      <span className="text-sm font-bold text-orange-600">3.21分</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">组织能力</span>
                    <div className="flex items-center">
                      <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                        <div className="bg-yellow-500 h-2 rounded-full" style={{width: '63%'}}></div>
                      </div>
                      <span className="text-sm font-bold text-yellow-600">3.15分</span>
                    </div>
                  </div>
                  <div className="pt-3 border-t">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">综合评分</span>
                      <span className="text-lg font-bold text-green-600">3.16分（发展级）</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl">
            <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <Target className="w-6 h-6 mr-2 text-purple-600" />
              战略规划阶段
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h5 className="font-medium text-purple-700 mb-3">AI愿景设计</h5>
                <div className="space-y-3">
                  <div className="p-3 bg-purple-50 rounded">
                    <p className="text-sm font-medium text-purple-800 mb-1">定位</p>
                    <p className="text-sm text-gray-700">打造基于AI的智能服务平台</p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded">
                    <p className="text-sm font-medium text-purple-800 mb-1">目标</p>
                    <p className="text-sm text-gray-700">提升服务效率50%，降低运营成本30%</p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded">
                    <p className="text-sm font-medium text-purple-800 mb-1">路径</p>
                    <p className="text-sm text-gray-700">分阶段实施，3年完成核心场景覆盖</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h5 className="font-medium text-purple-700 mb-3">场景优先级排序</h5>
                <div className="space-y-3">
                  <div className="p-3 bg-red-50 rounded border-l-4 border-red-500">
                    <p className="text-sm font-medium text-red-800">高优先级</p>
                    <p className="text-sm text-gray-700">智能搜索、报告生成、风险预警</p>
                  </div>
                  <div className="p-3 bg-yellow-50 rounded border-l-4 border-yellow-500">
                    <p className="text-sm font-medium text-yellow-800">中优先级</p>
                    <p className="text-sm text-gray-700">智能撮合、个性化推荐</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded border-l-4 border-blue-500">
                    <p className="text-sm font-medium text-blue-800">待探索</p>
                    <p className="text-sm text-gray-700">区块链+AI、元宇宙应用</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    '2.3': {
      title: '核心AI应用场景设计',
      content: (
        <div className="space-y-6">
          {/* 场景一：AI智能搜索引擎 */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <Search className="w-8 h-8 text-blue-600 mr-3" />
              <h4 className="text-xl font-semibold text-gray-800">场景一：AI智能搜索引擎</h4>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h5 className="font-medium text-red-700 mb-2">业务痛点</h5>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• 海量交易信息检索效率低</li>
                  <li>• 跨系统数据难以整合</li>
                  <li>• 用户找不到所需信息</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h5 className="font-medium text-blue-700 mb-2">解决方案</h5>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• 基于DeepSeek的智能搜索系统</li>
                  <li>• 多维度检索+语义理解</li>
                  <li>• 个性化结果排序</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h5 className="font-medium text-green-700 mb-2">预期效果</h5>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• 搜索效率提升80%</li>
                  <li>• 用户满意度提升30%</li>
                  <li>• 信息利用率提升50%</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 场景二：智能报告撰写系统 */}
          <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <PenTool className="w-8 h-8 text-green-600 mr-3" />
              <h4 className="text-xl font-semibold text-gray-800">场景二：智能报告撰写系统</h4>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h5 className="font-medium text-red-700 mb-2">业务痛点</h5>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• 交易方案撰写耗时长</li>
                  <li>• 报告质量参差不齐</li>
                  <li>• 知识经验难以传承</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h5 className="font-medium text-green-700 mb-2">解决方案</h5>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• 智能模板库+AI写作助手</li>
                  <li>• 自动数据填充和分析</li>
                  <li>• 可视化图表自动生成</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h5 className="font-medium text-green-700 mb-2">预期效果</h5>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• 报告生成时间缩短70%</li>
                  <li>• 标准化程度提升90%</li>
                  <li>• 新员工培养周期缩短50%</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 场景三：产业数据中心 */}
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <Database className="w-8 h-8 text-purple-600 mr-3" />
              <h4 className="text-xl font-semibold text-gray-800">场景三：产业数据中心</h4>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h5 className="font-medium text-red-700 mb-2">业务痛点</h5>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• 产业信息分散</li>
                  <li>• 投资机会识别困难</li>
                  <li>• 决策支持不足</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h5 className="font-medium text-purple-700 mb-2">解决方案</h5>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• 产业知识图谱构建</li>
                  <li>• 企业画像与智能匹配</li>
                  <li>• 投资机会智能推荐</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h5 className="font-medium text-green-700 mb-2">预期效果</h5>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• 投资匹配成功率提升40%</li>
                  <li>• 决策效率提升60%</li>
                  <li>• 新业务机会增长30%</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    '2.4': {
      title: '技术架构设计',
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-xl">
            <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <Layers className="w-6 h-6 mr-2 text-indigo-600" />
              整体架构
            </h4>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-lg">
                  <h5 className="font-medium text-purple-800 mb-2">应用层</h5>
                  <p className="text-sm text-gray-700">智能投顾 | 产业数据中心 | 百千万工程应用</p>
                </div>
                <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-4 rounded-lg">
                  <h5 className="font-medium text-blue-800 mb-2">服务层</h5>
                  <p className="text-sm text-gray-700">AI能力中台（NLP、知识图谱、机器学习）</p>
                </div>
                <div className="bg-gradient-to-r from-green-100 to-teal-100 p-4 rounded-lg">
                  <h5 className="font-medium text-green-800 mb-2">数据层</h5>
                  <p className="text-sm text-gray-700">结构化数据 | 非结构化数据 | 实时数据流</p>
                </div>
                <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-4 rounded-lg">
                  <h5 className="font-medium text-orange-800 mb-2">基础层</h5>
                  <p className="text-sm text-gray-700">云计算平台 | GPU集群 | 安全防护</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Cpu className="w-5 h-5 mr-2 text-green-600" />
                大模型选择
              </h4>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h5 className="font-medium text-green-700 mb-3">DeepSeek开源模型</h5>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                    <p className="text-sm text-gray-700">成本可控、可私有化部署</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                    <p className="text-sm text-gray-700">金融领域优化</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                    <p className="text-sm text-gray-700">API调用+私有化部署混合模式</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <GitBranch className="w-5 h-5 mr-2 text-purple-600" />
                关键技术栈
              </h4>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="space-y-3">
                  <div className="p-3 bg-purple-50 rounded">
                    <p className="text-sm font-medium text-purple-800">向量数据库</p>
                    <p className="text-xs text-gray-600 mt-1">存储和检索知识</p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded">
                    <p className="text-sm font-medium text-purple-800">流处理框架</p>
                    <p className="text-xs text-gray-600 mt-1">实时数据分析</p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded">
                    <p className="text-sm font-medium text-purple-800">微服务架构</p>
                    <p className="text-xs text-gray-600 mt-1">灵活扩展</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    '2.5': {
      title: '实施路径与关键成功因素',
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
            <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <Clock className="w-6 h-6 mr-2 text-blue-600" />
              分阶段实施计划
            </h4>
            <div className="space-y-4">
              <div className="relative">
                {/* 时间线 */}
                <div className="absolute left-8 top-8 bottom-0 w-0.5 bg-gray-300"></div>
                
                {/* 第一阶段 */}
                <div className="relative flex items-start mb-8">
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-sm font-bold z-10">
                    6个月
                  </div>
                  <div className="ml-8 bg-white p-5 rounded-lg shadow-sm flex-1">
                    <h5 className="font-semibold text-blue-800 mb-2">第一阶段：基础能力建设</h5>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• 数据治理体系建立</li>
                      <li>• AI平台搭建</li>
                      <li>• 试点场景开发</li>
                    </ul>
                  </div>
                </div>

                {/* 第二阶段 */}
                <div className="relative flex items-start mb-8">
                  <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-sm font-bold z-10">
                    12个月
                  </div>
                  <div className="ml-8 bg-white p-5 rounded-lg shadow-sm flex-1">
                    <h5 className="font-semibold text-green-800 mb-2">第二阶段：核心场景落地</h5>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• 三大核心场景上线</li>
                      <li>• 用户培训和推广</li>
                      <li>• 效果评估和优化</li>
                    </ul>
                  </div>
                </div>

                {/* 第三阶段 */}
                <div className="relative flex items-start">
                  <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-sm font-bold z-10">
                    6个月
                  </div>
                  <div className="ml-8 bg-white p-5 rounded-lg shadow-sm flex-1">
                    <h5 className="font-semibold text-purple-800 mb-2">第三阶段：全面推广</h5>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• 场景扩展和深化</li>
                      <li>• 生态伙伴引入</li>
                      <li>• 持续迭代升级</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl">
            <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <Shield className="w-6 h-6 mr-2 text-green-600" />
              关键成功因素
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
                <h5 className="font-medium text-green-800 mb-2">高层支持</h5>
                <p className="text-sm text-gray-700">一把手工程，战略级投入</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
                <h5 className="font-medium text-blue-800 mb-2">数据基础</h5>
                <p className="text-sm text-gray-700">打通数据孤岛，建立统一数据平台</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-purple-500">
                <h5 className="font-medium text-purple-800 mb-2">人才培养</h5>
                <p className="text-sm text-gray-700">内部培养+外部引进并重</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-500">
                <h5 className="font-medium text-orange-800 mb-2">快速迭代</h5>
                <p className="text-sm text-gray-700">小步快跑，持续优化</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-500">
                <h5 className="font-medium text-red-800 mb-2">变革管理</h5>
                <p className="text-sm text-gray-700">做好组织和流程的配套调整</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    '2.6': {
      title: '项目成效与价值',
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
              <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <TrendingUp className="w-6 h-6 mr-2 text-blue-600" />
                定量成效
              </h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">效率提升</span>
                    <span className="text-2xl font-bold text-blue-600">50-70%</span>
                  </div>
                  <p className="text-xs text-gray-600">核心业务流程效率提升</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">成本降低</span>
                    <span className="text-2xl font-bold text-green-600">25%</span>
                  </div>
                  <p className="text-xs text-gray-600">运营成本下降</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">收入增长</span>
                    <span className="text-2xl font-bold text-purple-600">15%</span>
                  </div>
                  <p className="text-xs text-gray-600">新业务带来的收入增长</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl">
              <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Activity className="w-6 h-6 mr-2 text-green-600" />
                定性价值
              </h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h5 className="font-medium text-green-800 mb-2">竞争力提升</h5>
                  <p className="text-sm text-gray-700">从区域平台向智能平台转型</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h5 className="font-medium text-green-800 mb-2">服务升级</h5>
                  <p className="text-sm text-gray-700">从简单撮合到智能赋能</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h5 className="font-medium text-green-800 mb-2">生态构建</h5>
                  <p className="text-sm text-gray-700">形成开放的产业服务生态</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl">
            <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <Lightbulb className="w-6 h-6 mr-2 text-orange-600" />
              经验总结
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-500">
                <p className="text-sm font-medium text-orange-800 mb-1">洞察一</p>
                <p className="text-sm text-gray-700">AI不是技术项目，是业务转型项目</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-500">
                <p className="text-sm font-medium text-red-800 mb-1">洞察二</p>
                <p className="text-sm text-gray-700">场景选择比技术选择更重要</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-pink-500">
                <p className="text-sm font-medium text-pink-800 mb-1">洞察三</p>
                <p className="text-sm text-gray-700">数据质量决定AI应用上限</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-purple-500">
                <p className="text-sm font-medium text-purple-800 mb-1">洞察四</p>
                <p className="text-sm text-gray-700">持续投入和耐心是成功关键</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-100 to-pink-100 border-2 border-red-300 text-gray-900 p-6 rounded-xl text-center">
            <h4 className="text-xl font-bold mb-2 text-red-700">🎯 核心价值</h4>
            <p className="text-lg font-semibold text-red-800">AI赋能传统产业的成功实践</p>
            <p className="text-sm mt-2 text-gray-700">为同类企业数字化转型提供可复制的经验和路径</p>
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
          <h1 className="text-2xl font-bold text-gray-800">南方产权AI项目规划实践</h1>
          <p className="text-gray-600 mt-1">第二部分：南方产权AI项目规划实践案例分享（35分钟）</p>
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

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h4 className="text-sm font-semibold text-blue-800 mb-2">项目信息</h4>
                <div className="space-y-2 text-xs text-gray-700">
                  <div>
                    <span className="font-medium">客户：</span>南方联合产权交易中心
                  </div>
                  <div>
                    <span className="font-medium">时间：</span>2024年
                  </div>
                  <div>
                    <span className="font-medium">规模：</span>战略级转型项目
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

export default AiConsultingPractice;