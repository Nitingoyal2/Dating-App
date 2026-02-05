# Prosto Dating App - Project Documentation

> A modern React dating application built with TypeScript, Redux Toolkit, Ant Design, and React Router.

---

## 📋 Table of Contents

1. [Tech Stack](#tech-stack)
2. [Folder Structure](#folder-structure)
3. [Path Aliases](#path-aliases)
4. [Types & Interfaces Architecture](#types--interfaces-architecture)
5. [Centralized Messages (Constants)](#centralized-messages-constants)
6. [Application Flow](#application-flow)
7. [Theme System](#theme-system)
8. [Components](#components)
9. [Pages](#pages)
10. [Login Setup Flow](#login-setup-flow)
11. [Profile Setup Flow](#profile-setup-flow)
12. [Backend API Integration](#backend-api-integration)
13. [Routing System](#routing-system)
14. [State Management (Redux)](#state-management-redux)
15. [SVG Icons](#svg-icons)
16. [Styling Approach](#styling-approach)
17. [How to Add New Features](#how-to-add-new-features)

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.x | UI Framework |
| TypeScript | 5.x | Type Safety |
| Vite | 7.x | Build Tool & Dev Server |
| React Router DOM | 7.x | Client-side Routing |
| Redux Toolkit | 2.x | State Management |
| React Redux | 9.x | React bindings for Redux |
| **Ant Design** | 5.x | UI Component Library |
| **@ant-design/icons** | 5.x | Icon Library |
| **dayjs** | 1.x | Date manipulation |
| **Axios** | 1.x | HTTP Client |

---

## 📁 Folder Structure

```
dating-app/
├── public/                    # Static assets
├── src/
│   ├── assets/               # Images, fonts, etc.
│   │   └── react.svg
│   │
│   ├── components/           # Reusable UI components (each in own folder)
│   │   ├── AntdProvider/     # Ant Design theme provider
│   │   │   ├── AntdProvider.tsx
│   │   │   └── index.ts
│   │   ├── AuthLayout/       # Auth pages layout (back btn, title, form)
│   │   │   ├── AuthLayout.tsx
│   │   │   ├── AuthLayout.css
│   │   │   └── index.ts
│   │   ├── Button/           # Reusable button component
│   │   │   ├── PrimaryButton.tsx
│   │   │   ├── Button.css
│   │   │   └── index.ts
│   │   ├── ConfirmModal/     # Reusable confirmation modal
│   │   │   ├── ConfirmModal.tsx
│   │   │   ├── ConfirmModal.css
│   │   │   └── index.ts
│   │   ├── Layout/           # Main app layout (phone frame + side panel)
│   │   │   ├── Layout.tsx
│   │   │   ├── Layout.css
│   │   │   └── index.ts
│   │   ├── SuccessScreen/    # Success/celebration screen
│   │   │   ├── SuccessScreen.tsx
│   │   │   ├── SuccessScreen.css
│   │   │   └── index.ts
│   │   └── ThemeToggle/      # Theme switcher component
│   │       ├── ThemeToggle.tsx
│   │       ├── ThemeToggle.css
│   │       └── index.ts
│   │
│   ├── constants/            # Centralized constants & messages
│   │   ├── index.ts          # Exports all constants
│   │   └── messages.ts       # ValidationMessages for forms & toasts
│   │
│   ├── hooks/                # Custom React hooks
│   │   ├── index.ts
│   │   └── useTheme.ts       # Theme management hook
│   │
│   ├── interfaces/           # TypeScript interfaces (centralized)
│   │   ├── index.ts          # Exports all interfaces
│   │   ├── api.interface.ts  # API request/response types
│   │   ├── auth.interface.ts # Auth forms & payloads
│   │   ├── common.interface.ts # User, ApiResponse, etc.
│   │   ├── components.interface.ts # Component props (Button, Modal, etc.)
│   │   ├── layout.interface.ts # Layout props
│   │   ├── pages.interface.ts # Page-specific types (ProfileData, Steps)
│   │   ├── routes.interface.ts # Route configs & guards
│   │   └── store.interface.ts # Redux state types
│   │
│   ├── pages/                # Page components (each in own folder)
│   │   ├── index.ts          # Exports all pages
│   │   ├── Splash/           # Loading/splash screen
│   │   ├── Home/             # Onboarding/landing page
│   │   ├── LoginSetup/       # Multi-step login with OTP
│   │   │   ├── LoginSetup.tsx    # Main controller with API integration
│   │   │   ├── index.ts
│   │   │   └── steps/        # Login step components
│   │   │       ├── index.ts
│   │   │       ├── Login.tsx         # Phone/Email entry
│   │   │       ├── Login.css
│   │   │       └── OtpVerification.tsx  # OTP entry
│   │   ├── ForgotPassword/   # Password recovery
│   │   ├── Dashboard/        # Main app (protected)
│   │   └── ProfileSetup/     # Multi-step profile creation
│   │       ├── ProfileSetup.tsx  # Main controller with API integration
│   │       ├── index.ts
│   │       └── steps/        # Individual step components
│   │           ├── index.ts
│   │           ├── StepEmail.tsx
│   │           ├── StepName.tsx
│   │           ├── StepLocation.tsx
│   │           ├── StepGender.tsx
│   │           ├── StepSeeking.tsx
│   │           ├── StepBirthday.tsx
│   │           ├── StepPhotos.tsx
│   │           ├── StepWelcome.tsx
│   │           ├── StepSuccess.tsx
│   │           └── StepSuccess.css
│   │
│   ├── routes/               # Routing configuration
│   │   ├── index.tsx         # AppRoutes component
│   │   ├── routes.tsx        # Route definitions
│   │   ├── ProtectedRoute.tsx # Auth guard (logged in only)
│   │   └── PublicRoute.tsx   # Public guard (redirects if logged in)
│   │
│   ├── services/             # API services
│   │   ├── index.ts          # Exports all services
│   │   ├── interceptor.ts    # Axios instance with interceptors
│   │   ├── api_methods.ts    # Generic API methods (get, post, patch, etc.)
│   │   └── api/              # API endpoint functions (organized by HTTP method)
│   │       ├── index.ts      # Exports all API functions
│   │       ├── get_apis.ts   # GET endpoints
│   │       ├── post_apis.ts  # POST endpoints
│   │       ├── patch_apis.ts # PATCH endpoints
│   │       ├── put_apis.ts   # PUT endpoints
│   │       └── delete_apis.ts # DELETE endpoints
│   │
│   ├── store/                # Redux state management
│   │   ├── index.ts          # Store configuration
│   │   ├── hooks.ts          # Typed useDispatch & useSelector
│   │   └── slices/           # Redux slices
│   │       ├── index.ts      # Exports all slices
│   │       ├── authSlice.ts  # Authentication state
│   │       └── appSlice.ts   # App-wide state (theme, notifications)
│   │
│   ├── types/                # TypeScript enums & constants only
│   │   ├── index.ts          # Exports all types
│   │   └── enums.ts          # Routes, Theme, AuthStatus, Gender, etc.
│   │
│   ├── utils/                # Utility functions & components
│   │   └── svg/              # SVG icon components
│   │       ├── index.ts      # Exports all icons
│   │       ├── icons.tsx     # Icon components
│   │       └── ProstoLogo.tsx # App logo
│   │
│   ├── main.tsx              # Application entry point
│   ├── App.tsx               # Root component
│   ├── App.css               # App-level styles (minimal)
│   └── index.css             # Global styles, fonts & CSS variables
│
├── index.html                # HTML template
├── vite.config.ts            # Vite configuration + aliases
├── tsconfig.json             # TypeScript config
├── tsconfig.app.json         # App-specific TS config + aliases
├── package.json              # Dependencies & scripts
├── PROJECT_DOCUMENTATION.md  # This file - frontend documentation
└── BACKEND_API_SPEC.md       # Backend API specification (v3.0.0)
```

---

## 🔗 Path Aliases

Configured in `tsconfig.app.json` and `vite.config.ts`:

| Alias | Maps To | Example Usage |
|-------|---------|---------------|
| `@/*` | `src/*` | `import { Routes } from '@/types'` |
| `@components/*` | `src/components/*` | `import AuthLayout from '@components/AuthLayout'` |
| `@pages/*` | `src/pages/*` | `import { Home } from '@/pages'` |
| `@interfaces` | `src/interfaces` | `import type { ProfileData } from '@interfaces'` |
| `@constants` | `src/constants` | `import { ValidationMessages } from '@constants'` |
| `@store/*` | `src/store/*` | `import { useAppDispatch } from '@store/hooks'` |
| `@hooks` | `src/hooks` | `import { useTheme } from '@hooks'` |
| `@services` | `src/services` | `import { registrationDraftApi } from '@services'` |
| `@utils/*` | `src/utils/*` | `import { formatDate } from '@utils/helpers'` |
| `@svg` | `src/utils/svg` | `import { HeartIcon } from '@svg'` |

---

## 📐 Types & Interfaces Architecture

The project separates **enums/constants** from **interfaces** for better organization:

### `types/` - Enums & Constants Only

```typescript
// types/enums.ts
export const Routes = { HOME: '/', LOGIN: '/login', ... } as const;
export type Routes = (typeof Routes)[keyof typeof Routes];

export const Theme = { LIGHT: 'light', DARK: 'dark', DEFAULT: 'default' } as const;
export type Theme = (typeof Theme)[keyof typeof Theme];

export const Gender = { MALE: 'male', FEMALE: 'female', ... } as const;
export type Gender = (typeof Gender)[keyof typeof Gender];

export const LoginType = { PHONE: 'phone', EMAIL: 'email' } as const;
export type LoginType = (typeof LoginType)[keyof typeof LoginType];
```

### `interfaces/` - All Interfaces (Centralized)

| File | Contents |
|------|----------|
| `api.interface.ts` | `DraftRequest`, `DraftResponse`, `ProfileUpdateRequest`, `CompleteResponse`, etc. |
| `auth.interface.ts` | `AuthLayoutProps`, `LoginFormData`, `LoginPayload`, etc. |
| `common.interface.ts` | `User`, `ApiResponse<T>`, `PaginatedResponse<T>` |
| `components.interface.ts` | `IconProps`, `PrimaryButtonProps`, `ConfirmModalProps`, `ThemeToggleProps` |
| `layout.interface.ts` | `LayoutProps` |
| `pages.interface.ts` | `GenderType`, `ProfileData`, `StepProps`, `StepEmailProps`, etc. |
| `routes.interface.ts` | `RouteConfig`, `ProtectedRouteProps`, `PublicRouteProps` |
| `store.interface.ts` | `AuthState`, `UserState`, `AppState`, `LoginSuccessPayload` |

### Usage Example

```typescript
// Import enums from @/types
import { Routes, Theme, AuthStatus } from '@/types';

// Import interfaces from @interfaces
import type { ProfileData, StepProps, DraftResponse } from '@interfaces';
```

---

## 📝 Centralized Messages (Constants)

All validation messages, toast notifications, and user-facing strings are centralized in `constants/messages.ts`. This allows:

- **Single source of truth** - change a message once, updates everywhere
- **Type safety** - TypeScript autocomplete for message keys
- **Easy i18n** - ready for future localization

### `constants/messages.ts`

```typescript
export const ValidationMessages = {
  // Email
  EMAIL_REQUIRED: 'Please enter your email',
  EMAIL_INVALID: 'Please enter a valid email',

  // Password
  PASSWORD_REQUIRED: 'Please enter your password',
  PASSWORD_MIN_6: 'Password must be at least 6 characters',
  PASSWORD_MIN_8: 'Password must be at least 8 characters',
  PASSWORD_PATTERN: 'Password must contain uppercase, lowercase, and number',
  PASSWORD_CONFIRM_REQUIRED: 'Please confirm your password',
  PASSWORD_MISMATCH: 'Passwords do not match',

  // Name
  NAME_REQUIRED: 'Please enter your name',
  NAME_MIN_2: 'Name must be at least 2 characters',

  // Photo Upload
  PHOTO_INVALID_TYPE: 'Please select an image file',
  PHOTO_SIZE_LIMIT: 'Image size should be less than 5MB',
  PHOTO_ADDED: 'Photo added successfully',
  PHOTO_REMOVED: 'Photo removed',

  // OTP
  OTP_REQUIRED: 'Please enter the code',
  OTP_LEN_6: 'Code must be 6 digits',
  OTP_RESENT: 'A new code has been sent.',
  OTP_SEND_FAILED: 'Failed to send OTP',
  OTP_INVALID: 'Invalid OTP',
  OTP_RESEND_FAILED: 'Failed to resend OTP',

  // Phone
  PHONE_INVALID: 'Please enter a valid phone number',

  // Account
  ACCOUNT_CREATED: 'Account created successfully!',

  // Login
  LOGIN_SUCCESS: 'Login successful!',
  LOGIN_FAILED: 'Login failed',
} as const;

export type ValidationMessageKey = keyof typeof ValidationMessages;
```

### Usage

```typescript
import { ValidationMessages } from '@constants';

// In Ant Design Form rules
<Form.Item
  name="email"
  rules={[
    { required: true, message: ValidationMessages.EMAIL_REQUIRED },
    { type: 'email', message: ValidationMessages.EMAIL_INVALID },
  ]}
>

// In toast notifications
message.success(ValidationMessages.ACCOUNT_CREATED);
message.error(ValidationMessages.PHOTO_SIZE_LIMIT);
```

### Pages Using ValidationMessages

| Page | Messages Used |
|------|---------------|
| `LoginSetup.tsx` | OTP_*, LOGIN_* |
| `LoginSetup/steps/Login.tsx` | EMAIL_*, PHONE_* |
| `LoginSetup/steps/OtpVerification.tsx` | OTP_* |
| `ForgotPassword.tsx` | EMAIL_* |
| `StepEmail.tsx` | EMAIL_* |
| `StepName.tsx` | NAME_* |
| `StepPhotos.tsx` | PHOTO_* |
| `StepSuccess.tsx` | PASSWORD_* |
| `ProfileSetup.tsx` | ACCOUNT_CREATED |

---

## 🔄 Application Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                        APPLICATION FLOW                          │
└─────────────────────────────────────────────────────────────────┘

1. APP STARTS
   │
   ▼
2. main.tsx
   ├── Wraps app with Redux Provider (state management)
   ├── Wraps app with AntdProvider (Ant Design theming)
   ├── Wraps app with BrowserRouter (routing)
   └── Renders <App />
   │
   ▼
3. App.tsx
   ├── [showSplash = true] → Show Splash screen (2.5 seconds)
   └── [showSplash = false] → Show Layout + AppRoutes
   │
   ▼
4. ROUTING (based on URL)
   │
   ├── "/" (HOME - Onboarding)
   │   └── Shows Algorithm screen → "Get Started" button
   │
   ├── "/login" (RESTRICTED PUBLIC)
   │   ├── If authenticated → Redirect to /dashboard
   │   └── If not authenticated → Show Login form
   │       ├── Sign In → Dashboard
   │       └── Sign Up → Profile Setup
   │
   ├── "/profile-setup" (PUBLIC)
   │   └── 9-step profile creation flow (API on each step)
   │       → On complete: Auto-login → Dashboard
   │
   ├── "/forgot-password" (RESTRICTED PUBLIC)
   │   └── Show password recovery form
   │
   └── "/dashboard" (PROTECTED)
       ├── If not authenticated → Redirect to /login
       └── If authenticated → Show Dashboard
```

---

## 🎨 Theme System

The app supports **Light**, **Dark**, and **System Default** themes.

### Theme Modes

| Mode | Description |
|------|-------------|
| `light` | Light theme with white backgrounds |
| `dark` | Dark theme with dark purple backgrounds |
| `default` | Follows system preference (auto-switches) |

### useTheme Hook

```typescript
import { useTheme } from '@hooks';

const { 
  theme,           // 'light' | 'dark' | 'default'
  effectiveTheme,  // 'light' | 'dark' (actual applied)
  isDark,          // boolean
  changeTheme,     // (theme) => void
  setDarkTheme,    // () => void
  setLightTheme,   // () => void
  setSystemTheme,  // () => void
} = useTheme();
```

---

## 🧩 Components

All component props are defined in `interfaces/components.interface.ts`:

### PrimaryButton

```typescript
import { PrimaryButton } from '@components/Button';
import type { PrimaryButtonProps } from '@interfaces';

<PrimaryButton 
  variant="primary"    // 'primary' | 'secondary' | 'outline' | 'text'
  size="large"         // 'small' | 'medium' | 'large'
  fullWidth={true}
  loading={isLoading}
  onClick={handleClick}
>
  Continue
</PrimaryButton>
```

### ConfirmModal

```typescript
import { ConfirmModal } from '@components/ConfirmModal';
import type { ConfirmModalProps } from '@interfaces';

<ConfirmModal
  open={isOpen}
  onClose={() => setIsOpen(false)}
  onConfirm={handleConfirm}
  type="success"  // 'success' | 'warning' | 'info' | 'error'
  title="Please confirm"
  description="Are you sure?"
/>
```

### ThemeToggle

```typescript
import { ThemeToggle } from '@components/ThemeToggle';
import type { ThemeToggleProps } from '@interfaces';

<ThemeToggle 
  variant="icons"  // 'buttons' | 'dropdown' | 'icons'
  showLabel={true}
/>
```

---

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| Splash | (initial) | Loading screen with Prosto logo |
| Home | `/` | Onboarding "Algorithm" screen |
| LoginSetup | `/login` | 2-step login with OTP (Phone/Email → OTP) |
| ForgotPassword | `/forgot-password` | Password recovery |
| ProfileSetup | `/profile-setup` | 9-step profile creation with API |
| Dashboard | `/dashboard` | Main app (after authentication) |

---

## 🔐 Login Setup Flow

2-step login with **OTP authentication**:

| Step | Component | API Call | Data |
|------|-----------|----------|------|
| 1 | `Login` | `POST /api/login` | `{ country_code, phone }` or `{ email }` |
| 2 | `OtpVerification` | `POST /api/login/verify-otp` | `{ country_code, phone, otp }` or `{ email, otp }` |

### LoginSetup Implementation

```typescript
// LoginSetup uses LoginType enum for phone/email
import { LoginType } from '@/types';

const [loginType, setLoginType] = useState<LoginType>(LoginType.PHONE);

// Step 1: Send OTP
const handleSendOtp = async () => {
  const payload = loginType === LoginType.PHONE
    ? { country_code: `+${countryCode}`, phone: getPhoneWithoutCode() }
    : { email };
  await loginApi(payload);
  setCurrentStep(2);
};

// Step 2: Verify OTP
const handleVerifyOtp = async () => {
  const payload = loginType === LoginType.PHONE
    ? { country_code: `+${countryCode}`, phone: getPhoneWithoutCode(), otp }
    : { email, otp };
  const response = await otpVerifyApi(payload);
  dispatch(loginSuccess({ user: response.user, token: response.access_token }));
};

// Resend OTP
const handleResendOtp = async () => {
  await resendOtpApi(payload);
  message.success(ValidationMessages.OTP_RESENT);
};
```

---

## 📝 Profile Setup Flow

9-step profile creation with **API call on each step**:

| Step | Component | API Call | Data |
|------|-----------|----------|------|
| 1 | `StepEmail` | `POST /api/draft` | `{ email }` → returns `user_id` |
| 2 | `StepName` | `PATCH /api/profile/{user_id}` | `{ first_name }` |
| 3 | `StepLocation` | `PATCH /api/profile/{user_id}` | `{ latitude, longitude }` or `{ location_skipped }` |
| 4 | `StepGender` | `PATCH /api/profile/{user_id}` | `{ gender }` |
| 5 | `StepSeeking` | `PATCH /api/profile/{user_id}` | `{ seeking }` |
| 6 | `StepBirthday` | `PATCH /api/profile/{user_id}` | `{ date_of_birth }` |
| 7 | `StepPhotos` | `POST /api/profile/{user_id}/photos` | Photos handled in component |
| 8 | `StepWelcome` | `PATCH /api/profile/{user_id}` | `{ rules_accepted: true }` |
| 9 | `StepSuccess` | `POST /api/profile/{user_id}/complete` | `{ password, confirm_password }` |

### ProfileSetup Implementation

```typescript
// Single unified handler for all steps
const handleStepSubmit = async (
  step: number,
  extraData?: { location?: {...}; password?: string }
) => {
  setIsLoading(true);
  try {
    if (step === 1) {
      const response = await registrationDraftApi({ email: profileData.email });
      setUserId(response.user_id);
    } else if (step === 9) {
      const response = await registrationCompleteApi(userId, { password, confirm_password });
      dispatch(loginSuccess({ user: response.user, token: response.tokens.access_token }));
    } else {
      const payload = getStepPayload(step, extraData);
      await profileStepPatchApi(userId, payload);
    }
    setCurrentStep(step + 1);
  } catch (error) {
    message.error(error.message); // Backend provides error messages
  } finally {
    setIsLoading(false);
  }
};
```

---

## 🔌 Backend API Integration

### API Service Structure

```
services/
├── index.ts           # Exports all
├── interceptor.ts     # Axios instance with auth token injection
├── api_methods.ts     # Generic methods: getApi, postApi, patchApi, etc.
└── api/
    ├── get_apis.ts    # GET endpoints
    ├── post_apis.ts   # POST endpoints (registrationDraftApi, registrationCompleteApi)
    ├── patch_apis.ts  # PATCH endpoints (profileStepPatchApi)
    ├── put_apis.ts    # PUT endpoints
    └── delete_apis.ts # DELETE endpoints (profilePhotoDeleteApi)
```

### API Functions (Fully Typed)

```typescript
// services/api/post_apis.ts
import type { 
  DraftRequest, DraftResponse, CompleteRequest, CompleteResponse,
  LoginRequest, LoginResponse, OtpVerifyRequest, OtpVerifyResponse 
} from '@interfaces';

// Registration APIs
export const registrationDraftApi = async (data: DraftRequest): Promise<DraftResponse> => {
  return await postApi<DraftResponse>('/api/draft', data);
};

export const registrationCompleteApi = async (
  userId: string, 
  data: CompleteRequest
): Promise<CompleteResponse> => {
  return await postApi<CompleteResponse>(`/api/profile/${userId}/complete`, data);
};

// Login APIs
export const loginApi = async (data: LoginRequest): Promise<LoginResponse> => {
  return await postApi<LoginResponse>('/api/login', data);
};

export const otpVerifyApi = async (data: OtpVerifyRequest): Promise<OtpVerifyResponse> => {
  return await postApi<OtpVerifyResponse>('/api/login/verify-otp', data);
};

export const resendOtpApi = async (data: LoginRequest): Promise<LoginResponse> => {
  return await postApi<LoginResponse>('/api/login/resend-otp', data);
};

// services/api/patch_apis.ts
import type { ProfileUpdateRequest, ProfileUpdateResponse } from '@interfaces';

export const profileStepPatchApi = async (
  userId: string, 
  data: ProfileUpdateRequest
): Promise<ProfileUpdateResponse> => {
  return await patchApi<ProfileUpdateResponse>(`/api/profile/${userId}`, data);
};
```

### API Response Types

```typescript
// interfaces/api.interface.ts

// Registration Types
export interface DraftResponse {
  user_id: string;
  email: string;
}

export interface ProfileUpdateRequest {
  first_name?: string;
  gender?: 'man' | 'woman';
  seeking?: 'man' | 'woman';
  date_of_birth?: string;
  latitude?: number;
  longitude?: number;
  location_skipped?: boolean;
  rules_accepted?: boolean;
}

export interface CompleteResponse {
  user: CompleteUser;
  tokens: {
    access_token: string;
    refresh_token: string;
    token_type: string;
    expires_in: number;
  };
}

// Login Types
export interface LoginPhoneRequest {
  country_code: string;
  phone: string;
}

export interface LoginEmailRequest {
  email: string;
}

export type LoginRequest = LoginPhoneRequest | LoginEmailRequest;

export interface LoginResponse {
  message: string;
  otp_sent: boolean;
  expires_in: number;
}

export interface OtpVerifyResponse {
  user: {
    id: string;
    email?: string;
    phone?: string;
    first_name: string;
  };
  access_token: string;
}
```

---

## 🛣 Routing System

### Route Types

| Type | Description | Example |
|------|-------------|---------|
| **Public** | Anyone can access | Home `/`, Profile Setup |
| **Restricted Public** | Only non-authenticated | Login, Forgot Password |
| **Protected** | Only authenticated users | Dashboard |

### Route Guards (Typed)

```typescript
// routes/ProtectedRoute.tsx
import type { ProtectedRouteProps } from '@interfaces';

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  if (!isAuthenticated) return <Navigate to={Routes.LOGIN} />;
  return <>{children}</>;
};

// routes/PublicRoute.tsx
import type { PublicRouteProps } from '@interfaces';

const PublicRoute = ({ children, restricted = false }: PublicRouteProps) => {
  // Redirect authenticated users if restricted
};
```

---

## 🗃 State Management (Redux)

### Store Structure

```typescript
store: {
  auth: {
    user: UserState | null,
    token: string | null,
    status: AuthStatus,
    isAuthenticated: boolean,
  },
  app: {
    theme: Theme,
    effectiveTheme: EffectiveTheme,
    isLoading: boolean,
    notification: NotificationState | null
  }
}
```

### Auth Slice (Typed Payloads)

```typescript
import type { LoginSuccessPayload, UserState } from '@interfaces';

// Actions
loginSuccess(payload: LoginSuccessPayload)  // { user, token }
logout()
setUser(payload: UserState)
updateUser(payload: Partial<UserState>)
```

---

## 🎨 SVG Icons

All icons use `IconProps` from `@interfaces`:

```typescript
import type { IconProps } from '@interfaces';

export const HeartIcon = ({ size = 24, color = 'currentColor', ...props }: IconProps) => (
  <svg width={size} height={size} fill={color} {...props}>...</svg>
);
```

Usage:

```typescript
import { HeartIcon, UserIcon, ProstoLogo } from '@svg';

<HeartIcon size={32} color="red" />
<ProstoLogo size={100} />
```

---

## ➕ How to Add New Features

### Adding a New Interface

1. Add to appropriate file in `interfaces/` (or create new file)
2. Export from `interfaces/index.ts`
3. Import using `import type { NewInterface } from '@interfaces'`

### Adding a New Validation Message

1. Add the message to `constants/messages.ts` in the `ValidationMessages` object
2. Use descriptive key names (e.g., `FIELD_VALIDATION_TYPE`)
3. Import using `import { ValidationMessages } from '@constants'`
4. Use in forms: `message: ValidationMessages.YOUR_MESSAGE_KEY`

### Adding a New API Endpoint

1. Add request/response types to `interfaces/api.interface.ts`
2. Export from `interfaces/index.ts`
3. Add function to appropriate file in `services/api/` (get, post, patch, etc.)
4. Export from `services/api/index.ts`

### Adding a New Component

1. Create folder: `src/components/ComponentName/`
2. Add files: `ComponentName.tsx`, `ComponentName.css` (if needed), `index.ts`
3. Add props interface to `interfaces/components.interface.ts`
4. Export interface from `interfaces/index.ts`
5. Create component importing props from `@interfaces`

---

## 🚀 Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

---

*Last Updated: February 2026*
*Version: 3.2.0*
