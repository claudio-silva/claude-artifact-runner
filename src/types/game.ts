export type GameType = 'caricature' | 'fadeout';

export interface GameData {
  id: string;
  type: GameType;
  date: string;
  completed: boolean;
} 