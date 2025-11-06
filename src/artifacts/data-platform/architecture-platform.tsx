import React from 'react';
import { 
  Search, FileText, Bot, Scale, Target, Database, Building, 
  Book, Settings, BarChart, RefreshCw, Folder, User,
  Store, Brain, TrendingUp, Globe, MoreHorizontal,
  Layers, Wrench, Code
} from 'lucide-react';

const ArchitecturePlatform = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* 标题 */}
      <h1 className="text-2xl font-bold text-center mb-8 text-gray-800">
        南方产权智能服务平台总体架构
      </h1>

      {/* 应用层 */}
      <div className="mb-6">
        <div className="flex items-center mb-4">
          <div className="w-6 h-6 bg-green-500 rounded mr-3 flex items-center justify-center">
            <Layers className="w-4 h-4 text-white" />
          </div>
          <h2 className="text-lg font-semibold text-gray-700">应用层</h2>
        </div>
        <div className="bg-green-50 p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {[
              { icon: Search, name: 'AI智能搜索' },
              { icon: FileText, name: '交易方案及项目报告智能撰写系统' },
              { icon: Bot, name: '智能客服系统' },
              { icon: Database, name: '产业数据中心' },
              { icon: Building, name: '"百千万工程"招商引资应用场景' }
            ].map((app, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-green-200 text-center min-h-[120px] flex flex-col justify-center">
                <div className="flex justify-center mb-3">
                  <app.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-medium text-gray-700 text-sm leading-tight">{app.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 服务层 */}
      <div className="mb-6">
        <div className="flex items-center mb-4">
          <div className="w-6 h-6 bg-blue-500 rounded mr-3 flex items-center justify-center">
            <Wrench className="w-4 h-4 text-white" />
          </div>
          <h2 className="text-lg font-semibold text-gray-700">服务层</h2>
        </div>
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { icon: Book, name: '信息解读', desc: '资讯解读\n研报解读\n金融指标解读' },
              { icon: Bot, name: 'AI智能体', desc: '文本翻译\n续写写作\n生成标题' },
              { icon: Settings, name: '辅助AI助手', desc: '资讯查询\n全局指标查询' },
              { icon: FileText, name: '报告撰写', desc: '智能撰写\n观点问答\n提报生成' },
              { icon: BarChart, name: '数据分析', desc: '表格问答\n图表可视化\n指标问答' },
              { icon: RefreshCw, name: '数据服务', desc: '存量处理\n数据清洗\n数据API' },
              { icon: Folder, name: '文档管理', desc: '资料上传\n报告导出' },
              { icon: User, name: '用户管理', desc: '登录验权' }
            ].map((service, index) => (
              <div key={index} className="bg-white p-3 rounded-lg shadow-sm border border-blue-200 flex-1 min-w-28 text-center">
                <div className="flex justify-center mb-1">
                  <service.icon className="w-5 h-5 text-blue-600" />
                </div>
                <h4 className="font-medium text-gray-700 text-sm mb-2">{service.name}</h4>
                <div className="text-xs text-gray-500 space-y-1">
                  {service.desc.split('\n').map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 框架层 */}
      <div className="mb-6">
        <div className="flex items-center mb-4">
          <div className="w-6 h-6 bg-orange-500 rounded mr-3 flex items-center justify-center">
            <Code className="w-4 h-4 text-white" />
          </div>
          <h2 className="text-lg font-semibold text-gray-700">框架层</h2>
        </div>
        <div className="bg-orange-50 p-6 rounded-lg">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: FileText, name: '知识库管理', desc: '知识库问答中间件', subDesc: '管理生产' },
              { icon: Search, name: '索引构建', desc: '提问中间件', subDesc: '(切片、排期)' },
              { icon: Settings, name: '接续构建', desc: '指标问答中间件', subDesc: '(日期、排期)' },
              { icon: Store, name: 'NLP解析及预处理', desc: '大模型应用调试中间件', subDesc: '' }
            ].map((framework, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-orange-200 text-center flex-1 min-w-48">
                <div className="flex justify-center mb-2">
                  <framework.icon className="w-6 h-6 text-orange-600" />
                </div>
                <h4 className="font-medium text-gray-700 mb-2">{framework.name}</h4>
                <p className="text-sm text-gray-600 mb-1">{framework.desc}</p>
                <p className="text-xs text-gray-500">{framework.subDesc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 模型层 */}
      <div className="mb-6">
        <div className="flex items-center mb-4">
          <div className="w-6 h-6 bg-purple-500 rounded mr-3 flex items-center justify-center">
            <Brain className="w-4 h-4 text-white" />
          </div>
          <h2 className="text-lg font-semibold text-gray-700">模型层</h2>
        </div>
        <div className="bg-purple-50 p-6 rounded-lg">
          <div className="flex justify-center">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-purple-200 flex items-center w-full max-w-md">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                <Brain className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-700 text-lg">产权领域"垂直模型"</h4>
                <p className="text-sm text-gray-500">(基于大语言模型技术)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 数据层 */}
      <div className="mb-6">
        <div className="flex items-center mb-4">
          <div className="w-6 h-6 bg-emerald-500 rounded mr-3 flex items-center justify-center">
            <Database className="w-4 h-4 text-white" />
          </div>
          <h2 className="text-lg font-semibold text-gray-700">数据层</h2>
        </div>
        <div className="bg-emerald-50 p-6 rounded-lg">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: BarChart, name: '舆情数据' },
              { icon: TrendingUp, name: '研报数据' },
              { icon: Building, name: '行业数据' },
              { icon: Globe, name: 'WEB数据' },
              { icon: MoreHorizontal, name: '...' }
            ].map((data, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-emerald-200 text-center flex-1 min-w-32">
                <div className="flex justify-center mb-2">
                  <data.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h4 className="font-medium text-gray-700">{data.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 组件层 */}
      <div className="mb-6">
        <div className="flex items-center mb-4">
          <div className="w-6 h-6 bg-gray-500 rounded mr-3 flex items-center justify-center">
            <Settings className="w-4 h-4 text-white" />
          </div>
          <h2 className="text-lg font-semibold text-gray-700">组件层</h2>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <div className="flex flex-wrap justify-center gap-3">
            {['kubernetes', 'Prometheus', 'Grafana', 'BOS', 'spring boot', 'redis', 'elastic', 'MySQL', 'kafka'].map((component, index) => (
              <div key={index} className="bg-white p-3 rounded-lg shadow-sm border border-gray-200 text-center flex-1 min-w-24">
                <h4 className="font-medium text-gray-700 text-sm">{component}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchitecturePlatform;