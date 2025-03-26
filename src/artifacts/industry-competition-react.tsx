import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Brain, TrendingUp, Shield, Clock } from 'lucide-react';

// 全局组件选择器
const ComponentSelector = () => {
  const [isActive, setIsActive] = useState(false);
  const [hoveredElement, setHoveredElement] = useState(null);
  const [selectedElement, setSelectedElement] = useState(null);

  useEffect(() => {
    const handleKeyPress = (e) => {
      // 按Alt + S 开启/关闭选择模式
      if (e.altKey && e.key === 's') {
        setIsActive(prev => !prev);
        setSelectedElement(null);
        setHoveredElement(null);
      }
    };

    const handleMouseOver = (e) => {
      if (!isActive) return;
      e.stopPropagation();
      const element = e.target;
      setHoveredElement(element);
      
      // 添加临时样式
      element.style.outline = '2px dashed #3b82f6';
    };

    const handleMouseOut = (e) => {
      if (!isActive) return;
      e.stopPropagation();
      const element = e.target;
      if (element !== selectedElement) {
        element.style.outline = 'none';
      }
      setHoveredElement(null);
    };

    const handleClick = (e) => {
      if (!isActive) return;
      e.preventDefault();
      e.stopPropagation();
      
      const element = e.target;
      
      // 移除之前选中元素的样式
      if (selectedElement && selectedElement !== element) {
        selectedElement.style.outline = 'none';
      }

      // 设置新选中元素的样式
      element.style.outline = '2px solid #3b82f6';
      setSelectedElement(element);

      // 获取元素的HTML内容
      const elementHtml = element.outerHTML;
      
      // 复制到剪贴板
      navigator.clipboard.writeText(elementHtml);
      
      // 显示提示
      const rect = element.getBoundingClientRect();
      const tooltip = document.createElement('div');
      tooltip.textContent = '已复制组件代码！';
      tooltip.style.position = 'fixed';
      tooltip.style.left = `${rect.left}px`;
      tooltip.style.top = `${rect.top - 30}px`;
      tooltip.style.backgroundColor = '#3b82f6';
      tooltip.style.color = 'white';
      tooltip.style.padding = '4px 8px';
      tooltip.style.borderRadius = '4px';
      tooltip.style.fontSize = '12px';
      tooltip.style.zIndex = '10000';
      
      document.body.appendChild(tooltip);
      setTimeout(() => {
        document.body.removeChild(tooltip);
      }, 2000);
    };

    // 添加全局事件监听
    document.addEventListener('keydown', handleKeyPress);
    document.addEventListener('mouseover', handleMouseOver, true);
    document.addEventListener('mouseout', handleMouseOut, true);
    document.addEventListener('click', handleClick, true);

    // 清理函数
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      document.removeEventListener('mouseover', handleMouseOver, true);
      document.removeEventListener('mouseout', handleMouseOut, true);
      document.removeEventListener('click', handleClick, true);
    };
  }, [isActive, selectedElement]);

  // 显示当前模式的状态指示器
  return isActive ? (
    <div
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        backgroundColor: '#3b82f6',
        color: 'white',
        padding: '8px 16px',
        borderRadius: '4px',
        zIndex: 10000,
        fontSize: '14px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}
    >
      组件选择模式已开启 (Alt + S 关闭)
    </div>
  ) : null;
};

// 市场份额数据
const marketData = [
  { name: '传统医疗IT企业', value: 35 },
  { name: '互联网科技巨头', value: 30 },
  { name: 'AI医疗创新公司', value: 20 },
  { name: '传统医疗器械企业', value: 15 }
];

const COLORS = ['#2563eb', '#3b82f6', '#60a5fa', '#93c5fd'];

const CompetitionCard = ({ icon: Icon, title, content }) => (
  <div className="bg-white rounded-lg p-4 shadow-md flex items-start">
    <Icon className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
    <div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  </div>
);

const ValueCard = ({ title, points }) => (
  <div className="bg-white rounded-lg p-4 shadow-md">
    <h3 className="text-lg font-semibold text-gray-800 mb-3 border-b pb-2">{title}</h3>
    <ul className="space-y-2">
      {points.map((point, index) => (
        <li key={index} className="flex items-center">
          <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
          <span className="text-gray-600">{point}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Slide = () => {
  return (
    <>
      <ComponentSelector />
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-8">
          {/* 标题区域 */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2 pb-2 border-b-2 border-blue-600">
              行业竞争态势及AI价值期望
            </h1>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {/* 左侧：竞争态势分析 */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">竞争格局分析</h2>
              
              {/* 市场份额图表 */}
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">市场参与者分布</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={marketData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {marketData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* 竞争特点 */}
              <div className="grid grid-cols-2 gap-4">
                <CompetitionCard
                  icon={Brain}
                  title="技术壁垒高"
                  content="需要深厚的AI技术积累和医疗专业知识储备"
                />
                <CompetitionCard
                  icon={Shield}
                  title="准入门槛严格"
                  content="医疗行业监管严格，资质要求高"
                />
                <CompetitionCard
                  icon={Clock}
                  title="落地周期长"
                  content="医疗机构决策流程长，试点验证周期长"
                />
                <CompetitionCard
                  icon={TrendingUp}
                  title="区域性明显"
                  content="不同地区医疗政策和需求差异大"
                />
              </div>
            </div>

            {/* 右侧：AI价值分析 */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">AI赋能价值</h2>
              
              <ValueCard
                title="提升医疗服务效率"
                points={[
                  "智能分诊，优化就医流程",
                  "辅助诊断，提高诊断效率",
                  "智能随访，提升患者管理效率"
                ]}
              />
              
              <ValueCard
                title="降低医疗成本"
                points={[
                  "减少人工重复劳动",
                  "优化资源配置",
                  "降低医疗差错率"
                ]}
              />
              
              <ValueCard
                title="提升医疗质量"
                points={[
                  "标准化诊疗流程",
                  "智能辅助决策",
                  "全程质量监控"
                ]}
              />
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slide;