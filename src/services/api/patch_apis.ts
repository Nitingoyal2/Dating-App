import { patchApi, patchFormDataApi } from "../api_methods";
import type {
    ApiResponse,
    FullProfileUpdateRequest,
    FullProfileUpdateResponse,
    ProfileUpdateRequest,
    ProfileUpdateResponse,
} from "@interfaces";

// ============================================
// API ENDPOINTS
// ============================================
const PROFILE_STEP_API = '/profile/{user_id}';
const FULL_PROFILE_UPDATE_API = '/profile/user/{userId}';

// ============================================
// PATCH APIs
// ============================================

// Steps 2-6, 8: Update profile fields
export const profileStepPatchApi = async (
    userId: string,
    data: ProfileUpdateRequest
): Promise<ProfileUpdateResponse> => {
    const response = await patchApi<ApiResponse<ProfileUpdateResponse>>(
        PROFILE_STEP_API.replace('{user_id}', userId),
        data
    );
    return response.data;
};

export const updateUserProfileApi = async (
    userId: string,
    data: FullProfileUpdateRequest
): Promise<FullProfileUpdateResponse> => {
    const response = await patchApi<ApiResponse<FullProfileUpdateResponse>>(
        FULL_PROFILE_UPDATE_API.replace('{userId}', userId),
        data
    );
    return response.data;
};

export const updateUserProfileWithFormDataApi = async (
    userId: string,
    formData: FormData
): Promise<FullProfileUpdateResponse> => {
    const response = await patchFormDataApi<ApiResponse<FullProfileUpdateResponse>>(
        FULL_PROFILE_UPDATE_API.replace('{userId}', userId),
        formData
    );
    return response.data;
};

