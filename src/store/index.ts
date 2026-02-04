import { configureStore, combineReducers } from '@reduxjs/toolkit';
import type { UnknownAction } from '@reduxjs/toolkit';
import { authReducer, appReducer } from './slices';

// Combine all reducers
const appCombinedReducer = combineReducers({
  auth: authReducer,
  app: appReducer,
});

// Type for combined state
type CombinedState = ReturnType<typeof appCombinedReducer>;

// Root reducer that resets state on logout (except theme)
const rootReducer = (state: CombinedState | undefined, action: UnknownAction): CombinedState => {
  // Reset all state on logout, but preserve theme preferences
  if (action.type === 'auth/logout') {
    const themeState = state?.app ? {
      theme: state.app.theme,
      effectiveTheme: state.app.effectiveTheme,
      isLoading: false,
      notification: null,
    } : undefined;

    return appCombinedReducer(
      { app: themeState } as Partial<CombinedState> as CombinedState,
      action
    );
  }

  return appCombinedReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  devTools: import.meta.env.DEV,
});

// Infer types from the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
