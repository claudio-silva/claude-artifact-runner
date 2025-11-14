/**
 * 章节树组件 - 用于显示和管理模板的章节结构
 */

import React, { useState } from 'react';
import { ChevronRight, ChevronDown, Plus, Trash2, FileText } from 'lucide-react';
import type { TemplateSection } from '@/types/template';

interface SectionTreeProps {
  sections: TemplateSection[];
  onUpdate: (sections: TemplateSection[]) => void;
  onSelectSection: (section: TemplateSection) => void;
  selectedSectionId?: string;
}

export const SectionTree: React.FC<SectionTreeProps> = ({
  sections,
  onUpdate,
  onSelectSection,
  selectedSectionId,
}) => {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set(sections.map(s => s.id)));

  const toggleExpand = (id: string) => {
    const newExpanded = new Set(expandedIds);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedIds(newExpanded);
  };

  // 生成新的章节ID
  const generateSectionId = () => {
    return `sec-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  };

  // 添加子章节
  const addChildSection = (parentId: string) => {
    const addChild = (secs: TemplateSection[]): TemplateSection[] => {
      return secs.map((sec) => {
        if (sec.id === parentId) {
          const newChild: TemplateSection = {
            id: generateSectionId(),
            title: '新章节',
            prompt: '',
            level: sec.level + 1,
            order: (sec.children?.length || 0) + 1,
            placeholder: '请输入该章节的生成要求...',
          };
          return {
            ...sec,
            children: [...(sec.children || []), newChild],
          };
        }
        if (sec.children) {
          return {
            ...sec,
            children: addChild(sec.children),
          };
        }
        return sec;
      });
    };

    const newSections = addChild(sections);
    onUpdate(newSections);
    setExpandedIds(new Set([...expandedIds, parentId]));
  };

  // 删除章节
  const deleteSection = (sectionId: string) => {
    if (!confirm('确定要删除这个章节吗？如果有子章节也会一并删除。')) {
      return;
    }

    const remove = (secs: TemplateSection[]): TemplateSection[] => {
      return secs
        .filter((sec) => sec.id !== sectionId)
        .map((sec) => {
          if (sec.children) {
            return {
              ...sec,
              children: remove(sec.children),
            };
          }
          return sec;
        });
    };

    onUpdate(remove(sections));
  };

  // 添加根章节
  const addRootSection = () => {
    const newSection: TemplateSection = {
      id: generateSectionId(),
      title: '新章节',
      prompt: '',
      level: 1,
      order: sections.length + 1,
      placeholder: '请输入该章节的生成要求...',
    };
    onUpdate([...sections, newSection]);
  };

  // 渲染单个章节
  const renderSection = (section: TemplateSection, depth: number = 0) => {
    const hasChildren = section.children && section.children.length > 0;
    const isExpanded = expandedIds.has(section.id);
    const isSelected = section.id === selectedSectionId;

    return (
      <div key={section.id} className="select-none">
        {/* 章节行 */}
        <div
          className={`
            flex items-center py-2 px-3 cursor-pointer hover:bg-blue-50 rounded transition-colors
            ${isSelected ? 'bg-blue-100 border-l-4 border-blue-500' : ''}
          `}
          style={{ paddingLeft: `${depth * 20 + 12}px` }}
          onClick={() => onSelectSection(section)}
        >
          {/* 展开/折叠图标 */}
          {hasChildren ? (
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleExpand(section.id);
              }}
              className="mr-2 flex-shrink-0"
            >
              {isExpanded ? (
                <ChevronDown className="h-4 w-4 text-gray-600" />
              ) : (
                <ChevronRight className="h-4 w-4 text-gray-600" />
              )}
            </button>
          ) : (
            <div className="w-6 mr-2 flex-shrink-0" />
          )}

          {/* 图标 */}
          <FileText className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />

          {/* 层级指示 */}
          <span className="text-xs text-gray-400 mr-2 flex-shrink-0">L{section.level}</span>

          {/* 章节标题 */}
          <span className="flex-1 text-sm font-medium text-gray-900 truncate">
            {section.title || '（未命名章节）'}
          </span>

          {/* 必需标记 */}
          {section.isRequired && (
            <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded mr-2 flex-shrink-0">
              必需
            </span>
          )}

          {/* 操作按钮 */}
          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            {section.level < 3 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  addChildSection(section.id);
                }}
                className="p-1 hover:bg-blue-200 rounded flex-shrink-0"
                title="添加子章节"
              >
                <Plus className="h-3 w-3 text-blue-600" />
              </button>
            )}
            <button
              onClick={(e) => {
                e.stopPropagation();
                deleteSection(section.id);
              }}
              className="p-1 hover:bg-red-100 rounded flex-shrink-0"
              title="删除章节"
            >
              <Trash2 className="h-3 w-3 text-red-600" />
            </button>
          </div>
        </div>

        {/* 子章节（递归渲染） */}
        {hasChildren && isExpanded && (
          <div>
            {section.children!.map((child) => renderSection(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="border rounded-lg bg-white overflow-hidden">
      <div className="p-3 bg-gray-50 border-b flex items-center justify-between">
        <h3 className="font-semibold text-sm text-gray-700">章节结构</h3>
        <button
          onClick={addRootSection}
          className="text-sm text-blue-600 hover:text-blue-700 flex items-center transition-colors"
        >
          <Plus className="h-4 w-4 mr-1" />
          添加章节
        </button>
      </div>
      <div className="max-h-[600px] overflow-y-auto group">
        {sections.length > 0 ? (
          sections.map((section) => renderSection(section, 0))
        ) : (
          <div className="p-8 text-center text-gray-400">
            <FileText className="h-12 w-12 mx-auto mb-2 opacity-50" />
            <p className="text-sm">暂无章节，点击"添加章节"开始创建</p>
          </div>
        )}
      </div>
    </div>
  );
};
