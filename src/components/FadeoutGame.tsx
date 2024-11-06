import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface FadeoutGameProps {
  onComplete: () => void;
}

const FadeoutGame = ({ onComplete }: FadeoutGameProps) => {
  const [opacity, setOpacity] = useState(1);
  const [clicks, setClicks] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleClick = () => {
    if (completed) return;
    
    setClicks(prev => prev + 1);
    setOpacity(prev => {
      const newOpacity = Math.max(0, prev - 0.1);
      if (newOpacity === 0 && !completed) {
        setCompleted(true);
        onComplete();
      }
      return newOpacity;
    });
  };

  return (
    <Card className="w-full max-w-lg">
      <CardContent className="p-6">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold mb-2">Click to Make it Fade!</h2>
          <p className="text-gray-600">Opacity: {Math.round(opacity * 100)}%</p>
        </div>

        <div 
          className="relative w-full h-96 bg-gray-100 rounded-lg cursor-pointer transition-opacity duration-300"
          onClick={handleClick}
        >
          <div 
            className="w-full h-full flex items-center justify-center"
            style={{ opacity }}
          >
            <div className="w-32 h-32 bg-blue-500 rounded-full" />
          </div>
        </div>

        <div className="mt-4 text-center">
          {completed ? (
            <p className="text-green-600 font-bold">
              Complete! It took you {clicks} clicks.
            </p>
          ) : (
            <p className="text-gray-600">
              Keep clicking to make it disappear!
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default FadeoutGame; 