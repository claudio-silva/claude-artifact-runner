import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Users, Briefcase, TrendingUp, Award, Heart, Target } from 'lucide-react';

const PPTPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // 封面
    {
      type: 'cover',
      content: (
        <div className="h-full bg-gradient-to-br from-red-600 via-red-700 to-red-900 text-white flex flex-col items-center justify-center p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10 text-center">
            <h1 className="text-6xl font-bold mb-8">2025年</h1>
            <h2 className="text-5xl font-bold mb-12 leading-tight">
              中国通服广东公司<br/>青年思想动态调研报告
            </h2>
            <div className="mt-16 text-xl">
              <p className="mb-2">中国通服广东公司团委</p>
              <p>2025年8月</p>
            </div>
          </div>
        </div>
      )
    },
    
    // 目录
    {
      type: 'toc',
      content: (
        <div className="h-full bg-gradient-to-br from-gray-50 to-gray-100 p-12">
          <h2 className="text-4xl font-bold text-red-700 mb-12 border-b-4 border-red-600 pb-4">目录</h2>
          <div className="grid grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border-l-4 border-red-600">
              <div className="text-6xl font-bold text-red-600 mb-4">01</div>
              <h3 className="text-2xl font-bold text-gray-800">调研概况</h3>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border-l-4 border-red-600">
              <div className="text-6xl font-bold text-red-600 mb-4">02</div>
              <h3 className="text-2xl font-bold text-gray-800">主要调研发现</h3>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border-l-4 border-red-600">
              <div className="text-6xl font-bold text-red-600 mb-4">03</div>
              <h3 className="text-2xl font-bold text-gray-800">结论与建议</h3>
            </div>
          </div>
        </div>
      )
    },

    // 调研概况
    {
      type: 'overview',
      content: (
        <div className="h-full bg-gradient-to-br from-white to-gray-50 p-12">
          <h2 className="text-4xl font-bold text-red-700 mb-8 border-b-4 border-red-600 pb-4 inline-block">调研概况</h2>
          <div className="bg-blue-50 p-6 rounded-lg mb-8 border-l-4 border-blue-600">
            <p className="text-lg text-gray-700 leading-relaxed">
              本次调研旨在全面了解中国通服广东公司青年员工的思想动态、工作状态、成长需求，为公司优化青年人才培养机制提供依据。
            </p>
            <p className="text-lg text-gray-700 mt-4 font-semibold">
              调研覆盖15个专业公司，共回收有效样本 <span className="text-red-600 text-2xl">2,214份</span>，参与率 <span className="text-red-600 text-2xl">49%</span>
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center">
                <Users className="mr-2" /> 年龄结构
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">30岁及以下</span>
                    <span className="text-red-600 font-bold">83.45%</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-3">
                    <div className="bg-red-600 h-3 rounded-full" style={{width: '83.45%'}}></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-red-50 p-3 rounded">
                    <div className="text-gray-600">25岁及以下</div>
                    <div className="text-2xl font-bold text-red-600">34.02%</div>
                  </div>
                  <div className="bg-red-50 p-3 rounded">
                    <div className="text-gray-600">26-30岁</div>
                    <div className="text-2xl font-bold text-red-600">49.43%</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center">
                <Briefcase className="mr-2" /> 成长阶段
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-red-50 rounded">
                  <span>入门期（1-3年）</span>
                  <span className="text-2xl font-bold text-red-600">45.74%</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-orange-50 rounded">
                  <span>成长期（3-5年）</span>
                  <span className="text-2xl font-bold text-orange-600">27.3%</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded">
                  <span>成熟期（5-7年）</span>
                  <span className="text-2xl font-bold text-blue-600">10.41%</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <span>影响期（7年以上）</span>
                  <span className="text-2xl font-bold text-gray-600">16.56%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // 调研概况-2
    {
      type: 'overview2',
      content: (
        <div className="h-full bg-gradient-to-br from-white to-gray-50 p-12">
          <h2 className="text-4xl font-bold text-red-700 mb-8 border-b-4 border-red-600 pb-4 inline-block">调研概况（续）</h2>
          
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-bold text-red-600 mb-4">政治面貌</h3>
              <div className="space-y-3">
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <div className="text-3xl font-bold text-red-600">28.64%</div>
                  <div className="text-sm text-gray-600 mt-1">共青团员</div>
                </div>
                <div className="text-sm space-y-2">
                  <div className="flex justify-between">
                    <span>中共党员</span>
                    <span className="font-bold">26.29%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>群众</span>
                    <span className="font-bold">44.9%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-bold text-red-600 mb-4">岗位分布</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                  <span className="text-sm">生产交付</span>
                  <div className="flex items-center">
                    <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                      <div className="bg-red-600 h-2 rounded-full" style={{width: '50.81%'}}></div>
                    </div>
                    <span className="font-bold text-red-600">50.81%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                  <span className="text-sm">职能支撑</span>
                  <div className="flex items-center">
                    <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                      <div className="bg-orange-500 h-2 rounded-full" style={{width: '32.02%'}}></div>
                    </div>
                    <span className="font-bold text-orange-600">32.02%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                  <span className="text-sm">技术研发</span>
                  <div className="flex items-center">
                    <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{width: '10.25%'}}></div>
                    </div>
                    <span className="font-bold text-blue-600">10.25%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                  <span className="text-sm">市场营销</span>
                  <div className="flex items-center">
                    <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '6.91%'}}></div>
                    </div>
                    <span className="font-bold text-green-600">6.91%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-bold text-red-600 mb-4">岗位级别</h3>
              <div className="relative h-48">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <circle cx="100" cy="100" r="80" fill="none" stroke="#fee2e2" strokeWidth="40"/>
                  <circle cx="100" cy="100" r="80" fill="none" stroke="#dc2626" strokeWidth="40"
                    strokeDasharray={`${67.21 * 5.03} ${100 * 5.03}`}
                    transform="rotate(-90 100 100)"/>
                  <text x="100" y="95" textAnchor="middle" className="text-2xl font-bold fill-red-600">67.21%</text>
                  <text x="100" y="115" textAnchor="middle" className="text-xs fill-gray-600">十岗及以下</text>
                </svg>
              </div>
              <div className="text-xs space-y-1 mt-2">
                <div className="flex justify-between"><span>11-12级</span><span className="font-bold">19.43%</span></div>
                <div className="flex justify-between"><span>13级及以上</span><span className="font-bold">13.36%</span></div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-red-50 to-orange-50 p-4 rounded-lg border-l-4 border-red-600">
            <p className="text-lg font-semibold text-gray-800">
              <span className="text-red-600">核心特征：</span>
              青年群体占比高（83.45%在30岁及以下），入门期和成长期员工为主（73.04%），基层员工占比大（67.21%），本科学历为主（79.27%）
            </p>
          </div>
        </div>
      )
    },

    // 主要发现1-青年状态
    {
      type: 'findings1',
      content: (
        <div className="h-full bg-gradient-to-br from-white to-gray-50 p-12">
          <h2 className="text-4xl font-bold text-red-700 mb-8 border-b-4 border-red-600 pb-4 inline-block">主要调研发现（一）：青年状态</h2>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-green-600 mb-4 flex items-center">
                <TrendingUp className="mr-2" /> 积极向上的工作状态
              </h3>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">96.69%</div>
                  <div className="text-sm text-gray-600">青年员工工作状态积极</div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-3 bg-gradient-to-br from-red-50 to-red-100 rounded">
                    <div className="text-2xl font-bold text-red-600">32.54%</div>
                    <div className="text-xs text-gray-600 mt-1">积极投入型</div>
                    <div className="text-xs text-gray-500">目标清晰主动创新</div>
                  </div>
                  <div className="text-center p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded">
                    <div className="text-2xl font-bold text-blue-600">44.37%</div>
                    <div className="text-xs text-gray-600 mt-1">稳健尽责型</div>
                    <div className="text-xs text-gray-500">按计划完成任务</div>
                  </div>
                  <div className="text-center p-3 bg-gradient-to-br from-orange-50 to-orange-100 rounded">
                    <div className="text-2xl font-bold text-orange-600">19.43%</div>
                    <div className="text-xs text-gray-600 mt-1">压力应对型</div>
                    <div className="text-xs text-gray-500">需投入较多精力</div>
                  </div>
                  <div className="text-center p-3 bg-gradient-to-br from-gray-50 to-gray-100 rounded">
                    <div className="text-2xl font-bold text-gray-600">3.69%</div>
                    <div className="text-xs text-gray-600 mt-1">倦怠观望型</div>
                    <div className="text-xs text-gray-500">需要关注</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-blue-600 mb-4 flex items-center">
                <Award className="mr-2" /> 才能发挥情况
              </h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">86.97%</div>
                  <div className="text-sm text-gray-600">认为才能得到较好发挥</div>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">基本发挥</span>
                      <span className="font-bold text-blue-600">52.54%</span>
                    </div>
                    <div className="bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '52.54%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">充分发挥</span>
                      <span className="font-bold text-green-600">34.43%</span>
                    </div>
                    <div className="bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{width: '34.43%'}}></div>
                    </div>
                  </div>
                </div>
                <div className="bg-red-50 p-3 rounded border-l-4 border-red-600">
                  <div className="text-sm font-semibold text-red-700 mb-1">需要关注：13%存在问题</div>
                  <div className="text-xs text-gray-600 space-y-1">
                    <div>• 8.28% 因岗位与专长不匹配而难以发挥</div>
                    <div>• 4.75% 不清楚公司青年脱颖而出的机制</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg border-l-4 border-yellow-600">
            <p className="text-lg font-semibold text-gray-800">
              <span className="text-yellow-700">压力情况：</span>
              99.18%青年员工存在不同程度压力，其中62.38%认为压力可接受。主要压力来源：工作压力(66.39%)、工作负荷(59.02%)、薪资待遇(51.07%)
            </p>
          </div>
        </div>
      )
    },

    // 主要发现2-职业发展
    {
      type: 'findings2',
      content: (
        <div className="h-full bg-gradient-to-br from-white to-gray-50 p-10 overflow-auto">
          <h2 className="text-3xl font-bold text-red-700 mb-6 border-b-4 border-red-600 pb-3 inline-block">主要调研发现（二）：职业发展与需求</h2>
          
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-5 rounded-xl shadow-lg">
              <h3 className="text-lg font-bold text-red-600 mb-3">职业发展主要问题</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-red-50 rounded">
                  <span className="text-sm">缺少职业发展规划</span>
                  <span className="text-xl font-bold text-red-600">70.14%</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-orange-50 rounded">
                  <span className="text-sm">家庭问题影响工作</span>
                  <span className="text-lg font-bold text-orange-600">23.98%</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded">
                  <span className="text-sm">业务能力不匹配</span>
                  <span className="text-lg font-bold text-blue-600">21.41%</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-lg">
              <h3 className="text-lg font-bold text-green-600 mb-3">最有效的激励方式</h3>
              <div className="space-y-2">
                <div className="bg-gradient-to-r from-green-50 to-green-100 p-3 rounded-lg border-l-4 border-green-600">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">增加收入</span>
                    <span className="text-2xl font-bold text-green-600">94.49%</span>
                  </div>
                </div>
                <div className="bg-blue-50 p-2 rounded flex justify-between">
                  <span className="text-sm">升岗</span>
                  <span className="font-bold text-blue-600">62.33%</span>
                </div>
                <div className="bg-purple-50 p-2 rounded flex justify-between">
                  <span className="text-sm">学习和培训机会</span>
                  <span className="font-bold text-purple-600">43.27%</span>
                </div>
                <div className="bg-orange-50 p-2 rounded flex justify-between">
                  <span className="text-sm">领导重视与关心</span>
                  <span className="font-bold text-orange-600">32.11%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-xl shadow-lg">
              <h3 className="text-lg font-bold text-purple-600 mb-3">团委工作期望</h3>
              <div className="space-y-2">
                <div className="p-3 bg-purple-50 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-sm">提升业务能力</span>
                    <span className="text-xl font-bold text-purple-600">66.08%</span>
                  </div>
                  <div className="bg-purple-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{width: '66.08%'}}></div>
                  </div>
                </div>
                <div className="p-2 bg-blue-50 rounded flex justify-between items-center">
                  <span className="text-sm">组织文体活动</span>
                  <span className="font-bold text-blue-600">60.39%</span>
                </div>
                <div className="p-2 bg-green-50 rounded flex justify-between items-center">
                  <span className="text-sm">推优入党</span>
                  <span className="font-bold text-green-600">38.71%</span>
                </div>
                <div className="p-2 bg-yellow-50 rounded flex justify-between items-center">
                  <span className="text-sm">维护权益</span>
                  <span className="font-bold text-yellow-600">34.19%</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-lg">
              <h3 className="text-lg font-bold text-orange-600 mb-3">学习方式偏好</h3>
              <div className="space-y-3">
                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-3 rounded-lg border-l-4 border-orange-600">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-sm">项目实战锻炼</div>
                      <div className="text-xs text-gray-600 mt-1">参与实战项目，积累实践经验</div>
                    </div>
                    <span className="text-2xl font-bold text-orange-600">53.03%</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-blue-50 p-2 rounded text-center">
                    <div className="text-lg font-bold text-blue-600">38.93%</div>
                    <div className="text-xs text-gray-600">专题讲座</div>
                  </div>
                  <div className="bg-green-50 p-2 rounded text-center">
                    <div className="text-lg font-bold text-green-600">33.52%</div>
                    <div className="text-xs text-gray-600">跨部门轮岗</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-red-50 to-pink-50 p-4 rounded-lg border-l-4 border-red-600">
            <div className="flex items-start">
              <Target className="text-red-600 mr-3 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-red-700 mb-1">关键发现</p>
                <p className="text-sm text-gray-700">青年员工高度重视职业发展规划（70.14%），对收入和晋升有强烈期望，更青睐实战型学习方式，期待团委在能力提升和职业发展方面提供更多支持。</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // 主要发现3-战略认知
    {
      type: 'findings3',
      content: (
        <div className="h-full bg-gradient-to-br from-white to-gray-50 p-12">
          <h2 className="text-4xl font-bold text-red-700 mb-8 border-b-4 border-red-600 pb-4 inline-block">主要调研发现（三）：战略认知与改革适应</h2>
          
          <div className="grid grid-cols-2 gap-8 mb-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-blue-600 mb-4">企业战略认知</h3>
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">71.72%</div>
                  <div className="text-sm text-gray-600">对公司战略有一定了解</div>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                  <span>非常了解战略</span>
                  <span className="font-bold text-green-600">18.52%</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-blue-50 rounded">
                  <span>比较了解战略</span>
                  <span className="font-bold text-blue-600">53.20%</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span>不太了解/完全不了解</span>
                  <span className="font-bold text-gray-600">4.92%</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-orange-600 mb-4">对"4+1"改革的适应挑战</h3>
              <div className="space-y-3">
                <div className="bg-red-50 p-3 rounded-lg border-l-4 border-red-600">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold">实践经验欠缺</span>
                    <span className="text-xl font-bold text-red-600">56.15%</span>
                  </div>
                </div>
                <div className="bg-orange-50 p-3 rounded-lg border-l-4 border-orange-600">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold">专业能力适配不足</span>
                    <span className="text-xl font-bold text-orange-600">46.89%</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-blue-50 p-2 rounded text-center">
                    <div className="text-lg font-bold text-blue-600">30.49%</div>
                    <div className="text-xs text-gray-600">培训资源不足</div>
                  </div>
                  <div className="bg-purple-50 p-2 rounded text-center">
                    <div className="text-lg font-bold text-purple-600">30%</div>
                    <div className="text-xs text-gray-600">跨部门协作机制不清晰</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-green-600 mb-4 flex items-center">
              <TrendingUp className="mr-2" /> 改革推进建议
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">60%</div>
                <div className="text-sm text-gray-700">明确激励政策，对改革攻坚任务给予倾斜</div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">49.67%</div>
                <div className="text-sm text-gray-700">加强专项培训及实操演练</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">48.36%</div>
                <div className="text-sm text-gray-700">加强改革思想引领，消除认知误区</div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg border-l-4 border-yellow-600">
            <p className="text-lg font-semibold text-gray-800">
              <span className="text-yellow-700">核心发现：</span>
              青年对企业战略有较高认知度，但在改革执行层面仍需加强实践指导、专业培训和激励机制配套，帮助青年更好地适应和参与改革。
            </p>
          </div>
        </div>
      )
    },

    // 结论与建议
    {
      type: 'conclusion',
      content: (
        <div className="h-full bg-gradient-to-br from-white to-gray-50 p-12">
          <h2 className="text-4xl font-bold text-red-700 mb-8 border-b-4 border-red-600 pb-4 inline-block">结论与建议</h2>
          
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl shadow-lg border-l-4 border-red-600">
              <h3 className="text-2xl font-bold text-red-700 mb-4">总体结论</h3>
              <div className="space-y-3 text-gray-700">
                <p className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>青年员工整体呈现<strong className="text-red-600">积极向上、重视成长、关注实践</strong>的特点</span>
                </p>
                <p className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>对公司战略与改革有较高认知度</span>
                </p>
                <p className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>在<strong className="text-orange-600">岗位适配、职业规划、导师机制、改革落地支持</strong>等方面仍存在需求</span>
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-lg border-l-4 border-blue-600">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">关键特征</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white p-3 rounded-lg text-center shadow">
                  <div className="text-2xl font-bold text-red-600">积极向上</div>
                  <div className="text-xs text-gray-600 mt-1">96.69%工作状态积极</div>
                </div>
                <div className="bg-white p-3 rounded-lg text-center shadow">
                  <div className="text-2xl font-bold text-green-600">重视成长</div>
                  <div className="text-xs text-gray-600 mt-1">70.14%需要发展规划</div>
                </div>
                <div className="bg-white p-3 rounded-lg text-center shadow">
                  <div className="text-2xl font-bold text-blue-600">关注实践</div>
                  <div className="text-xs text-gray-600 mt-1">53.03%偏好实战学习</div>
                </div>
                <div className="bg-white p-3 rounded-lg text-center shadow">
                  <div className="text-2xl font-bold text-purple-600">期待支持</div>
                  <div className="text-xs text-gray-600 mt-1">多方面需要保障</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-green-700 mb-6 flex items-center">
              <Target className="mr-2" /> 重点工作建议
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-red-50 p-4 rounded-lg border-t-4 border-red-600">
                <div className="text-lg font-bold text-red-700 mb-2">1. 强化思想引领</div>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 深化战略宣贯与解读</li>
                  <li>• 讲好青年奋斗故事</li>
                  <li>• 青马工程扩面提质</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border-t-4 border-blue-600">
                <div className="text-lg font-bold text-blue-700 mb-2">2. 搭建成长平台</div>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 完善导师配置机制</li>
                  <li>• 强化项目实战锻炼</li>
                  <li>• 优化职业发展通道</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-t-4 border-green-600">
                <div className="text-lg font-bold text-green-700 mb-2">3. 激发创新活力</div>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 深化青年创新创效</li>
                  <li>• 组建青年突击队</li>
                  <li>• 完善激励机制</li>
                </ul>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border-t-4 border-orange-600">
                <div className="text-lg font-bold text-orange-700 mb-2">4. 优化改革支持</div>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 加强专项培训</li>
                  <li>• 提供实操指导</li>
                  <li>• 明确政策导向</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border-t-4 border-purple-600">
                <div className="text-lg font-bold text-purple-700 mb-2">5. 关心关爱青年</div>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 开展压力疏导</li>
                  <li>• 解决急难愁盼</li>
                  <li>• 丰富文体活动</li>
                </ul>
              </div>
              <div className="bg-pink-50 p-4 rounded-lg border-t-4 border-pink-600">
                <div className="text-lg font-bold text-pink-700 mb-2">6. 加强团的建设</div>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 强化基层组织</li>
                  <li>• 提升团干能力</li>
                  <li>• 创新工作方式</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // 致谢页
    {
      type: 'thanks',
      content: (
        <div className="h-full bg-gradient-to-br from-red-600 via-red-700 to-red-900 text-white flex flex-col items-center justify-center p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10 text-center">
            <Heart className="w-24 h-24 mx-auto mb-8 text-red-200" />
            <h1 className="text-6xl font-bold mb-8">感谢您的聆听</h1>
            <div className="text-2xl mb-12 space-y-4">
              <p>倾听青年心声诉求</p>
              <p>解决青年急难愁盼</p>
            </div>
            <div className="mt-16 text-xl opacity-80">
              <p>中国通服广东公司团委</p>
              <p className="mt-2">2025年8月</p>
            </div>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full h-screen bg-gray-900 flex flex-col">
      {/* 幻灯片内容区域 */}
      <div className="flex-1 relative bg-white">
        {slides[currentSlide].content}
      </div>

      {/* 底部导航栏 */}
      <div className="bg-gray-800 text-white px-6 py-4 flex items-center justify-between">
        <button
          onClick={prevSlide}
          className="flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          上一页
        </button>

        <div className="flex items-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-red-600 w-8'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-400">
            {currentSlide + 1} / {slides.length}
          </span>
          <button
            onClick={nextSlide}
            className="flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
          >
            下一页
            <ChevronRight className="w-5 h-5 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PPTPresentation;