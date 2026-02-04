import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Theme, EffectiveTheme, NotificationType } from '@/types';
import type { AppState, NotificationState } from '@interfaces';

// Helper to get system preference
const getSystemTheme = (): EffectiveTheme => {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? EffectiveTheme.DARK
      : EffectiveTheme.LIGHT;
  }
  return EffectiveTheme.LIGHT;
};

// Helper to get effective theme based on preference
const resolveEffectiveTheme = (theme: Theme): EffectiveTheme => {
  if (theme === Theme.DEFAULT) {
    return getSystemTheme();
  }
  return theme as EffectiveTheme;
};

// Load saved theme from localStorage
const getSavedTheme = (): Theme => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('app-theme');
    if (saved === Theme.DARK || saved === Theme.LIGHT || saved === Theme.DEFAULT) {
      return saved;
    }
  }
  return Theme.DEFAULT; // Default to system preference
};

const savedTheme = getSavedTheme();

const initialState: AppState = {
  theme: savedTheme,
  effectiveTheme: resolveEffectiveTheme(savedTheme),
  isLoading: false,
  notification: null,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
      state.effectiveTheme = resolveEffectiveTheme(action.payload);
      // Persist to localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('app-theme', action.payload);
      }
    },
    setEffectiveTheme: (state, action: PayloadAction<EffectiveTheme>) => {
      // Only update effective theme (used when system preference changes)
      state.effectiveTheme = action.payload;
    },
    toggleTheme: (state) => {
      const newTheme = state.effectiveTheme === EffectiveTheme.LIGHT 
        ? Theme.DARK 
        : Theme.LIGHT;
      state.theme = newTheme;
      state.effectiveTheme = newTheme as EffectiveTheme;
      if (typeof window !== 'undefined') {
        localStorage.setItem('app-theme', newTheme);
      }
    },
    setAppLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    showNotification: (state, action: PayloadAction<NotificationState>) => {
      state.notification = action.payload;
    },
    showSuccess: (state, action: PayloadAction<string>) => {
      state.notification = {
        type: NotificationType.SUCCESS,
        message: action.payload,
      };
    },
    showError: (state, action: PayloadAction<string>) => {
      state.notification = {
        type: NotificationType.ERROR,
        message: action.payload,
      };
    },
    showWarning: (state, action: PayloadAction<string>) => {
      state.notification = {
        type: NotificationType.WARNING,
        message: action.payload,
      };
    },
    showInfo: (state, action: PayloadAction<string>) => {
      state.notification = {
        type: NotificationType.INFO,
        message: action.payload,
      };
    },
    clearNotification: (state) => {
      state.notification = null;
    },
  },
});

export const {
  setTheme,
  setEffectiveTheme,
  toggleTheme,
  setAppLoading,
  showNotification,
  showSuccess,
  showError,
  showWarning,
  showInfo,
  clearNotification,
} = appSlice.actions;

export default appSlice.reducer;
