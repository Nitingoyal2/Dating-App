// Route paths
export const Routes = {
  // Public routes
  HOME: '/',
  LOGIN: '/login',
  FORGOT_PASSWORD: '/forgot-password',
  TERMS_OF_SERVICE: '/terms-of-service',
  PRIVACY_POLICY: '/privacy-policy',

  // Protected routes
  DASHBOARD: '/dashboard',
  PROFILE: '/profile',
  PROFILE_SETUP: '/profile-setup',
  MATCHES: '/matches',
  CHAT: '/chat',
  SETTINGS: '/settings',
  DISCOVER: '/discover',
} as const;

export type Routes = (typeof Routes)[keyof typeof Routes];

// Theme
export const Theme = {
  LIGHT: 'light',
  DARK: 'dark',
  DEFAULT: 'default', // System preference
} as const;

export type Theme = (typeof Theme)[keyof typeof Theme];

// Effective Theme (actual applied theme - only light or dark)
export const EffectiveTheme = {
  LIGHT: 'light',
  DARK: 'dark',
} as const;

export type EffectiveTheme = (typeof EffectiveTheme)[keyof typeof EffectiveTheme];

// Notification types
export const NotificationType = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
} as const;

export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType];

// Auth status
export const AuthStatus = {
  IDLE: 'idle',
  LOADING: 'loading',
  AUTHENTICATED: 'authenticated',
  UNAUTHENTICATED: 'unauthenticated',
  ERROR: 'error',
} as const;

export type AuthStatus = (typeof AuthStatus)[keyof typeof AuthStatus];

// User gender (for dating app)
export const Gender = {
  MALE: 'male',
  FEMALE: 'female',
  OTHER: 'other',
  PREFER_NOT_TO_SAY: 'prefer_not_to_say',
} as const;

export type Gender = (typeof Gender)[keyof typeof Gender];

// Relationship goal
export const RelationshipGoal = {
  CASUAL: 'casual',
  SERIOUS: 'serious',
  FRIENDSHIP: 'friendship',
  NOT_SURE: 'not_sure',
} as const;

export type RelationshipGoal = (typeof RelationshipGoal)[keyof typeof RelationshipGoal];

// API status
export const ApiStatus = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
} as const;

export type ApiStatus = (typeof ApiStatus)[keyof typeof ApiStatus];

// Login identifier type
export const LoginType = {
  PHONE: 'phone',
  EMAIL: 'email',
} as const;

export type LoginType = (typeof LoginType)[keyof typeof LoginType];


export const ProfileStatus = {
  SUSPENDED: 'suspended',
} as const;

export type ProfileStatus = (typeof ProfileStatus)[keyof typeof ProfileStatus];