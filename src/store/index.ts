import { configureStore, combineReducers } from '@reduxjs/toolkit';
import type { UnknownAction } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
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

// Redux Persist configuration
const persistConfig = {
  key: 'root',
  storage,
  // Only persist auth state (not app state like notifications)
  whitelist: ['auth'],
  // Transform: customize what gets persisted
  // We can add transforms here if needed
};

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store with persisted reducer
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: import.meta.env.DEV,
});

// Create persistor
export const persistor = persistStore(store);

// Infer types from the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
