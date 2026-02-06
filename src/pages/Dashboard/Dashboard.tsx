import { useLocation } from 'react-router-dom';
import { DashboardLayout } from '@components/DashboardLayout';
import { Routes, DashboardScreen } from '@/types';
import type { DashboardScreen as DashboardScreenType } from '@interfaces';

const Dashboard = () => {
  const location = useLocation();

  // Map routes to dashboard screens
  const getActiveScreenFromRoute = (): DashboardScreenType => {
    switch (location.pathname) {
      case Routes.DASHBOARD:
      case Routes.DISCOVER:
        return DashboardScreen.DISCOVER;
      case Routes.PROFILE:
        return DashboardScreen.PROFILE;
      case Routes.SETTINGS:
        return DashboardScreen.SETTINGS;
      case Routes.MATCHES:
        return DashboardScreen.MATCHES;
      case Routes.CHAT:
        return DashboardScreen.CHAT;
      default:
        return DashboardScreen.DISCOVER;
    }
  };

  const activeScreen = getActiveScreenFromRoute();

  return <DashboardLayout activeScreen={activeScreen} />;
};

export default Dashboard;

