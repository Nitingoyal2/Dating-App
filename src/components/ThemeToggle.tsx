import { useTheme } from '@hooks';
import { Theme } from '@/types';
import type { ThemeToggleProps } from '@interfaces';
import './ThemeToggle.css';

export const ThemeToggle = ({ showLabel = true, variant = 'buttons' }: ThemeToggleProps) => {
  const { theme, effectiveTheme, changeTheme, isDark } = useTheme();

  if (variant === 'icons') {
    return (
      <div className="theme-toggle-icons">
        <button
          className={`theme-icon-btn ${theme === Theme.LIGHT ? 'active' : ''}`}
          onClick={() => changeTheme(Theme.LIGHT)}
          title="Light mode"
          aria-label="Switch to light mode"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        </button>
        <button
          className={`theme-icon-btn ${theme === Theme.DEFAULT ? 'active' : ''}`}
          onClick={() => changeTheme(Theme.DEFAULT)}
          title="System preference"
          aria-label="Use system preference"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
          </svg>
        </button>
        <button
          className={`theme-icon-btn ${theme === Theme.DARK ? 'active' : ''}`}
          onClick={() => changeTheme(Theme.DARK)}
          title="Dark mode"
          aria-label="Switch to dark mode"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </button>
      </div>
    );
  }

  if (variant === 'dropdown') {
    return (
      <div className="theme-toggle-dropdown">
        {showLabel && <span className="theme-label">Theme</span>}
        <select
          value={theme}
          onChange={(e) => changeTheme(e.target.value as Theme)}
          className="theme-select"
          aria-label="Select theme"
        >
          <option value={Theme.LIGHT}>☀️ Light</option>
          <option value={Theme.DARK}>🌙 Dark</option>
          <option value={Theme.DEFAULT}>🖥️ System</option>
        </select>
      </div>
    );
  }

  // Default: buttons variant
  return (
    <div className="theme-toggle">
      {showLabel && <span className="theme-label">Theme</span>}
      <div className="theme-buttons">
        <button
          className={`theme-btn ${theme === Theme.LIGHT ? 'active' : ''}`}
          onClick={() => changeTheme(Theme.LIGHT)}
          aria-label="Switch to light mode"
        >
          <span className="theme-btn-icon">☀️</span>
          <span className="theme-btn-text">Light</span>
        </button>
        <button
          className={`theme-btn ${theme === Theme.DEFAULT ? 'active' : ''}`}
          onClick={() => changeTheme(Theme.DEFAULT)}
          aria-label="Use system preference"
        >
          <span className="theme-btn-icon">🖥️</span>
          <span className="theme-btn-text">System</span>
        </button>
        <button
          className={`theme-btn ${theme === Theme.DARK ? 'active' : ''}`}
          onClick={() => changeTheme(Theme.DARK)}
          aria-label="Switch to dark mode"
        >
          <span className="theme-btn-icon">🌙</span>
          <span className="theme-btn-text">Dark</span>
        </button>
      </div>
      {theme === Theme.DEFAULT && (
        <span className="theme-current">
          Currently using {isDark ? 'dark' : 'light'} (system)
        </span>
      )}
    </div>
  );
};

export default ThemeToggle;

