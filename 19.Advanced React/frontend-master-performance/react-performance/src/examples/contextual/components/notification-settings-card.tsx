import { Card } from '$components/card';
import { Checkbox } from '$components/checkbox';
import type { NotificationSettings } from '../types';

interface NotificationSettingsCardProps {
  notifications: NotificationSettings;
  onUpdateNotifications: (notifications: Partial<NotificationSettings>) => void;
}

export function NotificationSettingsCard({
  notifications,
  onUpdateNotifications,
}: NotificationSettingsCardProps) {
  console.log('🔔 NotificationSettingsCard rendered');

  return (
    <Card className="p-6">
      <h2 className="mb-4 text-xl font-semibold text-slate-900 dark:text-slate-100">
        Notification Settings
      </h2>

      <div className="space-y-3">
        <div className="flex items-center space-x-3">
          <Checkbox
            id="email-notifications"
            checked={notifications.email}
            onChange={(e) => onUpdateNotifications({ email: e.target.checked })}
          />
          <label
            htmlFor="email-notifications"
            className="text-sm font-medium text-slate-700 dark:text-slate-300"
          >
            Email Notifications
          </label>
        </div>

        <div className="flex items-center space-x-3">
          <Checkbox
            id="push-notifications"
            checked={notifications.push}
            onChange={(e) => onUpdateNotifications({ push: e.target.checked })}
          />
          <label
            htmlFor="push-notifications"
            className="text-sm font-medium text-slate-700 dark:text-slate-300"
          >
            Push Notifications
          </label>
        </div>

        <div className="flex items-center space-x-3">
          <Checkbox
            id="sms-notifications"
            checked={notifications.sms}
            onChange={(e) => onUpdateNotifications({ sms: e.target.checked })}
          />
          <label
            htmlFor="sms-notifications"
            className="text-sm font-medium text-slate-700 dark:text-slate-300"
          >
            SMS Notifications
          </label>
        </div>

        <div className="mt-4 rounded-md bg-purple-50 p-3 dark:bg-purple-900/20">
          <p className="text-xs text-purple-800 dark:text-purple-200">
            This component only uses <strong>notifications</strong> from context
          </p>
        </div>
      </div>
    </Card>
  );
}
