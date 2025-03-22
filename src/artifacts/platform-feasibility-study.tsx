import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import {
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { Calendar, Users, Building2, Target, Lightbulb, ArrowUpRight } from 'lucide-react';

const investmentData = [
  { name: '直接研发人员费用', value: 130 },
  { name: '委托外部开发费用', value: 253 },
];

const progressData = [
  { phase: '需求分析', progress: 100, date: '2024.3-2024.5' },
  { phase: '方案设计', progress: 0, date: '2024.5-2024.12' },
  { phase: '开发实施', progress: 0, date: '2025.1-2025.6' },
  { phase: '系统测试', progress: 0, date: '2025.7-2025.9' },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const PlatformFeasibilityStudy: React.FC = () => {
  const [selectedTab, setSelectedTab] = React.useState('overview');

  return (
    <div className="container mx-auto py-8 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">
              南方联合产权交易中心智能服务平台
            </h1>
            <p className="text-gray-500">可行性研究报告</p>
          </div>
          <Badge variant="outline" className="text-lg py-1">
            进行中
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                项目周期
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold">18个月</p>
              <p className="text-gray-500">2024.3 - 2025.9</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                项目团队
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold">10+</p>
              <p className="text-gray-500">核心成员</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5" />
                总投资
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold">383万元</p>
              <p className="text-gray-500">研发投入</p>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              项目概述
            </CardTitle>
            <CardDescription>
              基于DeepSeek技术打造的新一代智能服务平台
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-gray-700">
                本项目旨在构建基于DeepSeek技术的智能服务平台，提供AI智能搜索、智能报告撰写、产业数据中心等核心功能，
                助力南方产权在数字化转型中走在行业前列。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-blue-500" />
                  <span>智能化升级</span>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowUpRight className="h-5 w-5 text-green-500" />
                  <span>效率提升</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-purple-500" />
                  <span>协同增强</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>项目进度</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {progressData.map((phase) => (
                <div key={phase.phase} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">{phase.phase}</p>
                      <p className="text-sm text-gray-500">{phase.date}</p>
                    </div>
                    <span className="text-sm font-medium">{phase.progress}%</span>
                  </div>
                  <Progress value={phase.progress} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">项目概览</TabsTrigger>
            <TabsTrigger value="requirements">需求分析</TabsTrigger>
            <TabsTrigger value="implementation">建设方案</TabsTrigger>
            <TabsTrigger value="benefits">效益分析</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>项目关键信息</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px]">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="background">
                      <AccordionTrigger>项目背景</AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>响应公司"十四五"规划数字化转型要求</li>
                          <li>把握产权市场数字化变革的战略机遇</li>
                          <li>落实国家战略部署，服务高质量发展</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="objectives">
                      <AccordionTrigger>建设目标</AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>协助内部人员，提升交易服务效率</li>
                          <li>提供智能化服务支撑，增强服务体验感与客户黏性</li>
                          <li>建设内部学研平台</li>
                          <li>实现与集团"粤交易"互联互通</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="schedule">
                      <AccordionTrigger>实施进度</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          <p>项目周期：2024年3月至2025年9月</p>
                          <p>主要阶段：</p>
                          <ul className="list-disc pl-6 space-y-1">
                            <li>需求分析与市场调研：2024.3-2024.5</li>
                            <li>方案设计与论证：2024.5-2024.12</li>
                            <li>开发实施：2025.1-2025.6</li>
                            <li>系统测试与优化：2025.7-2025.9</li>
                          </ul>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="requirements">
            <Card>
              <CardHeader>
                <CardTitle>需求分析</CardTitle>
                <CardDescription>
                  全面分析项目的业务需求和功能需求
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px]">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="business">
                      <AccordionTrigger>业务需求</AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>信息获取与分析优化</li>
                          <li>文档处理效率提升</li>
                          <li>客户服务与营销提升</li>
                          <li>产业分析与决策支持</li>
                          <li>"百千万工程"招商引资服务</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="functional">
                      <AccordionTrigger>功能需求</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold flex items-center gap-2">
                              <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
                              智能投顾
                            </h4>
                            <ul className="list-disc pl-6 mt-2">
                              <li>AI智能搜索</li>
                              <li>智能报告撰写</li>
                            </ul>
                          </div>
                          <Separator />
                          <div>
                            <h4 className="font-semibold flex items-center gap-2">
                              <span className="h-2 w-2 bg-green-500 rounded-full"></span>
                              产业数据中心
                            </h4>
                            <ul className="list-disc pl-6 mt-2">
                              <li>产业数据展示</li>
                              <li>企业洞察</li>
                            </ul>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="implementation">
            <Card>
              <CardHeader>
                <CardTitle>建设方案</CardTitle>
                <CardDescription>
                  基于DeepSeek技术的系统架构设计
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px]">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="architecture">
                      <AccordionTrigger>系统架构</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4">
                          <p>采用多层架构设计：</p>
                          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                            {['应用层', '服务层', '框架层', '模型层', '数据层'].map((layer, index) => (
                              <div key={layer} className="p-4 bg-gray-50 rounded-lg text-center">
                                <p className="font-medium">{layer}</p>
                                <p className="text-sm text-gray-500">Layer {index + 1}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="technology">
                      <AccordionTrigger>技术路线</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4">
                          <ul className="list-disc pl-6 space-y-2">
                            <li>基于DeepSeek开源技术体系</li>
                            <li>采用混合专家模型(MoE)架构</li>
                            <li>使用多头潜在注意力机制(MLA)</li>
                            <li>支持API调用、私有化部署和Dify平台集成</li>
                          </ul>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                            <Card>
                              <CardHeader>
                                <CardTitle className="text-sm">API调用</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <p className="text-xs text-gray-500">快速集成</p>
                              </CardContent>
                            </Card>
                            <Card>
                              <CardHeader>
                                <CardTitle className="text-sm">私有化部署</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <p className="text-xs text-gray-500">数据安全</p>
                              </CardContent>
                            </Card>
                            <Card>
                              <CardHeader>
                                <CardTitle className="text-sm">Dify集成</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <p className="text-xs text-gray-500">便捷开发</p>
                              </CardContent>
                            </Card>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="benefits">
            <Card>
              <CardHeader>
                <CardTitle>效益分析</CardTitle>
                <CardDescription>
                  项目预期带来的经济效益和社会效益
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px]">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="economic">
                      <AccordionTrigger>经济效益</AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>提升运营效率和决策质量</li>
                          <li>提升业务质量和服务水平</li>
                          <li>加速人才培养，激发创新活力</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="social">
                      <AccordionTrigger>社会效益</AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>助力国资国企改革，优化国有资本布局</li>
                          <li>促进产融结合，服务实体经济发展</li>
                          <li>推动行业标准化，引领产权交易市场规范发展</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>投资构成</CardTitle>
              <CardDescription>项目投资分布情况</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={investmentData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}万元`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {investmentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>项目团队</CardTitle>
              <CardDescription>核心成员构成</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">项目负责人</p>
                    <p className="text-sm text-gray-500">统筹指导系统整体建设</p>
                  </div>
                  <Badge>1人</Badge>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">技术团队</p>
                    <p className="text-sm text-gray-500">系统开发与实施</p>
                  </div>
                  <Badge>5人</Badge>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">业务团队</p>
                    <p className="text-sm text-gray-500">需求分析与验证</p>
                  </div>
                  <Badge>4人</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  );
};

export default PlatformFeasibilityStudy; 