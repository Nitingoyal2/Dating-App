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
export type {
  RouteConfig,
  RouteParams,
  ProtectedRouteProps,
  PublicRouteProps,
} from './routes.interface';

// Store interfaces
export type {
  AuthState,
  UserState,
  AppState,
  NotificationState,
  LoginSuccessPayload,
} from './store.interface';

// Page interfaces
export type {
  GenderType,
  ProfileData,
  StepProps,
  StepEmailProps,
  LoginIdentifierType,
  LoginSetupLoginProps,
  OtpVerificationProps,
  StepNameProps,
  StepLocationProps,
  StepGenderProps,
  StepSeekingProps,
  StepBirthdayProps,
  StepPhotosProps,
  StepSuccessProps,
  PasswordFormData,
  WelcomeRule,
  SplashProps,
} from './pages.interface';

// API interfaces
export type {
  ApiResponse as ApiResponseType,
  DraftRequest,
  DraftResponse,
  ProfileUpdateRequest,
  ProfileUpdateResponse,
  Photo,
  PhotoUploadResponse,
  PhotoDeleteResponse,
  CompleteRequest,
  CompleteUser,
  CompleteTokens,
  CompleteResponse,
} from './api.interface';

// Component interfaces
export type {
  IconProps,
  ButtonVariant,
  ButtonSize,
  PrimaryButtonProps,
  ThemeToggleVariant,
  ThemeToggleProps,
  ModalType,
  ConfirmModalProps,
  SuccessScreenProps,
  AntdProviderProps,
} from './components.interface';
