import type { CalculationType } from '../types';

// Intentionally inefficient fibonacci to make memoization benefits visible
export function fibonacci(n: number): number {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Factorial calculation
export function factorial(n: number): number {
  if (n <= 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Prime factorization
export function primeFactors(n: number): number[] {
  const factors: number[] = [];
  let divisor = 2;
  let num = n;

  while (num >= 2) {
    if (num % divisor === 0) {
      factors.push(divisor);
      num = num / divisor;
    } else {
      divisor++;
    }
  }

  return factors;
}

// Sum of divisors (intentionally slow)
export function sumOfDivisors(n: number): number {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }
  return sum;
}

// Main calculation function
export function calculate(type: CalculationType, input: number): string {
  const startTime = performance.now();

  let result: string;

  switch (type) {
    case 'fibonacci': {
      const value = fibonacci(Math.min(input, 40)); // Cap at 40 to avoid freezing
      result = value.toLocaleString();
      break;
    }
    case 'factorial': {
      const value = factorial(Math.min(input, 170)); // Cap at 170 (max for JS numbers)
      result = value.toLocaleString();
      break;
    }
    case 'primeFactors': {
      const factors = primeFactors(input);
      result = factors.join(' × ');
      break;
    }
    case 'sumOfDivisors': {
      const value = sumOfDivisors(input);
      result = value.toLocaleString();
      break;
    }
  }

  const duration = performance.now() - startTime;
  console.log(`Calculated ${type}(${input}) in ${duration.toFixed(2)}ms`);

  return result;
}

export function getCalculationLabel(type: CalculationType): string {
  switch (type) {
    case 'fibonacci':
      return 'Fibonacci';
    case 'factorial':
      return 'Factorial';
    case 'primeFactors':
      return 'Prime Factors';
    case 'sumOfDivisors':
      return 'Sum of Divisors';
  }
}

export function getCalculationDescription(type: CalculationType): string {
  switch (type) {
    case 'fibonacci':
      return 'Nth number in the Fibonacci sequence';
    case 'factorial':
      return 'Product of all positive integers ≤ n';
    case 'primeFactors':
      return 'Prime numbers that multiply to n';
    case 'sumOfDivisors':
      return 'Sum of all divisors of n';
  }
}
