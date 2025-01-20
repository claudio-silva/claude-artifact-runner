import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';

const PresentationExtended = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    // 技术创新点
    <div key="innovation" className="h-full p-12 bg-gradient-to-br from-white to-purple-50">
      <h2 className="text-3xl font-bold mb-8">技术创新点</h2>
      <div className="grid grid-cols-2 gap-8 h-4/5">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-4">智能数据处理</h3>
          <div className="space-y-4">
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">蜂群优化采集</h4>
              <p className="text-gray-600">动态调整数据采集策略，优化采集路径和频率</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">多源数据融合</h4>
              <p className="text-gray-600">异构数据智能整合，自动化标准化处理</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">特征表示学习</h4>
              <p className="text-gray-600">多层次特征提取，高维特征自适应融合</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-4">智能决策系统</h3>
          <div className="space-y-4">
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">自我进化算法</h4>
              <p className="text-gray-600">策略动态优化，市场适应性强</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">全景链路分析</h4>
              <p className="text-gray-600">产业链实时监控，风险智能预警</p>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">知识图谱更新</h4>
              <p className="text-gray-600">知识动态演进，个性化推荐</p>
            </div>
          </div>
        </div>
      </div>
    </div>,

    // 核心算法
    <div key="algorithms" className="h-full p-12 bg-gradient-to-br from-white to-blue-50">
      <h2 className="text-3xl font-bold mb-8">核心算法</h2>
      <div className="grid grid-cols-2 gap-8 h-4/5">
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4">数据采集优化算法</h3>
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="text-lg mb-2">蜂群优化公式：</div>
              <div className="text-lg bg-white p-3 rounded border">
                min(C = Σ(αᵢ·fᵢ(t)·d(Pᵢ(t), Pⱼ(t)) + βᵢ·Eᵢ(t)))
              </div>
              <div className="mt-2 text-gray-600">
                动态优化数据采集路径和频率，减少冗余信息
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4">策略优化算法</h3>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="text-lg mb-2">迭代优化公式：</div>
              <div className="text-lg bg-white p-3 rounded border">
                Sᶜ(t+1) = Sᶜ(t) + α·(Wᵣ·H - γ·Sᶜ(t))
              </div>
              <div className="mt-2 text-gray-600">
                自适应调整投资策略，应对市场变化
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4">特征表示学习</h3>
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="text-lg mb-2">分层特征表示：</div>
              <div className="text-lg bg-white p-3 rounded border">
                hₖ(l) = σ(Wₗ·hₖ(l-1) + bₗ)
              </div>
              <div className="mt-2 text-gray-600">
                多层次特征提取与融合，提升表示能力
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4">知识图谱更新</h3>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <div className="text-lg mb-2">动态更新公式：</div>
              <div className="text-lg bg-white p-3 rounded border">
                Gₜᶰᵉʷ = Gₜ + α·(Σγⱼ·dUᵦⱼ/dt + Σδₖ·dMₜₖ/dt)
              </div>
              <div className="mt-2 text-gray-600">
                基于用户行为和市场变化动态调整
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,

    // 应用案例
    <div key="cases" className="h-full p-12 bg-gradient-to-br from-white to-green-50">
      <h2 className="text-3xl font-bold mb-8">应用案例分析</h2>
      <div className="grid grid-cols-2 gap-8 h-4/5">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-4">投资策略优化案例</h3>
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">场景描述</h4>
              <p className="text-gray-600">市场剧烈波动情况下的投资组合优化</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">技术应用</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>10分钟内完成组合优化</li>
                <li>日处理1亿条市场数据</li>
                <li>实时策略调整与执行</li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">实施效果</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>投资收益率提升4%</li>
                <li>避免5%潜在亏损</li>
                <li>客户满意度显著提升</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-4">供应链风险预警案例</h3>
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">场景描述</h4>
              <p className="text-gray-600">汽车制造业供应链断链风险预警</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">技术应用</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>24小时内风险识别</li>
                <li>覆盖1000+企业供应链</li>
                <li>5TB产业链数据分析</li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">实施效果</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>避免500万元潜在损失</li>
                <li>预警准确率达95%</li>
                <li>风险处置时间缩短80%</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>,

    // 系统性能
    <div key="performance" className="h-full p-12 bg-gradient-to-br from-white to-yellow-50">
      <h2 className="text-3xl font-bold mb-8">系统性能指标</h2>
      <div className="grid grid-cols-2 gap-8 h-4/5">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-4">核心性能指标</h3>
          <div className="space-y-4">
            <div className="flex items-center p-4 bg-blue-50 rounded-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-xl font-bold">
                4x
              </div>
              <div className="ml-4">
                <h4 className="font-medium">数据处理效率</h4>
                <p className="text-gray-600">处理时间缩短75%</p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-green-50 rounded-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-xl font-bold">
                95%
              </div>
              <div className="ml-4">
                <h4 className="font-medium">预警准确率</h4>
                <p className="text-gray-600">风险预测准确性</p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-purple-50 rounded-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-xl font-bold">
                92%
              </div>
              <div className="ml-4">
                <h4 className="font-medium">推荐准确率</h4>
                <p className="text-gray-600">知识服务精准度</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-4">系统能力提升</h3>
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-3 text-left border">性能维度</th>
                <th className="p-3 text-left border">提升效果</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border">数据处理量</td>
                <td className="p-3 border">日处理5TB数据</td>
              </tr>
              <tr>
                <td className="p-3 border">响应时间</td>
                <td className="p-3 border">平均＜10分钟</td>
              </tr>
              <tr>
                <td className="p-3 border">系统稳定性</td>
                <td className="p-3 border">可用性99.9%</td>
              </tr>
              <tr>
                <td className="p-3 border">算法迭代</td>
                <td className="p-3 border">周期缩短60%</td>
              </tr>
              <tr>
                <td className="p-3 border">成本节约</td>
                <td className="p-3 border">运营成本降低40%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ];

  return (
    <Card className="w-full aspect-video max-h-[80vh]">
      <div className="h-full">
        {slides[currentSlide]}
        <div className="absolute bottom-4 w-full flex justify-between items-center px-8">
          <button 
            onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
            className="p-2 bg-white rounded-full shadow hover:bg-gray-50 transition-colors"
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="text-lg font-medium">
            {currentSlide + 1} / {slides.length}
          </div>
          <button 
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            className="p-2 bg-white rounded-full shadow hover:bg-gray-50 transition-colors"
            disabled={currentSlide === slides.length - 1}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </Card>
  );
};

export default PresentationExtended;