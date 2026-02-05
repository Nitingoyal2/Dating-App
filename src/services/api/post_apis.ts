import { postApi, postFormDataApi } from "../api_methods";
import type {
    DraftRequest,
    DraftResponse,
    CompleteRequest,
    CompleteResponse,
    PhotoUploadResponse,
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
const REGISTRATION_DRAFT_API = '/api/draft';
const REGISTRATION_COMPLETE_API = '/api/profile/{user_id}/complete';
const PROFILE_PHOTO_API = '/api/profile/{user_id}/photos';

// Login APIs
const LOGIN_API = '/api/login';
const OTP_VERIFY_API = '/api/login/verify-otp';
const RESEND_OTP_API = '/api/login/resend-otp';

// ============================================
// POST APIs
// ============================================

// Step 1: Create draft profile with email
export const registrationDraftApi = async (data: DraftRequest): Promise<DraftResponse> => {
    const response = await postApi<DraftResponse>(REGISTRATION_DRAFT_API, data);
    return response;
};

// Step 9: Complete profile and get auth tokens
export const registrationCompleteApi = async (userId: string, data: CompleteRequest): Promise<CompleteResponse> => {
    const response = await postApi<CompleteResponse>(
        REGISTRATION_COMPLETE_API.replace('{user_id}', userId),
        data
    );
    return response;
};

// Step 7: Upload photo
export const profilePhotoUploadApi = async (userId: string, file: File, order?: number): Promise<PhotoUploadResponse> => {
    const formData = new FormData();
    formData.append('photo', file);
    if (order !== undefined) {
        formData.append('order', order.toString());
    }
    const response = await postFormDataApi<PhotoUploadResponse>(
        PROFILE_PHOTO_API.replace('{user_id}', userId),
        formData
    );
    return response;
};

// ============================================
// LOGIN APIs
// ============================================

// Login: Send OTP to phone or email
export const loginApi = async (data: LoginRequest): Promise<LoginResponse> => {
    const response = await postApi<LoginResponse>(LOGIN_API, data);
    return response;
};

// Verify OTP and get auth tokens
export const otpVerifyApi = async (data: OtpVerifyRequest): Promise<OtpVerifyResponse> => {
    const response = await postApi<OtpVerifyResponse>(OTP_VERIFY_API, data);
    return response;
};

// Resend OTP
export const resendOtpApi = async (data: ResendOtpRequest): Promise<ResendOtpResponse> => {
    const response = await postApi<ResendOtpResponse>(RESEND_OTP_API, data);
    return response;
};

