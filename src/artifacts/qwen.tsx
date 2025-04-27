// App.tsx
import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle, CheckCircle, Info, Layers, Settings } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './components/ui/tooltip';

type NodeType = {
  id: string;
  label: string;
  type: 'core' | 'module' | 'service' | 'integration';
  x: number;
  y: number;
  children?: NodeType[];
  description: string;
  status?: 'healthy' | 'warning' | 'critical';
};

const initialNodes: NodeType[] = [
  {
    id: 'core',
    label: '数字基座核心', 
    type: 'core',
    x: 50,
    y: 50,
    description: '基于微服务架构的底层平台',
    children: [
      {
        id: 'auth',
        label: '统一认证中心',
        type: 'module',
        x: 30,
        y: 30,
        description: 'OAuth2 + JWT 认证体系',
        status: 'healthy',
      },
      // ...其他核心模块
    ],
  },
  // ...其他顶层节点
];

const ArchitectureDiagram = () => {
  const [nodes, setNodes] = useState<NodeType[]>(initialNodes);
  const [selectedNode, setSelectedNode] = useState<NodeType | null>(null);
  const [showAll, setShowAll] = useState(false);

  const toggleNode = (id: string) => {
    setNodes((prev) =>
      prev.map((node) =>
        node.id === id
          ? { ...node, children: node.children?.map((c) => ({ ...c, visible: !c.visible })) }
          : node
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">学校数字基座架构图</h1>
        
        <div className="grid grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>系统健康度</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <CheckCircle className="h-12 w-12 text-green-500" />
                <div>
                  <p>98% 正常运行</p>
                  <p className="text-sm text-gray-500">最近24小时</p>
                </div>
              </div>
            </CardContent>
          </Card>
          {/* 其他统计卡片 */}
        </div>

        <div className="relative">
          <svg className="w-full h-[600px] border rounded-lg bg-white">
            {nodes.map((node) => (
              <g key={node.id}>
                <NodeComponent
                  node={node}
                  onToggle={toggleNode}
                  onSelect={setSelectedNode}
                  showAll={showAll}
                />
              </g>
            ))}
          </svg>
          
          <div className="absolute top-0 right-0 p-4">
            <Button onClick={() => setShowAll(!showAll)}>
              {showAll ? '折叠所有' : '展开所有'}
            </Button>
          </div>
        </div>

        {selectedNode && (
          <NodeDetailsPanel node={selectedNode} onClose={() => setSelectedNode(null)} />
        )}
      </div>
    </div>
  );
};

const NodeComponent = ({
  node,
  onToggle,
  onSelect,
  showAll,
}: {
  node: NodeType;
  onToggle: (id: string) => void;
  onSelect: (node: NodeType) => void;
  showAll: boolean;
}) => {
  const hasChildren = node.children && node.children.length > 0;
  const visible = showAll || node.visible;

  return (
    <g transform={`translate(${node.x * 30}, ${node.y * 30})`}>
      <foreignObject width={200} height={100}>
        <Card className="shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="p-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-semibold">{node.label}</CardTitle>
              {hasChildren && (
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggle(node.id);
                  }}
                >
                  <Layers className="h-4 w-4" />
                </Button>
              )}
            </div>
          </CardHeader>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <StatusIndicator status={node.status} />
              <span className="text-xs text-gray-500">{node.type}</span>
            </div>
          </CardContent>
        </Card>
      </foreignObject>

      {node.children?.map((child) => (
        <NodeComponent
          key={child.id}
          node={{ ...child, visible: visible }}
          onToggle={onToggle}
          onSelect={onSelect}
          showAll={showAll}
        />
      ))}
    </g>
  );
};

const StatusIndicator = ({ status }: { status?: string }) => {
  const colorMap: Record<string, string> = {
    healthy: 'green',
    warning: 'amber',
    critical: 'red',
  };

  return (
    <div
      className={`h-2 w-2 rounded-full ${
        colorMap[status || 'healthy']
      } bg-current`}
    />
  );
};

const NodeDetailsPanel = ({
  node,
  onClose,
}: {
  node: NodeType;
  onClose: () => void;
}) => {
  return (
    <div className="fixed top-0 right-0 w-96 h-full bg-white shadow-lg p-6 overflow-y-auto">
      <Button variant="ghost" onClick={onClose} className="mb-4">
        ← 返回
      </Button>
      <h2 className="text-2xl font-bold mb-4">{node.label}</h2>
      <p className="text-gray-600 mb-4">{node.description}</p>
      
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>运行状态</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <StatusIndicator status={node.status} />
              <span>{node.status || 'healthy'}</span>
            </div>
          </CardContent>
        </Card>
        {/* 其他信息面板 */}
      </div>
    </div>
  );
};

export default ArchitectureDiagram;