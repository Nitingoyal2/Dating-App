/**
 * Dashboard navigation constants
 * Centralized configuration for screen navigation, titles, and back button behavior
 */

import { DashboardScreen } from '@/types';
import type { DashboardScreen as DashboardScreenType } from '@interfaces';

/**
 * Screen titles mapping
 * Maps each screen to its display title
 */
export const ScreenTitles = {
    [DashboardScreen.DISCOVER]: 'Discover',
    [DashboardScreen.MATCHES]: 'Matches',
    [DashboardScreen.EXPLORE]: 'Explore',
    [DashboardScreen.CHAT]: 'Messages',
    [DashboardScreen.PROFILE]: 'My Profile',
    [DashboardScreen.SETTINGS]: 'Settings',
} as const satisfies Record<DashboardScreenType, string>;

/**
 * Default screen when user first logs in
 */
export const DEFAULT_DASHBOARD_SCREEN: DashboardScreenType = DashboardScreen.DISCOVER;

/**
 * Back navigation mapping
 * Defines which screen to navigate to when back button is clicked
 * If a screen is not in this map, it means it doesn't have a back button
 */
export const BackNavigation: Partial<Record<DashboardScreenType, DashboardScreenType>> = {
    [DashboardScreen.SETTINGS]: DashboardScreen.PROFILE,
    [DashboardScreen.PROFILE]: DashboardScreen.DISCOVER,
} as const;

/**
 * Screens that should show the back button
 */
export const ScreensWithBackButton: DashboardScreenType[] = [
    DashboardScreen.PROFILE,
    DashboardScreen.SETTINGS,
] as const;

/**
 * Get the title for a screen
 */
export const getScreenTitle = (screen: DashboardScreenType): string => {
    return ScreenTitles[screen] || 'Dashboard';
};

/**
 * Get the back navigation target for a screen
 */
export const getBackNavigationTarget = (screen: DashboardScreenType): DashboardScreenType | null => {
    return BackNavigation[screen] || null;
};

/**
 * Check if a screen should show the back button
 */
export const shouldShowBackButton = (screen: DashboardScreenType): boolean => {
    return ScreensWithBackButton.includes(screen);
};

