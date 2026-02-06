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
  name: string; // Maps to first_name from API
  email: string;
  first_name: string;
  age: number;
  gender: 'man' | 'woman';
  seeking: 'man' | 'woman';
  date_of_birth: string;
  photos: Array<{
    id: string;
    url: string;
    order: number;
    is_primary?: boolean;
  }>;
  latitude: number | null;
  longitude: number | null;
  created_at: string;
  // Optional fields for backward compatibility
  avatar?: string;
  bio?: string;
  location?: string;
  interests?: string[];
  // Allow any additional fields from API
  [key: string]: unknown;
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

// Auth Payload Types
export interface LoginSuccessPayload {
  user: UserState;
  token: string;
}

