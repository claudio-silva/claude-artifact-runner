import { useState, useEffect, useRef, MouseEvent } from 'react';
import { Bitcoin } from 'lucide-react';

const BitcoinGame = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [centerX, setCenterX] = useState(300);
  const [position, setPosition] = useState({ x: 300, y: 400 });
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const [priceScale, setPriceScale] = useState(1);
  const [price, setPrice] = useState(40000);
  const [showCelebration, setShowCelebration] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [clickEffect, setClickEffect] = useState(false);
  const [explosionSize, setExplosionSize] = useState(1);
  const animationFrameRef = useRef<number | null>(null);
  const lastUpdateTime = useRef(Date.now());

  useEffect(() => {
    if (containerRef.current) {
      const newCenterX = containerRef.current.clientWidth / 2;
      setCenterX(newCenterX);
      setPosition(prev => ({ ...prev, x: newCenterX }));
    }
  }, []);

  const TARGET_PRICE = 120000;
  const GRAVITY = 0.35;
  const JUMP_VELOCITY = -7;
  const BOUNCE_DAMPENING = 0.8;

  useEffect(() => {
    const handleSpaceBar = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault();
        jump();
      }
    };
    window.addEventListener('keydown', handleSpaceBar);
    return () => window.removeEventListener('keydown', handleSpaceBar);
  }, [isActive]);

  useEffect(() => {
    if (!isActive) return;

    const animate = () => {
      const currentTime = Date.now();
      const deltaTime = (currentTime - lastUpdateTime.current) / 16;
      lastUpdateTime.current = currentTime;

      setVelocity(prev => ({
        x: prev.x,
        y: prev.y + (GRAVITY * deltaTime)
      }));

      setPriceScale(1 + Math.sin(currentTime / 200) * 0.1);

      setPosition(prev => {
        const newY = prev.y + (velocity.y * deltaTime);

        if (newY > 400) {
          setVelocity(prev => ({ ...prev, y: prev.y * -BOUNCE_DAMPENING }));
          setScale(0.8);
          setTimeout(() => setScale(1), 100);
          return { ...prev, y: 400 };
        }

        if (newY < 0) {
          setVelocity(prev => ({ ...prev, y: Math.abs(prev.y * BOUNCE_DAMPENING) }));
          return { ...prev, y: 0 };
        }

        const maxHeight = 50;
        const heightRange = 400 - maxHeight;
        const priceRange = TARGET_PRICE - 40000;
        const newPrice = Math.round(
          40000 + (priceRange * (400 - newY) / heightRange)
        );
        setPrice(newPrice);

        if (newPrice >= TARGET_PRICE && !showCelebration) {
          setShowCelebration(true);
          let size = 1;
          const explode = setInterval(() => {
            size += 0.2;
            setExplosionSize(size);
            if (size >= 20) {
              clearInterval(explode);
              setTimeout(resetGame, 1000);
            }
          }, 20);
        }

        return { ...prev, y: newY };
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isActive, velocity, showCelebration]);

  const resetGame = () => {
    setShowCelebration(false);
    setIsActive(false);
    setPosition({ x: centerX, y: 400 });
    setVelocity({ x: 0, y: 0 });
    setPrice(40000);
    setScale(1);
    setPriceScale(1);
    setExplosionSize(1);
  };

  const jump = () => {
    if (!isActive) {
      setIsActive(true);
      lastUpdateTime.current = Date.now();
    }
    setVelocity(prev => ({ ...prev, y: JUMP_VELOCITY }));
    setScale(1.2);
    setClickEffect(true);
    setTimeout(() => {
      setScale(1);
      setClickEffect(false);
    }, 150);
  };

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    jump();
  };

  const bitcoinRotation = Math.min(30, Math.max(-30, velocity.y * 2));

  return (
    <div 
      ref={containerRef}
      className="relative flex flex-col items-center justify-center bg-gray-900 rounded-lg p-8 h-screen max-h-[600px] overflow-hidden cursor-pointer select-none"
      onClick={handleClick}
    >
      {/* Instructions Overlay */}
      {!isActive && !showCelebration && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
          <div className="text-center text-white">
            <div className="text-4xl mb-4 animate-bounce">🚀</div>
            <div className="text-xl">Click or Press Space to Launch Bitcoin!</div>
            <div className="text-sm mt-2">Keep clicking to fight gravity</div>
          </div>
        </div>
      )}

      {/* Centered Price Display */}
      <div 
        className="absolute left-1/2 top-8 transform -translate-x-1/2 text-5xl font-bold text-green-400 transition-all"
        style={{ 
          transform: `translate(-50%, 0) scale(${priceScale})`,
          textShadow: '0 0 10px rgba(74, 222, 128, 0.5)'
        }}
      >
        ${price.toLocaleString()}
      </div>

      {/* Barometer */}
      <div className="absolute right-8 w-16 bg-gray-800 rounded-full overflow-hidden border-2 border-gray-700 top-8 bottom-8">
        <div 
          className="absolute bottom-0 w-full bg-gradient-to-t from-green-500 to-yellow-400 transition-all duration-100 rounded-full"
          style={{ height: `${((price - 40000) / (TARGET_PRICE - 40000)) * 100}%` }}
        />
        <div className="absolute -top-6 right-0 text-white">120K</div>
        <div className="absolute -bottom-6 right-0 text-white">40K</div>
      </div>

      {/* Click Effects */}
      {clickEffect && (
        <div 
          className="absolute z-0 animate-ping"
          style={{ 
            left: `${position.x - 48}px`,
            top: `${position.y - 48}px`,
            width: '144px',
            height: '144px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
          }}
        />
      )}

      {/* Bitcoin Symbol */}
      <div 
        className="absolute transition-all duration-100 z-10"
        style={{ 
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `rotate(${bitcoinRotation}deg) scale(${scale}) translate(-50%, -50%)`,
          transition: 'transform 0.15s cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}
      >
        <Bitcoin 
          size={96} 
          className="text-yellow-500 filter drop-shadow-lg" 
          strokeWidth={2}
        />
      </div>

      {/* Celebration Overlay with Explosion */}
      {showCelebration && (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <div 
            className="flex flex-col items-center justify-center bg-yellow-500"
            style={{
              width: `${explosionSize * 100}%`,
              height: `${explosionSize * 100}%`,
              borderRadius: '50%',
              transition: 'all 0.05s linear',
            }}
          >
            <div className="text-8xl animate-bounce mb-4">🚀</div>
            <div className="text-6xl font-bold text-white animate-pulse whitespace-nowrap">
              TO THE MOON!
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BitcoinGame;