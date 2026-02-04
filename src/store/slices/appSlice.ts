import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Theme, NotificationType } from '@/types';
import type { AppState, NotificationState } from '@/types';

const initialState: AppState = {
  theme: Theme.LIGHT,
  isLoading: false,
  notification: null,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
    toggleTheme: (state) => {
      state.theme = state.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
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
