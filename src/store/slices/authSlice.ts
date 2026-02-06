import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { AuthStatus } from '@/types';
import type { AuthState, UserState, LoginSuccessPayload } from '@interfaces';

// Initial state - Redux Persist will handle rehydration
const initialState: AuthState = {
  user: null,
  token: null,
  status: AuthStatus.UNAUTHENTICATED,
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
      // Redux Persist automatically handles persistence
    },

    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      // Redux Persist automatically handles persistence
    },

    loginSuccess: (state, action: PayloadAction<LoginSuccessPayload>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.status = AuthStatus.AUTHENTICATED;
      // Redux Persist automatically handles persistence
    },

    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.status = AuthStatus.UNAUTHENTICATED;
      // Redux Persist automatically clears persisted state
    },

    updateUser: (state, action: PayloadAction<Partial<UserState>>) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
        // Redux Persist automatically handles persistence
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
