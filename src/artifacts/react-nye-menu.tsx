import React from 'react';

const MenuItem = ({ name, ingredients, blessing, category, imageUrl }) => (
  <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-yellow-400 hover:border-red-600 transition-all hover:-translate-y-2 hover:shadow-2xl duration-300">
    <div className="relative overflow-hidden rounded-lg mb-4 h-48">
      <img src={imageUrl} alt={name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
      <div className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-full text-sm">{category}</div>
    </div>
    <div className="text-xl font-bold text-red-700 mb-3 flex items-center">
      <span className="mr-2">🍜</span> {name}
    </div>
    <div className="text-gray-600 pl-8">
      <div className="text-red-600 mb-2 flex items-center">
        <span className="mr-2">✨</span>
        <span className="bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-transparent">{blessing}</span>
      </div>
      <div className="flex items-center">
        <span className="mr-2">📝</span>
        主料：{ingredients}
      </div>
    </div>
  </div>
);

const ChineseNYEMenu = () => {
  const dishes = [
    {
      name: "梅菜扣肉",
      ingredients: "五花肉、梅干菜",
      blessing: "富甲一方 | 客家风味",
      category: "主菜",
      imageUrl: "https://images.unsplash.com/photo-1617692855027-33b14f061079"
    },
    {
      name: "海参炖鸡汤",
      ingredients: "干海参、老母鸡、姜片、枸杞",
      blessing: "浓汤佳品 | 滋补养生",
      category: "汤品",
      imageUrl: "https://images.unsplash.com/photo-1547592166-23ac45744acd"
    },
    {
      name: "芥兰炒牛肉",
      ingredients: "芥兰、牛肉、姜丝、蒜末",
      blessing: "年年高升 | 步步高升",
      category: "主菜",
      imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
    },
    {
      name: "羊肚菇汤",
      ingredients: "羊肚菌、排骨、枸杞、姜片",
      blessing: "温暖滋补 | 暖心暖胃",
      category: "汤品",
      imageUrl: "https://images.unsplash.com/photo-1591814468924-caf88d1232e1"
    },
    {
      name: "蒜蓉鲍鱼配鸡脚",
      ingredients: "鲍鱼、鸡脚、姜片",
      blessing: "金玉满堂 | 富贵吉祥",
      category: "主菜",
      imageUrl: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853"
    },
    {
      name: "蒜蓉蒸大虾",
      ingredients: "大虾、蒜蓉",
      blessing: "笑口常开 | 喜气洋洋",
      category: "主菜",
      imageUrl: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47"
    },
    {
      name: "酸甜鱼",
      ingredients: "鲈鱼/草鱼、番茄酱",
      blessing: "年年有余 | 鱼跃龙门",
      category: "主菜",
      imageUrl: "https://images.unsplash.com/photo-1535140728325-a4d3707eee61"
    },
    {
      name: "白切鸡",
      ingredients: "走地鸡、姜片、葱花",
      blessing: "吉祥如意 | 家肴经典",
      category: "主菜",
      imageUrl: "https://images.unsplash.com/photo-1426869884541-df7117556757"
    },
    {
      name: "糯米芋泥白果",
      ingredients: "芋头、糯米粉、白果、椰浆",
      blessing: "甜甜蜜蜜 | 团团圆圆",
      category: "甜点",
      imageUrl: "https://images.unsplash.com/photo-1567002260511-7d5e54c83b30"
    },
    {
      name: "荷兰豆炒鱿鱼",
      ingredients: "荷兰豆、鱿鱼、姜丝、蒜末",
      blessing: "福气满堂 | 春意盎然",
      category: "主菜",
      imageUrl: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853"
    }
  ];

  const categories = [...new Set(dishes.map(dish => dish.category))];

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-700 to-red-800 bg-opacity-90 py-12 px-4">
      <div className="max-w-6xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border-4 border-yellow-400">
        <div className="text-center bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-xl p-8 mb-12 relative overflow-hidden">
          <div className="absolute top-4 left-4 animate-bounce text-4xl transform hover:scale-125 transition-transform">🏮</div>
          <div className="absolute top-4 right-4 animate-bounce text-4xl transform hover:scale-125 transition-transform">🏮</div>
          <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 rotate-90 opacity-30 text-8xl">🎊</div>
          <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 -rotate-90 opacity-30 text-8xl">🎊</div>
          <h1 className="text-5xl font-bold text-white text-shadow-lg mb-4 animate-fadeIn">2025年年夜饭菜单</h1>
          <p className="text-white text-xl">团圆饭 • 家的味道</p>
        </div>

        {categories.map(category => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-bold text-red-700 mb-6 flex items-center">
              <span className="mr-3 text-3xl">{category === '主菜' ? '🍖' : category === '汤品' ? '🥣' : '🍮'}</span>
              {category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dishes
                .filter(dish => dish.category === category)
                .map((dish, index) => (
                  <MenuItem key={index} {...dish} />
                ))}
            </div>
          </div>
        ))}

        <div className="text-center mt-12 bg-gradient-to-r from-red-700 to-red-500 text-white p-6 rounded-xl text-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQgPSJNMzAgMTBMMTAgMzBsMjAgMjBsMjAtMjBMMzAgMTB6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz4KPC9zdmc+')] opacity-20"></div>
          <div className="relative z-10">
            🧧 祝您新年快乐，阖家幸福！🧧
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChineseNYEMenu;