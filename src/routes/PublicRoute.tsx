import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '@store/hooks';
import { Routes } from '@/types';
import type { ReactNode } from 'react';

interface PublicRouteProps {
  children: ReactNode;
  restricted?: boolean; // If true, redirect authenticated users away
}

const PublicRoute = ({ children, restricted = false }: PublicRouteProps) => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const location = useLocation();

  // Get the page user was trying to visit before being redirected to login
  const from = location.state?.from?.pathname || Routes.DASHBOARD;

  if (isAuthenticated && restricted) {
    // Redirect authenticated users away from login/register pages
    return <Navigate to={from} replace />;
  }

  return <>{children}</>;
};

export default PublicRoute;
