import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, User, Calendar, MapPin } from 'lucide-react';

const PPTPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // 第1页：封面页
    {
      title: "七分公司2025年第二季度生产效率提升工作汇报",
      content: (
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <h1 className="text-4xl font-bold text-blue-800 text-center leading-tight">
            七分公司2025年第二季度<br />生产效率提升工作汇报
          </h1>
          <div className="space-y-4 text-lg text-gray-600">
            <div className="flex items-center justify-center space-x-2">
              <User size={20} />
              <span>汇报人：七分公司</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Calendar size={20} />
              <span>2025年7月9日</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <MapPin size={20} />
              <span>深圳湾本部1号会议室</span>
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
            <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
              <span className="text-lg font-medium">AI赋能工具建设成果</span>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
              <span className="text-lg font-medium">创新工作室团队建设</span>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-lg">
              <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
              <span className="text-lg font-medium">科创比赛积极参与</span>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-orange-50 rounded-lg">
              <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
              <span className="text-lg font-medium">实际业务流程优化</span>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-red-50 rounded-lg">
              <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">5</div>
              <span className="text-lg font-medium">困难与建议</span>
            </div>
          </div>
        </div>
      )
    },

    // 第3页：AI问答助手平台建设
    {
      title: "AI问答助手平台建设（2024年成果）",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-xl font-bold text-blue-800 mb-3">🏆 揭榜挂帅项目重点成果</h3>
            <p className="text-lg text-gray-700 mb-2">面向公司内部的多模型AI问答助手平台</p>
            <p className="text-sm text-blue-600 font-medium">✅ 项目状态：已完成上线并投入使用</p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                🤖 多模型智能接入
              </h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="font-medium text-gray-700">国产大模型</span>
                  <div className="flex space-x-2">
                    <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded">通义千问</span>
                    <span className="px-2 py-1 bg-purple-500 text-white text-xs rounded">文言一心</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="font-medium text-gray-700">国际主流模型</span>
                  <div className="flex space-x-2">
                    <span className="px-2 py-1 bg-green-500 text-white text-xs rounded">ChatGPT</span>
                    <span className="px-2 py-1 bg-orange-500 text-white text-xs rounded">Claude</span>
                    <span className="px-2 py-1 bg-red-500 text-white text-xs rounded">Gemini</span>
                  </div>
                </div>
                <div className="text-center text-sm text-gray-600 mt-3">
                  <span className="font-semibold text-blue-600">5+</span> 主流大模型全覆盖
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                🔒 安全与服务保障
              </h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                  <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">✓</div>
                  <div>
                    <h5 className="font-medium text-gray-800">外网隔离部署</h5>
                    <p className="text-sm text-gray-600">确保内部数据安全，零泄露风险</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">✓</div>
                  <div>
                    <h5 className="font-medium text-gray-800">API服务资助</h5>
                    <p className="text-sm text-gray-600">公司统一采购，员工免费使用</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-purple-50 rounded-lg">
                  <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">✓</div>
                  <div>
                    <h5 className="font-medium text-gray-800">全员服务覆盖</h5>
                    <p className="text-sm text-gray-600">七分公司全体员工均可使用</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-yellow-600 font-bold">💡 项目亮点：</span>
            </div>
            <p className="text-gray-700">该平台作为七分公司首个"揭榜挂帅"AI应用项目，成功打造了内外网隔离的安全AI服务体系，为后续AI应用推广奠定了坚实基础。</p>
          </div>
        </div>
      )
    },

    // 第4页：本地化AI模型探索
    {
      title: "本地化AI模型探索（2025年实践）",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-100 to-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-green-800 mb-4">DeepSeek模型本地部署尝试</h3>
            <p className="text-lg text-gray-700">在DeepSeek突然爆火的情况下的积极探索</p>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="flex items-start space-x-4 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">✓</div>
              <div>
                <h4 className="font-semibold text-gray-800">成功部署到NAS服务器</h4>
                <p className="text-gray-600">成功将轻量版本的DeepSeek模型部署到本地NAS服务器上</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold text-sm">!</div>
              <div>
                <h4 className="font-semibold text-gray-800">发现轻量版本局限性</h4>
                <p className="text-gray-600">轻量版本模型无法满足高难度问题回答或高质量方案编写需求</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">→</div>
              <div>
                <h4 className="font-semibold text-gray-800">继续支持外部大模型API服务</h4>
                <p className="text-gray-600">基于实际需求，分公司继续支持购买外部大模型API服务</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // 第5页：东方洪岗位创新工作室成立
    {
      title: "东方洪岗位创新工作室成立",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-100 to-purple-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-purple-800 mb-4">总部工会支持成立</h3>
            <p className="text-lg text-gray-700">2025年初正式成立东方洪岗位创新工作室</p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">👥 团队构成</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-blue-600">10</span>
                  </div>
                  <span className="text-gray-700">工作室成员接近10人</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-green-600">26</span>
                  </div>
                  <span className="text-gray-700">平均年龄26岁左右</span>
                </div>
                <div className="mt-4 p-3 bg-orange-50 rounded-lg">
                  <h5 className="font-semibold text-orange-800 mb-2">团队特点</h5>
                  <div className="text-sm space-y-1">
                    <div>• 年轻化团队，创新思维活跃</div>
                    <div>• 积极性强，探索精神突出</div>
                    <div>• 主动承担AI创新应用研发</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">🛠️ 实际贡献成果</h4>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <h5 className="font-semibold text-blue-800 mb-1">💾 NAS服务器采购</h5>
                  <p className="text-sm text-gray-700">通过工会资金支持，为分公司购置NAS服务器，切实帮助广州移动多位业务人员解决协同办公问题</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <h5 className="font-semibold text-green-800 mb-1">🚁 无人机勘察应用</h5>
                  <p className="text-sm text-gray-700">购置无人机设备，有效辅助了勘察画图工作，提升外勤作业效率</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <h5 className="font-semibold text-purple-800 mb-1">🔧 AI应用研发</h5>
                  <p className="text-sm text-gray-700">承担多个AI创新应用的研发工作，为公司数字化转型贡献力量</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
            <h4 className="text-lg font-semibold text-yellow-800 mb-4">🌟 团队明星成员：施唯</h4>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg border border-yellow-300">
                  <h5 className="font-semibold text-red-600 mb-2">🏆 荣誉称号</h5>
                  <p className="text-lg font-bold text-red-600">2025年科技新星</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-yellow-300">
                  <h5 className="font-semibold text-blue-600 mb-2">📜 专业资质</h5>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span>软考中级：信息系统监理师</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      <span>软考高级：信息系统项目管理师</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>二级造价师</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg border border-yellow-300">
                  <h5 className="font-semibold text-green-600 mb-2">💼 项目业绩</h5>
                  <p className="text-sm text-gray-700 mb-2">承担大量涉密、运维类项目</p>
                  <div className="text-xs text-green-600 font-medium">获得三个甲方商机：</div>
                </div>
                <div className="bg-white p-3 rounded-lg border border-yellow-300">
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                      <span>市委办公厅和市委机保局项目续签</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                      <span>省应急指挥中心运营项目计划续签</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                      <span>市委组织部新发掘项目</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // 第6页：创新工作室突出成果
    {
      title: "创新工作室突出成果",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-yellow-100 to-yellow-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-yellow-800 mb-4">通服集团AI赋能提效创新活动获奖</h3>
            <p className="text-lg text-gray-700">"万众学用"员工群众性AI应用活动奖项</p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">获奖成员</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">施</div>
                  <span className="font-medium">施唯</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">张</div>
                  <span className="font-medium">张健僖</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                  <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">杜</div>
                  <span className="font-medium">杜昱</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">曹</div>
                  <span className="font-medium">曹炳健</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">突出表现</h4>
              <div className="space-y-4">
                <div className="p-4 bg-red-50 rounded-lg">
                  <p className="text-gray-700"><span className="font-semibold">3-6月期间：</span>每月集团两个名额都有南方院七分公司的影子</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="text-gray-700"><span className="font-semibold">当前进展：</span>开展近3个AI应用研发工作</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <p className="text-gray-700"><span className="font-semibold">年底目标：</span>参加"赋能提效"经营管理AI创新活动</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // 第7页：科创比赛积极参与
    {
      title: "科创比赛积极参与",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-indigo-100 to-indigo-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-indigo-800 mb-4">多项科创比赛踊跃参与</h3>
            <p className="text-lg text-gray-700">积极提交AI应用作品，展现创新能力</p>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center space-x-4 p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center">
                <span className="text-sm font-bold">集团</span>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">集团AI应用比赛</h4>
                <p className="text-gray-600">踊跃报名并提交AI应用作品相关材料</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center">
                <span className="text-sm font-bold">电信</span>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">中国电信黑马大赛</h4>
                <p className="text-gray-600">积极参与，展现技术创新实力</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center">
                <span className="text-sm font-bold">星海</span>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">"星海杯"大数据劳动竞赛</h4>
                <p className="text-gray-600">参与大数据应用创新竞赛</p>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <p className="text-gray-700"><span className="font-semibold">后续计划：</span>在工作之余完善创新应用，争取在各项比赛中获得优异成绩</p>
          </div>
        </div>
      )
    },

    // 第8页：广州移动业务流程优化项目
    {
      title: "广州移动业务流程优化项目",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-teal-100 to-teal-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-teal-800 mb-4">2025年广州移动运营商基本盘业务</h3>
            <p className="text-lg text-gray-700">针对项目管理流程繁琐问题的解决方案</p>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <h4 className="text-lg font-semibold text-red-800 mb-4">面临的挑战</h4>
              <p className="text-gray-700">面对广州移动接近5个项目管理流程系统需要大量人员进行填报的问题：</p>
              <div className="mt-4 grid grid-cols-5 gap-2">
                <div className="bg-white p-3 rounded text-center text-sm font-medium">综资系统</div>
                <div className="bg-white p-3 rounded text-center text-sm font-medium">全生命系统</div>
                <div className="bg-white p-3 rounded text-center text-sm font-medium">大数据系统</div>
                <div className="bg-white p-3 rounded text-center text-sm font-medium">PMIS系统</div>
                <div className="bg-white p-3 rounded text-center text-sm font-medium">PMS系统</div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h4 className="text-lg font-semibold text-blue-800 mb-4">领导重视</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">刘伟总经理</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">徐副总经理</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">胡副总经理</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-3">高度重视流程优化工作</p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h4 className="text-lg font-semibold text-green-800 mb-4">解决方案</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                    <span className="text-gray-700">洪浩东牵头实地调研</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                    <span className="text-gray-700">8月初研发效率工具</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                    <span className="text-gray-700">减负员工，提升效率</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // 第9页：遇到的困难与建议
    {
      title: "遇到的困难与建议",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-red-100 to-red-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-red-800 mb-4">工作中遇到的困难与新发现</h3>
            <p className="text-lg text-gray-700">创新工作与日常工作的平衡挑战及AI工具普及需求</p>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">⏰ 时间投入挑战</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs font-bold">!</span>
                  </div>
                  <div>
                    <p className="text-gray-700"><span className="font-semibold">研发时间：</span>很多研发工作或科创基本都是下班时间甚至占用周末休息时间去完成</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs font-bold">!</span>
                  </div>
                  <div>
                    <p className="text-gray-700"><span className="font-semibold">工作压力：</span>在现阶段交付压力都比较大的情况下，也要投入很多时间在做创新工作</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h4 className="text-lg font-semibold text-green-800 mb-4">🚀 AI工具助力快速研发的发现</h4>
              <div className="space-y-4">
                <p className="text-gray-700"><span className="font-semibold text-green-600">重要发现：</span>七分公司能够在工作之余快速研发AI应用和提效工具，核心在于现代AI编程工具的强大能力</p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h5 className="font-semibold text-gray-800 mb-2">🌟 顶级AI编程工具</h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        <span>Cursor (智能编程IDE)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        <span>Claude (代码助手)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span>GitHub Copilot (微软)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                        <span>Trae (字节跳动)</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h5 className="font-semibold text-gray-800 mb-2">⚡ 效率提升效果</h5>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div>• 小型AI应用快速落地</div>
                      <div>• 提效工具快速开发</div>
                      <div>• 大幅降低技术门槛</div>
                      <div>• 显著提高研发效率</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h4 className="text-lg font-semibold text-blue-800 mb-4">💡 希望获得的支持</h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h5 className="font-semibold text-blue-700 mb-2">1. 资金支持</h5>
                  <p className="text-gray-700">希望总部对工作室成员这帮年轻人能够给予一些<span className="font-semibold text-red-600">资金支持</span>，鼓励团队在创新路上的持续投入。</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h5 className="font-semibold text-blue-700 mb-2">2. AI工具订阅支持 🔥</h5>
                  <div className="space-y-2">
                    <p className="text-gray-700"><span className="font-semibold text-orange-600">现状：</span>七分公司项目一部每月额外资助AI编程工具费用，但无法大量普及，费用不低</p>
                    <p className="text-gray-700"><span className="font-semibold text-green-600">建议：</span>希望总部能对七分公司项目一部提供<span className="font-semibold text-blue-600">AI工具订阅支持</span>，包括Cursor、Claude等优质工具</p>
                    <p className="text-gray-700"><span className="font-semibold text-purple-600">价值：</span>更好地辅助员工提升工作效率，大幅提高研发效率</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // 第10页：下一步工作计划
    {
      title: "下一步工作计划",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-100 to-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-green-800 mb-4">未来发展规划</h3>
            <p className="text-lg text-gray-700">持续推进效率提升，扩大创新成果影响力</p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h4 className="text-lg font-semibold text-blue-800 mb-3">工具完善与推广</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">完善广州移动流程优化工具</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">切实减轻员工负担</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">向其他分公司推广应用</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h4 className="text-lg font-semibold text-purple-800 mb-3">比赛与创新</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">完善科创比赛作品</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">争取获得优异成绩</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h4 className="text-lg font-semibold text-yellow-800 mb-4">年底重点目标</h4>
              <div className="bg-white p-4 rounded-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">2025年底</div>
                  <p className="text-lg font-semibold text-gray-800">参加"赋能提效"</p>
                  <p className="text-lg font-semibold text-gray-800">经营管理AI创新活动</p>
                </div>
              </div>
              <div className="mt-4 p-3 bg-gray-50 rounded">
                <p className="text-sm text-gray-600">目标：通过持续创新和工具完善，在年底的重要活动中展现七分公司的创新实力</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // 第11页：总结
    {
      title: "总结",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-blue-800 mb-4 text-center">七分公司生产效率提升工作总结</h3>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">核心成果</h4>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-2">AI赋能</div>
                  <p className="text-sm text-gray-600">多模型平台建设</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-2">团队建设</div>
                  <p className="text-sm text-gray-600">创新工作室成立</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 mb-2">实际应用</div>
                  <p className="text-sm text-gray-600">业务流程优化</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">发展理念</h4>
              <p className="text-lg text-gray-700 text-center leading-relaxed">
                七分公司在AI赋能效率提升方面的积极探索，坚持<span className="font-semibold text-blue-600">团队建设</span>、
                <span className="font-semibold text-green-600">技术创新</span>、<span className="font-semibold text-purple-600">实际应用</span>并重的发展路径
              </p>
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h4 className="text-lg font-semibold text-yellow-800 mb-4 text-center">期待与展望</h4>
              <p className="text-lg text-gray-700 text-center">
                期待总部给予更多支持，共同推进生产效率提升，为公司发展贡献更大力量！
              </p>
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
          <h2 className="text-lg font-semibold text-gray-800">七分公司生产效率提升工作汇报</h2>
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