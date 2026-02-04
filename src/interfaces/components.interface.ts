import type { ReactNode, SVGProps } from 'react';
import type { ButtonProps } from 'antd';

// ============================================
// Icon Types
// ============================================
export interface IconProps extends SVGProps<SVGSVGElement> {
    size?: number;
    color?: string;
}

// ============================================
// Button Component Types
// ============================================
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface PrimaryButtonProps extends Omit<ButtonProps, 'size' | 'variant'> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    fullWidth?: boolean;
    rounded?: boolean;
}

// ============================================
// ThemeToggle Component Types
// ============================================
export type ThemeToggleVariant = 'buttons' | 'dropdown' | 'icons';

export interface ThemeToggleProps {
    showLabel?: boolean;
    variant?: ThemeToggleVariant;
}

// ============================================
// ConfirmModal Component Types
// ============================================
export type ModalType = 'success' | 'warning' | 'info' | 'error';

export interface ConfirmModalProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    description?: ReactNode;
    type?: ModalType;
    icon?: ReactNode;
    confirmText?: string;
    cancelText?: string;
    confirmVariant?: 'primary' | 'secondary';
    cancelVariant?: 'primary' | 'secondary' | 'outline' | 'text';
    showCancel?: boolean;
    width?: number;
}

// ============================================
// SuccessScreen Component Types
// ============================================
export interface SuccessScreenProps {
    icon: ReactNode;
    title: string;
    description?: string;
    buttonText: string;
    onButtonClick: () => void;
    secondaryButtonText?: string;
    onSecondaryClick?: () => void;
    showHearts?: boolean;
}

// ============================================
// AntdProvider Component Types
// ============================================
export interface AntdProviderProps {
    children: ReactNode;
}

