# EditProfile Page Documentation

## 📋 Overview

The EditProfile feature allows users to edit their profile information with multiple sections: UPLOAD IMAGES, BASIC, PERSONAL, APPEARANCE, and HABITS.

For non-basic items (e.g. Religion, Looking For, Pets, Height), clicking an item navigates to a dedicated page under `/edit/:item`.

**Route**: `/profile` → Edit action (Dashboard screen)  
**File**: `src/pages/EditProfile/EditProfile.tsx`  
**Type**: Protected route (requires authentication)

---

## 📁 File Structure

```
src/pages/EditProfile/
├── EditProfile.tsx      # Main component
├── EditProfile.css      # Styles
└── index.ts             # Export file

src/pages/EditProfile/pages/
├── EditProfileItemSelector/
│   ├── EditProfileItemSelector.tsx
│   ├── EditProfileItemSelector.css
│   └── index.ts
└── EditProfileHeight/
    ├── EditProfileHeight.tsx
    ├── EditProfileHeight.css
    └── index.ts
```

---

## 🔗 How to Import

```typescript
// Named import (recommended)
import { EditProfile } from '@/pages/EditProfile';

// Or from pages index
import { EditProfile } from '@/pages';
```

---

## 📦 Dependencies

### Enums/Types

```typescript
import { EditProfileSection, EditProfileItem } from '@/types';
```

**EditProfileSection Enum** (`src/types/enums.ts`):
```typescript
export const EditProfileSection = {
    BASIC: 'basic',
    PERSONAL: 'personal',
    APPEARANCE: 'appearance',
    HABITS: 'habits',
} as const;
```

**EditProfileItem Enum** (`src/types/enums.ts`):
```typescript
export const EditProfileItem = {
    // BASIC section
    BIRTHDAY: 'birthday',
    GENDER: 'gender',
    ABOUT_ME: 'about_me',
    CURRENT_WORK: 'current_work',
    // PERSONAL section
    LOOKING_FOR: 'looking_for',
    PETS: 'pets',
    CHILDREN: 'children',
    ASTROLOGICAL_SIGN: 'astrological_sign',
    RELIGION: 'religion',
    EDUCATION: 'education',
    // APPEARANCE section
    HEIGHT: 'height',
    BODY_TYPE: 'body_type',
    // HABITS section
    EXERCISE: 'exercise',
    DRINK: 'drink',
    SMOKER: 'smoker',
    MARIJUANA: 'marijuana',
} as const;
```

### Constants

```typescript
import { getAllEditProfileSections } from '@constants';
```

**Constants File**: `src/constants/editProfile.ts`

**Available Constants**:
- `getAllEditProfileSections()` - Returns array of sections with items
- `EditProfileSectionTitles` - Maps section to title string
- `EditProfileItemLabels` - Maps item to label string
- `EditProfileItemIcons` - Maps item to emoji/icon string
- `EditProfileItemDefaults` - Maps item to default value
- `EDIT_SECTIONS` - Array of section order
- `EditProfileItemsBySection` - Items grouped by section
- `getEditProfileItemConfig()` - Get item configuration
- `getEditProfileItemsForSection()` - Get items for a section

**Edit Item Pages (constants-driven)**:
- `EDIT_PROFILE_SELECTOR_PAGES` - config for selector pages (radio/checkbox)
- `EDIT_PROFILE_SLIDER_PAGES` - config for slider pages (Height)
- `getEditProfileSelectorPageConfig(item)` / `getEditProfileSliderPageConfig(item)`
- `buildEditProfileItemRoute(item)` → `/edit/${item}`

**Example Constants Structure**:
```typescript
export const EditProfileSectionTitles = {
    [EditProfileSection.BASIC]: 'BASIC',
    [EditProfileSection.PERSONAL]: 'PERSONAL',
    [EditProfileSection.APPEARANCE]: 'APPEARANCE',
    [EditProfileSection.HABITS]: 'HABITS',
} as const;

export const EditProfileItemLabels = {
    [EditProfileItem.BIRTHDAY]: 'My Birthday',
    [EditProfileItem.GENDER]: 'My Gender',
    [EditProfileItem.ABOUT_ME]: 'About Me',
    // ... more items
} as const;

export const EditProfileItemIcons: Record<EditProfileItem, string> = {
    [EditProfileItem.BIRTHDAY]: '🎂',
    [EditProfileItem.GENDER]: '⚧️',
    [EditProfileItem.ABOUT_ME]: '📝',
    // ... more items
} as const;
```

### Interfaces

```typescript
import type { EditProfileProps } from '@interfaces';
```

**Interface Definition** (`src/interfaces/components.interface.ts`):
```typescript
export interface EditProfileProps {
    onDone?: () => void;
    onPreview?: () => void;
}

export interface EditProfileItemConfig {
    item: EditProfileItem;
    label: string;
    icon: string;
    defaultValue: string | null;
}
```

### Redux Store

```typescript
import { useAppSelector } from '@store/hooks';

// Access user id from redux
const { user } = useAppSelector((state) => state.auth);
```

**Note**: In the current app flow, redux may contain only `user.id` initially. The EditProfile page fetches full user details from the backend before rendering the form values.

### Ant Design Components

```typescript
import { Radio, Input } from 'antd';
import { EditOutlined, CloseOutlined } from '@ant-design/icons';

const { TextArea } = Input;
```

### Date Formatting

```typescript
import dayjs from 'dayjs';
```

---

## 🏗️ Implementation

### Basic Usage

```typescript
import { EditProfile } from '@/pages/EditProfile';

<EditProfile 
    onDone={() => navigate('/profile')}
    onPreview={() => navigate('/preview')}
/>
```

### Full Component Structure

```typescript
import { useState } from 'react';
import { useAppSelector } from '@store/hooks';
import { Radio, Input } from 'antd';
import { EditOutlined, CloseOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import { getAllEditProfileSections } from '@constants';
import { EditProfileSection, EditProfileItem } from '@/types';
import type { EditProfileProps } from '@interfaces';
import './EditProfile.css';

const { TextArea } = Input;

const EditProfile = ({ onDone, onPreview }: EditProfileProps) => {
    const { user } = useAppSelector((state) => state.auth);
    const [photos, setPhotos] = useState<Array<{ id?: string; url: string; is_primary?: boolean }>>(
        user?.photos || []
    );
    const [gender, setGender] = useState<'man' | 'woman'>(user?.gender || 'man');
    const [aboutMe, setAboutMe] = useState<string>(user?.bio || '');
    const [currentWork] = useState<string>((user as any)?.current_work || 'Developer');

    const editProfileSections = getAllEditProfileSections();

    // Format birthday helper
    const formatBirthday = (dateOfBirth?: string): string => {
        if (!dateOfBirth) return '';
        return dayjs(dateOfBirth).format('MMM D, YYYY');
    };

    // Photo handlers
    const handlePhotoRemove = (index: number) => {
        setPhotos(prev => prev.filter((_, i) => i !== index));
    };

    const handlePhotoAdd = () => {
        // TODO: Implement photo upload
        console.log('Add photo');
    };

    // Item click handler
    const handleItemClick = (item: EditProfileItem) => {
        // TODO: Handle item click - open modal or navigate to edit screen
        console.log('Item clicked:', item);
    };

    // Render BASIC section fields
    const renderBasicField = (item: EditProfileItem) => {
        switch (item) {
            case EditProfileItem.BIRTHDAY:
                return (
                    <div className="edit-profile-field">
                        <label>My Birthday</label>
                        <div className="edit-profile-field-value">
                            {formatBirthday(user?.date_of_birth) || 'Not set'}
                        </div>
                    </div>
                );
            case EditProfileItem.GENDER:
                return (
                    <div className="edit-profile-field">
                        <label>My Gender</label>
                        <Radio.Group value={gender} onChange={(e) => setGender(e.target.value)}>
                            <Radio value="man">Man</Radio>
                            <Radio value="woman">Woman</Radio>
                        </Radio.Group>
                    </div>
                );
            case EditProfileItem.ABOUT_ME:
                return (
                    <div className="edit-profile-field">
                        <div className="edit-profile-field-header">
                            <label>About Me</label>
                            <span>{aboutMe.length}</span>
                        </div>
                        <TextArea
                            value={aboutMe}
                            onChange={(e) => setAboutMe(e.target.value)}
                            placeholder="Lorem ipsum dolor sit amet, con..."
                            rows={4}
                            maxLength={500}
                        />
                    </div>
                );
            case EditProfileItem.CURRENT_WORK:
                return (
                    <div className="edit-profile-field">
                        <label>Current Work</label>
                        <div className="edit-profile-field-value-wrapper">
                            <div>{currentWork || 'Not set'}</div>
                            <button><EditOutlined /></button>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    // Render option items (for PERSONAL, APPEARANCE, HABITS sections)
    const renderOptionItem = (itemConfig: EditProfileItemConfig) => {
        const displayValue = itemConfig.defaultValue || 'Add to your profile...';
        return (
            <div
                key={itemConfig.item}
                className="edit-profile-option-item"
                onClick={() => handleItemClick(itemConfig.item)}
            >
                <div className="edit-profile-option-left">
                    <span className="edit-profile-option-icon">{itemConfig.icon}</span>
                    <span className="edit-profile-option-label">{itemConfig.label}</span>
                </div>
                <div className="edit-profile-option-right">
                    <span className="edit-profile-option-placeholder">{displayValue}</span>
                    <span className="edit-profile-option-arrow">›</span>
                </div>
            </div>
        );
    };

    // Photo slots (3x3 grid, max 9 photos)
    const maxPhotos = 9;
    const photoSlots = Array(maxPhotos).fill(null).map((_, index) => ({
        index,
        photo: photos[index] || null,
    }));

    return (
        <div className="edit-profile-page">
            {/* Header */}
            <div className="edit-profile-header">
                <div className="edit-profile-header-left"></div>
                <div className="edit-profile-header-center"></div>
                <div className="edit-profile-header-right">
                    {onPreview && (
                        <button onClick={onPreview}>Preview</button>
                    )}
                    <button onClick={onDone}>Done</button>
                </div>
            </div>

            <div className="edit-profile-content">
                {/* UPLOAD IMAGES Section */}
                <div className="edit-profile-section">
                    <div className="edit-profile-section-header">
                        <h2>UPLOAD IMAGES</h2>
                        {onPreview && (
                            <button onClick={onPreview}>Preview</button>
                        )}
                    </div>
                    <div className="edit-profile-photos-grid">
                        {photoSlots.map((slot, index) => (
                            <div key={index} className="edit-profile-photo-slot">
                                {slot.photo ? (
                                    <div className="edit-profile-photo-wrapper">
                                        <img
                                            src={`${import.meta.env.VITE_API_BASE_URL || ''}${slot.photo.url}`}
                                            alt={`Photo ${index + 1}`}
                                        />
                                        <button onClick={() => handlePhotoRemove(index)}>
                                            <CloseOutlined />
                                        </button>
                                    </div>
                                ) : (
                                    <button onClick={handlePhotoAdd}>
                                        <span>+</span>
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                    <p>Drag and drop to reorder Photos</p>
                </div>

                {/* Dynamic Sections */}
                {editProfileSections.map(({ section, title, items }) => (
                    <div key={section} className="edit-profile-section">
                        <h2 className="edit-profile-section-title">{title}</h2>
                        {section === EditProfileSection.BASIC ? (
                            // Render BASIC section fields with custom UI
                            items.map((itemConfig) => renderBasicField(itemConfig.item))
                        ) : (
                            // Render other sections as option items
                            items.map((itemConfig) => renderOptionItem(itemConfig))
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EditProfile;
```

---

## 🔄 How It Renders

1. **Gets User Id**: Reads `user.id` from Redux store
2. **Gets Sections**: Calls `getAllEditProfileSections()` to get all sections with items
3. **Renders Header**: Shows "Preview" link and "Done" button
4. **Renders UPLOAD IMAGES Section**:
   - 3x3 grid (9 photo slots max)
   - Shows existing photos or "+" add button
   - Remove button (X) on each photo
5. **Renders BASIC Section**: Custom fields for Birthday, Gender, About Me, Current Work
6. **Renders Other Sections**: PERSONAL, APPEARANCE, HABITS as clickable option items
7. **Navigation to item pages**:
   - Clicking a non-basic item navigates to `/edit/:item`.
   - `DashboardLayout` detects `/edit/:item` and renders the correct page inside the dashboard shell.
8. **Saving**:
   - Main EditProfile Done uses `updateUserProfileApi` to update profile.
   - Selector/Height item pages save via the same API and navigate back to `/edit`.

---

## 📝 Adding New Section/Item

### Step 1: Add Enum Value

Edit `src/types/enums.ts`:
```typescript
export const EditProfileSection = {
    // ... existing sections
    NEW_SECTION: 'new_section',
} as const;

export const EditProfileItem = {
    // ... existing items
    NEW_ITEM: 'new_item',
} as const;
```

### Step 2: Add Constants

Edit `src/constants/editProfile.ts`:
```typescript
// Add section title
export const EditProfileSectionTitles = {
    // ... existing titles
    [EditProfileSection.NEW_SECTION]: 'NEW SECTION',
} as const;

// Add item label
export const EditProfileItemLabels = {
    // ... existing labels
    [EditProfileItem.NEW_ITEM]: 'New Item',
} as const;

// Add item icon
export const EditProfileItemIcons: Record<EditProfileItem, string> = {
    // ... existing icons
    [EditProfileItem.NEW_ITEM]: '🆕',
} as const;

// Add item to section
export const EditProfileItemsBySection: Record<EditProfileSection, EditProfileItem[]> = {
    // ... existing sections
    [EditProfileSection.NEW_SECTION]: [
        EditProfileItem.NEW_ITEM,
    ],
} as const;

// Add section to sections array
export const EDIT_SECTIONS: EditProfileSection[] = [
    // ... existing sections
    EditProfileSection.NEW_SECTION,
] as const;
```

### Step 3: Add Custom Render Logic (if needed)

If the new item needs custom UI (like BASIC section items), add to `renderBasicField()`:
```typescript
case EditProfileItem.NEW_ITEM:
    return (
        <div className="edit-profile-field">
            <label>New Item</label>
            {/* Custom UI */}
        </div>
    );
```

---

## 🎯 Key Features

- **Constants-Driven**: Sections and items defined in constants for easy maintenance
- **Dynamic Rendering**: Sections rendered dynamically from constants
- **Photo Management**: Uses `ImageUpload` component, supports reorder. On Done the app sends `photos: [{ url, order }]`.
- **Custom Fields**: BASIC section has custom UI (radio buttons, textarea, etc.)
- **Option Items**: Other sections use consistent option item UI
- **Header Actions**: Preview and Done buttons

**Validation**:
- Minimum 3 photos are required when submitting EditProfile.

**Display mapping**:
- Selector-based values are mapped from stored ids to human-readable labels using the selector page constants.
- Arrays are shown as comma + space separated.

---

## 🐛 Troubleshooting

**Issue**: Sections not showing
- **Solution**: Ensure `getAllEditProfileSections()` is imported from `@constants`

**Issue**: Photos not displaying
- **Solution**: Check `VITE_API_BASE_URL` environment variable

**Issue**: Selector item page doesn't show pre-selected value
- **Solution**: Ensure the selector page reads the current value from redux user and initializes the selector state.

**Issue**: Date formatting error
- **Solution**: Verify `dayjs` is installed and date format is correct

---

## 📚 Related Files

- `src/constants/editProfile.ts` - EditProfile constants and configurations
- `src/types/enums.ts` - EditProfileSection and EditProfileItem enums
- `src/interfaces/components.interface.ts` - EditProfileProps interface
- `src/services/api/patch_apis.ts` - `updateUserProfileApi` (full profile update)
- `src/components/DashboardLayout/DashboardLayout.tsx` - Renders `/edit/:item` pages

