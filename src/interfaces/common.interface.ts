// Common/Shared interfaces used across the application

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  bio?: string;
  age?: number;
  location?: string;
  interests?: string[];
  createdAt?: Date;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

export type NavigationHandler = () => void;

