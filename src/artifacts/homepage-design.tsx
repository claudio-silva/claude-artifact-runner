import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Camera } from 'lucide-react';

// 模拟API数据获取函数
const fetchHomeData = () => {
  // 这里应该是真实的API调用
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        announcements: [
          { id: 1, title: '系统维护通知', content: '系统将于2025-03-25进行维护升级', date: '2025-03-20' },
          { id: 2, title: '新功能发布', content: '文章管理功能现已上线', date: '2025-03-15' },
        ],
        recentProblems: [
          { id: 'HOJ-1001', title: '两数之和', difficulty: 0, tags: ['数组', '哈希表'], gmtModified: '2025-03-18' },
          { id: 'HOJ-1002', title: '三数之和', difficulty: 1, tags: ['数组', '双指针'], gmtModified: '2025-03-17' },
          { id: 'HOJ-1003', title: '最长回文子串', difficulty: 1, tags: ['字符串', '动态规划'], gmtModified: '2025-03-16' },
          { id: 'HOJ-1004', title: '合并K个排序链表', difficulty: 2, tags: ['链表', '分治', '堆'], gmtModified: '2025-03-15' },
        ],
        contests: [
          { id: 1, title: '每周算法挑战赛', startTime: '2025-03-25 14:00:00', endTime: '2025-03-25 17:00:00', type: 0, auth: 0, status: 0, count: 120 },
          { id: 2, title: '春季编程大赛', startTime: '2025-04-01 09:00:00', endTime: '2025-04-01 16:00:00', type: 1, auth: 1, status: -1, count: 256 },
        ],
        acRankList: [
          { username: 'user1', avatar: null, titleName: '王者', titleColor: '#FF5722', uid: '101', ac: 256 },
          { username: 'user2', avatar: null, titleName: '大师', titleColor: '#2196F3', uid: '102', ac: 218 },
          { username: 'user3', avatar: null, titleName: '钻石', titleColor: '#9C27B0', uid: '103', ac: 187 },
          { username: 'user4', avatar: null, titleName: null, uid: '104', ac: 156 },
          { username: 'user5', avatar: null, titleName: null, uid: '105', ac: 135 },
        ],
        articles: [
          { id: 1, title: '快速排序详解', author: 'admin', tags: ['算法', '排序'], viewCount: 1250, date: '2025-03-15' },
          { id: 2, title: '如何高效刷题', author: 'tutor1', tags: ['学习方法'], viewCount: 890, date: '2025-03-12' },
          { id: 3, title: '动态规划入门指南', author: 'expert2', tags: ['算法', '动态规划'], viewCount: 1560, date: '2025-03-10' },
        ],
        stats: {
          totalUsers: 12580,
          totalProblems: 1025,
          totalSubmissions: 256789,
          weeklySubmissions: [
            { date: '03-14', count: 1254, ac: 658 },
            { date: '03-15', count: 1520, ac: 720 },
            { date: '03-16', count: 1100, ac: 580 },
            { date: '03-17', count: 1320, ac: 690 },
            { date: '03-18', count: 1450, ac: 710 },
            { date: '03-19', count: 1380, ac: 690 },
            { date: '03-20', count: 1580, ac: 850 },
          ]
        }
      });
    }, 500);
  });
};

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [homeData, setHomeData] = useState(null);

  useEffect(() => {
    fetchHomeData().then(data => {
      setHomeData(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 0: return 'bg-green-100 text-green-800';
      case 1: return 'bg-yellow-100 text-yellow-800';
      case 2: return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getDifficultyText = (difficulty) => {
    switch(difficulty) {
      case 0: return '简单';
      case 1: return '中等';
      case 2: return '困难';
      default: return '未知';
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case -1: return 'bg-yellow-500'; // 未开始
      case 0: return 'bg-green-500'; // 进行中
      case 1: return 'bg-gray-500'; // 已结束
      default: return 'bg-blue-500';
    }
  };

  const getStatusText = (status) => {
    switch(status) {
      case -1: return '未开始';
      case 0: return '进行中';
      case 1: return '已结束';
      default: return '未知';
    }
  };

  const getAuthTypeText = (auth) => {
    switch(auth) {
      case 0: return '公开';
      case 1: return '私有';
      case 2: return '保护';
      default: return '未知';
    }
  };

  const getContestTypeText = (type) => {
    return type === 0 ? 'ACM' : 'OI';
  };

  const formatDuration = (startTime, endTime) => {
    const start = new Date(startTime);
    const end = new Date(endTime);
    const diff = (end - start) / 1000 / 60; // 分钟

    if (diff < 60) {
      return `${diff}分钟`;
    } else if (diff < 60 * 24) {
      const hours = Math.floor(diff / 60);
      const mins = Math.floor(diff % 60);
      return `${hours}小时${mins > 0 ? mins + '分钟' : ''}`;
    } else {
      const days = Math.floor(diff / (60 * 24));
      const hours = Math.floor((diff % (60 * 24)) / 60);
      return `${days}天${hours > 0 ? hours + '小时' : ''}`;
    }
  };

  const formatTime = (time) => {
    const date = new Date(time);
    return `${date.getMonth() + 1}-${date.getDate()} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 顶部横幅 */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Hcode Online Judge</h1>
              <p className="text-xl mb-6">提升编程技能，挑战算法难题</p>
              <div className="flex space-x-4">
                <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-2 px-6 rounded-lg transition duration-200">
                  开始刷题
                </button>
                <button className="bg-blue-500 bg-opacity-25 hover:bg-opacity-40 text-white font-semibold py-2 px-6 rounded-lg border border-white transition duration-200">
                  参加比赛
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold">{homeData.stats.totalProblems}</div>
                    <div className="text-blue-100">题目总数</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">{homeData.stats.totalUsers}</div>
                    <div className="text-blue-100">注册用户</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">{homeData.stats.totalSubmissions}</div>
                    <div className="text-blue-100">提交次数</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">{homeData.contests.length}</div>
                    <div className="text-blue-100">近期比赛</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 主要内容 */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 左侧栏 - 最新文章与公告 */}
          <div className="lg:col-span-2 space-y-8">
            {/* 最新公告 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="border-b border-gray-200">
                <div className="px-6 py-4 flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-800">最新公告</h2>
                  <a href="/announcements" className="text-blue-600 hover:text-blue-700 text-sm">查看全部</a>
                </div>
              </div>
              <div className="divide-y divide-gray-200">
                {homeData.announcements.map(announcement => (
                  <div key={announcement.id} className="px-6 py-4">
                    <div className="flex items-center justify-between mb-1">
                      <a href={`/announcement/${announcement.id}`} className="text-lg font-medium text-gray-900 hover:text-blue-600">
                        {announcement.title}
                      </a>
                      <span className="text-sm text-gray-500">{announcement.date}</span>
                    </div>
                    <p className="text-gray-600 line-clamp-2">{announcement.content}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 最新题目 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="border-b border-gray-200">
                <div className="px-6 py-4 flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-800">最新题目</h2>
                  <a href="/problems" className="text-blue-600 hover:text-blue-700 text-sm">浏览全部题目</a>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        题号
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        标题
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        难度
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        标签
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        更新时间
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {homeData.recentProblems.map(problem => (
                      <tr key={problem.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          <a href={`/problem/${problem.id}`} className="text-blue-600 hover:text-blue-700">
                            {problem.id}
                          </a>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          <a href={`/problem/${problem.id}`} className="hover:text-blue-600">
                            {problem.title}
                          </a>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getDifficultyColor(problem.difficulty)}`}>
                            {getDifficultyText(problem.difficulty)}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex flex-wrap gap-1">
                            {problem.tags.map((tag, index) => (
                              <span key={index} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {problem.gmtModified}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 提交统计图表 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">近7天提交统计</h2>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={homeData.stats.weeklySubmissions}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="count" name="提交次数" stroke="#3B82F6" strokeWidth={2} dot={{ r: 4 }} />
                    <Line type="monotone" dataKey="ac" name="通过次数" stroke="#10B981" strokeWidth={2} dot={{ r: 4 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* 最新文章 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="border-b border-gray-200">
                <div className="px-6 py-4 flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-800">精选文章</h2>
                  <a href="/articles" className="text-blue-600 hover:text-blue-700 text-sm">浏览全部文章</a>
                </div>
              </div>
              <div className="px-6 py-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                {homeData.articles.map(article => (
                  <div key={article.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition duration-200">
                    <div className="p-4">
                      <a href={`/article/${article.id}`} className="text-lg font-medium text-gray-900 hover:text-blue-600 line-clamp-2">
                        {article.title}
                      </a>
                      <div className="flex items-center mt-2 text-sm text-gray-500">
                        <span>作者: {article.author}</span>
                        <span className="mx-2">•</span>
                        <span>{article.date}</span>
                        <span className="ml-auto flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          {article.viewCount}
                        </span>
                      </div>
                      <div className="mt-2">
                        {article.tags.map((tag, index) => (
                          <span key={index} className="inline-block mr-2 mt-1 px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 右侧栏 - 比赛和排名 */}
          <div className="space-y-8">
            {/* 近期比赛 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="border-b border-gray-200">
                <div className="px-6 py-4 flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-800">近期比赛</h2>
                  <a href="/contests" className="text-blue-600 hover:text-blue-700 text-sm">全部比赛</a>
                </div>
              </div>
              <div className="divide-y divide-gray-200">
                {homeData.contests.length > 0 ? (
                  homeData.contests.map(contest => (
                    <div key={contest.id} className={`p-4 ${contest.status === 0 ? 'border-l-4 border-green-500' : contest.status === -1 ? 'border-l-4 border-yellow-500' : ''}`}>
                      <div className="flex justify-between items-start">
                        <div>
                          <a href={`/contest/${contest.id}`} className="text-lg font-medium text-gray-900 hover:text-blue-600">
                            {contest.title}
                          </a>
                          <div className="flex flex-wrap gap-2 mt-2">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800`}>
                              {getContestTypeText(contest.type)}
                            </span>
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${contest.auth === 0 ? 'bg-green-100 text-green-800' : contest.auth === 1 ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}`}>
                              {getAuthTypeText(contest.auth)}
                            </span>
                            <span className="inline-flex items-center text-xs text-gray-500">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                              </svg>
                              {contest.count} 人
                            </span>
                          </div>
                        </div>
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(contest.status)}`}>
                          {getStatusText(contest.status)}
                        </span>
                      </div>
                      <div className="mt-3 grid grid-cols-2 gap-2">
                        <div className="flex items-center text-sm text-gray-500">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {formatTime(contest.startTime)}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {formatDuration(contest.startTime, contest.endTime)}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="px-6 py-8 text-center text-gray-500">暂无比赛</div>
                )}
              </div>
            </div>

            {/* 近7天AC排行 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="border-b border-gray-200">
                <div className="px-6 py-4">
                  <h2 className="text-xl font-semibold text-gray-800">近7天AC排行</h2>
                </div>
              </div>
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        排名
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        用户
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        AC数
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {homeData.acRankList.map((user, index) => (
                      <tr key={user.uid} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {index === 0 ? (
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-yellow-500 text-white">1</span>
                          ) : index === 1 ? (
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-400 text-white">2</span>
                          ) : index === 2 ? (
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-yellow-700 text-white">3</span>
                          ) : (
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 text-gray-700">{index + 1}</span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-8 w-8">
                              {user.avatar ? (
                                <img className="h-8 w-8 rounded-full" src={user.avatar} alt="" />
                              ) : (
                                <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
                                  {user.username.charAt(0).toUpperCase()}
                                </div>
                              )}
                            </div>
                            <div className="ml-3">
                              <a href={`/user-home?uid=${user.uid}&username=${user.username}`} className="text-sm font-medium text-gray-900 hover:text-blue-600">
                                {user.username}
                              </a>
                              {user.titleName && (
                                <span className="ml-2 inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium" style={{ backgroundColor: `${user.titleColor}20`, color: user.titleColor }}>
                                  {user.titleName}
                                </span>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {user.ac}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 支持的OJ列表 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="border-b border-gray-200">
                <div className="px-6 py-4">
                  <h2 className="text-xl font-semibold text-gray-800">支持的OJ平台</h2>
                </div>
              </div>
              <div className="p-6 grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center p-2 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-sm transition duration-200">
                  <img src="/api/placeholder/48/48" alt="POJ" className="h-12 w-12 mb-2" />
                  <span className="text-sm text-gray-700">POJ</span>
                </div>
                <div className="flex flex-col items-center p-2 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-sm transition duration-200">
                  <img src="/api/placeholder/48/48" alt="Codeforces" className="h-12 w-12 mb-2" />
                  <span className="text-sm text-gray-700">Codeforces</span>
                </div>
                <div className="flex flex-col items-center p-2 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-sm transition duration-200">
                  <img src="/api/placeholder/48/48" alt="AtCoder" className="h-12 w-12 mb-2" />
                  <span className="text-sm text-gray-700">AtCoder</span>
                </div>
                <div className="flex flex-col items-center p-2 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-sm transition duration-200">
                  <img src="/api/placeholder/48/48" alt="SPOJ" className="h-12 w-12 mb-2" />
                  <span className="text-sm text-gray-700">SPOJ</span>
                </div>
                <div className="flex flex-col items-center p-2 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-sm transition duration-200">
                  <img src="/api/placeholder/48/48" alt="LibreOJ" className="h-12 w-12 mb-2" />
                  <span className="text-sm text-gray-700">LibreOJ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 底部快速导航 */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">快速链接</h3>
              <ul className="space-y-2">
                <li><a href="/problems" className="text-gray-600 hover:text-blue-600">题库</a></li>
                <li><a href="/contests" className="text-gray-600 hover:text-blue-600">比赛</a></li>
                <li><a href="/status" className="text-gray-600 hover:text-blue-600">评测状态</a></li>
                <li><a href="/rank" className="text-gray-600 hover:text-blue-600">排行榜</a></li>
                <li><a href="/articles" className="text-gray-600 hover:text-blue-600">文章</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">学习资源</h3>
              <ul className="space-y-2">
                <li><a href="/training" className="text-gray-600 hover:text-blue-600">训练题单</a></li>
                <li><a href="/discussion" className="text-gray-600 hover:text-blue-600">讨论区</a></li>
                <li><a href="/help" className="text-gray-600 hover:text-blue-600">帮助中心</a></li>
                <li><a href="/faq" className="text-gray-600 hover:text-blue-600">常见问题</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">社区</h3>
              <ul className="space-y-2">
                <li><a href="/group" className="text-gray-600 hover:text-blue-600">团队</a></li>
                <li><a href="/about" className="text-gray-600 hover:text-blue-600">关于我们</a></li>
                <li><a href="/feedback" className="text-gray-600 hover:text-blue-600">反馈建议</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">联系我们</h3>
              <p className="text-gray-600 mb-4">有任何问题或建议？请随时联系我们。</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"></path>
                    <path d="M15 8h-2v4h-4V8H7v8h2v-2h6v2h2V8z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102.144-6.784.144-8.883 0-2.276-.156-2.541-1.27-2.558-4.892.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.559 4.892-.018 3.629-.285 4.736-2.559 4.892zm-5.441-7.892l4.917 2.917-4.917 2.917v-5.834z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 底部版权 */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center md:flex-row md:justify-between">
            <div className="mb-4 md:mb-0">
              <p>© 2025 Hcode Online Judge. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="/terms" className="text-gray-300 hover:text-white">使用条款</a>
              <a href="/privacy" className="text-gray-300 hover:text-white">隐私政策</a>
            </div>
          </div>
          <div className="mt-4 text-center text-gray-400 text-sm">
            <p>Powered by <a href="https://github.com/HimitZH/HOJ" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">HOJ</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;