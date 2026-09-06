import { Card } from '$components/card';
import type { UserProfile } from '../types';

interface UserProfileCardProps {
  user: UserProfile;
}

export function UserProfileCard({ user }: UserProfileCardProps) {
  console.log('👤 UserProfileCard rendered');

  return (
    <Card className="p-6">
      <h2 className="mb-4 text-xl font-semibold text-slate-900 dark:text-slate-100">
        User Profile
      </h2>
      <div className="flex items-center space-x-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-2xl font-bold text-blue-600 dark:bg-blue-900 dark:text-blue-200">
          {user.name.charAt(0)}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            {user.name}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">{user.email}</p>
        </div>
      </div>
      <div className="mt-4 rounded-md bg-slate-100 p-3 dark:bg-slate-800">
        <p className="text-xs text-slate-600 dark:text-slate-400">
          This component only uses <strong>user</strong> from context
        </p>
      </div>
    </Card>
  );
}
