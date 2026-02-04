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

### TypeScript Types

```typescript
// types/api.types.ts

interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: {
        code: string;
        message: string;
        details?: Record<string, unknown>;
    };
    message?: string;
}

// Draft response
interface DraftResponse {
    user_id: string;
    email: string;
}

// Profile update request (varies by step)
interface ProfileUpdateRequest {
    first_name?: string;
    gender?: 'man' | 'woman';
    seeking?: 'man' | 'woman';
    date_of_birth?: string;
    latitude?: number;
    longitude?: number;
    location_skipped?: boolean;
    rules_accepted?: boolean;
}

// Complete response
interface CompleteResponse {
    user: User;
    tokens: {
        access_token: string;
        refresh_token: string;
        token_type: string;
        expires_in: number;
    };
}
```

### API Service

```typescript
// services/profileApi.ts

const API_BASE = '/api';

export const profileApi = {
    // Step 1: Create draft
    createDraft: (email: string) =>
        api.post<DraftResponse>(`${API_BASE}/draft`, { email }),

    // Steps 2-6, 8: Update profile
    updateProfile: (userId: string, data: ProfileUpdateRequest) =>
        api.patch(`${API_BASE}/profile/${userId}`, data),

    // Step 7: Photos
    uploadPhoto: (userId: string, file: File, order?: number) => {
        const formData = new FormData();
        formData.append('photo', file);
        if (order !== undefined) formData.append('order', order.toString());
        return api.post(`${API_BASE}/profile/${userId}/photos`, formData);
    },

    deletePhoto: (userId: string, photoId: string) =>
        api.delete(`${API_BASE}/profile/${userId}/photos/${photoId}`),

    // Step 9: Complete
    complete: (userId: string, password: string) =>
        api.post<CompleteResponse>(`${API_BASE}/profile/${userId}/complete`, {
            password,
            confirm_password: password,
        }),
};
```

### Usage in ProfileSetup Component

```typescript
// pages/ProfileSetup/ProfileSetup.tsx

const ProfileSetup = () => {
    const [userId, setUserId] = useState<string | null>(null);
    const [currentStep, setCurrentStep] = useState(1);

    // Step 1: Create draft
    const handleEmailSubmit = async (email: string) => {
        const response = await profileApi.createDraft(email);
        setUserId(response.data.user_id);
        setCurrentStep(2);
    };

    // Steps 2-6, 8: Update profile
    const handleProfileUpdate = async (data: ProfileUpdateRequest) => {
        if (!userId) return;
        await profileApi.updateProfile(userId, data);
        setCurrentStep((prev) => prev + 1);
    };

    // Step 7: Upload photo
    const handlePhotoUpload = async (file: File) => {
        if (!userId) return;
        await profileApi.uploadPhoto(userId, file);
    };

    // Step 9: Complete
    const handleComplete = async (password: string) => {
        if (!userId) return;
        const response = await profileApi.complete(userId, password);
        // Store tokens and redirect to dashboard
        dispatch(loginSuccess(response.data));
        navigate(Routes.DASHBOARD);
    };

    // ... render steps
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

*Document Version: 3.0.0*  
*Created: February 2026*  
*Frontend Version: 2.2.0*
