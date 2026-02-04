import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { AuthStatus } from '@/types';
import type { AuthState, UserState, LoginSuccessPayload } from '@interfaces';

const initialState: AuthState = {
  user: null,
  token: null,
  status: AuthStatus.IDLE,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.status = AuthStatus.AUTHENTICATED;
    },

    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },

    loginSuccess: (state, action: PayloadAction<LoginSuccessPayload>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.status = AuthStatus.AUTHENTICATED;
    },

    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.status = AuthStatus.UNAUTHENTICATED;
    },

    updateUser: (state, action: PayloadAction<Partial<UserState>>) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },
  },
});

export const {
  setUser,
  setToken,
  loginSuccess,
  logout,
  updateUser,
} = authSlice.actions;

export default authSlice.reducer;
