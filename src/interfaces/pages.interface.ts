import type { ReactNode } from 'react';
import type { LoginType } from '@/types';

// ============================================
// Common Types
// ============================================
export type GenderType = 'man' | 'woman';

// ============================================
// Profile Setup interfaces
// ============================================
export interface ProfileData {
  email: string;
  firstName: string;
  location: { lat: number; lng: number } | null;
  gender: GenderType | null;
  seeking: GenderType | null;
  dateOfBirth: string;
  photos: string[];
}

export interface StepProps {
  onNext: () => void;
  onBack: () => void;
  isLoading?: boolean;
}

export interface StepEmailProps extends StepProps {
  value: string;
  onChange: (value: string) => void;
}
export interface OtpVerificationProps extends StepProps {
  value: string;
  onChange: (value: string) => void;
  identifier?: string;
  onResend?: () => void | Promise<void>;
}

export interface LoginSetupLoginProps extends StepProps {
  loginType: LoginType;
  onLoginTypeChange: (value: LoginType) => void;
  phone: string;
  onPhoneChange: (value: string) => void;
  countryCode: string;
  onCountryCodeChange: (value: string) => void;
  email: string;
  onEmailChange: (value: string) => void;
}

export interface StepNameProps extends StepProps {
  value: string;
  onChange: (value: string) => void;
}

export interface StepLocationProps {
  onBack: () => void;
  onAllow: (location: { lat: number; lng: number }) => void;
  onSkip: () => void;
  isLoading?: boolean;
}

export interface StepGenderProps extends StepProps {
  value: GenderType | null;
  onChange: (value: GenderType) => void;
}

export interface StepSeekingProps extends StepProps {
  value: GenderType | null;
  onChange: (value: GenderType) => void;
}

export interface StepBirthdayProps extends StepProps {
  value: string;
  onChange: (value: string) => void;
}

export interface StepPhotosProps extends StepProps {
  value: string[];
  onChange: (value: string[]) => void;
  userId: string | null;
}

export interface StepSuccessProps {
  onComplete: (password: string) => void;
  isLoading?: boolean;
}

export interface PasswordFormData {
  password: string;
  confirm_password: string;
}

// ============================================
// Step Welcome Types
// ============================================
export interface WelcomeRule {
  title: string;
  description: ReactNode;
}

// ============================================
// Splash interfaces
// ============================================
export interface SplashProps {
  onFinish: () => void;
  duration?: number;
}

