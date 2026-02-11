import { matchPath, useLocation, useNavigate } from "react-router-dom";
import { DashboardLayout } from "@components/DashboardLayout";
import { Routes, DashboardScreen } from "@/types";
import type { DashboardScreen as DashboardScreenType } from "@interfaces";

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Map routes to dashboard screens
  const getActiveScreenFromRoute = (): DashboardScreenType => {
    switch (location.pathname) {
      case Routes.DASHBOARD:
      case Routes.DISCOVER:
        return DashboardScreen.DISCOVER;
      case Routes.GLOBAL:
        return DashboardScreen.Global;
      case Routes.PROFILE:
        return DashboardScreen.PROFILE;
      case Routes.SETTINGS:
        return DashboardScreen.SETTINGS;
      case Routes.MATCHES:
        return DashboardScreen.MATCHES;
      case Routes.CHAT:
        return DashboardScreen.CHAT;
      case Routes.EDIT:
        return DashboardScreen.EDIT;
      default:
        if (matchPath({ path: Routes.EDIT_ITEM }, location.pathname)) {
          return DashboardScreen.EDIT;
        }
        return DashboardScreen.DISCOVER;
    }
  };

  const activeScreen = getActiveScreenFromRoute();

  // Handle screen changes and update URL
  const handleScreenChange = (screen: DashboardScreenType) => {
    // Map screen to route
    const screenToRouteMap: Record<DashboardScreenType, string> = {
      [DashboardScreen.DISCOVER]: Routes.DASHBOARD,
      [DashboardScreen.Global]: Routes.GLOBAL,
      [DashboardScreen.PROFILE]: Routes.PROFILE,
      [DashboardScreen.SETTINGS]: Routes.SETTINGS,
      [DashboardScreen.MATCHES]: Routes.MATCHES,
      [DashboardScreen.CHAT]: Routes.CHAT,
      [DashboardScreen.EXPLORE]: Routes.DASHBOARD,
      [DashboardScreen.EDIT]: Routes.EDIT, // Edit stays on profile route
    };

    const route = screenToRouteMap[screen];
    if (route && location.pathname !== route) {
      navigate(route, { replace: true });
    }
  };

  return (
    <DashboardLayout
      activeScreen={activeScreen}
      onScreenChange={handleScreenChange}
    />
  );
};

export default Dashboard;
