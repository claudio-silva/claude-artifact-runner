import React, { useState, useEffect } from 'react';

const BlessingResponse = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState([]);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    setIsVisible(true);
    
    // Create floating particles with different types
    const newParticles = [];
    for (let i = 0; i < 30; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 4 + Math.random() * 3,
        type: Math.random() > 0.5 ? 'star' : 'circle',
        size: 1 + Math.random() * 2
      });
    }
    setParticles(newParticles);

    // Update time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      timeZone: 'Asia/Shanghai',
      hour12: false, 
      hour: '2-digit', 
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      timeZone: 'Asia/Shanghai',
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 overflow-hidden relative flex items-center justify-center p-4">
      {/* Animated aurora background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-pink-600/20 to-indigo-600/20 animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`absolute opacity-40 ${particle.type === 'star' ? 'text-yellow-300' : 'bg-white rounded-full'}`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.type === 'circle' ? `${particle.size * 4}px` : 'auto',
            height: particle.type === 'circle' ? `${particle.size * 4}px` : 'auto',
            animation: `float ${particle.duration}s ease-in-out infinite, twinkle 2s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`
          }}
        >
          {particle.type === 'star' && (
            <svg className={`w-${Math.ceil(particle.size * 2)} h-${Math.ceil(particle.size * 2)}`} fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          )}
        </div>
      ))}

      {/* Main content container */}
      <div className={`
        relative z-10 max-w-4xl mx-auto text-center transform transition-all duration-2000 ease-out
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}
      `}>
        
        {/* Main card with advanced glassmorphism */}
        <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 relative overflow-hidden">
          
          {/* Subtle inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>
          
          {/* Header decoration with celestial theme */}
          <div className="flex justify-center mb-8 relative">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-full flex items-center justify-center shadow-2xl">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div className="absolute -inset-3 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-full opacity-20 animate-ping"></div>
              <div className="absolute -inset-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-full opacity-10 animate-pulse"></div>
            </div>
          </div>

          {/* Time and date display */}
          <div className={`
            mb-6 transition-all duration-1000 delay-300
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
          `}>
            <div className="text-white/70 text-sm font-light mb-1">{formatDate(currentTime)}</div>
            <div className="text-white/90 text-lg font-mono tracking-wider">{formatTime(currentTime)}</div>
          </div>

          {/* Recipient */}
          <div className={`
            text-xl text-white/80 mb-8 font-light transition-all duration-1000 delay-500
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
          `}>
            Dear <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 font-semibold text-2xl">Finoa</span>
          </div>

          {/* Opening quote */}
          <div className={`
            text-lg text-white/70 italic mb-8 transition-all duration-1000 delay-700
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
          `}>
            "May you find what you are looking for and love what you find"
          </div>

          {/* Main blessing response */}
          <div className={`
            text-2xl md:text-4xl font-light text-white leading-relaxed mb-8 transition-all duration-1000 delay-900
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
          `}>
            <div className="mb-6">
              <span className="bg-gradient-to-r from-purple-200 via-pink-200 to-indigo-200 bg-clip-text text-transparent font-medium">
                The same blessing back to you
              </span>
            </div>
            <div className="text-xl md:text-2xl text-white/90 font-light">
              May you find your heart's desire
            </div>
          </div>

          {/* Chinese translation with enhanced styling */}
          <div className={`
            text-xl md:text-2xl text-white/90 mb-10 font-light transition-all duration-1000 delay-1100
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
          `}>
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-pink-200 font-medium mb-3 text-2xl">
              同样的祝福回赠给你
            </div>
            <div className="text-white/80">愿你寻得心之所向</div>
          </div>

          {/* Inspirational message */}
          <div className={`
            text-base md:text-lg text-white/70 mb-8 leading-relaxed max-w-2xl mx-auto transition-all duration-1000 delay-1300
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
          `}>
            In this vast universe of infinite possibilities, may every step you take lead you closer to your dreams. 
            May your journey be filled with wonder, your heart with joy, and your soul with peace.
          </div>

          {/* Signature section */}
          <div className={`
            border-t border-white/20 pt-6 transition-all duration-1000 delay-1500
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
          `}>
            <div className="text-right text-white/70 mb-2">
              With warmest wishes,
            </div>
            <div className="text-right text-xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-purple-200 font-medium">
                OrientHong
              </span>
            </div>
          </div>

          {/* Decorative constellation */}
          <div className="flex justify-center space-x-8 mt-8">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`
                  w-2 h-2 bg-gradient-to-r from-yellow-200 to-yellow-400 rounded-full
                  transition-all duration-1000 animate-twinkle
                `}
                style={{ 
                  animationDelay: `${i * 0.3}s`,
                  opacity: 0.6 + (i * 0.1)
                }}
              />
            ))}
          </div>
        </div>

        {/* Bottom accent */}
        <div className={`
          mt-8 text-white/50 text-sm transition-all duration-1000 delay-1700
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
        `}>
          ✨ Crafted with care in the digital cosmos ✨
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(180deg); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
      `}</style>
    </div>
  );
};

export default BlessingResponse;