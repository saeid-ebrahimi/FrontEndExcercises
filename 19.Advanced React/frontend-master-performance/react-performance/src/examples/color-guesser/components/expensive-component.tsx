import { beBusy } from '$/common/gremlins/be-busy';

/**
 * An intentionally expensive component that simulates heavy computation.
 * This component should only re-render when absolutely necessary!
 */
export const ExpensiveComponent = () => {
  // Simulate expensive work
  beBusy(100);

  console.log('💰 ExpensiveComponent rendered - this is EXPENSIVE!');

  return (
    <div className="animate-pulse rounded-lg border-2 border-orange-500 bg-orange-50 p-4 text-center dark:bg-orange-900/20">
      <p className="font-bold text-orange-700 dark:text-orange-300">
        💰 I am an expensive component! 💰
      </p>
      <p className="text-sm text-orange-600 dark:text-orange-400">
        (Check the console - I should only render when necessary)
      </p>
    </div>
  );
};
