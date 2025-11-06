import React, { useState } from 'react';
import { FileText, BarChart3, Download, Database, Sparkles, CheckCircle, AlertCircle } from 'lucide-react';

const ContentFactoryDemo = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [reportContent, setReportContent] = useState('');
  const [chartData, setChartData] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [requirements, setRequirements] = useState('');

  // 模板库
  const templates = [
    { 
      id: 'duediligence', 
      name: '尽职调查报告', 
      icon: '📋',
      description: '适用于企业产权交易项目的全面尽调分析'
    },
    { 
      id: 'market', 
      name: '市场分析报告', 
      icon: '📊',
      description: '产权交易市场趋势与行业分析'
    },
    { 
      id: 'policy', 
      name: '政策解读报告', 
      icon: '📜',
      description: '产权交易相关政策法规深度解析'
    },
    { 
      id: 'valuation', 
      name: '资产评估报告', 
      icon: '💰',
      description: '企业或项目资产价值评估分析'
    }
  ];

  // 模拟数据拉取
  const fetchData = async () => {
    setIsGenerating(true);
    setDataLoaded(false);
    
    // 模拟API调用延迟
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // 模拟拉取的数据
    const mockData = {
      transactions: [
        { year: '2021', count: 156, amount: 23.5 },
        { year: '2022', count: 189, amount: 31.2 },
        { year: '2023', count: 234, amount: 42.8 },
        { year: '2024', count: 278, amount: 56.3 },
        { year: '2025Q1-Q3', count: 198, amount: 48.7 }
      ],
      industryDistribution: [
        { name: '制造业', value: 35, color: '#3b82f6' },
        { name: '科技信息', value: 28, color: '#8b5cf6' },
        { name: '金融服务', value: 18, color: '#ec4899' },
        { name: '能源环保', value: 12, color: '#10b981' },
        { name: '其他', value: 7, color: '#f59e0b' }
      ],
      policyCount: 47,
      avgValuation: '2.89亿元',
      successRate: '92.3%'
    };
    
    setChartData(mockData);
    setDataLoaded(true);
    setIsGenerating(false);
  };

  // 生成报告内容
  const generateReport = async () => {
    if (!selectedTemplate || !requirements) {
      alert('请选择模板并输入生成需求');
      return;
    }

    setIsGenerating(true);
    
    // 模拟RAG生成过程
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const templateContents = {
      duediligence: `# 广东省产权交易项目尽职调查报告

## 一、项目基本情况

**项目名称：**${requirements.includes('项目') ? requirements : '某科技企业股权转让项目'}
**项目编号：**GDCQ-2025-1014
**委托单位：**广东省产权交易集团
**调查时间：**2025年10月

### 1.1 交易标的概况

根据知识库检索结果，本次交易标的为目标企业60%的股权，目标企业注册资本5000万元，主营业务为高端制造与技术研发。企业成立于2018年，经过7年发展已形成稳定的市场地位。

### 1.2 交易背景分析

基于产权交易历史数据分析，本项目符合当前产业结构优化升级的政策导向。近三年同类型项目成交率达92.3%，市场接受度高。

## 二、财务状况分析

### 2.1 近三年财务数据

通过数据中台拉取的财务信息显示：
- 2022年营业收入：1.2亿元，净利润：1,850万元
- 2023年营业收入：1.68亿元，净利润：2,420万元  
- 2024年营业收入：2.15亿元，净利润：3,180万元

**财务指标分析：**
- 营收增长率：三年复合增长率34.2%
- 净利率水平：维持在14-15%区间，盈利能力稳定
- 资产负债率：42.3%，处于合理水平

### 2.2 资产质量评估

固定资产账面价值8,500万元，主要为生产设备和厂房，成新率78%。应收账款周转天数65天，账龄结构健康，坏账风险可控。

## 三、法律合规性审查

### 3.1 产权清晰性

经核查工商登记、股权结构及历史沿革，标的股权权属清晰，不存在质押、冻结等权利限制。公司章程、股东会决议等法律文件完备。

### 3.2 合规经营情况

企业持有必要的经营资质和许可证照，近三年无重大行政处罚记录。劳动用工、税务缴纳、环保等方面合规性良好。

## 四、市场竞争分析

### 4.1 行业地位

目标企业在细分市场占有率约12%，位列行业前五。拥有发明专利23项、实用新型专利41项，技术壁垒明显。

### 4.2 客户结构

前五大客户占比38%，客户结构分散，不存在过度依赖单一客户的风险。主要客户为行业头部企业，合作关系稳定。

## 五、风险提示

### 5.1 主要风险因素

1. **市场竞争风险：**行业竞争加剧，可能影响毛利率水平
2. **技术迭代风险：**需持续研发投入保持技术领先
3. **政策变化风险：**关注产业政策调整对业务的影响

### 5.2 风险缓释措施

建议在交易协议中设置业绩承诺条款，并建立有效的公司治理机制，确保经营团队稳定性。

## 六、估值建议

### 6.1 估值方法

综合采用市场法和收益法进行估值：
- 市场法（可比公司法）：参考同行业可比上市公司，PE倍数12-15倍
- 收益法（DCF）：基于未来五年现金流预测，WACC为10.5%

### 6.2 估值结论

经综合分析，标的股权合理估值区间为**2.4亿元-2.8亿元**，对应整体企业价值4.0亿元-4.67亿元。

## 七、结论与建议

### 7.1 尽调结论

目标企业经营状况良好，财务数据真实可靠，资产权属清晰，具备交易条件。项目风险可控，投资价值明显。

### 7.2 交易建议

1. 建议交易价格区间：2.5亿元-2.7亿元
2. 建议设置3年业绩承诺期，年均净利润不低于3,500万元
3. 建议保留原管理团队，设置3年服务期限制

---

**报告编制：**广东省产权交易集团研究部  
**报告日期：**2025年10月14日  
**审核人员：**张主任、李总监

*本报告依据GB/T 9704-2012《党政机关公文格式》标准编制*`,

      market: `# 2025年广东省产权交易市场分析报告

## 摘要

本报告基于RAG知识库检索和数据中台实时数据，对2025年前三季度广东省产权交易市场进行全面分析。数据显示，市场整体保持稳健增长态势，交易规模和活跃度持续提升。

## 一、市场总体情况

### 1.1 交易规模分析

根据数据中台统计，2025年1-9月：
- **交易项目数：**198宗，同比增长12.5%
- **交易金额：**48.7亿元，同比增长15.8%  
- **平均单笔金额：**2,460万元，同比增长2.9%

近五年交易趋势显示，广东产权交易市场年均增速保持在15%以上，展现出强劲的发展动能。

### 1.2 市场结构特征

**行业分布：**
- 制造业项目占比35%，继续保持第一
- 科技信息产业占比28%，增速最快
- 金融服务业占比18%，结构稳定
- 能源环保领域占比12%，政策驱动明显
- 其他行业占比7%

## 二、重点行业分析

### 2.1 制造业产权交易

制造业转型升级推动产权交易活跃。高端装备制造、新材料等细分领域成为热点，平均估值溢价率达8.2%。

**典型案例：**某精密制造企业股权转让，引入战略投资者，交易金额1.8亿元，溢价率12%。

### 2.2 科技信息产业

知识产权和股权交易需求旺盛。人工智能、大数据、物联网等领域项目受到资本青睐，成交周期平均缩短至45天。

### 2.3 能源环保领域

"双碳"政策驱动下，新能源、节能环保项目交易活跃。光伏、风电资产证券化需求增加，项目平均收益率6.8%。

## 三、交易方式创新

### 3.1 数字化交易平台

"粤交易"平台功能持续优化，线上交易占比提升至67%。区块链技术应用于产权登记，提高交易透明度和效率。

### 3.2 多元化交易模式

- **竞价交易：**占比52%，适用于竞争性项目
- **协议转让：**占比31%，适用于战略性重组
- **拍卖交易：**占比12%，适用于司法处置资产
- **其他方式：**占比5%

## 四、政策环境分析

### 4.1 重点政策梳理

2025年出台的47项产权交易相关政策中，重点包括：
- 国企混改实施细则
- 数据要素市场化配置改革方案  
- 科技成果转化激励政策
- 金融支持实体经济政策

### 4.2 政策影响评估

政策环境持续优化，特别是国企混改政策落地，推动国有产权交易规模增长23%。

## 五、市场参与主体

### 5.1 供给侧分析

- **国有企业：**交易项目占比42%，混改需求旺盛
- **民营企业：**占比38%，股权优化需求增加
- **外资企业：**占比14%，跨境并购活跃
- **其他主体：**占比6%

### 5.2 需求侧分析

产业资本、金融资本、战略投资者三方并重。产业整合类投资者占比58%，财务投资者占比42%。

## 六、价格与估值

### 6.1 市场估值水平

各行业平均市盈率倍数：
- 科技信息：15-18倍
- 制造业：10-13倍
- 金融服务：8-11倍
- 能源环保：9-12倍

### 6.2 溢价率分析

2025年前三季度平均溢价率5.8%，优质项目溢价率可达15%以上。市场定价机制日趋成熟，理性定价特征明显。

## 七、市场展望

### 7.1 发展趋势

1. **交易规模持续扩大：**预计全年交易额突破65亿元
2. **数字化程度加深：**AI、区块链技术深度应用
3. **跨区域交易增多：**粤港澳大湾区一体化推进
4. **要素交易创新：**数据要素交易试点推开

### 7.2 机遇与挑战

**机遇：**
- 国企改革深化带来巨量交易需求
- 数字经济发展催生新型产权交易
- 区域协调发展创造跨区域交易机会

**挑战：**  
- 国际经济不确定性影响跨境交易
- 部分行业产能过剩抑制交易活跃度
- 市场规范化要求不断提高

## 八、对策建议

### 8.1 市场参与者建议

- **出让方：**充分挖掘资产价值，选择最优交易时机
- **受让方：**加强尽职调查，理性评估投资风险
- **中介机构：**提升专业服务能力，创新交易模式

### 8.2 政策建议

- 完善产权交易法律法规体系
- 优化市场准入和退出机制
- 加强市场监管和风险防控
- 推动产权交易数字化转型

---

**数据来源：**广东省产权交易集团数据中台、各交易所公开数据  
**报告机构：**广东省产权交易集团研究院  
**发布时间：**2025年10月14日

*本报告符合GB/T 9704-2012格式标准*`,

      policy: `# 2025年产权交易政策法规解读报告

## 政策概述

2025年，国家和地方层面出台了一系列产权交易相关政策，进一步规范市场秩序，激发市场活力。本报告基于RAG知识库对重点政策进行深度解读。

## 一、国家层面政策

### 1.1 《关于进一步深化国企改革的意见》

**发布机关：**国务院国资委  
**发布时间：**2025年3月

**核心要点：**
1. 明确国有产权进场交易强制性要求
2. 优化混合所有制改革实施路径
3. 建立国有资产交易信息披露机制

**对产权交易的影响：**
预计推动国有产权交易规模增长30%以上，进一步规范交易流程，提高透明度。

### 1.2 《数据要素市场化配置改革方案》

**发布机关：**中央网信办、国家发改委  
**发布时间：**2025年6月

**政策亮点：**
- 建立数据产权交易规则体系
- 设立数据交易场所和平台
- 完善数据定价机制

**实施路径：**
选择10个城市开展数据交易试点，广州作为首批试点城市之一。

## 二、地方政策解读

### 2.1 广东省政策

**《广东省产权交易管理办法》（修订版）**

主要修订内容：
1. 扩大强制进场交易范围
2. 简化交易流程，压缩交易时限
3. 加强信息化监管手段

**《粤港澳大湾区产权交易一体化实施方案》**

推动跨境产权交易便利化，建立互认机制。

### 2.2 其他省市政策对比

分析北京、上海、重庆等地产权交易政策特点，总结可借鉴经验。

## 三、政策执行建议

### 3.1 企业应对策略

- 及时了解政策变化
- 调整交易方案符合新规
- 加强合规性管理

### 3.2 交易所服务优化

- 优化业务流程匹配新政策
- 加强政策宣传培训
- 提供专业咨询服务

## 四、政策展望

未来政策重点将聚焦：
1. 数字要素交易规则完善
2. 跨区域交易标准统一
3. 国际化交易规则对接

---

**编制单位：**广东省产权交易集团政策研究部  
**报告时间：**2025年10月14日`,

      valuation: `# 资产评估报告

## 项目基本信息

**项目名称：**${requirements || '某企业股权价值评估'}
**委托方：**广东省产权交易集团  
**评估基准日：**2025年9月30日  
**评估机构：**广东联合资产评估有限公司

## 一、评估对象与范围

### 1.1 评估对象

目标企业100%股东权益价值

### 1.2 评估范围

纳入评估范围的资产包括：
- 流动资产：12,500万元
- 固定资产：8,500万元
- 无形资产：3,200万元
- 其他资产：1,800万元

**资产总计：**26,000万元  
**负债总计：**11,000万元  
**净资产账面值：**15,000万元

## 二、评估方法

### 2.1 方法选择

采用资产基础法和收益法两种方法进行评估：

**资产基础法：**
逐项评估各项资产和负债的公允价值，得出净资产价值。

**收益法：**
基于企业未来收益能力，采用折现现金流（DCF）模型评估。

### 2.2 收益法参数

- **预测期：**5年（2025-2029）
- **折现率（WACC）：**10.5%
- **永续增长率：**2.5%
- **税率：**25%

## 三、收益预测

### 3.1 历史业绩分析

基于数据中台拉取的财务数据：

| 年度 | 营业收入（万元） | 净利润（万元） | 增长率 |
|------|------------------|----------------|--------|
| 2022 | 12,000 | 1,850 | - |
| 2023 | 16,800 | 2,420 | 40% |
| 2024 | 21,500 | 3,180 | 28% |

### 3.2 未来收益预测

| 年度 | 营业收入（万元） | 净利润（万元） | 自由现金流（万元） |
|------|------------------|----------------|---------------------|
| 2025 | 25,800 | 3,870 | 3,200 |
| 2026 | 30,100 | 4,515 | 3,850 |
| 2027 | 34,600 | 5,190 | 4,520 |
| 2028 | 38,500 | 5,775 | 5,100 |
| 2029 | 42,000 | 6,300 | 5,600 |

## 四、评估结果

### 4.1 资产基础法结果

经逐项评估：
- 资产评估值：28,500万元
- 负债评估值：10,800万元
- **净资产评估值：17,700万元**

### 4.2 收益法结果

折现现金流计算：
- 预测期现金流现值：16,800万元
- 永续期现金流现值：11,200万元
- **企业价值评估值：28,000万元**
- 付息债务：10,000万元
- **股东权益价值：18,000万元**

### 4.3 评估结论

综合两种方法，以收益法为主，资产基础法为辅：

**股东全部权益评估值：1.8亿元**

较账面净资产增值3,000万元，增值率20%。

## 五、特别事项说明

1. 本评估结果仅为产权交易提供价值参考
2. 评估结论有效期一年
3. 评估过程中未发现重大或有事项

## 六、评估师声明

本评估报告符合《资产评估准则》等相关规定，评估过程独立、客观、公正。

---

**评估机构：**广东联合资产评估有限公司  
**项目负责人：**王评估师（执业证号：XXX）  
**报告日期：**2025年10月14日

*本报告符合GB/T 9704-2012格式标准*`
    };

    setReportContent(templateContents[selectedTemplate] || '报告生成中...');
    setIsGenerating(false);
    setActiveStep(2);
  };

  // 导出功能
  const exportReport = (format) => {
    const formats = {
      word: 'Word文档(.docx)',
      pdf: 'PDF文档(.pdf)',
      excel: '数据表格(.xlsx)'
    };
    alert(`正在导出为${formats[format]}...\n\n✓ 已应用GB/T 9704-2012国标格式\n✓ 包含完整图表和数据\n✓ 格式标准化处理完成`);
  };

  // 图表组件
  const ChartDisplay = () => {
    if (!chartData) return null;

    return (
      <div className="space-y-6">
        {/* 交易趋势柱状图 */}
        <div className="bg-white p-6 rounded-lg border">
          <h4 className="font-semibold mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-blue-600" />
            近五年产权交易趋势
          </h4>
          <div className="space-y-2">
            {chartData.transactions.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <span className="w-20 text-sm text-gray-600">{item.year}</span>
                <div className="flex-1 flex gap-2">
                  <div className="flex items-center gap-2 flex-1">
                    <div 
                      className="bg-blue-500 h-8 rounded flex items-center justify-end pr-2 text-white text-sm font-medium"
                      style={{width: `${(item.count / 300) * 100}%`}}
                    >
                      {item.count}宗
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-1">
                    <div 
                      className="bg-green-500 h-8 rounded flex items-center justify-end pr-2 text-white text-sm font-medium"
                      style={{width: `${(item.amount / 60) * 100}%`}}
                    >
                      {item.amount}亿
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-4 mt-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-500 rounded"></div>
              <span>交易数量</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded"></div>
              <span>交易金额</span>
            </div>
          </div>
        </div>

        {/* 行业分布饼图 */}
        <div className="bg-white p-6 rounded-lg border">
          <h4 className="font-semibold mb-4">行业分布占比</h4>
          <div className="flex items-center gap-6">
            <div className="flex-1">
              {chartData.industryDistribution.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 mb-3">
                  <div 
                    className="w-4 h-4 rounded"
                    style={{backgroundColor: item.color}}
                  ></div>
                  <span className="text-sm flex-1">{item.name}</span>
                  <span className="font-semibold">{item.value}%</span>
                  <div className="w-32 bg-gray-200 h-2 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full"
                      style={{
                        width: `${item.value}%`,
                        backgroundColor: item.color
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            {/* 饼图可视化 */}
            <div className="relative w-48 h-48">
              <svg viewBox="0 0 100 100" className="transform -rotate-90">
                {(() => {
                  let currentAngle = 0;
                  return chartData.industryDistribution.map((item, idx) => {
                    const angle = (item.value / 100) * 360;
                    const largeArc = angle > 180 ? 1 : 0;
                    const x1 = 50 + 45 * Math.cos((currentAngle * Math.PI) / 180);
                    const y1 = 50 + 45 * Math.sin((currentAngle * Math.PI) / 180);
                    currentAngle += angle;
                    const x2 = 50 + 45 * Math.cos((currentAngle * Math.PI) / 180);
                    const y2 = 50 + 45 * Math.sin((currentAngle * Math.PI) / 180);
                    
                    return (
                      <path
                        key={idx}
                        d={`M 50 50 L ${x1} ${y1} A 45 45 0 ${largeArc} 1 ${x2} ${y2} Z`}
                        fill={item.color}
                        opacity="0.9"
                      />
                    );
                  });
                })()}
                <circle cx="50" cy="50" r="20" fill="white" />
              </svg>
            </div>
          </div>
        </div>

        {/* 关键指标卡片 */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">
            <div className="text-sm text-blue-600 mb-1">政策数量</div>
            <div className="text-2xl font-bold text-blue-700">{chartData.policyCount}</div>
            <div className="text-xs text-blue-500 mt-1">项相关政策</div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border border-green-200">
            <div className="text-sm text-green-600 mb-1">平均估值</div>
            <div className="text-2xl font-bold text-green-700">{chartData.avgValuation}</div>
            <div className="text-xs text-green-500 mt-1">单笔交易平均</div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg border border-purple-200">
            <div className="text-sm text-purple-600 mb-1">成交成功率</div>
            <div className="text-2xl font-bold text-purple-700">{chartData.successRate}</div>
            <div className="text-xs text-purple-500 mt-1">行业领先水平</div>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg border border-orange-200">
            <div className="text-sm text-orange-600 mb-1">累计交易额</div>
            <div className="text-2xl font-bold text-orange-700">48.7亿</div>
            <div className="text-xs text-orange-500 mt-1">2025年前三季度</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* 顶部导航 */}
      <div className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">智能内容生成工厂</h1>
                <p className="text-sm text-gray-500">AI驱动的产权交易报告自动生成系统</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full font-medium">
                系统运行正常
              </div>
              <div className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                演示版本 v2.0
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* 步骤指示器 */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {[
              { num: 1, name: '选择模板', icon: FileText },
              { num: 2, name: '数据拉取', icon: Database },
              { num: 3, name: 'RAG生成', icon: Sparkles },
              { num: 4, name: '格式输出', icon: Download }
            ].map((step, idx) => (
              <div key={idx} className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all ${
                    activeStep >= idx 
                      ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg' 
                      : 'bg-gray-200 text-gray-400'
                  }`}>
                    <step.icon className="w-6 h-6" />
                  </div>
                  <span className={`mt-2 text-sm font-medium ${
                    activeStep >= idx ? 'text-gray-900' : 'text-gray-400'
                  }`}>
                    {step.name}
                  </span>
                </div>
                {idx < 3 && (
                  <div className={`flex-1 h-1 mx-4 rounded transition-all ${
                    activeStep > idx ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-gray-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 主内容区 */}
        <div className="grid grid-cols-3 gap-6">
          {/* 左侧控制面板 */}
          <div className="space-y-6">
            {/* 步骤1: 选择模板 */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold text-lg">步骤1: 选择报告模板</h3>
              </div>
              <div className="space-y-3">
                {templates.map(template => (
                  <button
                    key={template.id}
                    onClick={() => {
                      setSelectedTemplate(template.id);
                      setActiveStep(0);
                    }}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                      selectedTemplate === template.id
                        ? 'border-blue-600 bg-blue-50 shadow-md'
                        : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{template.icon}</span>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">{template.name}</div>
                        <div className="text-xs text-gray-500 mt-1">{template.description}</div>
                      </div>
                      {selectedTemplate === template.id && (
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 步骤2: 输入需求 */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-purple-600" />
                <h3 className="font-semibold text-lg">步骤2: 输入生成需求</h3>
              </div>
              <textarea
                value={requirements}
                onChange={(e) => setRequirements(e.target.value)}
                placeholder="请描述您的报告需求，例如：&#10;- 项目名称或主题&#10;- 重点关注的方面&#10;- 特殊要求等&#10;&#10;系统将基于RAG知识库智能生成..."
                className="w-full h-32 p-3 border rounded-lg text-sm resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <div className="mt-3 text-xs text-gray-500">
                💡 提示: 需求越详细，生成内容越精准
              </div>
            </div>

            {/* 步骤3: 操作按钮 */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <div className="space-y-3">
                <button
                  onClick={fetchData}
                  disabled={!selectedTemplate || isGenerating}
                  className="w-full py-3 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-lg font-medium hover:from-green-700 hover:to-green-600 disabled:from-gray-300 disabled:to-gray-300 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                >
                  <Database className="w-5 h-5" />
                  {dataLoaded ? '✓ 数据已拉取' : '自动拉取数据'}
                </button>

                <button
                  onClick={generateReport}
                  disabled={!selectedTemplate || !requirements || isGenerating}
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 disabled:from-gray-300 disabled:to-gray-300 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                >
                  {isGenerating ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>AI生成中...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      <span>RAG智能生成</span>
                    </>
                  )}
                </button>
              </div>

              {dataLoaded && (
                <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-green-800">
                      <div className="font-medium mb-1">数据拉取成功</div>
                      <div className="text-xs space-y-0.5">
                        <div>✓ 交易数据: 5年历史数据</div>
                        <div>✓ 行业分布: 5大类别数据</div>
                        <div>✓ 关键指标: 4项核心指标</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 右侧预览区 */}
          <div className="col-span-2 space-y-6">
            {/* 图表展示 */}
            {dataLoaded && (
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-blue-600" />
                    <h3 className="font-semibold text-lg">智能图表生成</h3>
                  </div>
                  <div className="text-sm text-gray-500">
                    数据来源: 广东省产权交易数据中台
                  </div>
                </div>
                <ChartDisplay />
              </div>
            )}

            {/* 报告内容预览 */}
            {reportContent && (
              <div className="bg-white rounded-xl shadow-sm border">
                <div className="p-6 border-b bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileText className="w-5 h-5 text-blue-600" />
                      <h3 className="font-semibold text-lg">报告内容预览</h3>
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                        已应用国标格式
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => exportReport('word')}
                        className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-all flex items-center gap-2"
                      >
                        <Download className="w-4 h-4" />
                        Word
                      </button>
                      <button
                        onClick={() => exportReport('pdf')}
                        className="px-4 py-2 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition-all flex items-center gap-2"
                      >
                        <Download className="w-4 h-4" />
                        PDF
                      </button>
                      <button
                        onClick={() => exportReport('excel')}
                        className="px-4 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-all flex items-center gap-2"
                      >
                        <Download className="w-4 h-4" />
                        Excel
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-6 max-h-[600px] overflow-y-auto">
                  <div className="prose prose-sm max-w-none">
                    <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-gray-800">
                      {reportContent}
                    </pre>
                  </div>
                </div>
                <div className="p-4 border-t bg-gray-50 text-xs text-gray-500 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span>✓ 符合GB/T 9704-2012标准</span>
                    <span>✓ 基于RAG知识库生成</span>
                    <span>✓ 包含数据中台实时数据</span>
                  </div>
                  <div>
                    生成时间: {new Date().toLocaleString('zh-CN')}
                  </div>
                </div>
              </div>
            )}

            {/* 功能说明 */}
            {!reportContent && !dataLoaded && (
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border-2 border-dashed border-blue-300 p-12 text-center">
                <Sparkles className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  智能内容生成工厂
                </h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  基于RAG检索增强生成技术，结合产权交易专业知识库，自动生成高质量、标准化的专业报告
                </p>
                <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
                  <div className="bg-white p-4 rounded-lg border">
                    <CheckCircle className="w-5 h-5 text-green-600 mb-2" />
                    <div className="font-medium text-sm mb-1">RAG智能写作</div>
                    <div className="text-xs text-gray-500">基于10万+文档知识库</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border">
                    <CheckCircle className="w-5 h-5 text-blue-600 mb-2" />
                    <div className="font-medium text-sm mb-1">智能图表生成</div>
                    <div className="text-xs text-gray-500">数据自动可视化</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border">
                    <CheckCircle className="w-5 h-5 text-purple-600 mb-2" />
                    <div className="font-medium text-sm mb-1">格式标准化</div>
                    <div className="text-xs text-gray-500">符合GB/T 9704-2012</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border">
                    <CheckCircle className="w-5 h-5 text-orange-600 mb-2" />
                    <div className="font-medium text-sm mb-1">数据自动拉取</div>
                    <div className="text-xs text-gray-500">对接数据中台接口</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 底部功能特性 */}
        <div className="mt-8 grid grid-cols-4 gap-4">
          {[
            { icon: '🎯', title: '精准检索', desc: '向量相似度+语义理解' },
            { icon: '⚡', title: '快速生成', desc: '3分钟完成专业报告' },
            { icon: '📊', title: '数据驱动', desc: '实时拉取最新业务数据' },
            { icon: '✅', title: '质量保证', desc: '内容准确率≥85%' }
          ].map((feature, idx) => (
            <div key={idx} className="bg-white rounded-lg border p-4 text-center hover:shadow-md transition-all">
              <div className="text-3xl mb-2">{feature.icon}</div>
              <div className="font-semibold text-sm mb-1">{feature.title}</div>
              <div className="text-xs text-gray-500">{feature.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentFactoryDemo;