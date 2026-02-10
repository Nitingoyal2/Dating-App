import { getApi } from "../api_methods";
import type { User, ApiResponse } from "../../interfaces";

// ============================================
// API ENDPOINTS
// ============================================

const GET_USER_DETAILS = "users/profile/{userId}"
// ============================================
// GET APIs
// ============================================

export const getUserDetails = async (userId: string) => {
    return await getApi<ApiResponse<User>>(GET_USER_DETAILS.replace("{userId}", userId));
}

