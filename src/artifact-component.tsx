import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const CaricatureGame = () => {
  const [revealed, setRevealed] = useState({
    hair: false,
    face: false,
    eyes: false,
    eyebrows: false,
    nose: false,
    mouth: false,
    suit: false,
    tie: false
  });

  const [clicks, setClicks] = useState(0);

  const handleClick = (area) => {
    if (!revealed[area]) {
      setRevealed(prev => ({ ...prev, [area]: true }));
      setClicks(prev => prev + 1);
    }
  };

  return (
    <Card className="w-full max-w-lg">
      <CardContent className="p-6">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold mb-2">Click to Reveal the Caricature!</h2>
          <p className="text-gray-600">Parts Revealed: {Object.values(revealed).filter(v => v).length} / 8</p>
        </div>
        
        <div className="relative w-full h-96 bg-gray-100 rounded-lg cursor-pointer">
          <svg 
            viewBox="0 0 100 160" 
            className="w-full h-full"
          >
            {/* Hair */}
            <g onClick={() => handleClick('hair')} style={{cursor: 'pointer'}}>
              {revealed.hair && (
                <path
                  d="M 20 20 
                     L 80 20 
                     L 80 45
                     L 20 45
                     Z
                     M 45 10
                     L 55 20
                     L 65 10"
                  fill="#FFB700"
                />
              )}
              {!revealed.hair && (
                <rect x="20" y="10" width="60" height="35" 
                      fill="transparent" 
                      stroke="#ddd" 
                      strokeDasharray="5,5"
                      className="animate-pulse"/>
              )}
            </g>

            {/* Face */}
            <g onClick={() => handleClick('face')} style={{cursor: 'pointer'}}>
              {revealed.face && (
                <rect
                  x="20"
                  y="45"
                  width="60"
                  height="55"
                  fill="#FFA07A"
                />
              )}
              {!revealed.face && (
                <rect
                  x="20"
                  y="45"
                  width="60"
                  height="55"
                  fill="transparent"
                  stroke="#ddd"
                  strokeDasharray="5,5"
                  className="animate-pulse"
                />
              )}
            </g>

            {/* Eyebrows */}
            <g onClick={() => handleClick('eyebrows')} style={{cursor: 'pointer'}}>
              {revealed.eyebrows && (
                <>
                  <rect x="30" y="55" width="15" height="3" fill="#FFB700" />
                  <rect x="55" y="55" width="15" height="3" fill="#FFB700" />
                </>
              )}
              {!revealed.eyebrows && (
                <rect x="30" y="55" width="40" height="3" 
                      fill="transparent" 
                      stroke="#ddd" 
                      strokeDasharray="5,5"
                      className="animate-pulse"/>
              )}
            </g>

            {/* Eyes */}
            <g onClick={() => handleClick('eyes')} style={{cursor: 'pointer'}}>
              {revealed.eyes && (
                <>
                  <circle cx="37" cy="65" r="5" fill="#1E90FF" />
                  <circle cx="63" cy="65" r="5" fill="#1E90FF" />
                </>
              )}
              {!revealed.eyes && (
                <rect x="32" y="60" width="36" height="10" 
                      fill="transparent" 
                      stroke="#ddd" 
                      strokeDasharray="5,5"
                      className="animate-pulse"/>
              )}
            </g>

            {/* Nose */}
            <g onClick={() => handleClick('nose')} style={{cursor: 'pointer'}}>
              {revealed.nose && (
                <rect x="47" y="75" width="6" height="2" fill="#DEB887" />
              )}
              {!revealed.nose && (
                <rect x="47" y="75" width="6" height="2" 
                      fill="transparent" 
                      stroke="#ddd" 
                      strokeDasharray="5,5"
                      className="animate-pulse"/>
              )}
            </g>

            {/* Mouth */}
            <g onClick={() => handleClick('mouth')} style={{cursor: 'pointer'}}>
              {revealed.mouth && (
                <circle cx="50" cy="85" r="5" fill="#CD5C5C" />
              )}
              {!revealed.mouth && (
                <circle cx="50" cy="85" r="5"
                      fill="transparent" 
                      stroke="#ddd" 
                      strokeDasharray="5,5"
                      className="animate-pulse"/>
              )}
            </g>

            {/* Suit */}
            <g onClick={() => handleClick('suit')} style={{cursor: 'pointer'}}>
              {revealed.suit && (
                <>
                  <rect
                    x="20"
                    y="100"
                    width="60"
                    height="60"
                    fill="#001F5C"
                  />
                  <path
                    d="M 20 110 L 50 105 L 80 110"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                  />
                </>
              )}
              {!revealed.suit && (
                <rect x="20" y="100" width="60" height="60" 
                      fill="transparent" 
                      stroke="#ddd" 
                      strokeDasharray="5,5"
                      className="animate-pulse"/>
              )}
            </g>

            {/* Tie */}
            <g onClick={() => handleClick('tie')} style={{cursor: 'pointer'}}>
              {revealed.tie && (
                <path
                  d="M 45 100 
                     L 55 100 
                     L 60 150 
                     L 50 160 
                     L 40 150 Z"
                  fill="#E63946"
                />
              )}
              {!revealed.tie && (
                <rect x="40" y="100" width="20" height="60" 
                      fill="transparent" 
                      stroke="#ddd" 
                      strokeDasharray="5,5"
                      className="animate-pulse"/>
              )}
            </g>
          </svg>
        </div>

        <div className="mt-4 text-center">
          {Object.values(revealed).every(v => v) ? (
            <p className="text-green-600 font-bold">Complete! It took you {clicks} clicks.</p>
          ) : (
            <p className="text-gray-600">Keep clicking the dashed areas to reveal more!</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default CaricatureGame;