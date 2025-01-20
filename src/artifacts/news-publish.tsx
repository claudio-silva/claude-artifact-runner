import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { 
  Upload, 
  Save,
  Image as ImageIcon,
  Tags,
  FileText,
  Eye,
  CheckSquare
} from 'lucide-react';

const PublishNews = () => {
  const [formData, setFormData] = useState({
    title: '',
    summary: '',
    content: '',
    category: '',
    tags: [],
    coverImage: null,
    isTop: false,
    status: 'draft'
  });

  const categories = [
    { value: 'policy', label: '政策解读' },
    { value: 'tech', label: '技术动态' },
    { value: 'industry', label: '行业资讯' },
    { value: 'case', label: '案例分析' }
  ];

  const handleSubmit = (status) => {
    const data = { ...formData, status };
    console.log('提交数据:', data);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>发布资讯</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            {/* 基本信息 */}
            <div className="space-y-4">
              <div>
                <Label htmlFor="title">标题</Label>
                <Input 
                  id="title"
                  placeholder="请输入资讯标题"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                />
              </div>

              <div>
                <Label htmlFor="summary">摘要</Label>
                <Textarea
                  id="summary"
                  placeholder="请输入资讯摘要"
                  value={formData.summary}
                  onChange={(e) => setFormData({...formData, summary: e.target.value})}
                />
              </div>

              <div>
                <Label htmlFor="category">所属分类</Label>
                <Select 
                  onValueChange={(value) => setFormData({...formData, category: value})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="选择分类" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* 内容编辑区 */}
            <div>
              <Label htmlFor="content">正文内容</Label>
              <div className="border rounded-lg p-4">
                <div className="mb-4 flex items-center space-x-2 border-b pb-4">
                  <Button variant="outline" size="sm">
                    <ImageIcon className="h-4 w-4 mr-2" />
                    插入图片
                  </Button>
                  <Button variant="outline" size="sm">
                    <FileText className="h-4 w-4 mr-2" />
                    插入附件
                  </Button>
                </div>
                <Textarea
                  id="content"
                  placeholder="请输入正文内容"
                  value={formData.content}
                  onChange={(e) => setFormData({...formData, content: e.target.value})}
                  className="min-h-[300px]"
                />
              </div>
            </div>

            {/* 封面图片 */}
            <div>
              <Label>封面图片</Label>
              <div className="mt-2 flex items-center space-x-4">
                <div className="w-32 h-32 border-2 border-dashed rounded-lg flex items-center justify-center cursor-pointer hover:border-blue-500">
                  <div className="text-center">
                    <Upload className="mx-auto h-8 w-8 text-gray-400" />
                    <span className="mt-2 block text-sm text-gray-600">点击上传</span>
                  </div>
                </div>
                {formData.coverImage && (
                  <div className="relative w-32 h-32">
                    <img 
                      src={formData.coverImage} 
                      alt="Cover" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* 发布设置 */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch 
                  id="isTop"
                  checked={formData.isTop}
                  onCheckedChange={(checked) => setFormData({...formData, isTop: checked})}
                />
                <Label htmlFor="isTop">置顶文章</Label>
              </div>
            </div>

            {/* 操作按钮 */}
            <div className="flex justify-end space-x-4 pt-4 border-t">
              <Button 
                type="button"
                variant="outline"
                onClick={() => handleSubmit('draft')}
              >
                <Save className="mr-2 h-4 w-4" />
                保存草稿
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => handleSubmit('preview')}
              >
                <Eye className="mr-2 h-4 w-4" />
                预览
              </Button>
              <Button 
                type="button"
                onClick={() => handleSubmit('publish')}
              >
                <CheckSquare className="mr-2 h-4 w-4" />
                发布
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default PublishNews;