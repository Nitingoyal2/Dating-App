// Common/Shared interfaces used across the application

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  about_me?: string;
  age?: number;
  location?: string;
  interests?: string[];
  createdAt?: Date;
  date_of_birth?: string;
  gender?: string;
  current_work?: string;
  school?: string;
  looking_for?: string[];
  pets?: string[];
  children?: string;
  astrological_sign?: string;
  religion?: string;
  education?: string;
  height?: string; 
  body_type?: string;
  exercise?: string;
  drink?: string;
  smoker?: string;
  marijuana?: string;
  photos: Array<{
    id: string;
    url: string;
    order: number;
    is_primary?: boolean;
  }>;
  latitude?: number | null;
  longitude?: number | null;
  [key: string]: unknown; // Allow additional fields from API
}

export interface UserData {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  fullName: string;
  avatarUrl: string;
  age: number;
  gender: string;
}

export interface ApiMeta {
  timestamp: string; // ISO date string
  path: string;
  version: string;
  requestId: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
  meta?: ApiMeta;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

export type NavigationHandler = () => void;
