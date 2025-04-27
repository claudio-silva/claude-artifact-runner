import React, { useState, useEffect } from 'react';
import mermaid from 'mermaid';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

// 初始化 mermaid 配置
mermaid.initialize({
  startOnLoad: true,
  theme: 'default',
  securityLevel: 'loose',
});

const defaultDiagram = `graph TD
    A[开始] --> B{是否需要可视化?}
    B -->|是| C[使用 Mermaid]
    B -->|否| D[使用文本描述]
    C --> E[生成图表]
    D --> E
    E --> F[结束]`;

const MermaidPreview = () => {
  const [code, setCode] = useState(defaultDiagram);
  const [svg, setSvg] = useState('');
  const { toast } = useToast();

  const renderDiagram = async () => {
    try {
      const { svg } = await mermaid.render('mermaid-diagram', code);
      setSvg(svg);
    } catch (error) {
      toast({
        title: '图表渲染失败',
        description: error.message,
        variant: 'destructive',
      });
    }
  };

  useEffect(() => {
    renderDiagram();
  }, []);

  return (
    <div className="container mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Mermaid 图表预览</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <Textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="min-h-[300px] font-mono"
                placeholder="输入 Mermaid 图表代码..."
              />
              <Button onClick={renderDiagram}>更新预览</Button>
            </div>
            <div 
              className="border rounded-lg p-4 bg-white"
              dangerouslySetInnerHTML={{ __html: svg }}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MermaidPreview;