import type { ReactNode } from 'react';

export interface AuthLayoutProps {
  title: string;
  description?: string;
  descriptionColor?: 'default' | 'accent';
  onBackClick?: () => void;
  showBackButton?: boolean;
  centered?: boolean;
  children: ReactNode;
  footer?: ReactNode;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ForgotPasswordFormData {
  email: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

