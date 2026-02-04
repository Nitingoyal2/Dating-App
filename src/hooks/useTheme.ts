import { useEffect, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setTheme, setEffectiveTheme } from '@/store/slices/appSlice';
import { Theme, EffectiveTheme } from '@/types';

/**
 * Custom hook to manage theme state and system preference detection
 */
export const useTheme = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.app.theme);
  const effectiveTheme = useAppSelector((state) => state.app.effectiveTheme);

  // Update effective theme when system preference changes (only if theme is DEFAULT)
  useEffect(() => {
    if (theme !== Theme.DEFAULT) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e: MediaQueryListEvent) => {
      dispatch(setEffectiveTheme(e.matches ? EffectiveTheme.DARK : EffectiveTheme.LIGHT));
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [theme, dispatch]);

  // Apply theme class to document
  useEffect(() => {
    const root = document.documentElement;
    
    // Remove existing theme classes
    root.classList.remove('theme-light', 'theme-dark');
    
    // Add current theme class
    root.classList.add(`theme-${effectiveTheme}`);
    
    // Also set data attribute for CSS targeting
    root.setAttribute('data-theme', effectiveTheme);
  }, [effectiveTheme]);

  const changeTheme = useCallback((newTheme: Theme) => {
    dispatch(setTheme(newTheme));
  }, [dispatch]);

  const setLightTheme = useCallback(() => {
    dispatch(setTheme(Theme.LIGHT));
  }, [dispatch]);

  const setDarkTheme = useCallback(() => {
    dispatch(setTheme(Theme.DARK));
  }, [dispatch]);

  const setSystemTheme = useCallback(() => {
    dispatch(setTheme(Theme.DEFAULT));
  }, [dispatch]);

  return {
    theme,           // User's preference (light, dark, or default)
    effectiveTheme,  // Actual applied theme (light or dark)
    isDark: effectiveTheme === EffectiveTheme.DARK,
    isLight: effectiveTheme === EffectiveTheme.LIGHT,
    isSystemPreference: theme === Theme.DEFAULT,
    changeTheme,
    setLightTheme,
    setDarkTheme,
    setSystemTheme,
  };
};

