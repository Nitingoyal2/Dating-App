import { configureStore } from '@reduxjs/toolkit';
import { authReducer, appReducer } from './slices';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    app: appReducer,
  },
  devTools: import.meta.env.DEV,
});

// Infer types from the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

