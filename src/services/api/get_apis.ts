import { getApi } from "../api_methods";
import type { User, ApiResponse, UserData } from "../../interfaces";

// ============================================
// API ENDPOINTS
// ============================================

const GET_USER_DETAILS = "users/profile/{userId}";
const GET_USER_LIST = "/users/list";
// ============================================
// GET APIs
// ============================================

export const getUserDetails = async (userId: string) => {
  return await getApi<ApiResponse<User>>(
    GET_USER_DETAILS.replace("{userId}", userId),
  );
};

export const getUserList = async () => {
  return await getApi<ApiResponse<UserData[]>>(GET_USER_LIST);
};
