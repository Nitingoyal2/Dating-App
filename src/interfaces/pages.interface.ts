// Profile Setup interfaces
export interface ProfileData {
  email: string;
  firstName: string;
  location: { lat: number; lng: number } | null;
  gender: 'man' | 'woman' | null;
  seeking: 'man' | 'woman' | null;
  dateOfBirth: string;
  photos: string[];
}

export interface StepProps {
  onNext: () => void;
  onBack: () => void;
}

export interface StepEmailProps extends StepProps {
  value: string;
  onChange: (value: string) => void;
}

export interface StepNameProps extends StepProps {
  value: string;
  onChange: (value: string) => void;
}

export interface StepLocationProps {
  onBack: () => void;
  onAllow: (location: { lat: number; lng: number }) => void;
  onSkip: () => void;
}

export interface StepGenderProps extends StepProps {
  value: 'man' | 'woman' | null;
  onChange: (value: 'man' | 'woman') => void;
}

export interface StepSeekingProps extends StepProps {
  value: 'man' | 'woman' | null;
  onChange: (value: 'man' | 'woman') => void;
}

export interface StepBirthdayProps extends StepProps {
  value: string;
  onChange: (value: string) => void;
}

export interface StepPhotosProps extends StepProps {
  value: string[];
  onChange: (value: string[]) => void;
}

export interface StepSuccessProps {
  onComplete: () => void;
}

// Splash interfaces
export interface SplashProps {
  onFinish: () => void;
  duration?: number;
}

