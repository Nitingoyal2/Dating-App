# Milan Dating App - Project Documentation

> A modern React dating application built with TypeScript, Redux Toolkit, and React Router.

---

## 📋 Table of Contents

1. [Tech Stack](#tech-stack)
2. [Folder Structure](#folder-structure)
3. [Path Aliases](#path-aliases)
4. [Application Flow](#application-flow)
5. [Components](#components)
6. [Pages](#pages)
7. [Routing System](#routing-system)
8. [State Management (Redux)](#state-management-redux)
9. [Types & Enums](#types--enums)
10. [SVG Icons](#svg-icons)
11. [Styling Approach](#styling-approach)
12. [How to Add New Features](#how-to-add-new-features)

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
│   │   └── AuthLayout.css
│   │
│   ├── pages/                # Page components (each in own folder)
│   │   ├── index.ts          # Exports all pages
│   │   ├── Splash/           # Loading/splash screen
│   │   │   ├── Splash.tsx
│   │   │   ├── Splash.css
│   │   │   └── index.ts
│   │   ├── Home/             # Landing page
│   │   │   ├── Home.tsx
│   │   │   ├── Home.css
│   │   │   └── index.ts
│   │   ├── Login/            # Login page
│   │   │   ├── Login.tsx
│   │   │   ├── Login.css
│   │   │   └── index.ts
│   │   ├── Register/         # Registration page
│   │   │   ├── Register.tsx
│   │   │   ├── Register.css
│   │   │   └── index.ts
│   │   ├── ForgotPassword/   # Password recovery
│   │   │   ├── ForgotPassword.tsx
│   │   │   ├── ForgotPassword.css
│   │   │   └── index.ts
│   │   └── Dashboard/        # Main app (protected)
│   │       ├── Dashboard.tsx
│   │       ├── Dashboard.css
│   │       └── index.ts
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
│   ├── utils/                # Utility functions & components
│   │   └── svg/              # SVG icon components
│   │       ├── index.ts      # Exports all icons
│   │       ├── icons.tsx     # Icon components
│   │       └── MilanLogo.tsx # App logo
│   │
│   ├── main.tsx              # Application entry point
│   ├── App.tsx               # Root component
│   ├── App.css               # App-level styles (minimal)
│   └── index.css             # Global styles & fonts
│
├── index.html                # HTML template
├── vite.config.ts            # Vite configuration + aliases
├── tsconfig.json             # TypeScript config
├── tsconfig.app.json         # App-specific TS config + aliases
└── package.json              # Dependencies & scripts
```

---

## 🔗 Path Aliases

Configured in `tsconfig.app.json` and `vite.config.ts`:

| Alias | Maps To | Example Usage |
|-------|---------|---------------|
| `@/*` | `src/*` | `import { Routes } from '@/types'` |
| `@components/*` | `src/components/*` | `import Layout from '@components/Layout'` |
| `@pages/*` | `src/pages/*` | `import { Home } from '@/pages'` |
| `@types/*` | `src/types/*` | `import type { User } from '@/types'` |
| `@store/*` | `src/store/*` | `import { useAppDispatch } from '@store/hooks'` |
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
   ├── Wraps app with BrowserRouter (routing)
   └── Renders <App />
   │
   ▼
3. App.tsx
   ├── [showSplash = true] → Show Splash screen
   │                         (Milan logo for 2.5 seconds)
   │
   └── [showSplash = false] → Show Layout + AppRoutes
   │
   ▼
4. ROUTING (based on URL)
   │
   ├── "/" (HOME)
   │   └── Shows Home page (Sign In / Create Account buttons)
   │
   ├── "/login" (RESTRICTED PUBLIC)
   │   ├── If authenticated → Redirect to /dashboard
   │   └── If not authenticated → Show Login form
   │
   ├── "/register" (RESTRICTED PUBLIC)
   │   ├── If authenticated → Redirect to /dashboard
   │   └── If not authenticated → Show Register form
   │
   ├── "/forgot-password" (RESTRICTED PUBLIC)
   │   └── Show password recovery form
   │
   └── "/dashboard" (PROTECTED)
       ├── If not authenticated → Redirect to /login
       └── If authenticated → Show Dashboard
   │
   ▼
5. USER ACTIONS
   │
   ├── Login → dispatch(loginSuccess) → isAuthenticated = true
   │                                   → Navigate to /dashboard
   │
   └── Logout → dispatch(logout) → isAuthenticated = false
                                 → Redirect to /login
```

---

## 🧩 Components

### Layout Component (`components/Layout.tsx`)

The main wrapper that provides the phone-like interface:

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ┌─────────────────┐     ┌─────────────────────────────┐   │
│  │                 │     │                             │   │
│  │   PHONE FRAME   │     │      SIDE PANEL             │   │
│  │   (max 425px)   │     │                             │   │
│  │                 │     │   • "Milan" branding        │   │
│  │   Your app      │     │   • Floating hearts         │   │
│  │   content       │     │   • Stats (2M+ users, etc)  │   │
│  │   renders       │     │                             │   │
│  │   here          │     │   (Hidden on mobile)        │   │
│  │                 │     │                             │   │
│  └─────────────────┘     └─────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Props:**
- `children: ReactNode` - Content to render inside phone frame

---

### AuthLayout Component (`components/AuthLayout.tsx`)

Reusable layout for authentication pages:

```
┌─────────────────────────┐
│ ←  (back button)        │  ← onBackClick prop
├─────────────────────────┤
│                         │
│ Title                   │  ← title prop
│ Description text        │  ← description prop
│                         │
│ ┌─────────────────────┐ │
│ │                     │ │
│ │   Form Content      │ │  ← children prop
│ │   (inputs, buttons) │ │
│ │                     │ │
│ └─────────────────────┘ │
│                         │
└─────────────────────────┘
```

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `title` | string | Page heading |
| `description` | string | Subheading text |
| `onBackClick` | () => void | Back button handler |
| `showBackButton` | boolean | Show/hide back button (default: true) |
| `children` | ReactNode | Form content |

---

## 📄 Pages

Each page follows this structure:

```
pages/PageName/
├── PageName.tsx    # Component logic
├── PageName.css    # Styles (scoped to this page)
└── index.ts        # Export: export { default } from './PageName'
```

### Available Pages:

| Page | Route | Description |
|------|-------|-------------|
| Splash | (initial load) | Loading screen with Milan logo |
| Home | `/` | Landing page with Sign In / Create Account |
| Login | `/login` | Email & password login form |
| Register | `/register` | Registration form |
| ForgotPassword | `/forgot-password` | Password recovery |
| Dashboard | `/dashboard` | Main app (after authentication) |

---

## 🛣 Routing System

### Route Types

| Type | Description | Example |
|------|-------------|---------|
| **Public** | Anyone can access | Home `/` |
| **Restricted Public** | Only non-authenticated users | Login, Register |
| **Protected** | Only authenticated users | Dashboard |

### Route Guards

**ProtectedRoute** - For pages requiring authentication:
```typescript
// If not authenticated → Redirect to /login (saves original URL)
// If authenticated → Render children
```

**PublicRoute** - For auth pages (with `restricted` prop):
```typescript
// If authenticated + restricted → Redirect to /dashboard
// Otherwise → Render children
```

### Routes Constant (Enum-like)

```typescript
import { Routes } from '@/types';

// Usage:
navigate(Routes.LOGIN);      // '/login'
navigate(Routes.DASHBOARD);  // '/dashboard'
```

**Available Routes:**
- `Routes.HOME` → `/`
- `Routes.LOGIN` → `/login`
- `Routes.REGISTER` → `/register`
- `Routes.FORGOT_PASSWORD` → `/forgot-password`
- `Routes.DASHBOARD` → `/dashboard`
- `Routes.PROFILE` → `/profile`
- `Routes.MATCHES` → `/matches`
- `Routes.CHAT` → `/chat`
- `Routes.SETTINGS` → `/settings`

---

## 🗃 State Management (Redux)

### Store Structure

```typescript
store: {
  auth: {              // Authentication state
    user: UserState | null,
    token: string | null,
    status: AuthStatus,
    isAuthenticated: boolean,
    isLoading: boolean,
    error: string | null
  },
  app: {               // App-wide state
    theme: Theme,
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
| `updateUser(partialUser)` | Partial user update |
| `loginFailure(error)` | Set error message |
| `clearError()` | Clear error state |

### App Slice Actions

| Action | Description |
|--------|-------------|
| `setTheme(theme)` | Set light/dark theme |
| `toggleTheme()` | Toggle between themes |
| `setAppLoading(boolean)` | Set app loading state |
| `showNotification({ type, message })` | Show notification |
| `showSuccess(message)` | Show success notification |
| `showError(message)` | Show error notification |
| `clearNotification()` | Clear notification |

### Typed Hooks Usage

```typescript
import { useAppDispatch, useAppSelector } from '@store/hooks';

// In component:
const dispatch = useAppDispatch();
const { user, isAuthenticated } = useAppSelector((state) => state.auth);

// Dispatch actions:
dispatch(loginSuccess({ user: userData, token: 'xxx' }));
dispatch(logout());
```

---

## 📝 Types & Enums

### Constants (Enum-like Objects)

```typescript
// Routes
export const Routes = {
  HOME: '/',
  LOGIN: '/login',
  // ...
} as const;

// Theme
export const Theme = {
  LIGHT: 'light',
  DARK: 'dark',
} as const;

// Auth Status
export const AuthStatus = {
  IDLE: 'idle',
  LOADING: 'loading',
  AUTHENTICATED: 'authenticated',
  UNAUTHENTICATED: 'unauthenticated',
  ERROR: 'error',
} as const;

// Notification Type
export const NotificationType = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
} as const;

// Gender
export const Gender = {
  MALE: 'male',
  FEMALE: 'female',
  OTHER: 'other',
  PREFER_NOT_TO_SAY: 'prefer_not_to_say',
} as const;

// Relationship Goal
export const RelationshipGoal = {
  CASUAL: 'casual',
  SERIOUS: 'serious',
  FRIENDSHIP: 'friendship',
  NOT_SURE: 'not_sure',
} as const;
```

### Key Interfaces

```typescript
// User
interface UserState {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  bio?: string;
  age?: number;
  location?: string;
  interests?: string[];
}

// Auth State
interface AuthState {
  user: UserState | null;
  token: string | null;
  status: AuthStatus;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

// Route Config
interface RouteConfig {
  path: string;
  element: ReactNode;
  children?: RouteConfig[];
  isProtected?: boolean;
}
```

---

## 🎨 SVG Icons

### Available Icons

```typescript
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  MailIcon,
  LockIcon,
  EyeIcon,
  EyeOffIcon,
  UserIcon,
  HeartIcon,
  MessageIcon,
  SearchIcon,
  SettingsIcon,
  CloseIcon,
  CheckIcon,
  CameraIcon,
  LocationIcon,
  MilanLogo,
} from '@svg';
```

### Icon Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | number | 24 | Icon size in pixels |
| `color` | string | 'currentColor' | Icon color |
| `...props` | SVGProps | - | Any SVG attribute |

### Usage Examples

```tsx
<MailIcon size={20} color="#999" />
<HeartIcon size={32} color="#ff5a5f" filled />
<MilanLogo size={100} />
```

---

## 🎨 Styling Approach

### CSS Organization

- **Global styles**: `src/index.css` (fonts, resets)
- **Component styles**: Each component has its own CSS file
- **Page styles**: Each page folder contains `PageName.css`

### CSS Classes in AuthLayout

Pre-defined classes for form elements:

| Class | Purpose |
|-------|---------|
| `.form-group` | Container for input + label |
| `.form-label` | Label text |
| `.form-input-wrapper` | Input container (for icon) |
| `.form-input-icon` | Icon inside input |
| `.form-input` | Styled input field |
| `.form-link` | Clickable text link |
| `.submit-btn` | Primary button |

---

## ➕ How to Add New Features

### Adding a New Page

1. **Create folder**: `src/pages/NewPage/`

2. **Create files**:
   ```
   NewPage/
   ├── NewPage.tsx
   ├── NewPage.css
   └── index.ts
   ```

3. **NewPage.tsx**:
   ```tsx
   import './NewPage.css';

   const NewPage = () => {
     return <div className="new-page">Content</div>;
   };

   export default NewPage;
   ```

4. **index.ts**:
   ```typescript
   export { default } from './NewPage';
   ```

5. **Export from pages/index.ts**:
   ```typescript
   export { default as NewPage } from './NewPage';
   ```

6. **Add route in routes/routes.tsx**:
   ```typescript
   {
     path: Routes.NEW_PAGE,
     element: <NewPage />,
     isProtected: false,
   }
   ```

7. **Add route constant in types/enums.ts**:
   ```typescript
   export const Routes = {
     // ...existing routes
     NEW_PAGE: '/new-page',
   } as const;
   ```

---

### Adding a New Icon

1. **Add to utils/svg/icons.tsx**:
   ```tsx
   export const NewIcon = ({ size = 24, color = 'currentColor', ...props }: IconProps) => (
     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} {...props}>
       {/* SVG path */}
     </svg>
   );
   ```

2. **Export from utils/svg/index.ts**:
   ```typescript
   export { NewIcon } from './icons';
   ```

---

### Adding a New Redux Slice

1. **Create slice**: `store/slices/newSlice.ts`
   ```typescript
   import { createSlice } from '@reduxjs/toolkit';

   const newSlice = createSlice({
     name: 'new',
     initialState: {},
     reducers: {
       // actions
     },
   });

   export const { /* actions */ } = newSlice.actions;
   export default newSlice.reducer;
   ```

2. **Export from slices/index.ts**:
   ```typescript
   export { default as newReducer } from './newSlice';
   export * from './newSlice';
   ```

3. **Add to store/index.ts**:
   ```typescript
   export const store = configureStore({
     reducer: {
       auth: authReducer,
       app: appReducer,
       new: newReducer,  // Add here
     },
   });
   ```

---

## 📌 Quick Reference

### Import Patterns

```typescript
// Types & Enums
import { Routes, Theme, AuthStatus } from '@/types';
import type { User, AuthState } from '@/types';

// Components
import Layout from '@components/Layout';
import AuthLayout from '@components/AuthLayout';

// Pages
import { Home, Login, Dashboard } from '@/pages';

// Redux
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { loginSuccess, logout } from '@store/slices';

// Icons
import { HeartIcon, MailIcon, MilanLogo } from '@svg';
```

### Navigation

```typescript
import { useNavigate } from 'react-router-dom';
import { Routes } from '@/types';

const navigate = useNavigate();
navigate(Routes.LOGIN);
navigate(Routes.DASHBOARD);
```

### Redux State Access

```typescript
const { user, isAuthenticated } = useAppSelector((state) => state.auth);
const { theme, notification } = useAppSelector((state) => state.app);
```

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
*Version: 1.0.0*

