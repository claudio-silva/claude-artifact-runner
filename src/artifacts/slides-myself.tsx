import React, { useState, ReactNode } from 'react';
import { Star, Award, Book, Briefcase, Code, Users, ChevronRight } from 'lucide-react';

interface SlideProps {
  children: ReactNode;
  className?: string;
}

const Slide: React.FC<SlideProps> = ({ children, className = '' }) => (
  <div className={`w-full h-full flex items-center justify-center p-4 md:p-8 bg-white rounded-lg shadow-lg ${className}`}>
    <div className="w-full max-w-7xl">
      {children}
    </div>
  </div>
);

const SpeakerIntro = () => {
  const [currentSlide] = useState(0);
  
  const slides = [
    <Slide key="intro">
      <div className="space-y-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-600">讲师介绍</h1>
          <div className="text-xl text-gray-600 mt-2">洪浩东</div>
          <div className="text-lg text-blue-500 mt-1">三级专家 | 系统架构师</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 左侧个人信息 */}
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <Star className="text-blue-500" />
                <h3 className="font-bold text-lg">标杆项目</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></div>
                  <span>南方联合产权智慧投行服务平台</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></div>
                  <span>广州市文旅局公共文化云信创改造</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <Book className="text-green-500" />
                <h3 className="font-bold text-lg">专业认证</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 mt-2 bg-green-500 rounded-full"></div>
                  <span>软考中级（软件设计师）</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 mt-2 bg-green-500 rounded-full"></div>
                  <span>人工智能（高级）</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 mt-2 bg-green-500 rounded-full"></div>
                  <span>注册信息安全工程师（CISP）</span>
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <Award className="text-purple-500" />
                <h3 className="font-bold text-lg">荣誉成就</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 mt-2 bg-purple-500 rounded-full"></div>
                  <span>2023年度优秀科技新星称号</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 mt-2 bg-purple-500 rounded-full"></div>
                  <span>2022-2023年度优秀员工</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 mt-2 bg-purple-500 rounded-full"></div>
                  <span>苹果开发者大会奖学金获得者</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 右侧技术与经验 */}
          <div className="space-y-4">
            <div className="bg-orange-50 p-4 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <Code className="text-orange-500" />
                <h3 className="font-bold text-lg">技术创新</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 mt-2 bg-orange-500 rounded-full"></div>
                  <span>主导开发智能检索及AI问答系统</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 mt-2 bg-orange-500 rounded-full"></div>
                  <span>开发智能表格数据处理工具</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 mt-2 bg-orange-500 rounded-full"></div>
                  <span>设计微服务架构管理平台</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 mt-2 bg-orange-500 rounded-full"></div>
                  <span>主导智能投行服务平台建设</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 p-4 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <Briefcase className="text-red-500" />
                <h3 className="font-bold text-lg">专业背景</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 mt-2 bg-red-500 rounded-full"></div>
                  <span>华南农业大学毕业</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 mt-2 bg-red-500 rounded-full"></div>
                  <span>从事专业工作5年</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 mt-2 bg-red-500 rounded-full"></div>
                  <span>擅长人工智能应用开发</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 mt-2 bg-red-500 rounded-full"></div>
                  <span>系统架构设计经验丰富</span>
                </li>
              </ul>
            </div>

            <div className="bg-cyan-50 p-4 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <Users className="text-cyan-500" />
                <h3 className="font-bold text-lg">内部赋能</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 mt-2 bg-cyan-500 rounded-full"></div>
                  <span>组织AI技术内部培训</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 mt-2 bg-cyan-500 rounded-full"></div>
                  <span>推广AI技术在设计中的应用</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 mt-2 bg-cyan-500 rounded-full"></div>
                  <span>参与数字化转型调研</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 mt-2 bg-cyan-500 rounded-full"></div>
                  <span>推动技术创新突破</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  ];

  const goToNextChapter = () => {
    window.location.href = '/slides-1';
  };

  return (
    <div className="w-full min-h-screen flex flex-col relative bg-gray-100">
      {/* 主要内容区域 */}
      <div className="flex-grow flex items-center justify-center p-4 md:p-8">
        <div className="w-full h-full">
          {slides[currentSlide]}
        </div>
      </div>
      
      {/* 导航控制区域 - 固定在底部 */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* 占位 */}
          <div className="w-[100px]"></div>
          
          {/* 幻灯片信息 */}
          <div className="flex items-center gap-8">
            <span className="text-gray-600 font-medium">
              讲师介绍
            </span>
          </div>

          {/* 下一章节按钮 */}
          <button
            onClick={goToNextChapter}
            className="w-[100px] h-10 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-1"
          >
            下一章
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
      {/* 底部空白占位，防止内容被固定导航栏遮挡 */}
      <div className="h-16"></div>
    </div>
  );
};

export default SpeakerIntro;