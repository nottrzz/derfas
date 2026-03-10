import { useState } from 'react';
import { RefreshCw } from 'lucide-react';

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (index: number) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  const status = winner 
    ? `Winner: ${winner}` 
    : board.every(Boolean) 
    ? "Draw!" 
    : `Next: ${isXNext ? 'X' : 'O'}`;

  return (
    <div className="max-w-md mx-auto text-center">
      <h2 className="text-2xl font-bold mb-4 text-gradient">Tic Tac Toe</h2>
      <div className="mb-4 text-lg">
        <span className={winner ? 'text-orange-500' : 'text-red-500'}>{status}</span>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-4">
        {board.map((cell, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className={`h-20 text-3xl font-bold rounded-lg transition-all
              ${cell === 'X' ? 'text-red-500' : cell === 'O' ? 'text-orange-500' : 'text-gray-600'}
              ${!cell && !winner ? 'hover:bg-red-500/20 cursor-pointer' : 'cursor-not-allowed'}
              bg-black/50 border border-red-500/30`}
            disabled={!!cell || !!winner}
          >
            {cell}
          </button>
        ))}
      </div>

      <button
        onClick={resetGame}
        className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-600 text-white px-4 py-2 rounded-lg hover:from-red-700 hover:to-orange-700 transition"
      >
        <RefreshCw size={18} /> Reset Game
      </button>
    </div>
  );
}

function calculateWinner(squares: (string | null)[]) {
  const lines = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ];
  for (let line of lines) {
    const [a,b,c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}