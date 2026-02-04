import type { ReactNode } from 'react';

export interface RouteConfig {
  path: string;
  element: ReactNode;
  children?: RouteConfig[];
  isProtected?: boolean;
}

export interface RouteParams {
  [key: string]: string | undefined;
}

// Route Component Props
export interface ProtectedRouteProps {
  children: ReactNode;
}

export interface PublicRouteProps {
  children: ReactNode;
  restricted?: boolean;
}

