import { useTheme } from '@hooks';
import { Theme } from '@/types';
import type { ThemeToggleProps } from '@interfaces';
import { SunIcon, MoonIcon, MonitorIcon } from '@svg';
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
          <SunIcon size={18} />
        </button>
        <button
          className={`theme-icon-btn ${theme === Theme.DEFAULT ? 'active' : ''}`}
          onClick={() => changeTheme(Theme.DEFAULT)}
          title="System preference"
          aria-label="Use system preference"
        >
          <MonitorIcon size={18} />
        </button>
        <button
          className={`theme-icon-btn ${theme === Theme.DARK ? 'active' : ''}`}
          onClick={() => changeTheme(Theme.DARK)}
          title="Dark mode"
          aria-label="Switch to dark mode"
        >
          <MoonIcon size={18} />
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

