# Settings Page Documentation

## 📋 Overview

The Settings page displays settings sections with items in a list format. It uses a constants-driven approach where sections and items are defined in constants files for easy maintenance.

**Route**: `/settings` (Dashboard screen)  
**File**: `src/pages/Settings/Settings.tsx`  
**Type**: Protected route (requires authentication)

---

## 📁 File Structure

```
src/pages/Settings/
├── Settings.tsx         # Main component
├── Settings.css         # Styles
└── index.ts             # Export file
```

---

## 🔗 How to Import

```typescript
// Named import (recommended)
import { Settings } from '@/pages/Settings';

// Or from pages index
import { Settings } from '@/pages';
```

---

## 📦 Dependencies

### Enums/Types

```typescript
import { Routes } from '@/types';
```

**SettingsSection Enum** (`src/types/enums.ts`):
```typescript
export const SettingsSection = {
    ACCOUNT: 'account',
    PREFERENCES: 'preferences',
    SUPPORT: 'support',
} as const;
```

**SettingsItem Enum** (`src/types/enums.ts`):
```typescript
export const SettingsItem = {
    PRIVACY: 'privacy',
    SECURITY: 'security',
    NOTIFICATIONS: 'notifications',
    LANGUAGE: 'language',
    HELP_CENTER: 'help_center',
    CONTACT_US: 'contact_us',
    TERMS_OF_SERVICE: 'terms_of_service',
    PRIVACY_POLICY: 'privacy_policy',
} as const;
```

### Constants

```typescript
import { getAllSettingsSections, SETTINGS_LOGOUT_TEXT } from '@constants';
```

**Constants File**: `src/constants/settings.ts`

**Available Constants**:
- `getAllSettingsSections()` - Returns array of sections with items
- `SettingsSectionTitles` - Maps section to title string
- `SettingsItemLabels` - Maps item to label string
- `SettingsItemRoutes` - Maps item to route path (partial)
- `SETTINGS_SECTIONS` - Array of section order
- `SettingsItemsBySection` - Items grouped by section
- `getSettingsItemConfig()` - Get item configuration
- `getSettingsItemsForSection()` - Get items for a section
- `SETTINGS_LOGOUT_TEXT` - Logout button text ("Logout")

**Example Constants Structure**:
```typescript
export const SettingsSectionTitles = {
    [SettingsSection.ACCOUNT]: 'Account',
    [SettingsSection.PREFERENCES]: 'Preferences',
    [SettingsSection.SUPPORT]: 'Support',
} as const;

export const SettingsItemLabels = {
    [SettingsItem.PRIVACY]: 'Privacy',
    [SettingsItem.SECURITY]: 'Security',
    [SettingsItem.NOTIFICATIONS]: 'Notifications',
    // ... more items
} as const;

export const SettingsItemRoutes: Partial<Record<SettingsItem, string>> = {
    [SettingsItem.TERMS_OF_SERVICE]: Routes.TERMS_OF_SERVICE,
    [SettingsItem.PRIVACY_POLICY]: Routes.PRIVACY_POLICY,
} as const;
```

### Interfaces

```typescript
import type { SettingsItemConfig } from '@interfaces';
```

**Interface Definition** (`src/interfaces/components.interface.ts`):
```typescript
export interface SettingsItemConfig {
    item: SettingsItem;
    label: string;
    route: string | null;
}
```

### Redux Store

```typescript
import { useAppDispatch } from '@store/hooks';
import { logout } from '@store/slices';
```

### Navigation

```typescript
import { useNavigate } from 'react-router-dom';
```

### Icons

```typescript
import { ArrowRightIcon } from '@/utils/svg';
```

---

## 🏗️ Implementation

### Basic Usage

```typescript
import { Settings } from '@/pages/Settings';

<Settings />
```

### Full Component Structure

```typescript
import { useAppDispatch } from '@store/hooks';
import { logout } from '@store/slices';
import { useNavigate } from 'react-router-dom';
import { Routes } from '@/types';
import { getAllSettingsSections, SETTINGS_LOGOUT_TEXT } from '@constants';
import './Settings.css';
import { ArrowRightIcon } from '@/utils/svg';

const Settings = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate(Routes.LOGIN);
    };

    const handleItemClick = (route: string | null) => {
        if (route) {
            // Pass state to indicate we came from Settings
            navigate(route, { state: { from: Routes.SETTINGS } });
        }
        // Handle other items here (e.g., Edit, Privacy, etc.)
    };

    const settingsSections = getAllSettingsSections();

    return (
        <div className="settings-page">
            <div className="settings-content">
                {settingsSections?.map(({ section, title, items }) => (
                    <div key={section} className="settings-section">
                        <h2 className="settings-section-title">{title}</h2>
                        {items.map((itemConfig) => (
                            <div
                                key={itemConfig.item}
                                className="settings-item"
                                onClick={() => handleItemClick(itemConfig.route)}
                            >
                                <span>{itemConfig.label}</span>
                                <span className="settings-arrow">
                                    <ArrowRightIcon size={14} color="#000" />
                                </span>
                            </div>
                        ))}
                    </div>
                ))}

                {/* Logout Button */}
                <div className="settings-section">
                    <button className="settings-logout-btn" onClick={handleLogout}>
                        {SETTINGS_LOGOUT_TEXT}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Settings;
```

---

## 🔄 How It Renders

1. **Gets Sections**: Calls `getAllSettingsSections()` to get all sections with items
2. **Renders Sections**: Maps through sections array
3. **Renders Section Title**: Uppercase title for each section
4. **Renders Items**: Maps through items in each section
   - Each item is a clickable row with label and arrow icon
   - Navigates to route if available
5. **Renders Logout Button**: Separate section at bottom with styled button
6. **Handles Logout**: Dispatches logout action and navigates to login

---

## 📝 Adding New Section/Item

### Step 1: Add Enum Value

Edit `src/types/enums.ts`:
```typescript
export const SettingsSection = {
    // ... existing sections
    NEW_SECTION: 'new_section',
} as const;

export const SettingsItem = {
    // ... existing items
    NEW_ITEM: 'new_item',
} as const;
```

### Step 2: Add Constants

Edit `src/constants/settings.ts`:
```typescript
// Add section title
export const SettingsSectionTitles = {
    // ... existing titles
    [SettingsSection.NEW_SECTION]: 'New Section',
} as const;

// Add item label
export const SettingsItemLabels = {
    // ... existing labels
    [SettingsItem.NEW_ITEM]: 'New Item',
} as const;

// Add item route (optional)
export const SettingsItemRoutes: Partial<Record<SettingsItem, string>> = {
    // ... existing routes
    [SettingsItem.NEW_ITEM]: Routes.NEW_ROUTE,
} as const;

// Add item to section
export const SettingsItemsBySection: Record<SettingsSection, SettingsItem[]> = {
    // ... existing sections
    [SettingsSection.NEW_SECTION]: [
        SettingsItem.NEW_ITEM,
    ],
} as const;

// Add section to sections array
export const SETTINGS_SECTIONS: SettingsSection[] = [
    // ... existing sections
    SettingsSection.NEW_SECTION,
] as const;
```

### Step 3: Handle Item Click (if needed)

If the item needs custom handling (not just navigation), update `handleItemClick`:
```typescript
const handleItemClick = (route: string | null, item?: SettingsItem) => {
    if (item === SettingsItem.NEW_ITEM) {
        // Custom handling
        console.log('New item clicked');
        return;
    }
    if (route) {
        navigate(route, { state: { from: Routes.SETTINGS } });
    }
};
```

---

## 🎯 Key Features

- **Constants-Driven**: Sections and items defined in constants for easy maintenance
- **Dynamic Rendering**: Sections rendered dynamically from constants
- **Navigation**: Items can navigate to routes or trigger custom actions
- **Logout Functionality**: Integrated logout button with Redux dispatch
- **Consistent UI**: All items use same row layout with arrow icon

---

## 🐛 Troubleshooting

**Issue**: Sections not showing
- **Solution**: Ensure `getAllSettingsSections()` is imported from `@constants`

**Issue**: Items not navigating
- **Solution**: Check `SettingsItemRoutes` has route defined for the item

**Issue**: Logout not working
- **Solution**: Verify `logout` action is imported from `@store/slices`

---

## 📚 Related Files

- `src/constants/settings.ts` - Settings constants and configurations
- `src/types/enums.ts` - SettingsSection and SettingsItem enums
- `src/interfaces/components.interface.ts` - SettingsItemConfig interface
- `src/store/slices/authSlice.ts` - Logout action

