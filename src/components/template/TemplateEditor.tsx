/**
 * 模板编辑器组件 - 用于编辑报告模板的完整界面
 */

import React, { useState } from 'react';
import { Save, X, FileText, Sparkles } from 'lucide-react';
import type { ReportTemplateConfig, TemplateSection } from '@/types/template';
import { SectionTree } from './SectionTree';

interface TemplateEditorProps {
  template: ReportTemplateConfig;
  onSave: (template: ReportTemplateConfig) => void;
  onCancel: () => void;
}

export const TemplateEditor: React.FC<TemplateEditorProps> = ({
  template: initialTemplate,
  onSave,
  onCancel,
}) => {
  const [template, setTemplate] = useState<ReportTemplateConfig>(initialTemplate);
  const [selectedSection, setSelectedSection] = useState<TemplateSection | null>(null);
  const [hasChanges, setHasChanges] = useState(false);

  // 更新模板基本信息
  const updateBasicInfo = <K extends keyof ReportTemplateConfig>(
    field: K,
    value: ReportTemplateConfig[K]
  ) => {
    setTemplate((prev) => ({ ...prev, [field]: value }));
    setHasChanges(true);
  };

  // 更新章节
  const updateSections = (sections: TemplateSection[]) => {
    setTemplate((prev) => ({ ...prev, sections }));
    setHasChanges(true);

    // 如果当前选中的章节被删除，清除选择
    if (selectedSection) {
      const findSection = (secs: TemplateSection[]): TemplateSection | null => {
        for (const sec of secs) {
          if (sec.id === selectedSection.id) return sec;
          if (sec.children) {
            const found = findSection(sec.children);
            if (found) return found;
          }
        }
        return null;
      };
      const updatedSection = findSection(sections);
      setSelectedSection(updatedSection);
    }
  };

  // 更新选中的章节
  const updateSelectedSection = <K extends keyof TemplateSection>(
    field: K,
    value: TemplateSection[K]
  ) => {
    if (!selectedSection) return;

    const updateSection = (secs: TemplateSection[]): TemplateSection[] => {
      return secs.map((sec) => {
        if (sec.id === selectedSection.id) {
          const updated = { ...sec, [field]: value };
          setSelectedSection(updated);
          return updated;
        }
        if (sec.children) {
          return { ...sec, children: updateSection(sec.children) };
        }
        return sec;
      });
    };

    setTemplate((prev) => ({ ...prev, sections: updateSection(prev.sections) }));
    setHasChanges(true);
  };

  // 验证章节完整性（递归检查所有章节和子章节）
  const validateSections = (sections: TemplateSection[]): string | null => {
    for (const section of sections) {
      if (!section.title.trim()) {
        return `章节层级 ${section.level} 的标题不能为空`;
      }
      if (!section.prompt.trim()) {
        return `章节"${section.title}"的提示词不能为空`;
      }
      // 递归验证子章节
      if (section.children && section.children.length > 0) {
        const childError = validateSections(section.children);
        if (childError) return childError;
      }
    }
    return null;
  };

  // 处理保存
  const handleSave = () => {
    // 验证基本信息
    if (!template.name.trim()) {
      alert('请输入模板名称');
      return;
    }
    if (!template.industry.trim()) {
      alert('请输入行业领域');
      return;
    }
    if (!template.systemRole.trim()) {
      alert('请输入系统角色');
      return;
    }
    if (template.sections.length === 0) {
      alert('请至少添加一个章节');
      return;
    }

    // 验证所有章节的标题和提示词
    const sectionError = validateSections(template.sections);
    if (sectionError) {
      alert(sectionError);
      return;
    }

    onSave(template);
    setHasChanges(false);
  };

  // 处理取消
  const handleCancel = () => {
    if (hasChanges) {
      if (!confirm('有未保存的更改，确定要取消吗？')) {
        return;
      }
    }
    onCancel();
  };

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* 顶部工具栏 */}
      <div className="bg-white border-b px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Sparkles className="h-6 w-6 text-blue-600 mr-3" />
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              {template.id.startsWith('tpl-') && template.id.length > 10
                ? '编辑模板'
                : '新建模板'}
            </h2>
            <p className="text-sm text-gray-500">设计报告的章节结构和生成提示词</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {hasChanges && (
            <span className="text-sm text-orange-600 font-medium">未保存的更改</span>
          )}
          <button
            onClick={handleCancel}
            className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors flex items-center"
          >
            <X className="h-4 w-4 mr-2" />
            取消
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
          >
            <Save className="h-4 w-4 mr-2" />
            保存模板
          </button>
        </div>
      </div>

      {/* 主要内容区 - 左右分栏 */}
      <div className="flex-1 flex overflow-hidden">
        {/* 左侧：基本信息 + 章节树 */}
        <div className="w-1/3 bg-white border-r overflow-y-auto p-6 space-y-6">
          {/* 基本信息 */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">基本信息</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  模板名称 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={template.name}
                  onChange={(e) => updateBasicInfo('name', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="如：市场分析报告"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  模板描述
                </label>
                <textarea
                  value={template.description}
                  onChange={(e) => updateBasicInfo('description', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="描述这个模板的用途..."
                  rows={3}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  分类
                </label>
                <input
                  type="text"
                  value={template.category}
                  onChange={(e) => updateBasicInfo('category', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="如：金融分析"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  行业领域 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={template.industry}
                  onChange={(e) => updateBasicInfo('industry', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="如：产权交易"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  系统角色 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={template.systemRole}
                  onChange={(e) => updateBasicInfo('systemRole', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="如：产权交易行业的专业分析师"
                />
              </div>

              <div>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={template.outputFormat.useWebSearch}
                    onChange={(e) =>
                      updateBasicInfo('outputFormat', {
                        ...template.outputFormat,
                        useWebSearch: e.target.checked,
                      })
                    }
                    className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                  />
                  <span className="text-sm font-medium text-gray-700">默认使用网络检索</span>
                </label>
                <p className="text-xs text-gray-500 mt-1 ml-6">
                  启用后生成报告时将从互联网获取最新数据
                </p>
              </div>
            </div>
          </div>

          {/* 章节树 */}
          <div>
            <SectionTree
              sections={template.sections}
              onUpdate={updateSections}
              onSelectSection={setSelectedSection}
              selectedSectionId={selectedSection?.id}
            />
          </div>
        </div>

        {/* 右侧：章节详情编辑 */}
        <div className="flex-1 bg-gray-50 overflow-y-auto p-6">
          {selectedSection ? (
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center mb-6">
                <FileText className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">章节详情</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    章节标题 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={selectedSection.title}
                    onChange={(e) => updateSelectedSection('title', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="如：一、市场概况"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    这将作为报告中的章节标题
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    生成提示词 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={selectedSection.prompt}
                    onChange={(e) => updateSelectedSection('prompt', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={selectedSection.placeholder || '输入该章节的具体生成要求...'}
                    rows={6}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    AI 将根据这个提示词生成该章节的内容。请尽量具体，包括需要包含的数据类型、分析角度等。
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      层级
                    </label>
                    <input
                      type="number"
                      value={selectedSection.level}
                      readOnly
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      层级由章节位置自动确定
                    </p>
                  </div>

                  <div>
                    <label className="flex items-center space-x-2 mt-8">
                      <input
                        type="checkbox"
                        checked={selectedSection.isRequired || false}
                        onChange={(e) => updateSelectedSection('isRequired', e.target.checked)}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                      />
                      <span className="text-sm font-medium text-gray-700">标记为必需章节</span>
                    </label>
                  </div>
                </div>

                {/* 提示词示例 */}
                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="text-sm font-semibold text-blue-900 mb-2">提示词编写建议</h4>
                  <ul className="text-xs text-blue-800 space-y-1">
                    <li>• 明确指出需要包含哪些类型的数据（如：成交额、增长率、占比等）</li>
                    <li>• 说明分析的角度和深度（如：对比分析、趋势分析、原因剖析等）</li>
                    <li>• 可以举例说明期望的内容格式</li>
                    <li>• 对于数据章节，建议要求标注数据来源</li>
                  </ul>
                  <div className="mt-3 text-xs text-blue-700">
                    <strong>示例：</strong>
                    "分析产权交易市场的规模、成交额、增长率等核心数据，包括股权类、实物资产类、债权类的交易占比"
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-gray-400">
              <div className="text-center">
                <FileText className="h-16 w-16 mx-auto mb-4 opacity-50" />
                <p className="text-lg font-medium">请从左侧选择一个章节</p>
                <p className="text-sm">点击章节即可编辑其标题和提示词</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
