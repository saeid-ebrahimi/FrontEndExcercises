import { memo } from 'react';
import { Badge } from '$components/badge';

interface PrimeGridProps {
  primes: number[];
}

export const PrimeGrid = memo(({ primes }: PrimeGridProps) => {
  return (
    <div className="overflow-auto rounded-lg border-2 border-slate-300 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-900 max-h-[600px]">
      <div className="flex flex-wrap gap-2">
        {primes.map((prime) => (
          <Badge key={prime} variant="success">
            {prime}
          </Badge>
        ))}
      </div>
    </div>
  );
});

PrimeGrid.displayName = 'PrimeGrid';
