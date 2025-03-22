import React, { useState, useEffect } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';

// 模拟AI分析过程的演示组件
const SalesAnalysisDemo = () => {
  const [analysisStage, setAnalysisStage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [showTooltip, setShowTooltip] = useState(false);

  // 模拟销售数据
  // 模拟销售数据
  const salesData = [

    { month: "一月", region: "广州", product: "网络设备", sales: 2450000, cost: 1960000 },
    { month: "一月", region: "深圳", product: "网络设备", sales: 2890000, cost: 2312000 },
    { month: "一月", region: "东莞", product: "网络设备", sales: 1560000, cost: 1248000 },
    { month: "一月", region: "广州", product: "IT服务", sales: 3680000, cost: 2576000 },
    { month: "一月", region: "深圳", product: "IT服务", sales: 4120000, cost: 2884000 },
    { month: "一月", region: "东莞", product: "IT服务", sales: 2260000, cost: 1582000 },
    { month: "二月", region: "广州", product: "网络设备", sales: 2680000, cost: 2144000 },
    { month: "二月", region: "深圳", product: "网络设备", sales: 3150000, cost: 2520000 },
    { month: "二月", region: "东莞", product: "网络设备", sales: 1720000, cost: 1376000 },
    { month: "二月", region: "广州", product: "IT服务", sales: 3950000, cost: 2765000 },
    { month: "二月", region: "深圳", product: "IT服务", sales: 4380000, cost: 3066000 },
    { month: "二月", region: "东莞", product: "IT服务", sales: 2420000, cost: 1694000 },
    { month: "三月", region: "广州", product: "网络设备", sales: 2890000, cost: 2312000 },
    { month: "三月", region: "深圳", product: "网络设备", sales: 3320000, cost: 2656000 },
    { month: "三月", region: "东莞", product: "网络设备", sales: 1780000, cost: 1424000 },
    { month: "三月", region: "广州", product: "IT服务", sales: 4050000, cost: 2835000 },
    { month: "三月", region: "深圳", product: "IT服务", sales: 4580000, cost: 3206000 },
    { month: "三月", region: "东莞", product: "IT服务", sales: 2520000, cost: 1764000 }
  ];

  // 按月份汇总的数据
  const monthlyData = [
    { name: '一月', 销售额: 16960000, 成本: 12562000, 利润: 4398000 },
    { name: '二月', 销售额: 18300000, 成本: 15565000, 利润: 4735000 },
    { name: '三月', 销售额: 19140000, 成本: 14197000, 利润: 4943000 }
  ];
  
  // 按区域汇总的数据
  const regionData = [
    { name: '广州', value: 19700000 },
    { name: '深圳', value: 22440000 },
    { name: '东莞', value: 12260000 }
  ];
  
  // 按产品汇总的数据
  const productData = [
    { name: '网络设备', 销售额: 22440000, 利润率: 20 },
    { name: 'IT服务', 销售额: 31960000, 利润率: 30 }
  ];

  // 数据筛选
  const filteredSalesData = salesData.filter(item => {
    return (selectedMonth === 'all' || item.month === selectedMonth) &&
           (selectedRegion === 'all' || item.region === selectedRegion);
  });

  // 计算总计
  const totalSales = filteredSalesData.reduce((sum, item) => sum + item.sales, 0);
  const totalCost = filteredSalesData.reduce((sum, item) => sum + item.cost, 0);
  const totalProfit = totalSales - totalCost;
  const profitMargin = (totalProfit / totalSales * 100).toFixed(2);

  // 饼图颜色
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];
  
  // 模拟AI分析进程
  const nextStage = () => {
    setIsLoading(true);
    setTimeout(() => {
      setAnalysisStage(prev => prev + 1);
      setIsLoading(false);
    }, 1500);
  };

  // 数据导出功能
  const exportData = () => {
    const csvContent = "data:text/csv;charset=utf-8," + 
      salesData.map(row => Object.values(row).join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "sales_data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // 加载动画
  useEffect(() => {
    if (isLoading) {
      document.body.style.cursor = 'wait';
    } else {
      document.body.style.cursor = 'default';
    }
    return () => {
      document.body.style.cursor = 'default';
    };
  }, [isLoading]);

  const resetDemo = () => {
    setAnalysisStage(0);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-lg max-w-5xl mx-auto"
    >
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-blue-800">AI辅助销售数据分析与报告生成演示</h1>
        <div className="flex gap-4">
          <select 
            className="px-3 py-1 border rounded-md text-gray-600"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          >
            <option value="all">全部月份</option>
            <option value="一月">一月</option>
            <option value="二月">二月</option>
            <option value="三月">三月</option>
          </select>
          <select
            className="px-3 py-1 border rounded-md text-gray-600"
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
          >
            <option value="all">全部地区</option>
            <option value="广州">广州</option>
            <option value="深圳">深圳</option>
            <option value="东莞">东莞</option>
          </select>
        </div>
      </div>
      
      {analysisStage === 0 && (
        <div className="text-center">
          <div className="border p-4 rounded-lg bg-gray-50 mb-4">
            <h2 className="font-bold mb-2">原始数据预览</h2>
            <div className="overflow-auto max-h-64">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-2 border">月份</th>
                    <th className="p-2 border">区域</th>
                    <th className="p-2 border">产品</th>
                    <th className="p-2 border">销售额</th>
                    <th className="p-2 border">成本</th>
                  </tr>
                </thead>
                <tbody>
                  {salesData.slice(0, 6).map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-2 border">{row.month}</td>
                      <td className="p-2 border">{row.region}</td>
                      <td className="p-2 border">{row.product}</td>
                      <td className="p-2 border text-right">{(row.sales/10000).toFixed(2)}万</td>
                      <td className="p-2 border text-right">{(row.cost/10000).toFixed(2)}万</td>
                    </tr>
                  ))}
                  <tr>
                    <td colSpan={5} className="p-2 border text-center italic">... 共18条数据记录 ...</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <button 
            onClick={nextStage} 
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            disabled={isLoading}
          >
            {isLoading ? "AI处理中..." : "开始AI分析"}
          </button>
        </div>
      )}

      <AnimatePresence mode="wait">
        {analysisStage === 1 && (
        <div>
          <h2 className="text-xl font-bold mb-4">第一步：AI识别数据结构并计算关键指标</h2>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="relative group hover:shadow-lg transition-shadow duration-300"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-white p-4 rounded-lg text-center shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="text-sm text-gray-600">总销售额</div>
                  <div className="text-2xl font-bold text-blue-600">{(totalSales/10000).toFixed(2)}万元</div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-white p-4 rounded-lg text-center shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="text-sm text-gray-600">总利润</div>
                  <div className="text-2xl font-bold text-green-600">{(totalProfit/10000).toFixed(2)}万元</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-white p-4 rounded-lg text-center shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="text-sm text-gray-600">总成本</div>
                  <div className="text-2xl font-bold text-purple-600">{(totalCost/10000).toFixed(2)}万元</div>
                </div>
                <div className="bg-gradient-to-br from-amber-50 to-white p-4 rounded-lg text-center shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="text-sm text-gray-600">整体利润率</div>
                  <div className="text-2xl font-bold text-amber-600">{profitMargin}%</div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="text-center mt-6">
            <button 
              onClick={nextStage} 
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:shadow-lg transition-all duration-300 flex items-center gap-2 mx-auto disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  AI分析中...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  进行多维度分析
                </>
              )}
            </button>
          </div>
        </div>
      )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {analysisStage === 2 && (
        <div>
          <h2 className="text-xl font-bold mb-4">第二步：AI自动进行多维度数据分析</h2>
          
          <div className="mb-6 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="font-bold mb-2 text-blue-800 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              月度销售趋势
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip formatter={(value: any) => [(value/10000).toFixed(2) + "万元"]} />
                  <Legend />
                  <Line type="monotone" dataKey="销售额" stroke="#8884d8" />
                  <Line type="monotone" dataKey="利润" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="relative group hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="font-bold mb-2 text-blue-800 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
                区域销售占比
              </h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={regionData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {regionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value: any) => [(value/10000).toFixed(2) + "万元"]} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
            
            <div>
              <h3 className="font-bold mb-2 text-blue-800 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                产品类别分析
              </h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={productData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                    <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                    <Tooltip />
                    <Legend />
                    <Bar yAxisId="left" dataKey="销售额" fill="#8884d8" name="销售额" />
                    <Bar yAxisId="right" dataKey="利润率" fill="#82ca9d" name="利润率%" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <button 
              onClick={nextStage} 
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              disabled={isLoading}
            >
              {isLoading ? "AI分析中..." : "生成洞察和报告"}
            </button>
          </div>
        </div>
      )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {analysisStage === 3 && (
        <div>
          <h2 className="text-xl font-bold mb-4">第三步：AI生成数据洞察和报告</h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="border p-4 rounded-lg bg-gradient-to-br from-gray-50 to-white shadow-sm hover:shadow-md transition-all duration-300 mb-6"
          >
            <h3 className="font-bold mb-2 text-xl">2025年第一季度销售分析报告</h3>
            
            <h4 className="font-bold mt-4 mb-2">执行摘要</h4>
            <p>本季度销售总额达{(totalSales/10000).toFixed(2)}万元，总利润{(totalProfit/10000).toFixed(2)}万元，整体利润率为{profitMargin}%。</p>
            
            <h4 className="font-bold mt-4 mb-2">关键发现</h4>
            <ul className="list-disc pl-5">
              <li>深圳地区在IT服务类产品上表现最为突出，第一季度累计销售额达到2244.00万元</li>
              <li>从月度趋势来看，销售额呈现稳步上升趋势，三月份相比一月份增长显著</li>
              <li>产品类别中，IT服务的利润率高于网络设备，建议在营销资源分配上向IT服务倾斜</li>
            </ul>
            
            <h4 className="font-bold mt-4 mb-2">区域表现</h4>
            <ul className="list-disc pl-5">
              <li>深圳地区：销售领先，利润率25.83%</li>
              <li>广州地区：销售稳定，利润率25.93%</li>
              <li>东莞地区：销售基础较弱，但增长潜力大</li>
            </ul>
            
            <h4 className="font-bold mt-4 mb-2">建议行动</h4>
            <ul className="list-disc pl-5">
              <li>加强深圳地区IT服务的市场推广，扩大领先优势</li>
              <li>针对东莞地区制定专项销售激励计划，提升销售业绩</li>
              <li>优化网络设备产品的成本结构，提高利润率</li>
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-blue-50 to-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 mb-6"
          >
            <h3 className="font-bold mb-2">效率提升分析</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-sm text-gray-600">传统手动分析时间</div>
                <div className="text-xl font-semibold">180分钟</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-600">AI辅助分析时间</div>
                <div className="text-xl font-semibold">20分钟</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-600">节省时间</div>
                <div className="text-xl font-semibold">160分钟</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-600">效率提升</div>
                <div className="text-xl font-semibold text-green-600">88.89%</div>
              </div>
            </div>
          </motion.div>
          
          <div className="text-center mt-6">
            <button 
              onClick={resetDemo} 
              className="px-6 py-2 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-lg hover:shadow-lg transition-all duration-300 flex items-center gap-2 mx-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              重新开始演示
            </button>
            <button 
              onClick={exportData}
              className="px-6 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg hover:shadow-lg transition-all duration-300 flex items-center gap-2 mx-2 inline-flex"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              下载完整报告
            </button>
          </div>
        </div>
      )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SalesAnalysisDemo;