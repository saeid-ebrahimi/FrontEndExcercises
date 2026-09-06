import { useState } from 'react';
import { Container } from '$components/container';
import { Button } from '$components/button';
import { ColorSwatch } from './components/color-swatch';
import { GameInput } from './components/game-input';
import { GameStatusDisplay } from './components/game-status';
import { ExpensiveComponent } from './components/expensive-component';
import { generateRandomColor } from './utilities/generate-random-color';
import type { GameStatus } from './types';

function Application() {
  const [correctAnswer, setCorrectAnswer] = useState(generateRandomColor());
  const [colorGuess, setColorGuess] = useState('');
  const [hasGuessed, setHasGuessed] = useState(false);
  const [isWinner, setIsWinner] = useState(false);

  console.log('Application rendered');

  // ❌ CRITICAL ANTI-PATTERN: Setting state during render!
  // This violates React's rules and can cause infinite loops
  if (hasGuessed && correctAnswer === colorGuess) {
    setIsWinner(true);
  }

  // ❌ Computing status on every render (not memoized)
  const gameStatus: GameStatus = hasGuessed
    ? isWinner
      ? 'correct'
      : 'incorrect'
    : 'waiting';

  // ❌ New function created on every render
  function handleGuess() {
    setHasGuessed(true);
  }

  // ❌ New function created on every render
  function handleReset() {
    setCorrectAnswer(generateRandomColor());
    setHasGuessed(false);
    setColorGuess('');
    setIsWinner(false);
  }

  // ❌ New function created on every render
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setColorGuess(e.target.value.toUpperCase());
  }

  return (
    <Container className="my-8 space-y-8">
      <section>
        <h1 className="mb-2 text-3xl font-bold text-slate-900 dark:text-slate-100">
          Color Guesser
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Look at the color above and try to guess its hex code! Open the browser console to see
          the performance problems.
        </p>
        <div className="mt-4 rounded-md bg-red-50 p-4 dark:bg-red-900/20">
          <p className="text-sm font-medium text-red-800 dark:text-red-200">
            ⚠️ This version has critical performance issues and anti-patterns!
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-md space-y-6">
        <ColorSwatch color={correctAnswer} />

        <GameInput
          value={colorGuess}
          onChange={handleInputChange}
          onSubmit={handleGuess}
          disabled={hasGuessed}
        />

        <GameStatusDisplay status={gameStatus} />

        <div className="flex gap-2">
          <Button onClick={handleReset} className="flex-1">
            New Color
          </Button>
          {hasGuessed && !isWinner && (
            <Button onClick={() => setHasGuessed(false)} variant="secondary" className="flex-1">
              Try Again
            </Button>
          )}
        </div>

        <ExpensiveComponent />
      </section>

      <section className="rounded-md bg-slate-100 p-6 dark:bg-slate-800">
        <h2 className="mb-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
          Problems in This Code
        </h2>
        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
          <li>• Setting state during render (causes infinite loops/warnings)</li>
          <li>• Unnecessary state that could be derived</li>
          <li>• No memoization - components re-render unnecessarily</li>
          <li>• Inline functions break React.memo</li>
          <li>• ExpensiveComponent re-renders on every state change</li>
        </ul>
      </section>
    </Container>
  );
}

export default Application;
