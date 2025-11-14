/**
 * 模板编辑器页面 - 独立的模板管理和编辑界面
 */

import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import type { ReportTemplateConfig } from '@/types/template';
import { TemplateManager } from '@/components/template/TemplateManager';
import { TemplateEditor } from '@/components/template/TemplateEditor';
import {
  loadTemplates,
  saveTemplate,
  deleteTemplate,
  exportTemplate,
  importTemplate,
} from '@/lib/templateStorage';

type ViewMode = 'list' | 'edit';

export const meta = {
  title: '模板编辑器',
  description: '管理和编辑报告模板',
  category: '产权交易',
  order: 2,
};

export default function TemplateEditorPage() {
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const [templates, setTemplates] = useState<ReportTemplateConfig[]>([]);
  const [editingTemplate, setEditingTemplate] = useState<ReportTemplateConfig | null>(null);

  // 加载模板列表
  useEffect(() => {
    refreshTemplates();
  }, []);

  const refreshTemplates = () => {
    const loadedTemplates = loadTemplates();
    setTemplates(loadedTemplates);
  };

  // 创建新模板
  const handleCreate = () => {
    const newTemplate: ReportTemplateConfig = {
      id: `tpl-new-${Date.now()}`,
      name: '新模板',
      description: '',
      category: '自定义',
      industry: '',
      systemRole: '',
      sections: [],
      metadata: {
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        version: '1.0.0',
        tags: [],
      },
      outputFormat: {
        useWebSearch: false,
        formatInstructions: '请以专业、客观的语言撰写报告，确保逻辑清晰、数据准确。',
      },
    };
    setEditingTemplate(newTemplate);
    setViewMode('edit');
  };

  // 编辑模板
  const handleEdit = (template: ReportTemplateConfig) => {
    setEditingTemplate(template);
    setViewMode('edit');
  };

  // 保存模板
  const handleSave = (template: ReportTemplateConfig) => {
    // 更新时间戳
    const updatedTemplate = {
      ...template,
      metadata: {
        ...template.metadata,
        updatedAt: new Date().toISOString(),
      },
    };
    saveTemplate(updatedTemplate);
    refreshTemplates();
    setViewMode('list');
    setEditingTemplate(null);
  };

  // 取消编辑
  const handleCancel = () => {
    setViewMode('list');
    setEditingTemplate(null);
  };

  // 删除模板
  const handleDelete = (templateId: string) => {
    deleteTemplate(templateId);
    refreshTemplates();
  };

  // 复制模板
  const handleDuplicate = (template: ReportTemplateConfig) => {
    const duplicatedTemplate: ReportTemplateConfig = {
      ...template,
      id: `tpl-copy-${Date.now()}`,
      name: `${template.name}（副本）`,
      metadata: {
        ...template.metadata,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    };
    saveTemplate(duplicatedTemplate);
    refreshTemplates();
  };

  // 导出模板
  const handleExport = (template: ReportTemplateConfig) => {
    try {
      const jsonString = exportTemplate(template.id);
      const blob = new Blob([jsonString], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${template.name}-${Date.now()}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      alert(`导出失败：${error instanceof Error ? error.message : '未知错误'}`);
    }
  };

  // 导入模板
  const handleImport = (jsonString: string) => {
    try {
      const template = importTemplate(jsonString);
      saveTemplate(template);
      refreshTemplates();
      alert('导入成功！');
    } catch (error) {
      alert(`导入失败：${error instanceof Error ? error.message : 'JSON 格式不正确'}`);
    }
  };

  // 返回主页面
  const handleBackToMain = () => {
    window.location.href = '/产权/ai-content-factory-pro';
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* 顶部导航栏 */}
      <div className="bg-white border-b shadow-sm">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button
                onClick={handleBackToMain}
                className="mr-4 p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                title="返回报告生成器"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">报告模板管理</h1>
                <p className="text-sm text-gray-500">
                  {viewMode === 'list' ? '管理您的报告模板' : '编辑模板'}
                </p>
              </div>
            </div>
            {viewMode === 'list' && (
              <div className="text-sm text-gray-500">
                共 {templates.length} 个模板
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 主内容区 */}
      <div className="flex-1 overflow-hidden">
        {viewMode === 'list' ? (
          <TemplateManager
            templates={templates}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onDuplicate={handleDuplicate}
            onExport={handleExport}
            onImport={handleImport}
            onCreate={handleCreate}
          />
        ) : editingTemplate ? (
          <TemplateEditor
            template={editingTemplate}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        ) : null}
      </div>
    </div>
  );
}
