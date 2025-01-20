import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Share2, MessageCircle, ChevronLeft, Printer, Info, Book, ClipboardCheck, BrainCircuit } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Keyword {
  term: string;
  definition: string;
}

const ArticleDetail = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [activeKeyword, setActiveKeyword] = useState<Keyword | null>(null);
  
  const article = {
    title: '企业合规风险管理框架',
    source: '北京数字认证股份有限公司',
    date: '2022-12-01',
    content: '合规科技的概念最早从监管科技演化而来。2015年，英国金融行为监管局（FCA）首次对监管科技（RegTech）进行概念界定，将监管科技定义为："运用新技术，促进金融机构更有效地达成监管要求"，这实际上是从合规科技的角度对监管科技的内涵进行界定...',
    keywords: [
      {
        term: '合规科技',
        definition: '利用数字化手段有效落实各方面合规要求，以及利用平台及数据等方式实现监管端与企业端互联互通的一种新型技术手段。'
      },
      {
        term: 'RegTech',
        definition: '监管科技(Regulatory Technology)的简称，指运用新技术促进金融机构更有效地达成监管要求的技术创新。'
      },
      {
        term: 'FCA',
        definition: '英国金融行为监管局(Financial Conduct Authority)，负责监管英国的金融服务业。'
      }
    ],
    keyPoints: [
      '合规科技源自监管科技，最早由FCA在2015年提出概念',
      '合规科技主要解决企业在数字化转型过程中的合规问题',
      '合规科技通过技术手段提升企业合规管理效率',
      '合规科技有助于企业降低合规成本、防范合规风险'
    ],
    insights: [
      {
        title: '政策趋势分析',
        content: '从监管政策演变来看，合规科技正逐步成为企业数字化转型的重要支撑。'
      },
      {
        title: '技术发展趋势',
        content: '人工智能、大数据、区块链等新技术的应用，正在重塑企业合规管理模式。'
      },
      {
        title: '行业应用前景',
        content: '金融、医疗、制造等重点行业对合规科技的需求持续增长。'
      }
    ],
    quiz: [
      {
        question: '合规科技的概念最早是由哪个机构提出的？',
        options: ['美国证券交易委员会', '英国金融行为监管局', '中国人民银行', '欧洲央行'],
        answer: 1
      },
      {
        question: '合规科技的主要目的是什么？',
        options: ['提升营收', '降低成本', '满足监管要求', '扩大市场'],
        answer: 2
      }
    ]
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-3 gap-6">
        {/* 主要内容区域 */}
        <div className="col-span-2">
          <Button variant="ghost" className="mb-4">
            <ChevronLeft className="mr-2 h-4 w-4" /> 返回列表
          </Button>
          
          <Card className="mb-6">
            <CardHeader>
              <h1 className="text-2xl font-bold">{article.title}</h1>
              <div className="flex items-center text-sm text-gray-500 space-x-4">
                <span>来源: {article.source}</span>
                <span>发布时间: {article.date}</span>
              </div>
            </CardHeader>

            <CardContent>
              <Tabs defaultValue="content">
                <TabsList className="mb-4">
                  <TabsTrigger value="content">
                    <Book className="mr-2 h-4 w-4" />
                    原文
                  </TabsTrigger>
                  <TabsTrigger value="analysis">
                    <ClipboardCheck className="mr-2 h-4 w-4" />
                    要点解析
                  </TabsTrigger>
                  <TabsTrigger value="learning">
                    <BrainCircuit className="mr-2 h-4 w-4" />
                    互动学习
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="content">
                  <div className="prose prose-blue max-w-none">
                    <p className="leading-7 text-gray-700">
                      {article.content.split(' ').map((word, index) => {
                        const keyword = article.keywords.find(k => word.includes(k.term));
                        if (keyword) {
                          return (
                            <span
                              key={index}
                              className="text-blue-600 cursor-pointer hover:bg-blue-50 px-0.5 rounded"
                              onClick={() => setActiveKeyword(keyword)}
                            >
                              {word}
                            </span>
                          );
                        }
                        return word + ' ';
                      })}
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="analysis">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">核心要点</h3>
                      <ul className="space-y-2">
                        {article.keyPoints.map((point, index) => (
                          <li key={index} className="flex items-start">
                            <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mr-2">
                              {index + 1}
                            </span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-3">深度解读</h3>
                      <div className="space-y-4">
                        {article.insights.map((insight, index) => (
                          <Card key={index}>
                            <CardContent className="p-4">
                              <h4 className="font-semibold text-blue-600">{insight.title}</h4>
                              <p className="mt-2 text-gray-600">{insight.content}</p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="learning">
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold">知识自测</h3>
                    <div className="space-y-6">
                      {article.quiz.map((q, index) => (
                        <div key={index} className="space-y-3">
                          <p className="font-medium">{index + 1}. {q.question}</p>
                          <div className="grid grid-cols-2 gap-3">
                            {q.options.map((option, oIndex) => (
                              <Button
                                key={oIndex}
                                variant="outline"
                                className="justify-start"
                              >
                                {String.fromCharCode(65 + oIndex)}. {option}
                              </Button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              {activeKeyword && (
                <Alert className="mt-4">
                  <Info className="h-4 w-4" />
                  <AlertDescription>
                    <span className="font-semibold">{activeKeyword.term}：</span>
                    {activeKeyword.definition}
                  </AlertDescription>
                </Alert>
              )}

              <div className="flex justify-between items-center py-4 border-t mt-6">
                <div className="flex space-x-4">
                  <Button 
                    variant="ghost" 
                    onClick={() => setIsLiked(!isLiked)}
                    className={isLiked ? 'text-red-500' : ''}
                  >
                    <Heart className="mr-2 h-4 w-4" fill={isLiked ? 'currentColor' : 'none'} />
                    点赞
                  </Button>
                  <Button variant="ghost">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    评论
                  </Button>
                  <Button variant="ghost">
                    <Share2 className="mr-2 h-4 w-4" />
                    分享
                  </Button>
                  <Button variant="ghost">
                    <Printer className="mr-2 h-4 w-4" />
                    打印
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 侧边栏 */}
        <div className="col-span-1">
          <Card className="sticky top-6">
            <CardContent className="p-4">
              <h3 className="font-semibold mb-3">文章导航</h3>
              <ul className="space-y-2 text-sm">
                <li className="text-blue-600 cursor-pointer">1. 合规科技的定义</li>
                <li className="cursor-pointer hover:text-blue-600">2. 发展历程</li>
                <li className="cursor-pointer hover:text-blue-600">3. 应用场景</li>
                <li className="cursor-pointer hover:text-blue-600">4. 未来趋势</li>
              </ul>
              
              <h3 className="font-semibold mt-6 mb-3">关键词</h3>
              <div className="flex flex-wrap gap-2">
                {article.keywords.map((keyword) => (
                  <span 
                    key={keyword.term}
                    className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-sm cursor-pointer hover:bg-blue-100"
                    onClick={() => setActiveKeyword(keyword)}
                  >
                    {keyword.term}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;