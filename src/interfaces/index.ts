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
  PhotoItem,
  ProfileData,
  StepProps,
  StepEmailProps,
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
  TermsSection,
  PrivacySection,
  StepEmailSentProps,
  StepVerifyOtpProps,
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
  PhotoBatchUploadResponse,
  PhotoDeleteResponse,
  CompleteRequest,
  CompleteUser,
  CompleteTokens,
  CompleteResponse,
  // Login APIs
  LoginPhoneRequest,
  LoginEmailRequest,
  LoginRequest,
  LoginResponse,
  OtpVerifyPhoneRequest,
  OtpVerifyEmailRequest,
  OtpVerifyRequest,
  OtpVerifyResponse,
  ResendOtpRequest,
  ResendOtpResponse,
  // Forgot Password APIs
  ForgotPasswordRequest,
  ForgotPasswordResponse,
  ForgotPasswordVerifyRequest,
  ForgotPasswordVerifyResponse,
} from './api.interface';

// Component interfaces
export type {
  IconProps,
  VerifiedIconProps,
  ButtonVariant,
  ButtonSize,
  PrimaryButtonProps,
  ThemeToggleVariant,
  ThemeToggleProps,
  ModalType,
  ConfirmModalProps,
  SuccessScreenProps,
  AntdProviderProps,
  DashboardScreen,
  DashboardLayoutProps,
  ProfileProps,
  ProfileActionConfig,
  SpinnerProps,
  SettingsItemConfig,
  EditProfileProps,
  EditProfileItemConfig,
  CommonSelectorProps,
} from './components.interface';

// CommonImageUpload interfaces
export type { ImageUploadProps, ProfilePhoto } from "./imageUpload.interface";