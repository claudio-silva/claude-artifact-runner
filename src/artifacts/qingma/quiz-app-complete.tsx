import React, { useState, useEffect } from 'react';
import { Clock, Trophy, ChevronRight, Eye, EyeOff, Shuffle, RotateCcw, CheckCircle, XCircle, Users, Settings, PlayCircle } from 'lucide-react';

// CSS动画样式
const styles = `
@keyframes blob {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

@keyframes slide-in-right {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

.animate-slide-in-right {
  animation: slide-in-right 0.3s ease-out;
}

.animate-fade-in {
  animation: fade-in 0.2s ease-out;
}
`;

// 类型定义
interface QuestionOptions {
  [key: string]: string;
}

interface Question {
  id: string;
  type: string;
  questionType?: string;
  question: string;
  options: QuestionOptions;
  answer: string;
  explanation: string;
}

interface QuestionBank {
  ai: Question[];
  party: Question[];
}

interface TeamAnswers {
  [team: string]: {
    answer: string;
    isCorrect: boolean;
  };
}

interface Scores {
  [team: string]: number;
}

// 题库将在后面嵌入
// 选项顺序已打乱的题库
// 选项顺序已打乱的题库
const questionBank : QuestionBank = {
  "ai": [
    {
      "id": "ai_1",
      "type": "AI知识",
      "question": "人工智能+是哪一年被中国政府工作报告列为国家战略？",
      "options": {
        "A": "2023",
        "B": "2025",
        "C": "2022",
        "D": "2024"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": "ai_2",
      "type": "AI知识",
      "question": "1950年，哪位科学家在其论文《计算机器与智能》中提出了用于判断机器是否具备人类智能的经典测试？",
      "options": {
        "A": "马文·明斯基",
        "B": "约翰·麦卡锡",
        "C": "艾伦·图灵",
        "D": "杰弗里·辛顿"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "id": "ai_3",
      "type": "AI知识",
      "question": "Transformer模型的核心机制是？",
      "options": {
        "A": "残差连接（Residual Connection）",
        "B": "自注意力机制（Self-Attention）",
        "C": "循环神经网络（RNN）",
        "D": "卷积操作（CNN）"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": "ai_4",
      "type": "AI知识",
      "question": "以下哪项属于2025年AI技术重大突破？",
      "options": {
        "A": "GPT-3发布",
        "B": "BERT模型提出",
        "C": "AlphaGo击败李世石",
        "D": "Sora 2视频生成技术"
      },
      "answer": "D",
      "explanation": ""
    },
    {
      "id": "ai_5",
      "type": "AI知识",
      "question": "欧盟《人工智能法案》2025年8月实施的核心要求是？",
      "options": {
        "A": "完全开放模型权重",
        "B": "统一全球AI标准",
        "C": "通用AI模型需披露训练数据",
        "D": "禁止所有生成式AI"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "id": "ai_6",
      "type": "AI知识",
      "question": "中国\"东数西算\"工程的主要目的是？",
      "options": {
        "A": "限制AI芯片出口",
        "B": "实现算力资源优化配置",
        "C": "促进西部经济发展",
        "D": "提升东部算力价格"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": "ai_7",
      "type": "AI知识",
      "question": "以下哪项不属于人工智能的核心研究领域？",
      "options": {
        "A": "自然语言处理（NLP）",
        "B": "机器人学",
        "C": "量子计算",
        "D": "计算机视觉（CV）"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "id": "ai_8",
      "type": "AI知识",
      "question": "强化学习中\"奖励函数\"的作用是？",
      "options": {
        "A": "优化数据输入",
        "B": "减少模型参数",
        "C": "加速梯度计算",
        "D": "定义智能体目标"
      },
      "answer": "D",
      "explanation": ""
    },
    {
      "id": "ai_9",
      "type": "AI知识",
      "question": "2025年中国《人脸识别技术应用安全管理办法》规定，多少人脸信息需备案？",
      "options": {
        "A": "10万人",
        "B": "1万人",
        "C": "100万人",
        "D": "1000人"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": "ai_10",
      "type": "AI知识",
      "question": "生成对抗网络（GAN）由哪两个模块组成？",
      "options": {
        "A": "编码器+注意力层",
        "B": "卷积层+池化层",
        "C": "生成器+判别器",
        "D": "编码器+解码器"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "id": "ai_11",
      "type": "AI知识",
      "question": "美国2025年\"星际之门\"项目的投资规模是？",
      "options": {
        "A": "100亿美元",
        "B": "5000亿美元",
        "C": "500亿美元",
        "D": "1000亿美元"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": "ai_12",
      "type": "AI知识",
      "question": "以下哪种算法属于无监督学习？",
      "options": {
        "A": "支持向量机（SVM）",
        "B": "K-means聚类",
        "C": "逻辑回归",
        "D": "随机森林"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": "ai_13",
      "type": "AI知识",
      "question": "中国《生成式人工智能服务管理暂行办法》要求生成内容需标注？",
      "options": {
        "A": "模型名称",
        "B": "生成时间",
        "C": "\"AI生成\"标识",
        "D": "开发者信息"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "id": "ai_14",
      "type": "AI知识",
      "question": "自动驾驶L4级的定义是？",
      "options": {
        "A": "任何场景完全自动驾驶",
        "B": "特定条件下无人干预",
        "C": "仅支持高速路辅助",
        "D": "完全人类驾驶"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": "ai_15",
      "type": "AI知识",
      "question": "2025年全球AI芯片市场份额最高的企业是？",
      "options": {
        "A": "AMD",
        "B": "华为",
        "C": "英伟达",
        "D": "英特尔"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "id": "ai_16",
      "type": "AI知识",
      "question": "以下哪项是多模态大模型的典型特征？",
      "options": {
        "A": "需专用硬件运行",
        "B": "同时理解文本、图像、语音",
        "C": "训练数据仅来自书籍",
        "D": "仅处理文本数据"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": "ai_17",
      "type": "AI知识",
      "question": "欧盟《人工智能法案》禁止的实践是？",
      "options": {
        "A": "智能客服系统",
        "B": "医疗AI辅助诊断",
        "C": "无差别人脸识别",
        "D": "AI气象预测"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "id": "ai_18",
      "type": "AI知识",
      "question": "深度学习中\"激活函数\"的作用是？",
      "options": {
        "A": "优化数据输入",
        "B": "引入非线性特征",
        "C": "减少过拟合",
        "D": "加速梯度下降"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": "ai_19",
      "type": "AI知识",
      "question": "2025年中国\"人工智能+\"行动重点覆盖的领域不包括？",
      "options": {
        "A": "科学技术",
        "B": "军事武器研发",
        "C": "产业发展",
        "D": "民生福祉"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": "ai_20",
      "type": "AI知识",
      "question": "AlphaFold 3的主要应用领域是？",
      "options": {
        "A": "蛋白质结构预测",
        "B": "自动驾驶决策",
        "C": "量子计算模拟",
        "D": "天气预报"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": "ai_21",
      "type": "AI知识",
      "question": "以下哪项属于AI伦理中的\"公平性\"原则？",
      "options": {
        "A": "模型决策过程透明",
        "B": "确保系统稳定性",
        "C": "保护用户隐私数据",
        "D": "避免因种族/性别产生偏见"
      },
      "answer": "D",
      "explanation": ""
    },
    {
      "id": "ai_22",
      "type": "AI知识",
      "question": "美国2025年撤销拜登政府AI行政令的影响是？",
      "options": {
        "A": "提高算法透明度",
        "B": "减少企业合规成本",
        "C": "加强AI安全监管",
        "D": "禁止大模型研发"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": "ai_23",
      "type": "AI知识",
      "question": "计算机视觉中\"目标检测\"与\"图像分类\"的区别是？",
      "options": {
        "A": "图像分类支持视频输入",
        "B": "目标检测仅用CNN",
        "C": "图像分类精度更高",
        "D": "目标检测需定位物体位置"
      },
      "answer": "D",
      "explanation": ""
    },
    {
      "id": "ai_24",
      "type": "AI知识",
      "question": "中国\"天枢-5\"芯片的能效比是？",
      "options": {
        "A": "200 TOPS/W",
        "B": "300 TOPS/W",
        "C": "400 TOPS/W",
        "D": "100 TOPS/W"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": "ai_25",
      "type": "AI知识",
      "question": "以下哪项不属于生成式AI的应用？",
      "options": {
        "A": "Sora视频生成",
        "B": "DALL-E图像创作",
        "C": "垃圾邮件分类",
        "D": "ChatGPT文本生成"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "id": "ai_26",
      "type": "AI知识",
      "question": "2025年世界人工智能大会上发布的\"妈祖\"系统用于？",
      "options": {
        "A": "自动驾驶决策",
        "B": "大模型训练",
        "C": "量子计算",
        "D": "多灾种早期预警"
      },
      "answer": "D",
      "explanation": ""
    },
    {
      "id": "ai_27",
      "type": "AI知识",
      "question": "2025年美国AI行动计划的核心举措包括？",
      "options": {
        "A": "撤销拜登时期AI监管令",
        "B": "建设高安全性数据中心",
        "C": "推动半导体制造业回流",
        "D": "禁止开源模型发布"
      },
      "answer": "ABC",
      "explanation": ""
    },
    {
      "id": "ai_28",
      "type": "AI知识",
      "question": "多模态大模型的典型能力有？",
      "options": {
        "A": "文本生成图像",
        "B": "视频内容理解",
        "C": "跨模态推理",
        "D": "量子计算加速"
      },
      "answer": "ABC",
      "explanation": ""
    },
    {
      "id": "ai_29",
      "type": "AI知识",
      "question": "AI伦理治理的三大支柱是？",
      "options": {
        "A": "技术安全",
        "B": "透明度",
        "C": "版权合规",
        "D": "经济效益"
      },
      "answer": "ABC",
      "explanation": ""
    },
    {
      "id": "ai_30",
      "type": "AI知识",
      "question": "以下哪些属于2025年中国AI政策？",
      "options": {
        "A": "《人工智能生成合成内容标识办法》",
        "B": "《人脸识别技术应用安全管理办法》",
        "C": "《生成式人工智能服务管理暂行办法》",
        "D": "《欧盟人工智能法案》"
      },
      "answer": "ABC",
      "explanation": ""
    },
    {
      "id": "ai_31",
      "type": "AI知识",
      "question": "强化学习中的\"探索-利用权衡\"指？",
      "options": {
        "A": "在已知高奖励和未知潜在奖励间平衡",
        "B": "加速模型收敛",
        "C": "优化模型参数",
        "D": "减少训练数据量"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": "ai_32",
      "type": "AI知识",
      "question": "以下哪些属于生成式AI的风险？",
      "options": {
        "A": "深度伪造诈骗",
        "B": "版权侵权",
        "C": "算法偏见",
        "D": "提升生产效率"
      },
      "answer": "ABC",
      "explanation": ""
    },
    {
      "id": "ai_33",
      "type": "AI知识",
      "question": "中国\"东数西算\"工程的枢纽节点包括？",
      "options": {
        "A": "张家口",
        "B": "贵州",
        "C": "内蒙古",
        "D": "深圳"
      },
      "answer": "ABCD",
      "explanation": ""
    },
    {
      "id": "ai_34",
      "type": "AI知识",
      "question": "Transformer相比RNN的优势是？",
      "options": {
        "A": "无需训练数据",
        "B": "模型参数更少",
        "C": "支持并行计算",
        "D": "处理序列数据更快"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "id": "ai_35",
      "type": "AI知识",
      "question": "欧盟《人工智能法案》对高风险AI系统的要求包括？",
      "options": {
        "A": "全生命周期追溯",
        "B": "人类监督机制",
        "C": "公开训练数据",
        "D": "安全评估备案"
      },
      "answer": "ABD",
      "explanation": ""
    },
    {
      "id": "ai_36",
      "type": "AI知识",
      "question": "以下哪些属于AI在医疗领域的应用？",
      "options": {
        "A": "肺结节智能诊断",
        "B": "个性化治疗方案",
        "C": "药物分子设计",
        "D": "自动驾驶手术机器人"
      },
      "answer": "ABCD",
      "explanation": ""
    },
    {
      "id": "ai_37",
      "type": "AI知识",
      "question": "2025年AI芯片的发展趋势包括？",
      "options": {
        "A": "存算一体架构",
        "B": "量子芯片商用",
        "C": "能效比提升",
        "D": "通用CPU替代"
      },
      "answer": "AC",
      "explanation": ""
    },
    {
      "id": "ai_38",
      "type": "AI知识",
      "question": "以下哪项不属于无监督学习算法？",
      "options": {
        "A": "线性回归",
        "B": "DBSCAN聚类",
        "C": "PCA降维",
        "D": "关联规则挖掘"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": "ai_39",
      "type": "AI知识",
      "question": "中国《数据安全法》对AI企业的要求是？",
      "options": {
        "A": "数据分类分级",
        "B": "重要数据出境安全评估",
        "C": "数据全生命周期安全",
        "D": "完全开放数据资源"
      },
      "answer": "ABC",
      "explanation": ""
    },
    {
      "id": "ai_40",
      "type": "AI知识",
      "question": "GPT-4o的\"多模态\"能力体现在？",
      "options": {
        "A": "文本生成",
        "B": "图像理解",
        "C": "语音交互",
        "D": "物理世界操控"
      },
      "answer": "ABC",
      "explanation": ""
    },
    {
      "id": "ai_41",
      "type": "AI知识",
      "question": "以下哪些属于AI安全治理措施？",
      "options": {
        "A": "算法备案",
        "B": "生成内容标识",
        "C": "模型开源",
        "D": "安全评估"
      },
      "answer": "ABD",
      "explanation": ""
    },
    {
      "id": "ai_42",
      "type": "AI知识",
      "question": "2025年美国\"能源紧急状态\"政策的影响包括？",
      "options": {
        "A": "加速AI电厂建设",
        "B": "允许使用煤炭能源",
        "C": "降低电费成本",
        "D": "增加温室气体排放"
      },
      "answer": "ABD",
      "explanation": ""
    },
    {
      "id": "ai_43",
      "type": "AI知识",
      "question": "卷积神经网络（CNN）的核心层包括？",
      "options": {
        "A": "卷积层",
        "B": "池化层",
        "C": "全连接层",
        "D": "自注意力层"
      },
      "answer": "ABC",
      "explanation": ""
    },
    {
      "id": "ai_44",
      "type": "AI知识",
      "question": "中国\"人工智能+\"行动中\"科学技术\"领域的举措包括？",
      "options": {
        "A": "加速科学发现",
        "B": "驱动技术研发",
        "C": "创新社科研究方法",
        "D": "发展军事AI"
      },
      "answer": "ABC",
      "explanation": ""
    },
    {
      "id": "ai_45",
      "type": "AI知识",
      "question": "以下哪些属于AI伦理争议事件？",
      "options": {
        "A": "ChatGPT教唆自杀诉讼",
        "B": "深度伪造政治人物视频",
        "C": "AI医疗诊断准确率98%",
        "D": "算法歧视导致招聘不公"
      },
      "answer": "ABD",
      "explanation": ""
    },
    {
      "id": "ai_46",
      "type": "AI知识",
      "question": "强化学习算法Q-Learning的核心是学习？",
      "options": {
        "A": "状态-动作价值函数",
        "B": "奖励函数梯度",
        "C": "训练数据分布",
        "D": "模型参数"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": "ai_47",
      "type": "AI知识",
      "question": "以下哪些属于2025年中国\"人工智能+\"行动的重点任务？",
      "options": {
        "A": "建设国家新一代人工智能创新发展试验区",
        "B": "实施制造业智能化改造升级工程",
        "C": "开展人工智能社会实验",
        "D": "禁止生成式AI技术研发"
      },
      "answer": "ABC",
      "explanation": ""
    },
    {
      "id": "ai_48",
      "type": "AI知识",
      "question": "多模态大模型训练中面临的技术挑战包括？",
      "options": {
        "A": "模态间语义鸿沟",
        "B": "数据异构性处理",
        "C": "计算资源消耗",
        "D": "跨模态注意力机制设计"
      },
      "answer": "ABCD",
      "explanation": ""
    },
    {
      "id": "ai_49",
      "type": "AI知识",
      "question": "欧盟《人工智能法案》将AI系统风险等级划分为？",
      "options": {
        "A": "不可接受风险",
        "B": "高风险",
        "C": "有限风险",
        "D": "低风险"
      },
      "answer": "ABCD",
      "explanation": ""
    },
    {
      "id": "ai_50",
      "type": "AI知识",
      "question": "以下哪些属于AI在城市治理中的典型应用？",
      "options": {
        "A": "智能交通信号优化",
        "B": "城市安防视频分析",
        "C": "政务服务智能问答",
        "D": "蛋白质结构预测"
      },
      "answer": "ABC",
      "explanation": ""
    },
    {
      "id": "ai_51",
      "type": "AI知识",
      "question": "生成式AI内容的标识要求包括？",
      "options": {
        "A": "显式可见标识",
        "B": "隐式元数据嵌入",
        "C": "生成时间戳",
        "D": "开发者联系方式"
      },
      "answer": "AB",
      "explanation": ""
    },
    {
      "id": "ai_52",
      "type": "AI知识",
      "question": "以下哪些算法属于深度学习模型？",
      "options": {
        "A": "Transformer",
        "B": "ResNet",
        "C": "LSTM",
        "D": "决策树"
      },
      "answer": "ABC",
      "explanation": ""
    },
    {
      "id": "ai_53",
      "type": "AI知识",
      "question": "2025年全球AI芯片市场的主要趋势是？",
      "options": {
        "A": "存算一体架构普及",
        "B": "3D堆叠技术应用",
        "C": "通用GPU主导地位巩固",
        "D": "光量子芯片商用化"
      },
      "answer": "ABC",
      "explanation": ""
    },
    {
      "id": "ai_54",
      "type": "AI知识",
      "question": "AI伦理审查的核心评估维度包括？",
      "options": {
        "A": "公平性",
        "B": "可解释性",
        "C": "安全性",
        "D": "经济效益"
      },
      "answer": "ABC",
      "explanation": ""
    },
    {
      "id": "ai_55",
      "type": "AI知识",
      "question": "以下哪些属于联邦学习的优势？",
      "options": {
        "A": "数据隐私保护",
        "B": "降低数据传输成本",
        "C": "实现跨机构协作",
        "D": "提升模型训练速度"
      },
      "answer": "ABC",
      "explanation": ""
    },
    {
      "id": "ai_56",
      "type": "AI知识",
      "question": "中国《数据安全法》规定的数据处理活动包括？",
      "options": {
        "A": "数据收集",
        "B": "数据存储",
        "C": "数据传输",
        "D": "数据销毁"
      },
      "answer": "ABCD",
      "explanation": ""
    },
    {
      "id": "ai_57",
      "type": "AI知识",
      "question": "以下哪些属于自动驾驶传感器配置方案？",
      "options": {
        "A": "纯视觉方案",
        "B": "激光雷达+视觉融合",
        "C": "毫米波雷达主导",
        "D": "超声波传感器单一方案"
      },
      "answer": "ABC",
      "explanation": ""
    },
    {
      "id": "ai_58",
      "type": "AI知识",
      "question": "AI技术在农业领域的应用包括？",
      "options": {
        "A": "病虫害智能识别",
        "B": "精准灌溉控制",
        "C": "农产品质量检测",
        "D": "农业劳动力替代"
      },
      "answer": "ABC",
      "explanation": ""
    },
    {
      "id": "ai_59",
      "type": "AI知识",
      "question": "中国《人工智能生成合成内容标识办法》要求所有AI生成内容必须同时添加显式和隐式标识。（ ）",
      "options": {
        "A": "正确",
        "B": "错误"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": "ai_60",
      "type": "AI知识",
      "question": "2025年中国\"人工智能+\"行动提出的智能终端普及率目标是？",
      "options": {
        "A": "70%",
        "B": "50%",
        "C": "90%",
        "D": "80%"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": "ai_61",
      "type": "AI知识",
      "question": "欧盟《人工智能法案》对通用AI模型（GPAI）的合规要求包括？（多选）",
      "options": {
        "A": "训练数据版权合规",
        "B": "技术文档公开",
        "C": "系统性风险评估",
        "D": "用户使用日志保存"
      },
      "answer": "ACD",
      "explanation": ""
    }
  ],
  "party": [
    {
      "id": "party_1",
      "type": "党建知识",
      "questionType": "选择题",
      "question": "党员连续多长时间不交纳党费，视为自行脱党？",
      "options": {
        "A": "6个月",
        "B": "12个月",
        "C": "3个月"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": "party_2",
      "type": "党建知识",
      "questionType": "选择题",
      "question": "党的根本组织原则是什么？",
      "options": {
        "A": "分工负责制",
        "B": "民主集中制",
        "C": "集体领导制"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": "party_3",
      "type": "党建知识",
      "questionType": "选择题",
      "question": "党的纪律处分不包括哪一项？",
      "options": {
        "A": "开除党籍",
        "B": "降级",
        "C": "留党察看"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": "party_4",
      "type": "党建知识",
      "questionType": "选择题",
      "question": "发展党员必须坚持什么原则？",
      "options": {
        "A": "批量发展",
        "B": "公开选拔",
        "C": "个别吸收"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "id": "party_5",
      "type": "党建知识",
      "questionType": "选择题",
      "question": "党员有权在党的会议上批评党的任何组织和任何党员，是党员的什么权利？",
      "options": {
        "A": "建议权",
        "B": "监督权",
        "C": "选举权"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": "party_6",
      "type": "党建知识",
      "questionType": "选择题",
      "question": "党的根本宗旨是什么？",
      "options": {
        "A": "全心全意为人民服务",
        "B": "发展生产力",
        "C": "加强党的建设"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": "party_7",
      "type": "党建知识",
      "questionType": "选择题",
      "question": "党员对党的决议有不同意见时，正确的做法是什么？",
      "options": {
        "A": "公开发表反对意见",
        "B": "拒绝执行",
        "C": "坚决执行前提下保留意见"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "id": "party_8",
      "type": "党建知识",
      "questionType": "选择题",
      "question": "党的全国代表大会每几年召开一次？",
      "options": {
        "A": "4",
        "B": "5",
        "C": "3"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": "party_9",
      "type": "党建知识",
      "questionType": "选择题",
      "question": "留党察看最长不超过几年？",
      "options": {
        "A": "2",
        "B": "1",
        "C": "3"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": "party_10",
      "type": "党建知识",
      "questionType": "选择题",
      "question": "《中国共产党章程》的修改权属于哪个机构？",
      "options": {
        "A": "中央政治局",
        "B": "党的全国代表大会",
        "C": "中央纪律检查委员会"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": "party_11",
      "type": "党建知识",
      "questionType": "选择题",
      "question": "中国共产党第一次全国代表大会在哪里闭幕？",
      "options": {
        "A": "北京",
        "B": "浙江嘉兴南湖",
        "C": "上海"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": "party_12",
      "type": "党建知识",
      "questionType": "选择题",
      "question": "“枪杆子里出政权”的著名论断提出于哪次会议？",
      "options": {
        "A": "遵义会议",
        "B": "八七会议",
        "C": "古田会议"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": "party_13",
      "type": "党建知识",
      "questionType": "选择题",
      "question": "中华人民共和国开国大典的时间是？",
      "options": {
        "A": "1949年10月1日",
        "B": "1950年1月1日",
        "C": "1949年9月1日"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": "party_14",
      "type": "党建知识",
      "questionType": "选择题",
      "question": "标志着中国进入改革开放新时期的是哪次会议？",
      "options": {
        "A": "中共八大",
        "B": "南方谈话",
        "C": "十一届三中全会"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "id": "party_15",
      "type": "党建知识",
      "questionType": "选择题",
      "question": "香港回归祖国的时间是？",
      "options": {
        "A": "2001年7月1日",
        "B": "1999年12月20日",
        "C": "1997年7月1日"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "id": "party_16",
      "type": "党建知识",
      "questionType": "选择题",
      "question": "“中国梦”的核心目标是什么？",
      "options": {
        "A": "中华民族伟大复兴",
        "B": "全面依法治国",
        "C": "全面建设小康社会"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": "party_17",
      "type": "党建知识",
      "questionType": "选择题",
      "question": "抗日战争胜利纪念日是哪一天？",
      "options": {
        "A": "8月15日",
        "B": "7月7日",
        "C": "9月3日"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "id": "party_18",
      "type": "党建知识",
      "questionType": "选择题",
      "question": "首次提出“习近平新时代中国特色社会主义思想”的会议是？",
      "options": {
        "A": "中共十八大",
        "B": "中共二十大",
        "C": "中共十九大"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "id": "party_19",
      "type": "党建知识",
      "questionType": "选择题",
      "question": "我国第一颗人造地球卫星发射成功的时间是？",
      "options": {
        "A": "1964年",
        "B": "1970年",
        "C": "1967年"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": "party_20",
      "type": "党建知识",
      "questionType": "选择题",
      "question": "抗美援朝战争开始于哪一年？",
      "options": {
        "A": "1953",
        "B": "1951",
        "C": "1950"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "id": "party_21",
      "type": "党建知识",
      "questionType": "选择题",
      "question": "邓小平理论被确立为党的指导思想是在哪次大会？",
      "options": {
        "A": "中共十六大",
        "B": "中共十五大",
        "C": "中共十四大"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": "party_22",
      "type": "党建知识",
      "questionType": "选择题",
      "question": "红军长征结束的标志是什么？",
      "options": {
        "A": "三大主力会宁会师",
        "B": "遵义会议",
        "C": "飞夺泸定桥"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": "party_23",
      "type": "党建知识",
      "questionType": "选择题",
      "question": "新中国第一部宪法颁布于哪一年？",
      "options": {
        "A": "1949",
        "B": "1954",
        "C": "1978"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": "party_24",
      "type": "党建知识",
      "questionType": "选择题",
      "question": "“科学发展观”的核心是什么？",
      "options": {
        "A": "全面协调",
        "B": "以人为本",
        "C": "发展经济"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": "party_25",
      "type": "党建知识",
      "questionType": "选择题",
      "question": "脱贫攻坚战取得全面胜利的年份是？",
      "options": {
        "A": "2020",
        "B": "2021",
        "C": "2019"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": "party_26",
      "type": "党建知识",
      "questionType": "选择题",
      "question": "中国加入世界贸易组织（WTO）的时间是？",
      "options": {
        "A": "2002年",
        "B": "2001年",
        "C": "2000年"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": "party_27",
      "type": "党建知识",
      "questionType": "选择题",
      "question": "“一带一路”倡议提出的年份是？",
      "options": {
        "A": "2015年",
        "B": "2013年",
        "C": "2017年"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": "party_28",
      "type": "党建知识",
      "questionType": "选择题",
      "question": "中华人民共和国恢复联合国合法席位的时间是？",
      "options": {
        "A": "1971年",
        "B": "1965年",
        "C": "1968年"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": "party_29",
      "type": "党建知识",
      "questionType": "选择题",
      "question": "被誉为“改革开放第一村”的是哪个村？",
      "options": {
        "A": "南街村",
        "B": "小岗村",
        "C": "华西村"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": "party_30",
      "type": "党建知识",
      "questionType": "选择题",
      "question": "首次提出“构建人类命运共同体”的会议是？",
      "options": {
        "A": "中共十九大",
        "B": "联合国日内瓦总部演讲",
        "C": "中共十八大"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "id": "party_31",
      "type": "党建知识",
      "questionType": "选择题",
      "question": "党的纪律主要包括政治纪律、（  ）、廉洁纪律等六类。",
      "options": {
        "A": "财经纪律",
        "B": "组织纪律",
        "C": "生活纪律"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": "party_32",
      "type": "党建知识",
      "questionType": "选择题",
      "question": "对党员的纪律处分最轻的是什么？",
      "options": {
        "A": "警告",
        "B": "撤销党内职务",
        "C": "严重警告"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": "party_33",
      "type": "党建知识",
      "questionType": "选择题",
      "question": "党员受留党察看处分期间，没有哪些权利？",
      "options": {
        "A": "建议权",
        "B": "申诉权",
        "C": "表决权、选举权和被选举权"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "id": "party_34",
      "type": "党建知识",
      "questionType": "选择题",
      "question": "《中国共产党廉洁自律准则》要求党员（  ），清白做人。",
      "options": {
        "A": "廉洁修身",
        "B": "公私分明",
        "C": "艰苦奋斗"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": "party_35",
      "type": "党建知识",
      "questionType": "选择题",
      "question": "党纪处分决定生效后，应在多长时间内向受处分党员所在基层组织宣布？",
      "options": {
        "A": "3个月",
        "B": "15日",
        "C": "1个月"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "id": "party_36",
      "type": "党建知识",
      "questionType": "选择题",
      "question": "党员领导干部违规收受礼品礼金，违反的是什么纪律？",
      "options": {
        "A": "廉洁纪律",
        "B": "组织纪律",
        "C": "政治纪律"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": "party_37",
      "type": "党建知识",
      "questionType": "选择题",
      "question": "对严重违纪的党组织的处理方式是什么？",
      "options": {
        "A": "改组或解散",
        "B": "诫勉谈话",
        "C": "通报批评"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": "party_38",
      "type": "党建知识",
      "questionType": "选择题",
      "question": "党员受到开除党籍处分，几年内不得重新入党？",
      "options": {
        "A": "6",
        "B": "3",
        "C": "5"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "id": "party_39",
      "type": "党建知识",
      "questionType": "选择题",
      "question": "下列行为中违反群众纪律的是什么？",
      "options": {
        "A": "对抗组织审查",
        "B": "克扣群众财物",
        "C": "跑官要官"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": "party_40",
      "type": "党建知识",
      "questionType": "选择题",
      "question": "党员犯罪被判处有期徒刑以上刑罚，应当给予什么处分？",
      "options": {
        "A": "开除党籍",
        "B": "撤销党内职务",
        "C": "留党察看"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": "party_41",
      "type": "党建知识",
      "questionType": "选择题",
      "question": "党纪处分决定的生效日期是？",
      "options": {
        "A": "向党员宣布日",
        "B": "处分决定批准日",
        "C": "处分决定起草日"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": "party_42",
      "type": "党建知识",
      "questionType": "选择题",
      "question": "《中国共产党纪律处分条例》的制定机关是？",
      "options": {
        "A": "全国人大",
        "B": "中共中央",
        "C": "国务院"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": "party_43",
      "type": "党建知识",
      "questionType": "选择题",
      "question": "党员在宗教场所进行无神论宣传，违反的是什么纪律？",
      "options": {
        "A": "工作纪律",
        "B": "生活纪律",
        "C": "政治纪律"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "id": "party_44",
      "type": "党建知识",
      "questionType": "选择题",
      "question": "对违纪党员免予处分的情形是？",
      "options": {
        "A": "情节轻微且认错态度好",
        "B": "配合组织调查",
        "C": "主动退赃"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": "party_45",
      "type": "党建知识",
      "questionType": "选择题",
      "question": "党员在社交平台转发错误政治言论，违反什么纪律？",
      "options": {
        "A": "政治纪律",
        "B": "组织纪律",
        "C": "生活纪律"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": "party_46",
      "type": "党建知识",
      "questionType": "选择题",
      "question": "党的最高理想和最终目标是什么？",
      "options": {
        "A": "实现社会主义现代化",
        "B": "实现共产主义",
        "C": "实现共同富裕"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": "party_47",
      "type": "党建知识",
      "questionType": "选择题",
      "question": "中国共产党的宗旨是？",
      "options": {
        "A": "全心全意为少数人民服务",
        "B": "全心全意为人民服务",
        "C": "全心全意为部分人民服务"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": "party_48",
      "type": "党建知识",
      "questionType": "选择题",
      "question": "党的根本组织原则是？",
      "options": {
        "A": "个人服从组织",
        "B": "民主集中制",
        "C": "少数服从多数"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": "party_49",
      "type": "党建知识",
      "questionType": "选择题",
      "question": "中国共产党诞生于哪一年？",
      "options": {
        "A": "1919 年",
        "B": "1922 年",
        "C": "1921 年"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "id": "party_50",
      "type": "党建知识",
      "questionType": "选择题",
      "question": "把毛泽东思想确立为党的指导思想的是哪次会议？",
      "options": {
        "A": "中共六大",
        "B": "中共七大",
        "C": "中共七大"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": "party_51",
      "type": "党建知识",
      "questionType": "判断题",
      "question": "党的基层委员会每届任期5年。",
      "options": {
        "A": "正确",
        "B": "错误"
      },
      "answer": "B",
      "explanation": "一般为3-5年"
    },
    {
      "id": "party_52",
      "type": "党建知识",
      "questionType": "判断题",
      "question": "对严重违纪的党组织，应予以改组或解散。",
      "options": {
        "A": "正确",
        "B": "错误"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": "party_53",
      "type": "党建知识",
      "questionType": "判断题",
      "question": "入党宣誓誓词由党的中央委员会制定。",
      "options": {
        "A": "正确",
        "B": "错误"
      },
      "answer": "B",
      "explanation": "由中央统一规定"
    },
    {
      "id": "party_54",
      "type": "党建知识",
      "questionType": "判断题",
      "question": "党员有权要求罢免不称职的干部。",
      "options": {
        "A": "正确",
        "B": "错误"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": "party_55",
      "type": "党建知识",
      "questionType": "判断题",
      "question": "党徽由镰刀和锤头组成。",
      "options": {
        "A": "正确",
        "B": "错误"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": "party_56",
      "type": "党建知识",
      "questionType": "判断题",
      "question": "党的全国代表大会每4年举行一次。",
      "options": {
        "A": "正确",
        "B": "错误"
      },
      "answer": "B",
      "explanation": "每5年举行一次"
    },
    {
      "id": "party_57",
      "type": "党建知识",
      "questionType": "判断题",
      "question": "预备党员的义务与正式党员相同。",
      "options": {
        "A": "正确",
        "B": "错误"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": "party_58",
      "type": "党建知识",
      "questionType": "判断题",
      "question": "党员可以信仰宗教。",
      "options": {
        "A": "正确",
        "B": "错误"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": "party_59",
      "type": "党建知识",
      "questionType": "判断题",
      "question": "留党察看最长不超过2年。",
      "options": {
        "A": "正确",
        "B": "错误"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": "party_60",
      "type": "党建知识",
      "questionType": "判断题",
      "question": "党的根本宗旨是全心全意为人民服务。",
      "options": {
        "A": "正确",
        "B": "错误"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": "party_61",
      "type": "党建知识",
      "questionType": "判断题",
      "question": "中共一大代表共有13人。",
      "options": {
        "A": "正确",
        "B": "错误"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": "party_62",
      "type": "党建知识",
      "questionType": "判断题",
      "question": "长征胜利结束的标志是三大主力会师甘肃会宁。",
      "options": {
        "A": "正确",
        "B": "错误"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": "party_63",
      "type": "党建知识",
      "questionType": "判断题",
      "question": "邓小平理论被确立为党的指导思想是在中共十四大。",
      "options": {
        "A": "正确",
        "B": "错误"
      },
      "answer": "B",
      "explanation": "是在中共十五大"
    },
    {
      "id": "party_64",
      "type": "党建知识",
      "questionType": "判断题",
      "question": "“两个一百年”奋斗目标中的第二个百年是全面建成社会主义现代化强国。",
      "options": {
        "A": "正确",
        "B": "错误"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": "party_65",
      "type": "党建知识",
      "questionType": "判断题",
      "question": "党员受警告处分后，一年内不得提拔。",
      "options": {
        "A": "正确",
        "B": "错误"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": "party_66",
      "type": "党建知识",
      "questionType": "判断题",
      "question": "党的基层委员会每届任期5年。",
      "options": {
        "A": "正确",
        "B": "错误"
      },
      "answer": "B",
      "explanation": "一般为3-5年"
    },
    {
      "id": "party_67",
      "type": "党建知识",
      "questionType": "判断题",
      "question": "对严重违纪的党组织应予以改组或解散。",
      "options": {
        "A": "正确",
        "B": "错误"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": "party_68",
      "type": "党建知识",
      "questionType": "判断题",
      "question": "入党宣誓誓词由党的中央委员会制定。",
      "options": {
        "A": "正确",
        "B": "错误"
      },
      "answer": "B",
      "explanation": "由中央统一规定"
    },
    {
      "id": "party_69",
      "type": "党建知识",
      "questionType": "判断题",
      "question": "党员有权要求罢免不称职的干部。",
      "options": {
        "A": "正确",
        "B": "错误"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": "party_70",
      "type": "党建知识",
      "questionType": "判断题",
      "question": "党徽由镰刀和锤头组成。",
      "options": {
        "A": "正确",
        "B": "错误"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": "party_71",
      "type": "党建知识",
      "questionType": "判断题",
      "question": "党的纪律检查机关是司法机关。",
      "options": {
        "A": "正确",
        "B": "错误"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": "party_72",
      "type": "党建知识",
      "questionType": "判断题",
      "question": "党员有权在党内提出申辩和控告。",
      "options": {
        "A": "正确",
        "B": "错误"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": "party_73",
      "type": "党建知识",
      "questionType": "判断题",
      "question": "党的最高理想是实现共同富裕。",
      "options": {
        "A": "正确",
        "B": "错误"
      },
      "answer": "B",
      "explanation": "党的最高理想是实现共产主义"
    },
    {
      "id": "party_74",
      "type": "党建知识",
      "questionType": "判断题",
      "question": "预备党员有表决权。",
      "options": {
        "A": "正确",
        "B": "错误"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": "party_75",
      "type": "党建知识",
      "questionType": "判断题",
      "question": "脱贫攻坚精神被概括为“上下同心、尽锐出战”。",
      "options": {
        "A": "正确",
        "B": "错误"
      },
      "answer": "A",
      "explanation": ""
    }
  ]
};

const QuizApp: React.FC = () => {
  // 注入CSS动画样式
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  // 组卷配置
  const [setupMode, setSetupMode] = useState<boolean>(true);
  const [aiQuestionCount, setAiQuestionCount] = useState<number>(30);
  const [partyQuestionCount, setPartyQuestionCount] = useState<number>(20);
  const [selectedQuestions, setSelectedQuestions] = useState<Question[]>([]);

  // 后门机制：按键监听
  const [backdoorActivated, setBackdoorActivated] = useState<boolean>(false);

  // 后门：固定题目列表
  const backdoorQuestionIds = [
    "ai_51", "ai_16", "party_35", "ai_36", "ai_31", "party_56", "party_20", "party_2",
    "ai_3", "party_22", "ai_40", "party_58", "party_29", "ai_56", "ai_28", "party_3",
    "party_38", "ai_13", "ai_32", "party_28", "ai_60", "ai_59", "ai_29", "ai_8", "ai_21"
  ];

  // 监听按键W激活后门（完全静默）
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (setupMode && (e.key === 'w' || e.key === 'W')) {
        setBackdoorActivated(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [setupMode]);

  // 答题状态
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [usedQuestions, setUsedQuestions] = useState<string[]>([]);
  const [scores, setScores] = useState<Scores>({});
  const [timer, setTimer] = useState<number>(0);
  const [timerRunning, setTimerRunning] = useState<boolean>(false);
  const [answeringTeam, setAnsweringTeam] = useState<string | null>(null);
  const [teamAnswers, setTeamAnswers] = useState<TeamAnswers>({});
  const [questionResolved, setQuestionResolved] = useState<boolean>(false);

  // 多选题相关状态
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  // 打乱后的选项映射（原始选项 -> 新选项）
  const [shuffledOptionsMap, setShuffledOptionsMap] = useState<{[key: string]: string}>({});

  // Toast提示状态
  const [toast, setToast] = useState<{message: string; type: 'success' | 'error' | 'info' | 'warning'} | null>(null);

  // 关于页面显示状态
  const [showAbout, setShowAbout] = useState<boolean>(false);

  // 第九组成员信息
  const teamMembers = [
    { id: 1, name: "谭浩淼", company: "公诚咨询" },
    { id: 2, name: "洪浩东", company: "中通/南方" },
    { id: 3, name: "塔娜", company: "南建/深圳工程" },
    { id: 4, name: "黄靖", company: "中时讯/长讯" },
    { id: 5, name: "冯梓键", company: "广信/中睿" },
    { id: 6, name: "丘文强", company: "天讯瑞达" },
    { id: 7, name: "吴嘉希", company: "广东公司" }
  ];

  // 显示Toast提示
  const showToast = (message: string, type: 'success' | 'error' | 'info' | 'warning' = 'info') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  // 判断是否为多选题
  const isMultipleChoice = (question: Question | null): boolean => {
    if (!question) return false;
    return question.answer && question.answer.length > 1;
  };

  // 打乱选项顺序，返回新的选项映射
  const shuffleOptions = (options: QuestionOptions): {[key: string]: string} => {
    // 获取所有选项的键值对
    const optionEntries = Object.entries(options);

    // 检查是否为判断题（正确/错误选项）
    const isJudgmentQuestion = optionEntries.length === 2 &&
      optionEntries.some(([, value]) => value === '正确' || value === '错误');

    // 如果没有选项或是判断题，不打乱
    if (optionEntries.length === 0 || isJudgmentQuestion) {
      const mapping: {[key: string]: string} = {};
      optionEntries.forEach(([key]) => {
        mapping[key] = key;
      });
      return mapping;
    }

    // 获取所有的键（A, B, C, D等）
    const keys = optionEntries.map(([key]) => key);

    // Fisher-Yates 洗牌算法打乱键的顺序
    const shuffledKeys = [...keys];
    for (let i = shuffledKeys.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledKeys[i], shuffledKeys[j]] = [shuffledKeys[j], shuffledKeys[i]];
    }

    // 创建映射：原始键 -> 新键
    const mapping: {[key: string]: string} = {};
    keys.forEach((originalKey, index) => {
      mapping[originalKey] = shuffledKeys[index];
    });

    return mapping;
  };

  // 获取打乱后的选项用于显示
  const getShuffledOptions = (question: Question): [string, string][] => {
    if (!question || !question.options) return [];

    const optionEntries = Object.entries(question.options);

    // 创建反向映射：新键 -> 原始键
    const reverseMapping: {[key: string]: string} = {};
    Object.entries(shuffledOptionsMap).forEach(([original, shuffled]) => {
      reverseMapping[shuffled] = original;
    });

    // 根据新键的顺序重新排列选项
    const shuffledEntries: [string, string][] = [];
    const allKeys = optionEntries.map(([key]) => key);

    allKeys.forEach(originalKey => {
      const newKey = shuffledOptionsMap[originalKey] || originalKey;
      const value = question.options[originalKey];
      shuffledEntries.push([newKey, value]);
    });

    // 按新键排序
    shuffledEntries.sort((a, b) => a[0].localeCompare(b[0]));

    return shuffledEntries;
  };

  // 初始化小组分数
  useEffect(() => {
    const initialScores: Scores = {};
    for (let i = 1; i <= 10; i++) {
      initialScores[`第${i}组`] = 0;
    }
    setScores(initialScores);
  }, []);

  // 计时器
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timerRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer(prev => {
          if (prev <= 1) {
            setTimerRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerRunning, timer]);

  // 开始竞赛：随机抽取题目
  const startQuiz = () => {
    const aiQuestions = questionBank.ai || [];
    const partyQuestions = questionBank.party || [];

    // 验证题目数量
    if (aiQuestionCount > aiQuestions.length) {
      showToast(`AI题库只有${aiQuestions.length}道题，请减少数量！`, 'error');
      return;
    }
    if (partyQuestionCount > partyQuestions.length) {
      showToast(`党建题库只有${partyQuestions.length}道题，请减少数量！`, 'error');
      return;
    }

    let allSelected: Question[];

    // 🚪 后门模式：使用固定题目列表（按顺序）
    if (backdoorActivated) {
      const allQuestions = [...aiQuestions, ...partyQuestions];
      // 按照固定顺序获取题目，不打乱
      allSelected = backdoorQuestionIds
        .map(id => allQuestions.find(q => q.id === id))
        .filter((q): q is Question => q !== undefined);

      // 关闭后门状态，下次需要重新按W
      setBackdoorActivated(false);
    } else {
      // 正常模式：随机抽取
      const shuffledAi = [...aiQuestions].sort(() => Math.random() - 0.5);
      const selectedAi = shuffledAi.slice(0, aiQuestionCount);

      const shuffledParty = [...partyQuestions].sort(() => Math.random() - 0.5);
      const selectedParty = shuffledParty.slice(0, partyQuestionCount);

      allSelected = [...selectedAi, ...selectedParty].sort(() => Math.random() - 0.5);
    }

    setSelectedQuestions(allSelected);
    setSetupMode(false);
    setUsedQuestions([]);
    setCurrentQuestion(null);

    showToast(`组卷完成！AI题目${aiQuestionCount}道，党建题目${partyQuestionCount}道，共${allSelected.length}道题`, 'success');
  };

  // 返回组卷界面
  const backToSetup = () => {
    if (window.confirm('返回组卷设置将清空当前进度，确定吗？')) {
      setSetupMode(true);
      setSelectedQuestions([]);
      setCurrentQuestion(null);
      setUsedQuestions([]);
      setShowAnswer(false);
      setAnsweringTeam(null);
      setTeamAnswers({});
      setQuestionResolved(false);
      setTimer(0);
      setTimerRunning(false);
    }
  };

  // 随机抽题（后门模式下按顺序抽取）
  const drawQuestion = () => {
    const availableQuestions = selectedQuestions.filter(
      q => !usedQuestions.includes(q.id)
    );

    if (availableQuestions.length === 0) {
      showToast('所有题目已经抽完了！点击"返回组卷"可以重新开始', 'warning');
      return;
    }

    // 直接取第一个可用题目（因为后门模式下selectedQuestions已经是固定顺序）
    // 正常模式下selectedQuestions是随机打乱的，所以也相当于随机
    const newQuestion = availableQuestions[0];

    // 打乱选项顺序
    const optionMapping = shuffleOptions(newQuestion.options);
    setShuffledOptionsMap(optionMapping);

    setCurrentQuestion(newQuestion);
    setShowAnswer(false);
    setUsedQuestions([...usedQuestions, newQuestion.id]);
    setAnsweringTeam(null);
    setTeamAnswers({});
    setQuestionResolved(false);
    setSelectedOptions([]); // 重置多选题选项

    // 开始30秒倒计时
    setTimer(30);
    setTimerRunning(true);
  };

  // 选择回答的小组
  const selectTeam = (team: string) => {
    if (questionResolved) {
      showToast('本题已被正确回答！请抽取下一题', 'warning');
      return;
    }
    if (teamAnswers[team]) {
      showToast('该小组已经回答过本题了！', 'warning');
      return;
    }
    setAnsweringTeam(team);
    setSelectedOptions([]); // 切换小组时重置已选选项
    setTimerRunning(false);
  };

  // 多选题：切换选项
  const toggleOption = (option: string) => {
    if (!answeringTeam) {
      showToast('请先选择回答的小组！', 'warning');
      return;
    }

    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter(o => o !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  // 多选题：提交答案
  const submitMultipleChoice = () => {
    if (!answeringTeam) {
      showToast('请先选择回答的小组！', 'warning');
      return;
    }

    if (selectedOptions.length === 0) {
      showToast('请至少选择一个选项！', 'warning');
      return;
    }

    // 将用户选择的显示选项转换回原始选项
    const reverseMapping: {[key: string]: string} = {};
    Object.entries(shuffledOptionsMap).forEach(([original, shuffled]) => {
      reverseMapping[shuffled] = original;
    });

    const originalSelectedOptions = selectedOptions.map(opt => reverseMapping[opt]);

    // 将选中的选项排序后组成字符串
    const userAnswer = originalSelectedOptions.sort().join('');
    const correctAnswer = currentQuestion.answer.split('').sort().join('');
    const isCorrect = userAnswer === correctAnswer;

    setTeamAnswers({
      ...teamAnswers,
      [answeringTeam]: {
        answer: userAnswer,
        isCorrect: isCorrect
      }
    });

    if (isCorrect) {
      setScores({
        ...scores,
        [answeringTeam]: scores[answeringTeam] + 10
      });
      setQuestionResolved(true);
      setShowAnswer(true);
      showToast(`${answeringTeam} 回答正确！+10分`, 'success');
    } else {
      setScores({
        ...scores,
        [answeringTeam]: scores[answeringTeam] - 5
      });
      showToast(`${answeringTeam} 回答错误！-5分`, 'error');
    }

    setAnsweringTeam(null);
    setSelectedOptions([]);
  };

  // 单选题/判断题：点击选项进行回答
  const handleAnswer = (selectedOption: string) => {
    if (!answeringTeam) {
      showToast('请先选择回答的小组！', 'warning');
      return;
    }

    // 将用户选择的显示选项转换回原始选项
    const reverseMapping: {[key: string]: string} = {};
    Object.entries(shuffledOptionsMap).forEach(([original, shuffled]) => {
      reverseMapping[shuffled] = original;
    });

    const originalSelectedOption = reverseMapping[selectedOption];
    const isCorrect = originalSelectedOption === currentQuestion.answer;
    
    setTeamAnswers({
      ...teamAnswers,
      [answeringTeam]: {
        answer: selectedOption,
        isCorrect: isCorrect
      }
    });

    if (isCorrect) {
      setScores({
        ...scores,
        [answeringTeam]: scores[answeringTeam] + 10
      });
      setQuestionResolved(true);
      setShowAnswer(true);
      showToast(`${answeringTeam} 回答正确！+10分`, 'success');
    } else {
      setScores({
        ...scores,
        [answeringTeam]: scores[answeringTeam] - 5
      });
      showToast(`${answeringTeam} 回答错误！-5分`, 'error');
    }

    setAnsweringTeam(null);
  };

  // 显示/隐藏答案
  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
    setTimerRunning(false);
  };

  // 手动调整分数
  const adjustScore = (team: string, delta: number) => {
    setScores({
      ...scores,
      [team]: scores[team] + delta
    });
  };

  // 重置分数
  const resetScores = () => {
    if (window.confirm('确定要重置所有分数吗？')) {
      const initialScores = {};
      for (let i = 1; i <= 10; i++) {
        initialScores[`第${i}组`] = 0;
      }
      setScores(initialScores);
    }
  };

  // 组卷界面
  if (setupMode) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-6 flex items-center justify-center relative">
        {/* 背景装饰 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 max-w-2xl w-full relative border border-white/20">
          <div className="text-center mb-8">
            <div className="inline-flex p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-4 shadow-lg">
              <Settings className="text-white" size={64} />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              知识竞赛组卷设置
            </h1>
            <p className="text-gray-600 text-lg">
              请选择要抽取的题目数量
            </p>
          </div>

          <div className="space-y-6 mb-8">
            {/* AI题目设置 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border-2 border-blue-200 shadow-sm hover:shadow-md transition-shadow">
              <label className="block text-lg font-bold text-blue-900 mb-4">
                🤖 AI知识题目数量
                <span className="text-sm font-normal text-blue-600 ml-2">
                  (题库共{questionBank.ai?.length || 0}道)
                </span>
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="0"
                  max={questionBank.ai?.length || 61}
                  value={aiQuestionCount}
                  onChange={(e) => setAiQuestionCount(parseInt(e.target.value))}
                  className="flex-1 h-3 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <input
                  type="number"
                  min="0"
                  max={questionBank.ai?.length || 61}
                  value={aiQuestionCount}
                  onChange={(e) => setAiQuestionCount(Math.max(0, Math.min(questionBank.ai?.length || 61, parseInt(e.target.value) || 0)))}
                  className="w-24 px-4 py-3 text-center text-xl font-bold border-2 border-blue-400 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                />
              </div>
            </div>

            {/* 党建题目设置 */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 border-2 border-red-200 shadow-sm hover:shadow-md transition-shadow">
              <label className="block text-lg font-bold text-red-900 mb-4">
                🚩 党建知识题目数量
                <span className="text-sm font-normal text-red-600 ml-2">
                  (题库共{questionBank.party?.length || 0}道: 选择题{questionBank.party?.filter(q => q.questionType === '选择题').length || 0}道 + 判断题{questionBank.party?.filter(q => q.questionType === '判断题').length || 0}道)
                </span>
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="0"
                  max={questionBank.party?.length || 75}
                  value={partyQuestionCount}
                  onChange={(e) => setPartyQuestionCount(parseInt(e.target.value))}
                  className="flex-1 h-3 bg-red-200 rounded-lg appearance-none cursor-pointer accent-red-600"
                />
                <input
                  type="number"
                  min="0"
                  max={questionBank.party?.length || 75}
                  value={partyQuestionCount}
                  onChange={(e) => setPartyQuestionCount(Math.max(0, Math.min(questionBank.party?.length || 75, parseInt(e.target.value) || 0)))}
                  className="w-24 px-4 py-3 text-center text-xl font-bold border-2 border-red-400 rounded-xl shadow-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                />
              </div>
            </div>
          </div>

          {/* 总计显示 */}
          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-300 rounded-2xl p-5 mb-6 text-center shadow-lg">
            <p className="text-xl font-bold text-amber-900">
              📊 总计抽取：<span className="text-4xl bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent ml-2">{aiQuestionCount + partyQuestionCount}</span> 道题目
            </p>
          </div>

          {/* 开始按钮和关于按钮 */}
          <div className="flex gap-4">
            <button
              onClick={startQuiz}
              disabled={aiQuestionCount + partyQuestionCount === 0}
              className="flex-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold py-4 px-6 rounded-xl text-xl flex items-center justify-center gap-3 shadow-lg transform transition-all hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <PlayCircle size={28} />
              开始竞赛
            </button>
            <button
              onClick={() => setShowAbout(true)}
              className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-bold py-4 px-6 rounded-xl text-xl flex items-center justify-center gap-3 shadow-lg transform transition-all hover:scale-105 hover:shadow-xl"
            >
              <Users size={28} />
              关于
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 关于页面组件
  const AboutModal = () => {
    if (!showAbout) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
        <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          {/* 头部 */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-8 rounded-t-3xl relative">
            <button
              onClick={() => setShowAbout(false)}
              className="absolute top-4 right-4 text-white hover:bg-white/20 p-2 rounded-full transition-all"
            >
              <XCircle size={32} />
            </button>
            <h2 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
              <Users size={40} />
              关于本应用
            </h2>
            <p className="text-white/90 text-lg">青年马克思主义者培养工程知识竞赛系统</p>
          </div>

          {/* 内容 */}
          <div className="p-8">
            {/* 应用介绍 */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 mb-8 border-2 border-blue-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">📚 应用介绍</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                本系统是为青年马克思主义者培养工程设计的互动式知识竞赛平台，
                涵盖AI知识和党建知识两大类题库，支持单选题、多选题和判断题三种题型。
                系统提供灵活的组卷功能、实时计分、多组竞赛等特性，适用于团队学习和知识竞赛场景。
              </p>
            </div>

            {/* 第九组成员 */}
            <div className="mb-8">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 flex items-center gap-3">
                <Trophy size={32} className="text-blue-600" />
                第九组开发团队
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {teamMembers.map((member, index) => (
                  <div
                    key={member.id}
                    className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border-2 border-gray-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      {/* 序号徽章 */}
                      <div className={`flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg ${
                        index === 0 ? 'bg-gradient-to-br from-amber-400 to-yellow-600' :
                        index === 1 ? 'bg-gradient-to-br from-blue-400 to-blue-600' :
                        index === 2 ? 'bg-gradient-to-br from-purple-400 to-purple-600' :
                        index === 3 ? 'bg-gradient-to-br from-pink-400 to-pink-600' :
                        index === 4 ? 'bg-gradient-to-br from-green-400 to-green-600' :
                        index === 5 ? 'bg-gradient-to-br from-indigo-400 to-indigo-600' :
                        'bg-gradient-to-br from-red-400 to-red-600'
                      }`}>
                        {member.id}
                      </div>

                      {/* 成员信息 */}
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold text-gray-800 mb-1">{member.name}</h4>
                        <p className="text-gray-600 font-medium">{member.company}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 特别感谢 */}
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 border-2 border-amber-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                ⭐ 特别感谢
              </h3>
              <p className="text-gray-700 text-lg">
                感谢所有参与本项目开发和测试的第九组成员，
                感谢青年马克思主义者培养工程提供的学习机会！
              </p>
            </div>
          </div>

          {/* 底部 */}
          <div className="bg-gray-50 p-6 rounded-b-3xl text-center border-t-2 border-gray-200">
            <button
              onClick={() => setShowAbout(false)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-xl text-lg shadow-lg transform transition-all hover:scale-105"
            >
              关闭
            </button>
          </div>
        </div>
      </div>
    );
  };

  // 答题界面
  return (
    <>
      <AboutModal />
      <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-6 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Toast提示 */}
      {toast && (
        <div className={`fixed top-4 right-4 z-50 px-6 py-4 rounded-xl shadow-2xl transform transition-all duration-300 animate-slide-in-right ${
          toast.type === 'success' ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white' :
          toast.type === 'error' ? 'bg-gradient-to-r from-red-500 to-rose-600 text-white' :
          toast.type === 'warning' ? 'bg-gradient-to-r from-yellow-500 to-amber-600 text-white' :
          'bg-gradient-to-r from-blue-500 to-cyan-600 text-white'
        }`}>
          <div className="flex items-center gap-3">
            {toast.type === 'success' && <CheckCircle size={24} />}
            {toast.type === 'error' && <XCircle size={24} />}
            {toast.type === 'warning' && <Clock size={24} />}
            <span className="text-lg font-bold">{toast.message}</span>
          </div>
        </div>
      )}

      {/* 标题栏 */}
      <div className="text-center mb-8 relative z-10">
        <div className="inline-block bg-white/10 backdrop-blur-md rounded-3xl px-8 py-6 shadow-2xl border border-white/20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-3 drop-shadow-lg">
            青年马克思主义者培养工程
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-yellow-300 via-amber-300 to-yellow-400 bg-clip-text text-transparent">
            ⭐ 知识竞赛 ⭐
          </h2>
        </div>
      </div>

      {/* 控制按钮区 */}
      <div className="flex flex-wrap justify-center gap-4 mb-8 relative z-10">
        <button
          onClick={drawQuestion}
          className="bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-gray-900 font-bold py-4 px-8 rounded-2xl text-lg flex items-center gap-3 shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl border-2 border-white/30"
        >
          <Shuffle size={24} />
          抽取题目
        </button>

        {currentQuestion && (
          <button
            onClick={toggleAnswer}
            className="bg-white/90 backdrop-blur-sm hover:bg-white text-gray-900 font-bold py-4 px-8 rounded-2xl text-lg flex items-center gap-3 shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl border-2 border-white/30"
          >
            {showAnswer ? <EyeOff size={24} /> : <Eye size={24} />}
            {showAnswer ? '隐藏答案' : '显示答案'}
          </button>
        )}

        <button
          onClick={resetScores}
          className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white font-bold py-4 px-8 rounded-2xl text-lg flex items-center gap-3 shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl border-2 border-white/20"
        >
          <RotateCcw size={24} />
          重置分数
        </button>

        <button
          onClick={backToSetup}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-2xl text-lg flex items-center gap-3 shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl border-2 border-white/20"
        >
          <Settings size={24} />
          返回组卷
        </button>

        <button
          onClick={() => setShowAbout(true)}
          className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold py-4 px-8 rounded-2xl text-lg flex items-center gap-3 shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl border-2 border-white/20"
        >
          <Users size={24} />
          关于
        </button>
      </div>

      {/* 题目显示区 */}
      {currentQuestion ? (
        <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 mb-8 max-w-6xl mx-auto relative z-10 border-2 border-white/30">
          {/* 题目信息 */}
          <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
            <div className="flex gap-2">
              <span className="bg-red-600 text-white px-4 py-2 rounded-full text-base font-bold">
                {currentQuestion.type}
              </span>
              {currentQuestion.questionType && (
                <span className={`px-4 py-2 rounded-full text-base font-bold ${
                  currentQuestion.questionType === '判断题'
                    ? 'bg-green-600 text-white'
                    : 'bg-blue-600 text-white'
                }`}>
                  {currentQuestion.questionType}
                </span>
              )}
              {isMultipleChoice(currentQuestion) && (
                <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-base font-bold animate-pulse">
                  多选题
                </span>
              )}
            </div>
            {timerRunning && (
              <div className="flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full">
                <Clock className="text-red-600" size={20} />
                <span className={`text-2xl font-bold ${timer <= 10 ? 'text-red-600 animate-pulse' : 'text-gray-800'}`}>
                  {timer}秒
                </span>
              </div>
            )}
          </div>

          {/* 当前回答小组提示 */}
          {answeringTeam && (
            <div className="mb-4 p-4 bg-blue-100 border-2 border-blue-500 rounded-xl flex items-center justify-center gap-3">
              <Users className="text-blue-600" size={24} />
              <span className="text-xl font-bold text-blue-800">
                当前回答：{answeringTeam}
              </span>
              <span className="text-sm text-blue-600">
                {isMultipleChoice(currentQuestion)
                  ? '（勾选多个选项后点击提交）'
                  : '（点击选项进行回答）'}
              </span>
            </div>
          )}

          {/* 题目 */}
          <div className="mb-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              {currentQuestion.question}
            </h3>

            {/* 选项 */}
            <div className="grid grid-cols-1 gap-3">
              {getShuffledOptions(currentQuestion).map(([key, value]) => {
                const teamAnswer = answeringTeam && teamAnswers[answeringTeam];

                // 创建反向映射来检查答案
                const reverseMapping: {[key: string]: string} = {};
                Object.entries(shuffledOptionsMap).forEach(([original, shuffled]) => {
                  reverseMapping[shuffled] = original;
                });

                const originalKey = reverseMapping[key] || key;
                const isThisAnswer = showAnswer && currentQuestion.answer.includes(originalKey);
                const isSelected = teamAnswer && teamAnswer.answer.includes(key);
                const isMultiple = isMultipleChoice(currentQuestion);
                const isOptionSelected = selectedOptions.includes(key);

                return (
                  <button
                    key={key}
                    onClick={() => isMultiple ? toggleOption(key) : handleAnswer(key)}
                    disabled={questionResolved && !answeringTeam}
                    className={`p-4 rounded-xl text-lg font-medium transition-all text-left flex items-center gap-3 ${
                      isThisAnswer
                        ? 'bg-green-500 text-white shadow-lg scale-105'
                        : isSelected && teamAnswer && !teamAnswer.isCorrect
                        ? 'bg-red-400 text-white'
                        : isOptionSelected
                        ? 'bg-purple-100 text-gray-800 border-2 border-purple-500 shadow-md'
                        : answeringTeam && !questionResolved
                        ? 'bg-blue-50 text-gray-800 hover:bg-blue-100 cursor-pointer border-2 border-blue-300'
                        : 'bg-gray-50 text-gray-800 hover:bg-gray-100'
                    } ${questionResolved && !answeringTeam ? 'opacity-60 cursor-not-allowed' : ''}`}
                  >
                    {isMultiple && answeringTeam && (
                      <div className={`w-6 h-6 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                        isOptionSelected
                          ? 'bg-purple-600 border-purple-600'
                          : 'border-gray-400 bg-white'
                      }`}>
                        {isOptionSelected && (
                          <CheckCircle size={18} className="text-white" />
                        )}
                      </div>
                    )}
                    <div className="flex-1">
                      <span className="font-bold mr-3">{key}.</span>
                      {value}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* 多选题提交按钮 */}
            {isMultipleChoice(currentQuestion) && answeringTeam && !questionResolved && (
              <div className="mt-4 flex justify-center">
                <button
                  onClick={submitMultipleChoice}
                  disabled={selectedOptions.length === 0}
                  className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-3 px-8 rounded-xl text-lg flex items-center gap-2 shadow-lg transform transition hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  <ChevronRight size={24} />
                  提交答案 ({selectedOptions.length}个选项)
                </button>
              </div>
            )}
          </div>

          {/* 选择回答小组 */}
          {!questionResolved && (
            <div className="border-t-4 border-blue-500 pt-6 mb-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <h4 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                  <Users size={24} />
                  选择回答的小组：
                </h4>
                <div className="grid grid-cols-5 gap-3">
                  {Object.keys(scores).map(team => (
                    <button
                      key={team}
                      onClick={() => selectTeam(team)}
                      disabled={teamAnswers[team] !== undefined}
                      className={`py-3 px-4 rounded-lg font-bold text-base transition-all ${
                        answeringTeam === team
                          ? 'bg-blue-500 text-white shadow-lg scale-105'
                          : teamAnswers[team]
                          ? teamAnswers[team].isCorrect
                            ? 'bg-green-200 text-green-800 cursor-not-allowed'
                            : 'bg-red-200 text-red-800 cursor-not-allowed'
                          : 'bg-white hover:bg-blue-100 text-blue-900 cursor-pointer'
                      }`}
                    >
                      {team}
                      {teamAnswers[team] && (
                        <span className="ml-1">
                          {teamAnswers[team].isCorrect ? '✓' : '✗'}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
                {Object.keys(teamAnswers).length > 0 && (
                  <p className="text-sm text-gray-600 mt-3 text-center">
                    已回答：{Object.keys(teamAnswers).length}组 | 
                    正确：{Object.values(teamAnswers).filter(a => a.isCorrect).length}组 | 
                    错误：{Object.values(teamAnswers).filter(a => !a.isCorrect).length}组
                  </p>
                )}
              </div>
            </div>
          )}

          {/* 答案显示 */}
          {showAnswer && (
            <div className="border-t-4 border-green-500 pt-6">
              <div className="bg-green-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Trophy className="text-green-600" size={24} />
                  <span className="text-2xl font-bold text-green-700">
                    正确答案：{
                      // 将原始答案的每个字母转换为打乱后的字母
                      currentQuestion.answer.split('').map(char => shuffledOptionsMap[char] || char).sort().join('')
                    }
                    {currentQuestion.questionType === '判断题' && (
                      <span className="ml-2">({currentQuestion.answer === 'A' ? '正确' : '错误'})</span>
                    )}
                  </span>
                </div>
                {questionResolved && (
                  <div className="mt-4 p-3 bg-green-100 rounded-lg">
                    <p className="text-green-800 font-bold flex items-center gap-2">
                      <CheckCircle size={20} />
                      本题已被正确回答！可以抽取下一题。
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-16 max-w-4xl mx-auto text-center relative z-10 border-2 border-white/20">
          <div className="inline-flex p-6 bg-white/10 rounded-3xl mb-6">
            <Shuffle size={80} className="text-white drop-shadow-lg" />
          </div>
          <p className="text-4xl text-white font-bold mb-4 drop-shadow-lg">
            点击"抽取题目"开始竞赛
          </p>
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4">
            <p className="text-2xl text-amber-300 font-bold mb-2">
              本次共 {selectedQuestions.length} 道题目
            </p>
            <p className="text-lg text-yellow-200">
              🤖 AI知识 {selectedQuestions.filter(q => q.type === 'AI知识').length} 道 |
              🚩 党建知识 {selectedQuestions.filter(q => q.type === '党建知识').length} 道
            </p>
          </div>
        </div>
      )}

      {/* 计分板 */}
      <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 max-w-6xl mx-auto relative z-10 border-2 border-white/30">
        <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent mb-8 text-center flex items-center justify-center gap-3">
          <Trophy className="text-amber-500" size={36} />
          实时计分板
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {Object.entries(scores)
            .sort((a, b) => b[1] - a[1])
            .map(([team, score], index) => (
              <div
                key={team}
                className={`p-5 rounded-2xl text-center transition-all transform hover:scale-105 ${
                  index === 0 && score > 0
                    ? 'bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 shadow-2xl scale-110 border-4 border-white'
                    : index === 1 && score > 0
                    ? 'bg-gradient-to-br from-slate-300 to-slate-400 shadow-xl'
                    : index === 2 && score > 0
                    ? 'bg-gradient-to-br from-orange-300 to-orange-400 shadow-lg'
                    : 'bg-gradient-to-br from-gray-100 to-gray-200'
                }`}
              >
                <div className="text-base font-bold mb-2">{team}</div>
                <div className={`text-3xl font-bold ${
                  index === 0 && score > 0 ? 'text-red-800' : 
                  score < 0 ? 'text-red-600' : 'text-gray-800'
                }`}>
                  {score}分
                </div>
                <div className="flex gap-2 mt-3 justify-center">
                  <button
                    onClick={() => adjustScore(team, 10)}
                    className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded text-xs font-bold"
                  >
                    +10
                  </button>
                  <button
                    onClick={() => adjustScore(team, 5)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold"
                  >
                    +5
                  </button>
                  <button
                    onClick={() => adjustScore(team, -5)}
                    className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-xs font-bold"
                  >
                    -5
                  </button>
                </div>
              </div>
            ))}
        </div>
        <div className="text-center mt-8 text-gray-700 text-lg font-semibold bg-white/50 rounded-xl py-3">
          已使用题目：{usedQuestions.length} / {selectedQuestions.length}
        </div>
      </div>
      </div>
    </>
  );
};

export default QuizApp;
