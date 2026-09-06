import { useState, createContext, useContext } from 'react';
import { Container } from '$components/container';
import { UserProfileCard } from './components/user-profile-card';
import { ThemeSettingsCard } from './components/theme-settings-card';
import { NotificationSettingsCard } from './components/notification-settings-card';
import { StatsCard } from './components/stats-card';
import type {
  UserProfile,
  ThemeSettings,
  NotificationSettings,
  AppStats,
  AppContextValue,
} from './types';

// ❌ ANTI-PATTERN: Single context with everything
const AppContext = createContext<AppContextValue | null>(null);

function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
}

function AppProvider({ children }: { children: React.ReactNode }) {
  const [user] = useState<UserProfile>({
    id: 1,
    name: 'Jane Developer',
    email: 'jane@example.com',
    avatar: 'JD',
  });

  const [theme, setTheme] = useState<ThemeSettings>({
    mode: 'light',
    primaryColor: '#3b82f6',
    fontSize: 'medium',
  });

  const [notifications, setNotifications] = useState<NotificationSettings>({
    email: true,
    push: false,
    sms: false,
  });

  const [stats, setStats] = useState<AppStats>({
    pageViews: 12453,
    activeUsers: 342,
    lastUpdated: Date.now(),
  });

  // ❌ These functions are recreated on EVERY render
  const updateTheme = (updates: Partial<ThemeSettings>) => {
    setTheme((prev) => ({ ...prev, ...updates }));
  };

  const updateNotifications = (updates: Partial<NotificationSettings>) => {
    setNotifications((prev) => ({ ...prev, ...updates }));
  };

  const refreshStats = () => {
    setStats({
      pageViews: Math.floor(Math.random() * 100000),
      activeUsers: Math.floor(Math.random() * 1000),
      lastUpdated: Date.now(),
    });
  };

  // ❌ This object is created NEW on every render
  // Every state change causes ALL consumers to re-render!
  const value = {
    user,
    theme,
    notifications,
    stats,
    updateTheme,
    updateNotifications,
    refreshStats,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

function Dashboard() {
  const { user, theme, notifications, stats, updateTheme, updateNotifications, refreshStats } =
    useAppContext();

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <UserProfileCard user={user} />
      <ThemeSettingsCard theme={theme} onUpdateTheme={updateTheme} />
      <NotificationSettingsCard
        notifications={notifications}
        onUpdateNotifications={updateNotifications}
      />
      <StatsCard stats={stats} onRefresh={refreshStats} />
    </div>
  );
}

function Application() {
  return (
    <AppProvider>
      <Container className="my-8 space-y-8">
        <section>
          <h1 className="mb-2 text-3xl font-bold text-slate-900 dark:text-slate-100">
            Contextual
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Open your browser console and change any setting. Notice how ALL 4 cards re-render,
            even though each card only uses a small part of the context? That&apos;s the Context
            API re-render problem!
          </p>
          <div className="mt-4 rounded-md bg-red-50 p-4 dark:bg-red-900/20">
            <p className="text-sm font-medium text-red-800 dark:text-red-200">
              ❌ Single context with everything: ALL consumers re-render on ANY change
            </p>
          </div>
        </section>

        <Dashboard />

        <section className="rounded-md bg-slate-100 p-6 dark:bg-slate-800">
          <h2 className="mb-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
            The Problem
          </h2>
          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <li>• Single context holds user, theme, notifications, and stats</li>
            <li>• When ANY value changes, the context value reference changes</li>
            <li>• ALL components using useContext re-render, even if they don&apos;t use that value</li>
            <li>• Functions are recreated on every render (unstable references)</li>
            <li>• This scales poorly as the app grows</li>
          </ul>
        </section>
      </Container>
    </AppProvider>
  );
}

export default Application;
