import { Button } from '$components/button';
import { Input } from '$components/input';
import { Card } from '$components/card';
import type { Calculation } from '../types';
import { calculate, getCalculationLabel, getCalculationDescription } from '../utilities/expensive-calculations';

interface CalculationCardProps {
  calculation: Calculation;
  onUpdate: (id: string, input: number) => void;
  onDelete: (id: string) => void;
}

export function CalculationCard({ calculation, onUpdate, onDelete }: CalculationCardProps) {
  // This expensive calculation runs on EVERY render of ANY card
  const result = calculate(calculation.type, calculation.input);

  const label = getCalculationLabel(calculation.type);
  const description = getCalculationDescription(calculation.type);

  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{label}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">{description}</p>
          </div>
          <Button
            size="small"
            variant="danger"
            onClick={() => onDelete(calculation.id)}
          >
            Delete
          </Button>
        </div>

        <div className="space-y-2">
          <Input
            type="number"
            label="Input number"
            value={calculation.input}
            onChange={(e) => onUpdate(calculation.id, Number(e.target.value))}
            min={1}
            max={calculation.type === 'fibonacci' ? 40 : 1000}
          />

          <div className="rounded-md bg-slate-100 p-4 dark:bg-slate-800">
            <div className="text-sm font-medium text-slate-600 dark:text-slate-400">Result:</div>
            <div className="mt-1 font-mono text-lg font-bold text-slate-900 dark:text-slate-100">
              {result}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
