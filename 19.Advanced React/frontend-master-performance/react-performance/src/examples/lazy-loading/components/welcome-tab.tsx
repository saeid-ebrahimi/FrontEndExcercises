export function WelcomeTab() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
        Welcome! 👋
      </h2>
      <p className="text-slate-600 dark:text-slate-400">
        This is a lightweight tab that loads immediately. It&apos;s small and simple, so there&apos;s no
        reason to lazy load it.
      </p>
      <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
        <p className="text-sm font-medium text-green-800 dark:text-green-200">
          ✅ This component is always included in the main bundle
        </p>
      </div>
      <p className="text-sm text-slate-600 dark:text-slate-400">
        Switch to the other tabs to see lazy loading in action. Open your Network tab in DevTools
        to see the dynamic chunks being loaded on demand.
      </p>
    </div>
  );
}
