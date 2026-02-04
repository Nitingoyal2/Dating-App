// Auth interfaces
export type {
  AuthLayoutProps,
  LoginFormData,
  RegisterFormData,
  ForgotPasswordFormData,
  LoginPayload,
  RegisterPayload,
} from './auth.interface';

// Common interfaces
export type {
  User,
  ApiResponse,
  PaginatedResponse,
  NavigationHandler,
} from './common.interface';

// Layout interfaces
export type { LayoutProps } from './layout.interface';

// Route interfaces
export type { RouteConfig, RouteParams } from './routes.interface';

// Store interfaces
export type {
  AuthState,
  UserState,
  AppState,
  NotificationState,
} from './store.interface';

// Page interfaces
export type {
  ProfileData,
  StepProps,
  StepEmailProps,
  StepNameProps,
  StepLocationProps,
  StepGenderProps,
  StepSeekingProps,
  StepBirthdayProps,
  StepPhotosProps,
  StepSuccessProps,
  SplashProps,
} from './pages.interface';
