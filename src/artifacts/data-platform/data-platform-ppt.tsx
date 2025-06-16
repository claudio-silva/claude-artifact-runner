import React, { useState, useEffect } from 'react';
import { Database, Target, TrendingUp, CheckCircle, FileText, Building, Network } from 'lucide-react';

const DataPlatformPPT = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // 封面
    {
      id: 1,
      content: (
        <div className="h-full flex flex-col items-center justify-center bg-white">
          <div className="text-center space-y-8">
            <div className="w-32 h-32 mx-auto bg-blue-600 rounded-full flex items-center justify-center">
              <Database className="w-20 h-20 text-white" />
            </div>
            <h1 className="text-6xl font-bold text-gray-900">自治区一体化数据资源服务平台</h1>
            <h2 className="text-3xl text-gray-700">建设项目汇报</h2>
            <div className="mt-16 text-xl text-gray-600">
              <p>新疆维吾尔自治区数据资源和政务服务中心</p>
              <p className="mt-2">2025年1月</p>
            </div>
          </div>
        </div>
      )
    },
    // 项目概况
    {
      id: 2,
      content: (
        <div className="h-full p-6 bg-white overflow-y-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">项目概况</h2>
          <div className="grid grid-cols-3 gap-6 mb-6">
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-3 flex items-center">
                <Database className="w-5 h-5 mr-2" />
                基本信息
              </h3>
              <div className="space-y-2 text-gray-700 text-sm">
                <p><span className="font-semibold">项目名称：</span>自治区一体化数据资源服务平台建设项目</p>
                <p><span className="font-semibold">建设单位：</span>新疆维吾尔自治区数据资源和政务服务中心</p>
                <p><span className="font-semibold">建设模式：</span>"统筹建设、分级应用"</p>
                <p><span className="font-semibold">覆盖范围：</span>自治区、14个地州市、108个县市区、1128个乡镇</p>
                <p><span className="font-semibold">建设周期：</span>18个月（系统10个月+运营18个月）</p>
                <p><span className="font-semibold">总投资：</span>2亿元（自治区财政资金）</p>
              </div>
            </div>
            <div className="col-span-2 border border-gray-200 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-600 mb-3 flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                政策依据
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <div className="bg-blue-50 p-3 rounded border border-blue-200">
                    <p className="font-semibold text-blue-800 text-sm mb-1">《自治区数字政府改革建设方案》</p>
                    <p className="text-xs text-blue-600 mb-1">（新党办发〔2022〕34号）</p>
                    <p className="text-xs leading-relaxed text-gray-700">建设标准统一、布局合理、管理协同、安全可靠的区地一体化数据资源服务平台体系，充分释放数据要素价值。</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded border border-green-200">
                    <p className="font-semibold text-green-800 text-sm mb-1">《关于加快公共数据资源开发利用的意见》</p>
                    <p className="text-xs text-green-600 mb-1">（中共中央办公厅 国务院办公厅 2024年9月21日）</p>
                    <p className="text-xs leading-relaxed text-gray-700">加强数据服务能力建设，推动数据利用方式向共享汇聚和应用服务能力并重的方向转变。</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="bg-purple-50 p-3 rounded border border-purple-200">
                    <p className="font-semibold text-purple-800 text-sm mb-1">《自治区一体化数据资源体系建设实施方案》</p>
                    <p className="text-xs text-purple-600 mb-1">（新政办函〔2024〕91号）</p>
                    <p className="text-xs leading-relaxed text-gray-700">以推动数字政府转型为主线，整合构建自治区一体化数据资源体系，全面提升政府治理现代化水平。</p>
                  </div>
                  <div className="bg-orange-50 p-3 rounded border border-orange-200">
                    <p className="font-semibold text-orange-800 text-sm mb-1">《国家数据基础设施建设指引》</p>
                    <p className="text-xs text-orange-600 mb-1">（发改数据〔2024〕1853号）</p>
                    <p className="text-xs leading-relaxed text-gray-700">围绕打造可信流通、高效调度、高速互联、安全可靠的体系化能力，持续赋能各行业数据融合发展。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-lg text-center text-gray-800">实现全区数据管理的<span className="font-bold text-blue-600">总枢纽</span>、数据流转的<span className="font-bold text-blue-600">总通道</span>、数据门户的<span className="font-bold text-blue-600">总门户</span></p>
          </div>
        </div>
      )
    },
    // 项目定位
    {
      id: 3,
      content: (
        <div className="h-full p-6 bg-white overflow-y-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">总体设计方案 - 项目定位</h2>
          
          <div className="grid grid-cols-2 gap-6 mb-6">
            {/* 数字政府"54433"框架定位 */}
            <div className="border border-blue-300 rounded-lg overflow-hidden bg-blue-50">
              <div className="bg-blue-600 text-white p-4">
                <h3 className="text-xl font-semibold">数字政府"54433"改革总体框架</h3>
                <p className="text-sm mt-1">《自治区数字政府改革建设方案》（新党办发〔2022〕34号）</p>
              </div>
              <div className="p-4">
                <div className="bg-white rounded-lg p-3 mb-3">
                  <h4 className="font-semibold text-blue-800 mb-2">架构层级：</h4>
                  <div className="space-y-2 text-sm">
                    <div className="bg-gray-100 p-2 rounded">• 服务入口层：群众办事入口、企业办事入口、公职人员工作统一入口</div>
                    <div className="bg-gray-100 p-2 rounded">• 业务应用体系：数字政府、数字经济、数字社会应用</div>
                    <div className="bg-gray-100 p-2 rounded">• 公共支撑体系：公共业务支撑平台、公共技术支撑平台、安全保障平台</div>
                    <div className="bg-red-100 p-2 rounded border-2 border-red-400">
                      <span className="font-bold text-red-700">• 数据资源体系：一体化数据资源平台（本项目定位）</span>
                    </div>
                    <div className="bg-gray-100 p-2 rounded">• 基础设施体系：云网、基础设施等</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 数字新疆"1652"架构定位 */}
            <div className="border border-green-300 rounded-lg overflow-hidden bg-green-50">
              <div className="bg-green-600 text-white p-4">
                <h3 className="text-xl font-semibold">数字新疆"1652"总体架构</h3>
                <p className="text-sm mt-1">《数字新疆建设总体方案（送审稿）》</p>
              </div>
              <div className="p-4">
                <div className="bg-white rounded-lg p-3 mb-3">
                  <h4 className="font-semibold text-green-800 mb-2">架构组成：</h4>
                  <div className="space-y-2 text-sm">
                    <div className="bg-orange-100 p-2 rounded">• 6大应用领域：数字政府、数字政务、数字经济、数字文化、数字社会、平安新疆</div>
                    <div className="bg-yellow-100 p-2 rounded">• 5级贯通：自治区级、地州市级、县市区级、乡镇（街道）级、村（社区）级</div>
                    <div className="bg-red-100 p-2 rounded border-2 border-red-400">
                      <span className="font-bold text-red-700">• 1套基础支撑体系：一体化数据资源管理（本项目定位）</span>
                    </div>
                    <div className="bg-gray-100 p-2 rounded">• 组织保障体系 + 制度保障体系</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 项目三大定位 */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
            <h4 className="text-lg font-semibold text-gray-800 mb-3 text-center">项目核心定位</h4>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white border border-gray-200 p-4 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-3">
                  <Database className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">数据管理</h3>
                <p className="text-base text-blue-600 font-semibold">总枢纽</p>
                <p className="text-xs text-gray-600 mt-1">统一数据编目、治理、存储</p>
              </div>
              <div className="bg-white border border-gray-200 p-4 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-3">
                  <TrendingUp className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">数据流转</h3>
                <p className="text-base text-green-600 font-semibold">总通道</p>
                <p className="text-xs text-gray-600 mt-1">统一数据共享、交换、流通</p>
              </div>
              <div className="bg-white border border-gray-200 p-4 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-3">
                  <Target className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">数据服务</h3>
                <p className="text-base text-purple-600 font-semibold">总门户</p>
                <p className="text-xs text-gray-600 mt-1">统一数据开放、应用、服务</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // 现状分析
    {
      id: 4,
      content: (
        <div className="h-full p-6 bg-white overflow-y-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">自治区数据资源管理现状分析</h2>
          
          <div className="space-y-4">
            {/* 第一行：应用系统现状和数据资源现状 */}
            <div className="grid grid-cols-2 gap-4">
              {/* 应用系统现状 */}
              <div className="border border-blue-300 rounded-lg bg-blue-50">
                <div className="bg-blue-600 text-white p-3 rounded-t-lg">
                  <h3 className="text-lg font-semibold flex items-center">
                    <Database className="w-5 h-5 mr-2" />
                    一、应用系统现状
                  </h3>
                </div>
                <div className="p-3">
                  <div className="bg-white rounded-lg p-3 mb-3">
                    <h4 className="font-semibold text-blue-800 mb-2">政务数据中台初步建成</h4>
                    <div className="mb-3">
                      <p className="text-sm font-semibold text-gray-700 mb-1">6个核心模块：</p>
                      <div className="grid grid-cols-2 gap-1 text-xs">
                        <div className="bg-blue-100 p-1 rounded text-center">大数据基础平台</div>
                        <div className="bg-blue-100 p-1 rounded text-center">数据治理系统</div>
                        <div className="bg-blue-100 p-1 rounded text-center">统一数仓平台</div>
                        <div className="bg-blue-100 p-1 rounded text-center">共享交换平台</div>
                        <div className="bg-blue-100 p-1 rounded text-center">数据服务平台</div>
                        <div className="bg-blue-100 p-1 rounded text-center">数据采集加工</div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">• 形成"汇聚-治理-融合-服务"数据处理全链路</p>
                    <div className="bg-yellow-50 p-2 rounded border border-yellow-200">
                      <p className="text-sm font-semibold text-red-600">局限性：主要服务政务服务平台内部，服务范围有限</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 数据资源现状 */}
              <div className="border border-green-300 rounded-lg bg-green-50">
                <div className="bg-green-600 text-white p-3 rounded-t-lg">
                  <h3 className="text-lg font-semibold flex items-center">
                    <FileText className="w-5 h-5 mr-2" />
                    二、数据资源现状
                  </h3>
                </div>
                <div className="p-3">
                  <div className="bg-white rounded-lg p-3">
                    <h4 className="font-semibold text-green-800 mb-2">初步形成数据资源体系</h4>
                    <div className="text-center mb-3">
                      <div className="bg-green-100 p-3 rounded-lg">
                        <p className="text-2xl font-bold text-green-600">2404条</p>
                        <p className="text-xs text-gray-600">自治区本级已编制发布数据资源目录</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">• 基本形成全区政务数据"一本账"管理</p>
                    <div className="bg-yellow-50 p-2 rounded border border-yellow-200">
                      <p className="text-sm font-semibold text-red-600">不足：六大基础库建设尚不完善</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 第二行：现有共享交换平台状况 */}
            <div className="border border-purple-300 rounded-lg bg-purple-50">
              <div className="bg-purple-600 text-white p-3 rounded-t-lg">
                <h3 className="text-lg font-semibold flex items-center">
                  <Network className="w-5 h-5 mr-2" />
                  三、现有共享交换平台状况
                </h3>
              </div>
              <div className="p-3">
                <div className="bg-white rounded-lg overflow-hidden">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="p-3 text-left border-r border-gray-200">平台名称</th>
                        <th className="p-3 text-left border-r border-gray-200">主要职能</th>
                        <th className="p-3 text-left">实际情况</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-gray-200">
                        <td className="p-3 border-r border-gray-200 font-semibold">政务信息共享交换平台</td>
                        <td className="p-3 border-r border-gray-200">跨部门、跨地州数据共享服务<br/>（以信用信息数据为主）</td>
                        <td className="p-3"><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">正常运行</span></td>
                      </tr>
                      <tr className="border-t border-gray-200">
                        <td className="p-3 border-r border-gray-200 font-semibold">一体化政务服务平台共享交换系统</td>
                        <td className="p-3 border-r border-gray-200">支撑"一网通办"等政务服务<br/>业务数据共享需求</td>
                        <td className="p-3"><span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs">仅支持自治区本级政务服务数据共享</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* 第三行：核心问题 */}
            <div className="border border-red-400 rounded-lg bg-red-50">
              <div className="bg-red-600 text-white p-3 rounded-t-lg">
                <h3 className="text-lg font-semibold flex items-center">
                  <Target className="w-5 h-5 mr-2" />
                  四、核心问题：多平台并存亟需整合
                </h3>
              </div>
              <div className="p-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-3 border border-gray-200">
                    <h4 className="font-semibold text-red-700 mb-2">三大痛点</h4>
                    <div className="space-y-1 text-sm text-gray-700">
                      <p>• <span className="font-semibold text-red-600">查询困难：</span>各厅局查询目录需登录多个平台</p>
                      <p>• <span className="font-semibold text-red-600">需求无门：</span>数据需求不知向谁提出</p>
                      <p>• <span className="font-semibold text-red-600">故障难定位：</span>出现问题不知找哪个平台解决</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-gray-200">
                    <h4 className="font-semibold text-orange-700 mb-2">多平台并存导致</h4>
                    <div className="space-y-1 text-sm text-gray-700">
                      <p>• 数据目录既有交叉又有差异</p>
                      <p>• 服务对象存在重叠</p>
                      <p>• 管理分散、效率低下</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-100 to-green-100 rounded-lg p-3 border border-gray-200 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-lg font-bold text-blue-700 mb-1">迫切需求</p>
                      <p className="text-sm font-semibold text-green-700">整合形成一体化数据<br/>共享服务能力</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // 存在问题
    {
      id: 5,
      content: (
        <div className="h-full p-6 bg-white overflow-y-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">存在问题</h2>
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              我区一体化数据资源服务能力尚未形成，无法有效支撑数字政府相关应用场景建设，
              特别是利用数据要素构建协同高效的数字化履职能力体系存在短板，具体问题如下：
            </p>
          </div>
          <div className="space-y-4">
            {[
              {
                title: "基础平台支撑不足",
                issues: ["服务范围有限、", "数据处理能力瓶颈", "数据服务功能单一化、"],
                icon: Database,
                color: "red"
              },
              {
                title: "数据资源建设滞后",
                issues: ["基础数据库建设不完整、", "主题化数据服务体系缺失", "数据标准化建设不规范"],
                icon: FileText,
                color: "orange"
              },
              {
                title: "技术架构适应性差",
                issues: ["云原生技术应用滞后", "国产化技术深度适配不足", "安全防护体系整合不完善、"],
                icon: Network,
                color: "yellow"
              },
              {
                title: "业务支撑能力弱",
                issues: ["多层级协同机制滞后", "数据供需对接机制缺失", "公共数据开放服务薄弱、"],
                icon: Building,
                color: "purple"
              },
              {
                title: "运营服务体系缺失",
                issues: ["专业化数据运营能力薄弱、", "场景化数据服务机制缺乏", "运营服务质量管控体系空白"],
                icon: Target,
                color: "pink"
              }
            ].map((problem, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 rounded-full bg-${problem.color}-100 flex items-center justify-center flex-shrink-0`}>
                  <problem.icon className={`w-6 h-6 text-${problem.color}-600`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{problem.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {problem.issues.map((issue, i) => (
                      <span key={i} className="bg-gray-100 px-3 py-1 rounded text-sm text-gray-700">
                        {issue}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    // 建设目标
    {
      id: 6,
      content: (
        <div className="h-full p-6 bg-white overflow-y-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">建设目标</h2>
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              通过自治区一体化数据资源服务平台建设及运营服务项目，实现两大核心目标：
            </p>
                      </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="border border-blue-300 rounded-lg p-4 bg-blue-50">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                  1
                </div>
                <h3 className="text-xl font-semibold text-blue-800">建立完善的数据资源服务体系</h3>
              </div>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <p>建立健全数据资源管理制度和标准规范</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <p>全面建成一体化数据资源服务平台和六大基础库</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <p>政务数据资源全量纳入目录管理</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <p>为多行业跨部门应用场景提供多样化数据服务</p>
                </div>
              </div>
            </div>
            <div className="border border-green-300 rounded-lg p-4 bg-green-50">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                  2
                </div>
                <h3 className="text-xl font-semibold text-green-800">推动数据融合创新发展</h3>
              </div>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <p>政务数据、公共服务数据和社会数据融合发展</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <p>推进公共数据授权运营探索</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <p>促进数据要素市场化流通交易实践</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <p>释放数据要素价值潜能</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-4 gap-3">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <p className="text-3xl font-bold text-blue-600">1个</p>
              <p className="text-sm text-gray-600 mt-1">一体化平台</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <p className="text-3xl font-bold text-green-600">6大</p>
              <p className="text-sm text-gray-600 mt-1">基础信息库</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <p className="text-3xl font-bold text-orange-600">80个</p>
              <p className="text-sm text-gray-600 mt-1">单位数据归集</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <p className="text-3xl font-bold text-purple-600">4700条</p>
              <p className="text-sm text-gray-600 mt-1">数据资源目录</p>
            </div>
          </div>
        </div>
      )
    },
    // 建设方案
    {
      id: 7,
      content: (
        <div className="h-full p-6 bg-white overflow-y-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">建设方案</h2>
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              基于现状问题分析和建设必要性，通过<span className="font-bold text-blue-600">"整合优化现有能力 + 创新扩展新功能"</span>的方式，
              解决<span className="font-bold text-red-600">五大核心问题</span>，构建数据管理总枢纽、数据流转总通道、数据服务总门户。
            </p>
          </div>
          <div className="space-y-4">
            {/* 数据孤岛问题 */}
            <div className="border border-red-300 rounded-lg bg-red-50">
              <div className="bg-red-600 text-white p-4 rounded-t-lg">
                <h3 className="text-lg font-semibold flex items-center">
                  <div className="w-8 h-8 bg-white text-red-600 rounded-full flex items-center justify-center mr-3 text-sm font-bold">1</div>
                  数据孤岛问题 → 数据资源管理功能扩展
                </h3>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-4 gap-4">
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <p className="text-sm font-semibold text-red-700 mb-2">核心问题</p>
                    <p className="text-xs text-gray-600">各部门数据分散存储、标准不一、难以互通，形成"数据烟囱"</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <p className="text-sm font-semibold text-blue-700 mb-2">数据归集系统整合优化</p>
                    <p className="text-xs text-gray-600">实现多源异构数据统一汇聚</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <p className="text-sm font-semibold text-green-700 mb-2">全疆数据流通级联平台</p>
                    <p className="text-xs text-gray-600">打造"数据高速公路"，实现全疆信息资源"一盘棋"</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <p className="text-sm font-semibold text-purple-700 mb-2">平台对接</p>
                    <p className="text-xs text-gray-600">与国家、自治区、地州市各级平台互联互通</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 数据质量不高问题 */}
            <div className="border border-orange-300 rounded-lg bg-orange-50">
              <div className="bg-orange-600 text-white p-4 rounded-t-lg">
                <h3 className="text-lg font-semibold flex items-center">
                  <div className="w-8 h-8 bg-white text-orange-600 rounded-full flex items-center justify-center mr-3 text-sm font-bold">2</div>
                  数据质量不高问题 → 数据治理系统整合优化
                </h3>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <p className="text-sm font-semibold text-orange-700 mb-2">核心问题</p>
                    <p className="text-xs text-gray-600">数据质量参差不齐，存在不准确、不完整、不一致等问题</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <p className="text-sm font-semibold text-blue-700 mb-2">数据治理系统</p>
                    <p className="text-xs text-gray-600">建立数据标准、质量评估、清洗规则管理等全流程治理</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <p className="text-sm font-semibold text-green-700 mb-2">大数据基础平台</p>
                    <p className="text-xs text-gray-600">提供数据湖仓一体化能力，支撑数据治理</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 数据共享困难问题 */}
            <div className="border border-yellow-300 rounded-lg bg-yellow-50">
              <div className="bg-yellow-600 text-white p-4 rounded-t-lg">
                <h3 className="text-lg font-semibold flex items-center">
                  <div className="w-8 h-8 bg-white text-yellow-600 rounded-full flex items-center justify-center mr-3 text-sm font-bold">3</div>
                  数据共享困难问题 → 数据服务能力提升
                </h3>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-4 gap-4">
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <p className="text-sm font-semibold text-yellow-700 mb-2">核心问题</p>
                    <p className="text-xs text-gray-600">跨部门数据共享流程复杂、效率低下，数据供需对接不畅</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <p className="text-sm font-semibold text-blue-700 mb-2">数据服务系统整合优化</p>
                    <p className="text-xs text-gray-600">构建统一数据服务总线，实现"管用分离"</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <p className="text-sm font-semibold text-green-700 mb-2">数据直达系统</p>
                    <p className="text-xs text-gray-600">创新"一级建设、两级部署"模式，实现数据供需精准对接</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <p className="text-sm font-semibold text-purple-700 mb-2">数据共享系统</p>
                    <p className="text-xs text-gray-600">规范化、标准化的共享交换流程</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 数据价值释放不足问题 */}
            <div className="border border-purple-300 rounded-lg bg-purple-50">
              <div className="bg-purple-600 text-white p-4 rounded-t-lg">
                <h3 className="text-lg font-semibold flex items-center">
                  <div className="w-8 h-8 bg-white text-purple-600 rounded-full flex items-center justify-center mr-3 text-sm font-bold">4</div>
                  数据价值释放不足问题 → 数据创新应用
                </h3>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-4 gap-4">
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <p className="text-sm font-semibold text-purple-700 mb-2">核心问题</p>
                    <p className="text-xs text-gray-600">数据智能化应用水平有限，缺乏创新应用场景</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <p className="text-sm font-semibold text-blue-700 mb-2">数据智能系统整合优化</p>
                    <p className="text-xs text-gray-600">提供知识图谱、标签服务、全息档案等AI能力</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <p className="text-sm font-semibold text-green-700 mb-2">时空能力中心建设</p>
                    <p className="text-xs text-gray-600">支撑数字孪生政府、智慧城市等创新应用</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <p className="text-sm font-semibold text-orange-700 mb-2">公共数据授权运营系统</p>
                    <p className="text-xs text-gray-600">探索数据要素市场化，面向社会开放数据</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 数据安全风险问题 */}
            <div className="border border-indigo-300 rounded-lg bg-indigo-50">
              <div className="bg-indigo-600 text-white p-4 rounded-t-lg">
                <h3 className="text-lg font-semibold flex items-center">
                  <div className="w-8 h-8 bg-white text-indigo-600 rounded-full flex items-center justify-center mr-3 text-sm font-bold">5</div>
                  数据安全风险问题 → 数据安全能力提升
                </h3>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-4 gap-4">
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <p className="text-sm font-semibold text-indigo-700 mb-2">核心问题</p>
                    <p className="text-xs text-gray-600">数据安全防护体系不完善，缺乏全生命周期安全管控</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <p className="text-sm font-semibold text-blue-700 mb-2">数据权限管理</p>
                    <p className="text-xs text-gray-600">实现精细化访问控制</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <p className="text-sm font-semibold text-green-700 mb-2">分类分级+脱敏保护</p>
                    <p className="text-xs text-gray-600">差异化安全防护</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <p className="text-sm font-semibold text-purple-700 mb-2">敏感数据识别+安全审计</p>
                    <p className="text-xs text-gray-600">全程可追溯的安全监管</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 核心解决思路 */}
          <div className="mt-6 bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-3 text-center">核心解决思路</h4>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-white p-3 rounded border border-gray-200">
                <p className="text-sm font-semibold text-blue-700 mb-1">数据分散管理</p>
                <p className="text-xs text-gray-500">↓</p>
                <p className="text-sm font-semibold text-green-700">一体化治理</p>
              </div>
              <div className="bg-white p-3 rounded border border-gray-200">
                <p className="text-sm font-semibold text-blue-700 mb-1">被动共享</p>
                <p className="text-xs text-gray-500">↓</p>
                <p className="text-sm font-semibold text-green-700">主动服务</p>
              </div>
              <div className="bg-white p-3 rounded border border-gray-200">
                <p className="text-sm font-semibold text-blue-700 mb-1">单一应用</p>
                <p className="text-xs text-gray-500">↓</p>
                <p className="text-sm font-semibold text-green-700">生态赋能</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // 平台建设内容
    {
      id: 8,
      content: (
        <div className="h-full p-6 bg-white overflow-y-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">平台建设内容</h2>
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              <span className="font-bold text-blue-600">自治区一体化数据资源服务平台建设项目</span>共包含
              <span className="font-bold text-red-600">12项建设内容</span>，按照
              <span className="font-bold text-green-600">四大类别</span>进行组织
            </p>
          </div>

          <div className="space-y-6">
            {/* 数据资源管理功能扩展 */}
            <div className="border border-blue-300 rounded-lg bg-blue-50">
              <div className="bg-blue-600 text-white p-4 rounded-t-lg">
                <h3 className="text-xl font-semibold flex items-center">
                  <div className="w-8 h-8 bg-white text-blue-600 rounded-full flex items-center justify-center mr-3 text-sm font-bold">一</div>
                  数据资源管理功能扩展（6项）
                </h3>
              </div>
              <div className="p-4">
                <div className="bg-white rounded-lg overflow-hidden">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="p-2 text-center border-r border-gray-200">序号</th>
                        <th className="p-2 text-center border-r border-gray-200">建设内容</th>
                        <th className="p-2 text-center border-r border-gray-200">建设性质</th>
                        <th className="p-2 text-center">核心功能</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { id: 1, name: "数据归集系统整合优化", type: "整合优化", function: "多源异构数据统一汇聚、传输、处理" },
                        { id: 2, name: "数据治理系统整合优化", type: "整合优化", function: "数据标准、质量管理、清洗加工、监控展示" },
                        { id: 3, name: "大数据基础平台整合优化", type: "整合优化", function: "湖仓一体化、存算分离、流批协同、弹性伸缩" },
                        { id: 4, name: "数据共享系统整合优化", type: "整合优化", function: "规范化数据交换流程、跨部门数据流转" },
                        { id: 5, name: "全疆数据流通级联", type: "新建", function: "平级级联、上下级级联、数据\"高速公路\"" },
                        { id: 6, name: "平台对接", type: "对接集成", function: "国家数据直达系统对接、自治区级平台整合" }
                      ].map((item, index) => (
                        <tr key={index} className="border-t border-gray-200">
                          <td className="p-2 text-center border-r border-gray-200 font-semibold text-blue-600">{item.id}</td>
                          <td className="p-2 border-r border-gray-200 font-semibold">{item.name}</td>
                          <td className="p-2 text-center border-r border-gray-200">
                            <span className={`px-2 py-1 rounded text-xs ${
                              item.type === '整合优化' ? 'bg-green-100 text-green-700' : 
                              item.type === '新建' ? 'bg-orange-100 text-orange-700' : 
                              'bg-purple-100 text-purple-700'
                            }`}>
                              {item.type}
                            </span>
                          </td>
                          <td className="p-2 text-gray-600">{item.function}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* 数据服务能力提升 */}
            <div className="border border-green-300 rounded-lg bg-green-50">
              <div className="bg-green-600 text-white p-4 rounded-t-lg">
                <h3 className="text-xl font-semibold flex items-center">
                  <div className="w-8 h-8 bg-white text-green-600 rounded-full flex items-center justify-center mr-3 text-sm font-bold">二</div>
                  数据服务能力提升（3项）
                </h3>
              </div>
              <div className="p-4">
                <div className="bg-white rounded-lg overflow-hidden">
                  <table className="w-full text-sm">
                    <tbody>
                      {[
                        { id: 7, name: "数据服务系统整合优化", type: "整合优化", function: "统一数据服务总线、\"管用分离\"、全流程管理" },
                        { id: 8, name: "数据直达系统建设", type: "新建", function: "\"一级建设、两级部署\"、数据供需精准对接" },
                        { id: 9, name: "公共数据授权运营系统建设", type: "新建", function: "面向社会开放、沙箱环境、数据要素市场化" }
                      ].map((item, index) => (
                        <tr key={index} className={index > 0 ? "border-t border-gray-200" : ""}>
                          <td className="p-2 text-center border-r border-gray-200 font-semibold text-green-600">{item.id}</td>
                          <td className="p-2 border-r border-gray-200 font-semibold">{item.name}</td>
                          <td className="p-2 text-center border-r border-gray-200">
                            <span className={`px-2 py-1 rounded text-xs ${
                              item.type === '整合优化' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                            }`}>
                              {item.type}
                            </span>
                          </td>
                          <td className="p-2 text-gray-600">{item.function}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {/* 数据创新应用 */}
              <div className="border border-purple-300 rounded-lg bg-purple-50">
                <div className="bg-purple-600 text-white p-4 rounded-t-lg">
                  <h3 className="text-lg font-semibold flex items-center">
                    <div className="w-8 h-8 bg-white text-purple-600 rounded-full flex items-center justify-center mr-3 text-sm font-bold">三</div>
                    数据创新应用（2项）
                  </h3>
                </div>
                <div className="p-4">
                  <div className="bg-white rounded-lg overflow-hidden">
                    <table className="w-full text-sm">
                      <tbody>
                        {[
                          { id: 10, name: "数据智能系统整合优化", type: "整合优化", function: "知识图谱、标签服务、全息档案、智能搜索、算法实验室" },
                          { id: 11, name: "时空能力中心建设", type: "新建", function: "空间数据治理、地理信息服务、数字孪生支撑" }
                        ].map((item, index) => (
                          <tr key={index} className={index > 0 ? "border-t border-gray-200" : ""}>
                            <td className="p-2 text-center border-r border-gray-200 font-semibold text-purple-600">{item.id}</td>
                            <td className="p-2 border-r border-gray-200 font-semibold text-xs">{item.name}</td>
                            <td className="p-2 text-center border-r border-gray-200">
                              <span className={`px-2 py-1 rounded text-xs ${
                                item.type === '整合优化' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                              }`}>
                                {item.type}
                              </span>
                            </td>
                            <td className="p-2 text-gray-600 text-xs">{item.function}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* 数据安全能力提升 */}
              <div className="border border-red-300 rounded-lg bg-red-50">
                <div className="bg-red-600 text-white p-4 rounded-t-lg">
                  <h3 className="text-lg font-semibold flex items-center">
                    <div className="w-8 h-8 bg-white text-red-600 rounded-full flex items-center justify-center mr-3 text-sm font-bold">四</div>
                    数据安全能力提升（1项）
                  </h3>
                </div>
                <div className="p-4">
                  <div className="bg-white rounded-lg p-3 mb-3">
                    <div className="flex items-center mb-2">
                      <span className="text-sm font-semibold text-red-600 mr-2">12</span>
                      <span className="text-sm font-semibold">数据安全能力提升</span>
                      <span className="ml-2 px-2 py-1 rounded text-xs bg-orange-100 text-orange-700">新建</span>
                    </div>
                    <p className="text-xs text-gray-600 mb-3">六大安全模块全覆盖</p>
                    <div className="space-y-1">
                      {[
                        "数据权限管理设计",
                        "分类分级设计", 
                        "数据脱敏设计",
                        "敏感数据识别设计",
                        "敏感数据安全保护设计",
                        "安全审计设计"
                      ].map((module, index) => (
                        <div key={index} className="bg-red-50 p-2 rounded text-xs">
                          • {module}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 建设特点总结 */}
          <div className="mt-6 bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-3 text-center">建设特点总结</h4>
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-white p-3 rounded border border-gray-200 text-center">
                <p className="text-sm font-semibold text-green-700 mb-1">整合优化类</p>
                <p className="text-2xl font-bold text-green-600">7项</p>
                <p className="text-xs text-gray-600 mt-1">保护已有投资</p>
              </div>
              <div className="bg-white p-3 rounded border border-gray-200 text-center">
                <p className="text-sm font-semibold text-orange-700 mb-1">新建扩展类</p>
                <p className="text-2xl font-bold text-orange-600">4项</p>
                <p className="text-xs text-gray-600 mt-1">填补功能空白</p>
              </div>
              <div className="bg-white p-3 rounded border border-gray-200 text-center">
                <p className="text-sm font-semibold text-purple-700 mb-1">对接集成类</p>
                <p className="text-2xl font-bold text-purple-600">1项</p>
                <p className="text-xs text-gray-600 mt-1">互联互通</p>
              </div>
              <div className="bg-white p-3 rounded border border-gray-200 text-center">
                <p className="text-sm font-semibold text-blue-700 mb-1">建设目标</p>
                <p className="text-xs font-bold text-blue-600 mt-1">总枢纽<br/>总通道<br/>总门户</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // 建设内容
    {
      id: 9,
      content: (
        <div className="h-full p-6 bg-white overflow-y-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">建设内容</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg shadow-sm">
              <div className="bg-blue-600 text-white p-4 rounded-t-lg">
                <h3 className="text-2xl font-semibold flex items-center">
                  <div className="w-10 h-10 bg-white text-blue-600 rounded-full flex items-center justify-center mr-3">1</div>
                  平台建设（10个月）
                </h3>
              </div>
              <div className="p-4 space-y-3">
                <div className="bg-gray-50 p-4 rounded">
                  <p className="font-semibold mb-2">整合优化扩展数据中台</p>
                  <p className="text-sm text-gray-600">基于现有政务数据中台进行功能扩展和优化提升</p>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <p className="font-semibold mb-2">核心功能实现</p>
                  <ul className="text-sm text-gray-600 space-y-1 mt-2">
                    <li>• 数据编目管理</li>
                    <li>• 数据归集汇聚</li>
                    <li>• 数据治理提升</li>
                    <li>• 数据共享交换</li>
                    <li>• 数据开放服务</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg shadow-sm">
              <div className="bg-green-600 text-white p-4 rounded-t-lg">
                <h3 className="text-2xl font-semibold flex items-center">
                  <div className="w-10 h-10 bg-white text-green-600 rounded-full flex items-center justify-center mr-3">2</div>
                  运营服务（18个月）
                </h3>
              </div>
              <div className="p-4 space-y-3">
                <div className="bg-red-50 p-3 rounded">
                  <p className="font-semibold text-red-700">重点任务：完成80个单位数据资源归集</p>
                  <p className="text-sm text-gray-600 mt-1">遵循"应归尽归、急用先行"原则</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    <p className="text-sm"><span className="font-semibold">基础库建设：</span>6大基础信息库</p>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    <p className="text-sm"><span className="font-semibold">主题库建设：</span>6大主题库</p>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    <p className="text-sm"><span className="font-semibold">数据治理：</span>质量管理、标准化处理</p>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    <p className="text-sm"><span className="font-semibold">安全运营：</span>数据安全防护体系</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 bg-gray-50 p-4 rounded-lg">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">重点数据归集单位（TOP10）</h4>
            <div className="grid grid-cols-5 gap-3">
              {[
                { name: "市场监督管理局", count: 510 },
                { name: "水利厅", count: 500 },
                { name: "交通运输厅", count: 450 },
                { name: "农业农村厅", count: 400 },
                { name: "应急管理厅", count: 350 },
                { name: "生态环境厅", count: 300 },
                { name: "人社厅", count: 280 },
                { name: "住建厅", count: 220 },
                { name: "政务服务中心", count: 220 },
                { name: "药监局", count: 150 }
              ].map((dept, index) => (
                <div key={index} className="bg-white p-3 rounded text-center border border-gray-200">
                  <p className="text-2xl font-bold text-blue-600">{dept.count}</p>
                  <p className="text-xs text-gray-600 mt-1">{dept.name}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-4 text-center">
              预计编制<span className="font-bold text-orange-600">4700条</span>数据目录，
              挂载数据资源<span className="font-bold text-green-600">3080条</span>
            </p>
          </div>
        </div>
      )
    },
    // 建设周期
    {
      id: 10,
      content: (
        <div className="h-full p-6 bg-white overflow-y-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">建设周期</h2>
          
          {/* 项目周期概述 */}
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">项目周期</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              本项目总周期为<span className="font-bold text-blue-600">18个月</span>，采用
              <span className="font-bold text-green-600">"建设与运营并行推进"</span>的实施模式。
              系统建设周期为<span className="font-bold text-orange-600">10个月</span>，
              运营服务自项目启动之日起同步开展，贯穿项目全生命周期，共计<span className="font-bold text-red-600">18个月</span>。
            </p>
          </div>

          {/* 实施进度计划 */}
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">实施进度计划</h3>
          
          <div className="space-y-4">
            {/* 系统设计阶段 */}
            <div className="border border-blue-300 rounded-lg bg-blue-50">
              <div className="bg-blue-600 text-white p-4 rounded-t-lg">
                <h4 className="text-lg font-semibold flex items-center">
                  <div className="w-8 h-8 bg-white text-blue-600 rounded-full flex items-center justify-center mr-3 text-sm font-bold">一</div>
                  系统设计阶段
                  <span className="ml-auto bg-blue-500 px-3 py-1 rounded text-sm">1个月</span>
                </h4>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <h5 className="font-semibold text-blue-700 mb-2">设计内容</h5>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p>• 技术架构设计</p>
                      <p>• 业务架构设计</p>
                      <p>• 数据架构设计</p>
                      <p>• 应用架构设计</p>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <h5 className="font-semibold text-blue-700 mb-2">交付成果</h5>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p>• 完整的设计文档体系</p>
                      <p>• 平台整体架构设计</p>
                      <p>• 详细的系统设计方案</p>
                      <p>• 通过专家评审</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 系统开发阶段 */}
            <div className="border border-green-300 rounded-lg bg-green-50">
              <div className="bg-green-600 text-white p-4 rounded-t-lg">
                <h4 className="text-lg font-semibold flex items-center">
                  <div className="w-8 h-8 bg-white text-green-600 rounded-full flex items-center justify-center mr-3 text-sm font-bold">二</div>
                  系统开发、配置与测试数据准备阶段
                  <span className="ml-auto bg-green-500 px-3 py-1 rounded text-sm">5个月</span>
                </h4>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-4 gap-3">
                  <div className="bg-white p-3 rounded border border-gray-200 text-center">
                    <p className="font-semibold text-green-700 text-sm mb-1">系统开发</p>
                    <p className="text-xs text-gray-600">各项功能开发实现</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-gray-200 text-center">
                    <p className="font-semibold text-green-700 text-sm mb-1">环境部署</p>
                    <p className="text-xs text-gray-600">软硬件环境配置</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-gray-200 text-center">
                    <p className="font-semibold text-green-700 text-sm mb-1">系统集成</p>
                    <p className="text-xs text-gray-600">集成联调测试</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-gray-200 text-center">
                    <p className="font-semibold text-green-700 text-sm mb-1">数据准备</p>
                    <p className="text-xs text-gray-600">测试数据准备</p>
                  </div>
                </div>
                <div className="mt-3 bg-white p-3 rounded border border-gray-200">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold text-green-700">目标：</span>
                    确保系统功能完整、性能稳定、运行可靠
                  </p>
                </div>
              </div>
            </div>

            {/* 初步验收及试运行阶段 */}
            <div className="border border-orange-300 rounded-lg bg-orange-50">
              <div className="bg-orange-600 text-white p-4 rounded-t-lg">
                <h4 className="text-lg font-semibold flex items-center">
                  <div className="w-8 h-8 bg-white text-orange-600 rounded-full flex items-center justify-center mr-3 text-sm font-bold">三</div>
                  初步验收及试运行阶段
                  <span className="ml-auto bg-orange-500 px-3 py-1 rounded text-sm">4个月</span>
                </h4>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <h5 className="font-semibold text-orange-700 mb-2">初步验收</h5>
                    <p className="text-sm text-gray-600">组织开展系统初步验收工作</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <h5 className="font-semibold text-orange-700 mb-2">系统试运行</h5>
                    <p className="text-sm text-gray-600">通过实际业务运行检验系统功能的完整性和稳定性</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <h5 className="font-semibold text-orange-700 mb-2">反馈收集</h5>
                    <p className="text-sm text-gray-600">收集用户反馈意见，为正式上线做准备</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 项目终验 */}
            <div className="border border-purple-300 rounded-lg bg-purple-50">
              <div className="bg-purple-600 text-white p-4 rounded-t-lg">
                <h4 className="text-lg font-semibold flex items-center">
                  <div className="w-8 h-8 bg-white text-purple-600 rounded-full flex items-center justify-center mr-3 text-sm font-bold">四</div>
                  项目终验
                  <span className="ml-auto bg-purple-500 px-3 py-1 rounded text-sm">项目末期</span>
                </h4>
              </div>
              <div className="p-4">
                <div className="bg-white p-3 rounded border border-gray-200">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    组织开展项目终验工作，全面评估验证系统建设成果，确保系统
                    <span className="font-semibold text-purple-700">功能、性能、安全</span>等各方面指标达到预期目标并满足建设要求，
                    并完成项目验收和交付工作。
                  </p>
                </div>
              </div>
            </div>

            {/* 系统运营阶段 */}
            <div className="border border-red-300 rounded-lg bg-red-50">
              <div className="bg-red-600 text-white p-4 rounded-t-lg">
                <h4 className="text-lg font-semibold flex items-center">
                  <div className="w-8 h-8 bg-white text-red-600 rounded-full flex items-center justify-center mr-3 text-sm font-bold">五</div>
                  系统运营阶段
                  <span className="ml-auto bg-red-500 px-3 py-1 rounded text-sm">18个月</span>
                </h4>
              </div>
              <div className="p-4">
                <div className="bg-white p-3 rounded border border-gray-200">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    系统运营阶段主要依托<span className="font-semibold text-red-700">自治区一体化数据资源服务平台</span>，开展数据运营工作。
                    运营服务自项目启动之日起同步开展，贯穿项目全生命周期。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 时间轴总览 */}
          <div className="mt-6 bg-gray-50 p-4 rounded-lg">
            <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center">项目时间轴总览</h4>
            <div className="flex items-center justify-center space-x-4">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                <span className="ml-2 text-sm">系统设计 (1月)</span>
              </div>
              <div className="w-8 h-0.5 bg-gray-300"></div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-600 rounded-full"></div>
                <span className="ml-2 text-sm">系统开发 (5月)</span>
              </div>
              <div className="w-8 h-0.5 bg-gray-300"></div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-orange-600 rounded-full"></div>
                <span className="ml-2 text-sm">试运行 (4月)</span>
              </div>
              <div className="w-8 h-0.5 bg-gray-300"></div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
                <span className="ml-2 text-sm">终验</span>
              </div>
            </div>
            <div className="mt-4 text-center">
              <div className="inline-flex items-center bg-red-100 px-4 py-2 rounded">
                <div className="w-4 h-4 bg-red-600 rounded-full mr-2"></div>
                <span className="text-sm font-semibold text-red-700">系统运营阶段贯穿全程 (18个月)</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // 业务系统运营（一）- 整体概览
    {
      id: 11,
      content: (
        <div className="h-full p-6 bg-white overflow-y-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">业务系统运营</h2>
          
          {/* 整体架构图 */}
          <div className="mb-6">
            <div className="bg-blue-600 text-white p-4 rounded-lg text-center mb-4">
              <h3 className="text-2xl font-semibold">业务系统运营</h3>
            </div>
            
            <div className="grid grid-cols-7 gap-3">
              {[
                { name: "数据目录标准化", color: "blue" },
                { name: "数据治理和质量管理", color: "green" },
                { name: "基础库建设", color: "orange" },
                { name: "主题库建设", color: "purple" },
                { name: "专题库建设", color: "red" },
                { name: "公共数据开放运营", color: "indigo" },
                { name: "数据安全运营", color: "pink" }
              ].map((item, index) => (
                <div key={index} className={`bg-${item.color}-600 text-white p-4 rounded-lg text-center`}>
                  <div className="text-sm font-semibold leading-tight">
                    {item.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 七大核心内容卡片展示 */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            {/* 左侧四项 */}
            <div className="space-y-4">
              <div className="border border-blue-300 rounded-lg bg-blue-50">
                <div className="bg-blue-600 text-white p-3 rounded-t-lg">
                  <h4 className="font-semibold flex items-center">
                    <span className="bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2">01</span>
                    数据目录标准化
                  </h4>
                </div>
                <div className="p-3">
                  <p className="text-sm text-gray-700 mb-2">• 统一三级数据目录体系</p>
                  <p className="text-sm text-gray-700 mb-2">• 分类分级管理和资源服务并接</p>
                  <p className="text-sm font-semibold text-blue-600">规模：80个单位</p>
                </div>
              </div>

              <div className="border border-green-300 rounded-lg bg-green-50">
                <div className="bg-green-600 text-white p-3 rounded-t-lg">
                  <h4 className="font-semibold flex items-center">
                    <span className="bg-white text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2">02</span>
                    数据治理和质量管理
                  </h4>
                </div>
                <div className="p-3">
                  <p className="text-sm text-gray-700 mb-2">• 数据清洗、补全、格式转换</p>
                  <p className="text-sm text-gray-700 mb-2">• 全生命周期质量管理</p>
                  <p className="text-sm font-semibold text-green-600">规模：80个单位</p>
                </div>
              </div>

              <div className="border border-orange-300 rounded-lg bg-orange-50">
                <div className="bg-orange-600 text-white p-3 rounded-t-lg">
                  <h4 className="font-semibold flex items-center">
                    <span className="bg-white text-orange-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2">03</span>
                    基础库建设
                  </h4>
                </div>
                <div className="p-3">
                  <p className="text-sm text-gray-700 mb-2">• 6大基础数据库建设</p>
                  <p className="text-sm text-gray-700 mb-2">• 17个厅局（人口）+ 22个厅局（法人）</p>
                  <p className="text-sm font-semibold text-orange-600">核心基础设施</p>
                </div>
              </div>

              <div className="border border-purple-300 rounded-lg bg-purple-50">
                <div className="bg-purple-600 text-white p-3 rounded-t-lg">
                  <h4 className="font-semibold flex items-center">
                    <span className="bg-white text-purple-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2">04</span>
                    主题库建设
                  </h4>
                </div>
                <div className="p-3">
                  <p className="text-sm text-gray-700 mb-2">• 5大主题库：经济调节、产业发展、营商环境、公共服务、社会管理</p>
                  <p className="text-sm text-gray-700 mb-2">• 主题化整合、标准化梳理、深度优化</p>
                </div>
              </div>
            </div>

            {/* 右侧三项 */}
            <div className="space-y-4">
              <div className="border border-red-300 rounded-lg bg-red-50">
                <div className="bg-red-600 text-white p-3 rounded-t-lg">
                  <h4 className="font-semibold flex items-center">
                    <span className="bg-white text-red-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2">05</span>
                    专题库建设
                  </h4>
                </div>
                <div className="p-3">
                  <p className="text-sm text-gray-700 mb-2">• 5大专题库：政务服务、重点行业、地州数据回流、数据共享交换、"只报一次"基层报表</p>
                  <p className="text-sm text-gray-700 mb-2">• 专题化整合、深度加工、针对性优化</p>
                </div>
              </div>

              <div className="border border-indigo-300 rounded-lg bg-indigo-50">
                <div className="bg-indigo-600 text-white p-3 rounded-t-lg">
                  <h4 className="font-semibold flex items-center">
                    <span className="bg-white text-indigo-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2">06</span>
                    公共数据开放运营
                  </h4>
                </div>
                <div className="p-3">
                  <p className="text-sm text-gray-700 mb-2">• 符合开放要求的数据资源</p>
                  <p className="text-sm text-gray-700 mb-2">• 标准化API接口服务</p>
                  <p className="text-sm font-semibold text-indigo-600">面向社会开放</p>
                </div>
              </div>

              <div className="border border-pink-300 rounded-lg bg-pink-50">
                <div className="bg-pink-600 text-white p-3 rounded-t-lg">
                  <h4 className="font-semibold flex items-center">
                    <span className="bg-white text-pink-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2">07</span>
                    数据安全运营
                  </h4>
                </div>
                <div className="p-3">
                  <p className="text-sm text-gray-700 mb-2">• 覆盖全流程安全体系</p>
                  <p className="text-sm text-gray-700 mb-2">• 分类分级、脱敏加密、访问控制</p>
                  <p className="text-sm font-semibold text-pink-600">全方位安全保障</p>
                </div>
              </div>

              {/* 运营服务特点 */}
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-3">运营服务特点</h4>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white p-2 rounded text-center">
                    <p className="text-sm font-semibold text-blue-600">全覆盖</p>
                    <p className="text-xs text-gray-600">数据全生命周期</p>
                  </div>
                  <div className="bg-white p-2 rounded text-center">
                    <p className="text-sm font-semibold text-green-600">分层级</p>
                    <p className="text-xs text-gray-600">三级差异化服务</p>
                  </div>
                  <div className="bg-white p-2 rounded text-center">
                    <p className="text-sm font-semibold text-orange-600">标准化</p>
                    <p className="text-xs text-gray-600">统一管理体系</p>
                  </div>
                  <div className="bg-white p-2 rounded text-center">
                    <p className="text-sm font-semibold text-purple-600">专业化</p>
                    <p className="text-xs text-gray-600">场景化运营服务</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // 业务系统运营（二）- 前四项详细内容
    {
      id: 12,
      content: (
        <div className="h-full p-6 bg-white overflow-y-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">业务系统运营 - 基础建设（01-04）</h2>
          
                     <div className="space-y-6">
             {/* 第一行：01,02 左右并排 */}
             <div className="grid grid-cols-2 gap-6">
               {/* 01 数据目录标准化 */}
               <div className="border border-blue-300 rounded-lg bg-blue-50">
                 <div className="bg-blue-600 text-white p-4 rounded-t-lg">
                   <h3 className="text-xl font-semibold flex items-center">
                     <div className="w-8 h-8 bg-white text-blue-600 rounded-full flex items-center justify-center mr-3 text-sm font-bold">01</div>
                     数据目录标准化
                   </h3>
                 </div>
                 <div className="p-4">
                   <div className="space-y-3">
                     <div className="bg-white p-3 rounded border border-gray-200">
                       <h4 className="font-semibold text-blue-700 mb-2">三级目录体系</h4>
                       <p className="text-sm text-gray-600">根据国办政务数据目录治理要求，统一自治区、地（州、市）、县三级数据目录体系</p>
                     </div>
                     <div className="bg-white p-3 rounded border border-gray-200">
                       <h4 className="font-semibold text-blue-700 mb-2">分类分级管理</h4>
                       <p className="text-sm text-gray-600">对数据目录的分类分级管理和资源服务并接</p>
                     </div>
                     <div className="bg-white p-3 rounded border border-gray-200">
                       <h4 className="font-semibold text-blue-700 mb-2">服务规模</h4>
                       <p className="text-sm text-gray-600">计划完成<span className="font-bold text-blue-600">80个单位</span>的服务</p>
                     </div>
                   </div>
                 </div>
               </div>

               {/* 02 数据治理和质量管理 */}
               <div className="border border-green-300 rounded-lg bg-green-50">
                 <div className="bg-green-600 text-white p-4 rounded-t-lg">
                   <h3 className="text-xl font-semibold flex items-center">
                     <div className="w-8 h-8 bg-white text-green-600 rounded-full flex items-center justify-center mr-3 text-sm font-bold">02</div>
                     数据治理和质量管理
                   </h3>
                 </div>
                 <div className="p-4">
                   <div className="space-y-3">
                     <div className="bg-white p-3 rounded border border-gray-200">
                       <h4 className="font-semibold text-green-700 mb-2">数据预处理</h4>
                       <div className="space-y-1 text-sm text-gray-600">
                         <p>• 数据入库前进行清洗</p>
                         <p>• 补全、格式转换等处理</p>
                         <p>• 规范化的结构设计和关系建立</p>
                       </div>
                     </div>
                     <div className="bg-white p-3 rounded border border-gray-200">
                       <h4 className="font-semibold text-green-700 mb-2">全生命周期管理</h4>
                       <div className="space-y-1 text-sm text-gray-600">
                         <p>• 明确数据全生命周期进行质量评估</p>
                         <p>• 监控、问题处理和绩效建设</p>
                         <p>• 计划完成<span className="font-bold text-green-600">80个单位</span>标准化建设</p>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>

             {/* 第二行：03,04 左右并排 */}
             <div className="grid grid-cols-2 gap-6">
               {/* 03 基础库建设 */}
               <div className="border border-orange-300 rounded-lg bg-orange-50">
                 <div className="bg-orange-600 text-white p-4 rounded-t-lg">
                   <h3 className="text-xl font-semibold flex items-center">
                     <div className="w-8 h-8 bg-white text-orange-600 rounded-full flex items-center justify-center mr-3 text-sm font-bold">03</div>
                     基础库建设
                   </h3>
                 </div>
                 <div className="p-4">
                   <div className="bg-white p-3 rounded border border-gray-200 mb-3">
                     <h4 className="font-semibold text-orange-700 mb-2">6大基础数据库</h4>
                     <div className="grid grid-cols-2 gap-2">
                       {[
                         "人口库", "法人库", "信用信息库",
                         "宏观经济库", "电子证照库", "自然资源库"
                       ].map((db, index) => (
                         <div key={index} className="bg-orange-100 p-2 rounded text-xs text-center">
                           {db}
                         </div>
                       ))}
                     </div>
                   </div>
                   <div className="bg-white p-3 rounded border border-gray-200">
                     <h4 className="font-semibold text-orange-700 mb-2">数据归集范围</h4>
                     <p className="text-sm text-gray-600">
                       • 调研、归集整理<span className="font-bold text-red-600">17个厅局</span>（人口类）<br/>
                       • <span className="font-bold text-red-600">22个厅局</span>（法人库）数据
                     </p>
                   </div>
                 </div>
               </div>

               {/* 04 主题库建设 */}
               <div className="border border-purple-300 rounded-lg bg-purple-50">
                 <div className="bg-purple-600 text-white p-4 rounded-t-lg">
                   <h3 className="text-xl font-semibold flex items-center">
                     <div className="w-8 h-8 bg-white text-purple-600 rounded-full flex items-center justify-center mr-3 text-sm font-bold">04</div>
                     主题库建设
                   </h3>
                 </div>
                 <div className="p-4">
                   <div className="bg-white p-3 rounded border border-gray-200 mb-3">
                     <h4 className="font-semibold text-purple-700 mb-2">7大主题建设</h4>
                     <div className="space-y-1 text-sm text-gray-600">
                       <p>• 围绕政务服务、产业发展</p>
                       <p>• 公共服务、社会管理</p>
                       <p>• 基层报表数据"只报一次"</p>
                     </div>
                   </div>
                   <div className="bg-white p-3 rounded border border-gray-200">
                     <h4 className="font-semibold text-purple-700 mb-2">建设规模</h4>
                     <p className="text-sm text-gray-600">
                       计划建设约<span className="font-bold text-purple-600">20个主题库</span>
                     </p>
                   </div>
                 </div>
               </div>
             </div>
           </div>
        </div>
      )
    },
    // 业务系统运营（三）- 后三项及特点
    {
      id: 13,
      content: (
        <div className="h-full p-6 bg-white overflow-y-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">业务系统运营 - 应用服务（05-07）</h2>
          
          <div className="space-y-6">
            {/* 05 专题库建设 */}
            <div className="border border-red-300 rounded-lg bg-red-50">
              <div className="bg-red-600 text-white p-4 rounded-t-lg">
                <h3 className="text-xl font-semibold flex items-center">
                  <div className="w-8 h-8 bg-white text-red-600 rounded-full flex items-center justify-center mr-3 text-sm font-bold">05</div>
                  专题库建设
                </h3>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <h4 className="font-semibold text-red-700 mb-2">建设导向</h4>
                    <p className="text-sm text-gray-600">以专项业务为目标，如重点行业、经济调节、营商环境等专项建设</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <h4 className="font-semibold text-red-700 mb-2">应用领域</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p>• 重点行业监管</p>
                      <p>• 经济运行调节</p>
                      <p>• 营商环境优化</p>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <h4 className="font-semibold text-red-700 mb-2">建设规模</h4>
                    <p className="text-sm text-gray-600">计划建设约<span className="font-bold text-red-600">20个专题库</span></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {/* 06 公共数据开放运营 */}
              <div className="border border-indigo-300 rounded-lg bg-indigo-50">
                <div className="bg-indigo-600 text-white p-4 rounded-t-lg">
                  <h3 className="text-lg font-semibold flex items-center">
                    <div className="w-8 h-8 bg-white text-indigo-600 rounded-full flex items-center justify-center mr-3 text-sm font-bold">06</div>
                    公共数据开放运营
                  </h3>
                </div>
                <div className="p-4">
                  <div className="bg-white p-3 rounded border border-gray-200 mb-3">
                    <h4 className="font-semibold text-indigo-700 mb-2">开放策略</h4>
                    <p className="text-sm text-gray-600">筛选符合开放要求的数据资源，进行依法开放</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <h4 className="font-semibold text-indigo-700 mb-2">服务方式</h4>
                    <p className="text-sm text-gray-600">提供标准化API接口，便于社会各界使用</p>
                  </div>
                </div>
              </div>

              {/* 07 数据安全运营 */}
              <div className="border border-pink-300 rounded-lg bg-pink-50">
                <div className="bg-pink-600 text-white p-4 rounded-t-lg">
                  <h3 className="text-lg font-semibold flex items-center">
                    <div className="w-8 h-8 bg-white text-pink-600 rounded-full flex items-center justify-center mr-3 text-sm font-bold">07</div>
                    数据安全运营
                  </h3>
                </div>
                <div className="p-4">
                  <div className="bg-white p-3 rounded border border-gray-200 mb-3">
                    <h4 className="font-semibold text-pink-700 mb-2">安全体系</h4>
                    <p className="text-sm text-gray-600">建立覆盖目录、治理、建库、共享、开放全流程的数据安全体系</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <h4 className="font-semibold text-pink-700 mb-2">安全措施</h4>
                    <p className="text-sm text-gray-600">采用数据分类分级、脱敏加密、访问控制、风险预警等安全措施</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 运营服务特点详细说明 */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">运营服务特点</h3>
              <div className="grid grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                  <div className="w-12 h-12 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-3">
                    <Database className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-blue-700 mb-2">全覆盖</h4>
                  <p className="text-sm text-gray-600">涵盖数据全生命周期的标准化、治理、建设、共享、开放、安全等各环节</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                  <div className="w-12 h-12 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-3">
                    <Building className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-green-700 mb-2">分层级</h4>
                  <p className="text-sm text-gray-600">面向自治区、地州市、县区三级提供差异化运营服务</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                  <div className="w-12 h-12 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-3">
                    <CheckCircle className="w-8 h-8 text-orange-600" />
                  </div>
                  <h4 className="font-semibold text-orange-700 mb-2">标准化</h4>
                  <p className="text-sm text-gray-600">建立统一的数据标准、质量规范、安全标准等管理体系</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                  <div className="w-12 h-12 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-3">
                    <Target className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-purple-700 mb-2">专业化</h4>
                  <p className="text-sm text-gray-600">针对不同领域、不同层级、不同场景提供专业化运营服务</p>
                </div>
              </div>
            </div>

            {/* 运营服务成果预期 */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-800 mb-3 text-center">运营服务成果预期</h4>
              <div className="grid grid-cols-6 gap-3">
                <div className="text-center p-3 bg-white rounded border border-gray-200">
                  <p className="text-2xl font-bold text-blue-600">80个</p>
                  <p className="text-xs text-gray-600 mt-1">目录标准化单位</p>
                </div>
                <div className="text-center p-3 bg-white rounded border border-gray-200">
                  <p className="text-2xl font-bold text-green-600">6大</p>
                  <p className="text-xs text-gray-600 mt-1">基础数据库</p>
                </div>
                <div className="text-center p-3 bg-white rounded border border-gray-200">
                  <p className="text-2xl font-bold text-orange-600">20个</p>
                  <p className="text-xs text-gray-600 mt-1">主题库</p>
                </div>
                <div className="text-center p-3 bg-white rounded border border-gray-200">
                  <p className="text-2xl font-bold text-purple-600">20个</p>
                  <p className="text-xs text-gray-600 mt-1">专题库</p>
                </div>
                <div className="text-center p-3 bg-white rounded border border-gray-200">
                  <p className="text-2xl font-bold text-indigo-600">开放</p>
                  <p className="text-xs text-gray-600 mt-1">公共数据服务</p>
                </div>
                <div className="text-center p-3 bg-white rounded border border-gray-200">
                  <p className="text-2xl font-bold text-pink-600">全程</p>
                  <p className="text-xs text-gray-600 mt-1">安全防护</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
        }
  ];

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'ArrowLeft') {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      } else if (event.key === 'ArrowRight') {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [slides.length]);

  return (
    <div className="h-screen bg-white">
      {/* PPT内容区域 */}
      <div className="h-full relative overflow-hidden">
        <div className="h-full">
          {slides[currentSlide].content}
        </div>

      </div>
    </div>
  );
};

export default DataPlatformPPT;