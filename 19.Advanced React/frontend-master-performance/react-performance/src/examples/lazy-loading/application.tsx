import { useState } from 'react';
import { Container } from '$components/container';
import type { TabId } from './types';

// Eager imports - all loaded upfront
import { WelcomeTab } from './components/welcome-tab';
import { DataTableTab } from './components/data-table-tab';
import { ChartTab } from './components/chart-tab';

const tabs = [
  { id: 'welcome' as TabId, label: 'Welcome', description: 'Lightweight intro' },
  { id: 'data' as TabId, label: 'Data Table', description: '100 rows of data' },
  { id: 'chart' as TabId, label: 'Charts', description: 'Visual analytics' },
];

function Application() {
  const [activeTab, setActiveTab] = useState<TabId>('welcome');

  return (
    <Container className="my-8 space-y-8">
      <section>
        <h1 className="mb-2 text-3xl font-bold text-slate-900 dark:text-slate-100">
          Lazy Loading Demo
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Right now, ALL tab components are loaded upfront, even if you never visit them.
          Open the Network tab and refresh - you&apos;ll see everything loads immediately.
        </p>
        <div className="mt-4 rounded-md bg-red-50 p-4 dark:bg-red-900/20">
          <p className="text-sm font-medium text-red-800 dark:text-red-200">
            ❌ All components loaded eagerly: larger initial bundle, slower page load
          </p>
        </div>
      </section>

      <section>
        <div className="border-b border-slate-200 dark:border-slate-700">
          <div className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`border-b-2 pb-4 pt-2 text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-slate-600 hover:border-slate-300 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'
                }`}
              >
                <div className="flex flex-col items-start">
                  <span>{tab.label}</span>
                  <span className="text-xs font-normal text-slate-500 dark:text-slate-500">
                    {tab.description}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="pt-6">
          {activeTab === 'welcome' && <WelcomeTab />}
          {activeTab === 'data' && <DataTableTab />}
          {activeTab === 'chart' && <ChartTab />}
        </div>
      </section>

      <section className="rounded-md bg-slate-100 p-6 dark:bg-slate-800">
        <h2 className="mb-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
          The Problem
        </h2>
        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
          <li>• All tab components are imported with regular imports</li>
          <li>• JavaScript for ALL tabs is downloaded immediately</li>
          <li>• Users pay the cost for code they might never use</li>
          <li>• Initial bundle is unnecessarily large</li>
          <li>• Page load is slower than it needs to be</li>
        </ul>
      </section>
    </Container>
  );
}

export default Application;
