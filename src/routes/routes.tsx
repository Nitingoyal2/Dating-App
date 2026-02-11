import {
  Home,
  Login,
  ForgotPassword,
  Dashboard,
  ProfileSetup,
  NotFound,
  TermsOfService,
  PrivacyPolicy,
} from "@/pages";
import { Routes } from "@/types";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import type { RouteConfig } from "@interfaces";

// Re-export Routes enum for convenience
export { Routes } from "@/types";

// ============================================
// PUBLIC ROUTES
// Accessible to everyone (authenticated or not)
// ============================================
export const publicRoutes: RouteConfig[] = [
  {
    // Home page - redirects to dashboard if authenticated
    path: Routes.HOME,
    element: (
      <PublicRoute restricted>
        <Home />
      </PublicRoute>
    ),
    isProtected: false,
  },
  {
    // Profile Setup is public for new user registration flow
    // Users in registration process are not yet authenticated
    path: Routes.PROFILE_SETUP,
    element: <ProfileSetup />,
    isProtected: false,
  },
  {
    // Terms of Service - accessible to everyone
    path: Routes.TERMS_OF_SERVICE,
    element: <TermsOfService />,
    isProtected: false,
  },
  {
    // Privacy Policy - accessible to everyone
    path: Routes.PRIVACY_POLICY,
    element: <PrivacyPolicy />,
    isProtected: false,
  },
];

// ============================================
// RESTRICTED PUBLIC ROUTES
// Only for non-authenticated users
// Authenticated users will be redirected to dashboard
// ============================================
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
    path: Routes.FORGOT_PASSWORD,
    element: (
      <PublicRoute restricted>
        <ForgotPassword />
      </PublicRoute>
    ),
    isProtected: false,
  },
];

// ============================================
// PROTECTED ROUTES
// Require authentication to access
// Non-authenticated users will be redirected to login
// ============================================
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
  {
    path: Routes.PROFILE,
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    isProtected: true,
  },
  {
    path: Routes.GLOBAL,
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    isProtected: true,
  },
  {
    path: Routes.MATCHES,
    element: (
      <ProtectedRoute>
        {/* TODO: Add Matches page */}
        <Dashboard />
      </ProtectedRoute>
    ),
    isProtected: true,
  },
  {
    path: Routes.CHAT,
    element: (
      <ProtectedRoute>
        {/* TODO: Add Chat page */}
        <Dashboard />
      </ProtectedRoute>
    ),
    isProtected: true,
  },
  {
    path: Routes.SETTINGS,
    element: (
      <ProtectedRoute>
        {/* TODO: Add Settings page */}
        <Dashboard />
      </ProtectedRoute>
    ),
    isProtected: true,
  },
  {
    path: Routes.DISCOVER,
    element: (
      <ProtectedRoute>
        {/* TODO: Add Discover page */}
        <Dashboard />
      </ProtectedRoute>
    ),
    isProtected: true,
  },
  {
    path: Routes.EDIT,
    element: (
      <ProtectedRoute>
        {/* TODO: Add Discover page */}
        <Dashboard />
      </ProtectedRoute>
    ),
    isProtected: true,
  },

  {
    path: Routes.EDIT_ITEM,
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    isProtected: true,
  },
];

// ============================================
// CATCH-ALL ROUTE (404)
// Must be last to catch any unmatched routes
// ============================================
export const catchAllRoute: RouteConfig[] = [
  {
    path: "*",
    element: <NotFound />,
    isProtected: false,
  },
];

// ============================================
// ALL ROUTES COMBINED
// ============================================
export const allRoutes: RouteConfig[] = [
  ...publicRoutes,
  ...restrictedPublicRoutes,
  ...protectedRoutes,
  ...catchAllRoute, // Must be last
];
