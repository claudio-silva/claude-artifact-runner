/**
 * 模板存储服务
 * 封装 localStorage 操作，提供模板的 CRUD 功能
 */

import type { ReportTemplateConfig, TemplateLibrary } from '@/types/template';

const STORAGE_KEY = 'report-templates-library';
const VERSION = '1.0.0';

/**
 * 初始化存储（首次加载时）
 */
export function initializeStorage(): void {
  const existing = localStorage.getItem(STORAGE_KEY);
  if (!existing) {
    const initialData: TemplateLibrary = {
      version: VERSION,
      templates: [],
      activeTemplateId: null,
      lastUpdated: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialData));
  }
}

/**
 * 加载完整的模板库
 */
function loadLibrary(): TemplateLibrary {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) {
      initializeStorage();
      return loadLibrary(); // 递归调用
    }

    const library: TemplateLibrary = JSON.parse(data);
    return library;
  } catch (error) {
    console.error('Failed to load template library:', error);
    // 返回空库
    return {
      version: VERSION,
      templates: [],
      activeTemplateId: null,
      lastUpdated: new Date().toISOString(),
    };
  }
}

/**
 * 保存完整的模板库
 */
function saveLibrary(library: TemplateLibrary): void {
  try {
    library.lastUpdated = new Date().toISOString();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(library));
  } catch (error) {
    console.error('Failed to save template library:', error);
    throw new Error('保存模板失败，可能是存储空间不足');
  }
}

/**
 * 加载所有模板
 */
export function loadTemplates(): ReportTemplateConfig[] {
  const library = loadLibrary();
  return library.templates;
}

/**
 * 获取单个模板
 */
export function getTemplateById(id: string): ReportTemplateConfig | null {
  const templates = loadTemplates();
  return templates.find((t) => t.id === id) || null;
}

/**
 * 保存模板（新增或更新）
 */
export function saveTemplate(template: ReportTemplateConfig): void {
  const library = loadLibrary();
  const existingIndex = library.templates.findIndex((t) => t.id === template.id);

  if (existingIndex >= 0) {
    // 更新现有模板
    library.templates[existingIndex] = {
      ...template,
      metadata: {
        ...template.metadata,
        updatedAt: new Date().toISOString(),
      },
    };
  } else {
    // 新增模板
    library.templates.push({
      ...template,
      metadata: {
        ...template.metadata,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    });
  }

  saveLibrary(library);
}

/**
 * 删除模板
 */
export function deleteTemplate(templateId: string): void {
  const library = loadLibrary();
  library.templates = library.templates.filter((t) => t.id !== templateId);

  // 如果删除的是当前激活的模板，清除激活状态
  if (library.activeTemplateId === templateId) {
    library.activeTemplateId = null;
  }

  saveLibrary(library);
}

/**
 * 设置激活的模板
 */
export function setActiveTemplate(templateId: string | null): void {
  const library = loadLibrary();
  library.activeTemplateId = templateId;
  saveLibrary(library);
}

/**
 * 获取激活的模板
 */
export function getActiveTemplate(): ReportTemplateConfig | null {
  const library = loadLibrary();
  if (!library.activeTemplateId) return null;
  return getTemplateById(library.activeTemplateId);
}

/**
 * 导出模板为 JSON 字符串
 */
export function exportTemplate(templateId: string): string {
  const template = getTemplateById(templateId);
  if (!template) {
    throw new Error('模板不存在');
  }
  return JSON.stringify(template, null, 2);
}

/**
 * 导入模板
 */
export function importTemplate(jsonString: string): ReportTemplateConfig {
  try {
    const template: ReportTemplateConfig = JSON.parse(jsonString);

    // 基本验证
    if (!template.id || !template.name || !template.sections) {
      throw new Error('无效的模板结构');
    }

    // 生成新 ID 避免冲突
    template.id = `tpl-${Date.now()}`;

    // 保存模板
    saveTemplate(template);

    return template;
  } catch (error) {
    console.error('Failed to import template:', error);
    throw new Error('导入模板失败，请检查 JSON 格式');
  }
}

/**
 * 批量初始化默认模板
 */
export function initializeDefaultTemplates(templates: ReportTemplateConfig[]): void {
  const library = loadLibrary();

  // 只在模板库为空时初始化
  if (library.templates.length === 0) {
    library.templates = templates.map((tpl) => ({
      ...tpl,
      metadata: {
        ...tpl.metadata,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    }));

    // 设置第一个模板为激活状态
    if (templates.length > 0) {
      library.activeTemplateId = templates[0].id;
    }

    saveLibrary(library);
  }
}

/**
 * 清空所有模板（危险操作，慎用）
 */
export function clearAllTemplates(): void {
  if (confirm('确定要清空所有模板吗？此操作不可恢复！')) {
    const library: TemplateLibrary = {
      version: VERSION,
      templates: [],
      activeTemplateId: null,
      lastUpdated: new Date().toISOString(),
    };
    saveLibrary(library);
  }
}

/**
 * 获取存储空间使用情况
 */
export function getStorageInfo(): { used: number; total: number; percentage: number } {
  try {
    const data = localStorage.getItem(STORAGE_KEY) || '';
    const used = new Blob([data]).size;
    const total = 5 * 1024 * 1024; // localStorage 通常限制为 5MB
    const percentage = (used / total) * 100;

    return { used, total, percentage };
  } catch (error) {
    return { used: 0, total: 0, percentage: 0 };
  }
}
