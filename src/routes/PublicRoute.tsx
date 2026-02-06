import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '@store/hooks';
import { Routes, AuthStatus } from '@/types';
import type { PublicRouteProps } from '@interfaces';
import { Spinner } from '@components/Spinner';

const PublicRoute = ({ children, restricted = false }: PublicRouteProps) => {
  const { isAuthenticated, status } = useAppSelector((state) => state.auth);
  const location = useLocation();

  // Only show loading spinner when actually checking auth (not on initial IDLE)
  if (restricted && status === AuthStatus.LOADING) {
    return <Spinner size="large" fullScreen />;
  }

  // Get the page user was trying to visit before being redirected to login
  const from = location.state?.from?.pathname || Routes.DASHBOARD;

  if (isAuthenticated && restricted) {
    // Redirect authenticated users away from login/register/forgot-password pages
    return <Navigate to={from} replace />;
  }

  return <>{children}</>;
};

export default PublicRoute;
