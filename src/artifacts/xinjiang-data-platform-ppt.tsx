import React from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Database, 
  GitBranch, 
  Globe, 
  Shield,
  Building2,
  Calendar,
  Users,
  DollarSign,
  FileText,
  Network
} from 'lucide-react';

export const meta = {
  title: "新疆数据平台PPT演示",
  description: "自治区一体化数据资源服务平台建设项目汇报PPT",
  category: "政府项目",
  order: 100
};

const XinjiangDataPlatformPPT = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const slides = [
    // 封面页
    <div key="cover" className="h-full flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-white p-16">
      <div className="text-center space-y-8">
        <div className="w-32 h-32 mx-auto bg-blue-600 rounded-full flex items-center justify-center mb-8">
          <Database className="w-20 h-20 text-white" />
        </div>
        <h1 className="text-5xl font-bold text-gray-900">
          自治区一体化数据资源服务平台
        </h1>
        <p className="text-3xl text-gray-600">建设项目汇报</p>
        <div className="w-32 h-1 bg-blue-600 mx-auto my-8"></div>
        <div className="space-y-2 text-xl text-gray-600">
          <p>新疆维吾尔自治区数据资源和政务服务中心</p>
          <p>2025年1月</p>
        </div>
      </div>
    </div>,

    // 项目概况页
    <div key="overview" className="h-full p-12 bg-gray-50">
      <h2 className="text-4xl font-bold mb-8 text-gray-900">项目概况</h2>
      
      <div className="grid grid-cols-3 gap-6 h-5/6">
        {/* 基本信息卡片 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-blue-600 text-white p-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <FileText className="w-6 h-6" />
              基本信息
            </h3>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <p className="text-sm text-gray-600">项目名称</p>
              <p className="font-semibold">自治区一体化数据资源服务平台建设项目</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">建设单位</p>
              <p className="font-semibold">新疆维吾尔自治区数据资源和政务服务中心</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">建设模式</p>
              <p className="font-semibold">"统筹建设、分级应用"</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">覆盖范围</p>
              <p className="font-semibold">自治区、14个地州市、108个县市区、1128个乡镇</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">建设周期</p>
              <p className="font-semibold">18个月（系统10个月+运营18个月）</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">总投资</p>
              <p className="font-semibold">2亿元（自治区财政资金）</p>
            </div>
          </div>
        </div>

        {/* 政策依据卡片组 */}
        <div className="col-span-2 grid grid-cols-2 gap-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-blue-600 text-white p-3">
              <h4 className="font-bold">《自治区数字政府改革建设方案》</h4>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-600 mb-2">（新党办发〔2022〕34号）</p>
              <p className="text-sm">建设标准统一、布局合理、管理协同、安全可靠的区地一体化数据资源服务平台体系，充分释放数据要素价值。</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-green-600 text-white p-3">
              <h4 className="font-bold">《关于加快公共数据资源开发利用的意见》</h4>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-600 mb-2">（中共中央办公厅 国务院办公厅 2024年9月21日）</p>
              <p className="text-sm">加强数据服务能力建设，推动数据利用方式向共享汇聚和应用服务能力并重的方向转变。</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-purple-600 text-white p-3">
              <h4 className="font-bold">《自治区一体化数据资源体系建设实施方案》</h4>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-600 mb-2">（新政办函〔2024〕91号）</p>
              <p className="text-sm">以推动数字政府转型为主线，整合构建自治区一体化数据资源体系，全面提升政府治理现代化水平。</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-orange-600 text-white p-3">
              <h4 className="font-bold">《国家数据基础设施建设指引》</h4>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-600 mb-2">（发改数据〔2024〕1853号）</p>
              <p className="text-sm">围绕打造可信流通、高效调度、高速互联、安全可靠的体系化能力，持续赋能各行业数据融合发展。</p>
            </div>
          </div>
        </div>
      </div>

      {/* 底部总结 */}
      <div className="mt-6 bg-blue-100 border-2 border-blue-600 rounded-lg p-4">
        <p className="text-xl font-bold text-blue-900 text-center">
          实现全区数据管理的总枢纽、数据流转的总通道、数据门户的总门户
        </p>
      </div>
    </div>,

    // 项目定位页
    <div key="positioning" className="h-full p-12 bg-white">
      <h2 className="text-4xl font-bold mb-8 text-gray-900">总体设计方案 - 项目定位</h2>
      
      <div className="space-y-6">
        {/* 框架层次 */}
        <div>
          <h3 className="text-2xl font-bold mb-2">数字政府"54433"改革总体框架</h3>
          <p className="text-sm text-gray-600 mb-4">《自治区数字政府改革建设方案》（新党办发〔2022〕34号）</p>
          
          <div className="space-y-2">
            <div className="bg-blue-100 border border-gray-300 p-3 rounded">
              <p className="font-semibold">服务入口层：群众办事入口、企业办事入口、公职人员工作统一入口</p>
            </div>
            <div className="bg-green-100 border border-gray-300 p-3 rounded">
              <p className="font-semibold">业务应用体系：数字政府、数字经济、数字社会应用</p>
            </div>
            <div className="bg-red-100 border border-gray-300 p-3 rounded">
              <p className="font-semibold">公共支撑体系：公共业务支撑平台、公共技术支撑平台、安全保障平台</p>
            </div>
            <div className="bg-blue-600 text-white border-2 border-blue-800 p-3 rounded">
              <p className="font-bold">数据资源体系：一体化数据资源平台（本项目定位）</p>
            </div>
            <div className="bg-purple-100 border border-gray-300 p-3 rounded">
              <p className="font-semibold">基础设施体系：云网、基础设施等</p>
            </div>
          </div>
        </div>

        {/* 核心定位 */}
        <div className="flex justify-around items-center mt-8">
          <div className="text-center">
            <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center mb-4">
              <p className="text-white font-bold text-xl">总枢纽</p>
            </div>
            <h4 className="text-xl font-bold mb-2">数据管理</h4>
            <p className="text-gray-600">统一数据编目、治理、存储</p>
          </div>
          
          <div className="text-center">
            <div className="w-32 h-32 bg-green-600 rounded-full flex items-center justify-center mb-4">
              <p className="text-white font-bold text-xl">总通道</p>
            </div>
            <h4 className="text-xl font-bold mb-2">数据流转</h4>
            <p className="text-gray-600">统一数据共享、交换、流通</p>
          </div>
          
          <div className="text-center">
            <div className="w-32 h-32 bg-purple-600 rounded-full flex items-center justify-center mb-4">
              <p className="text-white font-bold text-xl">总门户</p>
            </div>
            <h4 className="text-xl font-bold mb-2">数据服务</h4>
            <p className="text-gray-600">统一数据开放、应用、服务</p>
          </div>
        </div>
      </div>
    </div>,

    // 建设内容页
    <div key="content" className="h-full p-12 bg-gray-50">
      <h2 className="text-4xl font-bold mb-6 text-gray-900">平台建设内容</h2>
      
      <div className="space-y-4 overflow-y-auto h-5/6">
        {/* 数据资源管理功能扩展 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-blue-600 text-white p-3">
            <h3 className="text-lg font-bold">1. 数据资源管理功能扩展（6项）</h3>
          </div>
          <div className="p-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 border">序号</th>
                  <th className="p-2 border">建设内容</th>
                  <th className="p-2 border">建设性质</th>
                  <th className="p-2 border">核心功能</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border text-center">1</td>
                  <td className="p-2 border">数据归集系统整合优化</td>
                  <td className="p-2 border">整合优化</td>
                  <td className="p-2 border">多源异构数据统一汇聚、传输、处理</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border text-center">2</td>
                  <td className="p-2 border">数据治理系统整合优化</td>
                  <td className="p-2 border">整合优化</td>
                  <td className="p-2 border">数据标准、质量管理、清洗加工、监控展示</td>
                </tr>
                <tr>
                  <td className="p-2 border text-center">3</td>
                  <td className="p-2 border">大数据基础平台整合优化</td>
                  <td className="p-2 border">整合优化</td>
                  <td className="p-2 border">湖仓一体化、存算分离、流批协同、弹性伸缩</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border text-center">4</td>
                  <td className="p-2 border">数据共享系统整合优化</td>
                  <td className="p-2 border">整合优化</td>
                  <td className="p-2 border">规范化数据交换流程、跨部门数据流转</td>
                </tr>
                <tr>
                  <td className="p-2 border text-center">5</td>
                  <td className="p-2 border">全疆数据流通级联</td>
                  <td className="p-2 border">新建</td>
                  <td className="p-2 border">平级级联、上下级级联、数据"高速公路"</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border text-center">6</td>
                  <td className="p-2 border">平台对接</td>
                  <td className="p-2 border">对接集成</td>
                  <td className="p-2 border">国家数据直达系统对接、自治区级平台整合</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 数据服务能力提升 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-green-600 text-white p-3">
            <h3 className="text-lg font-bold">2. 数据服务能力提升（3项）</h3>
          </div>
          <div className="p-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 border">序号</th>
                  <th className="p-2 border">建设内容</th>
                  <th className="p-2 border">建设性质</th>
                  <th className="p-2 border">核心功能</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border text-center">7</td>
                  <td className="p-2 border">数据服务系统整合优化</td>
                  <td className="p-2 border">整合优化</td>
                  <td className="p-2 border">统一数据服务总线、"管用分离"、全流程管理</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border text-center">8</td>
                  <td className="p-2 border">数据直达系统建设</td>
                  <td className="p-2 border">新建</td>
                  <td className="p-2 border">"一级建设、两级部署"、数据供需精准对接</td>
                </tr>
                <tr>
                  <td className="p-2 border text-center">9</td>
                  <td className="p-2 border">公共数据授权运营系统建设</td>
                  <td className="p-2 border">新建</td>
                  <td className="p-2 border">面向社会开放、沙箱环境、数据要素市场化</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 数据创新应用 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-purple-600 text-white p-3">
            <h3 className="text-lg font-bold">3. 数据创新应用（2项）</h3>
          </div>
          <div className="p-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 border">序号</th>
                  <th className="p-2 border">建设内容</th>
                  <th className="p-2 border">建设性质</th>
                  <th className="p-2 border">核心功能</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border text-center">10</td>
                  <td className="p-2 border">数据智能系统整合优化</td>
                  <td className="p-2 border">整合优化</td>
                  <td className="p-2 border">知识图谱、标签服务、全息档案、智能搜索、算法实验室</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border text-center">11</td>
                  <td className="p-2 border">时空能力中心建设</td>
                  <td className="p-2 border">新建</td>
                  <td className="p-2 border">空间数据治理、地理信息服务、数字孪生支撑</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 数据安全能力提升 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-red-600 text-white p-3">
            <h3 className="text-lg font-bold">4. 数据安全能力提升（1项）</h3>
          </div>
          <div className="p-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 border">序号</th>
                  <th className="p-2 border">建设内容</th>
                  <th className="p-2 border">建设性质</th>
                  <th className="p-2 border">核心功能</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border text-center">12</td>
                  <td className="p-2 border">数据安全能力提升</td>
                  <td className="p-2 border">新建</td>
                  <td className="p-2 border">六大安全模块全覆盖</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="h-screen bg-white flex flex-col">
      {/* 顶部工具栏 */}
      <div className="h-16 bg-gray-900 text-white flex items-center justify-between px-8">
        <h1 className="text-xl font-bold">新疆数据平台PPT演示</h1>
        
        <div className="flex items-center gap-4">
          <span className="text-sm">
            幻灯片 {currentSlide + 1} / {slides.length}
          </span>
          
        </div>
      </div>

      {/* PPT内容区 */}
      <div className="flex-1 relative overflow-hidden">
        <div className="h-full">
          {slides[currentSlide]}
        </div>

        {/* 导航按钮 */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
          disabled={currentSlide === 0}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
          disabled={currentSlide === slides.length - 1}
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* 页码指示器 */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-blue-600 w-8'
                  : 'bg-gray-400 hover:bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default XinjiangDataPlatformPPT;