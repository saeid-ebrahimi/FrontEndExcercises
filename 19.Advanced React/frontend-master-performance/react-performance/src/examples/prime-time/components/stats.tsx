import { memo } from 'react';
import { Card, CardContent } from '$components/card';

interface StatsProps {
  count: number;
  largestPrime: number;
  limit: number;
}

export const Stats = memo(({ count, largestPrime, limit }: StatsProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <Card>
        <CardContent className="p-4">
          <div className="text-sm text-slate-600 dark:text-slate-400">Primes Found</div>
          <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            {count.toLocaleString()}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <div className="text-sm text-slate-600 dark:text-slate-400">Largest Prime</div>
          <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            {largestPrime.toLocaleString()}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <div className="text-sm text-slate-600 dark:text-slate-400">Search Limit</div>
          <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            {limit.toLocaleString()}
          </div>
        </CardContent>
      </Card>
    </div>
  );
});

Stats.displayName = 'Stats';
