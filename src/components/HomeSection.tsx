import { FC, memo } from 'react';
import { LinkedInRecommendation } from '../data/linkedin-recommendations';

interface HomeSectionProps {
  onHireClick: () => void;
  isHired: boolean;
  linkedinRecommendations: LinkedInRecommendation[];
}

const HomeSection: FC<HomeSectionProps> = ({ onHireClick, isHired, linkedinRecommendations }) => (
  <section className="mb-12 md:mb-16 animate-fadeIn">
    <div className="profile-section mb-8 md:mb-12 backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-lg shadow-cyan-500/20 relative overflow-hidden">
      <div className="absolute top-4 right-4 opacity-30">
        <div className="w-2 h-2 md:w-3 md:h-3 bg-cyan-400 rounded-full animate-pulse"></div>
      </div>
      <div className="absolute bottom-4 left-4 opacity-30">
        <div className="w-1 h-1 md:w-2 md:h-2 bg-green-400 rounded-full animate-pulse animation-delay-1000"></div>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="relative w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 group">
          <div className="relative w-44 h-44 md:w-56 md:h-56 lg:w-64 lg:h-64 group">
            <img
              src="/images/profile.webp"
              alt="Mohammad Abir Abbas"
              className="w-full h-full rounded-full object-cover border-4 border-cyan-400/50 shadow-2xl shadow-cyan-400/30 transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        <div className="profile-info text-center lg:text-left flex-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent text-shadow-glow mb-3 md:mb-4">
            Mohammad Abir Abbas
          </h1>
          <div className="mb-6 md:mb-8">
            <p className="text-gray-300 leading-relaxed text-sm md:text-base max-w-2xl mx-auto lg:mx-0">
              We craft AI-powered, secure, and scalable solutions that drive impact. From multi-LLM workflows to Rust systems, every decision is data-driven, every product human-focused, and every line of code aimed at breaking barriers and shaping the impossible.
            </p>
          </div>

          <div className="role-hire flex flex-col sm:flex-row items-center justify-between gap-3 md:gap-4">
            <div className="flex flex-wrap gap-2">
              <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold">AI Whisperer</span>
              <span className="bg-gradient-to-r from-cyan-500 to-green-500 text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold">Rust Artisan</span>
              <span className="bg-gradient-to-r from-green-500 to-yellow-500 text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold">Vibe Coder</span>
            </div>
            <button
              className="hire-me-button bg-gradient-to-r from-cyan-400 to-green-400 hover:from-cyan-500 hover:to-green-500 text-black font-bold py-2 px-4 md:py-3 md:px-8 rounded-lg border-2 border-transparent transition-all duration-300 text-shadow-glow transform hover:scale-105 hover:shadow-2xl hover:shadow-green-400/50"
              onClick={onHireClick}
            >
              {isHired ? 'Hired!' : 'Hire Me'}
            </button>
          </div>
        </div>
      </div>
    </div>

    <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">LinkedIn Recommendations</h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {linkedinRecommendations.map((recommendation, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-xl p-6 hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30"
          >
            <div className="flex items-center mb-4">
              <img src={recommendation.avatar} alt={recommendation.name} className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h3 className="font-bold text-green-400">{recommendation.name}</h3>
                <p className="text-gray-400 text-sm">{recommendation.role}</p>
              </div>
            </div>
            <p className="text-gray-300 italic">"{recommendation.content}"</p>
            <div className="flex mt-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <a
          href="https://www.linkedin.com/in/abir-abbas"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-black font-bold py-3 px-6 rounded-lg border-2 border-transparent transition-all duration-300 text-shadow-glow transform hover:scale-105 hover:shadow-lg hover:shadow-green-400/30"
        >
          View More on LinkedIn →
        </a>
      </div>
    </section>
  </section>
);

export default memo(HomeSection);
