/**
 * 报告模板系统类型定义
 * 支持多层级章节结构和动态提示词配置
 */

/**
 * 章节节点（支持多层级嵌套）
 */
export interface TemplateSection {
  /** 唯一标识 */
  id: string;

  /** 章节标题（如 "一、市场概况" 或 "1.1 整体规模"） */
  title: string;

  /** 该章节的生成提示词 */
  prompt: string;

  /** 层级（1=一级标题，2=二级标题，3=三级标题） */
  level: number;

  /** 同级排序 */
  order: number;

  /** 子章节 */
  children?: TemplateSection[];

  /** 是否必需章节 */
  isRequired?: boolean;

  /** 提示词输入框的占位文本 */
  placeholder?: string;
}

/**
 * 完整的报告模板配置
 */
export interface ReportTemplateConfig {
  /** 模板唯一ID */
  id: string;

  /** 模板名称（如 "市场分析报告"） */
  name: string;

  /** 模板描述 */
  description: string;

  /** 分类（如 "金融"、"产权"、"法律"） */
  category: string;

  /** 行业领域（如 "产权交易"、"房地产"） */
  industry: string;

  /** 系统角色（如 "产权交易行业的专业分析师"） */
  systemRole: string;

  /** 章节树形结构 */
  sections: TemplateSection[];

  /** 元数据 */
  metadata: {
    createdAt: string;
    updatedAt: string;
    author?: string;
    version: string;
    tags?: string[];
  };

  /** 输出格式配置 */
  outputFormat: {
    /** 默认是否使用网络检索 */
    useWebSearch: boolean;

    /** 格式要求（JSON、Markdown等） */
    formatInstructions: string;

    /** 引用风格 */
    citationStyle?: string;
  };
}

/**
 * 模板库（所有模板的集合）
 */
export interface TemplateLibrary {
  /** 版本号 */
  version: string;

  /** 所有模板 */
  templates: ReportTemplateConfig[];

  /** 当前激活的模板ID */
  activeTemplateId: string | null;

  /** 最后更新时间 */
  lastUpdated: string;
}

/**
 * 生成的报告块（AI 返回的结构）
 */
export interface ReportBlock {
  title: string;
  content: string;
}

/**
 * 生成的报告（AI 返回的完整结构）
 */
export interface GeneratedReport {
  blocks: ReportBlock[];
}
