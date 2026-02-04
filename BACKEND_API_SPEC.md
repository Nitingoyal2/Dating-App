# Backend API Specification - Profile Setup Flow

> **Project**: Prosto Dating App  
> **Module**: Multi-Step Profile Registration  
> **Version**: 3.0.0  
> **Date**: February 2026

---

## 📋 Overview

The frontend implements a **9-step profile creation flow**. The backend provides:

1. **Draft API** - Create draft profile with email, returns `user_id`
2. **Profile PATCH API** - Update profile fields step by step
3. **Complete API** - Finalize profile and activate account

---

## 🔄 API Flow

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              API FLOW                                        │
└─────────────────────────────────────────────────────────────────────────────┘

Step 1:  POST   /api/draft              → { email }
                                         ← { user_id }
         
Step 2:  PATCH  /api/profile/{user_id}  → { first_name: "John" }

Step 3:  PATCH  /api/profile/{user_id}  → { latitude, longitude } or { location_skipped: true }

Step 4:  PATCH  /api/profile/{user_id}  → { gender: "man" }

Step 5:  PATCH  /api/profile/{user_id}  → { seeking: "woman" }

Step 6:  PATCH  /api/profile/{user_id}  → { date_of_birth: "1995-06-15" }

Step 7:  POST   /api/profile/{user_id}/photos  → multipart/form-data (photo upload)
         DELETE /api/profile/{user_id}/photos/{photo_id}

Step 8:  PATCH  /api/profile/{user_id}  → { rules_accepted: true }

Step 9:  POST   /api/profile/{user_id}/complete  → Finalize & activate account
                                                  ← { user, access_token, refresh_token }
```

---

## 📊 Visual Flow

```
┌──────────────┐     ┌─────────────────────────────────────┐     ┌──────────────┐
│  POST /draft │────▶│     PATCH /profile/{user_id}       │────▶│ POST /complete│
│              │     │                                     │     │              │
│  { email }   │     │  Step 2: { first_name }            │     │  Finalize    │
│      ↓       │     │  Step 3: { location }              │     │  account     │
│  { user_id } │     │  Step 4: { gender }                │     │      ↓       │
│              │     │  Step 5: { seeking }               │     │  { user,     │
└──────────────┘     │  Step 6: { date_of_birth }         │     │   tokens }   │
                     │  Step 8: { rules_accepted }         │     └──────────────┘
                     │                                     │
                     │  Step 7: POST /photos (separate)    │
                     └─────────────────────────────────────┘
```

---

## 📡 API Endpoints

### Step 1: Create Draft (Email)

**Endpoint**: `POST /api/draft`

**Purpose**: Create a draft profile with email, returns `user_id` for subsequent steps

**Request**:
```json
{
    "email": "user@example.com"
}
```

**Response (201 Created)**:
```json
{
    "success": true,
    "data": {
        "user_id": "550e8400-e29b-41d4-a716-446655440000",
        "email": "user@example.com"
    },
    "message": "Draft created successfully"
}
```

**Errors**:
```json
// 400 - Invalid email
{
    "success": false,
    "error": {
        "code": "INVALID_EMAIL",
        "message": "Please enter a valid email address"
    }
}

// 409 - Email already exists
{
    "success": false,
    "error": {
        "code": "EMAIL_EXISTS",
        "message": "An account with this email already exists"
    }
}
```

---

### Steps 2-6, 8: Update Profile

**Endpoint**: `PATCH /api/profile/{user_id}`

**Purpose**: Update profile fields one at a time (called on each step)

#### Step 2: First Name

**Request**:
```json
{
    "first_name": "John"
}
```

**Response (200 OK)**:
```json
{
    "success": true,
    "data": {
        "user_id": "550e8400-e29b-41d4-a716-446655440000",
        "first_name": "John"
    },
    "message": "Profile updated successfully"
}
```

---

#### Step 3: Location

**Request (Allow Location)**:
```json
{
    "latitude": 40.7128,
    "longitude": -74.0060
}
```

**Request (Skip Location)**:
```json
{
    "location_skipped": true
}
```

**Response (200 OK)**:
```json
{
    "success": true,
    "data": {
        "user_id": "550e8400-e29b-41d4-a716-446655440000",
        "latitude": 40.7128,
        "longitude": -74.0060,
        "location_skipped": false
    },
    "message": "Profile updated successfully"
}
```

---

#### Step 4: Gender

**Request**:
```json
{
    "gender": "man"
}
```

**Response (200 OK)**:
```json
{
    "success": true,
    "data": {
        "user_id": "550e8400-e29b-41d4-a716-446655440000",
        "gender": "man"
    },
    "message": "Profile updated successfully"
}
```

---

#### Step 5: Seeking

**Request**:
```json
{
    "seeking": "woman"
}
```

**Response (200 OK)**:
```json
{
    "success": true,
    "data": {
        "user_id": "550e8400-e29b-41d4-a716-446655440000",
        "seeking": "woman"
    },
    "message": "Profile updated successfully"
}
```

---

#### Step 6: Date of Birth

**Request**:
```json
{
    "date_of_birth": "1995-06-15"
}
```

**Response (200 OK)**:
```json
{
    "success": true,
    "data": {
        "user_id": "550e8400-e29b-41d4-a716-446655440000",
        "date_of_birth": "1995-06-15",
        "age": 30
    },
    "message": "Profile updated successfully"
}
```

**Error (Under 18)**:
```json
{
    "success": false,
    "error": {
        "code": "AGE_RESTRICTION",
        "message": "You must be at least 18 years old"
    }
}
```

---

#### Step 8: Accept Rules

**Request**:
```json
{
    "rules_accepted": true
}
```

**Response (200 OK)**:
```json
{
    "success": true,
    "data": {
        "user_id": "550e8400-e29b-41d4-a716-446655440000",
        "rules_accepted": true
    },
    "message": "Profile updated successfully"
}
```

---

### Step 7: Upload Photos

**Endpoint**: `POST /api/profile/{user_id}/photos`

**Content-Type**: `multipart/form-data`

**Request**:
```
photo: [File]
order: 0  (optional)
```

**Response (200 OK)**:
```json
{
    "success": true,
    "data": {
        "photo": {
            "id": "photo-uuid-123",
            "url": "https://storage.example.com/photos/abc123.jpg",
            "order": 0
        },
        "photos": [
            { "id": "photo-uuid-123", "url": "https://...", "order": 0 },
            { "id": "photo-uuid-456", "url": "https://...", "order": 1 }
        ],
        "photo_count": 2
    },
    "message": "Photo uploaded successfully"
}
```

---

### Delete Photo

**Endpoint**: `DELETE /api/profile/{user_id}/photos/{photo_id}`

**Response (200 OK)**:
```json
{
    "success": true,
    "data": {
        "deleted_photo_id": "photo-uuid-123",
        "photo_count": 1
    },
    "message": "Photo deleted successfully"
}
```

---

### Step 9: Complete Profile

**Endpoint**: `POST /api/profile/{user_id}/complete`

**Purpose**: Finalize profile, create active user account, return auth tokens

**Request**:
```json
{
    "password": "SecurePassword123!",
    "confirm_password": "SecurePassword123!"
}
```

**Response (201 Created)**:
```json
{
    "success": true,
    "data": {
        "user": {
            "id": "550e8400-e29b-41d4-a716-446655440000",
            "email": "user@example.com",
            "first_name": "John",
            "age": 30,
            "gender": "man",
            "seeking": "woman",
            "photos": [
                { "id": "photo-1", "url": "https://...", "is_primary": true },
                { "id": "photo-2", "url": "https://...", "is_primary": false }
            ],
            "created_at": "2026-02-04T10:35:00Z"
        },
        "tokens": {
            "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
            "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
            "token_type": "Bearer",
            "expires_in": 3600
        }
    },
    "message": "Profile completed successfully"
}
```

**Errors**:
```json
// 400 - Incomplete profile
{
    "success": false,
    "error": {
        "code": "INCOMPLETE_PROFILE",
        "message": "Please complete all required fields",
        "details": {
            "missing_fields": ["date_of_birth", "photos"],
            "photos_required": 2,
            "photos_uploaded": 1
        }
    }
}
```

---

## 📋 API Summary

| Step | Method | Endpoint | Request Body |
|------|--------|----------|--------------|
| 1 | POST | `/api/draft` | `{ email }` |
| 2 | PATCH | `/api/profile/{user_id}` | `{ first_name }` |
| 3 | PATCH | `/api/profile/{user_id}` | `{ latitude, longitude }` or `{ location_skipped }` |
| 4 | PATCH | `/api/profile/{user_id}` | `{ gender }` |
| 5 | PATCH | `/api/profile/{user_id}` | `{ seeking }` |
| 6 | PATCH | `/api/profile/{user_id}` | `{ date_of_birth }` |
| 7 | POST | `/api/profile/{user_id}/photos` | `multipart/form-data` |
| 7 | DELETE | `/api/profile/{user_id}/photos/{photo_id}` | - |
| 8 | PATCH | `/api/profile/{user_id}` | `{ rules_accepted }` |
| 9 | POST | `/api/profile/{user_id}/complete` | `{ password, confirm_password }` |

**Total: 5 unique endpoints**

---

## 🗃️ Database Schema

### `draft_profiles` Table

```sql
CREATE TABLE draft_profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    first_name VARCHAR(100),
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    location_skipped BOOLEAN DEFAULT FALSE,
    gender ENUM('man', 'woman'),
    seeking ENUM('man', 'woman'),
    date_of_birth DATE,
    rules_accepted BOOLEAN DEFAULT FALSE,
    status ENUM('draft', 'completed') DEFAULT 'draft',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    expires_at TIMESTAMP DEFAULT (CURRENT_TIMESTAMP + INTERVAL '24 hours')
);
```

### `draft_photos` Table

```sql
CREATE TABLE draft_photos (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    draft_id UUID REFERENCES draft_profiles(id) ON DELETE CASCADE,
    photo_url VARCHAR(500) NOT NULL,
    photo_order INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### `users` Table (After Complete)

```sql
CREATE TABLE users (
    id UUID PRIMARY KEY,  -- Same ID from draft
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    date_of_birth DATE NOT NULL,
    age INTEGER GENERATED ALWAYS AS (
        EXTRACT(YEAR FROM AGE(CURRENT_DATE, date_of_birth))
    ) STORED,
    gender ENUM('man', 'woman') NOT NULL,
    seeking ENUM('man', 'woman') NOT NULL,
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 📱 Frontend Integration

### TypeScript Interfaces

All interfaces are centralized in `src/interfaces/api.interface.ts`:

```typescript
// interfaces/api.interface.ts

// Request Types
export interface DraftRequest {
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

export interface CompleteRequest {
    password: string;
    confirm_password: string;
}

// Response Types
export interface DraftResponse {
    user_id: string;
    email: string;
}

export interface ProfileUpdateResponse {
    user_id: string;
    [key: string]: unknown;
}

export interface PhotoUploadResponse {
    photo: {
        id: string;
        url: string;
        order: number;
    };
    photos: Array<{ id: string; url: string; order: number }>;
    photo_count: number;
}

export interface PhotoDeleteResponse {
    deleted_photo_id: string;
    photo_count: number;
}

export interface CompleteUser {
    id: string;
    email: string;
    first_name: string;
    age: number;
    gender: 'man' | 'woman';
    seeking: 'man' | 'woman';
    photos: Array<{ id: string; url: string; is_primary: boolean }>;
    created_at: string;
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
```

### API Service Structure

APIs are organized by HTTP method in `src/services/api/`:

```typescript
// services/api/post_apis.ts
import { postApi, postFormDataApi } from '../api_methods';
import type { DraftRequest, DraftResponse, CompleteRequest, CompleteResponse, PhotoUploadResponse } from '@interfaces';

export const registrationDraftApi = async (data: DraftRequest): Promise<DraftResponse> => {
    return await postApi<DraftResponse>('/api/draft', data);
};

export const registrationCompleteApi = async (
    userId: string,
    data: CompleteRequest
): Promise<CompleteResponse> => {
    return await postApi<CompleteResponse>(`/api/profile/${userId}/complete`, data);
};

export const profilePhotoUploadApi = async (
    userId: string,
    file: File,
    order?: number
): Promise<PhotoUploadResponse> => {
    const formData = new FormData();
    formData.append('photo', file);
    if (order !== undefined) formData.append('order', order.toString());
    return await postFormDataApi<PhotoUploadResponse>(`/api/profile/${userId}/photos`, formData);
};

// services/api/patch_apis.ts
import { patchApi } from '../api_methods';
import type { ProfileUpdateRequest, ProfileUpdateResponse } from '@interfaces';

export const profileStepPatchApi = async (
    userId: string,
    data: ProfileUpdateRequest
): Promise<ProfileUpdateResponse> => {
    return await patchApi<ProfileUpdateResponse>(`/api/profile/${userId}`, data);
};

// services/api/delete_apis.ts
import { deleteApi } from '../api_methods';
import type { PhotoDeleteResponse } from '@interfaces';

export const profilePhotoDeleteApi = async (
    userId: string,
    photoId: string
): Promise<PhotoDeleteResponse> => {
    return await deleteApi<PhotoDeleteResponse>(`/api/profile/${userId}/photos/${photoId}`);
};
```

### Usage in ProfileSetup Component

The ProfileSetup component uses a **single unified handler** for all steps:

```typescript
// pages/ProfileSetup/ProfileSetup.tsx
import { registrationDraftApi, registrationCompleteApi, profileStepPatchApi } from '@services';
import type { ProfileData, ProfileUpdateRequest } from '@interfaces';

const ProfileSetup = () => {
    const [userId, setUserId] = useState<string | null>(null);
    const [currentStep, setCurrentStep] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [profileData, setProfileData] = useState<ProfileData>({...});

    // Object map for step payloads
    const getStepPayload = (
        step: number,
        extraData?: { location?: { lat: number; lng: number }; locationSkipped?: boolean }
    ): ProfileUpdateRequest | null => {
        const payloadMap: Record<number, () => ProfileUpdateRequest | null> = {
            2: () => ({ first_name: profileData.firstName }),
            3: () => {
                if (extraData?.locationSkipped) return { location_skipped: true };
                if (extraData?.location) return { latitude: extraData.location.lat, longitude: extraData.location.lng };
                return null;
            },
            4: () => (profileData.gender ? { gender: profileData.gender } : null),
            5: () => (profileData.seeking ? { seeking: profileData.seeking } : null),
            6: () => ({ date_of_birth: profileData.dateOfBirth }),
            8: () => ({ rules_accepted: true }),
        };
        return payloadMap[step]?.() ?? null;
    };

    // Single unified handler
    const handleStepSubmit = async (
        step: number,
        extraData?: { location?: { lat: number; lng: number }; locationSkipped?: boolean; password?: string }
    ) => {
        if (step === 7) { setCurrentStep(8); return; } // Photos handled in component

        setIsLoading(true);
        try {
            // Step 1: Create draft
            if (step === 1) {
                const response = await registrationDraftApi({ email: profileData.email });
                setUserId(response.user_id);
                setCurrentStep(2);
                return;
            }

            // Step 9: Complete profile
            if (step === 9) {
                const response = await registrationCompleteApi(userId!, {
                    password: extraData!.password!,
                    confirm_password: extraData!.password!,
                });
                dispatch(loginSuccess({
                    user: { id: response.user.id, name: response.user.first_name, email: response.user.email },
                    token: response.tokens.access_token,
                }));
                navigate(Routes.DASHBOARD, { replace: true });
                return;
            }

            // Steps 2-6, 8: PATCH profile
            const payload = getStepPayload(step, extraData);
            if (payload) await profileStepPatchApi(userId!, payload);
            setCurrentStep(step + 1);
        } catch (error) {
            message.error((error as Error).message); // Backend provides error messages
        } finally {
            setIsLoading(false);
        }
    };

    // ... render steps with isLoading prop
};
```

---

## 🔒 Validation Rules

| Field | Rules |
|-------|-------|
| `email` | Valid email format, unique |
| `first_name` | 2-100 chars, letters/spaces/hyphens |
| `gender` | `"man"` or `"woman"` |
| `seeking` | `"man"` or `"woman"` |
| `date_of_birth` | `YYYY-MM-DD`, age ≥ 18 |
| `latitude` | -90 to 90 |
| `longitude` | -180 to 180 |
| `photos` | Min 2, Max 6, JPEG/PNG/WebP, Max 5MB each |
| `password` | Min 8 chars, 1 uppercase, 1 lowercase, 1 number |

---

## 🔐 Authentication

### After Complete - Login

**Endpoint**: `POST /api/auth/login`

**Request**:
```json
{
    "email": "user@example.com",
    "password": "SecurePassword123!"
}
```

**Response**:
```json
{
    "success": true,
    "data": {
        "user": { ... },
        "tokens": {
            "access_token": "eyJ...",
            "refresh_token": "eyJ...",
            "token_type": "Bearer",
            "expires_in": 3600
        }
    }
}
```

### Token Refresh

**Endpoint**: `POST /api/auth/token/refresh`

**Headers**:
```
Authorization: Bearer {refresh_token}
```

**Response**:
```json
{
    "success": true,
    "data": {
        "access_token": "eyJ...",
        "token_type": "Bearer",
        "expires_in": 3600
    }
}
```

---

## 🧪 Testing Checklist

### API Tests

- [ ] POST /draft - Create with valid email
- [ ] POST /draft - Reject duplicate email
- [ ] PATCH /profile/{id} - Update each field
- [ ] PATCH /profile/{id} - Validate age ≥ 18
- [ ] POST /profile/{id}/photos - Upload photo
- [ ] DELETE /profile/{id}/photos/{id} - Delete photo
- [ ] POST /profile/{id}/complete - Complete profile
- [ ] POST /profile/{id}/complete - Reject incomplete profile

---

## 📝 Changelog

### v3.1.0 (February 2026)
- **Frontend**: Updated to unified `handleStepSubmit` function
- **Frontend**: APIs organized by HTTP method (`services/api/`)
- **Frontend**: All interfaces centralized in `interfaces/api.interface.ts`
- **Frontend**: Full type safety with no `any` types
- **Frontend**: Object map pattern for step payloads

### v3.0.0 (February 2026)
- **Updated**: Simplified to match backend team's API structure
- **Changed**: Step 1 uses `POST /draft` instead of `/register/start`
- **Changed**: All profile updates use `PATCH /profile/{user_id}`
- **Changed**: Complete uses `POST /profile/{user_id}/complete`
- **Simplified**: 5 unique endpoints total

### v2.0.0 (February 2026)
- Single PATCH endpoint with JWT registration_token

### v1.0.0 (February 2026)
- Initial specification

---

*Document Version: 3.1.0*  
*Created: February 2026*  
*Frontend Version: 3.0.0*
