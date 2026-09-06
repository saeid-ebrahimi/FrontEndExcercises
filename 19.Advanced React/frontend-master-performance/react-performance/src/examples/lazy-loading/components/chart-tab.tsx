// This is another "heavy" component we want to lazy load
// It includes multiple chart visualizations

interface ChartData {
  label: string;
  value: number;
  color: string;
}

const salesData: ChartData[] = [
  { label: 'Jan', value: 45000, color: '#3b82f6' },
  { label: 'Feb', value: 52000, color: '#3b82f6' },
  { label: 'Mar', value: 48000, color: '#3b82f6' },
  { label: 'Apr', value: 61000, color: '#3b82f6' },
  { label: 'May', value: 58000, color: '#3b82f6' },
  { label: 'Jun', value: 67000, color: '#3b82f6' },
];

const revenueData: ChartData[] = [
  { label: 'Q1', value: 125000, color: '#10b981' },
  { label: 'Q2', value: 186000, color: '#10b981' },
  { label: 'Q3', value: 142000, color: '#10b981' },
  { label: 'Q4', value: 203000, color: '#10b981' },
];

function BarChart({ data, title }: { data: ChartData[]; title: string }) {
  const maxValue = Math.max(...data.map((d) => d.value));

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{title}</h3>
      <div className="space-y-3">
        {data.map((item) => {
          const percentage = (item.value / maxValue) * 100;
          return (
            <div key={item.label} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="font-medium text-slate-900 dark:text-slate-100">
                  {item.label}
                </span>
                <span className="text-slate-600 dark:text-slate-400">
                  ${item.value.toLocaleString()}
                </span>
              </div>
              <div className="h-8 w-full rounded-lg bg-slate-100 dark:bg-slate-800">
                <div
                  className="h-full rounded-lg transition-all duration-500"
                  style={{
                    width: `${percentage}%`,
                    backgroundColor: item.color,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function ChartTab() {
  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            Sales Analytics
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Visual data representations and charts
          </p>
        </div>
        <div className="rounded-lg bg-purple-50 px-3 py-1 dark:bg-purple-900/20">
          <p className="text-xs font-medium text-purple-800 dark:text-purple-200">
            Lazy Loaded
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-slate-200 p-6 dark:border-slate-700">
          <BarChart data={salesData} title="Monthly Sales" />
        </div>

        <div className="rounded-lg border border-slate-200 p-6 dark:border-slate-700">
          <BarChart data={revenueData} title="Quarterly Revenue" />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <p className="text-sm font-medium text-blue-900 dark:text-blue-200">Total Sales</p>
          <p className="mt-2 text-2xl font-bold text-blue-900 dark:text-blue-100">
            ${salesData.reduce((sum, item) => sum + item.value, 0).toLocaleString()}
          </p>
        </div>
        <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
          <p className="text-sm font-medium text-green-900 dark:text-green-200">Total Revenue</p>
          <p className="mt-2 text-2xl font-bold text-green-900 dark:text-green-100">
            ${revenueData.reduce((sum, item) => sum + item.value, 0).toLocaleString()}
          </p>
        </div>
        <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
          <p className="text-sm font-medium text-purple-900 dark:text-purple-200">Growth Rate</p>
          <p className="mt-2 text-2xl font-bold text-purple-900 dark:text-purple-100">+23.5%</p>
        </div>
      </div>

      <p className="text-sm text-slate-600 dark:text-slate-400">
        This component was only loaded when you clicked this tab. In a real app, this might include
        heavy charting libraries like Chart.js or D3.js that you don&apos;t want in your initial bundle.
      </p>
    </div>
  );
}
