import type { ComponentType, ReactNode, SVGProps } from 'react';
import type { ButtonProps } from 'antd';
import type { ProfileAction, SettingsItem as SettingsItemType, EditProfileItem as EditProfileItemType } from '@/types';

// ============================================
// Icon Types
// ============================================
export interface IconProps extends SVGProps<SVGSVGElement> {
    size?: number;
    color?: string;
}

export interface VerifiedIconProps extends IconProps {
    verified?: boolean;
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

// ============================================
// DashboardLayout Component Types
// ============================================
export type DashboardScreen = 'discover' | 'matches' | 'explore' | 'chat' | 'profile' | 'settings' | 'EDIT';

export interface DashboardLayoutProps {
    activeScreen?: DashboardScreen;
    onScreenChange?: (screen: DashboardScreen) => void;
}

// ============================================
// Profile Component Types
// ============================================
export interface ProfileProps {
    onSettingsClick?: () => void;
    onEditProfileClick?: () => void;
}

// ============================================
// EditProfile Component Types
// ============================================
export interface EditProfileProps {
    onDone?: () => void;
    onPreview?: () => void;
}

export interface ProfileActionConfig {
    action: ProfileAction;
    label: string;
    color: string;
    icon: string;
    filter: string;
}

// ============================================
// Spinner Component Types
// ============================================
export interface SpinnerProps {
    size?: 'small' | 'default' | 'large';
    fullScreen?: boolean;
    tip?: string;
}

// ============================================
// Settings Component Types
// ============================================
export interface SettingsItemConfig {
    item: SettingsItemType;
    label: string;
    route: string | null;
}

// ============================================
// EditProfile Component Types
// ============================================
export interface EditProfileItemConfig {
    item: EditProfileItemType;
    label: string;
    icon: ComponentType<IconProps>;
    defaultValue: string | null;
}

// CommonSelect Component Types

export type SelectorType = "radio" | "checkbox";

export interface SelectorItem<T extends string | number> {
    id: T;
    label: string;
}

export interface CommonSelectorProps<T extends string | number> {
    data: SelectorItem<T>[];
    type: SelectorType;
    value?: T | T[];
    onChange?: (val: T | T[]) => void;
}
