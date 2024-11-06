import { createContext, useContext, useEffect, useState } from 'react';
import { GameData } from '../types/game';

interface GamesContextType {
  currentGame: GameData | null;
  previousGame: GameData | null;
  markGameCompleted: (id: string) => void;
}

const GamesContext = createContext<GamesContextType | null>(null);

export function GamesProvider({ children }: { children: React.ReactNode }) {
  const [currentGame, setCurrentGame] = useState<GameData | null>(null);
  const [previousGame, setPreviousGame] = useState<GameData | null>(null);

  useEffect(() => {
    // In a real app, this would come from an API
    const today = new Date().toISOString().split('T')[0];
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    
    setCurrentGame({
      id: `game-${today}`,
      type: 'fadeout',
      date: today,
      completed: false
    });
    
    setPreviousGame({
      id: `game-${yesterday}`,
      type: 'caricature',
      date: yesterday,
      completed: false
    });
  }, []);

  const markGameCompleted = (id: string) => {
    if (currentGame?.id === id) {
      setCurrentGame(prev => prev ? { ...prev, completed: true } : null);
    } else if (previousGame?.id === id) {
      setPreviousGame(prev => prev ? { ...prev, completed: true } : null);
    }
  };

  return (
    <GamesContext.Provider value={{ currentGame, previousGame, markGameCompleted }}>
      {children}
    </GamesContext.Provider>
  );
}

export const useGames = () => {
  const context = useContext(GamesContext);
  if (!context) throw new Error('useGames must be used within GamesProvider');
  return context;
}; 