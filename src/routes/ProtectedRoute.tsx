import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '@store/hooks';
import { Routes } from '@/types';
import type { ReactNode } from 'react';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirect to login, but save the location they were trying to go to
    return <Navigate to={Routes.LOGIN} state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
