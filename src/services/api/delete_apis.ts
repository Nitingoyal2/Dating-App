import { deleteApi } from "../api_methods";
import type { PhotoDeleteResponse } from "@interfaces";

// ============================================
// API ENDPOINTS
// ============================================
const PROFILE_PHOTO_DELETE_API = '/profile/{user_id}/photos/{photo_id}';
const USER_PHOTO_DELETE_API = '/profile/user/{user_id}/photos/{photo_id}';

// ============================================
// DELETE APIs
// ============================================

// Step 7: Delete photo
export const profilePhotoDeleteApi = async (
    userId: string,
    photoId: string
): Promise<PhotoDeleteResponse> => {
    const response = await deleteApi<PhotoDeleteResponse>(
        PROFILE_PHOTO_DELETE_API.replace('{user_id}', userId).replace('{photo_id}', photoId)
    );
    return response;
};

export const userPhotoDeleteApi = async (
    userId: string,
    photoId: string
): Promise<PhotoDeleteResponse> => {
    const response = await deleteApi<PhotoDeleteResponse>(
        USER_PHOTO_DELETE_API.replace('{user_id}', userId).replace('{photo_id}', photoId)
    );
    return response;
};



