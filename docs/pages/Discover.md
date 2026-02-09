# Discover Page Documentation

## 📋 Overview

The Discover page displays swipeable profile cards with like/dislike/superlike actions. It's the main screen for browsing potential matches.

**Route**: `/dashboard` (default screen)  
**File**: `src/pages/Discover/Discover.tsx`  
**Type**: Protected route (requires authentication)

---

## 📁 File Structure

```
src/pages/Discover/
├── Discover.tsx         # Main component
├── Discover.css         # Styles
└── index.ts             # Export file
```

---

## 🔗 How to Import

```typescript
// Named import (recommended)
import { Discover } from '@/pages/Discover';

// Or from pages index
import { Discover } from '@/pages';
```

---

## 📦 Dependencies

### Icons

```typescript
import { 
    VerifiedIcon, 
    LocationSymbol, 
    StartIcon, 
    HeartIcon, 
    CloseIcon 
} from '@svg';
```

**Icons Used**:
- `VerifiedIcon` - Shows verified badge
- `LocationSymbol` - Shows distance indicator
- `StartIcon` - Super like button
- `HeartIcon` - Like button
- `CloseIcon` - Dislike button

### React Hooks

```typescript
import { useState } from 'react';
```

---

## 🏗️ Implementation

### Basic Usage

```typescript
import { Discover } from '@/pages/Discover';

<Discover />
```

### Full Component Structure

```typescript
import { useState } from 'react';
import { VerifiedIcon, LocationSymbol, StartIcon, HeartIcon, CloseIcon } from '@svg';
import './Discover.css';

const Discover = () => {
    const [currentProfileIndex, setCurrentProfileIndex] = useState(0);

    // Mock profile data - replace with actual API data
    const profiles = [
        {
            id: 1,
            name: 'Gabrielle',
            age: 26,
            distance: 5,
            verified: true,
            image: 'https://picsum.photos/400/600?random=1',
        },
        {
            id: 2,
            name: 'Sarah',
            age: 24,
            distance: 3,
            verified: false,
            image: 'https://picsum.photos/400/600?random=2',
        },
    ];

    const currentProfile = profiles[currentProfileIndex] || profiles[0];

    const handleLike = () => {
        console.log('Like');
        if (currentProfileIndex < profiles.length - 1) {
            setCurrentProfileIndex(currentProfileIndex + 1);
        }
    };

    const handleSuperLike = () => {
        console.log('Super Like');
        if (currentProfileIndex < profiles.length - 1) {
            setCurrentProfileIndex(currentProfileIndex + 1);
        }
    };

    const handleDislike = () => {
        console.log('Dislike');
        if (currentProfileIndex < profiles.length - 1) {
            setCurrentProfileIndex(currentProfileIndex + 1);
        }
    };

    return (
        <div className="discover-screen">
            {/* Profile Card */}
            <div className="discover-content">
                <div className="profile-card">
                    <div className="profile-card-image">
                        <img src={currentProfile.image} alt={currentProfile.name} />
                        <div className="profile-card-overlay">
                            <div className="profile-card-info">
                                <div className="profile-card-name">
                                    <h2>{currentProfile.name}, {currentProfile.age}</h2>
                                    {currentProfile.verified && (
                                        <VerifiedIcon size={20} verified={currentProfile.verified} />
                                    )}
                                </div>
                                <div className="profile-card-distance">
                                    <LocationSymbol size={16} color="#fff" />
                                    <span>{currentProfile.distance} miles away</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="discover-actions">
                    <button className="action-btn dislike-btn" onClick={handleDislike}>
                        <CloseIcon size={24} color="#FF9500" />
                    </button>
                    <button className="action-btn superlike-btn" onClick={handleSuperLike}>
                        <StartIcon size={36} color="#fff" />
                    </button>
                    <button className="action-btn like-btn" onClick={handleLike}>
                        <HeartIcon size={24} color="#FF6B9D" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Discover;
```

---

## 🔄 How It Renders

1. **Manages State**: Tracks current profile index with `useState`
2. **Gets Current Profile**: Selects profile from array based on index
3. **Renders Profile Card**:
   - Large image
   - Overlay with name, age, verified badge
   - Distance indicator
4. **Renders Action Buttons**: Three buttons (Dislike, Super Like, Like)
5. **Handles Actions**: On click, moves to next profile

---

## 📊 Data Structure

### Profile Object

```typescript
interface Profile {
    id: number;
    name: string;
    age: number;
    distance: number;
    verified: boolean;
    image: string;
}
```

---

## 🔌 API Integration (TODO)

Currently uses mock data. To integrate with API:

```typescript
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { useEffect } from 'react';
import { getProfilesApi, likeProfileApi, dislikeProfileApi, superLikeProfileApi } from '@services';

const Discover = () => {
    const dispatch = useAppDispatch();
    const [profiles, setProfiles] = useState<Profile[]>([]);
    const [currentProfileIndex, setCurrentProfileIndex] = useState(0);

    useEffect(() => {
        // Fetch profiles on mount
        const fetchProfiles = async () => {
            const data = await getProfilesApi();
            setProfiles(data);
        };
        fetchProfiles();
    }, []);

    const handleLike = async () => {
        const currentProfile = profiles[currentProfileIndex];
        await likeProfileApi(currentProfile.id);
        // Move to next profile
        if (currentProfileIndex < profiles.length - 1) {
            setCurrentProfileIndex(currentProfileIndex + 1);
        } else {
            // Fetch more profiles
            const moreProfiles = await getProfilesApi();
            setProfiles([...profiles, ...moreProfiles]);
        }
    };

    // Similar for handleDislike and handleSuperLike
};
```

---

## 🎯 Key Features

- **Swipeable Cards**: Profile cards with image and info overlay
- **Action Buttons**: Like, Super Like, Dislike buttons
- **Verified Badge**: Shows verified status
- **Distance Display**: Shows distance in miles
- **Profile Navigation**: Moves to next profile on action

---

## 📝 Adding New Features

### Add More Profile Info

```typescript
interface Profile {
    id: number;
    name: string;
    age: number;
    distance: number;
    verified: boolean;
    image: string;
    bio?: string;           // Add bio
    interests?: string[];   // Add interests
    photos?: string[];      // Add more photos
}
```

### Add Swipe Gestures

```typescript
import { useSwipeable } from 'react-swipeable';

const handlers = useSwipeable({
    onSwipedLeft: handleDislike,
    onSwipedRight: handleLike,
    onSwipedUp: handleSuperLike,
});

<div {...handlers}>
    {/* Profile card */}
</div>
```

---

## 🐛 Troubleshooting

**Issue**: Profiles not showing
- **Solution**: Check profiles array is populated and currentProfileIndex is valid

**Issue**: Actions not working
- **Solution**: Verify handlers are correctly attached to buttons

**Issue**: Icons not displaying
- **Solution**: Ensure icons are imported from `@svg`

---

## 📚 Related Files

- `src/utils/svg/icons.tsx` - SVG icon components
- `src/pages/Discover/Discover.css` - Styles

