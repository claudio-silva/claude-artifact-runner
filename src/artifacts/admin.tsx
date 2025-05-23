import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, LogOut, Save } from 'lucide-react';

// 获取所有组件路径
const pages = import.meta.glob('./**/*.tsx', { eager: true }) as Record<string, { 
  default: React.ComponentType;
  meta?: {
    title?: string;
    description?: string;
    isHidden?: boolean;
    category?: string;
    order?: number;
  };
}>;

export const meta = {
  title: "管理面板",
  description: "路由访问控制面板",
  isHidden: true
};

interface RouteSettings {
  [key: string]: boolean;
}

const AdminPanel = () => {
  const navigate = useNavigate();
  const [routeSettings, setRouteSettings] = useState<RouteSettings>({});
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  
  // 验证管理员权限
  useEffect(() => {
    const adminToken = sessionStorage.getItem('admin_token');
    if (!adminToken) {
      navigate('/');
      return;
    }
    
    // 加载路由配置
    const loadRouteSettings = async () => {
      try {
        const response = await fetch('/.netlify/functions/get-route-settings');
        const data = await response.json();
        
        if (data.success) {
          setRouteSettings(data.settings || {});
        } else {
          console.error('加载设置失败');
        }
      } catch (err) {
        console.error('加载设置时出错:', err);
      } finally {
        setLoading(false);
      }
    };
    
    loadRouteSettings();
  }, [navigate]);
  
  // 保存设置
  const saveSettings = async () => {
    setSaving(true);
    try {
      const response = await fetch('/.netlify/functions/update-route-settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          settings: routeSettings,
          token: sessionStorage.getItem('admin_token') 
        }),
      });
      
      const data = await response.json();
      if (!data.success) {
        alert('保存失败: ' + data.message);
      }
    } catch (err) {
      console.error('保存设置时出错:', err);
      alert('保存时发生错误');
    } finally {
      setSaving(false);
    }
  };
  
  // 注销
  const logout = () => {
    sessionStorage.removeItem('admin_token');
    navigate('/');
  };
  
  // 处理路由切换
  const handleRouteToggle = (route: string, enabled: boolean) => {
    setRouteSettings(prev => ({
      ...prev,
      [route]: enabled
    }));
  };
  
  // 生成路由列表
  const getRouteList = () => {
    const routes = Object.entries(pages)
      .filter(([path]) => path !== './directory.tsx' && path !== './admin.tsx' && path !== './index.tsx')
      .map(([path, module]) => {
        const routePath = path.replace('./', '').replace('.tsx', '');
        const title = module.meta?.title || routePath;
        const description = module.meta?.description || '';
        
        // 过滤搜索结果
        if (searchQuery && !title.toLowerCase().includes(searchQuery.toLowerCase())) {
          return null;
        }
        
        // 为新路由设置默认值
        if (routeSettings[routePath] === undefined) {
          handleRouteToggle(routePath, true);
        }
        
        return (
          <Card key={routePath} className="mb-4">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{title}</CardTitle>
                  <CardDescription>{description}</CardDescription>
                </div>
                <Switch 
                  checked={routeSettings[routePath] !== false}
                  onCheckedChange={(checked) => handleRouteToggle(routePath, checked)}
                />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">路径: /{routePath}</p>
            </CardContent>
          </Card>
        );
      })
      .filter(Boolean);
      
    return routes;
  };

  if (loading) {
    return <div className="p-8 text-center">加载中...</div>;
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">路由管理</h1>
        <div className="flex gap-2">
          <Button variant="outline" onClick={logout}>
            <LogOut className="h-4 w-4 mr-2" />
            退出
          </Button>
          <Button onClick={saveSettings} disabled={saving}>
            <Save className="h-4 w-4 mr-2" />
            {saving ? '保存中...' : '保存配置'}
          </Button>
        </div>
      </div>
      
      <div className="mb-6 relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <Input
          placeholder="搜索路由..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>
      
      <div>
        {getRouteList()}
      </div>
    </div>
  );
};

export default AdminPanel; 