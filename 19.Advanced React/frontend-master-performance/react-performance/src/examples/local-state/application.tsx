import { useState } from 'react';
import { Container } from '$components/container';
import { CounterWidgetWrong } from './components/counter-widget';
import { TextWidgetWrong } from './components/text-widget';
import { ColorWidgetWrong } from './components/color-widget';

function Application() {
  // ANTI-PATTERN: All widget state is lifted to the parent
  // Even though these widgets are completely independent!
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const [color, setColor] = useState('#3b82f6');

  // Every widget needs its own set of handlers
  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => setCount(count - 1);
  const resetCount = () => setCount(0);

  return (
    <Container className="my-8 space-y-8">
      <section>
        <h1 className="mb-2 text-3xl font-bold text-slate-900 dark:text-slate-100">
          Local State Demo
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Open your browser console and interact with any widget. Notice how ALL three widgets
          re-render even though they&apos;re completely independent? That&apos;s because their state is
          lifted to the parent.
        </p>
        <div className="mt-4 rounded-md bg-red-50 p-4 dark:bg-red-900/20">
          <p className="text-sm font-medium text-red-800 dark:text-red-200">
            ❌ Anti-pattern: State is lifted unnecessarily, causing all widgets to re-render
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <CounterWidgetWrong
          count={count}
          onIncrement={incrementCount}
          onDecrement={decrementCount}
          onReset={resetCount}
        />

        <TextWidgetWrong
          text={text}
          onTextChange={setText}
        />

        <ColorWidgetWrong
          color={color}
          onColorChange={setColor}
        />
      </section>

      <section className="rounded-md bg-slate-100 p-6 dark:bg-slate-800">
        <h2 className="mb-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
          The Problem
        </h2>
        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
          <li>• Each widget&apos;s state is stored in the parent component</li>
          <li>• When ANY widget&apos;s state changes, the parent re-renders</li>
          <li>• When the parent re-renders, ALL children re-render</li>
          <li>• This creates unnecessary work and hurts performance</li>
          <li>• It also makes the code harder to maintain and understand</li>
        </ul>
      </section>
    </Container>
  );
}

export default Application;
