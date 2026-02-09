# Dashboard Page Documentation

## 📋 Overview

The Dashboard page is the main container component that maps routes to dashboard screens and manages the `DashboardLayout` component. It acts as a router for dashboard screens.

**Route**: `/dashboard`  
**File**: `src/pages/Dashboard/Dashboard.tsx`  
**Type**: Protected route (requires authentication)

---

## 📁 File Structure

```
src/pages/Dashboard/
├── Dashboard.tsx        # Main component
├── Dashboard.css        # Styles
└── index.ts             # Export file
```

---

## 🔗 How to Import

```typescript
// Named import (recommended)
import { Dashboard } from '@/pages/Dashboard';

// Or from pages index
import { Dashboard } from '@/pages';
```

---

## 📦 Dependencies

### Enums/Types

```typescript
import { DashboardScreen, Routes } from '@/types';
import type { DashboardScreen as DashboardScreenType } from '@interfaces';
```

**DashboardScreen Enum** (`src/types/enums.ts`):
```typescript
export const DashboardScreen = {
    DISCOVER: 'discover',
    MATCHES: 'matches',
    EXPLORE: 'explore',
    CHAT: 'chat',
    PROFILE: 'profile',
    SETTINGS: 'settings',
    EDIT: 'EDIT',
} as const;
```

**Routes Enum** (`src/types/enums.ts`):
```typescript
export const Routes = {
    DASHBOARD: '/dashboard',
    PROFILE: '/profile',
    SETTINGS: '/settings',
    MATCHES: '/matches',
    CHAT: '/chat',
    DISCOVER: '/discover',
    // ... more routes
} as const;
```

### Components

```typescript
import { DashboardLayout } from '@components/DashboardLayout';
```

### React Router

```typescript
import { useLocation } from 'react-router-dom';
```

---

## 🏗️ Implementation

### Basic Usage

```typescript
import { Dashboard } from '@/pages/Dashboard';

// Used in routes (routes/routes.tsx)
<ProtectedRoute>
    <Dashboard />
</ProtectedRoute>
```

### Full Component Structure

```typescript
import { useLocation } from 'react-router-dom';
import { DashboardLayout } from '@components/DashboardLayout';
import { Routes, DashboardScreen } from '@/types';
import type { DashboardScreen as DashboardScreenType } from '@interfaces';

const Dashboard = () => {
    const location = useLocation();

    // Map routes to dashboard screens
    const getActiveScreenFromRoute = (): DashboardScreenType => {
        switch (location.pathname) {
            case Routes.DASHBOARD:
            case Routes.DISCOVER:
                return DashboardScreen.DISCOVER;
            case Routes.PROFILE:
                return DashboardScreen.PROFILE;
            case Routes.SETTINGS:
                return DashboardScreen.SETTINGS;
            case Routes.MATCHES:
                return DashboardScreen.MATCHES;
            case Routes.CHAT:
                return DashboardScreen.CHAT;
            default:
                return DashboardScreen.DISCOVER;
        }
    };

    const activeScreen = getActiveScreenFromRoute();

    return <DashboardLayout activeScreen={activeScreen} />;
};

export default Dashboard;
```

---

## 🔄 How It Renders

1. **Gets Current Route**: Uses `useLocation()` to get current pathname
2. **Maps Route to Screen**: Converts route pathname to `DashboardScreen` enum value
3. **Passes to Layout**: Provides active screen to `DashboardLayout` component
4. **DashboardLayout Renders**: The layout component handles rendering the appropriate screen

---

## 🗺️ Route to Screen Mapping

| Route | Dashboard Screen |
|-------|------------------|
| `/dashboard` | `DISCOVER` |
| `/discover` | `DISCOVER` |
| `/profile` | `PROFILE` |
| `/settings` | `SETTINGS` |
| `/matches` | `MATCHES` |
| `/chat` | `CHAT` |

---

## 📝 Adding New Screen

### Step 1: Add Enum Value

Edit `src/types/enums.ts`:
```typescript
export const DashboardScreen = {
    // ... existing screens
    NEW_SCREEN: 'new_screen',
} as const;
```

### Step 2: Add Route (if needed)

Edit `src/types/enums.ts`:
```typescript
export const Routes = {
    // ... existing routes
    NEW_SCREEN: '/new-screen',
} as const;
```

### Step 3: Update Route Mapping

Edit `src/pages/Dashboard/Dashboard.tsx`:
```typescript
const getActiveScreenFromRoute = (): DashboardScreenType => {
    switch (location.pathname) {
        // ... existing cases
        case Routes.NEW_SCREEN:
            return DashboardScreen.NEW_SCREEN;
        default:
            return DashboardScreen.DISCOVER;
    }
};
```

### Step 4: Add to DashboardLayout

Edit `src/components/DashboardLayout/DashboardLayout.tsx`:
```typescript
const renderContent = () => {
    switch (activeScreen) {
        // ... existing cases
        case DashboardScreenEnum.NEW_SCREEN:
            return <NewScreen />;
        default:
            return <div>Coming Soon</div>;
    }
};
```

---

## 🎯 Key Features

- **Route Mapping**: Converts URL routes to dashboard screens
- **Screen Management**: Centralized screen routing logic
- **Layout Integration**: Works seamlessly with DashboardLayout
- **Default Fallback**: Defaults to DISCOVER screen if route not found

---

## 🐛 Troubleshooting

**Issue**: Screen not showing
- **Solution**: Verify route is mapped in `getActiveScreenFromRoute()`

**Issue**: Wrong screen displayed
- **Solution**: Check route pathname matches Routes enum value

**Issue**: Navigation not working
- **Solution**: Ensure DashboardLayout handles screen changes correctly

---

## 📚 Related Files

- `src/components/DashboardLayout/DashboardLayout.tsx` - Layout component
- `src/types/enums.ts` - DashboardScreen and Routes enums
- `src/constants/navigation.ts` - Navigation constants

