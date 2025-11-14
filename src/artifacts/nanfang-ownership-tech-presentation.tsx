import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

type SlideConfig = {
  id: string;
  label: string;
  render: () => React.ReactNode;
};

const SectionTitle: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
  <div className="space-y-3">
    <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1 text-sm font-medium text-blue-600">
      <Sparkles size={16} />
      <span>述标重点</span>
    </div>
    <h2 className="text-3xl font-bold text-slate-900">{title}</h2>
    {subtitle ? (
      <p className="text-lg text-slate-600">{subtitle}</p>
    ) : null}
  </div>
);

const BulletList: React.FC<{ items: React.ReactNode[]; columns?: 1 | 2 | 3 }> = ({ items, columns = 1 }) => {
  const colClass = useMemo(() => {
    switch (columns) {
      case 2:
        return 'grid-cols-1 md:grid-cols-2';
      case 3:
        return 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3';
      default:
        return 'grid-cols-1';
    }
  }, [columns]);

  return (
    <div className={`grid gap-4 ${colClass}`}>
      {items.map((item, idx) => (
        <div key={idx} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
          <CheckCircle2 className="mt-1 h-5 w-5 text-blue-500" />
          <div className="text-base leading-relaxed text-slate-700">{item}</div>
        </div>
      ))}
    </div>
  );
};

const nanfangSlides: SlideConfig[] = [
  {
    id: 'cover',
    label: '封面',
    render: () => (
      <div className="relative flex min-h-[60vh] flex-col items-center justify-center gap-10 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-emerald-50" />
        <div className="space-y-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1 text-sm font-semibold text-blue-600 shadow-sm backdrop-blur">
            南方联合产权交易中心 · 智能服务平台项目
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            技术述标汇报 · AI驱动的产权交易智能服务平台
          </h1>
          <p className="text-lg text-slate-600 md:text-xl">
            业务理解 × 核心技术 × 创新价值 × 私有化可信交付
          </p>
        </div>
        <div className="grid gap-4 text-sm text-slate-600 md:grid-cols-3 md:gap-6">
          {[
            { label: '汇报单位', value: '广东南方电信规划咨询设计院有限公司' },
            { label: '汇报时间', value: '2025年11月述标会' },
            { label: '汇报人', value: '智能中台项目组' },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl bg-white/80 p-4 shadow-sm backdrop-blur">
              <div className="text-xs font-medium uppercase tracking-wide text-slate-400">{item.label}</div>
              <div className="mt-1 text-base font-semibold text-slate-800">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'agenda',
    label: '述标节奏',
    render: () => (
      <div className="space-y-10">
        <SectionTitle
          title="15分钟述标结构"
          subtitle="围绕评审要点展开，首尾呼应，突出AI深度赋能与可落地性"
        />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-blue-100 bg-blue-50/70 p-6">
            <h3 className="text-xl font-semibold text-blue-700">总体节奏</h3>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li><span className="font-medium text-blue-600">0-2分钟：</span>开场及项目背景，亮明深度调研优势</li>
              <li><span className="font-medium text-blue-600">3-6分钟：</span>业务理解与AI融合痛点场景</li>
              <li><span className="font-medium text-blue-600">7-11分钟：</span>技术架构、核心能力、创新与兼容性</li>
              <li><span className="font-medium text-blue-600">12-14分钟：</span>私有化大模型部署、运维与数据产品价值</li>
              <li><span className="font-medium text-blue-600">15分钟：</span>实施保障、答辩引导、总结落点</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h3 className="text-xl font-semibold text-slate-900">评分点对应策略</h3>
            <BulletList
              items={[
                '业务理解：以课题成果与一线访谈数据支撑对痛点的精准还原',
                '技术方案：八大模块一图透视，强调RAG+垂直模型+知识图谱闭环',
                '兼容落地：明确与“粤交易”等系统的对接策略与等级保护路径',
                '创新亮点：聚焦智能内容工厂、知识中枢与数据产品商业模式',
                '问题答辩：预置业务与技术高频问答脚本，展示团队响应能力',
              ]}
              columns={1}
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'business-insight',
    label: '业务理解',
    render: () => (
      <div className="space-y-10">
        <SectionTitle
          title="深度业务理解与客户洞察"
          subtitle="基于9个月联合课题、上百场访谈与三份成熟度报告的第一手认知"
        />
        <BulletList
          columns={2}
          items={[
            <div>
              <div className="font-semibold text-slate-900">行业战略地位与转型方向</div>
              <p className="mt-2 text-slate-600">精准把握产权市场“三重定位”与“3+N”业务格局，识别数字化向数智化跃迁窗口</p>
            </div>,
            <div>
              <div className="font-semibold text-slate-900">南方产权独特优势画像</div>
              <p className="mt-2 text-slate-600">区位、业务、数字化基础三个维度刻画，支撑平台定位为综合智能服务枢纽</p>
            </div>,
            <div>
              <div className="font-semibold text-slate-900">七大业务痛点体系</div>
              <p className="mt-2 text-slate-600">信息不对称、研究决策能力不足、流程线下依赖、知识碎片化、人效压力、数据沉睡、风险管理等结构性问题</p>
            </div>,
            <div>
              <div className="font-semibold text-slate-900">客户需求四层认知</div>
              <p className="mt-2 text-slate-600">从战略、业务、技术、合规四个层面映射显性+隐性需求，确保方案与十四五战略、投行化转型同频</p>
            </div>,
          ]}
        />
      </div>
    ),
  },
  {
    id: 'maturity-review',
    label: '成熟度评估',
    render: () => (
      <div className="space-y-9">
        <SectionTitle
          title="数智型交易平台成熟度评估结论"
          subtitle="基于南方产权联合课题成果，提炼发展级现状与关键改进抓手"
        />
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-blue-100 bg-blue-50/60 p-5 text-center text-slate-900">
            <div className="text-sm font-medium text-blue-600">综合水平</div>
            <div className="mt-2 text-4xl font-bold">3.16分</div>
            <div className="mt-1 text-sm">发展级（五级制第三档）</div>
          </div>
          <div className="rounded-3xl border border-emerald-100 bg-emerald-50/60 p-5">
            <div className="text-sm font-medium text-emerald-600">亮点能力</div>
            <p className="mt-2 text-sm text-slate-700">数字化治理 3.85、产品服务数字化 3.20，战略规划与线上渠道建设走在行业前列。</p>
          </div>
          <div className="rounded-3xl border border-amber-100 bg-amber-50/60 p-5">
            <div className="text-sm font-medium text-amber-600">薄弱环节</div>
            <p className="mt-2 text-sm text-slate-700">数据管理 2.82、内控数字化 2.85，数据标准缺失、风险监测自动化不足。</p>
          </div>
        </div>
        <BulletList
          columns={2}
          items={[
            <div>
              <div className="font-semibold text-slate-900">定量画像</div>
              <p className="mt-2 text-slate-600">8 大能力要素 × 19 个能力域 × 38 个子域全量评分，识别 1.03 分的能力波动区间。</p>
            </div>,
            <div>
              <div className="font-semibold text-slate-900">高压痛点</div>
              <p className="mt-2 text-slate-600">数据孤岛、系统割裂、人才结构、风控可视化四类挑战制约数智化纵深推进。</p>
            </div>,
            <div>
              <div className="font-semibold text-slate-900">价值机会</div>
              <p className="mt-2 text-slate-600">“数据治理→流程重塑→智能赋能”三条链路对应竞价率+10%、人效+30%、风险响应提速。</p>
            </div>,
            <div>
              <div className="font-semibold text-slate-900">优先行动</div>
              <p className="mt-2 text-slate-600">落地企业级数据中台、升级智能交易系统、构建AI人才与治理双中枢，形成“评估—整改—再评估”的闭环机制。</p>
            </div>,
          ]}
        />
      </div>
    ),
  },
  {
    id: 'ai-integration',
    label: 'AI融合',
    render: () => (
      <div className="space-y-10">
        <SectionTitle
          title="痛点到场景的AI赋能闭环"
          subtitle="以业务价值驱动AI落地，形成“识别痛点—定义场景—量化成效”链路"
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              title: '信息触达效率低',
              ai: '智能交互中枢（语义检索+多轮对话）',
              value: '检索时间缩短70%，竞价率提升≥10个百分点',
            },
            {
              title: '文档撰写耗时长',
              ai: '智能内容工厂（模板+RAG+智能图表）',
              value: '尽调报告初稿生成时间由3-5天降至1小时',
            },
            {
              title: '审核合规压力大',
              ai: '深度文档理解+规则引擎',
              value: '智能核验覆盖150+合规要点，降低遗漏风险',
            },
            {
              title: '知识经验难复制',
              ai: '产权知识图谱+智能问答',
              value: '新员工上手时间从12个月缩短至6个月以内',
            },
            {
              title: '投行化研究能力弱',
              ai: '产业生态分析平台（多源数据+洞察模型）',
              value: '行业报告交付周期缩短50%，支撑高附加值服务',
            },
            {
              title: '数据资产沉睡',
              ai: '数据产品工厂（标准化加工+交易所对接）',
              value: '2025年实现首个挂牌产品，探索持续性收入',
            },
            {
              title: '人效与成本压力',
              ai: '智能体工作台（流程自动编排）',
              value: '释放30%人力投入高价值工作，成本下降≥20%',
            },
            {
              title: '风控与安全',
              ai: '全周期安全监测+等级保护合规',
              value: '构建可追溯、可审计、可度量的安全闭环',
            },
          ].map((card) => (
            <div key={card.title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-sm font-semibold text-blue-600">痛点 · {card.title}</div>
              <div className="mt-3 text-lg font-bold text-slate-900">AI方案：{card.ai}</div>
              <p className="mt-3 text-sm text-slate-600">价值指标：{card.value}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'tech-architecture',
    label: '技术架构',
    render: () => (
      <div className="space-y-8">
        <SectionTitle
          title="“六层+八模块”技术总架构"
          subtitle="RAG优先、垂直模型加持、模块化解耦，保障先进性与可落地性"
        />
        <div className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-slate-900">六层架构</h3>
            <ul className="space-y-3 text-slate-700">
              <li>• 基础设施层：私有化GPU算力+国产化服务器，K8s容器调度</li>
              <li>• 模型层：32B开源大模型LoRA微调，支持多模型热插拔</li>
              <li>• 数据接入层：集团数据中台+外部公共数据+业务文档标准接入</li>
              <li>• 数据处理层：清洗、脱敏、向量化、知识图谱构建、质量监控</li>
              <li>• AI服务层：RAG检索、智能生成、智能体编排、规则引擎</li>
              <li>• 应用服务层：八大业务模块前台，API优先对接现有系统</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-slate-900">八大核心模块</h3>
            <div className="grid gap-3 text-sm text-slate-700 md:grid-cols-2">
              {[
                '智能交互中枢',
                '深度文档理解引擎',
                '智能内容生成工厂',
                '产业生态分析平台',
                'AI能力中枢',
                '产权垂直大模型',
                '数据接入与处理层',
                '系统集成与安全底座',
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-slate-50 px-4 py-3 font-medium text-slate-800">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'core-capabilities',
    label: '核心能力',
    render: () => (
      <div className="space-y-10">
        <SectionTitle
          title="三大核心能力打造专业级智能中枢"
          subtitle="聚焦评委关注的可行性、先进性与可复制性"
        />
        <BulletList
          columns={3}
          items={[
            <div>
              <div className="text-lg font-semibold text-slate-900">智能交互中枢</div>
              <p className="mt-2 text-sm text-slate-600">语义检索+向量重排+多轮对话，85%准确率；支持政策、流程、项目三大知识域；可追溯引用</p>
            </div>,
            <div>
              <div className="text-lg font-semibold text-slate-900">智能内容生成工厂</div>
              <p className="mt-2 text-sm text-slate-600">≥10类模板、章节级RAG写作、结构完整性95%；自动图表+质检清单+人工校审闭环</p>
            </div>,
            <div>
              <div className="text-lg font-semibold text-slate-900">产权垂直大模型</div>
              <p className="mt-2 text-sm text-slate-600">基于国产开源模型+LoRA微调；产权术语识别F1≥0.9；多模型投票机制强化鲁棒性</p>
            </div>,
          ]}
        />
        <div className="rounded-3xl border border-emerald-100 bg-emerald-50/70 p-6 text-sm text-emerald-700">
          <div className="font-semibold text-emerald-800">可复制性亮点</div>
          <p className="mt-2 leading-relaxed">
            通过“RAG优先+轻量微调”策略，确保新政策、新案例可快速接入；模块化架构支持未来向集团兄弟单位输出SaaS服务，实现能力共享与二次增值。
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'innovation',
    label: '创新亮点',
    render: () => (
      <div className="space-y-8">
        <SectionTitle
          title="技术创新与差异化优势"
          subtitle="聚焦“别人没有的，我们有；别人有的，我们做得更好”"
        />
        <BulletList
          items={[
            <div>
              <div className="font-semibold text-slate-900">产权行业知识图谱+智能体</div>
              <p className="mt-2 text-slate-600">首创“产业-企业-项目-规则”四层知识图谱，结合智能体编排，支撑一键生成招商推介、竞价脚本等专业工作流</p>
            </div>,
            <div>
              <div className="font-semibold text-slate-900">智能合规双擎</div>
              <p className="mt-2 text-slate-600">规则引擎+语义比对，实现150+监管要点自动核验；合规红线可视化提醒，减少人为疏漏</p>
            </div>,
            <div>
              <div className="font-semibold text-slate-900">数据产品商业化链路</div>
              <p className="mt-2 text-slate-600">从数据治理→指标资产→标准包→交易挂牌，全流程工具链支撑，首年锁定“粤港澳产业供需雷达”示范产品</p>
            </div>,
            <div>
              <div className="font-semibold text-slate-900">人机协同能力放大</div>
              <p className="mt-2 text-slate-600">AI辅助完成70%高频咨询、80%文档初稿、90%资料抽取，新员工六个月达标；打造“AI+业务双中台”运营模式</p>
            </div>,
          ]}
          columns={2}
        />
      </div>
    ),
  },
  {
    id: 'compatibility',
    label: '兼容保障',
    render: () => (
      <div className="space-y-10">
        <SectionTitle
          title="兼容性与实施保障方案"
          subtitle="以“小核心、大外延”策略保障平滑落地与可持续迭代"
        />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">系统兼容与集成</h3>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li>• 与“粤交易”统一认证SSO + OAuth2.0接入，保持原用户体系</li>
              <li>• API优先：REST+消息总线对接交易管理、OA、财务等系统</li>
              <li>• 数据同步：批量ETL+实时事件流，保障数据一致与时效</li>
              <li>• 部署解耦：旁路部署，不干扰现有生产系统，逐步扩展</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-blue-100 bg-blue-50/70 p-6">
            <h3 className="text-lg font-semibold text-blue-800">实施与测试保障</h3>
            <ul className="mt-4 space-y-3 text-blue-700">
              <li>• “四层测试”体系：单元/集成/验收/并行试运行，确保质量</li>
              <li>• 合规验证：等保二级设计先行，联合第三方安全测评</li>
              <li>• 用户共创：设置业务示范组，敏捷迭代，确保贴合实际</li>
              <li>• 迁移策略：低峰期灰度切换 + 数据回滚预案 + 双活监控</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'private-llm',
    label: '大模型部署',
    render: () => (
      <div className="space-y-10">
        <SectionTitle
          title="私有化大模型部署与运维体系"
          subtitle="安全、自主、可控，结合业务特性打造产权领域智能底座"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: '算力与环境',
              points: [
                '自建GPU集群：4×H20/4090级节点，K8s调度，支持横向扩展',
                '国产化服务器+离线网络区，满足国资单位安全合规',
                '模型仓库内网托管，镜像签名校验、漏洞扫描双重防护',
              ],
            },
            {
              title: '模型工程化',
              points: [
                'LoRA轻量微调+指令精调，周级迭代；多任务联合训练提升通用度',
                '检索增强：向量库+知识图谱，随时更新知识无需重新训练',
                '多模型集成：独立微调+投票融合，保障不同任务下的稳定性',
              ],
            },
            {
              title: '运维与治理',
              points: [
                'MLOps平台：版本管理、回滚、灰度发布、性能监控一体化',
                '安全策略：全链路脱敏、访问审计、Prompt注入防护、输出合规检测',
                '运维组织：7×24小时值守+联合运维机制，月度模型评测报告',
              ],
            },
          ].map((card) => (
            <div key={card.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{card.title}</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                {card.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'data-product',
    label: '数据产品',
    render: () => (
      <div className="space-y-10">
        <SectionTitle
          title="数据产品开发与商业价值路径"
          subtitle="从数据治理到交易挂牌的全链路能力，兑现价值承诺"
        />
        <div className="rounded-3xl border border-emerald-100 bg-emerald-50/60 p-6">
          <div className="grid gap-4 text-sm text-emerald-800 md:grid-cols-4">
            {[
              {
                stage: '数据治理',
                focus: '资产盘点+指标标准化+质量评分体系，构建可交易数据资产台账',
              },
              {
                stage: '产品设计',
                focus: '场景选择（百千万工程+招商撮合）+指标拼装+可视化模板',
              },
              {
                stage: '合规评估',
                focus: '涉敏数据脱敏、授权链验证、数据产品安全评估报告',
              },
              {
                stage: '挂牌交易',
                focus: '对接广州数据交易所API，完成产品说明书、定价策略、合同模板',
              },
            ].map((item) => (
              <div key={item.stage} className="rounded-2xl bg-white/70 p-4 shadow-sm backdrop-blur">
                <div className="text-xs font-semibold uppercase tracking-wide text-emerald-500">阶段 {item.stage}</div>
                <p className="mt-2 text-sm leading-relaxed">{item.focus}</p>
              </div>
            ))}
          </div>
        </div>
        <BulletList
          columns={2}
          items={[
            <div>
              <div className="font-semibold text-slate-900">首个示范产品：粤港澳国资项目机会雷达</div>
              <p className="mt-2 text-slate-600">基于过往项目画像+产业匹配+区域政策，输出双周版数据库和分析简报，支撑招商和投融资服务</p>
            </div>,
            <div>
              <div className="font-semibold text-slate-900">商业化模型</div>
              <p className="mt-2 text-slate-600">“平台服务费 + 数据订阅 + 定制研究”三层收益结构，预计24个月内形成年化300万以上新增收入</p>
            </div>,
          ]}
        />
      </div>
    ),
  },
  {
    id: 'delivery-plan',
    label: '实施路线',
    render: () => (
      <div className="space-y-10">
        <SectionTitle
          title="三阶段实施路线与里程碑"
          subtitle="敏捷迭代、价值先行，确保2025年底核心能力上线并形成数据产品"
        />
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              stage: '阶段一（2025.09-11）',
              theme: '核心能力快速交付',
              focus: ['垂直模型初版上线（准确率≥80%）', '智能交互与内容工厂最小可行版本', '试点业务共创，完成首轮用户验证'],
            },
            {
              stage: '阶段二（2025.12）',
              theme: '能力完善与准生产',
              focus: ['模型准确率提升至≥85%', '扩展模板≥5类、OCR准确率≥85%', '完成整体验收与等保测评'],
            },
            {
              stage: '阶段三（2026+）',
              theme: '价值深化与生态拓展',
              focus: ['产业分析与数据产品上新', '平台能力向集团内部开放复用', '建立运营监控+持续优化机制'],
            },
          ].map((item) => (
            <div key={item.stage} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold text-blue-600">{item.stage}</div>
              <div className="mt-2 text-lg font-bold text-slate-900">{item.theme}</div>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {item.focus.map((focus) => (
                  <li key={focus}>• {focus}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'qa',
    label: '答辩准备',
    render: () => (
      <div className="space-y-8">
        <SectionTitle
          title="答辩热点问题预案"
          subtitle="提前准备评委可能关注的业务与技术问题，确保响应专业到位"
        />
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              title: '业务类常见提问',
              items: [
                '如何确保AI生成内容的准确性与合规？——回答要点：RAG溯源、合规校验清单、人工复核闭环',
                '与现有流程是否冲突？——回答要点：旁路部署、不改变审批流程、与“粤交易”双向同步',
                '如何保障用户隐私与数据安全？——回答要点：分级分类、脱敏策略、等保二级设计、访问审计',
              ],
            },
            {
              title: '技术类常见提问',
              items: [
                '大模型如何持续迭代？——回答要点：MLOps体系、月度评测、LoRA增量、知识库实时更新',
                '系统性能与可用性指标？——回答要点：搜索≤3秒、报告≤60秒、可用性99.5%、50并发容量',
                '若政策变化如何快速响应？——回答要点：知识库自动化更新、规则引擎热更新、双周敏捷迭代',
              ],
            },
          ].map((block) => (
            <div key={block.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{block.title}</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                {block.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="rounded-3xl border border-purple-100 bg-purple-50/60 p-6 text-sm text-purple-700">
          <div className="font-semibold text-purple-800">收官提示</div>
          <p className="mt-2">
            结语回扣客户战略与项目目标：“我们深度理解南方产权业务，已准备好以AI能力赋能产权交易全流程，与贵方共建行业标杆平台，实现业务价值、创新引领与合规安全的三重胜利。”
          </p>
        </div>
      </div>
    ),
  },
];

const OwnershipTechPresentation: React.FC = () => {
  const [index, setIndex] = useState(0);

  const goPrev = () => setIndex((prev) => Math.max(prev - 1, 0));
  const goNext = () => setIndex((prev) => Math.min(prev + 1, nanfangSlides.length - 1));

  return (
    <div className="min-h-screen w-full bg-slate-100">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-28 pt-8 md:px-6 lg:px-10">
        <div className="flex items-center justify-between text-sm text-slate-500">
          <span>南方产权智能服务平台 · 技术述标PPT</span>
          <span>
            第 {index + 1} / {nanfangSlides.length} 页
          </span>
        </div>
        <div className="relative mt-6 flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={nanfangSlides[index].id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.3 }}
              className="h-full"
            >
              <div className="h-full rounded-[28px] bg-white p-6 shadow-xl md:p-10">
                {nanfangSlides[index].render()}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 border-t border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3 md:px-6">
          <button
            onClick={goPrev}
            disabled={index === 0}
            className="flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <ChevronLeft size={18} /> 上一页
          </button>
          <div className="hidden items-center gap-2 text-xs font-medium text-slate-500 md:flex">
            {nanfangSlides.map((slide, slideIndex) => (
              <button
                key={slide.id}
                className={`rounded-full px-3 py-1 transition ${
                  slideIndex === index
                    ? 'bg-blue-500 text-white shadow'
                    : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                }`}
                onClick={() => setIndex(slideIndex)}
              >
                {slide.label}
              </button>
            ))}
          </div>
          <button
            onClick={goNext}
            disabled={index === nanfangSlides.length - 1}
            className="flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-200"
          >
            下一页 <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export const meta = {
  title: '南方产权智能服务平台技术述标PPT',
  description:
    '围绕业务理解、技术方案、创新亮点、兼容保障、私有化大模型与数据产品价值的React述标材料。',
  order: 1,
};

export default OwnershipTechPresentation;

