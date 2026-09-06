import type { Calculation } from '../types';
import { CalculationCard } from './calculation-card';

interface CalculationListProps {
  calculations: Calculation[];
  onUpdate: (id: string, input: number) => void;
  onDelete: (id: string) => void;
}

export function CalculationList({ calculations, onUpdate, onDelete }: CalculationListProps) {
  if (calculations.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-slate-600 dark:text-slate-400">
          No calculations yet. Add one to get started!
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {calculations.map((calculation) => (
        <CalculationCard
          key={calculation.id}
          calculation={calculation}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
