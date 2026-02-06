/**
 * Settings page constants
 * Centralized configuration for settings sections, items, and labels
 */

import { SettingsSection, SettingsItem as SettingsItemEnum } from '@/types';
import { Routes } from '@/types';
import type { SettingsItemConfig } from '@interfaces';

/**
 * Settings section titles
 */
export const SettingsSectionTitles = {
    [SettingsSection.ACCOUNT]: 'Account',
    [SettingsSection.PREFERENCES]: 'Preferences',
    [SettingsSection.SUPPORT]: 'Support',
} as const;

/**
 * Settings item labels
 */
export const SettingsItemLabels = {
    [SettingsItemEnum.PRIVACY]: 'Privacy',
    [SettingsItemEnum.SECURITY]: 'Security',
    [SettingsItemEnum.NOTIFICATIONS]: 'Notifications',
    [SettingsItemEnum.LANGUAGE]: 'Language',
    [SettingsItemEnum.HELP_CENTER]: 'Help Center',
    [SettingsItemEnum.CONTACT_US]: 'Contact Us',
    [SettingsItemEnum.TERMS_OF_SERVICE]: 'Terms of Service',
    [SettingsItemEnum.PRIVACY_POLICY]: 'Privacy Policy',
} as const;

/**
 * Settings item navigation routes
 */
export const SettingsItemRoutes: Partial<Record<SettingsItemEnum, string>> = {
    [SettingsItemEnum.TERMS_OF_SERVICE]: Routes.TERMS_OF_SERVICE,
    [SettingsItemEnum.PRIVACY_POLICY]: Routes.PRIVACY_POLICY,
} as const;

/**
 * Settings sections configuration
 * Order matters - this determines the display order
 */
export const SETTINGS_SECTIONS: SettingsSection[] = [
    SettingsSection.ACCOUNT,
    SettingsSection.PREFERENCES,
    SettingsSection.SUPPORT,
] as const;

/**
 * Settings items by section
 */
export const SettingsItemsBySection: Record<SettingsSection, SettingsItemEnum[]> = {
    [SettingsSection.ACCOUNT]: [
        SettingsItemEnum.PRIVACY,
        SettingsItemEnum.SECURITY,
    ],
    [SettingsSection.PREFERENCES]: [
        SettingsItemEnum.NOTIFICATIONS,
        SettingsItemEnum.LANGUAGE,
    ],
    [SettingsSection.SUPPORT]: [
        SettingsItemEnum.HELP_CENTER,
        SettingsItemEnum.CONTACT_US,
        SettingsItemEnum.TERMS_OF_SERVICE,
        SettingsItemEnum.PRIVACY_POLICY,
    ],
} as const;

/**
 * Logout button text
 */
export const SETTINGS_LOGOUT_TEXT = 'Logout';

/**
 * Get settings item configuration
 */
export const getSettingsItemConfig = (item: SettingsItemEnum): SettingsItemConfig => {
    return {
        item,
        label: SettingsItemLabels[item],
        route: SettingsItemRoutes[item] || null,
    };
};

/**
 * Get all settings items for a section
 */
export const getSettingsItemsForSection = (section: SettingsSection): SettingsItemConfig[] => {
    return SettingsItemsBySection[section].map(getSettingsItemConfig);
};

/**
 * Get all settings sections with their items
 */
export const getAllSettingsSections = (): Array<{ section: SettingsSection; title: string; items: SettingsItemConfig[] }> => {
    return SETTINGS_SECTIONS.map((section) => ({
        section,
        title: SettingsSectionTitles[section],
        items: getSettingsItemsForSection(section),
    }));
};

