import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { AuthStatus } from '@/types';
import type { AuthState, UserState } from '@/types';

const initialState: AuthState = {
  user: null,
  token: null,
  status: AuthStatus.IDLE,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
      state.status = action.payload ? AuthStatus.LOADING : AuthStatus.IDLE;
    },
    setUser: (state, action: PayloadAction<UserState>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.status = AuthStatus.AUTHENTICATED;
      state.error = null;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    loginSuccess: (state, action: PayloadAction<{ user: UserState; token: string }>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.isLoading = false;
      state.status = AuthStatus.AUTHENTICATED;
      state.error = null;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
      state.isAuthenticated = false;
      state.status = AuthStatus.ERROR;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.status = AuthStatus.UNAUTHENTICATED;
      state.error = null;
    },
    clearError: (state) => {
      state.error = null;
      if (state.status === AuthStatus.ERROR) {
        state.status = AuthStatus.IDLE;
      }
    },
    updateUser: (state, action: PayloadAction<Partial<UserState>>) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },
  },
});

export const {
  setLoading,
  setUser,
  setToken,
  loginSuccess,
  loginFailure,
  logout,
  clearError,
  updateUser,
} = authSlice.actions;

export default authSlice.reducer;
