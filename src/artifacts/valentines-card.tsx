import React, { useState } from 'react';
import { Heart, Stars, Cloud, Moon, Sparkles } from 'lucide-react';

const ValentineCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-pink-100 p-4">
      <div className="relative w-full max-w-2xl">
        <div className={`transform transition-all duration-1000 ${isOpen ? 'scale-100' : 'scale-95'} cursor-pointer`}
             onClick={() => setIsOpen(!isOpen)}>
          {/* 主卡片 */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-pink-100">
            {/* 顶部装饰区域 */}
            <div className="h-56 bg-gradient-to-r from-pink-400 via-purple-300 to-pink-400 relative overflow-hidden">
              {/* 装饰元素 */}
              <div className="absolute inset-0">
                <div className="absolute top-4 left-4">
                  <Sparkles className="text-white/80 w-8 h-8 animate-pulse" />
                </div>
                <div className="absolute top-4 right-4">
                  <Stars className="text-white/80 w-8 h-8 animate-pulse" />
                </div>
                <div className="absolute bottom-4 left-1/4">
                  <Moon className="text-white/80 w-8 h-8 animate-bounce" />
                </div>
                <div className="absolute top-1/3 right-1/4">
                  <Sparkles className="text-white/80 w-8 h-8 animate-pulse" />
                </div>
              </div>
              
              {/* 云朵装饰 */}
              <Cloud className="absolute -bottom-2 left-8 text-white/40 w-24 h-24" />
              <Cloud className="absolute -top-2 right-8 text-white/40 w-24 h-24" />
              
              {/* 中央大爱心 */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Heart className="text-white/90 w-24 h-24 animate-pulse" />
              </div>
            </div>

            {/* 内容区域 */}
            <div className="p-8 space-y-8 relative">
              {/* 装饾背景 */}
              <div className="absolute inset-0 opacity-5">
                <div className="grid grid-cols-4 gap-8 p-8">
                  {[...Array(16)].map((_, i) => (
                    <Heart key={i} className="text-pink-300 w-8 h-8" />
                  ))}
                </div>
              </div>

              {/* 主要内容 */}
              <div className="relative text-center space-y-8">
                <h1 className="text-4xl font-bold text-pink-600 mb-8">亲爱的马纯儿</h1>
                
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>对不起，今天没能陪在你身边</p>
                  <p>我知道这让你感到失落和不开心</p>
                  <p>但我想让你知道，即使我人在深圳</p>
                  <p>我的心始终和你在一起</p>
                  <p className="pt-4">这个情人节虽然不完美</p>
                  <p>但我们的爱情会一直完美下去</p>
                  <p>等我回来，我们补过一个最浪漫的情人节</p>
                </div>

                {/* 装饰性爱心 */}
                <div className="flex justify-center space-x-4 pt-4">
                  {[...Array(3)].map((_, i) => (
                    <Heart 
                      key={i}
                      className="text-pink-400 w-6 h-6 animate-bounce"
                      style={{ animationDelay: `${i * 200}ms` }}
                    />
                  ))}
                </div>
              </div>

              {/* 署名 */}
              <div className="text-right space-y-1 mt-8">
                <p className="text-gray-600">永远爱你的</p>
                <p className="text-pink-600 font-bold text-xl">你的男朋友</p>
                <p className="text-gray-500">2025年2月14日 深圳</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValentineCard;