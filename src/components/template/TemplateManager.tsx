/**
 * 模板管理器组件 - 显示和管理所有报告模板
 */

import React, { useState } from 'react';
import {
  Plus,
  Edit3,
  Trash2,
  Copy,
  Download,
  Upload,
  FileText,
  Search,
  X,
} from 'lucide-react';
import type { ReportTemplateConfig } from '@/types/template';

interface TemplateManagerProps {
  templates: ReportTemplateConfig[];
  onEdit: (template: ReportTemplateConfig) => void;
  onDelete: (templateId: string) => void;
  onDuplicate: (template: ReportTemplateConfig) => void;
  onExport: (template: ReportTemplateConfig) => void;
  onImport: (jsonString: string) => void;
  onCreate: () => void;
}

export const TemplateManager: React.FC<TemplateManagerProps> = ({
  templates,
  onEdit,
  onDelete,
  onDuplicate,
  onExport,
  onImport,
  onCreate,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // 获取所有分类
  const categories = ['all', ...Array.from(new Set(templates.map((t) => t.category)))];

  // 过滤模板
  const filteredTemplates = templates.filter((template) => {
    const matchesSearch =
      template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // 处理导入
  const handleImportClick = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event) => {
        const content = event.target?.result as string;
        try {
          onImport(content);
        } catch (error) {
          alert('导入失败：JSON 格式不正确');
        }
      };
      reader.readAsText(file);
    };
    input.click();
  };

  // 处理删除
  const handleDelete = (template: ReportTemplateConfig) => {
    if (confirm(`确定要删除模板"${template.name}"吗？此操作不可恢复！`)) {
      onDelete(template.id);
    }
  };

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* 顶部工具栏 */}
      <div className="bg-white border-b px-6 py-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold text-gray-900">模板管理</h2>
            <p className="text-sm text-gray-500">管理您的报告模板</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleImportClick}
              className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors flex items-center"
            >
              <Upload className="h-4 w-4 mr-2" />
              导入模板
            </button>
            <button
              onClick={onCreate}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
            >
              <Plus className="h-4 w-4 mr-2" />
              新建模板
            </button>
          </div>
        </div>

        {/* 搜索和筛选 */}
        <div className="flex items-center gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="搜索模板名称或描述..."
              className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat === 'all' ? '全部分类' : cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* 模板列表 */}
      <div className="flex-1 overflow-y-auto p-6">
        {filteredTemplates.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTemplates.map((template) => (
              <div
                key={template.id}
                className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <div className="p-5">
                  {/* 标题和描述 */}
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-gray-900 text-lg">{template.name}</h3>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                        {template.category}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {template.description || '暂无描述'}
                    </p>
                  </div>

                  {/* 元信息 */}
                  <div className="mb-4 space-y-1">
                    <div className="flex items-center text-xs text-gray-500">
                      <FileText className="h-3 w-3 mr-1.5 flex-shrink-0" />
                      <span className="truncate">行业：{template.industry}</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <FileText className="h-3 w-3 mr-1.5 flex-shrink-0" />
                      <span className="truncate">章节数：{template.sections.length}</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <FileText className="h-3 w-3 mr-1.5 flex-shrink-0" />
                      <span className="truncate">
                        版本：{template.metadata.version || '1.0.0'}
                      </span>
                    </div>
                  </div>

                  {/* 操作按钮 */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onEdit(template)}
                      className="flex-1 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm flex items-center justify-center"
                    >
                      <Edit3 className="h-3 w-3 mr-1.5" />
                      编辑
                    </button>
                    <button
                      onClick={() => onDuplicate(template)}
                      className="px-3 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                      title="复制"
                    >
                      <Copy className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => onExport(template)}
                      className="px-3 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                      title="导出"
                    >
                      <Download className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(template)}
                      className="px-3 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
                      title="删除"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* 底部标签 */}
                {template.metadata.tags && template.metadata.tags.length > 0 && (
                  <div className="px-5 py-3 bg-gray-50 border-t border-gray-200">
                    <div className="flex flex-wrap gap-1.5">
                      {template.metadata.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">
            <div className="text-center">
              <FileText className="h-16 w-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg font-medium">
                {searchQuery || selectedCategory !== 'all'
                  ? '没有找到匹配的模板'
                  : '暂无模板'}
              </p>
              <p className="text-sm mt-2">
                {searchQuery || selectedCategory !== 'all'
                  ? '尝试调整搜索条件'
                  : '点击"新建模板"开始创建'}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 底部统计 */}
      <div className="bg-white border-t px-6 py-3">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>共 {templates.length} 个模板</span>
          {searchQuery || selectedCategory !== 'all' ? (
            <span>显示 {filteredTemplates.length} 个结果</span>
          ) : null}
        </div>
      </div>
    </div>
  );
};
