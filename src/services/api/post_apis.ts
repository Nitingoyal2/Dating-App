import { postApi, postFormDataApi } from "../api_methods";
import type {
    ApiResponse,
    DraftRequest,
    DraftResponse,
    CompleteRequest,
    CompleteResponse,
    PhotoUploadResponse,
    PhotoBatchUploadResponse,
    LoginRequest,
    LoginResponse,
    OtpVerifyRequest,
    OtpVerifyResponse,
    ResendOtpRequest,
    ResendOtpResponse,
} from "@interfaces";

// ============================================
// API ENDPOINTS
// ============================================
const REGISTRATION_DRAFT_API = '/draft';
const REGISTRATION_COMPLETE_API = '/profile/{user_id}/complete';
const PROFILE_PHOTO_API = '/profile/{user_id}/photos';

// Login APIs
const LOGIN_API = '/login';
const OTP_VERIFY_API = '/login/verify-otp';
const RESEND_OTP_API = '/login/resend-otp';

// ============================================
// POST APIs
// ============================================

// Step 1: Create draft profile with email
export const registrationDraftApi = async (data: DraftRequest): Promise<DraftResponse> => {
    const response = await postApi<ApiResponse<DraftResponse>>(REGISTRATION_DRAFT_API, data);
    return response.data;
};

// Step 9: Complete profile and get auth tokens
export const registrationCompleteApi = async (userId: string, data: CompleteRequest): Promise<CompleteResponse> => {
    const response = await postApi<ApiResponse<CompleteResponse>>(
        REGISTRATION_COMPLETE_API.replace('{user_id}', userId),
        data
    );
    return response.data;
};

// Step 7: Upload single photo (legacy - kept for backwards compatibility)
export const profilePhotoUploadApi = async (userId: string, file: File, order?: number): Promise<PhotoUploadResponse> => {
    const formData = new FormData();
    formData.append('photo', file);
    if (order !== undefined) {
        formData.append('order', order.toString());
    }
    const response = await postFormDataApi<ApiResponse<PhotoUploadResponse>>(
        PROFILE_PHOTO_API.replace('{user_id}', userId),
        formData
    );
    return response.data;
};

// Step 7: Batch upload multiple photos in one request
export const uploadPhotosApi = async (userId: string, files: File[]): Promise<PhotoBatchUploadResponse> => {
    const formData = new FormData();

    // Append all files with the same key 'photos[]' for batch upload
    files.forEach((file, index) => {
        formData.append('photos', file);
        // Optionally set order based on array index
        formData.append('orders', index.toString());
    });

    const response = await postFormDataApi<ApiResponse<PhotoBatchUploadResponse>>(
        PROFILE_PHOTO_API.replace('{user_id}', userId),
        formData
    );
    return response.data;
};

// ============================================
// LOGIN APIs
// ============================================

// Login: Send OTP to phone or email
export const loginApi = async (data: LoginRequest): Promise<LoginResponse> => {
    const response = await postApi<ApiResponse<LoginResponse>>(LOGIN_API, data);
    return response.data;
};

// Verify OTP and get auth tokens
export const otpVerifyApi = async (data: OtpVerifyRequest): Promise<OtpVerifyResponse> => {
    const response = await postApi<ApiResponse<OtpVerifyResponse>>(OTP_VERIFY_API, data);
    return response.data;
};

// Resend OTP
export const resendOtpApi = async (data: ResendOtpRequest): Promise<ResendOtpResponse> => {
    const response = await postApi<ApiResponse<ResendOtpResponse>>(RESEND_OTP_API, data);
    return response.data;
};

