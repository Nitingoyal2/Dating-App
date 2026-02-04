// ============================================
// API Response Wrapper
// ============================================
export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: {
        code: string;
        message: string;
        details?: Record<string, unknown>;
    };
    message?: string;
}

// ============================================
// Draft API (Step 1)
// ============================================
export interface DraftRequest {
    email: string;
}

export interface DraftResponse {
    user_id: string;
    email: string;
}

// ============================================
// Profile Update API (Steps 2-6, 8)
// ============================================
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

export interface ProfileUpdateResponse {
    user_id: string;
    first_name?: string;
    gender?: 'man' | 'woman';
    seeking?: 'man' | 'woman';
    date_of_birth?: string;
    age?: number;
    latitude?: number;
    longitude?: number;
    location_skipped?: boolean;
    rules_accepted?: boolean;
}

// ============================================
// Photo API (Step 7)
// ============================================
export interface Photo {
    id: string;
    url: string;
    order: number;
    is_primary?: boolean;
}

export interface PhotoUploadResponse {
    photo: Photo;
    photos: Photo[];
    photo_count: number;
}

export interface PhotoDeleteResponse {
    deleted_photo_id: string;
    photo_count: number;
}

// ============================================
// Complete API (Step 9)
// ============================================
export interface CompleteRequest {
    password: string;
    confirm_password: string;
}

export interface CompleteUser {
    id: string;
    email: string;
    first_name: string;
    age: number;
    gender: 'man' | 'woman';
    seeking: 'man' | 'woman';
    photos: Photo[];
    created_at: string;
}

export interface CompleteTokens {
    access_token: string;
    refresh_token: string;
    token_type: string;
    expires_in: number;
}

export interface CompleteResponse {
    user: CompleteUser;
    tokens: CompleteTokens;
}

