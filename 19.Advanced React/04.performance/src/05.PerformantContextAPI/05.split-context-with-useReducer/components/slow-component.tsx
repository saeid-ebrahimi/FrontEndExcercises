// Helper function to pause execution for a given number of milliseconds
const pauseExecution = (milliseconds: number) => {
  const startTime = Date.now();
  let currentTime = startTime;

  while (currentTime - startTime < milliseconds) currentTime = Date.now();
};

// Component that simulates a slow operation
export const SlowComponent = () => {
  pauseExecution(500); // Pause for 500 milliseconds
  return null;
};

// Another component that simulates a slow operation
export const AnotherSlowComponent = () => {
  pauseExecution(700); // Pause for 500 milliseconds
  return null;
};
