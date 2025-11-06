import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  User, 
  Calendar, 
  Target,
  Trophy,
  BarChart3,
  Zap,
  Building2,
  Users,
  Lightbulb,
  Rocket,
  Star,
  Award,
  Brain,
  Search,
  FileText,
  Bot,
  Scale,
  Database,
  Factory,
  Settings,
  TrendingUp,
  Briefcase,
  Clock,
  CheckCircle,
  AlertTriangle,
  MapPin,
  Phone,
  Mail,
  Globe,
  Monitor,
  Smartphone,
  Cpu,
  Workflow,
  PieChart,
  LineChart
} from 'lucide-react';

const PPTPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // 第1页：封面页
    {
      title: "中通信息/南方设计2025年上半年AI工作情况汇报",
      content: (
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <h1 className="text-4xl font-bold text-blue-800 text-center leading-tight">
            中通信息/南方设计<br />2025年上半年AI工作情况汇报
          </h1>
          <div className="text-center space-y-3">
            <div className="text-xl text-gray-600">深化AI赋能 引领数字化转型</div>
            <div className="text-lg text-gray-500">全面推进人工智能技术应用与业务创新</div>
          </div>
          <div className="space-y-4 text-lg text-gray-600">
            <div className="flex items-center justify-center space-x-2">
              <User size={20} />
              <span>汇报单位：中通信息/南方设计</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Calendar size={20} />
              <span>2025年7月</span>
            </div>
          </div>
        </div>
      )
    },
    
    // 第2页：汇报大纲
    {
      title: "汇报大纲",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
              <span className="text-lg font-medium">重点AI事项与成果</span>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-lg">
              <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
              <span className="text-lg font-medium">标杆案例展示</span>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
              <span className="text-lg font-medium">团队建设与人才培养</span>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-indigo-50 rounded-lg">
              <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
              <span className="text-lg font-medium">AI+科创/工作创新实践</span>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-orange-50 rounded-lg">
              <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">5</div>
              <span className="text-lg font-medium">下半年工作计划</span>
            </div>
          </div>
        </div>
      )
    },


    // 第4页：重点AI事项与成果
    {
      title: "重点AI事项与成果",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-100 to-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center"><Rocket className="mr-2" size={24} /> 重点事项推进情况</h3>
            <p className="text-lg text-gray-700">各分公司协同发力，多维度推进AI技术应用</p>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="text-lg font-semibold text-blue-800 mb-4 flex items-center"><Award className="mr-2" size={20} /> 集团级荣誉与认可</h4>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="text-lg font-bold text-yellow-600 mb-2">优秀汇报奖</div>
                  <p className="text-sm text-gray-600">七分公司AI智能体实训营获奖</p>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-lg border border-red-200">
                  <div className="text-lg font-bold text-red-600 mb-2">科技新星</div>
                  <p className="text-sm text-gray-600">洪浩东、施唯获广东通服新星称号</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="text-lg font-bold text-blue-600 mb-2">万众学用奖</div>
                  <p className="text-sm text-gray-600">多名员工获集团AI应用活动奖</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="text-lg font-semibold text-purple-800 mb-4 flex items-center"><Briefcase className="mr-2" size={20} /> 各分公司重点进展</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">七</div>
                  <div>
                    <h5 className="font-semibold text-gray-800">七分公司：AI平台建设与业务拓展</h5>
                    <p className="text-gray-600 text-sm">揭榜挂帅项目验收，多模型AI平台日均使用1500+次，承接多个AI项目</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">五</div>
                  <div>
                    <h5 className="font-semibold text-gray-800">五分公司：专业工具智能化升级</h5>
                    <p className="text-gray-600 text-sm">过期标准规范自动检查、专项债智能释疑、光伏辅助软件等应用落地</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-lg">
                  <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">其他</div>
                  <div>
                    <h5 className="font-semibold text-gray-800">其他分公司：AI应用探索</h5>
                    <p className="text-gray-600 text-sm">积极参与AI培训，开展应用试点，为全面推广奠定基础</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // 第5页：标杆案例一 - 南方产权数智型成熟度评估
    {
      title: "标杆案例一：南方产权数智型成熟度评估",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-xl font-bold text-blue-800 mb-3 flex items-center"><Target className="mr-2" size={24} /> 项目概览</h3>
            <p className="text-lg text-gray-700">为某产权交易中心构建数智型交易平台成熟度评估体系，提供全面的数字化转型解决方案</p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center"><BarChart3 className="mr-2" size={20} /> 项目基本信息</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="font-medium text-gray-700">客户类型</span>
                  <span className="text-sm font-bold text-blue-600">产权交易中心</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="font-medium text-gray-700">项目周期</span>
                  <span className="text-sm font-bold text-green-600">2024年</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                  <span className="font-medium text-gray-700">服务类型</span>
                  <span className="text-sm font-bold text-purple-600">AI规划咨询</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                  <span className="font-medium text-gray-700">专家团队</span>
                  <span className="text-sm font-bold text-orange-600">7位专家</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center"><Search className="mr-2" size={20} /> 评估框架体系</h4>
              <div className="space-y-3">
                <div className="p-3 bg-red-50 rounded-lg">
                  <h5 className="font-semibold text-red-700 mb-1">三级评估架构</h5>
                  <p className="text-sm text-gray-600">8大能力要素×19个能力域×38个能力子域</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <h5 className="font-semibold text-blue-700 mb-1">成熟度等级</h5>
                  <p className="text-sm text-gray-600">从初始级到优化级的五级评估标准</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <h5 className="font-semibold text-green-700 mb-1">综合评分</h5>
                  <p className="text-sm text-gray-600">客户获得3.16分，达到发展级水平</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h4 className="text-lg font-semibold text-purple-800 mb-4 flex items-center"><Rocket className="mr-2" size={20} /> 核心服务内容</h4>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="mb-2 flex justify-center"><FileText size={32} className="text-purple-600" /></div>
                <h5 className="font-semibold text-purple-800 mb-2">现状诊断</h5>
                <p className="text-sm text-gray-600">分析600+份文档，访谈19个部门，回收115份问卷</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="mb-2 flex justify-center"><LineChart size={32} className="text-blue-600" /></div>
                <h5 className="font-semibold text-blue-800 mb-2">差距分析</h5>
                <p className="text-sm text-gray-600">识别数据治理、系统集成、人才体系等关键短板</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="mb-2 flex justify-center"><Target size={32} className="text-green-600" /></div>
                <h5 className="font-semibold text-green-800 mb-2">战略规划</h5>
                <p className="text-sm text-gray-600">制定六大建设路径和24项具体实施举措</p>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
            <h4 className="text-lg font-semibold text-yellow-800 mb-4 flex items-center"><Lightbulb className="mr-2" size={20} /> 项目价值与成果</h4>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-gray-800 mb-2">战略成果</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 明确数智型交易平台功能定位和发展理念</li>
                  <li>• 构建科学完备的成熟度评估体系</li>
                  <li>• 设计可操作的实施路径图</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 mb-2">预期效益</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 数据资产价值提升30%</li>
                  <li>• 运营效率提高40%</li>
                  <li>• IT运维成本降低25%</li>
                  <li>• 业务增长15-20%</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // 第6页：标杆案例二 - "宝医数智"大模型平台
    {
      title: "标杆案例二：深圳宝安区『宝医数智』大模型平台",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-100 to-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="text-xl font-bold text-green-800 mb-3 flex items-center"><Building2 className="mr-2" size={24} /> 全国首个区域医疗大模型平台</h3>
            <p className="text-lg text-gray-700">深圳市宝安区卫生健康局"宝医数智"大模型平台建设项目可行性研究报告和初步设计及概算编制服务</p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center"><BarChart3 className="mr-2" size={20} /> 项目基本信息</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                  <span className="font-medium text-gray-700">合同金额</span>
                  <span className="text-lg font-bold text-red-600">84.5万元</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="font-medium text-gray-700">服务对象</span>
                  <span className="text-sm font-bold text-blue-600">深圳市宝安区卫健局</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="font-medium text-gray-700">服务内容</span>
                  <span className="text-sm font-bold text-green-600">可研报告+初设+概算</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                  <span className="font-medium text-gray-700">项目状态</span>
                  <span className="text-sm font-bold text-purple-600">已上线运行</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center"><Target className="mr-2" size={20} /> 平台覆盖范围</h4>
              <div className="space-y-3">
                <div className="p-3 bg-orange-50 rounded-lg">
                  <h5 className="font-semibold text-orange-700 mb-1">服务人群</h5>
                  <p className="text-sm text-gray-600">近500万宝安区居民</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <h5 className="font-semibold text-blue-700 mb-1">医疗机构</h5>
                  <p className="text-sm text-gray-600">9家医院 + 220家社康中心</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <h5 className="font-semibold text-green-700 mb-1">年诊疗量</h5>
                  <p className="text-sm text-gray-600">超过2700万人次</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h4 className="text-lg font-semibold text-purple-800 mb-4 flex items-center"><Bot className="mr-2" size={20} /> 核心技术方案</h4>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="mb-2 flex justify-center"><Brain size={32} className="text-purple-600" /></div>
                <h5 className="font-semibold text-purple-800 mb-2">医疗大模型</h5>
                <p className="text-sm text-gray-600">整合电子病历、影像数据及权威医学知识库</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="mb-2 flex justify-center"><Search size={32} className="text-blue-600" /></div>
                <h5 className="font-semibold text-blue-800 mb-2">智能诊断</h5>
                <p className="text-sm text-gray-600">AI辅助诊断，识别18类病历缺陷</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="mb-2 flex justify-center"><Smartphone size={32} className="text-green-600" /></div>
                <h5 className="font-semibold text-green-800 mb-2">智能服务</h5>
                <p className="text-sm text-gray-600">24小时AI健康管家，问诊秒推医生</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center"><BarChart3 className="mr-2" size={20} /> 应用效果</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-blue-50 rounded text-center">
                <div className="font-bold text-blue-600">质控效率提升50%</div>
              </div>
              <div className="p-3 bg-green-50 rounded text-center">
                <div className="font-bold text-green-600">文书耗时缩减75%</div>
              </div>
              <div className="p-3 bg-purple-50 rounded text-center">
                <div className="font-bold text-purple-600">病历返修率下降90%</div>
              </div>
              <div className="p-3 bg-orange-50 rounded text-center">
                <div className="font-bold text-orange-600">随访完成率提升至89%</div>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-yellow-600 font-bold flex items-center"><Lightbulb className="mr-1" size={16} /> 项目意义：</span>
            </div>
            <p className="text-gray-700">作为全国首个区域医疗大模型平台，"宝医数智"为我们在医疗AI领域树立了标杆，展现了中通南方在复杂行业AI应用方面的专业能力，为后续拓展智慧医疗业务奠定了坚实基础。</p>
          </div>
        </div>
      )
    },

    // 第7页：标杆案例三 - 南方产权AI智能服务平台
    {
      title: "标杆案例三：南方产权AI智能服务平台",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-orange-100 to-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
            <h3 className="text-xl font-bold text-orange-800 mb-3 flex items-center"><Rocket className="mr-2" size={24} /> 国央企AI应用综合平台</h3>
            <p className="text-lg text-gray-700">为南方联合产权交易中心构建智能投顾、智能报告撰写、产业数据分析及招商引资服务的综合AI平台</p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center"><FileText className="mr-2" size={20} /> 项目基本信息</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                  <span className="font-medium text-gray-700">研发周期</span>
                  <span className="text-sm font-bold text-orange-600">2024.3-2025.12</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="font-medium text-gray-700">研发预算</span>
                  <span className="text-sm font-bold text-blue-600">383万元</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="font-medium text-gray-700">项目团队</span>
                  <span className="text-sm font-bold text-green-600">13人专项小组</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                  <span className="font-medium text-gray-700">知识产权</span>
                  <span className="text-sm font-bold text-purple-600">1项发明专利+2项软著</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center"><Target className="mr-2" size={20} /> 核心建设目标</h4>
              <div className="space-y-3">
                <div className="p-3 bg-red-50 rounded-lg">
                  <h5 className="font-semibold text-red-700 mb-1">准确率目标</h5>
                  <p className="text-sm text-gray-600">专业领域问答准确率≥85%</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <h5 className="font-semibold text-blue-700 mb-1">可用性目标</h5>
                  <p className="text-sm text-gray-600">系统服务可用性≥99.9%</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <h5 className="font-semibold text-green-700 mb-1">互联互通</h5>
                  <p className="text-sm text-gray-600">与集团"粤交易"平台数据互通</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h4 className="text-lg font-semibold text-purple-800 mb-4 flex items-center"><Settings className="mr-2" size={20} /> 七大核心功能模块</h4>
            <div className="grid grid-cols-4 gap-3">
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <div className="mb-1 flex justify-center"><Search size={20} className="text-blue-600" /></div>
                <h5 className="font-semibold text-blue-800 text-xs mb-1">AI智能搜索</h5>
                <p className="text-xs text-gray-600">垂直模型驱动的语义搜索</p>
              </div>
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <div className="mb-1 flex justify-center"><FileText size={20} className="text-green-600" /></div>
                <h5 className="font-semibold text-green-800 text-xs mb-1">智能报告</h5>
                <p className="text-xs text-gray-600">自动化报告撰写工具</p>
              </div>
              <div className="text-center p-3 bg-purple-50 rounded-lg">
                <div className="mb-1 flex justify-center"><Bot size={20} className="text-purple-600" /></div>
                <h5 className="font-semibold text-purple-800 text-xs mb-1">智能客服</h5>
                <p className="text-xs text-gray-600">多轮对话与上下文理解</p>
              </div>
              <div className="text-center p-3 bg-orange-50 rounded-lg">
                <div className="mb-1 flex justify-center"><Scale size={20} className="text-orange-600" /></div>
                <h5 className="font-semibold text-orange-800 text-xs mb-1">智能评标</h5>
                <p className="text-xs text-gray-600">辅助评标评审工具</p>
              </div>
              <div className="text-center p-3 bg-red-50 rounded-lg">
                <div className="mb-1 flex justify-center"><Search size={20} className="text-red-600" /></div>
                <h5 className="font-semibold text-red-800 text-xs mb-1">围串标识别</h5>
                <p className="text-xs text-gray-600">8维度智能稽核模型</p>
              </div>
              <div className="text-center p-3 bg-indigo-50 rounded-lg">
                <div className="mb-1 flex justify-center"><BarChart3 size={20} className="text-indigo-600" /></div>
                <h5 className="font-semibold text-indigo-800 text-xs mb-1">产业数据中心</h5>
                <p className="text-xs text-gray-600">知识图谱+决策支持</p>
              </div>
              <div className="text-center p-3 bg-teal-50 rounded-lg">
                <div className="mb-1 flex justify-center"><Factory size={20} className="text-teal-600" /></div>
                <h5 className="font-semibold text-teal-800 text-xs mb-1">招商引资</h5>
                <p className="text-xs text-gray-600">"百千万工程"应用场景</p>
              </div>
              <div className="text-center p-3 bg-yellow-50 rounded-lg">
                <div className="mb-1 flex justify-center"><Brain size={20} className="text-yellow-600" /></div>
                <h5 className="font-semibold text-yellow-800 text-xs mb-1">垂直模型</h5>
                <p className="text-xs text-gray-600">产权领域专业大模型</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center"><Settings className="mr-2" size={20} /> 技术架构特点</h4>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <h5 className="font-semibold text-blue-700 mb-1">微服务架构</h5>
                  <p className="text-sm text-gray-600">Spring Cloud Alibaba + 容器化部署</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <h5 className="font-semibold text-green-700 mb-1">AI技术栈</h5>
                  <p className="text-sm text-gray-600">基于DeepSeek等开源大模型微调</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <h5 className="font-semibold text-purple-700 mb-1">数据支撑</h5>
                  <p className="text-sm text-gray-600">MySQL+Neo4j+Redis多数据库</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center"><TrendingUp className="mr-2" size={20} /> 预期效益</h4>
              <div className="space-y-3">
                <div className="p-3 bg-orange-50 rounded-lg">
                  <h5 className="font-semibold text-orange-700 mb-1">效率提升</h5>
                  <p className="text-sm text-gray-600">交易方案生成效率显著提高</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <h5 className="font-semibold text-blue-700 mb-1">服务升级</h5>
                  <p className="text-sm text-gray-600">向科技驱动的服务机构转型</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <h5 className="font-semibold text-green-700 mb-1">竞争优势</h5>
                  <p className="text-sm text-gray-600">摆脱传统中介居间服务印象</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-yellow-600 font-bold flex items-center"><Rocket className="mr-1" size={16} /> 项目亮点：</span>
            </div>
            <p className="text-gray-700">这是一个综合性的AI应用平台项目，涵盖了从智能搜索到知识图谱、从自动化报告到智能评标的全链条AI服务，体现了中通南方在复杂企业级AI系统开发方面的综合实力，为国央企数字化转型提供了完整的解决方案。</p>
          </div>
        </div>
      )
    },

    // 第8页：团队建设与人才培养
    {
      title: "团队建设与人才培养",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-orange-100 to-orange-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-orange-800 mb-4 flex items-center"><Users className="mr-2" size={24} /> 构建AI人才体系</h3>
            <p className="text-lg text-gray-700">多层次、全方位的AI人才培养与团队建设</p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center"><Star className="mr-2" size={20} /> 核心技术专家</h4>
              <div className="space-y-4">
                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                  <h5 className="font-semibold text-red-700 mb-2">洪浩东 - AI技术带头人</h5>
                  <div className="text-sm space-y-1">
                    <div>• 公司三级技术专家</div>
                    <div>• 数字政府行业赛道总监</div>
                    <div>• 广东通服"优秀科技新星"</div>
                    <div>• 揭榜挂帅项目组长</div>
                  </div>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h5 className="font-semibold text-blue-700 mb-2">施唯 - 青年专家代表</h5>
                  <div className="text-sm space-y-1">
                    <div>• 2025年科技新星</div>
                    <div>• 软考高级项目管理师</div>
                    <div>• 获得多个甲方商机</div>
                    <div>• AI应用创新骨干</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center"><Trophy className="mr-2" size={20} /> 团队建设成果</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                  <span className="font-medium text-gray-700">AI专业人员</span>
                  <span className="text-lg font-bold text-purple-600">30人+</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="font-medium text-gray-700">创新工作室</span>
                  <span className="text-lg font-bold text-green-600">2个</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="font-medium text-gray-700">集团获奖</span>
                  <span className="text-lg font-bold text-blue-600">6人次</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                  <span className="font-medium text-gray-700">在研项目</span>
                  <span className="text-lg font-bold text-yellow-600">8个</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center"><LineChart className="mr-2" size={20} /> 人才培养举措</h4>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="mb-2 flex justify-center"><Target size={32} className="text-blue-600" /></div>
                <h5 className="font-semibold text-blue-800 mb-2">专项培训</h5>
                <p className="text-sm text-gray-600">参与集团AI智能体实训营、小CEO培训等专业培训</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="mb-2 flex justify-center"><Rocket size={32} className="text-green-600" /></div>
                <h5 className="font-semibold text-green-800 mb-2">实践锻炼</h5>
                <p className="text-sm text-gray-600">承担AI相关项目，在实战中提升专业能力</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="mb-2 flex justify-center"><Award size={32} className="text-purple-600" /></div>
                <h5 className="font-semibold text-purple-800 mb-2">激励机制</h5>
                <p className="text-sm text-gray-600">参与科创比赛，获得荣誉认可和专业成长</p>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h4 className="text-lg font-semibold text-yellow-800 mb-3 flex items-center"><Target className="mr-2" size={20} /> 分公司AI团队特色</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <h5 className="font-semibold text-gray-800 mb-1">七分公司：东方洪岗位创新工作室</h5>
                <p className="text-gray-600">10人团队，平均年龄26岁，AI技术应用先锋</p>
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 mb-1">五分公司：科创小组</h5>
                <p className="text-gray-600">专业领域AI应用，标准规范智能化</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // 第9页：AI+科创/工作创新实践
    {
      title: "AI+科创/工作创新实践",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-indigo-100 to-purple-50 p-6 rounded-lg border-l-4 border-indigo-500">
            <h3 className="text-xl font-bold text-indigo-800 mb-3 flex items-center"><Rocket className="mr-2" size={24} /> 七分公司AI+创新实践</h3>
            <p className="text-lg text-gray-700">积极参与各类科创比赛，深度研发AI应用工具，切实解决实际工作问题</p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="text-lg font-semibold text-blue-800 mb-4 flex items-center"><Trophy className="mr-2" size={20} /> 科创比赛积极参与</h4>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                  <h5 className="font-semibold text-blue-700 mb-2">集团AI应用比赛</h5>
                  <p className="text-sm text-gray-700">七分公司踊跃报名，提交AI应用作品相关材料，展现创新活力</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
                  <h5 className="font-semibold text-green-700 mb-2">中国电信黑马大赛</h5>
                  <p className="text-sm text-gray-700">积极参与行业内顶级创新大赛，提升技术影响力</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-400">
                  <h5 className="font-semibold text-purple-700 mb-2">"星海杯"大数据劳动竞赛</h5>
                  <p className="text-sm text-gray-700">参与专业技能竞赛，锻炼团队实战能力</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="text-lg font-semibold text-orange-800 mb-4 flex items-center"><Target className="mr-2" size={20} /> 科创发展目标</h4>
              <div className="space-y-4">
                <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                  <h5 className="font-semibold text-yellow-700 mb-2">完善创新应用</h5>
                  <p className="text-sm text-gray-700">在工作之余持续完善AI应用作品，提升技术水平和实用性</p>
                </div>
                <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
                  <h5 className="font-semibold text-red-700 mb-2">争取获奖成果</h5>
                  <p className="text-sm text-gray-700">力争在各项比赛中取得优异成绩，为公司争光</p>
                </div>
                <div className="p-4 bg-indigo-50 rounded-lg border-l-4 border-indigo-400">
                  <h5 className="font-semibold text-indigo-700 mb-2">持续创新动力</h5>
                  <p className="text-sm text-gray-700">保持高度的创新积极性，探索更多AI应用可能</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h4 className="text-lg font-semibold text-green-800 mb-4 flex items-center"><Settings className="mr-2" size={20} /> 运营商业务流程优化</h4>
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-semibold text-green-700 mb-2 flex items-center"><FileText className="mr-1" size={16} /> 业务背景</h5>
                <p className="text-sm text-gray-700 mb-3">
                  七分公司2025年承接广州移动运营商基本盘业务，面临5个项目管理流程系统的大量填报工作：
                </p>
                <div className="grid grid-cols-5 gap-2">
                  <div className="text-center p-2 bg-white rounded text-xs">
                    <div className="font-semibold text-blue-600">综资系统</div>
                  </div>
                  <div className="text-center p-2 bg-white rounded text-xs">
                    <div className="font-semibold text-green-600">全生命系统</div>
                  </div>
                  <div className="text-center p-2 bg-white rounded text-xs">
                    <div className="font-semibold text-purple-600">大数据系统</div>
                  </div>
                  <div className="text-center p-2 bg-white rounded text-xs">
                    <div className="font-semibold text-orange-600">PMIS系统</div>
                  </div>
                  <div className="text-center p-2 bg-white rounded text-xs">
                    <div className="font-semibold text-red-600">PMS系统</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-semibold text-blue-700 mb-2 flex items-center"><Users className="mr-1" size={16} /> 领导重视</h5>
                <p className="text-sm text-gray-700">
                  分公司总经理刘伟、副总经理徐总及胡总高度重视流程工作效率提升问题，
                  <span className="font-semibold text-blue-600">指派洪浩东牵头进行实地调研</span>，
                  计划于8月初研发相关效率工具。
                </p>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <h5 className="font-semibold text-purple-700 mb-2 flex items-center"><Target className="mr-1" size={16} /> 预期成果</h5>
                <div className="text-sm text-gray-700 space-y-1">
                  <div>• 切实减轻员工填报负担，提升工作效率</div>
                  <div>• 开发通用性强的工具，具备向其他分公司推广潜力</div>
                  <div>• 形成可复制的运营商业务流程优化模式</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h4 className="text-lg font-semibold text-purple-800 mb-4 flex items-center"><Bot className="mr-2" size={20} /> AI应用研发管线</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="mb-2 flex justify-center"><FileText size={32} className="text-blue-600" /></div>
                <h5 className="font-semibold text-blue-800 mb-2">智能投标AI应用</h5>
                <p className="text-sm text-gray-600">研发投标流程智能化工具，提升投标效率和成功率</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="mb-2 flex justify-center"><FileText size={32} className="text-green-600" /></div>
                <h5 className="font-semibold text-green-800 mb-2">AI合同审查应用</h5>
                <p className="text-sm text-gray-600">开发合同智能审查工具，提高合同审核质量和效率</p>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-yellow-600 font-bold flex items-center"><Lightbulb className="mr-1" size={16} /> 创新亮点：</span>
            </div>
            <p className="text-gray-700">
              七分公司在AI+科创方面展现出强烈的创新意识和实践能力，不仅积极参与各类科创比赛，
              更重要的是<span className="font-semibold text-blue-600">紧密结合实际业务需求</span>，
              开发切实可行的AI工具，真正实现了<span className="font-semibold text-green-600">"AI+工作"</span>的深度融合。
            </p>
          </div>
        </div>
      )
    },

    // 第10页：下半年工作计划
    {
      title: "下半年工作计划",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center"><Calendar className="mr-2" size={24} /> 下半年重点工作安排</h3>
            <p className="text-lg text-gray-700">聚焦重点任务，全面推进AI应用深化发展</p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="text-lg font-semibold text-blue-800 mb-4 flex items-center"><Rocket className="mr-2" size={20} /> 技术平台建设</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">Q3</div>
                  <div>
                    <h5 className="font-semibold text-gray-800">统一AI工具平台</h5>
                    <p className="text-sm text-gray-600">建设中通南方统一AI工具平台，实现资源共享</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                  <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">Q4</div>
                  <div>
                    <h5 className="font-semibold text-gray-800">技术标准制定</h5>
                    <p className="text-sm text-gray-600">制定AI应用技术标准，规范开发流程</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-purple-50 rounded-lg">
                  <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">全年</div>
                  <div>
                    <h5 className="font-semibold text-gray-800">持续技术创新</h5>
                    <p className="text-sm text-gray-600">跟踪前沿技术，推进创新应用</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="text-lg font-semibold text-green-800 mb-4 flex items-center"><Briefcase className="mr-2" size={20} /> 业务拓展目标</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-3 bg-red-50 rounded-lg">
                  <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">8月</div>
                  <div>
                    <h5 className="font-semibold text-gray-800">重点项目交付</h5>
                    <p className="text-sm text-gray-600">完成宝医数智等重点项目交付</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-orange-50 rounded-lg">
                  <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">9月</div>
                  <div>
                    <h5 className="font-semibold text-gray-800">业务模式推广</h5>
                    <p className="text-sm text-gray-600">向集团内其他单位推广成功经验</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">Q4</div>
                  <div>
                    <h5 className="font-semibold text-gray-800">新项目承接</h5>
                    <p className="text-sm text-gray-600">力争新增AI项目合同额1000万元</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="text-lg font-semibold text-purple-800 mb-4 flex items-center"><Users className="mr-2" size={20} /> 团队发展计划</h4>
              <div className="space-y-3">
                <div className="p-3 bg-purple-50 rounded-lg">
                  <h5 className="font-semibold text-purple-700 mb-1">人才队伍扩充</h5>
                  <p className="text-sm text-gray-600">AI专业人员增至50人，覆盖各分公司</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <h5 className="font-semibold text-blue-700 mb-1">专业能力提升</h5>
                  <p className="text-sm text-gray-600">组织系列培训，建立技能认证体系</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <h5 className="font-semibold text-green-700 mb-1">交流机制建立</h5>
                  <p className="text-sm text-gray-600">建立定期技术交流和项目协作机制</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="text-lg font-semibold text-orange-800 mb-4 flex items-center"><Target className="mr-2" size={20} /> 重点活动参与</h4>
              <div className="space-y-3">
                <div className="p-3 bg-yellow-50 rounded-lg">
                  <h5 className="font-semibold text-yellow-700 mb-1">集团AI创新活动</h5>
                  <p className="text-sm text-gray-600">年底参加集团"赋能提效"活动</p>
                </div>
                <div className="p-3 bg-red-50 rounded-lg">
                  <h5 className="font-semibold text-red-700 mb-1">外部比赛参与</h5>
                  <p className="text-sm text-gray-600">参与行业AI应用大赛，扩大影响力</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <h5 className="font-semibold text-blue-700 mb-1">经验分享推广</h5>
                  <p className="text-sm text-gray-600">在集团内分享成功案例和经验</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // 第12页：总结与展望
    {
      title: "总结与展望",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-blue-800 mb-4 text-center">深化AI赋能 引领数字化转型</h3>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center"><LineChart className="mr-2" size={20} /> 上半年工作成果</h4>
              <div className="grid grid-cols-4 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-2">500万+</div>
                  <p className="text-sm text-gray-600">AI项目合同额</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-2">8个</div>
                  <p className="text-sm text-gray-600">AI应用工具</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 mb-2">30人+</div>
                  <p className="text-sm text-gray-600">专业团队规模</p>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600 mb-2">6个</div>
                  <p className="text-sm text-gray-600">应用行业领域</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center"><Target className="mr-2" size={20} /> 发展理念与路径</h4>
              <p className="text-lg text-gray-700 text-center leading-relaxed">
                中通南方坚持<span className="font-semibold text-blue-600">"统筹规划"</span>、
                <span className="font-semibold text-green-600">"协同发力"</span>、<span className="font-semibold text-purple-600">"创新驱动"</span>的AI发展战略，
                积极响应集团数字化转型要求，为集团AI事业发展探索可复制推广的成功模式
              </p>
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h4 className="text-lg font-semibold text-yellow-800 mb-4 text-center flex items-center justify-center"><Rocket className="mr-2" size={20} /> 未来展望</h4>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">下半年目标</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 完成重点AI项目交付，确保质量</li>
                    <li>• 新增AI项目合同额1000万元</li>
                    <li>• AI专业人员扩充至50人</li>
                    <li>• 建设统一AI技术平台</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">长期愿景</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 建成集团AI应用标杆单位</li>
                    <li>• 形成完整的AI服务能力体系</li>
                    <li>• 培养一批AI行业专家</li>
                    <li>• 为集团AI战略提供有力支撑</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-white rounded-lg text-center">
                <p className="text-lg text-gray-700">
                  我们将在集团的统筹指导下，继续深化AI技术应用，
                  <span className="font-semibold text-blue-600">以创新引领发展</span>，
                  <span className="font-semibold text-green-600">以应用驱动转型</span>，
                  为集团数字化转型和高质量发展贡献中通南方力量！
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full h-screen bg-white flex flex-col">
      {/* 头部导航 */}
      <div className="bg-gray-50 border-b border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-800">中通信息/南方设计2025年上半年AI工作情况汇报</h2>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">
              {currentSlide + 1} / {slides.length}
            </span>
            <div className="flex space-x-2">
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
                className="p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 主要内容区域 */}
      <div className="flex-1 flex">
        {/* 侧边栏 - 页面缩略图 */}
        <div className="w-64 bg-gray-50 border-r border-gray-200 p-4 overflow-y-auto">
          <h3 className="text-sm font-semibold text-gray-600 mb-4">页面导航</h3>
          <div className="space-y-2">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-full text-left p-3 rounded-lg text-sm transition-colors ${
                  currentSlide === index
                    ? 'bg-blue-500 text-white'
                    : 'bg-white hover:bg-gray-100 text-gray-700'
                }`}
              >
                <div className="font-medium">{index + 1}. {slide.title}</div>
              </button>
            ))}
          </div>
        </div>

        {/* 幻灯片显示区域 */}
        <div className="flex-1 p-8">
          <div className="max-w-6xl mx-auto h-full">
            {/* 幻灯片标题 */}
            {currentSlide > 0 && (
              <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                {slides[currentSlide].title}
              </h1>
            )}
            
            {/* 幻灯片内容 */}
            <div className="h-full">
              {slides[currentSlide].content}
            </div>
          </div>
        </div>
      </div>

      {/* 底部控制栏 */}
      <div className="bg-gray-50 border-t border-gray-200 p-4">
        <div className="flex items-center justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === index ? 'bg-blue-500' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PPTPresentation;