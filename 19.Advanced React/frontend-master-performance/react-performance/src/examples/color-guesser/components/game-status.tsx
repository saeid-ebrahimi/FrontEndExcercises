import type { GameStatus } from '../types';

interface GameStatusProps {
  status: GameStatus;
}

export const GameStatusDisplay = ({ status }: GameStatusProps) => {
  console.log('GameStatusDisplay rendered');

  if (status === 'correct') {
    return (
      <div className="rounded-lg border-2 border-green-500 bg-green-50 p-4 text-center dark:bg-green-900/20">
        <p className="text-lg font-semibold text-green-700 dark:text-green-300">
          🎉 Correct! You guessed it!
        </p>
      </div>
    );
  }

  if (status === 'incorrect') {
    return (
      <div className="rounded-lg border-2 border-red-500 bg-red-50 p-4 text-center dark:bg-red-900/20">
        <p className="text-lg font-semibold text-red-700 dark:text-red-300">
          ❌ Nope, that's not right. Try again!
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-lg border-2 border-blue-500 bg-blue-50 p-4 text-center dark:bg-blue-900/20">
      <p className="text-lg font-semibold text-blue-700 dark:text-blue-300">
        🤔 Take your best guess!
      </p>
    </div>
  );
};
