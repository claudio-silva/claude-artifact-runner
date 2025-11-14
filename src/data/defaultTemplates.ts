/**
 * 默认报告模板数据
 * 包含 5 个预置的产权交易行业报告模板
 */

import type { ReportTemplateConfig } from '@/types/template';

/**
 * 默认模板：市场分析报告
 */
const marketAnalysisTemplate: ReportTemplateConfig = {
  id: 'tpl-market-analysis',
  name: '市场分析报告',
  description: '适用于各行业的通用市场分析报告模板，包含市场概况、数据分析、趋势研判等核心内容。可用于AI、汽车、制造、金融、消费品等任何行业的市场研究',
  category: '市场研究',
  industry: '通用',
  systemRole: '资深行业市场分析专家，擅长多行业市场调研与趋势分析',
  sections: [
    {
      id: 'sec-ma-001',
      title: '市场分析报告',
      prompt: '生成报告总述，概括目标行业的市场整体发展态势、核心数据亮点、主要发现。请根据用户指定的具体行业（如AI、汽车、消费电子等）进行分析',
      level: 1,
      order: 1,
      isRequired: true,
      placeholder: '如：概括2024年AI行业市场发展情况、核心数据、主要趋势',
    },
    {
      id: 'sec-ma-002',
      title: '一、市场概况',
      prompt: '分析目标行业的市场规模、市场份额、增长率等核心数据，包括主要细分市场的占比、区域分布、主要参与者等关键信息',
      level: 1,
      order: 2,
      isRequired: true,
      placeholder: '如：市场总规模、细分市场占比、同比增长率、区域分布',
    },
    {
      id: 'sec-ma-003',
      title: '二、数据分析',
      prompt: '深入分析行业关键数据指标，包括市场规模变化、用户规模、营收数据、投融资情况、技术采用率、产品渗透率等详细数据，以及主要企业的市场表现',
      level: 1,
      order: 3,
      isRequired: true,
      placeholder: '如：用户增长、营收规模、投融资数据、技术普及率、市场集中度',
    },
    {
      id: 'sec-ma-004',
      title: '三、趋势研判',
      prompt: '预测行业未来发展趋势，包括技术创新方向、商业模式演变、政策影响、消费者行为变化、产业链重构等方面的发展方向',
      level: 1,
      order: 4,
      placeholder: '如：技术趋势、政策导向、消费升级、产业整合方向',
    },
    {
      id: 'sec-ma-005',
      title: '四、风险提示',
      prompt: '识别和分析当前行业存在的主要风险点，如政策风险、技术风险、竞争风险、市场风险、供应链风险等，并评估其影响程度',
      level: 1,
      order: 5,
      placeholder: '如：政策变化、技术迭代、竞争加剧、市场饱和、供应链中断',
    },
    {
      id: 'sec-ma-006',
      title: '五、结论与建议',
      prompt: '总结行业整体运行情况，针对不同市场参与者（企业、投资者、政策制定者等）提出战略建议，包括市场机会把握、风险防控、能力提升、创新发展等方向',
      level: 1,
      order: 6,
      placeholder: '如：战略建议、投资机会、风险防控、创新方向、能力建设',
    },
  ],
  metadata: {
    createdAt: '',
    updatedAt: '',
    version: '2.0.0',
    tags: ['市场分析', '行业研究', '通用', 'AI', '汽车', '制造业', '消费品'],
  },
  outputFormat: {
    useWebSearch: true,
    formatInstructions: 'JSON 格式，包含 blocks 数组，每个块包含 title 和 content',
    citationStyle: 'inline-markdown',
  },
};

/**
 * 默认模板：尽职调查报告
 */
const dueDiligenceTemplate: ReportTemplateConfig = {
  id: 'tpl-due-diligence',
  name: '尽职调查报告',
  description: '用于产权交易前的全面尽职调查，覆盖企业基本情况、财务状况、法律合规、风险评估等',
  category: '投资分析',
  industry: '产权交易',
  systemRole: '产权交易行业的资深尽职调查专家',
  sections: [
    {
      id: 'sec-dd-001',
      title: '尽职调查报告',
      prompt: '生成报告总述，概括调查目的、调查范围、主要发现和整体评价',
      level: 1,
      order: 1,
      isRequired: true,
      placeholder: '如：调查对象、调查范围、核心结论',
    },
    {
      id: 'sec-dd-002',
      title: '一、企业基本情况',
      prompt: '详细介绍企业的基本信息，包括成立时间、注册资本、股权结构、经营范围、组织架构等',
      level: 1,
      order: 2,
      isRequired: true,
      placeholder: '如：企业概况、股权结构、组织架构、业务范围',
    },
    {
      id: 'sec-dd-003',
      title: '二、财务状况分析',
      prompt: '分析企业近三年的财务报表，包括资产负债表、利润表、现金流量表，评估盈利能力、偿债能力、运营效率',
      level: 1,
      order: 3,
      isRequired: true,
      placeholder: '如：财务数据、盈利能力、偿债能力、现金流状况',
    },
    {
      id: 'sec-dd-004',
      title: '三、法律合规性',
      prompt: '审查企业的法律文件、资质证照、重大合同、诉讼仲裁、知识产权等法律合规情况',
      level: 1,
      order: 4,
      placeholder: '如：资质证照、合同审查、诉讼情况、知识产权',
    },
    {
      id: 'sec-dd-005',
      title: '四、经营风险',
      prompt: '识别企业经营中的主要风险，包括市场风险、财务风险、管理风险、法律风险等',
      level: 1,
      order: 5,
      placeholder: '如：市场竞争、财务风险、管理缺陷、法律隐患',
    },
    {
      id: 'sec-dd-006',
      title: '五、投资建议',
      prompt: '基于调查结果，提出投资可行性评估、估值建议、交易条件建议、风险应对措施等',
      level: 1,
      order: 6,
      placeholder: '如：投资可行性、估值区间、交易建议、风险应对',
    },
  ],
  metadata: {
    createdAt: '',
    updatedAt: '',
    version: '1.0.0',
    tags: ['产权', '尽职调查', '投资'],
  },
  outputFormat: {
    useWebSearch: true,
    formatInstructions: 'JSON 格式，包含 blocks 数组，每个块包含 title 和 content',
    citationStyle: 'inline-markdown',
  },
};

/**
 * 默认模板：资产评估报告
 */
const valuationTemplate: ReportTemplateConfig = {
  id: 'tpl-valuation',
  name: '资产评估报告',
  description: '用于企业或资产的价值评估，包括评估目的、评估方法、评估过程、评估结论等',
  category: '资产评估',
  industry: '产权交易',
  systemRole: '产权交易行业的注册资产评估师',
  sections: [
    {
      id: 'sec-val-001',
      title: '资产评估报告',
      prompt: '生成报告总述，说明评估目的、评估对象、评估基准日、评估结论等核心内容',
      level: 1,
      order: 1,
      isRequired: true,
      placeholder: '如：评估目的、评估对象、基准日、评估结论',
    },
    {
      id: 'sec-val-002',
      title: '一、评估对象与范围',
      prompt: '明确评估对象的基本情况，包括资产类型、资产清单、权属状况、实物状态等',
      level: 1,
      order: 2,
      isRequired: true,
      placeholder: '如：资产类型、资产清单、权属状况、实物状态',
    },
    {
      id: 'sec-val-003',
      title: '二、评估方法',
      prompt: '说明采用的评估方法（市场法、收益法、成本法），选择理由，以及具体参数和假设',
      level: 1,
      order: 3,
      isRequired: true,
      placeholder: '如：评估方法选择、参数设定、基本假设',
    },
    {
      id: 'sec-val-004',
      title: '三、评估过程',
      prompt: '详细描述评估的具体步骤，包括资料收集、实地勘察、数据分析、价值测算等过程',
      level: 1,
      order: 4,
      placeholder: '如：资料收集、现场勘查、数据分析、价值计算',
    },
    {
      id: 'sec-val-005',
      title: '四、评估结论',
      prompt: '给出最终的评估价值，说明评估增减值情况，分析评估价值的合理性和可靠性',
      level: 1,
      order: 5,
      isRequired: true,
      placeholder: '如：评估价值、增减值分析、合理性说明',
    },
    {
      id: 'sec-val-006',
      title: '五、特别事项说明',
      prompt: '说明评估过程中发现的特殊情况、评估限制条件、评估基准日后重大事项等',
      level: 1,
      order: 6,
      placeholder: '如：特殊情况、限制条件、重大事项',
    },
  ],
  metadata: {
    createdAt: '',
    updatedAt: '',
    version: '1.0.0',
    tags: ['产权', '资产评估', '估值'],
  },
  outputFormat: {
    useWebSearch: true,
    formatInstructions: 'JSON 格式，包含 blocks 数组，每个块包含 title 和 content',
    citationStyle: 'inline-markdown',
  },
};

/**
 * 默认模板：交易分析报告
 */
const transactionTemplate: ReportTemplateConfig = {
  id: 'tpl-transaction',
  name: '交易分析报告',
  description: '用于产权交易项目的全面分析，包括交易背景、标的分析、交易方案、风险收益等',
  category: '交易分析',
  industry: '产权交易',
  systemRole: '产权交易行业的资深交易分析师',
  sections: [
    {
      id: 'sec-tra-001',
      title: '交易分析报告',
      prompt: '生成报告总述，概括交易项目基本情况、交易价值、主要风险和交易建议',
      level: 1,
      order: 1,
      isRequired: true,
      placeholder: '如：项目概况、交易价值、核心风险、建议',
    },
    {
      id: 'sec-tra-002',
      title: '一、交易背景',
      prompt: '介绍交易项目的背景信息，包括交易原因、交易双方情况、交易目的、市场环境等',
      level: 1,
      order: 2,
      isRequired: true,
      placeholder: '如：交易原因、交易主体、交易目的、市场环境',
    },
    {
      id: 'sec-tra-003',
      title: '二、标的分析',
      prompt: '详细分析交易标的的基本情况、经营状况、财务表现、核心竞争力、发展前景等',
      level: 1,
      order: 3,
      isRequired: true,
      placeholder: '如：标的概况、经营情况、财务状况、竞争优势',
    },
    {
      id: 'sec-tra-004',
      title: '三、交易方案',
      prompt: '阐述具体的交易方案，包括交易结构、交易价格、支付方式、交易条件、交易流程等',
      level: 1,
      order: 4,
      isRequired: true,
      placeholder: '如：交易结构、定价方案、支付方式、交易条件',
    },
    {
      id: 'sec-tra-005',
      title: '四、风险与收益',
      prompt: '分析交易的主要风险点和预期收益，包括市场风险、财务风险、法律风险、收益预测等',
      level: 1,
      order: 5,
      placeholder: '如：风险识别、风险评估、收益预测、投资回报',
    },
    {
      id: 'sec-tra-006',
      title: '五、交易建议',
      prompt: '基于分析结果，提出交易可行性评估、交易谈判要点、风险应对措施、后续整合建议等',
      level: 1,
      order: 6,
      placeholder: '如：可行性评估、谈判要点、风险应对、整合建议',
    },
  ],
  metadata: {
    createdAt: '',
    updatedAt: '',
    version: '1.0.0',
    tags: ['产权', '交易分析', 'M&A'],
  },
  outputFormat: {
    useWebSearch: true,
    formatInstructions: 'JSON 格式，包含 blocks 数组，每个块包含 title 和 content',
    citationStyle: 'inline-markdown',
  },
};

/**
 * 默认模板：政策解读报告
 */
const policyTemplate: ReportTemplateConfig = {
  id: 'tpl-policy',
  name: '政策解读报告',
  description: '用于解读产权交易相关的政策法规，包括政策背景、核心内容、影响分析、应对建议等',
  category: '政策研究',
  industry: '产权交易',
  systemRole: '产权交易行业的政策研究专家',
  sections: [
    {
      id: 'sec-pol-001',
      title: '政策解读报告',
      prompt: '生成报告总述，概括政策出台背景、核心要点、主要影响和应对建议',
      level: 1,
      order: 1,
      isRequired: true,
      placeholder: '如：政策背景、核心内容、主要影响、应对建议',
    },
    {
      id: 'sec-pol-002',
      title: '一、政策背景',
      prompt: '介绍政策出台的背景，包括现行政策体系、存在问题、改革需求、国际经验等',
      level: 1,
      order: 2,
      isRequired: true,
      placeholder: '如：政策体系、现实问题、改革背景、国际借鉴',
    },
    {
      id: 'sec-pol-003',
      title: '二、核心内容',
      prompt: '详细解读政策的核心内容，包括主要条款、关键概念、适用范围、实施细则等',
      level: 1,
      order: 3,
      isRequired: true,
      placeholder: '如：主要条款、关键概念、适用对象、实施规则',
    },
    {
      id: 'sec-pol-004',
      title: '三、影响分析',
      prompt: '分析政策对产权交易市场的影响，包括对市场主体、交易流程、监管要求、发展趋势等方面的影响',
      level: 1,
      order: 4,
      placeholder: '如：市场影响、主体影响、流程影响、趋势影响',
    },
    {
      id: 'sec-pol-005',
      title: '四、应对建议',
      prompt: '提出应对政策变化的建议，包括合规要求、流程调整、风险防控、机会把握等',
      level: 1,
      order: 5,
      placeholder: '如：合规措施、流程优化、风险应对、机会抓取',
    },
    {
      id: 'sec-pol-006',
      title: '五、展望与总结',
      prompt: '展望政策实施后的市场前景，总结政策的积极意义和潜在挑战',
      level: 1,
      order: 6,
      placeholder: '如：市场展望、政策意义、挑战分析、长期影响',
    },
  ],
  metadata: {
    createdAt: '',
    updatedAt: '',
    version: '1.0.0',
    tags: ['产权', '政策解读', '法规'],
  },
  outputFormat: {
    useWebSearch: true,
    formatInstructions: 'JSON 格式，包含 blocks 数组，每个块包含 title 和 content',
    citationStyle: 'inline-markdown',
  },
};

/**
 * 默认模板：股权转让方案
 */
const equityTransferTemplate: ReportTemplateConfig = {
  id: 'tpl-equity-transfer',
  name: '股权转让方案',
  description: '根据结构化数据生成符合国资监管要求的正式股权转让方案文档，包含标的企业基本情况、转让论证、职工安置等11个章节',
  category: '产权交易',
  industry: '产权交易',
  systemRole: '专业的股权转让方案文档生成助手，擅长根据结构化数据生成符合国资监管要求的正式股权转让方案文档',
  sections: [
    {
      id: 'sec-et-001',
      title: '一、标的企业的基本情况',
      prompt: '根据输入数据生成标的企业基本情况总述，包括注册时间、注册资金、企业性质等关键信息',
      level: 1,
      order: 1,
      isRequired: true,
      placeholder: '如：注册登记时间、注册资金、企业性质',
      children: [
        {
          id: 'sec-et-001-1',
          title: '（一）股权情况',
          prompt: '生成股权情况表格，包括股东列表、出资额、持股比例等信息。必须使用表格格式展示，包含序号、股东名单、出资额（万元）、持股比例四列',
          level: 2,
          order: 1,
          isRequired: true,
          placeholder: '生成包含所有股东的完整表格',
        },
        {
          id: 'sec-et-001-2',
          title: '（二）资产情况',
          prompt: '生成资产评估数据，包括评估机构、报告编号、评估基准日、总资产账面值和评估值、总负债账面值和评估值、所有者权益账面值和评估值。金额单位统一为"万元"，保留两位小数',
          level: 2,
          order: 2,
          isRequired: true,
          placeholder: '评估报告信息、资产负债数据',
        },
        {
          id: 'sec-et-001-3',
          title: '（三）经营范围',
          prompt: '完整描述标的企业的经营范围，使用正式的工商登记表述',
          level: 2,
          order: 3,
          isRequired: true,
          placeholder: '工商登记的经营范围',
        },
        {
          id: 'sec-et-001-4',
          title: '（四）人员情况',
          prompt: '描述标的企业的人员构成，包括统计时间、总人数、高层管理人员、中层管理人员、员工人数，以及劳动关系、社保关系等详细说明',
          level: 2,
          order: 4,
          isRequired: true,
          placeholder: '人员数量统计、劳动关系说明',
        },
      ],
    },
    {
      id: 'sec-et-002',
      title: '二、股权转让行为的论证、审批情况',
      prompt: '说明股权转让的论证过程和审批情况',
      level: 1,
      order: 2,
      isRequired: true,
      children: [
        {
          id: 'sec-et-002-1',
          title: '（一）股权转让必要性',
          prompt: '说明本次股权转让的标的、挂牌价格，并详细论述股权转让的必要性和战略意义',
          level: 2,
          order: 1,
          isRequired: true,
          placeholder: '转让标的、挂牌价格、必要性论述',
        },
        {
          id: 'sec-et-002-2',
          title: '（二）股权转让的审批和内部决议情况',
          prompt: '列出股权转让的审批流程和内部决议情况，包括上级批准文件、公司内部决议、股东会决议等，使用编号列表格式（1.2.3.）',
          level: 2,
          order: 2,
          isRequired: true,
          placeholder: '审批文件、内部决议',
        },
      ],
    },
    {
      id: 'sec-et-003',
      title: '三、涉及的职工安置方案',
      prompt: '根据是否涉及职工安置生成相应内容。如涉及，详细说明安置方案；如不涉及，说明"本次股权转让不涉及职工安置事宜"',
      level: 1,
      order: 3,
      isRequired: true,
      placeholder: '职工安置方案或不涉及说明',
    },
    {
      id: 'sec-et-004',
      title: '四、债权债务处理问题',
      prompt: '生成债权债务处理的标准条款，包括：（一）资产评估基准日到工商变更完成之日前后的债权债务处理（需列出3条标准条款）；（二）其他需要说明的问题',
      level: 1,
      order: 4,
      isRequired: true,
      placeholder: '标准债权债务处理条款',
    },
    {
      id: 'sec-et-005',
      title: '五、资产评估基准日到工商变更完成之日（含）的损益处理',
      prompt: '生成标准的损益处理条款：说明评估基准日到工商变更完成之日期间产生的损益由工商变更后的标的企业股东按股权比例承担和享有，交易双方不得以交易期间企业经营性损益等理由对已达成的交易条件和交易价格进行调整',
      level: 1,
      order: 5,
      isRequired: true,
      placeholder: '标准损益处理条款',
    },
    {
      id: 'sec-et-006',
      title: '六、经济法律责任的承担',
      prompt: '生成经济法律责任承担的标准条款，包括3条：（一）评估报告涉及的经济法律责任；（二）评估基准日次日至工商变更完成之日新增的经济法律责任；（三）工商变更完成之日次日起新增的经济法律责任',
      level: 1,
      order: 6,
      isRequired: true,
      placeholder: '标准经济法律责任条款',
    },
    {
      id: 'sec-et-007',
      title: '七、转让收益处置方案',
      prompt: '生成标准的转让收益处置条款：本次产权转让收益由转让方按照国资监管部门和转让方有关管理制度的规定进行处置',
      level: 1,
      order: 7,
      isRequired: true,
      placeholder: '标准转让收益处置条款',
    },
    {
      id: 'sec-et-008',
      title: '八、受让方应具备的条件及其说明',
      prompt: '详细列出意向受让方应当具备的条件和相应说明，使用（一）（二）分条列出',
      level: 1,
      order: 8,
      isRequired: true,
      placeholder: '受让方资质要求、能力要求等',
    },
    {
      id: 'sec-et-009',
      title: '九、受让方须履行的义务',
      prompt: '详细列出受让方在股权转让过程中和完成后须履行的各项义务，使用编号列表或分条列出',
      level: 1,
      order: 9,
      isRequired: true,
      placeholder: '受让方义务清单',
    },
    {
      id: 'sec-et-010',
      title: '十、其他须披露事项',
      prompt: '列出其他需要披露的重要事项，包括审计报告、评估报告引用，特殊条款说明等',
      level: 1,
      order: 10,
      placeholder: '其他披露事项',
    },
    {
      id: 'sec-et-011',
      title: '十一、交易方式及价款结算',
      prompt: '说明交易方式和价款结算安排。包括：仅一家合格意向受让方的处理方式、多家合格意向受让方的竞价方式（网络竞价/拍卖/招投标/综合评审）、合同签订时间要求、价款支付时间和方式（全款或分期）',
      level: 1,
      order: 11,
      isRequired: true,
      placeholder: '交易方式、付款安排',
    },
  ],
  metadata: {
    createdAt: '',
    updatedAt: '',
    version: '1.0.0',
    tags: ['股权转让', '产权交易', '国资监管', '方案文档'],
  },
  outputFormat: {
    useWebSearch: false,
    formatInstructions: 'JSON 格式，包含 blocks 数组，每个块包含 title 和 content。使用正式公文格式，数字保留原始精度，表格需对齐整齐，日期格式统一，段落序号严格按照（一）（二）（三）和1.2.3.格式',
    citationStyle: 'none',
  },
};

/**
 * 导出所有默认模板
 */
export const defaultTemplates: ReportTemplateConfig[] = [
  marketAnalysisTemplate,
  dueDiligenceTemplate,
  valuationTemplate,
  transactionTemplate,
  policyTemplate,
  equityTransferTemplate,
];

/**
 * 根据 ID 获取默认模板
 */
export function getDefaultTemplateById(id: string): ReportTemplateConfig | undefined {
  return defaultTemplates.find((tpl) => tpl.id === id);
}

/**
 * 根据旧的模板类型获取新的模板配置
 */
export function getTemplateByLegacyType(
  legacyType: 'market-analysis' | 'due-diligence' | 'valuation' | 'transaction' | 'policy'
): ReportTemplateConfig | undefined {
  const mapping: Record<string, string> = {
    'market-analysis': 'tpl-market-analysis',
    'due-diligence': 'tpl-due-diligence',
    'valuation': 'tpl-valuation',
    'transaction': 'tpl-transaction',
    'policy': 'tpl-policy',
  };

  const newId = mapping[legacyType];
  return defaultTemplates.find((tpl) => tpl.id === newId);
}
