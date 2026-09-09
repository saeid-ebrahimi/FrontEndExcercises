import { Card } from '$components/card';
import { Button } from '$components/button';
import { useCallback, useMemo, useState } from 'react';

const useCounter = (initial = 0) => {
  const [count, setCount] = useState(initial); // set count is use useCallback internally
  const increment = useCallback(() => setCount(prev => prev + 1), []);
  const decrement = useCallback(() => setCount(prev => prev - 1), []);
  const reset = useCallback(() => setCount(0), []);

  return useMemo(() => ({ count, increment, decrement, reset }), [count, increment, decrement, reset])
}

export function CounterWidget() {
  const { count, increment, decrement, reset } = useCounter()

  return (
    <Card className="p-6">
      <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100">
        Counter Widget
      </h3>
      <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">
        A simple counter. Notice this re-renders when ANY widget updates because state is in the parent.
      </p>

      <div className="flex items-center justify-center space-x-4">
        <Button onClick={decrement} variant="secondary">
          −
        </Button>
        <span className="text-3xl font-bold text-slate-900 dark:text-slate-100">{count}</span>
        <Button onClick={increment} variant="secondary">
          +
        </Button>
      </div>

      <div className="mt-4 flex justify-center">
        <Button onClick={reset} variant="secondary" size="small">
          Reset
        </Button>
      </div>
    </Card>
  );
}
