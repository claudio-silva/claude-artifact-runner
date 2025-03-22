import React, { useState } from 'react';

const GanttChart = () => {
  // 项目阶段和任务数据 - 根据实际情况调整
  const [phases, setPhases] = useState([
    {
      id: 1,
      name: '准备阶段',
      tasks: [
        { id: 1, name: '项目启动与团队组建', start: '03-22', end: '04-05', progress: 50, color: '#faad14' },
        { id: 2, name: '硬件设备采购', start: '04-01', end: '04-20', progress: 0, color: '#faad14' },
        { id: 3, name: '基础环境准备', start: '04-15', end: '04-30', progress: 0, color: '#faad14' }
      ]
    },
    {
      id: 2,
      name: '部署阶段',
      tasks: [
        { id: 4, name: '操作系统与基础软件安装', start: '04-21', end: '04-30', progress: 0, color: '#1890ff' },
        { id: 5, name: 'DeepSeek-32B模型部署', start: '05-01', end: '05-10', progress: 0, color: '#1890ff' },
        { id: 6, name: '模型量化与性能优化', start: '05-11', end: '05-20', progress: 0, color: '#1890ff' },
        { id: 7, name: 'API服务与权限体系构建', start: '05-11', end: '05-20', progress: 0, color: '#1890ff' }
      ]
    },
    {
      id: 3,
      name: '开发阶段',
      tasks: [
        { id: 8, name: '智标系统核心功能开发', start: '05-01', end: '05-20', progress: 0, color: '#52c41a' },
        { id: 9, name: '数擎系统核心功能开发', start: '05-10', end: '05-25', progress: 0, color: '#52c41a' },
        { id: 10, name: '方案大师核心功能开发', start: '05-15', end: '05-30', progress: 0, color: '#52c41a' },
        { id: 11, name: '应用功能测试与优化', start: '05-20', end: '06-05', progress: 0, color: '#52c41a' },
        { id: 12, name: '用户界面设计与实现', start: '05-15', end: '06-05', progress: 0, color: '#52c41a' }
      ]
    },
    {
      id: 4,
      name: '验证阶段',
      tasks: [
        { id: 13, name: '用户试点与反馈收集', start: '05-25', end: '06-05', progress: 0, color: '#722ed1' },
        { id: 14, name: '应用优化与完善', start: '05-25', end: '06-05', progress: 0, color: '#722ed1' },
        { id: 15, name: '系统文档编写', start: '05-25', end: '06-05', progress: 0, color: '#722ed1' },
        { id: 16, name: '内部预验收', start: '06-06', end: '06-10', progress: 0, color: '#722ed1' }
      ]
    },
    {
      id: 5,
      name: '验收阶段',
      tasks: [
        { id: 17, name: '验收材料准备', start: '06-06', end: '06-10', progress: 0, color: '#f5222d' },
        { id: 18, name: '应用演示准备', start: '06-06', end: '06-10', progress: 0, color: '#f5222d' },
        { id: 19, name: '总部验收支持', start: '06-11', end: '06-20', progress: 0, color: '#f5222d' },
        { id: 20, name: '问题整改与优化', start: '06-21', end: '06-30', progress: 0, color: '#f5222d' }
      ]
    }
  ]);

  // 计算甘特图的时间跨度
  const startDate = new Date(2025, 2, 22); // 2025年3月22日
  const endDate = new Date(2025, 5, 30);   // 2025年6月30日
  const totalDays = Math.floor((endDate - startDate) / (24 * 60 * 60 * 1000)) + 1;
  
  // 将日期字符串转换为相对于起始日期的天数
  const getDayOffset = (dateStr) => {
    const [month, day] = dateStr.split('-').map(Number);
    const date = new Date(2025, month - 1, day);
    return Math.floor((date - startDate) / (24 * 60 * 60 * 1000));
  };
  
  // 生成日期标签
  const generateDateLabels = () => {
    const labels = [];
    for (let i = 0; i < totalDays; i += 7) {
      const date = new Date(startDate);
      date.setDate(date.getDate() + i);
      const month = date.getMonth() + 1;
      const day = date.getDate();
      labels.push(`${month}/${day}`);
    }
    return labels;
  };
  
  const dateLabels = generateDateLabels();
  
  // 渲染标尺
  const renderRuler = () => {
    return (
      <div className="flex mx-4">
        <div className="w-48"></div>
        <div className="flex-1 flex">
          {dateLabels.map((label, index) => (
            <div key={index} className="flex-1 text-xs text-center font-medium text-gray-500">
              {label}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  // 渲染阶段和任务
  const renderPhases = () => {
    return phases.map(phase => (
      <div key={phase.id} className="mb-4">
        <div className="flex items-center mb-2 bg-gray-100 p-2 rounded">
          <div className="font-bold text-lg text-gray-700">{phase.name}</div>
        </div>
        {renderTasks(phase.tasks)}
      </div>
    ));
  };
  
  // 渲染任务
  const renderTasks = (tasks) => {
    return tasks.map(task => {
      const startOffset = getDayOffset(task.start);
      const endOffset = getDayOffset(task.end);
      const duration = endOffset - startOffset + 1;
      const barWidth = `${(duration / totalDays) * 100}%`;
      const barOffset = `${(startOffset / totalDays) * 100}%`;
      
      return (
        <div key={task.id} className="flex items-center mb-2 h-10">
          <div className="w-48 pr-4 truncate font-medium text-sm">{task.name}</div>
          <div className="flex-1 relative h-6">
            <div className="absolute h-6 rounded-md" style={{ 
              left: barOffset, 
              width: barWidth, 
              backgroundColor: task.color,
              opacity: 0.2
            }}></div>
            <div className="absolute h-6 rounded-md" style={{ 
              left: barOffset, 
              width: `calc(${barWidth} * ${task.progress / 100})`, 
              backgroundColor: task.color 
            }}></div>
            <div className="absolute text-xs text-white font-bold h-6 flex items-center justify-center" 
                 style={{ left: barOffset, width: barWidth }}>
              {task.progress > 10 ? `${task.progress}%` : ''}
            </div>
          </div>
        </div>
      );
    });
  };
  
  // 生成图例
  const renderLegend = () => {
    const legends = [
      { name: '准备阶段', color: '#faad14' },
      { name: '部署阶段', color: '#1890ff' },
      { name: '开发阶段', color: '#52c41a' },
      { name: '验证阶段', color: '#722ed1' },
      { name: '验收阶段', color: '#f5222d' }
    ];
    
    return (
      <div className="flex justify-center mt-6 mb-2">
        {legends.map((legend, index) => (
          <div key={index} className="flex items-center mx-3">
            <div className="w-3 h-3 rounded-sm mr-1" style={{ backgroundColor: legend.color }}></div>
            <span className="text-xs text-gray-600">{legend.name}</span>
          </div>
        ))}
      </div>
    );
  };

  // 计算当前整体进度
  const calculateOverallProgress = () => {
    let totalTasks = 0;
    let completedWork = 0;
    
    phases.forEach(phase => {
      phase.tasks.forEach(task => {
        const taskWeight = getDayOffset(task.end) - getDayOffset(task.start) + 1;
        totalTasks += taskWeight;
        completedWork += taskWeight * (task.progress / 100);
      });
    });
    
    return Math.round((completedWork / totalTasks) * 100);
  };
  
  const overallProgress = calculateOverallProgress();
  
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-center mb-4">中通南方七分公司DeepSeek项目实施进度表</h2>
      <div className="overflow-x-auto">
        {renderRuler()}
        <div className="border-t border-gray-200 pt-2">
          {renderPhases()}
        </div>
        {renderLegend()}
      </div>
      <div className="mt-4 text-center text-sm text-gray-500">
        <p>当前日期: 2025年3月22日 | 预计验收日期: 2025年6月15日</p>
        <p className="mt-1">整体项目进度: <span className="font-bold text-blue-600">{overallProgress}%</span></p>
      </div>
      <div className="mt-4 bg-yellow-50 p-3 rounded-md border border-yellow-200">
        <p className="text-sm text-yellow-700">
          <span className="font-bold">注意:</span> 目前仅完成策划书，设备采购预计4月中旬才能到位，整体进度需要紧密监控以确保6月验收期限。
        </p>
      </div>
    </div>
  );
};

export default GanttChart;