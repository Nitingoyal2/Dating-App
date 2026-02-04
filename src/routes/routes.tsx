import { Home, Login, Register, ForgotPassword, Dashboard } from '@/pages';
import { Routes } from '@/types';
import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';
import type { RouteConfig } from '@/types';

// Re-export Routes enum for convenience
export { Routes } from '@/types';

// Public routes - accessible to everyone
export const publicRoutes: RouteConfig[] = [
    {
        path: Routes.HOME,
        element: <Home />,
        isProtected: false,
    },
];

// Restricted public routes - only for non-authenticated users
// Authenticated users will be redirected to dashboard
export const restrictedPublicRoutes: RouteConfig[] = [
    {
        path: Routes.LOGIN,
        element: (
            <PublicRoute restricted>
                <Login />
            </PublicRoute>
        ),
        isProtected: false,
    },
    {
        path: Routes.REGISTER,
        element: (
            <PublicRoute restricted>
                <Register />
            </PublicRoute>
        ),
        isProtected: false,
    },
    {
        path: Routes.FORGOT_PASSWORD,
        element: (
            <PublicRoute restricted>
                <ForgotPassword />
            </PublicRoute>
        ),
        isProtected: false,
    },
];

// Protected routes - require authentication
export const protectedRoutes: RouteConfig[] = [
    {
        path: Routes.DASHBOARD,
        element: (
            <ProtectedRoute>
                <Dashboard />
            </ProtectedRoute>
        ),
        isProtected: true,
    },
    // Add more protected routes here
    // {
    //   path: Routes.PROFILE,
    //   element: (
    //     <ProtectedRoute>
    //       <Profile />
    //     </ProtectedRoute>
    //   ),
    //   isProtected: true,
    // },
];

// Combine all routes
export const allRoutes: RouteConfig[] = [
    ...publicRoutes,
    ...restrictedPublicRoutes,
    ...protectedRoutes,
];
