import { patchApi } from "../api_methods";
import type { ProfileUpdateRequest, ProfileUpdateResponse } from "@interfaces";

// ============================================
// API ENDPOINTS
// ============================================
const PROFILE_STEP_API = '/api/profile/{user_id}';

// ============================================
// PATCH APIs
// ============================================

// Steps 2-6, 8: Update profile fields
export const profileStepPatchApi = async (
    userId: string,
    data: ProfileUpdateRequest
): Promise<ProfileUpdateResponse> => {
    const response = await patchApi<ProfileUpdateResponse>(
        PROFILE_STEP_API.replace('{user_id}', userId),
        data
    );
    return response;
};

