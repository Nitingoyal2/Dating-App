# Profile Page Documentation

## 📋 Overview

The Profile page displays the user's profile with a circular progress indicator, avatar, and action buttons grid. It's part of the Dashboard screens and can be accessed via the Profile tab in the bottom navigation.

**Route**: `/profile` (Dashboard screen)  
**File**: `src/pages/Profile/Profile.tsx`  
**Type**: Protected route (requires authentication)

---

## 📁 File Structure

```
src/pages/Profile/
├── Profile.tsx          # Main component
├── Profile.css          # Styles
└── index.ts             # Export file
```

---

## 🔗 How to Import

```typescript
// Named import (recommended)
import { Profile } from '@/pages/Profile';

// Or from pages index
import { Profile } from '@/pages';
```

---

## 📦 Dependencies

### Enums/Types

```typescript
import { ProfileAction } from '@/types';
```

**Available Enums**:
- `ProfileAction.SETTINGS` - Navigate to settings
- `ProfileAction.EDIT` - Open Edit screen
- `ProfileAction.SAFETY` - Safety features
- `ProfileAction.GOLD` - Prosto Gold subscription
- `ProfileAction.PLATINUM` - Prosto Platinum subscription
- `ProfileAction.DIAMOND` - Prosto Diamond subscription

### Constants

```typescript
import {
    getAllProfileActions,
    DEFAULT_PROFILE_AGE,
    DEFAULT_PROFILE_NAME,
    DEFAULT_PROFILE_IMAGE_URL,
    PROFILE_PROGRESS_SUFFIX,
    PROFILE_PROGRESS_STROKE_COLOR_START,
    PROFILE_PROGRESS_STROKE_COLOR_END,
    PROFILE_PROGRESS_TRAIL_COLOR,
    PROFILE_PROGRESS_BADGE_GRADIENT_START,
    PROFILE_PROGRESS_BADGE_GRADIENT_END,
} from '@constants';
```

**Constants File**: `src/constants/profile.ts`

**Available Constants**:
- `getAllProfileActions()` - Returns array of `ProfileActionConfig[]`
- `ProfileActionLabels` - Maps action to label string
- `ProfileActionIcons` - Maps action to icon path
- `ProfileActionFilters` - Maps action to CSS filter value
- `DEFAULT_PROFILE_AGE` - Default age (28)
- `DEFAULT_PROFILE_NAME` - Default name ("User")
- `DEFAULT_PROFILE_IMAGE_URL` - Default avatar URL
- `PROFILE_PROGRESS_SUFFIX` - Progress suffix ("% COMPLETE")
- `PROFILE_PROGRESS_STROKE_COLOR_START` - Progress start color (#FF2C29)
- `PROFILE_PROGRESS_STROKE_COLOR_END` - Progress end color (#FF9500)
- `PROFILE_PROGRESS_TRAIL_COLOR` - Progress trail color (#ffffff)
- `PROFILE_PROGRESS_BADGE_GRADIENT_START` - Badge gradient start (#64CFEF)
- `PROFILE_PROGRESS_BADGE_GRADIENT_END` - Badge gradient end (#0676C9)

### Interfaces

```typescript
import type { ProfileProps } from '@interfaces';
```

**Interface Definition** (`src/interfaces/components.interface.ts`):
```typescript
export interface ProfileProps {
    onSettingsClick?: () => void;
    onEditProfileClick?: () => void;
}

export interface ProfileActionConfig {
    action: ProfileAction;
    label: string;
    color: string;
    icon: string;
    filter: string;
}
```

### Redux Store

```typescript
import { useAppSelector } from '@store/hooks';

// Access user data
const { user } = useAppSelector((state) => state.auth);
```

**User State Structure**:
```typescript
interface UserState {
    id: string;
    name: string;
    first_name: string;
    email: string;
    age: number;
    gender: 'man' | 'woman';
    seeking: 'man' | 'woman';
    date_of_birth: string;
    photos: Array<{
        id: string;
        url: string;
        order: number;
        is_primary?: boolean;
    }>;
    latitude: number | null;
    longitude: number | null;
    created_at: string;
    about_me?: string;
    [key: string]: unknown;
}
```

### Utilities

```typescript
import { calculateProfileProgress } from '@/utils/profileProgress';
```

**Function**: `calculateProfileProgress(user: UserState | null): number`
- Calculates profile completion percentage based on filled fields
- Returns number between 0-100

---

## 🎨 Images/Icons

**Icons Used** (from `src/assets/images/`):
- `settingIcon` - Settings action icon
- `pencilIcon` - Edit action icon
- `shieldIcon` - Safety action icon
- `coinIcon` - Gold subscription icon
- `fireIcon` - Platinum subscription icon
- `diamondIcon` - Diamond subscription icon

**Import Icons**:
```typescript
import { settingIcon, pencilIcon, shieldIcon, coinIcon, fireIcon, diamondIcon } from '@assets';
```

---

## 🏗️ Implementation

### Basic Usage

```typescript
import { Profile } from '@/pages/Profile';

<Profile 
    onSettingsClick={() => navigate('/settings')}
    onEditProfileClick={() => navigate('/edit-profile')}
/>
```

### Full Component Structure

```typescript
import { Progress } from 'antd';
import { useAppSelector } from '@store/hooks';
import {
    getAllProfileActions,
    DEFAULT_PROFILE_AGE,
    DEFAULT_PROFILE_NAME,
    DEFAULT_PROFILE_IMAGE_URL,
    PROFILE_PROGRESS_SUFFIX,
    PROFILE_PROGRESS_STROKE_COLOR_START,
    PROFILE_PROGRESS_STROKE_COLOR_END,
    PROFILE_PROGRESS_TRAIL_COLOR,
    PROFILE_PROGRESS_BADGE_GRADIENT_START,
    PROFILE_PROGRESS_BADGE_GRADIENT_END,
} from '@constants';
import { calculateProfileProgress } from '@/utils/profileProgress';
import { ProfileAction } from '@/types';
import type { ProfileProps } from '@interfaces';
import './Profile.css';

const Profile = ({ onSettingsClick, onEditProfileClick }: ProfileProps) => {
    const { user } = useAppSelector((state) => state.auth);
    const profileActions = getAllProfileActions();
    const profileProgress = calculateProfileProgress(user);

    const handleActionClick = (action: ProfileAction) => {
        if (action === ProfileAction.SETTINGS && onSettingsClick) {
            onSettingsClick();
        } else if (action === ProfileAction.EDIT && onEditProfileClick) {
            onEditProfileClick();
        }
        // Handle other actions here
    };

    return (
        <div className="profile-page">
            {/* Profile Section */}
            <div className="profile-section">
                {/* Avatar with Progress Circle */}
                <div className="profile-avatar-container">
                    <div className="profile-avatar-wrapper">
                        <div className="profile-avatar-progress-wrapper">
                            <Progress
                                type="circle"
                                percent={profileProgress}
                                size={180}
                                strokeWidth={20}
                                strokeColor={{
                                    '0%': PROFILE_PROGRESS_STROKE_COLOR_START,
                                    '100%': PROFILE_PROGRESS_STROKE_COLOR_END,
                                }}
                                trailColor={PROFILE_PROGRESS_TRAIL_COLOR}
                                format={() => null}
                            />
                            <div className="profile-avatar-inner">
                                <img
                                    src={
                                        user?.photos && user.photos.length > 0
                                            ? `${import.meta.env.VITE_API_BASE_URL || ''}${user.photos.find(p => p.is_primary)?.url || user.photos[0]?.url || ''}`
                                            : DEFAULT_PROFILE_IMAGE_URL
                                    }
                                    alt="Profile"
                                />
                            </div>
                        </div>
                        {/* Progress Badge */}
                        <div
                            className="profile-progress-badge"
                            style={{
                                background: `linear-gradient(to right, ${PROFILE_PROGRESS_BADGE_GRADIENT_START}, ${PROFILE_PROGRESS_BADGE_GRADIENT_END})`
                            }}
                        >
                            {profileProgress}{PROFILE_PROGRESS_SUFFIX}
                        </div>
                    </div>
                </div>

                {/* User Info */}
                <div className="profile-info">
                    <div className="profile-name-row">
                        <h2>
                            {user?.first_name || user?.name || user?.email?.split('@')[0] || DEFAULT_PROFILE_NAME}, {user?.age || DEFAULT_PROFILE_AGE}
                        </h2>
                    </div>
                </div>
            </div>

            {/* Action Buttons Grid */}
            <div className="profile-actions-grid">
                {profileActions.map((actionConfig) => (
                    <div
                        key={actionConfig.action}
                        className="profile-action-item"
                        onClick={() => handleActionClick(actionConfig.action)}
                    >
                        <div className="profile-action-icon">
                            <img
                                src={actionConfig.icon}
                                alt={actionConfig.label}
                            />
                        </div>
                        <h5 className="profile-action-label">{actionConfig.label}</h5>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Profile;
```

---

## 🔄 How It Renders

1. **Gets User Data**: Retrieves user from Redux store
2. **Gets Actions**: Calls `getAllProfileActions()` to get action configurations
3. **Calculates Progress**: Uses `calculateProfileProgress(user)` to get completion percentage
4. **Renders Avatar Section**:
   - Circular progress indicator (Ant Design Progress component)
   - User avatar image (primary photo or default)
   - Progress badge showing percentage
5. **Renders User Info**: Name and age
6. **Renders Action Grid**: 3-column grid of action buttons with icons and labels
7. **Handles Clicks**: Routes to appropriate screen based on action clicked

---

## 🎯 Key Features

- **Circular Progress**: Visual indicator of profile completion
- **Dynamic Avatar**: Shows primary photo or default image
- **Action Grid**: 6 action buttons (Settings, Edit, Safety, Gold, Platinum, Diamond)
- **Responsive Design**: Grid layout adapts to screen size
- **Click Handlers**: Customizable navigation callbacks

---

## 📝 Constants Configuration

To add/modify profile actions, edit `src/constants/profile.ts`:

```typescript
// Add new action to enum (src/types/enums.ts)
export const ProfileAction = {
    // ... existing actions
    NEW_ACTION: 'new_action',
} as const;

// Add label (src/constants/profile.ts)
export const ProfileActionLabels = {
    // ... existing labels
    [ProfileAction.NEW_ACTION]: 'New Action',
} as const;

// Add icon (src/constants/profile.ts)
export const ProfileActionIcons = {
    // ... existing icons
    [ProfileAction.NEW_ACTION]: newActionIcon,
} as const;

// Add to actions array (src/constants/profile.ts)
export const PROFILE_ACTIONS: ProfileAction[] = [
    // ... existing actions
    ProfileAction.NEW_ACTION,
] as const;
```

---

## 🐛 Troubleshooting

**Issue**: Profile actions not showing
- **Solution**: Ensure `getAllProfileActions()` is imported from `@constants`

**Issue**: Avatar not displaying
- **Solution**: Check `VITE_API_BASE_URL` environment variable and user photos array

**Issue**: Progress not calculating
- **Solution**: Verify `calculateProfileProgress` utility is imported and user data is available

---

## 📚 Related Files

- `src/constants/profile.ts` - Profile constants and configurations
- `src/utils/profileProgress.ts` - Profile progress calculation utility
- `src/types/enums.ts` - ProfileAction enum definition
- `src/interfaces/components.interface.ts` - ProfileProps interface

