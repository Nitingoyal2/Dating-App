# Prosto Dating App - Project Documentation

> A modern React dating application built with TypeScript, Redux Toolkit, Ant Design, and React Router.

---

## 📋 Table of Contents

1. [Tech Stack](#tech-stack)
2. [Folder Structure](#folder-structure)
3. [Path Aliases](#path-aliases)
4. [Types & Interfaces Architecture](#types--interfaces-architecture)
5. [Centralized Messages (Constants)](#centralized-messages-constants)
6. [Static Data (Data Files)](#static-data-data-files)
7. [Application Flow](#application-flow)
8. [Theme System](#theme-system)
9. [Components](#components)
10. [Pages](#pages)
11. [Login Setup Flow](#login-setup-flow)
12. [Profile Setup Flow](#profile-setup-flow)
13. [Backend API Integration](#backend-api-integration)
14. [Routing System](#routing-system)
15. [State Management (Redux)](#state-management-redux)
16. [SVG Icons](#svg-icons)
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
| **react-phone-input-2** | 2.x | Phone number input |

---

## 📁 Folder Structure

```
dating-app/
├── public/                    # Static assets
├── src/
│   ├── assets/               # Images, fonts, etc.
│   │   ├── index.ts          # Centralized asset exports
│   │   ├── react.svg         # React logo
│   │   └── images/
│   │       ├── index.ts      # Centralized image exports
│   │       ├── crousal1.jpg, crousal2.jpg, crousal5.png  # Home carousel
│   │       ├── login1.jpg, login2.jpg                    # Login background
│   │       └── coin.png, diamond.png, fire.png, etc.    # Icons
│   │
│   ├── components/           # Reusable UI components (each in own folder)
│   │   ├── AntdProvider/     # Ant Design theme provider
│   │   ├── AuthLayout/       # Auth pages layout (back btn, title, form)
│   │   ├── Button/           # Reusable button component (PrimaryButton)
│   │   ├── ConfirmModal/     # Reusable confirmation modal
│   │   ├── Layout/           # Main app layout (phone frame + side panel)
│   │   ├── Spinner/          # Custom logo-based loading spinner
│   │   ├── SuccessScreen/    # Success/celebration screen
│   │   └── ThemeToggle/     # Theme switcher component
│   │
│   ├── constants/            # Centralized constants & messages
│   │   ├── index.ts          # Exports all constants
│   │   └── messages.ts       # ValidationMessages for forms & toasts
│   │
│   ├── data/                 # Static data files
│   │   ├── index.ts          # Exports all data
│   │   ├── homeCarousel.ts   # Home page carousel data
│   │   ├── loginCarousel.ts  # Login background images
│   │   ├── welcomeRules.tsx  # Welcome step rules data
│   │   ├── termsOfService.ts # Terms of Service content
│   │   └── privacyPolicy.ts  # Privacy Policy content
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
│   │   ├── components.interface.ts # Component props
│   │   ├── layout.interface.ts # Layout props
│   │   ├── pages.interface.ts # Page-specific types
│   │   ├── routes.interface.ts # Route configs & guards
│   │   └── store.interface.ts # Redux state types
│   │
│   ├── pages/                # Page components (each in own folder)
│   │   ├── index.ts          # Exports all pages
│   │   ├── Splash/           # Loading/splash screen
│   │   ├── Home/             # Onboarding/landing page with carousel
│   │   ├── LoginSetup/       # Multi-step login with OTP
│   │   │   ├── LoginSetup.tsx    # Main controller with API integration
│   │   │   ├── index.tsx
│   │   │   └── steps/            # Login step components
│   │   │       ├── index.ts
│   │   │       ├── Login.tsx         # Phone/Email entry
│   │   │       ├── Login.css
│   │   │       └── OtpVerification.tsx  # OTP verification
│   │   ├── ForgotPassword/   # 3-step password recovery
│   │   │   ├── ForgotPassword.tsx  # Main controller
│   │   │   ├── index.ts
│   │   │   └── steps/              # Forgot password steps
│   │   │       ├── index.ts
│   │   │       ├── StepEmail.tsx      # Email entry
│   │   │       ├── StepEmailSent.tsx  # Confirmation page
│   │   │       └── StepVerifyOtp.tsx  # OTP verification
│   │   ├── Dashboard/        # Main app (protected)
│   │   ├── NotFound/         # 404 error page
│   │   ├── TermsOfService/   # Terms of Service page
│   │   │   ├── TermsOfService.tsx
│   │   │   ├── TermsOfService.css
│   │   │   └── index.ts
│   │   └── PrivacyPolicy/     # Privacy Policy page
│   │       ├── PrivacyPolicy.tsx
│   │       ├── PrivacyPolicy.css
│   │       └── index.ts
│   │   └── ProfileSetup/     # Multi-step profile creation
│   │       ├── ProfileSetup.tsx  # Main controller with API integration
│   │       ├── index.ts
│   │       └── steps/            # Profile step components
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
│   │   ├── routes.tsx        # Route definitions (all routes with guards)
│   │   ├── ProtectedRoute.tsx # Auth guard (logged in only, with loading)
│   │   └── PublicRoute.tsx   # Public guard (redirects if logged in, with loading)
│   │
│   ├── services/             # API services
│   │   ├── index.ts          # Exports all services
│   │   ├── interceptor.ts    # Axios instance with interceptors
│   │   ├── api_methods.ts    # Generic API methods (get, post, patch, etc.)
│   │   └── api/              # API endpoint functions
│   │       ├── index.ts      # Exports all API functions
│   │       ├── get_apis.ts   # GET endpoints
│   │       ├── post_apis.ts  # POST endpoints (login, registration, photos)
│   │       ├── patch_apis.ts # PATCH endpoints (profile updates)
│   │       ├── put_apis.ts   # PUT endpoints
│   │       └── delete_apis.ts # DELETE endpoints (photo delete)
│   │
│   ├── store/                # Redux state management
│   │   ├── index.ts          # Store configuration
│   │   ├── hooks.ts          # Typed useDispatch & useSelector
│   │   └── slices/           # Redux slices
│   │       ├── index.ts
│   │       ├── authSlice.ts  # Authentication state
│   │       └── appSlice.ts   # App-wide state (theme, notifications)
│   │
│   ├── types/                # TypeScript enums & constants only
│   │   ├── index.ts          # Exports all types
│   │   └── enums.ts          # Routes, Theme, AuthStatus, LoginType, etc.
│   │
│   ├── utils/                # Utility functions & components
│   │   └── svg/              # SVG icon components
│   │       ├── index.ts      # Exports all icons
│   │       ├── icons.tsx     # Icon components (25+ icons)
│   │       └── ProstoLogo.tsx # App logo
│   │
│   ├── main.tsx              # Application entry point
│   ├── App.tsx               # Root component
│   ├── App.css               # App-level styles
│   └── index.css             # Global styles, fonts & CSS variables
│
├── index.html                # HTML template
├── vite.config.ts            # Vite configuration + aliases
├── tsconfig.json             # TypeScript config
├── tsconfig.app.json         # App-specific TS config + aliases
├── package.json              # Dependencies & scripts
├── PROJECT_DOCUMENTATION.md  # This file
└── BACKEND_API_SPEC.md       # Backend API specification
```

---

## 🔗 Path Aliases

Configured in `tsconfig.app.json` and `vite.config.ts`:

| Alias | Maps To | Example Usage |
|-------|---------|---------------|
| `@/*` | `src/*` | `import { Routes, LoginType } from '@/types'` |
| `@components/*` | `src/components/*` | `import AuthLayout from '@components/AuthLayout'` |
| `@pages/*` | `src/pages/*` | `import { Home } from '@/pages'` |
| `@interfaces` | `src/interfaces` | `import type { ProfileData } from '@interfaces'` |
| `@constants` | `src/constants` | `import { ValidationMessages } from '@constants'` |
| `@store/*` | `src/store/*` | `import { useAppDispatch } from '@store/hooks'` |
| `@hooks` | `src/hooks` | `import { useTheme } from '@hooks'` |
| `@services` | `src/services` | `import { loginApi, otpVerifyApi } from '@services'` |
| `@utils/*` | `src/utils/*` | `import { formatDate } from '@utils/helpers'` |
| `@svg` | `src/utils/svg` | `import { HeartIcon, ProstoLogo } from '@svg'` |
| `@assets` | `src/assets` | `import { crousal1, login1, coinIcon } from '@assets'` |
| `@assets/*` | `src/assets/*` | `import { Images } from '@assets'` |

---

## 📐 Types & Interfaces Architecture

The project separates **enums/constants** from **interfaces** for better organization:

### `types/enums.ts` - All Enums & Constants

```typescript
// Route paths
export const Routes = {
  HOME: '/',
  LOGIN: '/login',
  FORGOT_PASSWORD: '/forgot-password',
  DASHBOARD: '/dashboard',
  PROFILE: '/profile',
  PROFILE_SETUP: '/profile-setup',
  MATCHES: '/matches',
  CHAT: '/chat',
  SETTINGS: '/settings',
  DISCOVER: '/discover',
} as const;
export type Routes = (typeof Routes)[keyof typeof Routes];

// Theme modes
export const Theme = { LIGHT: 'light', DARK: 'dark', DEFAULT: 'default' } as const;
export type Theme = (typeof Theme)[keyof typeof Theme];

// Effective theme (actual applied)
export const EffectiveTheme = { LIGHT: 'light', DARK: 'dark' } as const;
export type EffectiveTheme = (typeof EffectiveTheme)[keyof typeof EffectiveTheme];

// Notification types
export const NotificationType = { SUCCESS: 'success', ERROR: 'error', WARNING: 'warning', INFO: 'info' } as const;
export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType];

// Auth status
export const AuthStatus = { IDLE: 'idle', LOADING: 'loading', AUTHENTICATED: 'authenticated', UNAUTHENTICATED: 'unauthenticated', ERROR: 'error' } as const;
export type AuthStatus = (typeof AuthStatus)[keyof typeof AuthStatus];

// Gender options
export const Gender = { MALE: 'male', FEMALE: 'female', OTHER: 'other', PREFER_NOT_TO_SAY: 'prefer_not_to_say' } as const;
export type Gender = (typeof Gender)[keyof typeof Gender];

// Relationship goals
export const RelationshipGoal = { CASUAL: 'casual', SERIOUS: 'serious', FRIENDSHIP: 'friendship', NOT_SURE: 'not_sure' } as const;
export type RelationshipGoal = (typeof RelationshipGoal)[keyof typeof RelationshipGoal];

// API status
export const ApiStatus = { IDLE: 'idle', LOADING: 'loading', SUCCESS: 'success', ERROR: 'error' } as const;
export type ApiStatus = (typeof ApiStatus)[keyof typeof ApiStatus];

// Login type (phone or email)
export const LoginType = { PHONE: 'phone', EMAIL: 'email' } as const;
export type LoginType = (typeof LoginType)[keyof typeof LoginType];

// Profile status (for account states)
export const ProfileStatus = { SUSPENDED: 'suspended' } as const;
export type ProfileStatus = (typeof ProfileStatus)[keyof typeof ProfileStatus];
```

### `interfaces/` - All Interfaces (Centralized)

| File | Contents |
|------|----------|
| `api.interface.ts` | `LoginRequest`, `LoginResponse`, `OtpVerifyRequest`, `OtpVerifyResponse`, `DraftRequest`, `DraftResponse`, `ProfileUpdateRequest`, `CompleteResponse`, `ForgotPasswordRequest`, `ForgotPasswordResponse`, `PhotoBatchUploadResponse`, etc. |
| `auth.interface.ts` | `AuthLayoutProps`, `LoginFormData`, `LoginPayload`, etc. |
| `common.interface.ts` | `User`, `ApiResponse<T>`, `PaginatedResponse<T>` |
| `components.interface.ts` | `IconProps`, `PrimaryButtonProps`, `ConfirmModalProps` (with `showCancel`, `width`), `ThemeToggleProps` |
| `layout.interface.ts` | `LayoutProps` |
| `pages.interface.ts` | `GenderType`, `PhotoItem`, `ProfileData`, `StepProps`, `LoginSetupLoginProps`, `OtpVerificationProps`, `TermsSection`, `PrivacySection`, `WelcomeRule`, etc. |
| `routes.interface.ts` | `RouteConfig`, `ProtectedRouteProps`, `PublicRouteProps` |
| `store.interface.ts` | `AuthState`, `UserState`, `AppState`, `LoginSuccessPayload` |

### Usage Example

```typescript
// Import enums from @/types
import { Routes, Theme, LoginType, AuthStatus } from '@/types';

// Import interfaces from @interfaces
import type { ProfileData, StepProps, LoginRequest, OtpVerifyResponse } from '@interfaces';
```

---

## 📝 Centralized Messages (Constants)

All validation messages, toast notifications, and user-facing strings are centralized in `constants/messages.ts`:

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
message.error(ValidationMessages.OTP_INVALID);
```

### Pages Using ValidationMessages

| Page | Messages Used |
|------|---------------|
| `LoginSetup.tsx` | `OTP_SEND_FAILED`, `OTP_INVALID`, `OTP_RESEND_FAILED`, `OTP_RESENT` |
| `LoginSetup/steps/Login.tsx` | `EMAIL_REQUIRED`, `EMAIL_INVALID`, `PHONE_INVALID` |
| `ForgotPassword.tsx` | `EMAIL_*` |
| `StepEmail.tsx` | `EMAIL_*` |
| `StepName.tsx` | `NAME_*` |
| `StepPhotos.tsx` | `PHOTO_*` |
| `StepSuccess.tsx` | `PASSWORD_*` |
| `ProfileSetup.tsx` | `ACCOUNT_CREATED` |

---

## 📊 Static Data (Data Files)

Static data is centralized in `src/data/` for easy maintenance:

### `data/homeCarousel.ts`

```typescript
export interface CarouselSlide {
  id: number;
  image: string;
  title: string;
  description: string;
}

export const homeCarouselData: CarouselSlide[] = [
  { id: 1, image: carousel1, title: 'Algorithm', description: '...' },
  { id: 2, image: carousel2, title: 'Matches', description: '...' },
  { id: 3, image: carousel3, title: 'Premium', description: '...' },
];
```

### `data/loginCarousel.ts`

```typescript
export const loginBackgroundImages: string[] = [login1, login2];
```

### `data/welcomeRules.tsx`

```typescript
import type { WelcomeRule } from '@interfaces';

export const welcomeRules: WelcomeRule[] = [
  { title: 'Be yourself', description: '...' },
  { title: 'Stay safe', description: '...' },
  { title: 'Play it cool', description: '...' },
  { title: 'Be Proactive', description: '...' },
];
```

### `data/termsOfService.ts`

```typescript
import type { TermsSection } from '@interfaces';

export const termsOfServiceData: TermsSection[] = [
  {
    title: '1. Acceptance of Terms',
    content: 'By accessing and using Prosto...',
  },
  {
    title: '2. Use License',
    content: 'Permission is granted...',
    subsections: [
      {
        title: '',
        content: [
          'Modify or copy the materials',
          'Use the materials for any commercial purpose...',
        ],
      },
    ],
  },
  // ... more sections
];
```

### `data/privacyPolicy.ts`

```typescript
import type { PrivacySection } from '@interfaces';

export const privacyPolicyData: PrivacySection[] = [
  {
    title: '1. Introduction',
    content: 'Prosto ("we," "our," or "us") is committed...',
  },
  {
    title: '2. Information We Collect',
    subsections: [
      {
        title: '2.1 Information You Provide',
        content: [
          'Name, email address, phone number',
          'Date of birth and age',
          // ... more items
        ],
      },
      {
        title: '2.2 Automatically Collected Information',
        content: [
          'Device information...',
          'Log data...',
        ],
      },
    ],
  },
  // ... more sections
];
```

### Usage

```typescript
import { 
  homeCarouselData, 
  loginBackgroundImages, 
  welcomeRules,
  termsOfServiceData,
  privacyPolicyData 
} from '@/data';

// Import interfaces from @interfaces
import type { TermsSection, PrivacySection } from '@interfaces';
```

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
   │   └── Shows carousel → "Get Started" button
   │
   ├── "/login" (RESTRICTED PUBLIC)
   │   ├── If authenticated → Redirect to /dashboard
   │   └── If not authenticated → LoginSetup (2-step OTP flow)
   │       ├── Step 1: Phone/Email entry
   │       └── Step 2: OTP verification → Dashboard
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

### Spinner

```typescript
import { Spinner } from '@components/Spinner';

// Basic usage
<Spinner />

// With size
<Spinner size="large" />

// Full screen (for route guards)
<Spinner size="large" fullScreen />

// With loading message
<Spinner size="default" tip="Loading..." />
```

**Features**:
- Uses app logo (`/favicon.svg`) with rotation animation
- Three sizes: `small` (40px), `default` (60px), `large` (80px)
- Full screen mode for route loading states
- Optional tip text with fade animation
- Theme-aware (works with light/dark themes)

### ConfirmModal

```typescript
import { ConfirmModal } from '@components/ConfirmModal';

<ConfirmModal
  open={isOpen}
  onClose={() => setIsOpen(false)}
  onConfirm={handleConfirm}
  type="success"        // 'success' | 'warning' | 'info' | 'error'
  title="Please confirm"
  description="Are you sure?"
  confirmText="Confirm"
  cancelText="Cancel"
  confirmVariant="primary"    // 'primary' | 'secondary'
  cancelVariant="secondary"   // 'primary' | 'secondary' | 'outline' | 'text'
  showCancel={true}           // Hide cancel button if false
  width={320}                 // Modal width in pixels
/>
```

### ThemeToggle

```typescript
import { ThemeToggle } from '@components/ThemeToggle';

<ThemeToggle 
  variant="icons"  // 'buttons' | 'dropdown' | 'icons'
  showLabel={true}
/>
```

### AuthLayout

```typescript
import AuthLayout from '@components/AuthLayout';

<AuthLayout
  title="Welcome"
  description="Please follow these rules"
  onBackClick={handleBack}
>
  {children}
</AuthLayout>
```

---

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| Splash | (initial) | Loading screen with Prosto logo |
| Home | `/` | Onboarding carousel screen |
| LoginSetup | `/login` | 2-step login with OTP (Phone/Email → OTP) |
| ForgotPassword | `/forgot-password` | 3-step password recovery (Email → Confirmation → OTP) |
| ProfileSetup | `/profile-setup` | 9-step profile creation with API |
| Dashboard | `/dashboard` | Main app (after authentication) |
| Profile | `/profile` | User profile page (protected) |
| TermsOfService | `/terms-of-service` | Terms of Service page (public) |
| PrivacyPolicy | `/privacy-policy` | Privacy Policy page (public) |
| NotFound | `*` | 404 error page (catch-all route) |

---

## 🔐 Login Setup Flow

2-step login with **OTP authentication**:

| Step | Component | API Call | Data |
|------|-----------|----------|------|
| 1 | `Login` | `POST /api/login` | `{ country_code, phone }` or `{ email }` |
| 2 | `OtpVerification` | `POST /api/login/verify-otp` | `{ country_code, phone, otp }` or `{ email, otp }` |

### LoginSetup Implementation

```typescript
import { LoginType, ProfileStatus } from '@/types';
import { loginApi, otpVerifyApi, resendOtpApi } from '@services';
import { ValidationMessages } from '@constants';
import { ConfirmModal } from '@components/ConfirmModal';

const [loginType, setLoginType] = useState<LoginType>(LoginType.PHONE);
const [countryCode, setCountryCode] = useState('1');
const [isSuspendedModalOpen, setIsSuspendedModalOpen] = useState(false);

// Step 1: Send OTP (with suspended account handling)
const handleSendOtp = async () => {
  const payload = loginType === LoginType.PHONE
    ? { country_code: `+${countryCode}`, phone: getPhoneWithoutCode() }
    : { email };
  
  try {
    await loginApi(payload);
    setCurrentStep(2);
  } catch (error) {
    const msg = error.message.toLowerCase();
    // Check if account is suspended
    if (msg.includes(ProfileStatus.SUSPENDED.toLowerCase())) {
      setIsSuspendedModalOpen(true);
      return;
    }
    message.error(err.message || ValidationMessages.OTP_SEND_FAILED);
  }
};

// Step 2: Verify OTP
const handleVerifyOtp = async () => {
  const payload = loginType === LoginType.PHONE
    ? { country_code: `+${countryCode}`, phone: getPhoneWithoutCode(), otp }
    : { email, otp };
  
  try {
    const response = await otpVerifyApi(payload);
    dispatch(loginSuccess({ user: response.user, token: response.access_token }));
  } catch (error) {
    message.error(err.message || ValidationMessages.OTP_INVALID);
  }
};

// Resend OTP
const handleResendOtp = async () => {
  await resendOtpApi(payload);
  message.success(ValidationMessages.OTP_RESENT);
};

// Suspended account modal
<ConfirmModal
  open={isSuspendedModalOpen}
  onClose={() => setIsSuspendedModalOpen(false)}
  onConfirm={() => setIsSuspendedModalOpen(false)}
  type="warning"
  title=""
  description="Your DateMe Account has been banned for activity that violates our Terms of Use."
  confirmText="Okay"
  showCancel={false}
  width={340}
/>
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
| 7 | `StepPhotos` | `POST /api/profile/{user_id}/photos` | Batch upload (all photos at once on Continue) |
| 8 | `StepWelcome` | `PATCH /api/profile/{user_id}` | `{ rules_accepted: true }` |
| 9 | `StepSuccess` | `POST /api/profile/{user_id}/complete` | `{ password, confirm_password }` |

### ProfileSetup Implementation

```typescript
// Single unified handler for all steps
const handleStepSubmit = async (step: number, extraData?: {...}) => {
  setIsLoading(true);
  try {
    if (step === 1) {
      const response = await registrationDraftApi({ email: profileData.email });
      setUserId(response.user_id);
    } else if (step === 7) {
      // Batch upload all photos at once
      const files = profileData.photos.map((item) => item.file);
      await uploadPhotosApi(userId, files);
    } else if (step === 9) {
      const response = await registrationCompleteApi(userId, { password, confirm_password });
      dispatch(loginSuccess({ user: response.user, token: response.tokens.access_token }));
      message.success(ValidationMessages.ACCOUNT_CREATED);
    } else {
      const payload = getStepPayload(step, extraData);
      await profileStepPatchApi(userId, payload);
    }
    setCurrentStep(step + 1);
  } catch (error) {
    message.error(error.message);
  } finally {
    setIsLoading(false);
  }
};
```

**Photo Upload Pattern**:
- Photos stored as `PhotoItem[]` with `file: File` and `preview: string` (URL.createObjectURL)
- No API calls during photo selection
- Single batch upload when user clicks "Continue"
- All photos sent together using FormData with `photos[]` key

---

## 🔑 Forgot Password Flow

3-step password recovery with **OTP verification**:

| Step | Component | API Call | Data |
|------|-----------|----------|------|
| 1 | `StepEmail` | `POST /api/forgot-password` | `{ email }` |
| 2 | `StepEmailSent` | (Frontend) | Confirmation page |
| 3 | `StepVerifyOtp` | `POST /api/forgot-password/verify` | `{ email, otp }` |

### ForgotPassword Implementation

```typescript
import { forgotPasswordApi, forgotPasswordVerifyApi, forgotPasswordResendApi } from '@services';

// Step 1: Send OTP
const handleSendOtp = async () => {
  await forgotPasswordApi({ email });
  setCurrentStep(2);
};

// Step 2: Go to OTP verification
const handleProceedToVerify = () => {
  setCurrentStep(3);
};

// Step 3: Verify OTP and auto-login
const handleVerifyOtp = async () => {
  const response = await forgotPasswordVerifyApi({ email, otp });
  dispatch(loginSuccess({ user: response.user, token: response.access_token }));
  navigate(Routes.DASHBOARD);
};

// Resend OTP
const handleResendOtp = async () => {
  await forgotPasswordResendApi({ email });
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
    ├── index.ts       # Exports all API functions
    ├── get_apis.ts    # GET endpoints
    ├── post_apis.ts   # POST endpoints (login, registration, photos)
    ├── patch_apis.ts  # PATCH endpoints (profile updates)
    ├── put_apis.ts    # PUT endpoints
    └── delete_apis.ts # DELETE endpoints (photo delete)
```

### API Endpoints

| Endpoint | File | Function |
|----------|------|----------|
| `POST /api/login` | `post_apis.ts` | `loginApi()` |
| `POST /api/login/verify-otp` | `post_apis.ts` | `otpVerifyApi()` |
| `POST /api/login/resend-otp` | `post_apis.ts` | `resendOtpApi()` |
| `POST /api/forgot-password` | `post_apis.ts` | `forgotPasswordApi()` |
| `POST /api/forgot-password/verify` | `post_apis.ts` | `forgotPasswordVerifyApi()` |
| `POST /api/draft` | `post_apis.ts` | `registrationDraftApi()` |
| `PATCH /api/profile/{id}` | `patch_apis.ts` | `profileStepPatchApi()` |
| `POST /api/profile/{id}/photos` | `post_apis.ts` | `uploadPhotosApi()` (batch) |
| `DELETE /api/profile/{id}/photos/{id}` | `delete_apis.ts` | `profilePhotoDeleteApi()` |
| `POST /api/profile/{id}/complete` | `post_apis.ts` | `registrationCompleteApi()` |

### API Functions

```typescript
// services/api/post_apis.ts
import type { LoginRequest, LoginResponse, OtpVerifyRequest, OtpVerifyResponse } from '@interfaces';

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

// Registration APIs
export const registrationDraftApi = async (data: DraftRequest): Promise<DraftResponse> => {
  return await postApi<DraftResponse>('/api/draft', data);
};

export const registrationCompleteApi = async (userId: string, data: CompleteRequest): Promise<CompleteResponse> => {
  return await postApi<CompleteResponse>(`/api/profile/${userId}/complete`, data);
};
```

### API Response Types

```typescript
// interfaces/api.interface.ts

// Login Types
export interface LoginPhoneRequest { country_code: string; phone: string; }
export interface LoginEmailRequest { email: string; }
export type LoginRequest = LoginPhoneRequest | LoginEmailRequest;

export interface LoginResponse {
  message: string;
  otp_sent: boolean;
  expires_in: number;
}

export interface OtpVerifyResponse {
  user: { id: string; email?: string; phone?: string; first_name: string; };
  access_token: string;
}

// Registration Types
export interface DraftResponse { user_id: string; email: string; }

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
  tokens: { access_token: string; refresh_token: string; token_type: string; expires_in: number; };
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

### Route Guards

```typescript
// routes/ProtectedRoute.tsx
import { Spinner } from '@components/Spinner';

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated, status } = useAppSelector((state) => state.auth);
  
  // Show loading spinner while checking auth
  if (status === AuthStatus.LOADING || status === AuthStatus.IDLE) {
    return <Spinner size="large" fullScreen />;
  }
  
  if (!isAuthenticated) {
    return <Navigate to={Routes.LOGIN} state={{ from: location }} replace />;
  }
  
  return <>{children}</>;
};

// routes/PublicRoute.tsx
import { Spinner } from '@components/Spinner';

const PublicRoute = ({ children, restricted = false }: PublicRouteProps) => {
  const { isAuthenticated, status } = useAppSelector((state) => state.auth);
  
  // Show loading spinner for restricted routes
  if (restricted && status === AuthStatus.LOADING) {
    return <Spinner size="large" fullScreen />;
  }
  
  if (restricted && isAuthenticated) {
    const from = location.state?.from?.pathname || Routes.DASHBOARD;
    return <Navigate to={from} replace />;
  }
  
  return <>{children}</>;
};
```

**Route Types**:
- **Public Routes**: Accessible to everyone (Home, ProfileSetup)
- **Restricted Public Routes**: Only for non-authenticated users (Login, ForgotPassword)
- **Protected Routes**: Only for authenticated users (Dashboard, Profile, Matches, Chat, Settings, Discover)
- **Catch-All Route**: 404 NotFound page for unmatched routes

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

### Auth Slice Actions

```typescript
import { loginSuccess, logout, setUser, updateUser } from '@store/slices';

// Login success
dispatch(loginSuccess({ user: { id, name, email }, token: 'xxx' }));

// Logout
dispatch(logout());
```

---

## 🎨 SVG Icons

All icons are in `utils/svg/icons.tsx` with consistent `IconProps`:

### Available Icons (25+)

| Icon | Usage |
|------|-------|
| `ArrowLeftIcon`, `ArrowRightIcon` | Navigation |
| `MailIcon`, `LockIcon` | Form inputs |
| `EyeIcon`, `EyeOffIcon` | Password toggle |
| `UserIcon` | Profile |
| `HeartIcon`, `HeartFilledIcon`, `TwoHeartsIcon` | Love/favorites |
| `MessageIcon` | Chat |
| `SearchIcon` | Search |
| `SettingsIcon` | Settings |
| `CloseIcon`, `CheckIcon` | Actions |
| `CameraIcon` | Photo upload |
| `LocationIcon` | Location |
| `SunIcon`, `MoonIcon`, `MonitorIcon` | Theme toggle |
| `FacebookIcon`, `AppleIcon`, `GoogleIcon` | Social login |
| `WarningIcon`, `SuccessIcon` | Status icons |
| `ProstoLogo` | App logo |

### Usage

```typescript
import { HeartIcon, ProstoLogo, WarningIcon } from '@svg';

<HeartIcon size={32} color="red" />
<ProstoLogo size={100} />
<WarningIcon size={64} />
```

---

## ➕ How to Add New Features

### Adding a New Validation Message

1. Add to `constants/messages.ts`:
   ```typescript
   NEW_MESSAGE_KEY: 'Your message text',
   ```
2. Use: `ValidationMessages.NEW_MESSAGE_KEY`

### Adding a New Enum

1. Add to `types/enums.ts`:
   ```typescript
   export const NewEnum = { VALUE1: 'value1', VALUE2: 'value2' } as const;
   export type NewEnum = (typeof NewEnum)[keyof typeof NewEnum];
   ```
2. Export from `types/index.ts`
3. Use: `import { NewEnum } from '@/types'`

### Adding a New Interface

1. Add to appropriate file in `interfaces/`
2. Export from `interfaces/index.ts`
3. Use: `import type { NewInterface } from '@interfaces'`

### Adding a New API Endpoint

1. Add types to `interfaces/api.interface.ts`
2. Export from `interfaces/index.ts`
3. Add function to `services/api/[method]_apis.ts`
4. Export from `services/api/index.ts`

### Adding a New Component

1. Create folder: `src/components/ComponentName/`
2. Add files: `ComponentName.tsx`, `ComponentName.css`, `index.ts`
3. Add props interface to `interfaces/components.interface.ts`
4. Export from `interfaces/index.ts`

### Adding Static Data

1. Create file in `src/data/` (e.g., `newData.ts`)
2. Export from `data/index.ts`
3. Use: `import { newData } from '@/data'`

### Adding Images

1. Add image file to `src/assets/images/`
2. Import and export from `src/assets/images/index.ts`:
   ```typescript
   import newImage from './newImage.png';
   export { newImage };
   ```
3. Use: `import { newImage } from '@assets'` or `import { Images } from '@assets'`

### Adding a New Route

1. Add route path to `types/enums.ts` (`Routes` object)
2. Create page component in `src/pages/`
3. Add route config to `routes/routes.tsx`:
   ```typescript
   {
     path: Routes.NEW_ROUTE,
     element: (
       <ProtectedRoute>  // or <PublicRoute restricted>
         <NewPage />
       </ProtectedRoute>
     ),
     isProtected: true,  // or false
   }
   ```
4. Export page from `pages/index.ts`

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
*Version: 3.5.0*

## 📝 Recent Updates

### v3.5.0 (February 2026)

### Interface Centralization
- **All interfaces centralized**: All TypeScript interfaces now imported from `@interfaces` folder
- **Legal page interfaces**: `TermsSection` and `PrivacySection` added to `pages.interface.ts`
- **Data files updated**: Data files (`termsOfService.ts`, `privacyPolicy.ts`) now import interfaces instead of defining locally
- **Consistent pattern**: All data files follow the same pattern of importing interfaces from `@interfaces`

### Legal Pages
- **Terms of Service page**: Custom page component with content from data file
- **Privacy Policy page**: Custom page component with content from data file
- **Content management**: All legal content stored in `src/data/` folder for easy maintenance
- **Dynamic rendering**: Pages dynamically render sections and subsections from data
- **Routes added**: `/terms-of-service` and `/privacy-policy` routes added as public routes

### v3.4.0 (February 2026)

### Photo Upload Refactoring
- **Batch Upload**: Photos stored locally as `File` objects, uploaded together on Continue
- **PhotoItem Interface**: `{ file: File, preview: string }` for efficient memory usage
- **Single API Call**: All photos sent in one request using FormData with `photos[]` key
- **No Base64**: Uses `URL.createObjectURL()` for previews instead of base64 strings

### Image Assets Centralization
- **Centralized Exports**: All images exported from `@assets/images/index.ts`
- **Grouped Object**: `Images` object with categorized access (`Images.carousel`, `Images.icons`)
- **Clean Imports**: `import { crousal1, login1 } from '@assets'`

### Forgot Password Flow
- **3-Step Process**: Email → Confirmation → OTP Verification
- **Auto-Login**: Automatically logs user in after successful OTP verification
- **Resend Support**: 30-second cooldown timer for resending OTP

### Route Guards Enhancement
- **Loading States**: Custom spinner shown during auth checks
- **All Routes Guarded**: Every route properly protected with guards
- **404 Page**: Catch-all route with NotFound component
- **Better UX**: Smooth transitions with loading indicators

### Custom Spinner Component
- **Logo-Based**: Uses app logo (`/favicon.svg`) with rotation animation
- **Theme-Aware**: Works seamlessly with light/dark themes
- **Multiple Sizes**: Small, default, and large variants
- **Full Screen Mode**: For route loading states
