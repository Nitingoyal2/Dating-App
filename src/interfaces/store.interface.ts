import type { Theme, EffectiveTheme, NotificationType, AuthStatus } from '@/types/enums';

// Auth State
export interface AuthState {
  user: UserState | null;
  token: string | null;
  status: AuthStatus;
  isAuthenticated: boolean;
}

export interface UserState {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  bio?: string;
  age?: number;
  location?: string;
  interests?: string[];
}

// App State
export interface AppState {
  theme: Theme;
  effectiveTheme: EffectiveTheme;
  isLoading: boolean;
  notification: NotificationState | null;
}

export interface NotificationState {
  type: NotificationType;
  message: string;
}

