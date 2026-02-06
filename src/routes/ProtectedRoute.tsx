import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '@store/hooks';
import { Routes, AuthStatus } from '@/types';
import type { ProtectedRouteProps } from '@interfaces';
import { Spinner } from '@components/Spinner';

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated, status } = useAppSelector((state) => state.auth);
  const location = useLocation();

  // Show loading spinner during auth API calls
  if (status === AuthStatus.LOADING) {
    return <Spinner size="large" fullScreen />;
  }

  if (!isAuthenticated) {
    // Redirect to login, but save the location they were trying to go to
    return <Navigate to={Routes.LOGIN} state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
