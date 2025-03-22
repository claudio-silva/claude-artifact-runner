import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';
import { motion } from 'framer-motion';

// 实施阶段数据
const implementationData = [
  { 
    name: '需求分析',
    startDate: '2024-04',
    endDate: '2024-05', 
    duration: 2,
    description: '收集用户需求，梳理业务流程，确定系统功能'
  },
  { 
    name: '系统设计',
    startDate: '2024-05',
    endDate: '2024-06', 
    duration: 2,
    description: '系统架构设计，数据模型设计，接口设计'
  },
  { 
    name: '开发阶段',
    startDate: '2024-06',
    endDate: '2024-08', 
    duration: 3,
    description: '核心模块开发，AI模型对接，UI实现'
  },
  { 
    name: '测试阶段',
    startDate: '2024-08',
    endDate: '2024-09', 
    duration: 2,
    description: '功能测试，性能测试，安全测试'
  },
  { 
    name: '部署上线',
    startDate: '2024-09',
    endDate: '2024-10', 
    duration: 2,
    description: '系统部署，数据迁移，用户培训'
  },
  { 
    name: '运维优化',
    startDate: '2024-10',
    endDate: '2024-12', 
    duration: 3,
    description: '系统监控，性能优化，功能迭代'
  },
];

// 为图表准备数据
const chartData = implementationData.map((item, index) => ({
  name: item.name,
  开始: index,
  持续时间: item.duration,
  description: item.description,
  startDate: item.startDate,
  endDate: item.endDate
}));

const ImplementationRoadmap = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-xl"
    >
      <h2 className="text-2xl font-bold text-center mb-6">3.1 整体规划与实施路线</h2>
      
      <div className="mb-8">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            layout="vertical"
            data={chartData}
            margin={{ top: 20, right: 30, left: 100, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" domain={[0, 10]} />
            <YAxis dataKey="name" type="category" />
            <Tooltip 
              formatter={(value, name, props) => {
                if (name === '持续时间') {
                  return [`${value}个月`, name];
                }
                return [value, name];
              }}
              labelFormatter={(value) => {
                const item = implementationData.find(d => d.name === value);
                return `${item.name}: ${item.startDate} 至 ${item.endDate}`;
              }}
            />
            <Legend />
            <Bar dataKey="开始" stackId="a" fill="#8884d8" />
            <Bar dataKey="持续时间" stackId="a" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">实施阶段详情</h3>
        {implementationData.map((phase, index) => (
          <motion.div
            key={index}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="p-4 border-l-4 border-blue-500 bg-blue-50 rounded"
          >
            <h4 className="text-lg font-medium">{phase.name}</h4>
            <p className="text-sm text-gray-600">
              {phase.startDate} 至 {phase.endDate} · {phase.duration}个月
            </p>
            <p className="mt-2">{phase.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
        <h3 className="text-lg font-semibold mb-2">关键里程碑</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>2024年5月：完成需求分析，确定系统功能范围</li>
          <li>2024年6月：完成系统架构设计</li>
          <li>2024年8月：完成核心功能开发</li>
          <li>2024年10月：系统正式上线</li>
          <li>2024年12月：完成第一阶段功能优化</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default ImplementationRoadmap; 