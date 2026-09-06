export interface UserProfile {
  id: number;
  name: string;
  email: string;
  avatar: string;
}

export interface ThemeSettings {
  mode: 'light' | 'dark';
  primaryColor: string;
  fontSize: 'small' | 'medium' | 'large';
}

export interface NotificationSettings {
  email: boolean;
  push: boolean;
  sms: boolean;
}

export interface AppStats {
  pageViews: number;
  activeUsers: number;
  lastUpdated: number;
}

// Combined context value (the problematic approach)
export interface AppContextValue {
  user: UserProfile;
  theme: ThemeSettings;
  notifications: NotificationSettings;
  stats: AppStats;
  updateTheme: (theme: Partial<ThemeSettings>) => void;
  updateNotifications: (notifications: Partial<NotificationSettings>) => void;
  refreshStats: () => void;
}
