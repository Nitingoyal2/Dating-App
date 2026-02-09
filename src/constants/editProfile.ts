/**
 * Edit page constants
 * Centralized configuration for Edit sections, items, and labels
 */

import { EditProfileSection, EditProfileItem as EditProfileItemEnum } from '@/types';
import type { EditProfileItemConfig } from '@interfaces';

/**
 * Edit section titles
 */
export const EditProfileSectionTitles = {
    [EditProfileSection.BASIC]: 'BASIC',
    [EditProfileSection.PERSONAL]: 'PERSONAL',
    [EditProfileSection.APPEARANCE]: 'APPEARANCE',
    [EditProfileSection.HABITS]: 'HABITS',
} as const;

/**
 * Edit item labels
 */
export const EditProfileItemLabels = {
    // BASIC section
    [EditProfileItemEnum.BIRTHDAY]: 'My Birthday',
    [EditProfileItemEnum.GENDER]: 'My Gender',
    [EditProfileItemEnum.ABOUT_ME]: 'About Me',
    [EditProfileItemEnum.CURRENT_WORK]: 'Current Work',
    // PERSONAL section
    [EditProfileItemEnum.LOOKING_FOR]: 'Looking For',
    [EditProfileItemEnum.PETS]: 'Pets',
    [EditProfileItemEnum.CHILDREN]: 'Children',
    [EditProfileItemEnum.ASTROLOGICAL_SIGN]: 'Astrological Sign',
    [EditProfileItemEnum.RELIGION]: 'Religion',
    [EditProfileItemEnum.EDUCATION]: 'Education',
    // APPEARANCE section
    [EditProfileItemEnum.HEIGHT]: 'Height',
    [EditProfileItemEnum.BODY_TYPE]: 'Body Type',
    // HABITS section
    [EditProfileItemEnum.EXERCISE]: 'Exercise',
    [EditProfileItemEnum.DRINK]: 'Drink',
    [EditProfileItemEnum.SMOKER]: 'Smoker',
    [EditProfileItemEnum.MARIJUANA]: 'Marijuana',
} as const;

/**
 * Edit item icons (emoji or icon identifiers)
 */
export const EditProfileItemIcons: Record<EditProfileItemEnum, string> = {
    // BASIC section
    [EditProfileItemEnum.BIRTHDAY]: '🎂',
    [EditProfileItemEnum.GENDER]: '⚧️',
    [EditProfileItemEnum.ABOUT_ME]: '📝',
    [EditProfileItemEnum.CURRENT_WORK]: '💼',
    // PERSONAL section
    [EditProfileItemEnum.LOOKING_FOR]: '🔍',
    [EditProfileItemEnum.PETS]: '🐾',
    [EditProfileItemEnum.CHILDREN]: '👤',
    [EditProfileItemEnum.ASTROLOGICAL_SIGN]: '♈',
    [EditProfileItemEnum.RELIGION]: '🕌',
    [EditProfileItemEnum.EDUCATION]: '🎓',
    // APPEARANCE section
    [EditProfileItemEnum.HEIGHT]: '📏',
    [EditProfileItemEnum.BODY_TYPE]: '👥',
    // HABITS section
    [EditProfileItemEnum.EXERCISE]: '🏃',
    [EditProfileItemEnum.DRINK]: '🍹',
    [EditProfileItemEnum.SMOKER]: '🚬',
    [EditProfileItemEnum.MARIJUANA]: '🌿',
} as const;

/**
 * Edit item default values (for display when not set)
 */
export const EditProfileItemDefaults: Partial<Record<EditProfileItemEnum, string>> = {
    [EditProfileItemEnum.SMOKER]: 'Never',
    [EditProfileItemEnum.MARIJUANA]: 'Never',
} as const;

/**
 * Edit sections configuration
 * Order matters - this determines the display order
 */
export const EDIT_SECTIONS: EditProfileSection[] = [
    EditProfileSection.BASIC,
    EditProfileSection.PERSONAL,
    EditProfileSection.APPEARANCE,
    EditProfileSection.HABITS,
] as const;

/**
 * Edit items by section
 */
export const EditProfileItemsBySection: Record<EditProfileSection, EditProfileItemEnum[]> = {
    [EditProfileSection.BASIC]: [
        EditProfileItemEnum.BIRTHDAY,
        EditProfileItemEnum.GENDER,
        EditProfileItemEnum.ABOUT_ME,
        EditProfileItemEnum.CURRENT_WORK,
    ],
    [EditProfileSection.PERSONAL]: [
        EditProfileItemEnum.LOOKING_FOR,
        EditProfileItemEnum.PETS,
        EditProfileItemEnum.CHILDREN,
        EditProfileItemEnum.ASTROLOGICAL_SIGN,
        EditProfileItemEnum.RELIGION,
        EditProfileItemEnum.EDUCATION,
    ],
    [EditProfileSection.APPEARANCE]: [
        EditProfileItemEnum.HEIGHT,
        EditProfileItemEnum.BODY_TYPE,
    ],
    [EditProfileSection.HABITS]: [
        EditProfileItemEnum.EXERCISE,
        EditProfileItemEnum.DRINK,
        EditProfileItemEnum.SMOKER,
        EditProfileItemEnum.MARIJUANA,
    ],
} as const;

/**
 * Get Edit item configuration
 */
export const getEditProfileItemConfig = (item: EditProfileItemEnum): EditProfileItemConfig => {
    return {
        item,
        label: EditProfileItemLabels[item],
        icon: EditProfileItemIcons[item],
        defaultValue: EditProfileItemDefaults[item] || null,
    };
};

/**
 * Get all Edit items for a section
 */
export const getEditProfileItemsForSection = (section: EditProfileSection): EditProfileItemConfig[] => {
    return EditProfileItemsBySection[section].map(getEditProfileItemConfig);
};

/**
 * Get all Edit sections with their items
 */
export const getAllEditProfileSections = (): Array<{ section: EditProfileSection; title: string; items: EditProfileItemConfig[] }> => {
    return EDIT_SECTIONS.map((section) => ({
        section,
        title: EditProfileSectionTitles[section],
        items: getEditProfileItemsForSection(section),
    }));
};
