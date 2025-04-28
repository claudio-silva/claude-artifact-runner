import React, { useState } from 'react';
import { LineChart, PieChart, Pie, Sector, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import ReactMarkdown from "react-markdown";

const COLORS = { 
  RED: '#B54369', 
  PURPLE: '#4D44AB', 
  BLUE: '#1B67B2', 
  BLACK: '#202020', 
  GREEN: '#568C1C', 
  ORANGE: '#C77F1A' 
};

const PLOT_CAPTION_STYLE = "text-sm font-semibold text-center text-gray-600 px-10";
const MARKDOWN_STYLE = "py-3 px-10 flex flex-col gap-3 overflow-hidden research-report-content";

const WorkflowOptimizationGuide = () => {
  const [activeSection, setActiveSection] = useState('intro');
  const [activePie, setActivePie] = useState(0);

  const onPieEnter = (_, index) => {
    setActivePie(index);
  };

  const sections = [
    { id: 'intro', name: '介绍' },
    { id: 'vibe-coding', name: 'Vibe Coding方法' },
    { id: 'knowledge-system', name: '知识管理系统' },
    { id: 'workflow-optimization', name: '工作流程优化' },
    { id: 'deep-work', name: '深度工作' },
    { id: 'tools', name: '工具生态整合' },
    { id: 'books', name: '中文书籍推荐' }
  ];

  const workflowEfficiencyData = [
    { name: '传统工作流', 效率指数: 40, 创新指数: 30 },
    { name: 'PARA方法', 效率指数: 65, 创新指数: 50 },
    { name: 'MOC方法', 效率指数: 70, 创新指数: 60 },
    { name: 'Vibe方法', 效率指数: 75, 创新指数: 80 },
    { name: '整合工作流', 效率指数: 90, 创新指数: 85 },
  ];

  const timeAllocationData = [
    { name: '深度工作', value: 40, color: COLORS.BLUE },
    { name: '会议与协作', value: 20, color: COLORS.PURPLE },
    { name: '学习与研究', value: 15, color: COLORS.GREEN },
    { name: '浮浅工作', value: 15, color: COLORS.ORANGE },
    { name: '休息与恢复', value: 10, color: COLORS.RED },
  ];

  const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
      <g>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`${payload.name}: ${value}%`}</text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
          {`(比例: ${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
  };

  const renderContent = () => {
    switch(activeSection) {
      case 'intro':
        return (
          <>
            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`# Vibe Coding及工作流优化指南

              欢迎来到个人工作流优化指南。这份指南基于您当前的工作场景与工具，结合最新的Vibe Coding理念，以及众多研究与实践证明有效的工作流程方法，帮助您重新构建个人工作系统，提升工作效率与创新能力。`}</ReactMarkdown>
            </div>

            <div className="my-3 h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={workflowEfficiencyData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis label={{ value: '指数值', angle: -90, position: 'insideLeft', offset: -10 }} />
                  <Tooltip />
                  <Legend iconType="square" />
                  <Line type="linear" dataKey="效率指数" stroke={COLORS.BLUE} strokeWidth={1.5} dot={{ r: 0 }} activeDot={{ r: 6 }} />
                  <Line type="linear" dataKey="创新指数" stroke={COLORS.RED} strokeWidth={1.5} dot={{ r: 0 }} activeDot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className={PLOT_CAPTION_STYLE}>
              不同工作流方法的效率与创新指数对比
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`## 当前挑战

              在现代工作环境中，我们面临的主要挑战包括：

              1. **信息过载**：每天需要处理海量信息，却难以有效吸收和利用
              2. **注意力分散**：频繁切换任务，无法进入深度工作状态
              3. **工具碎片化**：使用多种工具但缺乏整合，增加了认知负担
              4. **创新瓶颈**：忙于处理日常任务，缺乏系统性思考和创新空间`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`## 核心价值主张

              通过整合Vibe Coding、PARA方法、MOC知识管理和深度工作原则，构建一个个性化的"增强型工作系统"，使您能够：

              1. **提高工作效率**：减少认知切换成本，优化任务处理流程
              2. **增强创造力**：建立知识连接，促进创新思维
              3. **减轻心智负担**：建立可信任的外部系统，解放大脑资源
              4. **实现个人成长**：形成持续学习与改进的正向循环

              点击上方导航栏，开始探索详细的优化方法和实施路径。`}</ReactMarkdown>
            </div>
          </>
        );
      
      case 'vibe-coding':
        return (
          <>
            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`# Vibe Coding方法

              ## 什么是Vibe Coding？`}</ReactMarkdown>
            </div>
            
            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`Vibe Coding（氛围编程）是由OpenAI联合创始人、特斯拉前AI主管Andrej Karpathy于2025年2月提出的一种新型工作范式。`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`其核心理念是利用AI工具(如Claude、Cursor等)来处理复杂工作，让人专注于创意和指导。正如Karpathy所描述的："在这种工作过程中，你完全顺应感觉（vibes）、拥抱AI带来的进步，完全忘记代码的存在。"`}</ReactMarkdown>
            </div>

            <div className="my-3 h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                  <Pie
                    activeIndex={activePie}
                    activeShape={renderActiveShape}
                    data={timeAllocationData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    dataKey="value"
                    onMouseEnter={onPieEnter}
                  >
                    {timeAllocationData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className={PLOT_CAPTION_STYLE}>
              优化后的时间分配建议（悬停查看详情）
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`## Vibe方法的优势

              1. **效率提升**：通过AI自动化处理繁琐任务，专注于高层次思考
              2. **门槛降低**：不需要掌握所有技术细节，就能实现复杂目标
              3. **创意释放**：将认知资源从技术实现转向创意构思和整体设计
              4. **迭代加速**：快速原型和验证想法，缩短从概念到实现的周期`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`## Vibe方法的局限性

              Vibe方法虽然高效，但也存在一些局限性：

              1. **理解深度不足**：可能对生成内容缺乏深入理解
              2. **调试挑战**：出现问题时可能难以诊断和修复
              3. **依赖性风险**：过度依赖AI可能削弱自主解决问题的能力
              4. **规模限制**：对于大型复杂项目，可能需要更系统的方法`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`## 如何将Vibe方法应用到您的工作中`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`### 方案与报告撰写
              - 使用AI生成初始框架和大纲
              - 人工审核和调整关键内容
              - 利用AI进行文本优化和格式调整
              - 建立个人专业语料库，提升AI输出质量`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`### 项目开发与创新
              - 使用AI进行技术选型和架构设计
              - 人机协作实现功能开发
              - 建立"AI+人工"的质量审查流程
              - 利用AI提炼创新点并扩展思路`}</ReactMarkdown>
            </div>
          </>
        );
      
      case 'knowledge-system':
        return (
          <>
            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`# 知识管理系统`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`## PARA方法：结构化知识框架`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`PARA是Projects（项目）、Areas（领域）、Resources（资源）和Archives（归档）的缩写，是一种流行的知识管理方法。`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`它提供了一种在任何工具中组织信息的通用系统，特别适合于数字笔记管理。`}</ReactMarkdown>
            </div>

            <div className="my-6 mx-auto w-full max-w-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-4 bg-blue-50">
                  <h3 className="text-lg font-bold mb-2 text-blue-800">Projects（项目）</h3>
                  <p className="text-sm">有明确目标和截止日期的任务集合</p>
                  <ul className="mt-2 text-sm list-disc list-inside text-gray-700">
                    <li>公司创新AI应用比赛</li>
                    <li>个人创业项目开发</li>
                    <li>月度项目建设方案</li>
                  </ul>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 bg-purple-50">
                  <h3 className="text-lg font-bold mb-2 text-purple-800">Areas（领域）</h3>
                  <p className="text-sm">需要持续关注和维护的责任领域</p>
                  <ul className="mt-2 text-sm list-disc list-inside text-gray-700">
                    <li>Java技术栈</li>
                    <li>Vue前端开发</li>
                    <li>AI应用研究</li>
                    <li>职业发展</li>
                  </ul>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 bg-green-50">
                  <h3 className="text-lg font-bold mb-2 text-green-800">Resources（资源）</h3>
                  <p className="text-sm">按主题组织的参考资料和资源</p>
                  <ul className="mt-2 text-sm list-disc list-inside text-gray-700">
                    <li>AI工具集合</li>
                    <li>方案写作模板</li>
                    <li>行业分析报告</li>
                    <li>学习资源</li>
                  </ul>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <h3 className="text-lg font-bold mb-2 text-gray-800">Archives（归档）</h3>
                  <p className="text-sm">不再活跃但可能有未来参考价值的内容</p>
                  <ul className="mt-2 text-sm list-disc list-inside text-gray-700">
                    <li>已完成项目</li>
                    <li>过往方案</li>
                    <li>历史版本</li>
                    <li>参考记录</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`## MOC方法：构建知识地图`}</ReactMarkdown>
            </div>

            <div className="my-6 mx-auto w-full max-w-2xl">
              <div className="border border-gray-200 rounded-lg p-6 bg-blue-50">
                <h3 className="text-lg font-bold mb-4 text-center text-blue-800">AI应用开发MOC示例</h3>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-3">
                    <div className="border border-blue-200 rounded-lg p-3 bg-white text-center font-bold">
                      AI应用开发
                    </div>
                  </div>
                  
                  <div className="col-span-1">
                    <div className="border border-blue-200 rounded-lg p-2 bg-white text-center">
                      模型选择
                    </div>
                    <div className="flex flex-col mt-2 space-y-2">
                      <div className="border border-blue-100 rounded p-1 bg-blue-50 text-xs text-center">LLM对比</div>
                      <div className="border border-blue-100 rounded p-1 bg-blue-50 text-xs text-center">多模态模型</div>
                      <div className="border border-blue-100 rounded p-1 bg-blue-50 text-xs text-center">特定领域微调</div>
                    </div>
                  </div>
                  
                  <div className="col-span-1">
                    <div className="border border-blue-200 rounded-lg p-2 bg-white text-center">
                      技术架构
                    </div>
                    <div className="flex flex-col mt-2 space-y-2">
                      <div className="border border-blue-100 rounded p-1 bg-blue-50 text-xs text-center">前后端分离</div>
                      <div className="border border-blue-100 rounded p-1 bg-blue-50 text-xs text-center">API设计</div>
                      <div className="border border-blue-100 rounded p-1 bg-blue-50 text-xs text-center">数据流</div>
                    </div>
                  </div>
                  
                  <div className="col-span-1">
                    <div className="border border-blue-200 rounded-lg p-2 bg-white text-center">
                      用户体验
                    </div>
                    <div className="flex flex-col mt-2 space-y-2">
                      <div className="border border-blue-100 rounded p-1 bg-blue-50 text-xs text-center">交互设计</div>
                      <div className="border border-blue-100 rounded p-1 bg-blue-50 text-xs text-center">反馈机制</div>
                      <div className="border border-blue-100 rounded p-1 bg-blue-50 text-xs text-center">可用性测试</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`## 知识图谱方法：构建语义网络`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`知识图谱是一种表示领域知识的语义网络，通过实体和关系来描述概念之间的关联。`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`它可以帮助您建立更加结构化和富有语义的知识库。`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`### 在Typora中实施知识管理体系`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`1. **文件夹结构采用PARA**
                 - 创建四个主文件夹：Projects、Areas、Resources、Archives
                 - 在各个文件夹下建立子文件夹进行细分`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`2. **笔记内容组织**
                 - 每个笔记采用原子化原则，一个概念一个文件
                 - 使用标准化的文件命名规则和元数据
                 - 通过Markdown链接建立笔记之间的关联`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`3. **创建MOC索引文件**
                 - 为每个重要领域创建MOC索引文件
                 - 在MOC中链接所有相关的笔记
                 - 定期回顾和更新MOC，增加新的连接`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`4. **整合AI辅助**
                 - 使用Claude生成笔记摘要和关键点
                 - 借助AI识别笔记之间的潜在关联
                 - 自动化标签和分类建议`}</ReactMarkdown>
            </div>
          </>
        );
      
      case 'workflow-optimization':
        return (
          <>
            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`# 工作流程优化`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`## 整合型工作流：PARA + MOC + Vibe方法`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`整合型工作流将PARA的结构化组织、MOC的关联思维和Vibe方法的AI增强能力结合起来，形成一个完整的个人工作系统。`}</ReactMarkdown>
            </div>

            <div className="my-6 mx-auto w-full max-w-3xl">
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-bold mb-4 text-center">工作流程图</h3>
                
                <div className="flex flex-col space-y-4">
                  <div className="flex justify-center">
                    <div className="bg-blue-100 rounded-lg p-3 border border-blue-200 w-64 text-center">
                      输入：信息、任务、想法
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <div className="bg-purple-100 rounded-lg p-3 border border-purple-200 w-64 text-center">
                      捕获与处理
                      <div className="text-xs mt-1 text-gray-600">使用Typora快速记录</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between">
                    <div className="bg-green-100 rounded-lg p-3 border border-green-200 w-48 text-center">
                      项目与任务管理
                      <div className="text-xs mt-1 text-gray-600">PARA - Projects</div>
                    </div>
                    <div className="bg-orange-100 rounded-lg p-3 border border-orange-200 w-48 text-center">
                      知识管理与组织
                      <div className="text-xs mt-1 text-gray-600">PARA - Areas & Resources</div>
                    </div>
                    <div className="bg-red-100 rounded-lg p-3 border border-red-200 w-48 text-center">
                      归档与参考
                      <div className="text-xs mt-1 text-gray-600">PARA - Archives</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <div className="bg-indigo-100 rounded-lg p-3 border border-indigo-200 w-64 text-center">
                      关联与整合
                      <div className="text-xs mt-1 text-gray-600">MOC方法建立知识连接</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <div className="bg-pink-100 rounded-lg p-3 border border-pink-200 w-64 text-center">
                      AI增强与执行
                      <div className="text-xs mt-1 text-gray-600">Vibe方法提高效率与创新</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <div className="bg-green-100 rounded-lg p-3 border border-green-200 w-64 text-center">
                      输出：高质量、高创新的工作成果
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`## 系统化创新方法`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`将创新从偶然的灵感转变为可系统化、可重复的过程，是提升工作价值的关键。`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`### 设计思维+TRIZ整合`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`1. **同理心阶段**：使用AI辅助收集和分析用户需求`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`2. **定义阶段**：应用TRIZ矛盾分析，明确核心问题`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`3. **构思阶段**：结合Vibe方法进行创意发散`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`4. **原型阶段**：使用AI快速生成原型和模型`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`5. **测试阶段**：建立系统化的反馈收集和分析机制`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`### 创意孵化系统`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`建立"创意库"，定期记录灵感和想法碎片，并安排时间进行审查和发展。`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`### 跨领域知识整合`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`有意识地学习核心专业以外的领域知识，建立"类比数据库"，收集不同领域的解决方案模式。`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`## 高效执行系统`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`### 二阶段项目方法`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`- **探索阶段**：允许发散思考，测试多种可能性`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`- **执行阶段**：聚焦最佳路径，严格控制范围变更`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`### 深度工作结构`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`- 实施"深度工作"时段，完全屏蔽干扰`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`- 建立"启动仪式"，快速进入心流状态`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`- 使用时间块技术（如番茄工作法）和任务分解`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`### 反馈循环优化`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`建立快速反馈系统，缩短验证周期，创建"学习日志"，记录每个项目的经验。`}</ReactMarkdown>
            </div>
          </>
        );
      
      case 'deep-work':
        return (
          <>
            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`# 深度工作`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`## 什么是深度工作？`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`深度工作（Deep Work）是指在无干扰的状态下专注进行的职业活动，使个人的认知能力达到极限。`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`这种工作能够创造新价值，提升技能，而且难以复制。相对应的是浮浅工作（Shallow Work），指对认知要求不高的事务性任务，往往在受到干扰的情况下开展。`}</ReactMarkdown>
            </div>
            
            <div className="my-6 mx-auto w-full max-w-3xl">
              <div className="grid grid-cols-2 gap-8">
                <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                  <h3 className="text-lg font-bold mb-3 text-blue-800">深度工作的特征</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-200 text-blue-800 mr-2 flex-shrink-0">1</span>
                      <span>需要高度集中注意力</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-200 text-blue-800 mr-2 flex-shrink-0">2</span>
                      <span>应用复杂的知识和技能</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-200 text-blue-800 mr-2 flex-shrink-0">3</span>
                      <span>创造高价值和难以复制的成果</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-200 text-blue-800 mr-2 flex-shrink-0">4</span>
                      <span>能够提升专业技能</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-200 text-blue-800 mr-2 flex-shrink-0">5</span>
                      <span>通常需要较长的无干扰时间</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-red-50 rounded-lg p-6 border border-red-200">
                  <h3 className="text-lg font-bold mb-3 text-red-800">浮浅工作的特征</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-red-200 text-red-800 mr-2 flex-shrink-0">1</span>
                      <span>对认知要求不高</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-red-200 text-red-800 mr-2 flex-shrink-0">2</span>
                      <span>可以在分心状态下完成</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-red-200 text-red-800 mr-2 flex-shrink-0">3</span>
                      <span>创造价值有限</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-red-200 text-red-800 mr-2 flex-shrink-0">4</span>
                      <span>容易被替代或自动化</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-red-200 text-red-800 mr-2 flex-shrink-0">5</span>
                      <span>频繁切换任务</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`## 深度工作的四种哲学`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`根据个人工作性质和环境，可以选择不同的深度工作策略：

              1. **禁欲主义哲学**：完全隔离自己，消除所有干扰源（适合需要极度专注的创作者）
              2. **双峰哲学**：将时间分为深度时间和浮浅时间两块（适合有固定工作安排的人）
              3. **节奏哲学**：将深度工作转化为日常习惯（适合工作相对规律的人）
              4. **记者哲学**：能在各种环境中迅速切换到深度状态（适合时间碎片化严重的人）`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`## 深度工作的实施策略`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`### 策略1：明确深度工作的重要性`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`1. 量化深度工作的价值`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`2. 设定清晰的深度工作目标`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`3. 建立衡量深度工作的指标`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`### 策略2：建立深度工作的仪式`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`1. 选择固定的工作地点`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`2. 设定明确的时间界限`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`3. 建立启动和结束的仪式`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`4. 准备必要的工具和资源`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`### 策略3：远离浮浅活动`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`1. 减少社交媒体使用`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`2. 批量处理电子邮件`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`3. 设定"难以联系"时段`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`4. 培养对无聊的忍耐力`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`### 策略4：拥抱无聊和休息`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`1. 安排定期的离线时间`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`2. 进行"生产性冥想"`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`3. 重视充分的睡眠和休息`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`4. 培养有意识的休闲活动`}</ReactMarkdown>
            </div>
          </>
        );
      
      case 'tools':
        return (
          <>
            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`# 工具生态整合`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`## Typora + Cursor + Claude整合策略`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`### Typora作为知识管理中心`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`1. **文件结构设计**`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`- 采用PARA方法组织一级文件夹`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`- 在每个PARA类别下创建适当的子文件夹`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`- 为重要主题创建MOC索引文件`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`2. **笔记模板系统**`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`- 创建标准化的笔记模板，包含元数据区域`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`- 设计项目笔记、会议笔记、参考笔记等不同类型的模板`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`- 在模板中加入链接和标签区域`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`3. **文件命名与标记规范**`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`- 采用一致的文件命名规则（如日期+类型+主题）`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`- 使用统一的标签体系`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`- 建立清晰的链接约定`}</ReactMarkdown>
            </div>
          </>
        );
      
      case 'books':
        return (
          <>
            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`# 中文书籍推荐`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`## 深度工作与专注力`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`1. **《深度工作：如何有效使用每一点脑力》**`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`- 作者：卡尔·纽波特（Cal Newport）`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`- 出版社：中信出版社`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`- 内容：讲述如何在分心的世界中专注工作，提高认知能力`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`- 推荐理由：这本书全面讲解了深度工作的概念、价值和具体实践方法，特别适合想要提高工作质量和效率的知识工作者`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`2. **《专注力：集中精力、保持专注、高效学习的25种方法》**`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`- 作者：克里斯·贝利（Chris Bailey）`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`- 出版社：中国青年出版社`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`- 内容：提供了25种提高专注力的实用技巧和方法`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`- 推荐理由：作者亲身实验各种提高专注力的方法，内容实用且易于实践`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`## 知识管理与效率提升`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`3. **《为什么精英都是时间控》**`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`- 作者：丹尼尔·平克（Daniel Pink）`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`- 出版社：浙江人民出版社`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`- 内容：探讨时间心理学和高效时间管理策略`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`- 推荐理由：结合了科学研究和实践经验，帮助读者理解最佳工作时机和节奏`}</ReactMarkdown>
            </div>

            <div className="my-6 grid grid-cols-2 gap-6 mx-auto w-full max-w-3xl">
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                <div className="p-4 bg-blue-50 border-b border-gray-200">
                  <h3 className="font-bold text-blue-800">《知识图谱：方法、实践与应用》</h3>
                  <p className="text-sm text-gray-600">王昊奋、漆桂林、陈华钧 主编</p>
                </div>
                <div className="p-4">
                  <p className="text-sm mb-3">系统介绍知识图谱的关键技术、方法和应用，涵盖知识建模、关系抽取、图存储等多个方面。</p>
                  <p className="text-sm text-gray-700"><strong>适合人群：</strong>对AI和知识工程感兴趣的技术从业者和研究人员</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                <div className="p-4 bg-green-50 border-b border-gray-200">
                  <h3 className="font-bold text-green-800">《知识图谱实战：构建方法与行业应用》</h3>
                  <p className="text-sm text-gray-600">于俊、李雅洁等</p>
                </div>
                <div className="p-4">
                  <p className="text-sm mb-3">从零开始构建知识图谱的详细指南，结合了实际业务案例和应用场景。</p>
                  <p className="text-sm text-gray-700"><strong>适合人群：</strong>需要实践知识图谱的开发者和项目经理</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                <div className="p-4 bg-purple-50 border-b border-gray-200">
                  <h3 className="font-bold text-purple-800">《离线》</h3>
                  <p className="text-sm text-gray-600">缪定纲</p>
                </div>
                <div className="p-4">
                  <p className="text-sm mb-3">探讨了数字时代如何保持独立思考和深度专注，以及信息过载对我们思维方式的影响。</p>
                  <p className="text-sm text-gray-700"><strong>适合人群：</strong>关注数字生活与心理健康平衡的现代人</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                <div className="p-4 bg-orange-50 border-b border-gray-200">
                  <h3 className="font-bold text-orange-800">《卡片笔记写作法》</h3>
                  <p className="text-sm text-gray-600">申克·阿伦斯</p>
                </div>
                <div className="p-4">
                  <p className="text-sm mb-3">介绍了知名的Zettelkasten卡片盒笔记法，帮助读者建立个人知识管理系统，促进创造性思考。</p>
                  <p className="text-sm text-gray-700"><strong>适合人群：</strong>研究者、作家和需要管理大量信息的知识工作者</p>
                </div>
              </div>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`## AI时代的工作与学习`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`5. **《人工智能时代的思考：如何在AI时代保持竞争力》**`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`- 作者：李开复、王咏刚`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`- 出版社：文化发展出版社`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`- 内容：分析AI时代的工作变革和人类竞争力的核心`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`- 推荐理由：帮助读者了解AI时代的工作趋势和必备能力`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`6. **《人工智能赋能知识管理》**`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`- 作者：柯文达`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`- 出版社：电子工业出版社`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`- 内容：探讨AI如何改变知识管理和学习方式`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`- 推荐理由：将AI与知识管理结合，提供了实用的工具和方法`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`## 创新思维与方法论`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`7. **《认知尺度：如何在信息过载的时代进行独立思考》**`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`- 作者：刘未鹏`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`- 出版社：人民邮电出版社`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`- 内容：探讨如何在信息爆炸时代保持独立思考`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`- 推荐理由：帮助读者建立批判性思维和信息过滤机制`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`8. **《创新算法：TRIZ系统创新和技术创造力》**`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`- 作者：根里奇·阿奇舒勒（Genrich Altshuller）`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`- 出版社：机械工业出版社`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`- 内容：介绍TRIZ创新方法论和系统性解决问题的工具`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`- 推荐理由：提供了结构化的创新思维框架，可以应用于各种领域`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`## 阅读建议`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`对于时间有限的读者，建议优先阅读《深度工作》和《卡片笔记写作法》这两本书，它们分别解决了"如何高效工作"和"如何管理知识"两个核心问题，可以作为建立个人工作系统的基础。`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`随后可以根据个人需求和兴趣，选择性地阅读其他推荐书籍，逐步完善自己的工作方法和知识体系。`}</ReactMarkdown>
            </div>

            <div className={MARKDOWN_STYLE}>
              <ReactMarkdown>{`记住，阅读是为了行动。每读完一本书，尝试将其中的一两个核心方法应用到自己的工作中，并在实践中不断调整和优化。`}</ReactMarkdown>
            </div>
          </>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="flex justify-center min-h-screen antialiased relative" style={{ backgroundColor: "white", color: "#202020" }}>
      <div className="w-full max-w-4xl">
        <div className="sticky top-0 z-10 bg-white shadow-md">
          <div className="px-4 py-3 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-center">Vibe Coding及工作流优化指南</h1>
          </div>
          <div className="flex overflow-x-auto scrollbar-hide whitespace-nowrap px-4 py-2 border-b border-gray-200">
            {sections.map(section => (
              <button
                key={section.id}
                className={`px-4 py-2 mx-1 rounded-md transition-colors ${
                  activeSection === section.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveSection(section.id)}
              >
                {section.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="p-4">
          {renderContent()}
        </div>
        
        <div className="p-4 my-4 bg-gray-50 rounded-lg border border-gray-200">
          <h2 className="text-xl font-bold mb-2">实施路径建议</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="border border-blue-200 rounded-lg p-4 bg-blue-50">
              <h3 className="font-bold text-blue-800 mb-2">短期行动（1-4周）</h3>
              <ul className="text-sm space-y-1">
                <li>• 工作流程审计与分析</li>
                <li>• 在Typora中建立PARA结构</li>
                <li>• 设置深度工作时段</li>
                <li>• 优化Claude提示模板</li>
              </ul>
            </div>
            
            <div className="border border-purple-200 rounded-lg p-4 bg-purple-50">
              <h3 className="font-bold text-purple-800 mb-2">中期发展（1-3个月）</h3>
              <ul className="text-sm space-y-1">
                <li>• 创建主要领域的MOC</li>
                <li>• 建立AI辅助工作流</li>
                <li>• 实践系统化创新方法</li>
                <li>• 优化工具间的数据流</li>
              </ul>
            </div>
            
            <div className="border border-green-200 rounded-lg p-4 bg-green-50">
              <h3 className="font-bold text-green-800 mb-2">长期愿景（6个月+）</h3>
              <ul className="text-sm space-y-1">
                <li>• 发展完整知识花园</li>
                <li>• 掌握多种创新方法</li>
                <li>• 建立自我进化工作系统</li>
                <li>• 形成独特个人工作风格</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowOptimizationGuide;
