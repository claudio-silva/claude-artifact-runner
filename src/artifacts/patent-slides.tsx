import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    // 封面
    <div key="title" className="flex flex-col items-center justify-center h-full p-12 text-center bg-gradient-to-b from-white to-blue-50">
      <h1 className="text-4xl font-bold mb-8">一种AI驱动的智能投行服务系统及方法</h1>
      <h2 className="text-2xl text-gray-600 mb-8">专利申请演示</h2>
      <div className="mt-12">
        <p className="text-xl text-gray-500">技术领域：金融科技</p>
      </div>
    </div>,

    // 背景技术
    <div key="background" className="h-full p-12 bg-gradient-to-br from-white to-gray-50">
      <h2 className="text-3xl font-bold mb-8">背景技术</h2>
      <div className="grid grid-cols-2 gap-8 h-4/5">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-4">现有技术问题</h3>
          <ul className="list-disc pl-6 space-y-4 text-lg">
            <li>信息获取和处理效率低下</li>
            <li>决策支持能力不足</li>
            <li>产业链分析不全面</li>
            <li>智能化程度低</li>
            <li>知识管理和共享效率低</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-4">技术瓶颈</h3>
          <ul className="list-disc pl-6 space-y-4 text-lg">
            <li>多源异构数据处理困难</li>
            <li>缺乏市场前瞻性预测能力</li>
            <li>无法动态监控关键节点</li>
            <li>自动化交易能力欠缺</li>
            <li>缺乏智能知识更新机制</li>
          </ul>
        </div>
      </div>
    </div>,

    // 发明内容
    <div key="invention" className="h-full p-12 bg-gradient-to-br from-white to-blue-50">
      <h2 className="text-3xl font-bold mb-8">发明内容</h2>
      <div className="grid grid-cols-2 gap-8 h-4/5">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-4">核心技术创新</h3>
          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li>生物启发的蜂群优化技术</li>
            <li>AI智能搜索技术</li>
            <li>动态全景展示算法</li>
            <li>自我进化的算法决策技术</li>
            <li>大语言模型技术</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-4">系统优势</h3>
          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li>信息处理效率显著提升</li>
            <li>决策精准性和前瞻性增强</li>
            <li>产业链全景动态监控</li>
            <li>智能化服务水平提高</li>
            <li>知识管理效率优化</li>
          </ul>
        </div>
      </div>
    </div>,

    // 技术架构
    <div key="architecture" className="h-full p-12 bg-gradient-to-br from-white to-green-50">
      <h2 className="text-3xl font-bold mb-8">技术架构</h2>
      <div className="grid grid-cols-2 gap-8 h-4/5">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-4">核心功能模块</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-blue-50 rounded-lg">
              <h4 className="font-medium mb-2">信息处理</h4>
              <ul className="list-disc pl-4 text-sm">
                <li>数据采集</li>
                <li>智能解析</li>
                <li>特征提取</li>
              </ul>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <h4 className="font-medium mb-2">决策支持</h4>
              <ul className="list-disc pl-4 text-sm">
                <li>策略生成</li>
                <li>风险评估</li>
                <li>优化建议</li>
              </ul>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg">
              <h4 className="font-medium mb-2">产业分析</h4>
              <ul className="list-disc pl-4 text-sm">
                <li>链路监控</li>
                <li>风险预警</li>
                <li>布局分析</li>
              </ul>
            </div>
            <div className="p-3 bg-yellow-50 rounded-lg">
              <h4 className="font-medium mb-2">知识管理</h4>
              <ul className="list-disc pl-4 text-sm">
                <li>图谱构建</li>
                <li>动态更新</li>
                <li>智能推荐</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-4">技术流程</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center font-bold">1</div>
              <div className="ml-4">数据采集与处理</div>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center font-bold">2</div>
              <div className="ml-4">特征提取与分析</div>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center font-bold">3</div>
              <div className="ml-4">策略生成与优化</div>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center font-bold">4</div>
              <div className="ml-4">产业链分析</div>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center font-bold">5</div>
              <div className="ml-4">知识图谱构建</div>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center font-bold">6</div>
              <div className="ml-4">交易执行与监控</div>
            </div>
          </div>
        </div>
      </div>
    </div>,

    // 实施效果
    <div key="results" className="h-full p-12 bg-gradient-to-br from-white to-purple-50">
      <h2 className="text-3xl font-bold mb-8">实施效果</h2>
      <div className="bg-white p-6 rounded-xl shadow-sm h-4/5">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="p-4 text-lg border">应用场景</th>
              <th className="p-4 text-lg border">关键指标</th>
              <th className="p-4 text-lg border">改进效果</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4 border">信息处理效率</td>
              <td className="p-4 border">日处理500万条数据</td>
              <td className="p-4 border">处理时间缩短75%</td>
            </tr>
            <tr>
              <td className="p-4 border">投资策略优化</td>
              <td className="p-4 border">策略生成时间＜10分钟</td>
              <td className="p-4 border">收益率提升4%</td>
            </tr>
            <tr>
              <td className="p-4 border">风险管控能力</td>
              <td className="p-4 border">预警准确率95%</td>
              <td className="p-4 border">损失规避率提升30%</td>
            </tr>
            <tr>
              <td className="p-4 border">知识服务水平</td>
              <td className="p-4 border">推荐准确率92%</td>
              <td className="p-4 border">用户满意度提升25%</td>
            </tr>
          </tbody>
        </table>
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

export default Presentation;