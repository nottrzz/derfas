import { useEffect, useRef, useState } from 'react';
import { RefreshCw, Trophy, ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Pause, Play } from 'lucide-react';

const GRID_SIZE = 20;
const CELL_SIZE = 20; // px, akan diskalakan dengan CSS
const INITIAL_SNAKE = [
  [10, 10],
  [9, 10],
  [8, 10],
];
const INITIAL_DIRECTION = 'RIGHT';
const INITIAL_FOOD = [15, 15];

type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';

export default function SnakeGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [direction, setDirection] = useState<Direction>(INITIAL_DIRECTION);
  const [food, setFood] = useState(INITIAL_FOOD);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const gameLoopRef = useRef<number>();
  const [canvasSize, setCanvasSize] = useState(400); // default, akan diupdate

  // Load high score
  useEffect(() => {
    const saved = localStorage.getItem('snakeHighScore');
    if (saved) setHighScore(parseInt(saved));
  }, []);

  // Save high score
  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem('snakeHighScore', score.toString());
    }
  }, [score, highScore]);

  // Game loop
  useEffect(() => {
    if (gameOver || isPaused) return;

    const moveSnake = () => {
      setSnake(prevSnake => {
        const head = prevSnake[0];
        let newHead = [...head];

        switch (direction) {
          case 'RIGHT': newHead[0] += 1; break;
          case 'LEFT': newHead[0] -= 1; break;
          case 'UP': newHead[1] -= 1; break;
          case 'DOWN': newHead[1] += 1; break;
        }

        if (newHead[0] < 0 || newHead[0] >= GRID_SIZE || newHead[1] < 0 || newHead[1] >= GRID_SIZE) {
          setGameOver(true);
          return prevSnake;
        }

        if (prevSnake.some(segment => segment[0] === newHead[0] && segment[1] === newHead[1])) {
          setGameOver(true);
          return prevSnake;
        }

        if (newHead[0] === food[0] && newHead[1] === food[1]) {
          setScore(s => s + 1);
          generateFood(prevSnake);
          return [newHead, ...prevSnake]; 
        } else {
          return [newHead, ...prevSnake.slice(0, -1)]; 
        }
      });
    };

    const interval = setInterval(moveSnake, 250);
    return () => clearInterval(interval);
  }, [direction, food, gameOver, isPaused]);

  const generateFood = (currentSnake: number[][]) => {
    let newFood: number[];
    do {
      newFood = [
        Math.floor(Math.random() * GRID_SIZE),
        Math.floor(Math.random() * GRID_SIZE),
      ];
    } while (currentSnake.some(segment => segment[0] === newFood[0] && segment[1] === newFood[1]));
    setFood(newFood);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameOver) return;
      e.preventDefault();
      switch (e.key) {
        case 'ArrowUp': if (direction !== 'DOWN') setDirection('UP'); break;
        case 'ArrowDown': if (direction !== 'UP') setDirection('DOWN'); break;
        case 'ArrowLeft': if (direction !== 'RIGHT') setDirection('LEFT'); break;
        case 'ArrowRight': if (direction !== 'LEFT') setDirection('RIGHT'); break;
        case ' ': setIsPaused(p => !p); break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [direction, gameOver]);

  const handleDirection = (newDir: Direction) => {
    if (gameOver || isPaused) return;
    if (
      (newDir === 'UP' && direction !== 'DOWN') ||
      (newDir === 'DOWN' && direction !== 'UP') ||
      (newDir === 'LEFT' && direction !== 'RIGHT') ||
      (newDir === 'RIGHT' && direction !== 'LEFT')
    ) {
      setDirection(newDir);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = '#333';
    ctx.lineWidth = 0.5;
    for (let i = 0; i <= GRID_SIZE; i++) {
      ctx.beginPath();
      ctx.moveTo(i * CELL_SIZE, 0);
      ctx.lineTo(i * CELL_SIZE, canvas.height);
      ctx.stroke();
      ctx.moveTo(0, i * CELL_SIZE);
      ctx.lineTo(canvas.width, i * CELL_SIZE);
      ctx.stroke();
    }

    // Draw food
    ctx.fillStyle = '#f97316';
    ctx.beginPath();
    ctx.arc(food[0] * CELL_SIZE + CELL_SIZE/2, food[1] * CELL_SIZE + CELL_SIZE/2, CELL_SIZE/2 - 2, 0, 2 * Math.PI);
    ctx.fill();

    // Draw snake
    snake.forEach((segment, index) => {
      const [x, y] = segment;
      const isHead = index === 0;
      ctx.fillStyle = isHead ? '#ef4444' : '#f97316';
      ctx.fillRect(x * CELL_SIZE + 1, y * CELL_SIZE + 1, CELL_SIZE - 2, CELL_SIZE - 2);
    });

    // Game over overlay
    if (gameOver) {
      ctx.fillStyle = 'rgba(0,0,0,0.7)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'white';
      ctx.font = 'bold 24px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('GAME OVER', canvas.width/2, canvas.height/2);
    }

    if (isPaused && !gameOver) {
      ctx.fillStyle = 'rgba(0,0,0,0.5)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'white';
      ctx.font = 'bold 24px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('PAUSED', canvas.width/2, canvas.height/2);
    }
  }, [snake, food, gameOver, isPaused]);

  // Adjust canvas size based on container width (for mobile)
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.clientWidth;
        const newSize = Math.min(containerWidth, 400); // max 400px
        setCanvasSize(newSize);
        if (canvasRef.current) {
          canvasRef.current.style.width = `${newSize}px`;
          canvasRef.current.style.height = `${newSize}px`;
        }
      }
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const restartGame = () => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    setFood(INITIAL_FOOD);
    setGameOver(false);
    setScore(0);
    setIsPaused(false);
  };

  return (
    <div className="max-w-lg mx-auto text-center">
      <h2 className="text-2xl font-bold mb-2 text-gradient">🐍 Snake Game</h2>
      
      {/* Score and Controls */}
      <div className="flex justify-between items-center mb-3 text-base">
        <div className="text-red-500">Skor: {score}</div>
        <div className="text-orange-500 flex items-center gap-1">
          <Trophy size={16} /> High: {highScore}
        </div>
        <button
          onClick={restartGame}
          className="flex items-center gap-1 bg-gradient-to-r from-red-600 to-orange-600 text-white px-3 py-1 rounded-lg text-sm hover:from-red-700 hover:to-orange-700 transition"
        >
          <RefreshCw size={14} /> Restart
        </button>
      </div>

      {/* Canvas Container */}
      <div ref={containerRef} className="flex justify-center">
        <canvas
          ref={canvasRef}
          width={GRID_SIZE * CELL_SIZE}
          height={GRID_SIZE * CELL_SIZE}
          className="border-2 border-red-500/50 rounded-lg bg-black/80"
          style={{ width: canvasSize, height: canvasSize }}
        />
      </div>

      {/* Touch Controls for Mobile */}
      <div className="mt-4 grid grid-cols-3 gap-2 max-w-xs mx-auto">
        <div></div>
        <button
          onClick={() => handleDirection('UP')}
          className="bg-black/50 border border-red-500/30 rounded-lg p-3 hover:bg-red-500/20 active:bg-red-500/30 transition"
          aria-label="Up"
        >
          <ArrowUp className="mx-auto text-red-500" size={24} />
        </button>
        <div></div>
        
        <button
          onClick={() => handleDirection('LEFT')}
          className="bg-black/50 border border-red-500/30 rounded-lg p-3 hover:bg-red-500/20 active:bg-red-500/30 transition"
          aria-label="Left"
        >
          <ArrowLeft className="mx-auto text-orange-500" size={24} />
        </button>
        
        <button
          onClick={() => handleDirection('DOWN')}
          className="bg-black/50 border border-red-500/30 rounded-lg p-3 hover:bg-red-500/20 active:bg-red-500/30 transition"
          aria-label="Down"
        >
          <ArrowDown className="mx-auto text-red-500" size={24} />
        </button>
        
        <button
          onClick={() => handleDirection('RIGHT')}
          className="bg-black/50 border border-red-500/30 rounded-lg p-3 hover:bg-red-500/20 active:bg-red-500/30 transition"
          aria-label="Right"
        >
          <ArrowRight className="mx-auto text-orange-500" size={24} />
        </button>

        <div></div>
        <button
          onClick={() => setIsPaused(p => !p)}
          className="col-span-3 mt-2 bg-black/50 border border-red-500/30 rounded-lg p-2 hover:bg-red-500/20 transition text-sm text-gray-300"
        >
          {isPaused ? <Play size={18} className="inline mr-1" /> : <Pause size={18} className="inline mr-1" />}
          {isPaused ? 'Lanjut' : 'Pause'}
        </button>
      </div>

      <p className="mt-4 text-gray-400 text-xs">
        Gesek atau tekan tombol. Keyboard juga bisa.
      </p>
    </div>
  );
}