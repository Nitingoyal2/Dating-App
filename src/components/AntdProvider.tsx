import { ConfigProvider, theme as antdTheme } from 'antd';
import { useAppSelector } from '@store/hooks';
import { EffectiveTheme } from '@/types';
import type { ReactNode } from 'react';

interface AntdProviderProps {
  children: ReactNode;
}

/**
 * Ant Design theme provider that syncs with the app's theme state
 */
const AntdProvider = ({ children }: AntdProviderProps) => {
  const effectiveTheme = useAppSelector((state) => state.app.effectiveTheme);
  const isDark = effectiveTheme === EffectiveTheme.DARK;

  return (
    <ConfigProvider
      theme={{
        algorithm: isDark ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
        token: {
          // Primary colors matching your app's accent colors
          colorPrimary: isDark ? '#8b7cf7' : '#6C5CE7',
          colorLink: isDark ? '#b983ff' : '#a855f7',
          colorSuccess: isDark ? '#34d399' : '#10b981',
          colorWarning: isDark ? '#fbbf24' : '#f59e0b',
          colorError: isDark ? '#f87171' : '#ef4444',
          colorInfo: isDark ? '#60a5fa' : '#3b82f6',
          
          // Border radius matching your design
          borderRadius: 12,
          borderRadiusLG: 16,
          borderRadiusSM: 8,
          
          // Font family
          fontFamily: "'Poppins', sans-serif",
          
          // Background colors
          colorBgContainer: isDark ? '#1e1e36' : '#ffffff',
          colorBgElevated: isDark ? '#252542' : '#ffffff',
          colorBgLayout: isDark ? '#0f0f1a' : '#fafafa',
          
          // Text colors
          colorText: isDark ? '#f5f5f7' : '#1a1a2e',
          colorTextSecondary: isDark ? '#c5c5d2' : '#4a4a68',
          colorTextTertiary: isDark ? '#8a8aa3' : '#8a8aa3',
          
          // Border colors
          colorBorder: isDark ? '#3a3a5a' : '#e5e5e5',
          colorBorderSecondary: isDark ? '#2a2a4a' : '#f0f0f0',
        },
        components: {
          Button: {
            primaryShadow: '0 4px 12px rgba(108, 92, 231, 0.3)',
            fontWeight: 600,
          },
          Input: {
            paddingBlock: 12,
            paddingInline: 16,
          },
          Card: {
            paddingLG: 24,
          },
          Modal: {
            borderRadiusLG: 20,
          },
          Message: {
            borderRadiusLG: 12,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default AntdProvider;

