import { ComponentType } from 'react';
import BitcoinGame from '../games/BitcoinGame';

interface Game {
  date: string;
  title: string;
  description: string;
  component: ComponentType;
  background: string;
}

export const games: Game[] = [
  {
    date: '2024-03-21',
    title: 'Bitcoin To The Moon',
    description: 'Launch Bitcoin to new heights! Keep clicking or pressing space to fight gravity and reach $80,000.',
    component: BitcoinGame,
    background: 'bg-gray-900',
  },
]; 