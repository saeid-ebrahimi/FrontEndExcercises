/**
 * Calculate all prime numbers up to a given limit using Sieve of Eratosthenes
 * Intentionally not optimized to demonstrate performance issues
 */
export function calculatePrimes(limit: number): number[] {
  if (limit < 2) return [];

  const startTime = performance.now();

  // Create array of all numbers from 2 to limit
  const numbers: boolean[] = new Array(limit + 1).fill(true);
  numbers[0] = false;
  numbers[1] = false;

  // Sieve of Eratosthenes
  for (let i = 2; i <= Math.sqrt(limit); i++) {
    if (numbers[i]) {
      for (let j = i * i; j <= limit; j += i) {
        numbers[j] = false;
      }
    }
  }

  // Collect all primes
  const primes: number[] = [];
  for (let i = 2; i <= limit; i++) {
    if (numbers[i]) {
      primes.push(i);
    }
  }

  console.log(`Calculated ${primes.length} primes in ${performance.now() - startTime}ms`);

  return primes;
}
