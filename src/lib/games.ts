import { ComponentType } from 'react';
import BitcoinGame from '../games/BitcoinGame.tsx';
import MemoryGame from '../games/MemoryGame.tsx';
import SnakeGame from '../games/SnakeGame.tsx';

interface Game {
  date: string;
  title: string;
  description: string;
  component: ComponentType;
  background: string;
}

export const games: Game[] = [
  {
    date: '2024-03-19',
    title: 'Memory Game',
    description: 'Test your memory by matching pairs of cards.',
    component: MemoryGame,
    background: 'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500',
  },
  {
    date: '2024-03-20',
    title: 'Snake Game',
    description: 'Classic snake game. Use arrow keys to control the snake and eat the food.',
    component: SnakeGame,
    background: 'bg-gradient-to-r from-green-400 to-blue-500',
  },
  {
    date: '2024-03-21',
    title: 'Bitcoin To The Moon',
    description: 'Launch Bitcoin to new heights! Keep clicking or pressing space to fight gravity and reach $80,000.',
    component: BitcoinGame,
    background: 'bg-gray-900',
  },
]; 