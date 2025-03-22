import React from 'react';

const ArchitectureBox = ({ title, color, children }) => {
  const colors = {
    blue: "bg-blue-50 border-blue-400 text-blue-800",
    green: "bg-green-50 border-green-400 text-green-800",
    orange: "bg-orange-50 border-orange-400 text-orange-800",
    purple: "bg-purple-50 border-purple-400 text-purple-800",
    gray: "bg-gray-50 border-gray-400 text-gray-800"
  };

  return (
    <div className={`border-2 rounded-md p-2 ${colors[color]} mb-4`}>
      <div className="font-bold text-lg mb-2 pl-2">{title}</div>
      <div className="flex flex-wrap gap-2 justify-around">
        {children}
      </div>
    </div>
  );
};

const Component = ({ title, color, width = "w-1/4", height = "h-12" }) => {
  const colors = {
    blue: "bg-blue-50 border-blue-400 text-blue-800",
    green: "bg-green-50 border-green-400 text-green-800",
    orange: "bg-orange-50 border-orange-400 text-orange-800",
    purple: "bg-purple-50 border-purple-400 text-purple-800",
    gray: "bg-gray-50 border-gray-400 text-gray-800"
  };

  return (
    <div className={`border rounded-md ${colors[color]} ${width} ${height} flex items-center justify-center text-center p-2 text-sm`}>
      {title}
    </div>
  );
};

const Arrow = () => (
  <div className="flex justify-center w-full my-1">
    <svg width="24" height="24" viewBox="0 0 24 24" className="text-gray-600">
      <path fill="currentColor" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
    </svg>
  </div>
);

const Legend = () => (
  <div className="border rounded-md p-3 bg-white mb-4">
    <div className="font-bold mb-2">图例</div>
    <div className="flex items-center mb-1">
      <div className="w-4 h-4 bg-purple-50 border border-purple-400 mr-2"></div>
      <span className="text-sm">应用组件</span>
    </div>
    <div className="flex items-center mb-1">
      <div className="w-4 h-4 bg-orange-50 border border-orange-400 mr-2"></div>
      <span className="text-sm">服务组件</span>
    </div>
    <div className="flex items-center mb-1">
      <div className="w-4 h-4 bg-green-50 border border-green-400 mr-2"></div>
      <span className="text-sm">数据组件</span>
    </div>
    <div className="flex items-center mb-1">
      <div className="w-4 h-4 bg-blue-50 border border-blue-400 mr-2"></div>
      <span className="text-sm">基础设施组件</span>
    </div>
  </div>
);

const DigitalPlatformArchitecture = () => {
  return (
    <div className="p-4 bg-gray-100 font-sans">
      <div className="flex justify-between items-start mb-4">
        <h1 className="text-2xl font-bold text-center mb-4">校级数字基座架构图 v1.0 (2025-03-07)</h1>
        <Legend />
      </div>
      
      {/* 接入层 */}
      <ArchitectureBox title="接入层" color="purple">
        <Component title="教师/管理端" color="purple" />
        <Component title="学生端" color="purple" />
        <Component title="家长端" color="purple" />
        <Component title="教育平板" color="purple" />
        <Component title="班牌设备" color="purple" />
        <Component title="智能终端" color="purple" />
      </ArchitectureBox>
      
      <Arrow />
      
      {/* 统一门户层 */}
      <ArchitectureBox title="统一门户层" color="purple">
        <Component title="数字空间(Web端)" color="purple" width="w-1/5" />
        <Component title="数字空间(移动端)" color="purple" width="w-1/5" />
        <Component title="统一搜索服务" color="purple" width="w-1/5" />
        <Component title="消息推送中心" color="purple" width="w-1/5" />
      </ArchitectureBox>
      
      <Arrow />
      
      {/* 业务应用层 */}
      <ArchitectureBox title="业务应用层" color="purple">
        <div className="w-full flex flex-wrap gap-2 justify-around mb-2">
          <Component title="智慧教学" color="purple" width="w-1/6" />
          <Component title="智慧学习" color="purple" width="w-1/6" />
          <Component title="智慧评价" color="purple" width="w-1/6" />
          <Component title="教务管理" color="purple" width="w-1/6" />
          <Component title="校园管理" color="purple" width="w-1/6" />
          <Component title="家校共育" color="purple" width="w-1/6" />
        </div>
        <div className="w-full flex flex-wrap gap-2 justify-around">
          <Component title="教师发展" color="purple" width="w-1/6" />
          <Component title="资源管理" color="purple" width="w-1/6" />
          <Component title="智能排课" color="purple" width="w-1/6" />
          <Component title="考务管理" color="purple" width="w-1/6" />
          <Component title="数据分析" color="purple" width="w-1/6" />
          <Component title="校级驾驶舱" color="purple" width="w-1/6" />
        </div>
      </ArchitectureBox>
      
      <Arrow />
      
      {/* 基座服务层 */}
      <div className="flex gap-4 mb-4">
        <div className="w-1/4">
          <div className="border-2 rounded-md p-2 bg-orange-50 border-orange-400 text-orange-800 h-full">
            <div className="font-bold text-lg mb-2 pl-2">五大中心</div>
            <div className="grid grid-cols-2 gap-2 p-2">
              <Component title="组织中心" color="orange" width="w-full" height="h-10" />
              <Component title="应用中心" color="orange" width="w-full" height="h-10" />
              <Component title="数据中心" color="orange" width="w-full" height="h-10" />
              <Component title="消息中心" color="orange" width="w-full" height="h-10" />
              <Component title="开发助手" color="orange" width="w-full" height="h-10" />
            </div>
          </div>
        </div>
        
        <div className="w-3/4">
          <div className="border-2 rounded-md p-2 bg-orange-50 border-orange-400 text-orange-800 h-full">
            <div className="font-bold text-lg mb-2 pl-2">核心微服务集群</div>
            <div className="grid grid-cols-4 gap-2 mb-2">
              <Component title="统一身份认证(OAuth2.0)" color="orange" width="w-full" height="h-16" />
              <Component title="数据服务(REST/GraphQL)" color="orange" width="w-full" height="h-16" />
              <Component title="低代码平台" color="orange" width="w-full" height="h-16" />
              <Component title="API网关(Kong/Zuul)" color="orange" width="w-full" height="h-16" />
            </div>
            <div className="grid grid-cols-4 gap-2">
              <Component title="流程编排(Workflow)" color="orange" width="w-full" height="h-16" />
              <Component title="AI引擎(大模型能力)" color="orange" width="w-full" height="h-16" />
              <Component title="设备管理服务(IOT Hub)" color="orange" width="w-full" height="h-16" />
              <Component title="开放API服务" color="orange" width="w-full" height="h-16" />
            </div>
          </div>
        </div>
      </div>
      
      <Arrow />
      
      {/* 中间件层 */}
      <ArchitectureBox title="中间件层" color="green">
        <Component title="消息队列(Kafka/RabbitMQ)" color="green" width="w-1/5" />
        <Component title="缓存服务(Redis集群)" color="green" width="w-1/5" />
        <Component title="服务注册与发现(Nacos)" color="green" width="w-1/5" />
        <Component title="配置中心(Apollo)" color="green" width="w-1/5" />
        <Component title="分布式日志(ELK Stack)" color="green" width="w-1/5" />
      </ArchitectureBox>
      
      <Arrow />
      
      {/* 数据存储层 */}
      <ArchitectureBox title="数据存储层" color="green">
        <Component title="关系型数据库(MySQL主从)" color="green" width="w-1/5" />
        <Component title="数据仓库(Data Warehouse)" color="green" width="w-1/5" />
        <Component title="对象存储(MinIO/S3)" color="green" width="w-1/5" />
        <Component title="文件系统(HDFS/NFS)" color="green" width="w-1/5" />
      </ArchitectureBox>
      
      <Arrow />
      
      {/* 基础设施层 */}
      <ArchitectureBox title="基础设施层" color="blue">
        <Component title="计算资源" color="blue" />
        <Component title="存储资源" color="blue" />
        <Component title="网络资源" color="blue" />
        <Component title="安全资源" color="blue" />
        <Component title="负载均衡" color="blue" />
      </ArchitectureBox>
      
      {/* 贯穿层 - 垂直方向 */}
      <div className="fixed top-20 right-4 w-64 border-2 rounded-md p-2 bg-blue-50 border-blue-400 text-blue-800">
        <div className="font-bold text-lg mb-2 text-center">贯穿层</div>
        
        <div className="mb-3">
          <div className="font-semibold mb-1 text-center">安全体系</div>
          <div className="flex flex-wrap gap-1 justify-center">
            <span className="text-xs bg-blue-100 px-2 py-1 rounded">身份认证</span>
            <span className="text-xs bg-blue-100 px-2 py-1 rounded">权限控制</span>
            <span className="text-xs bg-blue-100 px-2 py-1 rounded">数据加密</span>
          </div>
        </div>
        
        <div className="mb-3">
          <div className="font-semibold mb-1 text-center">监控运维</div>
          <div className="flex flex-wrap gap-1 justify-center">
            <span className="text-xs bg-blue-100 px-2 py-1 rounded">系统监控</span>
            <span className="text-xs bg-blue-100 px-2 py-1 rounded">日志分析</span>
            <span className="text-xs bg-blue-100 px-2 py-1 rounded">告警管理</span>
          </div>
        </div>
        
        <div className="mb-3">
          <div className="font-semibold mb-1 text-center">标准规范</div>
          <div className="flex flex-wrap gap-1 justify-center">
            <span className="text-xs bg-blue-100 px-2 py-1 rounded">接口标准</span>
            <span className="text-xs bg-blue-100 px-2 py-1 rounded">数据标准</span>
            <span className="text-xs bg-blue-100 px-2 py-1 rounded">开发规范</span>
          </div>
        </div>
        
        <div className="mb-1">
          <div className="font-semibold mb-1 text-center">运行保障</div>
          <div className="flex flex-wrap gap-1 justify-center">
            <span className="text-xs bg-blue-100 px-2 py-1 rounded">高可用部署</span>
            <span className="text-xs bg-blue-100 px-2 py-1 rounded">灾备恢复</span>
            <span className="text-xs bg-blue-100 px-2 py-1 rounded">环境隔离</span>
          </div>
        </div>
      </div>
      
      {/* 环境信息 */}
      <div className="fixed left-4 bottom-10">
        <div className="border rounded-md p-2 bg-white mb-2 text-sm">
          <div className="font-bold mb-1">环境划分</div>
          <div className="flex items-center mb-1">
            <div className="w-3 h-3 bg-green-400 mr-2 rounded-full"></div>
            <span>生产环境</span>
          </div>
          <div className="flex items-center mb-1">
            <div className="w-3 h-3 bg-yellow-400 mr-2 rounded-full"></div>
            <span>测试环境</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-400 mr-2 rounded-full"></div>
            <span>开发环境</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalPlatformArchitecture;
