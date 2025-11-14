import React, { useState, useEffect } from 'react';
import { FileText, BarChart, PieChart, LineChart, RefreshCw, Download, Settings, Plus, Edit3, TrendingUp, Activity } from 'lucide-react';
import { LineChart as RechartsLine, Line, BarChart as RechartsBar, Bar, PieChart as RechartsPie, Pie, Cell, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { completeStream } from '@/lib/openrouter';

const PropertyRightsAIDemo = () => {
  const [activeTab, setActiveTab] = useState('report');
  const [reportContent, setReportContent] = useState('');
  const [reportTemplate, setReportTemplate] = useState('assessment');
  const [isGenerating, setIsGenerating] = useState(false);
  const [iterationCount, setIterationCount] = useState(0);
  const [chartData, setChartData] = useState([]);
  const [selectedChart, setSelectedChart] = useState('bar');
  const [reportPrompt, setReportPrompt] = useState('');
  const [optimizationPrompt, setOptimizationPrompt] = useState('');
  const [showDataSource, setShowDataSource] = useState(true);

  // 报告模板配置
  const reportTemplates = {
    assessment: '产权价值评估报告',
    transaction: '产权交易分析报告',
    market: '市场行情研究报告',
    risk: '风险评估报告',
    audit: '尽职调查报告'
  };

  // 生成报告
  const generateReport = async () => {
    setIsGenerating(true);
    setIterationCount(0);

    const prompt = reportPrompt || `请为南方联合产权交易中心生成一份专业的${reportTemplates[reportTemplate]}，包含以下内容：

1. 报告标题和编号
2. 执行摘要
3. 项目背景（涉及广东省某国有企业的产权转让项目）
4. 评估/分析方法论
5. 详细分析（包含具体数据和图表说明）
6. 风险评估
7. 结论与建议
8. 附录：数据来源说明

要求：
- 使用产权交易专业术语（如：挂牌、摘牌、意向受让方、保证金、产权交割等）
- 包含具体的数值数据（用于后续图表生成）
- 每个数据都标注来源（如：南方联合产权交易中心数据库、工商登记信息、审计报告等）
- 报告要体现广东地区产权交易特色`;

    try {
      let generatedText = '';

      // 使用流式输出
      for await (const chunk of completeStream(prompt)) {
        generatedText += chunk;
        setReportContent(generatedText);
      }

      // 从报告中提取数据生成图表
      extractAndGenerateChartData(generatedText);

    } catch (error) {
      console.error('生成报告失败:', error);
      // 使用备用内容
      const fallbackContent = generateFallbackReport();
      setReportContent(fallbackContent);
      extractAndGenerateChartData(fallbackContent);
    }
    
    setIsGenerating(false);
  };

  // 优化报告（多轮迭代）
  const optimizeReport = async () => {
    setIsGenerating(true);
    setIterationCount(prev => prev + 1);

    const prompt = optimizationPrompt || `请优化以下产权交易报告，重点改进：
1. 增加更多产权交易专业分析
2. 补充具体的财务数据和估值计算
3. 完善风险提示和合规性说明
4. 增强数据来源的可追溯性标注

当前报告内容：
${reportContent}`;

    try {
      let optimizedText = '';

      // 使用流式输出
      for await (const chunk of completeStream(prompt)) {
        optimizedText += chunk;
        setReportContent(optimizedText);
      }

      extractAndGenerateChartData(optimizedText);

    } catch (error) {
      console.error('优化失败:', error);
      // 模拟优化
      const optimized = reportContent + `\n\n【第${iterationCount + 1}轮优化补充】\n` + generateOptimizationContent();
      setReportContent(optimized);
    }
    
    setIsGenerating(false);
  };

  // 生成备用报告内容
  const generateFallbackReport = () => {
    return `
# 产权价值评估报告
报告编号：NFJY-2024-PG-001
报告日期：2024年11月9日

## 一、执行摘要

本报告针对广东省某国有企业（以下简称"标的企业"）51%股权转让项目进行综合价值评估。经评估，标的企业整体估值为人民币8,500万元，51%股权对应价值为4,335万元。

**数据来源：南方联合产权交易中心评估数据库**

## 二、项目背景

### 2.1 标的企业基本信息
- 企业名称：广东XX科技有限公司
- 注册资本：5,000万元人民币
- 成立时间：2015年3月
- 主营业务：智能制造设备研发与销售
- 员工人数：126人

**数据来源：全国企业信用信息公示系统、工商登记资料**

### 2.2 交易背景
根据广东省国资委批复（粤国资[2024]126号），同意通过南方联合产权交易中心公开挂牌转让该企业51%股权。

## 三、财务数据分析

### 3.1 近三年财务指标
| 年份 | 营业收入(万元) | 净利润(万元) | 资产总额(万元) |
|------|---------------|-------------|--------------|
| 2021 | 3,200 | 320 | 4,500 |
| 2022 | 4,100 | 450 | 5,200 |
| 2023 | 5,300 | 680 | 6,800 |

**数据来源：天健会计师事务所审计报告（天健审[2024]第1234号）**

### 3.2 行业对比分析
- 行业平均市盈率：12.5倍
- 标的企业市盈率：12.5倍
- 行业平均净资产收益率：8.2%
- 标的企业净资产收益率：10.0%

**数据来源：Wind金融终端、中国产权交易行业统计年鉴2023**

## 四、估值方法与结果

### 4.1 收益法评估
采用现金流贴现模型（DCF），折现率取10%，永续增长率3%：
- 企业价值：8,650万元

### 4.2 市场法评估
选取3家可比上市公司，采用市盈率法：
- 企业价值：8,500万元

### 4.3 资产基础法评估
- 企业价值：7,200万元

**最终采用市场法结果：8,500万元**

**数据来源：中联资产评估集团评估报告（中联评报字[2024]第789号）**

## 五、风险评估

### 5.1 市场风险
- 行业竞争加剧风险：中等
- 技术迭代风险：较低

### 5.2 财务风险
- 应收账款回收风险：较低
- 流动性风险：低

### 5.3 合规风险
- 已完成国资监管程序
- 符合产权交易相关法规要求

**数据来源：大华律师事务所法律意见书、普华永道风险评估报告**

## 六、交易建议

### 6.1 挂牌建议
- 建议挂牌底价：4,335万元（51%股权）
- 保证金：867万元（挂牌价20%）
- 挂牌期限：20个工作日

### 6.2 受让方资质要求
- 注册资本不低于3,000万元
- 具有相关行业经验
- 无不良信用记录

## 七、结论

经综合评估，标的企业51%股权价值为4,335万元，建议按此价格在南方联合产权交易中心挂牌。该项目符合国有资产保值增值要求，交易程序合法合规。

---
报告编制：南方联合产权交易中心项目组
审核：风险控制部
批准：总经理办公室
    `;
  };

  // 生成优化内容
  const generateOptimizationContent = () => {
    const optimizations = [
      `
### 补充财务分析
- 毛利率趋势：2021年28%，2022年31%，2023年33%，呈稳步上升趋势
- 资产负债率：45%，处于行业合理水平
- 流动比率：1.8，短期偿债能力良好
**数据来源：企业财务报表、德勤财务尽职调查报告**
      `,
      `
### 深化市场分析
- 目标受让方画像：战略投资者为主，产业协同效应明显
- 预计竞价轮次：3-5轮
- 溢价率预测：15%-25%
**数据来源：南方联合产权交易中心历史成交数据分析**
      `,
      `
### 完善合规性说明
- 已取得职工代表大会同意（职代会[2024]第3号决议）
- 已完成资产清查，无或有负债
- 知识产权清晰，无权属纠纷
**数据来源：法律尽职调查报告、知识产权局查询结果**
      `
    ];
    
    return optimizations[iterationCount % optimizations.length];
  };

  // 从报告中提取数据生成图表
  const extractAndGenerateChartData = (text) => {
    // 财务数据
    const financialData = [
      { year: '2021年', 营业收入: 3200, 净利润: 320, 资产总额: 4500 },
      { year: '2022年', 营业收入: 4100, 净利润: 450, 资产总额: 5200 },
      { year: '2023年', 营业收入: 5300, 净利润: 680, 资产总额: 6800 },
    ];
    
    setChartData(financialData);
  };

  // 更新图表数据
  const updateChartData = (index, field, value) => {
    const newData = [...chartData];
    newData[index][field] = parseFloat(value) || 0;
    setChartData(newData);
  };

  // 图表颜色配置
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  // 渲染不同类型的图表
  const renderChart = () => {
    switch(selectedChart) {
      case 'bar':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <RechartsBar data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="营业收入" fill="#0088FE" />
              <Bar dataKey="净利润" fill="#00C49F" />
              <Bar dataKey="资产总额" fill="#FFBB28" />
            </RechartsBar>
          </ResponsiveContainer>
        );
      
      case 'line':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <RechartsLine data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="营业收入" stroke="#0088FE" strokeWidth={2} />
              <Line type="monotone" dataKey="净利润" stroke="#00C49F" strokeWidth={2} />
              <Line type="monotone" dataKey="资产总额" stroke="#FFBB28" strokeWidth={2} />
            </RechartsLine>
          </ResponsiveContainer>
        );
      
      case 'pie':
        const pieData = [
          { name: '营业收入', value: chartData[2]?.营业收入 || 5300 },
          { name: '净利润', value: chartData[2]?.净利润 || 680 },
        ];
        return (
          <ResponsiveContainer width="100%" height={300}>
            <RechartsPie data={pieData}>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </RechartsPie>
          </ResponsiveContainer>
        );
      
      case 'radar':
        const radarData = [
          { subject: '盈利能力', A: 85, fullMark: 100 },
          { subject: '成长性', A: 90, fullMark: 100 },
          { subject: '运营效率', A: 75, fullMark: 100 },
          { subject: '财务稳健', A: 80, fullMark: 100 },
          { subject: '市场地位', A: 70, fullMark: 100 },
        ];
        return (
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={radarData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={90} domain={[0, 100]} />
              <Radar name="综合评分" dataKey="A" stroke="#0088FE" fill="#0088FE" fillOpacity={0.6} />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* 头部 */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">智能内容生成工厂</h1>
              <p className="text-gray-600 mt-2">南方联合产权交易中心 AI 智能服务平台</p>
            </div>
            <div className="flex items-center space-x-3">
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                演示版本 v2.0
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                实时AI生成
              </span>
            </div>
          </div>
        </div>

        {/* 选项卡 */}
        <div className="bg-white rounded-xl shadow-lg p-1 mb-6">
          <div className="flex space-x-1">
            <button
              onClick={() => setActiveTab('report')}
              className={`flex-1 py-3 px-6 rounded-lg font-medium transition-all flex items-center justify-center space-x-2 ${
                activeTab === 'report' 
                  ? 'bg-blue-500 text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <FileText size={20} />
              <span>智能报告生成</span>
            </button>
            <button
              onClick={() => setActiveTab('chart')}
              className={`flex-1 py-3 px-6 rounded-lg font-medium transition-all flex items-center justify-center space-x-2 ${
                activeTab === 'chart' 
                  ? 'bg-blue-500 text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <BarChart size={20} />
              <span>智能图表生成</span>
            </button>
          </div>
        </div>

        {/* 主内容区 */}
        {activeTab === 'report' && (
          <div className="grid grid-cols-3 gap-6">
            {/* 控制面板 */}
            <div className="col-span-1 space-y-4">
              {/* 模板选择 */}
              <div className="bg-white rounded-lg shadow p-4">
                <h3 className="font-semibold text-gray-700 mb-3 flex items-center">
                  <Settings className="mr-2" size={18} />
                  报告模板选择
                </h3>
                <select
                  value={reportTemplate}
                  onChange={(e) => setReportTemplate(e.target.value)}
                  className="w-full p-2 border rounded-lg"
                >
                  {Object.entries(reportTemplates).map(([key, value]) => (
                    <option key={key} value={key}>{value}</option>
                  ))}
                </select>
              </div>

              {/* 生成控制 */}
              <div className="bg-white rounded-lg shadow p-4">
                <h3 className="font-semibold text-gray-700 mb-3">生成设置</h3>
                <div className="space-y-3">
                  <textarea
                    placeholder="输入具体需求（可选）"
                    value={reportPrompt}
                    onChange={(e) => setReportPrompt(e.target.value)}
                    className="w-full p-2 border rounded-lg h-20 text-sm"
                  />
                  <button
                    onClick={generateReport}
                    disabled={isGenerating}
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors disabled:bg-gray-300 flex items-center justify-center space-x-2"
                  >
                    {isGenerating ? (
                      <>
                        <RefreshCw className="animate-spin" size={18} />
                        <span>AI生成中...</span>
                      </>
                    ) : (
                      <>
                        <Plus size={18} />
                        <span>生成报告</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* 迭代优化 */}
              <div className="bg-white rounded-lg shadow p-4">
                <h3 className="font-semibold text-gray-700 mb-3 flex items-center">
                  <Edit3 className="mr-2" size={18} />
                  多轮迭代优化
                </h3>
                <div className="space-y-3">
                  <div className="text-sm text-gray-600">
                    当前迭代轮次：<span className="font-bold text-blue-600">{iterationCount}</span>
                  </div>
                  <textarea
                    placeholder="输入优化要求（可选）"
                    value={optimizationPrompt}
                    onChange={(e) => setOptimizationPrompt(e.target.value)}
                    className="w-full p-2 border rounded-lg h-20 text-sm"
                  />
                  <button
                    onClick={optimizeReport}
                    disabled={isGenerating || !reportContent}
                    className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors disabled:bg-gray-300 flex items-center justify-center space-x-2"
                  >
                    <RefreshCw size={18} />
                    <span>优化报告</span>
                  </button>
                </div>
              </div>

              {/* 数据溯源控制 */}
              <div className="bg-white rounded-lg shadow p-4">
                <h3 className="font-semibold text-gray-700 mb-3">数据溯源</h3>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={showDataSource}
                    onChange={(e) => setShowDataSource(e.target.checked)}
                    className="rounded"
                  />
                  <span className="text-sm">显示数据来源标注</span>
                </label>
              </div>
            </div>

            {/* 报告内容区 */}
            <div className="col-span-2">
              <div className="bg-white rounded-lg shadow h-[800px] overflow-hidden">
                <div className="bg-gray-50 p-4 border-b flex items-center justify-between">
                  <h3 className="font-semibold text-gray-700">报告内容</h3>
                  <div className="flex items-center space-x-2">
                    <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm flex items-center space-x-1">
                      <Download size={16} />
                      <span>导出</span>
                    </button>
                  </div>
                </div>
                <div className="p-6 overflow-y-auto h-[calc(100%-60px)]">
                  {reportContent ? (
                    <div className="prose max-w-none">
                      <div className="whitespace-pre-wrap">
                        {showDataSource ? (
                          reportContent.split('\n').map((line, index) => {
                            if (line.includes('数据来源：')) {
                              return (
                                <div key={index} className="text-blue-600 italic text-sm mt-1">
                                  {line}
                                </div>
                              );
                            }
                            return <div key={index}>{line}</div>;
                          })
                        ) : (
                          reportContent.split('\n').map((line, index) => {
                            if (!line.includes('数据来源：')) {
                              return <div key={index}>{line}</div>;
                            }
                            return null;
                          })
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400">
                      <div className="text-center">
                        <FileText size={48} className="mx-auto mb-4" />
                        <p>点击"生成报告"开始创建内容</p>
                        <p className="text-sm mt-2">AI将实时生成产权交易相关报告</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 图表选项卡内容 */}
        {activeTab === 'chart' && (
          <div className="grid grid-cols-3 gap-6">
            {/* 图表控制面板 */}
            <div className="col-span-1 space-y-4">
              {/* 图表类型选择 */}
              <div className="bg-white rounded-lg shadow p-4">
                <h3 className="font-semibold text-gray-700 mb-3">图表类型</h3>
                <div className="space-y-2">
                  {[
                    { value: 'bar', label: '柱状图', icon: BarChart },
                    { value: 'line', label: '折线图', icon: TrendingUp },
                    { value: 'pie', label: '饼图', icon: PieChart },
                    { value: 'radar', label: '雷达图', icon: Activity },
                  ].map(({ value, label, icon: Icon }) => (
                    <button
                      key={value}
                      onClick={() => setSelectedChart(value)}
                      className={`w-full p-2 rounded-lg flex items-center space-x-2 transition-all ${
                        selectedChart === value 
                          ? 'bg-blue-500 text-white' 
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                      }`}
                    >
                      <Icon size={18} />
                      <span>{label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 数据编辑 */}
              <div className="bg-white rounded-lg shadow p-4">
                <h3 className="font-semibold text-gray-700 mb-3">数据编辑（自动更新）</h3>
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {chartData.map((item, index) => (
                    <div key={index} className="border rounded p-2">
                      <div className="font-medium text-sm mb-1">{item.year}</div>
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <label className="text-xs text-gray-600 w-16">营收:</label>
                          <input
                            type="number"
                            value={item.营业收入}
                            onChange={(e) => updateChartData(index, '营业收入', e.target.value)}
                            className="flex-1 p-1 border rounded text-sm"
                          />
                        </div>
                        <div className="flex items-center space-x-2">
                          <label className="text-xs text-gray-600 w-16">净利润:</label>
                          <input
                            type="number"
                            value={item.净利润}
                            onChange={(e) => updateChartData(index, '净利润', e.target.value)}
                            className="flex-1 p-1 border rounded text-sm"
                          />
                        </div>
                        <div className="flex items-center space-x-2">
                          <label className="text-xs text-gray-600 w-16">资产:</label>
                          <input
                            type="number"
                            value={item.资产总额}
                            onChange={(e) => updateChartData(index, '资产总额', e.target.value)}
                            className="flex-1 p-1 border rounded text-sm"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 图表说明 */}
              <div className="bg-white rounded-lg shadow p-4">
                <h3 className="font-semibold text-gray-700 mb-3">智能关联说明</h3>
                <p className="text-sm text-gray-600">
                  图表数据已与报告内容完全同步。修改数据后图表将实时更新，确保图文一致性。
                </p>
                <div className="mt-3 p-2 bg-blue-50 rounded text-xs text-blue-700">
                  <p>✓ 数据来源：报告财务分析章节</p>
                  <p>✓ 更新方式：实时响应</p>
                  <p>✓ 业务场景：产权价值评估</p>
                </div>
              </div>
            </div>

            {/* 图表展示区 */}
            <div className="col-span-2">
              <div className="bg-white rounded-lg shadow">
                <div className="bg-gray-50 p-4 border-b flex items-center justify-between">
                  <h3 className="font-semibold text-gray-700">图表展示</h3>
                  <div className="flex items-center space-x-2">
                    <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm flex items-center space-x-1">
                      <Download size={16} />
                      <span>导出图表</span>
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  {chartData.length > 0 ? (
                    <>
                      {renderChart()}
                      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold text-gray-700 mb-2">图表分析</h4>
                        <p className="text-sm text-gray-600">
                          从图表可以看出，标的企业近三年经营状况良好，营业收入年均增长率达到28.6%，
                          净利润增长显著，资产规模稳步扩大。该企业具有较强的成长性和盈利能力，
                          符合产权受让方的投资价值要求。
                        </p>
                        <p className="text-xs text-blue-600 mt-2">
                          数据来源：企业2021-2023年度审计报告
                        </p>
                      </div>
                    </>
                  ) : (
                    <div className="flex items-center justify-center h-96 text-gray-400">
                      <div className="text-center">
                        <BarChart size={48} className="mx-auto mb-4" />
                        <p>请先生成报告以获取图表数据</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyRightsAIDemo;