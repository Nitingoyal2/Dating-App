import type { ReactNode } from 'react';

export interface AuthLayoutProps {
  title: string;
  description: string;
  onBackClick?: () => void;
  showBackButton?: boolean;
  children: ReactNode;
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

