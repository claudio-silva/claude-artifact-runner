import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ChevronLeft,
  ChevronRight,
  ListOrdered,
  Shield,
  Layers,
  Database,
  Cpu,
  Server,
  LineChart,
  Workflow,
  Lock,
  Rocket,
  Wrench
} from "lucide-react";

type SlideMeta = {
  id: string;
  title: string;
  subtitle?: string;
};

export const meta = {
  title: "南方产权智能服务平台 技术述标PPT",
  description:
    "AI驱动数智化升级：业务理解、技术路线、创新优势、兼容与安全、私有化大模型与数据产品",
  category: "述标材料",
  order: 1
};

const slidesMeta: SlideMeta[] = [
  { id: "cover", title: "南方产权智能服务平台 技术述标", subtitle: "AI驱动数智化升级" },
  { id: "toc", title: "述标目录与评分点对齐" },
  { id: "biz-1", title: "业务理解：行业定位与南方产权优势" },
  { id: "biz-2", title: "业务痛点×AI融合：从痛点到价值" },
  { id: "maturity-framework", title: "成熟度评估：框架与指标体系" },
  { id: "maturity-method", title: "成熟度评估：方法与过程" },
  { id: "maturity-result", title: "成熟度评估：结果与重点差距" },
  { id: "tech-route", title: "技术路线：RAG优先 + 微调为辅" },
  { id: "arch", title: "总体技术架构：六层架构与职责" },
  { id: "module-ic", title: "关键模块：智能交互中枢" },
  { id: "module-doc", title: "关键模块：深度文档理解引擎" },
  { id: "module-gen", title: "关键模块：智能内容生成工厂" },
  { id: "ai-hub", title: "AI能力中枢与垂直模型" },
  { id: "compat", title: "兼容性与实施保障" },
  { id: "llm-ops", title: "私有化大模型部署与安全运维" },
  { id: "data-prod", title: "数据产品开发与商业价值（数交所挂牌）" },
  { id: "plan", title: "实施路径与里程碑（3阶段）" },
  { id: "innov", title: "技术创新与差异化优势" },
  { id: "risk", title: "风险识别与应对策略" },
  { id: "qa", title: "Q&A 提纲（备选问题与回答思路）" },
  { id: "end", title: "感谢与交流" }
];

function useKeyboardNavigation(totalSlides: number, onPrev: () => void, onNext: () => void, onJump: (index: number) => void) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        onPrev();
      } else if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        onNext();
      } else if (e.key === "Home") {
        e.preventDefault();
        onJump(0);
      } else if (e.key === "End") {
        e.preventDefault();
        onJump(totalSlides - 1);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onPrev, onNext, onJump, totalSlides]);
}

function SlideContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="w-full max-w-6xl px-6 py-8">
        {children}
      </div>
    </div>
  );
}

function SectionTitle({ icon, title, subtitle }: { icon?: React.ReactNode; title: string; subtitle?: string }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3">
        {icon}
        <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      </div>
      {subtitle ? <p className="mt-2 text-muted-foreground">{subtitle}</p> : null}
    </div>
  );
}

function BulletList({ items }: { items: Array<string | React.ReactNode> }) {
  return (
    <ul className="mt-4 grid grid-cols-1 gap-3 text-lg leading-relaxed">
      {items.map((item, idx) => (
        <li key={idx} className="flex gap-2">
          <span className="mt-1 h-2 w-2 rounded-full bg-primary/80" />
          <div>{item}</div>
        </li>
      ))}
    </ul>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return <Badge className="rounded-full px-3 py-1 text-sm">{children}</Badge>;
}

function LayerBox({ title, desc, icon }: { title: string; desc: string; icon: React.ReactNode }) {
  return (
    <Card className="border-primary/10">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          {icon}
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">{desc}</CardContent>
    </Card>
  );
}

export default function TechBidPPT() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOutlineOpen, setIsOutlineOpen] = useState(false);
  const totalSlides = slidesMeta.length;

  const goPrev = useCallback(() => setCurrentIndex(i => Math.max(0, i - 1)), []);
  const goNext = useCallback(() => setCurrentIndex(i => Math.min(totalSlides - 1, i + 1)), [totalSlides]);
  const goJump = useCallback((index: number) => setCurrentIndex(Math.min(Math.max(index, 0), totalSlides - 1)), [totalSlides]);

  useKeyboardNavigation(totalSlides, goPrev, goNext, goJump);

  const slideTitle = slidesMeta[currentIndex]?.title ?? "";

  const progressPercent = useMemo(() => Math.round(((currentIndex + 1) / totalSlides) * 100), [currentIndex, totalSlides]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-background to-muted/30">
      <header className="sticky top-0 z-10 w-full bg-background/70 backdrop-blur border-b">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <Pill>南方产权·技术述标</Pill>
            <span className="text-sm text-muted-foreground">{slideTitle}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm tabular-nums text-muted-foreground">{currentIndex + 1}/{totalSlides} · {progressPercent}%</span>
            <Button variant="outline" size="icon" onClick={() => setIsOutlineOpen(v => !v)} aria-label="打开目录">
              <ListOrdered className="h-4 w-4" />
            </Button>
            <div className="hidden gap-2 sm:flex">
              <Button variant="secondary" onClick={goPrev} disabled={currentIndex === 0}>
                <ChevronLeft className="mr-1 h-4 w-4" /> 上一页
              </Button>
              <Button onClick={goNext} disabled={currentIndex === totalSlides - 1}>
                下一页 <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* 目录抽屉 */}
      <AnimatePresence>
        {isOutlineOpen ? (
          <motion.aside
            initial={{ x: 320, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 320, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            className="fixed right-0 top-12 z-20 h-[calc(100vh-3rem)] w-80 overflow-y-auto border-l bg-background shadow-xl"
          >
            <div className="p-4">
              <h3 className="mb-3 text-sm font-semibold text-muted-foreground">目录</h3>
              <ol className="space-y-2 text-sm">
                {slidesMeta.map((s, idx) => (
                  <li key={s.id}>
                    <button
                      className={`w-full rounded px-2 py-2 text-left hover:bg-muted ${idx === currentIndex ? "bg-muted" : ""}`}
                      onClick={() => {
                        setIsOutlineOpen(false);
                        goJump(idx);
                      }}
                    >
                      <span className="mr-2 inline-block w-6 tabular-nums text-muted-foreground">{idx + 1}.</span>
                      <span className="font-medium">{s.title}</span>
                    </button>
                  </li>
                ))}
              </ol>
            </div>
          </motion.aside>
        ) : null}
      </AnimatePresence>

      {/* 幻灯片区域 */}
      <main className="relative mx-auto h-[calc(100vh-3rem)] max-w-[96rem]">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.22 }}
            className="h-full"
          >
            <Slide currentIndex={currentIndex} />
          </motion.div>
        </AnimatePresence>

        {/* 移动端底部导航 */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between p-3 sm:hidden">
          <Button className="pointer-events-auto" variant="secondary" size="icon" onClick={goPrev} disabled={currentIndex === 0}>
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <div className="pointer-events-auto flex gap-1">
            {slidesMeta.map((_, idx) => (
              <button
                key={idx}
                className={`h-2 w-2 rounded-full ${idx === currentIndex ? "bg-primary" : "bg-primary/20"}`}
                aria-label={`跳转到第${idx + 1}页`}
                onClick={() => goJump(idx)}
              />
            ))}
          </div>
          <Button className="pointer-events-auto" size="icon" onClick={goNext} disabled={currentIndex === totalSlides - 1}>
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </main>
    </div>
  );
}

function Slide({ currentIndex }: { currentIndex: number }) {
  switch (slidesMeta[currentIndex]?.id) {
    case "cover":
      return (
        <SlideContainer>
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <Pill>技术述标</Pill>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">南方产权智能服务平台</h1>
            <p className="mt-3 max-w-3xl text-lg text-muted-foreground">AI驱动数智化升级 · 从业务痛点出发的工程化落地方案</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              <Badge variant="secondary"><Cpu className="mr-1 h-4 w-4" /> RAG + 垂直模型</Badge>
              <Badge variant="secondary"><Workflow className="mr-1 h-4 w-4" /> 智能交互中枢</Badge>
              <Badge variant="secondary"><Layers className="mr-1 h-4 w-4" /> 六层架构</Badge>
              <Badge variant="secondary"><Shield className="mr-1 h-4 w-4" /> 等保二级</Badge>
            </div>
          </div>
        </SlideContainer>
      );

    case "toc":
      return (
        <SlideContainer>
          <SectionTitle title="述标目录与评分点对齐" subtitle="15分钟 · 精准命中评审要点" icon={<ListOrdered className="h-6 w-6 text-primary" />} />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>评分点</CardTitle>
              </CardHeader>
              <CardContent>
                <BulletList
                  items={[
                    "业务理解与AI融合(3分)：深度把握痛点，场景契合",
                    "技术方案(2.5分)：技术选型、架构与关键技术",
                    "兼容性与实施保障(1.5分)：对接现网、测试验证",
                    "问题回答(1分)：专业、可行、落地"
                  ]}
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>目录</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-2 text-sm">
                  {slidesMeta.slice(2, 16).map((s, i) => (
                    <div key={s.id} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary/80" />
                      <span>{i + 1}. {s.title}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </SlideContainer>
      );

    case "biz-1":
      return (
        <SlideContainer>
          <SectionTitle title="业务理解：行业定位与南方产权优势" subtitle="深度调研沉淀 · 以客户真实痛点为起点" icon={<LineChart className="h-6 w-6 text-primary" />} />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>行业三重定位</CardTitle>
              </CardHeader>
              <CardContent>
                <BulletList
                  items={[
                    "国资国企改革核心平台：混改落地主阵地",
                    "要素资源配置枢纽：企业产权/金融资产/行政资产 + N",
                    "行业创新引领者：定价机制、交易方式、服务模式持续创新"
                  ]}
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>南方产权独特优势</CardTitle>
              </CardHeader>
              <CardContent>
                <BulletList
                  items={[
                    "区位与辐射：粤港澳大湾区核心，央地协同全国覆盖",
                    "业务体系成熟：\"3+N\" 业务格局，投行化服务领先",
                    "数字化基础扎实：粤易租/粤采易/破产重整等平台成功运营"
                  ]}
                />
              </CardContent>
            </Card>
          </div>
        </SlideContainer>
      );

    case "biz-2":
      return (
        <SlideContainer>
          <SectionTitle title="业务痛点×AI融合：从痛点到价值" subtitle="以结果为导向的场景落地" icon={<Workflow className="h-6 w-6 text-primary" />} />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>核心痛点</CardTitle>
              </CardHeader>
              <CardContent>
                <BulletList
                  items={[
                    "信息不对称：触达与匹配效率低、竞价率不高",
                    "研究决策能力不足：报告编制耗时长、深度不足",
                    "系统集成不足：多系统多登录、数据孤岛",
                    "知识碎片化：规则多且更新快、经验难沉淀",
                    "人才与效率：高人力投入，标准化与可复制性不足"
                  ]}
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>AI赋能价值</CardTitle>
              </CardHeader>
              <CardContent>
                <BulletList
                  items={[
                    "语义检索+个性化推荐：精准触达，提高成交与竞价率",
                    "RAG写作+智能审核：报告初稿60秒、审核提效5-10倍",
                    "知识图谱+智能问答：7×24 专业咨询与规则指引",
                    "智能文档处理：多格式/OCR/结构化抽取，沉淀知识资产",
                    "人机协同：释放人力投入，放大普通员工专业产出"
                  ]}
                />
              </CardContent>
            </Card>
          </div>
        </SlideContainer>
      );

    case "maturity-framework":
      return (
        <SlideContainer>
          <SectionTitle title="成熟度评估：框架与指标体系" subtitle="8大能力要素 × 19能力域 × 38子域" icon={<Layers className="h-6 w-6 text-primary" />} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>评估目标与定位</CardTitle>
              </CardHeader>
              <CardContent>
                <BulletList
                  items={[
                    "客观诊断数字化/智能化现状，识别结构性短板",
                    "形成分层分域画像，为路径规划与优先级提供依据",
                    "建立可跟踪的量化指标，支撑后续对标与验收"
                  ]}
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>能力要素（8）</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["数字化治理","数据管理","数字化基础设施","产品和服务数字化","经营管理数字化","运营数字化","内控体系数字化","可持续发展基础"].map((k) => (
                    <Badge key={k} variant="secondary" className="px-3 py-1">{k}</Badge>
                  ))}
                </div>
                <div className="mt-4 text-sm text-muted-foreground">覆盖19个能力域与38个能力子域，既看体系建设，也看业务应用成效。</div>
              </CardContent>
            </Card>
          </div>
        </SlideContainer>
      );

    case "maturity-method":
      return (
        <SlideContainer>
          <SectionTitle title="成熟度评估：方法与过程" subtitle="方法多元，证据闭环" icon={<Workflow className="h-6 w-6 text-primary" />} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>方法与样本</CardTitle>
              </CardHeader>
              <CardContent>
                <BulletList
                  items={[
                    "资料收集600+：战略/流程/架构/数据等内部文档",
                    "19个部门深度访谈：痛点、能力与诉求核验",
                    "问卷115份：认知与能力量化画像",
                    "专项测试：系统与数据质量抽测、性能/可靠性",
                    "标杆对比与专家评审：同业+第三方交叉验证"
                  ]}
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>评分与出具</CardTitle>
              </CardHeader>
              <CardContent>
                <BulletList
                  items={[
                    "指标量表：要素→能力域→子域的分层加权",
                    "证据链：访谈/文档/系统截图/抽测数据相互印证",
                    "出具成果：成熟度雷达、短板清单、优先级矩阵"
                  ]}
                />
              </CardContent>
            </Card>
          </div>
        </SlideContainer>
      );

    case "maturity-result":
      return (
        <SlideContainer>
          <SectionTitle title="成熟度评估：结果与重点差距" subtitle="综合3.16分（发展级），治理最佳、数据最弱" icon={<LineChart className="h-6 w-6 text-primary" />} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>核心结论</CardTitle>
              </CardHeader>
              <CardContent>
                <BulletList
                  items={[
                    "综合得分3.16/5（发展级）：体系基本成形，需向量化/优化级迈进",
                    "最高：数字化治理 3.85（战略清晰、治理到位）",
                    "最低：数据管理 2.82（标准/质量/融合与安全薄弱）",
                    "内控数字化 2.85：合规/风控/审计能力需补强"
                  ]}
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>改进优先级（P0）</CardTitle>
              </CardHeader>
              <CardContent>
                <BulletList
                  items={[
                    "数据治理先行：数据接入/标准/质量/脱敏与权限",
                    "智能服务落点：语义搜索/智能问答/智能报告（直接提效）",
                    "合规能力：规则知识库+智能审核，降低审核风险",
                    "集成体验：与“粤交易”SSO/数据中台对接，消除多系统割裂"
                  ]}
                />
              </CardContent>
            </Card>
          </div>
        </SlideContainer>
      );

    case "tech-route":
      return (
        <SlideContainer>
          <SectionTitle title="技术路线：RAG优先 + 微调为辅" subtitle="检索-生成-溯源的工程化闭环" icon={<Cpu className="h-6 w-6 text-primary" />} />
          <BulletList
            items={[
              "RAG优先：以高质量知识库确保准确性与可溯源，避免模型幻觉",
              "轻量微调(LoRA)：注入产权领域术语与流程知识，提升专业性",
              "多模型热插拔：统一接口管理，性能监控与A/B切换保障效果",
              "混合检索：关键词+向量语义+重排序，提高相关性与时效性",
              "多轮对话：对话状态管理与上下文压缩，覆盖真实咨询场景"
            ]}
          />
        </SlideContainer>
      );

    case "arch":
      return (
        <SlideContainer>
          <SectionTitle title="总体技术架构：六层架构与职责" subtitle="职责清晰、松耦合、可扩展" icon={<Layers className="h-6 w-6 text-primary" />} />
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <LayerBox title="应用服务层" desc="智能交互中枢 / 智能内容工厂 / 产业分析等用户可见功能" icon={<Workflow className="h-5 w-5 text-primary" />} />
            <LayerBox title="AI服务层" desc="RAG检索、智能生成、智能分析、智能体编排等核心AI能力" icon={<Cpu className="h-5 w-5 text-primary" />} />
            <LayerBox title="数据处理层" desc="清洗/标准化、OCR、向量化、知识图谱、数据质量治理" icon={<Database className="h-5 w-5 text-primary" />} />
            <LayerBox title="数据接入层" desc="集团数据中台/外部数据/文档等多源接入，实时+批量" icon={<Server className="h-5 w-5 text-primary" />} />
            <LayerBox title="模型层" desc="产权垂直模型、多模型管理、性能监控与优化、热插拔切换" icon={<Cpu className="h-5 w-5 text-primary" />} />
            <LayerBox title="基础设施层" desc="容器化/K8s、对象存储、日志监控、链路追踪与告警" icon={<Wrench className="h-5 w-5 text-primary" />} />
          </div>
        </SlideContainer>
      );

    case "module-ic":
      return (
        <SlideContainer>
          <SectionTitle title="关键模块：智能交互中枢" subtitle="从被动浏览到主动交互" icon={<Workflow className="h-6 w-6 text-primary" />} />
          <BulletList
            items={[
              "语义检索 + 个性化推荐：理解意图，复杂条件自然语言查询",
              "多轮对话：上下文记忆、意图切换，85%+准确率目标",
              "结果可溯源：卡片式展示、出处引用、一键导出与分享",
              "体验优化：响应≤3s，移动端友好，知识持续更新"
            ]}
          />
        </SlideContainer>
      );

    case "module-doc":
      return (
        <SlideContainer>
          <SectionTitle title="关键模块：深度文档理解引擎" subtitle="文档密集型业务的效率引擎" icon={<Database className="h-6 w-6 text-primary" />} />
          <BulletList
            items={[
              "多格式解析：PDF/Word/Excel/图片/扫描件，OCR准确率≥85%",
              "智能分块+结构化抽取：实体/关系/指标/时序/风险点",
              "跨文档问答：准确率≥80%，辅助合规审核与风险识别",
              "可视化人工校正：人机协同保障结果可靠"
            ]}
          />
        </SlideContainer>
      );

    case "module-gen":
      return (
        <SlideContainer>
          <SectionTitle title="关键模块：智能内容生成工厂" subtitle="模板化 + RAG 写作 + 智能图表" icon={<Rocket className="h-6 w-6 text-primary" />} />
          <BulletList
            items={[
              "标准模板库(≥10)：尽调/市场/估值/方案等结构化模板",
              "RAG驱动写作：60秒初稿，结构完整性≥95%",
              "多轮优化：用户反馈驱动重写/补充/重排段落",
              "图文联动：自动图表与说明文字，导出 Word/PDF"
            ]}
          />
        </SlideContainer>
      );

    case "ai-hub":
      return (
        <SlideContainer>
          <SectionTitle title="AI能力中枢与垂直模型" subtitle="平台化、服务化、可复用" icon={<Cpu className="h-6 w-6 text-primary" />} />
          <BulletList
            items={[
              "统一模型管理：多模型集成、热插拔、版本治理与性能监控",
              "产权垂直模型：LoRA轻量微调 + 集成投票提升稳健性",
              "RAG检索引擎：向量检索、重排序，检索准确率≥85%",
              "API服务网关：统一鉴权、限流、计量计费，面向生态开放"
            ]}
          />
        </SlideContainer>
      );

    case "compat":
      return (
        <SlideContainer>
          <SectionTitle title="兼容性与实施保障" subtitle="API优先 + 渐进集成 + 全链路测试" icon={<Server className="h-6 w-6 text-primary" />} />
          <BulletList
            items={[
              "对接现网：与“粤交易”SSO对接、集团数据中台数据互通",
              "API优先：统一接口、协议转换、解耦新旧架构",
              "数据策略：实时(查询) + 批量(分析) + 对账补全",
              "测试验证：联调沙箱、稳定性压力测试、回归测试用例库",
              "灰度发布：小步快跑、风险可控、可回滚机制"
            ]}
          />
        </SlideContainer>
      );

    case "llm-ops":
      return (
        <SlideContainer>
          <SectionTitle title="私有化大模型部署与安全运维" subtitle="等保二级 · 纵深防御 · 可观测性" icon={<Shield className="h-6 w-6 text-primary" />} />
          <BulletList
            items={[
              "部署形态：本地化/容器化/K8s，GPU资源池与弹性伸缩",
              "安全合规：等保二级、TLS传输、AES-256加密、脱敏与审计",
              "可观测性：性能指标、错误率、延迟分布、智能告警",
              "SLA保障：≥99.5%可用性，≥50并发目标与容量压测",
              "运维流程：版本分支、蓝绿/金丝雀、变更与演练、应急预案"
            ]}
          />
        </SlideContainer>
      );

    case "data-prod":
      return (
        <SlideContainer>
          <SectionTitle title="数据产品开发与商业价值（数交所挂牌）" subtitle="产品化方法论 + 合规交易" icon={<LineChart className="h-6 w-6 text-primary" />} />
          <BulletList
            items={[
              "产品类型：产业分析报告、企业画像数据包、投资机会清单等",
              "开发流程：清洗/整合 → 建模/分析 → 产品化封装 → 质检",
              "挂牌路径：产品说明/定价/交易规则，广州数据交易所上架",
              "合规与版权：数据来源合规、敏感信息处理、授权范围约定",
              "商业模式：订阅/按次/授权组合，持续运营与迭代优化"
            ]}
          />
        </SlideContainer>
      );

    case "plan":
      return (
        <SlideContainer>
          <SectionTitle title="实施路径与里程碑（3阶段）" subtitle="快、稳、深：3个月核心价值，1个月完善上线" icon={<Rocket className="h-6 w-6 text-primary" />} />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>P0（核心价值·3个月）</CardTitle>
              </CardHeader>
              <CardContent>
                <BulletList items={["垂直模型初版(≥80%)","智能交互中枢(MVP)","智能报告(2-3模板)","演示与试点反馈"]} />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>P1（能力完善·1个月）</CardTitle>
              </CardHeader>
              <CardContent>
                <BulletList items={["检索≥85%/对话≥85%","模板≥5/图表联动","文档理解引擎","数据接入与质量治理"]} />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>P2（价值深化·持续）</CardTitle>
              </CardHeader>
              <CardContent>
                <BulletList items={["产业分析平台","生态开放与能力输出","数据产品挂牌(广州数交所)","持续优化与运营"]} />
              </CardContent>
            </Card>
          </div>
        </SlideContainer>
      );

    case "innov":
      return (
        <SlideContainer>
          <SectionTitle title="技术创新与差异化优势" subtitle="工程化可落地，行业化更专业" icon={<Layers className="h-6 w-6 text-primary" />} />
          <BulletList
            items={[
              "产权垂直模型：结合行业语料与规则知识，显著提升领域表现",
              "RAG闭环与可溯源：工程化减少幻觉，支撑合规可核验",
              "智能体编排：低门槛编排复杂流程，业务人员可自定流程",
              "知识图谱：实体关系与时序推理，辅助估值与风控",
              "平台化能力：API网关+多租户预留，支撑集团化与生态化"
            ]}
          />
        </SlideContainer>
      );

    case "risk":
      return (
        <SlideContainer>
          <SectionTitle title="风险识别与应对策略" subtitle="预案在前，交付有底" icon={<Lock className="h-6 w-6 text-primary" />} />
          <BulletList
            items={[
              "数据质量：建立数据体检与修复机制，持续监控质量指标",
              "模型漂移：离线评测集+在线监控+回归测试，灰度更新",
              "系统集成复杂度：API契约治理、适配层、联调沙箱",
              "变更管理：蓝绿/金丝雀发布、回滚预案、演练制度化",
              "合规与安全：等保二级测评、敏感数据分类分级与脱敏"
            ]}
          />
        </SlideContainer>
      );

    case "qa":
      return (
        <SlideContainer>
          <SectionTitle title="Q&A 提纲（备选问题与回答思路）" subtitle="针对性、可操作、可度量" icon={<Wrench className="h-6 w-6 text-primary" />} />
          <BulletList
            items={[
              <span key="q1"><strong>如何保障与现有系统兼容？</strong> API优先、身份SSO、数据同步策略、沙箱联调与回归用例库。</span>,
              <span key="q2"><strong>大模型如何私有化与降本？</strong> 开源模型微调(LoRA)+推理优化+弹性伸缩+冷热分层调度。</span>,
              <span key="q3"><strong>如何避免模型幻觉与错误？</strong> RAG可溯源、答案引用、人工复核闭环、质检规则。</span>,
              <span key="q4"><strong>数据产品如何合规与变现？</strong> 合规数据来源、脱敏授权、产品化说明与定价、数交所挂牌运营。</span>,
              <span key="q5"><strong>如何量化成效？</strong> 响应时延、对话准确率、报告用时、竞价率、转化率、人效与SLA。</span>
            ]}
          />
        </SlideContainer>
      );

    case "end":
      return (
        <SlideContainer>
          <div className="flex h-[70vh] flex-col items-center justify-center text-center">
            <h2 className="text-4xl font-bold tracking-tight">感谢评审 · 欢迎交流</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">我们以业务价值为牵引，以工程化方法保证落地，以开放架构支撑长期演进。</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              <Badge variant="secondary">RAG优先</Badge>
              <Badge variant="secondary">产权垂直模型</Badge>
              <Badge variant="secondary">等保二级</Badge>
              <Badge variant="secondary">数交所数据产品</Badge>
            </div>
          </div>
        </SlideContainer>
      );

    default:
      return (
        <SlideContainer>
          <div className="text-center text-muted-foreground">正在加载...</div>
        </SlideContainer>
      );
  }
}


