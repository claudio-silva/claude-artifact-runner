import React, { useState } from 'react';
import { 
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, 
  AreaChart, Area, Tooltip, Legend, ResponsiveContainer,
  XAxis, YAxis, CartesianGrid, Sector, ReferenceLine
} from 'recharts';
import { Calendar, Clock, FileText, GitCommit, ChevronDown, ChevronUp, Search, Zap, BarChart2, PieChart as PieChartIcon, TrendingUp, Plus, Minus, GitBranch } from 'lucide-react';

const GitVisualization = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [activePieIndex, setActivePieIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'descending' });

  const commitData = [
    {
      message: "更新可研方案内容，修改政策依据文件，调整总体设计章节，增强安全性和可扩展性，删除无效文档，优化信息资源共享分析和效益评价指标，确保项目符合最新要求。",
      hash: "5f0d81f9b4b16475717e91ec3837bf86baaa2b58",
      added: 16403,
      deleted: 7888,
      date: "2025-04-24",
      time: "19:36:14",
      files: 12
    },
    {
      message: "更新可研方案中的总体设计章节，替换架构图链接，增加技术路线与选型部分，详细描述技术架构设计及实施策略，确保平台的安全性、可扩展性和高效性。",
      hash: "95d148002a294071027c24cac99e1297f80cf67d",
      added: 16537,
      deleted: 229,
      date: "2025-04-24",
      time: "20:20:06",
      files: 5
    },
    {
      message: "更新可研方案总体设计章节，新增数据要素价值驱动原则及实现策略，强调数据在经济发展中的核心作用，完善平台架构描述，确保与国家政策的对接及数据流通机制的高效性。",
      hash: "70ee389b414ff1cf59f0deede36098339e359d4d",
      added: 1211,
      deleted: 389,
      date: "2025-04-24",
      time: "20:34:35",
      files: 3
    },
    {
      message: "更新可研方案总体设计章节，新增隐私计算和数据治理的详细措施，强调数据主权和安全流通保障，完善数据安全监管机制，确保平台在数据安全和隐私保护方面的有效性与合规性。",
      hash: "59036f88337f4f748dd04ccb8c446a0de2ad25d8",
      added: 1292,
      deleted: 515,
      date: "2025-04-24",
      time: "20:55:38",
      files: 2
    },
    {
      message: "重新设计可研方案中多个章节，包括项目概况、建设单位概况、现状分析、需求分析及项目必要性等，精简文档内容，确保信息的集中与高效，提升可研方案的整体可读性与实用性。",
      hash: "ff0f67c3b8bf56f7ee171b2c68ada4ea2d2376d6",
      added: 67775,
      deleted: 516499,
      date: "2025-04-25",
      time: "12:11:17",
      files: 18
    },
    {
      message: "更新可研方案第3章和第5章，调整需求分析与项目建设方案的内容，优化章节标题格式，确保信息的清晰性与一致性，提升文档的可读性和实用性。",
      hash: "e3696361377ce33a56532f5c67653ccfd7dd067c",
      added: 269052,
      deleted: 32999,
      date: "2025-04-25",
      time: "12:15:25",
      files: 8
    },
    {
      message: "调整可研方案第5章：本期项目建设方案，按章二级标题分隔出不同的文件",
      hash: "f225657263a618b887cdf244cba2a2abf883f2af",
      added: 259437,
      deleted: 269074,
      date: "2025-04-25",
      time: "12:23:41",
      files: 15
    },
    {
      message: "删除多张不再使用的媒体文件，优化项目资源管理。",
      hash: "fb2788a83bff97a0351dce1bba164866b9baf76a",
      added: 0,
      deleted: 0,
      date: "2025-04-25",
      time: "12:53:42",
      files: 23
    },
    {
      message: "更新合同要求、可研报告编制指南及相关章节，调整内容结构，增强逻辑性与可读性，明确项目目标与政策依据，删除不再使用的图像资源和招投标文档，确保文档信息的准确性与一致性。",
      hash: "acb22cff3c354ec7f496d7fe6d76e80b78120a2a",
      added: 8076,
      deleted: 3887,
      date: "2025-04-25",
      time: "12:53:51",
      files: 6
    },
    {
      message: "更新可研方案第1章和第3章，调整政策依据和系统功能分析内容，优化章节结构，增强逻辑性与可读性，确保信息的准确性与一致性，提升数据资源管理和服务功能的描述，支持自治区数字政府建设的整体目标。",
      hash: "4f1abaf36bbc8d6c9ecc17ca9a256e11034e657b",
      added: 35166,
      deleted: 10608,
      date: "2025-04-25",
      time: "21:36:15",
      files: 9
    },
    {
      message: "更新自治区一体化数据资源体系相关文件，新增建设方案、数据治理、政策依据等内容，优化章节结构与逻辑性，确保信息准确性与一致性，支持数字政府建设目标的实现。",
      hash: "edb31440be70409185b2bc17cf18756e49bb49ec",
      added: 422020,
      deleted: 27102,
      date: "2025-04-27",
      time: "20:16:28",
      files: 27
    },
    {
      message: "更新可研方案第3章，优化数据治理需求、数据共享开放需求及数据运营需求分析，增强逻辑性与可读性，确保信息的准确性与一致性，支持自治区数字政府建设目标的实现。",
      hash: "24e7ff1c16be9c16f5d285c5bc8150d79d14a076",
      added: 22031,
      deleted: 8394,
      date: "2025-04-27",
      time: "20:17:29",
      files: 4
    },
    {
      message: "更新可研方案第3章，优化数据汇聚、数据治理及数据共享开放需求的描述，增强逻辑性与可读性，确保信息的准确性与一致性，支持自治区数字政府建设目标的实现。",
      hash: "2d043d371f3979d406f17da4055bfd7ee64eeba8",
      added: 8438,
      deleted: 6447,
      date: "2025-04-27",
      time: "21:03:28",
      files: 5
    },
    {
      message: "更新可研方案第3章，进一步优化数据资源管理、数据共享开放及数据开发应用的描述，增强逻辑性与可读性，确保信息的准确性与一致性，支持自治区数字政府建设目标的实现。",
      hash: "901eb2e193e9a7d596e438735ad764a681ed0ddf",
      added: 1542,
      deleted: 4402,
      date: "2025-04-28",
      time: "00:19:51",
      files: 3
    },
    {
      message: "更新可研方案第3章，调整数据共享与开放需求、数据资源登记与交易需求及数据产权保护需求的描述，增强逻辑性与可读性，确保信息的准确性与一致性，支持自治区数字政府建设目标的实现。",
      hash: "b9b1755cb0b2d37ecd39ad794e7d19dc15852525",
      added: 2384,
      deleted: 2832,
      date: "2025-04-28",
      time: "14:24:53",
      files: 4
    },
    {
      message: "更新可研方案第1章、第2章、第7章、第8章、第9章、第10章、第11章、第13章、第14章及第5章，调整项目建设单位、项目实施机构、招标方案、环保与安全、节能分析、组织与培训、实施进度、效益与评价指标、风险管理等内容，增强逻辑性与可读性，确保信息的准确性与一致性，支持自治区数字政府建设目标的实现。",
      hash: "7b11e01bab7c548eaa4ddfa6fef16b8d80061532",
      added: 114531,
      deleted: 18062,
      date: "2025-04-28",
      time: "15:06:25",
      files: 10
    },
    {
      message: "第4章【初稿】，优化分级分类安全管理、建设思路及平台建设内容，增强逻辑性与可读性，确保信息的准确性与一致性，支持自治区数字政府建设目标的实现。",
      hash: "45d13767b3ccf31dab592e286b6df93a8e0bb432",
      added: 1409,
      deleted: 686,
      date: "2025-04-28",
      time: "15:06:53",
      files: 2
    },
    {
      message: "更新可研方案，新增数据资源现状分析、灾备系统建设方案及密码应用建设方案，优化章节结构与逻辑性，确保信息的准确性与一致性，支持自治区数字政府建设目标的实现。",
      hash: "24add6cb0951e7ecd772961a96dcc598b8baaf7c",
      added: 413483,
      deleted: 277614,
      date: "2025-04-28",
      time: "22:31:46",
      files: 15
    },
    {
      message: "更新可研方案第5章，调整项目目标、规模与内容、系统业务运营服务方案的章节结构，优化内容逻辑，删除不再使用的容灾备份系统建设方案、第三方服务方案及相关说明，确保信息的准确性与一致性，支持自治区数字政府建设目标的实现。",
      hash: "bfe13a1d133b87a9fe2ad8e508f2286743e507f7",
      added: 1145,
      deleted: 5266,
      date: "2025-04-28",
      time: "22:47:08",
      files: 3
    },
    {
      message: "更新可研方案，调整多个章节中对地市的表述，统一为'地（州、市）'，确保信息的一致性与准确性，支持自治区数字政府建设目标的实现。",
      hash: "b6fbdd5f53939399c83c841282ad6167e1026ef2",
      added: 21656,
      deleted: 16648,
      date: "2025-04-29",
      time: "00:15:10",
      files: 8
    },
    {
      message: "更新log.sh脚本，修改获取提交信息的格式，新增提交时间的输出，增强信息的完整性与可读性。",
      hash: "cf7ee65d0162cb22b4903617c0cfa965458c31c9",
      added: 159,
      deleted: 22,
      date: "2025-04-29",
      time: "00:26:11",
      files: 1
    }
  ];

  // 按时间顺序排序数据（用于时间线图表）
  const chronologicalData = [...commitData].sort((a, b) => {
    const dateA = new Date(`${a.date} ${a.time}`);
    const dateB = new Date(`${b.date} ${b.time}`);
    return dateA.getTime() - dateB.getTime();
  });

  // 计算总计
  const totalStats = commitData.reduce((acc, commit) => {
    acc.added += commit.added;
    acc.deleted += commit.deleted;
    acc.files += commit.files;
    return acc;
  }, { added: 0, deleted: 0, files: 0 });
  
  const netChange = totalStats.added - totalStats.deleted;

  // 根据类型分类提交（按主要修改内容）
  const commitTypeData = [
    { name: '架构设计', value: 35443 },
    { name: '数据治理', value: 68881 },
    { name: '文档重构', value: 797723 },
    { name: '需求分析', value: 334829 },
    { name: '功能优化', value: 446712 }
  ];

  // 章节修改分布
  const chapterData = [
    { name: '第1章：项目概述', value: 73402 },
    { name: '第2章：现状分析', value: 481258 },
    { name: '第3章：需求分析', value: 338632 },
    { name: '第4章：设计方案', value: 36685 },
    { name: '第5章：建设方案', value: 383358 },
    { name: '其他章节', value: 370253 }
  ];

  // 计算文件变更强度
  const fileIntensityData = [
    { name: '1-5个文件', count: 8 },
    { name: '6-10个文件', count: 6 },
    { name: '11-20个文件', count: 4 },
    { name: '21+个文件', count: 2 }
  ];

  // 数据过滤
  const filteredCommits = commitData.filter(commit => 
    commit.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
    commit.hash.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 数据排序
  const sortedCommits = [...filteredCommits].sort((a, b) => {
    if (sortConfig.key === null) return 0;
    
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? 1 : -1;
    }
    return 0;
  });

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const getSortIndicator = (columnName) => {
    if (sortConfig.key !== columnName) return null;
    
    return sortConfig.direction === 'ascending' 
      ? <ChevronUp className="inline-block ml-1 w-4 h-4" /> 
      : <ChevronDown className="inline-block ml-1 w-4 h-4" />;
  };

  // 日期分组数据
  const commitsByDate = chronologicalData.reduce((acc, commit) => {
    if (!acc[commit.date]) {
      acc[commit.date] = [];
    }
    acc[commit.date].push(commit);
    return acc;
  }, {});

  // 饼图渲染优化
  const renderActiveShape = (props) => {
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
      fill, payload, percent, value } = props;
    const sin = Math.sin(-midAngle * Math.PI / 180);
    const cos = Math.cos(-midAngle * Math.PI / 180);
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
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333" fontSize={12}>{payload.name}</text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999" fontSize={12}>
          {`${value.toLocaleString()} (${(percent * 100).toFixed(1)}%)`}
        </text>
      </g>
    );
  };

  // 颜色
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#4CAF50', '#F44336'];
  const STATUS_COLORS = {
    added: '#4CAF50',
    deleted: '#F44336',
    net: '#2196F3'
  };

  // 数据格式化函数
  const formatNumber = (num) => {
    if (num >= 1000000) return `${(num/1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num/1000).toFixed(1)}K`;
    return num.toLocaleString();
  };

  // 自定义提示框
  const CustomTooltip = ({ active, payload, label, valuePrefix }: {
    active?: boolean;
    payload?: any[];
    label?: string;
    valuePrefix?: string;
  }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded shadow-lg">
          <p className="font-medium text-gray-900">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color }} className="text-sm">
              {`${entry.name}: ${valuePrefix || ''}${entry.value.toLocaleString()}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  // 简化提交哈希
  const shortenHash = (hash) => hash.substring(0, 7);

  // 生成时间线数据
  const timelineData = chronologicalData.map((commit) => {
    return {
      name: shortenHash(commit.hash),
      added: commit.added,
      deleted: commit.deleted,
      net: commit.added - commit.deleted,
      time: `${commit.date} ${commit.time}`
    };
  });

  // 累计变更数据
  const cumulativeData = [];
  let cumulativeAdded = 0;
  let cumulativeDeleted = 0;

  chronologicalData.forEach((commit) => {
    cumulativeAdded += commit.added;
    cumulativeDeleted += commit.deleted;
    
    cumulativeData.push({
      name: shortenHash(commit.hash),
      totalAdded: cumulativeAdded,
      totalDeleted: cumulativeDeleted,
      netChange: cumulativeAdded - cumulativeDeleted,
    });
  });

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="container mx-auto px-4 py-8">
        <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg shadow-lg mb-8 p-6">
          <h1 className="text-3xl font-bold mb-2">Git仓库提交统计分析</h1>
          <p className="opacity-90">可视化分析项目演变历程与代码贡献</p>
        </header>
        
        {/* 导航标签 */}
        <div className="mb-8 flex flex-wrap gap-2">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-md font-medium ${activeTab === 'overview' 
              ? 'bg-blue-600 text-white shadow-md' 
              : 'bg-white text-gray-700 hover:bg-gray-100'}`}
          >
            <BarChart2 className="inline-block mr-2 w-4 h-4" />
            概览
          </button>
          <button 
            onClick={() => setActiveTab('timeline')}
            className={`px-4 py-2 rounded-md font-medium ${activeTab === 'timeline' 
              ? 'bg-blue-600 text-white shadow-md' 
              : 'bg-white text-gray-700 hover:bg-gray-100'}`}
          >
            <TrendingUp className="inline-block mr-2 w-4 h-4" />
            时间线
          </button>
          <button 
            onClick={() => setActiveTab('distribution')}
            className={`px-4 py-2 rounded-md font-medium ${activeTab === 'distribution' 
              ? 'bg-blue-600 text-white shadow-md' 
              : 'bg-white text-gray-700 hover:bg-gray-100'}`}
          >
            <PieChartIcon className="inline-block mr-2 w-4 h-4" />
            分布分析
          </button>
          <button 
            onClick={() => setActiveTab('commits')}
            className={`px-4 py-2 rounded-md font-medium ${activeTab === 'commits' 
              ? 'bg-blue-600 text-white shadow-md' 
              : 'bg-white text-gray-700 hover:bg-gray-100'}`}
          >
            <GitCommit className="inline-block mr-2 w-4 h-4" />
            提交详情
          </button>
        </div>
        
        {/* 概览面板 */}
        {activeTab === 'overview' && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {/* 统计卡片 */}
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-500 text-sm font-medium">总添加字符数</p>
                    <p className="text-3xl font-bold text-green-600 mt-1">{formatNumber(totalStats.added)}</p>
                  </div>
                  <div className="bg-green-100 p-2 rounded-md">
                    <Plus className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  平均每次提交 {formatNumber(Math.round(totalStats.added / commitData.length))} 字符
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-500 text-sm font-medium">总删除字符数</p>
                    <p className="text-3xl font-bold text-red-600 mt-1">{formatNumber(totalStats.deleted)}</p>
                  </div>
                  <div className="bg-red-100 p-2 rounded-md">
                    <Minus className="w-6 h-6 text-red-600" />
                  </div>
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  平均每次提交 {formatNumber(Math.round(totalStats.deleted / commitData.length))} 字符
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-500 text-sm font-medium">净变更字符数</p>
                    <p className="text-3xl font-bold text-blue-600 mt-1">{formatNumber(netChange)}</p>
                  </div>
                  <div className="bg-blue-100 p-2 rounded-md">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  {netChange > 0 ? '净增加' : '净减少'} {formatNumber(Math.abs(netChange))} 字符
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-500 text-sm font-medium">修改文件总数</p>
                    <p className="text-3xl font-bold text-purple-600 mt-1">{formatNumber(totalStats.files)}</p>
                  </div>
                  <div className="bg-purple-100 p-2 rounded-md">
                    <FileText className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  共 {commitData.length} 次提交
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              {/* 添加/删除饼图 */}
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-lg font-semibold mb-4">字符变更占比</h2>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        activeIndex={activePieIndex}
                        activeShape={renderActiveShape}
                        data={[
                          { name: '添加字符', value: totalStats.added },
                          { name: '删除字符', value: totalStats.deleted }
                        ]}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        onMouseEnter={(_, index) => setActivePieIndex(index)}
                      >
                        {[
                          { name: '添加字符', value: totalStats.added },
                          { name: '删除字符', value: totalStats.deleted }
                        ].map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={index === 0 ? STATUS_COLORS.added : STATUS_COLORS.deleted} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              {/* 顶部提交者 */}
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-lg font-semibold mb-4">提交变更强度分布</h2>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={
                      commitData.map(commit => ({
                        hash: shortenHash(commit.hash),
                        added: commit.added,
                        deleted: commit.deleted,
                        net: commit.added - commit.deleted
                      })).sort((a, b) => Math.abs(b.net) - Math.abs(a.net)).slice(0, 7)
                    }>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="hash" />
                      <YAxis tickFormatter={formatNumber} />
                      <Tooltip content={<CustomTooltip />} />
                      <Legend />
                      <Bar dataKey="added" name="添加" fill={STATUS_COLORS.added} />
                      <Bar dataKey="deleted" name="删除" fill={STATUS_COLORS.deleted} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h2 className="text-lg font-semibold mb-4">累计变更趋势</h2>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={cumulativeData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis tickFormatter={formatNumber} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Area 
                      type="monotone" 
                      dataKey="totalAdded" 
                      name="累计添加" 
                      stackId="1" 
                      stroke={STATUS_COLORS.added} 
                      fill={STATUS_COLORS.added} 
                      fillOpacity={0.6} 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="totalDeleted" 
                      name="累计删除" 
                      stackId="2" 
                      stroke={STATUS_COLORS.deleted} 
                      fill={STATUS_COLORS.deleted} 
                      fillOpacity={0.6} 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}
        
        {/* 时间线面板 */}
        {activeTab === 'timeline' && (
          <div>
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h2 className="text-lg font-semibold mb-4">提交时间线</h2>
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={timelineData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis yAxisId="left" tickFormatter={formatNumber} />
                    <YAxis yAxisId="right" orientation="right" tickFormatter={formatNumber} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Line 
                      yAxisId="left"
                      type="monotone" 
                      dataKey="added" 
                      name="添加字符" 
                      stroke={STATUS_COLORS.added} 
                      activeDot={{ r: 8 }} 
                      strokeWidth={2}
                    />
                    <Line 
                      yAxisId="left"
                      type="monotone" 
                      dataKey="deleted" 
                      name="删除字符" 
                      stroke={STATUS_COLORS.deleted} 
                      activeDot={{ r: 8 }} 
                      strokeWidth={2}
                    />
                    <Line 
                      yAxisId="right"
                      type="monotone" 
                      dataKey="net" 
                      name="净变更" 
                      stroke={STATUS_COLORS.net} 
                      activeDot={{ r: 8 }} 
                      strokeWidth={2}
                      strokeDasharray="5 5"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h2 className="text-lg font-semibold mb-4">提交时间轴</h2>
              <div className="space-y-4">
                {Object.keys(commitsByDate).sort().map(date => (
                  <div key={date} className="border-l-2 border-blue-500 pl-4">
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 text-blue-500 mr-2" />
                      <h3 className="text-md font-medium">{date}</h3>
                    </div>
                    <div className="ml-7 mt-2 space-y-3">
                      {commitsByDate[date].map(commit => (
                        <div key={commit.hash} className="relative">
                          <div className="absolute -left-9 top-1 w-4 h-4 rounded-full bg-blue-500"></div>
                          <div className="flex flex-col sm:flex-row sm:items-center text-sm">
                            <div className="flex items-center text-gray-600 sm:w-20">
                              <Clock className="w-4 h-4 mr-1" />
                              {commit.time.split(' ')[1]}
                            </div>
                            <div className="sm:flex-1">
                              <div className="font-medium">{commit.message}</div>
                              <div className="text-gray-500 mt-1 flex flex-wrap items-center gap-2">
                                <span className="flex items-center">
                                  <GitCommit className="w-4 h-4 mr-1" />
                                  {shortenHash(commit.hash)}
                                </span>
                                <span className="flex items-center text-green-600">
                                  <Plus className="w-4 h-4 mr-1" />
                                  {formatNumber(commit.added)}
                                </span>
                                <span className="flex items-center text-red-600">
                                  <Minus className="w-4 h-4 mr-1" />
                                  {formatNumber(commit.deleted)}
                                </span>
                                <span className="flex items-center">
                                  <FileText className="w-4 h-4 mr-1" />
                                  {commit.files} 文件
                                </span>
                              </div>
                            </div>
                            <div className={`mt-1 sm:mt-0 font-medium ${commit.added - commit.deleted > 0 ? 'text-green-600' : commit.added - commit.deleted < 0 ? 'text-red-600' : 'text-gray-600'}`}>
                              {commit.added - commit.deleted > 0 ? '+' : ''}{formatNumber(commit.added - commit.deleted)}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {/* 分布分析面板 */}
        {activeTab === 'distribution' && (
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-lg font-semibold mb-4">提交类型分布</h2>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={commitTypeData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {commitTypeData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip 
                        formatter={(value) => [formatNumber(value), "字符数"]} 
                        labelFormatter={(index) => commitTypeData[index].name}
                      />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-lg font-semibold mb-4">章节修改分布</h2>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={chapterData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {chapterData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip 
                        formatter={(value) => [formatNumber(value), "字符数"]} 
                        labelFormatter={(index) => chapterData[index].name}
                      />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-lg font-semibold mb-4">提交大小分布</h2>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={[
                      { name: '微小 (<1K)', count: commitData.filter(c => c.added + c.deleted < 1000).length },
                      { name: '小型 (1K-10K)', count: commitData.filter(c => c.added + c.deleted >= 1000 && c.added + c.deleted < 10000).length },
                      { name: '中型 (10K-100K)', count: commitData.filter(c => c.added + c.deleted >= 10000 && c.added + c.deleted < 100000).length },
                      { name: '大型 (100K-500K)', count: commitData.filter(c => c.added + c.deleted >= 100000 && c.added + c.deleted < 500000).length },
                      { name: '超大 (>500K)', count: commitData.filter(c => c.added + c.deleted >= 500000).length }
                    ]}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="count" name="提交数量" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-lg font-semibold mb-4">文件变更强度</h2>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={fileIntensityData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="count" name="提交数量" fill="#82ca9d" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h2 className="text-lg font-semibold mb-4">添加/删除比例走势</h2>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chronologicalData.map((commit) => ({
                    name: shortenHash(commit.hash),
                    ratio: commit.deleted === 0 ? (commit.added === 0 ? 0 : 100) : Math.min(100, Math.round(commit.added / commit.deleted * 100))
                  }))}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis label={{ value: '添加/删除比例 (%)', angle: -90, position: 'insideLeft' }} />
                    <Tooltip labelFormatter={(label) => `提交 ${label}`} formatter={(value) => [`${value}%`, '添加/删除比例']} />
                    <Area type="monotone" dataKey="ratio" name="添加/删除比例" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
                    <ReferenceLine y={100} stroke="green" strokeDasharray="3 3" />
                    <ReferenceLine y={50} stroke="orange" strokeDasharray="3 3" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}
        
        {/* 提交详情面板 */}
        {activeTab === 'commits' && (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-4 border-b">
              <div className="flex items-center">
                <Search className="w-5 h-5 text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="搜索提交信息或哈希..."
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th 
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                      onClick={() => requestSort('message')}
                    >
                      提交信息 {getSortIndicator('message')}
                    </th>
                    <th 
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                      onClick={() => requestSort('date')}
                    >
                      日期 {getSortIndicator('date')}
                    </th>
                    <th 
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                      onClick={() => requestSort('hash')}
                    >
                      哈希 {getSortIndicator('hash')}
                    </th>
                    <th 
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                      onClick={() => requestSort('added')}
                    >
                      添加 {getSortIndicator('added')}
                    </th>
                    <th 
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                      onClick={() => requestSort('deleted')}
                    >
                      删除 {getSortIndicator('deleted')}
                    </th>
                    <th 
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                      onClick={() => requestSort('files')}
                    >
                      文件 {getSortIndicator('files')}
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {sortedCommits.map((commit) => (
                    <tr key={commit.hash} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="max-w-md overflow-hidden text-sm text-gray-900 font-medium">
                          {commit.message}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {commit.date}<br/>{commit.time}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-500">
                        {shortenHash(commit.hash)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium">
                        +{formatNumber(commit.added)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600 font-medium">
                        -{formatNumber(commit.deleted)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {commit.files}
                      </td>
                    </tr>
                  ))}
                  
                  {sortedCommits.length === 0 && (
                    <tr>
                      <td colSpan={6} className="px-6 py-4 text-center text-sm text-gray-500">
                        未找到匹配的提交记录
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
        
        <footer className="mt-8 text-center text-sm text-gray-500">
          <p>Git提交统计可视化 &copy; 2025 | 共分析 {commitData.length} 次提交</p>
          <div className="flex justify-center mt-2 space-x-3">
            <GitBranch className="w-4 h-4" />
            <span>总添加: {formatNumber(totalStats.added)} | 总删除: {formatNumber(totalStats.deleted)} | 净变更: {formatNumber(netChange)}</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default GitVisualization;
                      