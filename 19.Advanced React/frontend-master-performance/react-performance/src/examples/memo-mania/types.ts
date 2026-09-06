export type CalculationType = 'fibonacci' | 'factorial' | 'primeFactors' | 'sumOfDivisors';

export interface Calculation {
  id: string;
  type: CalculationType;
  input: number;
}

export interface CalculationResult {
  value: string;
  duration: number;
}
