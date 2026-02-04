import type { Theme, NotificationType, AuthStatus } from './enums';

// Auth State Types
export interface AuthState {
  user: UserState | null;
  token: string | null;
  status: AuthStatus;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
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

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

// App State Types
export interface AppState {
  theme: Theme;
  isLoading: boolean;
  notification: NotificationState | null;
}

export interface NotificationState {
  type: NotificationType;
  message: string;
}
