import { Card } from '$components/card';
import { Button } from '$components/button';
import type { AppStats } from '../types';

interface StatsCardProps {
  stats: AppStats;
  onRefresh: () => void;
}

export function StatsCard({ stats, onRefresh }: StatsCardProps) {
  console.log('📊 StatsCard rendered');

  const timeAgo = Math.floor((Date.now() - stats.lastUpdated) / 1000);

  return (
    <Card className="p-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
          Live Statistics
        </h2>
        <Button onClick={onRefresh} size="small" variant="secondary">
          Refresh
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <p className="text-sm font-medium text-blue-900 dark:text-blue-200">Page Views</p>
          <p className="mt-2 text-2xl font-bold text-blue-900 dark:text-blue-100">
            {stats.pageViews.toLocaleString()}
          </p>
        </div>

        <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
          <p className="text-sm font-medium text-green-900 dark:text-green-200">Active Users</p>
          <p className="mt-2 text-2xl font-bold text-green-900 dark:text-green-100">
            {stats.activeUsers.toLocaleString()}
          </p>
        </div>
      </div>

      <div className="mt-4 rounded-md bg-slate-100 p-3 dark:bg-slate-800">
        <p className="text-xs text-slate-600 dark:text-slate-400">
          This component only uses <strong>stats</strong> from context
        </p>
        <p className="mt-1 text-xs text-slate-500 dark:text-slate-500">
          Updated {timeAgo}s ago
        </p>
      </div>
    </Card>
  );
}
