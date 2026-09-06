import { useState } from 'react';
import { Container } from '$components/container';
import { Button } from '$components/button';
import { CalculationList } from './components/calculation-list';
import type { Calculation, CalculationType } from './types';

const CALCULATION_TYPES: CalculationType[] = ['fibonacci', 'factorial', 'primeFactors', 'sumOfDivisors'];

function Application() {
  const [calculations, setCalculations] = useState<Calculation[]>([
    { id: '1', type: 'fibonacci', input: 30 },
    { id: '2', type: 'factorial', input: 15 },
  ]);

  function addCalculation() {
    const randomType = CALCULATION_TYPES[Math.floor(Math.random() * CALCULATION_TYPES.length)];
    const defaultInput = randomType === 'fibonacci' ? 25 : 10;

    const newCalculation: Calculation = {
      id: Date.now().toString(),
      type: randomType,
      input: defaultInput,
    };

    setCalculations([...calculations, newCalculation]);
  }

  function updateCalculation(id: string, input: number) {
    setCalculations(
      calculations.map((calc) =>
        calc.id === id ? { ...calc, input } : calc
      )
    );
  }

  function deleteCalculation(id: string) {
    setCalculations(calculations.filter((calc) => calc.id !== id));
  }

  return (
    <Container className="my-8 space-y-8">
      <section>
        <h1 className="mb-2 text-3xl font-bold text-slate-900 dark:text-slate-100">
          Memo Mania
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Try changing a number in any card. Notice how ALL cards recalculate (check the console)?
          That&apos;s because we&apos;re not using memoization. Every state change triggers every expensive
          calculation to run again.
        </p>
        <div className="mt-4 rounded-md bg-yellow-50 p-4 dark:bg-yellow-900/20">
          <p className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
            💡 Open your browser console to see when calculations run
          </p>
        </div>
      </section>

      <section className="flex justify-between items-center">
        <div>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {calculations.length} {calculations.length === 1 ? 'calculation' : 'calculations'}
          </p>
        </div>
        <Button onClick={addCalculation}>
          Add Random Calculation
        </Button>
      </section>

      <section>
        <CalculationList
          calculations={calculations}
          onUpdate={updateCalculation}
          onDelete={deleteCalculation}
        />
      </section>
    </Container>
  );
}

export default Application;
