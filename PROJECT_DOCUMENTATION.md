# Prosto Dating App - Project Documentation

> A modern React dating application built with TypeScript, Redux Toolkit, Ant Design, and React Router.

---

## 📋 Table of Contents

1. [Tech Stack](#tech-stack)
2. [Folder Structure](#folder-structure)
3. [Path Aliases](#path-aliases)
4. [Application Flow](#application-flow)
5. [Theme System](#theme-system)
6. [Components](#components)
7. [Pages](#pages)
8. [Profile Setup Flow](#profile-setup-flow)
9. [Backend API](#backend-api)
10. [Routing System](#routing-system)
11. [State Management (Redux)](#state-management-redux)
12. [Types & Enums](#types--enums)
13. [SVG Icons](#svg-icons)
14. [Styling Approach](#styling-approach)
15. [How to Add New Features](#how-to-add-new-features)

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

---

## 📁 Folder Structure

```
dating-app/
├── public/                    # Static assets
├── src/
│   ├── assets/               # Images, fonts, etc.
│   │   └── react.svg
│   │
│   ├── components/           # Reusable UI components
│   │   ├── Layout.tsx        # Main app layout (phone frame + side panel)
│   │   ├── Layout.css
│   │   ├── AuthLayout.tsx    # Auth pages layout (back btn, title, form)
│   │   ├── AuthLayout.css
│   │   ├── AntdProvider.tsx  # Ant Design theme provider
│   │   ├── ThemeToggle.tsx   # Theme switcher component
│   │   ├── ThemeToggle.css
│   │   ├── Button/           # Reusable button component
│   │   │   ├── PrimaryButton.tsx
│   │   │   ├── Button.css
│   │   │   └── index.ts
│   │   ├── ConfirmModal/     # Reusable confirmation modal
│   │   │   ├── ConfirmModal.tsx
│   │   │   ├── ConfirmModal.css
│   │   │   └── index.ts
│   │   └── SuccessScreen/    # Success/celebration screen
│   │       ├── SuccessScreen.tsx
│   │       ├── SuccessScreen.css
│   │       └── index.ts
│   │
│   ├── hooks/                # Custom React hooks
│   │   ├── index.ts
│   │   └── useTheme.ts       # Theme management hook
│   │
│   ├── pages/                # Page components (each in own folder)
│   │   ├── index.ts          # Exports all pages
│   │   ├── Splash/           # Loading/splash screen
│   │   ├── Home/             # Onboarding/landing page
│   │   ├── Login/            # Login page
│   │   ├── ForgotPassword/   # Password recovery
│   │   ├── Dashboard/        # Main app (protected)
│   │   └── ProfileSetup/     # Multi-step profile creation
│   │       ├── ProfileSetup.tsx
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
│   │           └── StepSuccess.tsx
│   │
│   ├── routes/               # Routing configuration
│   │   ├── index.tsx         # AppRoutes component
│   │   ├── routes.tsx        # Route definitions
│   │   ├── ProtectedRoute.tsx # Auth guard (logged in only)
│   │   └── PublicRoute.tsx   # Public guard (redirects if logged in)
│   │
│   ├── store/                # Redux state management
│   │   ├── index.ts          # Store configuration
│   │   ├── hooks.ts          # Typed useDispatch & useSelector
│   │   └── slices/           # Redux slices
│   │       ├── index.ts      # Exports all slices
│   │       ├── authSlice.ts  # Authentication state
│   │       └── appSlice.ts   # App-wide state (theme, notifications)
│   │
│   ├── types/                # TypeScript types & constants
│   │   ├── index.ts          # Exports all types
│   │   ├── enums.ts          # Routes, Theme, AuthStatus, etc.
│   │   ├── auth.types.ts     # Auth-related types
│   │   ├── store.types.ts    # Redux state types
│   │   ├── routes.types.ts   # Route configuration types
│   │   ├── layout.types.ts   # Layout props types
│   │   └── common.types.ts   # Shared types (User, API response)
│   │
│   ├── services/             # API services
│   │   ├── index.ts          # Exports all services
│   │   ├── interceptor.ts    # Axios instance with interceptors
│   │   ├── api_methods.ts    # Generic API methods (get, post, patch, etc.)
│   │   └── api_collections.ts # All API endpoint functions
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
└── BACKEND_API_SPEC.md       # Backend API specification (v2.0.0)
```

---

## 🔗 Path Aliases

Configured in `tsconfig.app.json` and `vite.config.ts`:

| Alias | Maps To | Example Usage |
|-------|---------|---------------|
| `@/*` | `src/*` | `import { Routes } from '@/types'` |
| `@components/*` | `src/components/*` | `import AuthLayout from '@components/AuthLayout'` |
| `@pages/*` | `src/pages/*` | `import { Home } from '@/pages'` |
| `@types/*` | `src/types/*` | `import type { User } from '@/types'` |
| `@store/*` | `src/store/*` | `import { useAppDispatch } from '@store/hooks'` |
| `@hooks` | `src/hooks` | `import { useTheme } from '@hooks'` |
| `@services` | `src/services` | `import { createDraft, login } from '@services'` |
| `@utils/*` | `src/utils/*` | `import { formatDate } from '@utils/helpers'` |
| `@svg` | `src/utils/svg` | `import { HeartIcon } from '@svg'` |

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
   │   └── 9-step profile creation flow
   │       → On complete: Auto-login → Dashboard
   │
   ├── "/forgot-password" (RESTRICTED PUBLIC)
   │   └── Show password recovery form
   │
   └── "/dashboard" (PROTECTED)
       ├── If not authenticated → Redirect to /login
       └── If authenticated → Show Dashboard
```

### User Flow Diagram

```
┌──────────┐     ┌──────────┐     ┌─────────────────┐     ┌───────────┐
│   HOME   │────▶│  LOGIN   │────▶│  PROFILE SETUP  │────▶│ DASHBOARD │
│          │     │          │     │   (9 Steps)     │     │           │
│Get Started     │ Sign Up  │     │                 │     │ (Logged   │
└──────────┘     └────┬─────┘     └─────────────────┘     │   In)     │
                     │                                    └───────────┘
                     │ Sign In (existing user)                  ▲
                     └──────────────────────────────────────────┘
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

### CSS Variables

All colors use CSS variables defined in `index.css`. Colors automatically adapt to light/dark mode:

```css
:root {
  /* Backgrounds */
  --color-bg-primary: #ffffff;
  --color-bg-secondary: #fafafa;
  --color-bg-tertiary: #f5f5f5;
  
  /* Text */
  --color-text-primary: #1a1a2e;
  --color-text-secondary: #4a4a68;
  --color-text-inverse: #ffffff;
  
  /* Accents */
  --color-accent-primary: #6C5CE7;
  --color-accent-secondary: #a855f7;
  --color-accent-tertiary: #ec4899;
  
  /* Button Colors (Coral/Pink & Blue) */
  --color-btn-primary: #ff6b6b;
  --color-btn-primary-gradient: linear-gradient(135deg, #ff6b6b 0%, #ee5a5a 100%);
  --color-btn-primary-shadow: rgba(255, 107, 107, 0.35);
  --color-btn-secondary-gradient: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  
  /* Status */
  --color-success: #10b981;
  --color-warning: #f59e0b;
  --color-error: #ef4444;
  --color-info: #3b82f6;
}

[data-theme="dark"] {
  --color-bg-primary: #0f0f1a;
  --color-text-primary: #f5f5f7;
  --color-btn-primary: #ff7b7b;
  --color-btn-primary-gradient: linear-gradient(135deg, #ff7b7b 0%, #f06a6a 100%);
  /* ... dark mode overrides for all variables */
}
```

### Color Guidelines

| Category | Light Mode | Dark Mode | CSS Variable |
|----------|------------|-----------|--------------|
| Primary Button | `#ff6b6b` | `#ff7b7b` | `--color-btn-primary` |
| Secondary Button | `#3b82f6` | `#60a5fa` | `--color-btn-secondary` |
| Accent | `#6C5CE7` | `#8b7cf7` | `--color-accent-primary` |
| Success | `#10b981` | `#34d399` | `--color-success` |
| Background | `#ffffff` | `#0f0f1a` | `--color-bg-primary` |

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

### Layout Component (`components/Layout.tsx`)

The main wrapper that provides the phone-like interface:

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ┌─────────────────┐     ┌─────────────────────────────┐   │
│  │   PHONE FRAME   │     │      SIDE PANEL             │   │
│  │   (max 425px)   │     │   • "Prosto" branding       │   │
│  │                 │     │   • Floating hearts         │   │
│  │   App content   │     │   • Stats (2M+ users)       │   │
│  │   renders here  │     │   (Hidden on mobile)        │   │
│  └─────────────────┘     └─────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

### AuthLayout Component (`components/AuthLayout.tsx`)

Reusable layout for authentication and profile setup pages:

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | - | Page heading |
| `description` | string | - | Subheading text (optional) |
| `descriptionColor` | `'default' \| 'accent'` | `'default'` | Description color |
| `onBackClick` | () => void | - | Back button handler |
| `showBackButton` | boolean | `true` | Show/hide back button |
| `centered` | boolean | `false` | Center content vertically |
| `children` | ReactNode | - | Form content |
| `footer` | ReactNode | - | Optional footer content |

---

### PrimaryButton Component (`components/Button/`)

Reusable button with multiple variants:

```typescript
import { PrimaryButton } from '@components/Button';

<PrimaryButton 
  variant="primary"    // 'primary' | 'secondary' | 'outline' | 'text'
  size="large"         // 'small' | 'medium' | 'large'
  fullWidth={true}     // boolean
  rounded={true}       // boolean (pill shape)
  disabled={false}
  loading={false}
  onClick={handleClick}
>
  Continue
</PrimaryButton>
```

**Variants (Theme-aware):**

| Variant | Style | CSS Variable |
|---------|-------|--------------|
| `primary` | Coral/Pink gradient | `--color-btn-primary-gradient` |
| `secondary` | Blue gradient | `--color-btn-secondary-gradient` |
| `outline` | Transparent with accent border | `--color-accent-primary` |
| `text` | Text only, no background | `--color-text-secondary` |

All button variants automatically adapt to light/dark mode.

---

### ConfirmModal Component (`components/ConfirmModal/`)

Reusable confirmation dialog:

```typescript
import { ConfirmModal } from '@components/ConfirmModal';

<ConfirmModal
  open={isOpen}
  onClose={() => setIsOpen(false)}
  onConfirm={handleConfirm}
  type="success"           // 'success' | 'warning' | 'info' | 'error'
  title="Please confirm"
  description="Are you sure?"
  confirmText="Confirm"
  cancelText="Cancel"
  showCancel={true}
/>
```

---

### SuccessScreen Component (`components/SuccessScreen/`)

Celebration/success screen with floating hearts:

```typescript
import { SuccessScreen } from '@components/SuccessScreen';

<SuccessScreen
  icon={<ProstoLogo size={80} />}
  title="Yaaay you Made It"
  description="Start matching with singles near you"
  buttonText="Continue"
  onButtonClick={handleComplete}
  showHearts={true}
/>
```

---

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| Splash | (initial) | Loading screen with Prosto logo |
| Home | `/` | Onboarding "Algorithm" screen |
| Login | `/login` | Email & password login form |
| ForgotPassword | `/forgot-password` | Password recovery |
| ProfileSetup | `/profile-setup` | 9-step profile creation |
| Dashboard | `/dashboard` | Main app (after authentication) |

---

## 📝 Profile Setup Flow

9-step profile creation for new users:

| Step | Component | Description |
|------|-----------|-------------|
| 1 | `StepEmail` | Enter email address |
| 2 | `StepName` | Enter first name |
| 3 | `StepLocation` | Allow location (optional) |
| 4 | `StepGender` | Select "I am a" (Man/Woman) |
| 5 | `StepSeeking` | Select "Seeking a" (Man/Woman) |
| 6 | `StepBirthday` | Date of birth with confirmation |
| 7 | `StepPhotos` | Upload 2-6 photos |
| 8 | `StepWelcome` | House rules acknowledgment |
| 9 | `StepSuccess` | Celebration screen |

**Profile Data Structure:**

```typescript
interface ProfileData {
  email: string;
  firstName: string;
  location: { lat: number; lng: number } | null;
  gender: 'man' | 'woman' | null;
  seeking: 'man' | 'woman' | null;
  dateOfBirth: string;
  photos: string[];
}
```

---

## 🔌 Backend API

> Full API specification available in `BACKEND_API_SPEC.md`

### API Architecture

The backend provides a **step-by-step API** with:
- Draft API to create profile with email (returns `user_id`)
- PATCH endpoint to update profile fields on each step
- Complete API to finalize account

### API Flow

```
Step 1:  POST   /api/draft               → { email }  → { user_id }
Steps 2-8: PATCH  /api/profile/{user_id}   → { field: value }
Step 7:  POST   /api/profile/{user_id}/photos  → upload photo
Step 9:  POST   /api/profile/{user_id}/complete → finalize account
```

### Endpoints Summary

| Step | Method | Endpoint | Request |
|------|--------|----------|---------|
| 1 | POST | `/api/draft` | `{ email }` |
| 2 | PATCH | `/api/profile/{user_id}` | `{ first_name }` |
| 3 | PATCH | `/api/profile/{user_id}` | `{ latitude, longitude }` |
| 4 | PATCH | `/api/profile/{user_id}` | `{ gender }` |
| 5 | PATCH | `/api/profile/{user_id}` | `{ seeking }` |
| 6 | PATCH | `/api/profile/{user_id}` | `{ date_of_birth }` |
| 7 | POST | `/api/profile/{user_id}/photos` | `multipart/form-data` |
| 8 | PATCH | `/api/profile/{user_id}` | `{ rules_accepted }` |
| 9 | POST | `/api/profile/{user_id}/complete` | `{ password }` |

### Frontend API Service

```typescript
// services/profileApi.ts
export const profileApi = {
    // Step 1: Create draft
    createDraft: (email: string) =>
        api.post('/api/draft', { email }),

    // Steps 2-6, 8: Update profile
    updateProfile: (userId: string, data: object) =>
        api.patch(`/api/profile/${userId}`, data),

    // Step 7: Upload photo
    uploadPhoto: (userId: string, file: File) => {
        const formData = new FormData();
        formData.append('photo', file);
        return api.post(`/api/profile/${userId}/photos`, formData);
    },

    // Step 9: Complete
    complete: (userId: string, password: string) =>
        api.post(`/api/profile/${userId}/complete`, { password }),
};
```

---

## 🛣 Routing System

### Route Types

| Type | Description | Example |
|------|-------------|---------|
| **Public** | Anyone can access | Home `/`, Profile Setup |
| **Restricted Public** | Only non-authenticated | Login, Forgot Password |
| **Protected** | Only authenticated users | Dashboard |

### Routes Constant

```typescript
import { Routes } from '@/types';

// Available Routes:
Routes.HOME            // '/'
Routes.LOGIN           // '/login'
Routes.FORGOT_PASSWORD // '/forgot-password'
Routes.PROFILE_SETUP   // '/profile-setup'
Routes.DASHBOARD       // '/dashboard'
Routes.PROFILE         // '/profile'
Routes.MATCHES         // '/matches'
Routes.CHAT            // '/chat'
Routes.SETTINGS        // '/settings'
Routes.DISCOVER        // '/discover'
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
    isLoading: boolean,
    error: string | null
  },
  app: {
    theme: Theme,           // 'light' | 'dark' | 'default'
    effectiveTheme: EffectiveTheme,  // 'light' | 'dark'
    isLoading: boolean,
    notification: NotificationState | null
  }
}
```

### Auth Slice Actions

| Action | Description |
|--------|-------------|
| `loginSuccess({ user, token })` | Set user data, mark authenticated |
| `logout()` | Clear user data, mark unauthenticated |
| `setLoading(boolean)` | Set loading state |
| `setUser(user)` | Update user data |

### App Slice Actions

| Action | Description |
|--------|-------------|
| `setTheme(theme)` | Set theme preference |
| `setEffectiveTheme(theme)` | Set actual applied theme |
| `toggleTheme()` | Toggle between light/dark |
| `showSuccess(message)` | Show success notification |
| `showError(message)` | Show error notification |

---

## 📝 Types & Enums

### Theme Constants

```typescript
export const Theme = {
  LIGHT: 'light',
  DARK: 'dark',
  DEFAULT: 'default',
} as const;

export const EffectiveTheme = {
  LIGHT: 'light',
  DARK: 'dark',
} as const;
```

### Key Interfaces

```typescript
interface AuthLayoutProps {
  title: string;
  description?: string;
  descriptionColor?: 'default' | 'accent';
  onBackClick?: () => void;
  showBackButton?: boolean;
  centered?: boolean;
  children: ReactNode;
  footer?: ReactNode;
}

interface ProfileData {
  email: string;
  firstName: string;
  location: { lat: number; lng: number } | null;
  gender: 'man' | 'woman' | null;
  seeking: 'man' | 'woman' | null;
  dateOfBirth: string;
  photos: string[];
}
```

---

## 🎨 SVG Icons

### Available Icons

```typescript
import {
  ArrowLeftIcon,
  MailIcon,
  LockIcon,
  UserIcon,
  HeartIcon,
  MessageIcon,
  SettingsIcon,
  ProstoLogo,
} from '@svg';

// Ant Design Icons
import {
  MailOutlined,
  LockOutlined,
  UserOutlined,
  CheckOutlined,
  PlusOutlined,
  EnvironmentOutlined,
  CalendarOutlined,
} from '@ant-design/icons';
```

---

## 🎨 Styling Approach

### CSS Organization

- **Global styles & variables**: `src/index.css`
- **Component styles**: Each component has its own CSS file
- **Theme variables**: Light/dark mode via CSS custom properties

### Ant Design Integration

The app uses `AntdProvider` to sync Ant Design's theme with the app theme:

```typescript
// In main.tsx
<AntdProvider>
  <App />
</AntdProvider>
```

---

## ➕ How to Add New Features

### Adding a New Page

1. Create folder: `src/pages/NewPage/`
2. Create files: `NewPage.tsx`, `NewPage.css`, `index.ts`
3. Export from `pages/index.ts`
4. Add route in `routes/routes.tsx`
5. Add route constant in `types/enums.ts`

### Adding a New Component

1. Create folder: `src/components/ComponentName/`
2. Create files: `ComponentName.tsx`, `ComponentName.css`, `index.ts`
3. Use existing components as reference (Button, ConfirmModal)

### Adding a Profile Setup Step

1. Create step component in `pages/ProfileSetup/steps/`
2. Export from `steps/index.ts`
3. Add to `ProfileSetup.tsx` switch statement
4. Update `ProfileData` interface if needed

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
*Version: 2.3.0*
