import { useState } from 'react';
import SnakeGame from '../Games/SnakeGame';
import TicTacToe from '../Games/TictacToe.tsx';

type GameTab = 'snake' | 'tictactoe';

export default function Game() {
  const [activeTab, setActiveTab] = useState<GameTab>('snake');

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-2 text-gradient">🎮 Game Corner</h1>
      <p className="text-gray-400 text-center mb-6">Pilih game favoritmu dan mainkan!</p>

      {/* Tab Navigation */}
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setActiveTab('snake')}
          className={`px-6 py-3 rounded-lg font-semibold transition ${
            activeTab === 'snake'
              ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white'
              : 'bg-black/50 text-gray-400 hover:text-white border border-red-500/30'
          }`}
        >
          🐍 Snake Game
        </button>
        <button
          onClick={() => setActiveTab('tictactoe')}
          className={`px-6 py-3 rounded-lg font-semibold transition ${
            activeTab === 'tictactoe'
              ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white'
              : 'bg-black/50 text-gray-400 hover:text-white border border-red-500/30'
          }`}
        >
          ✖️ Tic Tac Toe
        </button>
      </div>

      {/* Game Container */}
      <div className="bg-black/30 border border-red-500/30 rounded-2xl p-6">
        {activeTab === 'snake' && <SnakeGame />}
        {activeTab === 'tictactoe' && <TicTacToe />}
      </div>
    </div>
  );
}