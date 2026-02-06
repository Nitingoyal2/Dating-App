/**
 * Profile page constants
 * Centralized configuration for profile actions, labels, colors, and messages
 */

import { ProfileAction } from '@/types';
import type { ProfileActionConfig } from '@interfaces';
import { coinIcon, diamondIcon, fireIcon, pencilIcon, settingIcon, shieldIcon } from '@assets';

/**
 * Profile action labels
 */
export const ProfileActionLabels = {
    [ProfileAction.SETTINGS]: 'Settings',
    [ProfileAction.EDIT_PROFILE]: 'Edit Profile',
    [ProfileAction.SAFETY]: 'Safety',
    [ProfileAction.GOLD]: 'Prosto Gold',
    [ProfileAction.PLATINUM]: 'Prosto Platinum',
    [ProfileAction.DIAMOND]: 'Prosto Diamond',
} as const;

/**
 * Profile action colors
 */
export const ProfileActionColors = {
    [ProfileAction.SETTINGS]: '#',
    [ProfileAction.EDIT_PROFILE]: '',
    [ProfileAction.SAFETY]: '',
    [ProfileAction.GOLD]: '',
    [ProfileAction.PLATINUM]: '',
    [ProfileAction.DIAMOND]: '',
} as const;

/**
 * Profile action icons mapping
 */
export const ProfileActionIcons = {
    [ProfileAction.SETTINGS]: settingIcon,
    [ProfileAction.EDIT_PROFILE]: pencilIcon,
    [ProfileAction.SAFETY]: shieldIcon,
    [ProfileAction.GOLD]: coinIcon,
    [ProfileAction.PLATINUM]: fireIcon,
    [ProfileAction.DIAMOND]: diamondIcon,
} as const;

/**
 * Profile action hue-rotate values for icon filters
 */
export const ProfileActionFilters: Record<ProfileAction, string> = {
    [ProfileAction.SETTINGS]: '0deg',
    [ProfileAction.EDIT_PROFILE]: '180deg',
    [ProfileAction.SAFETY]: '120deg',
    [ProfileAction.GOLD]: '45deg',
    [ProfileAction.PLATINUM]: '30deg',
    [ProfileAction.DIAMOND]: '210deg',
} as const;

/**
 * Profile actions configuration
 * Order matters - this determines the display order
 */
export const PROFILE_ACTIONS: ProfileAction[] = [
    ProfileAction.SETTINGS,
    ProfileAction.EDIT_PROFILE,
    ProfileAction.SAFETY,
    ProfileAction.GOLD,
    ProfileAction.PLATINUM,
    ProfileAction.DIAMOND,
] as const;

/**
 * Default profile values
 */
export const DEFAULT_PROFILE_AGE = 28;
export const DEFAULT_PROFILE_NAME = 'User';
export const DEFAULT_PROFILE_PROGRESS = 65;
export const DEFAULT_PROFILE_IMAGE_URL = 'https://picsum.photos/160/160?random=profile';

/**
 * Profile UI constants
 */
export const VERIFIED_ICON_COLOR = '#9E9E9E';
export const VERIFIED_ICON_SIZE = 36;
export const PROFILE_VERIFY_TEXT = 'Get Verified';
export const PROFILE_PROGRESS_SUFFIX = '% COMPLETE';

/**
 * Profile progress colors
 * Matches the design: red-to-orange gradient for progress, white for remaining
 */
export const PROFILE_PROGRESS_STROKE_COLOR_START = '#FF2C29'; // Red color (start of gradient)
export const PROFILE_PROGRESS_STROKE_COLOR_END = '#FF9500'; // Orange color (end of gradient)
export const PROFILE_PROGRESS_TRAIL_COLOR = '#ffffff'; // White for remaining progress

/**
 * Profile progress badge colors
 * Blue gradient: darker blue on left, lighter cyan blue on right
 */
export const PROFILE_PROGRESS_BADGE_GRADIENT_START = '#64CFEF'; // Darker blue
export const PROFILE_PROGRESS_BADGE_GRADIENT_END = '#0676C9'; // Lighter cyan blue


/**
 * Get profile action configuration
 */
export const getProfileActionConfig = (action: ProfileAction): ProfileActionConfig => {
    return {
        action,
        label: ProfileActionLabels[action],
        color: ProfileActionColors[action],
        icon: ProfileActionIcons[action],
        filter: ProfileActionFilters[action],
    };
};

/**
 * Get all profile actions configuration
 */
export const getAllProfileActions = (): ProfileActionConfig[] => {
    return PROFILE_ACTIONS.map(getProfileActionConfig);
};

