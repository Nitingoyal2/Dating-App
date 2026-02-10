/**
 * Edit page constants
 * Centralized configuration for Edit sections, items, and labels
 */

import { EditProfileItemIcons } from '@/utils/svg';
import { EditProfileSection, EditProfileItem as EditProfileItemEnum } from '@/types';
import type { EditProfileItemConfig } from '@interfaces';
import type { SelectorItem, SelectorType } from '@interfaces';

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
    [EditProfileItemEnum.SCHOOL]: 'School',
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
        EditProfileItemEnum.SCHOOL,
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

export type EditProfileSelectorPageConfig = {
    item: EditProfileItemEnum;
    slug: string;
    title: string;
    selectorType: SelectorType;
    options: SelectorItem<string>[];
};

export type EditProfileSliderPageConfig = {
    item: EditProfileItemEnum;
    slug: string;
    title: string;
    min: number;
    max: number;
    step: number;
    unitLabel: string;
};

export const EDIT_PROFILE_SELECTOR_PAGES: EditProfileSelectorPageConfig[] = [
    {
        item: EditProfileItemEnum.SMOKER,
        slug: EditProfileItemEnum.SMOKER,
        title: EditProfileItemLabels[EditProfileItemEnum.SMOKER],
        selectorType: 'radio',
        options: [
            { id: 'never', label: 'Never' },
            { id: 'sometimes', label: 'Sometimes' },
            { id: 'socially', label: 'Socially' },
            { id: 'often', label: 'Often' },
        ],
    },
    {
        item: EditProfileItemEnum.MARIJUANA,
        slug: EditProfileItemEnum.MARIJUANA,
        title: EditProfileItemLabels[EditProfileItemEnum.MARIJUANA],
        selectorType: 'radio',
        options: [
            { id: 'never', label: 'Never' },
            { id: 'sometimes', label: 'Sometimes' },
            { id: 'socially', label: 'Socially' },
            { id: 'often', label: 'Often' },
        ],
    },
    {
        item: EditProfileItemEnum.DRINK,
        slug: EditProfileItemEnum.DRINK,
        title: EditProfileItemLabels[EditProfileItemEnum.DRINK],
        selectorType: 'radio',
        options: [
            { id: 'never', label: 'Never' },
            { id: 'sometimes', label: 'Sometimes' },
            { id: 'socially', label: 'Socially' },
            { id: 'often', label: 'Often' },
        ],
    },
    {
        item: EditProfileItemEnum.EXERCISE,
        slug: EditProfileItemEnum.EXERCISE,
        title: EditProfileItemLabels[EditProfileItemEnum.EXERCISE],
        selectorType: 'radio',
        options: [
            { id: 'never', label: 'Never' },
            { id: 'sometimes', label: 'Sometimes' },
            { id: 'often', label: 'Often' },
        ],
    },
    {
        item: EditProfileItemEnum.BODY_TYPE,
        slug: EditProfileItemEnum.BODY_TYPE,
        title: EditProfileItemLabels[EditProfileItemEnum.BODY_TYPE],
        selectorType: 'radio',
        options: [
            { id: 'average', label: 'Average' },
            { id: 'fit', label: 'Fit' },
            { id: 'curvy', label: 'Curvy' },
            { id: 'slim', label: 'Slim' },
            { id: 'chubby', label: 'Chubby' },
        ],
    },
    {
        item: EditProfileItemEnum.EDUCATION,
        slug: EditProfileItemEnum.EDUCATION,
        title: EditProfileItemLabels[EditProfileItemEnum.EDUCATION],
        selectorType: 'radio',
        options: [
            { id: 'high_school', label: 'High school' },
            { id: 'some_college', label: 'Some college' },
            { id: 'associate_degree', label: 'Associate degree' },
            { id: 'bachelors_degree', label: "Bachelor's degree" },
            { id: 'graduate_degree', label: 'Graduate degree' },
            { id: 'phd_post_doctoral', label: 'PhD/Post Doctoral' },
        ],
    },
    {
        item: EditProfileItemEnum.RELIGION,
        slug: EditProfileItemEnum.RELIGION,
        title: EditProfileItemLabels[EditProfileItemEnum.RELIGION],
        selectorType: 'radio',
        options: [
            { id: 'none', label: 'None' },
            { id: 'agnostic', label: 'Agnostic' },
            { id: 'atheist', label: 'Atheist' },
            { id: 'buddhist_taoist', label: 'Buddhist/Taoist' },
            { id: 'christian_catholic', label: 'Christian/Catholic' },
            { id: 'christian_lds', label: 'Christian/LDS' },
            { id: 'christian_protestant', label: 'Christian/Protestant' },
            { id: 'christian_other', label: 'Christian/Other' },
            { id: 'hindu', label: 'Hindu' },
            { id: 'jewish', label: 'Jewish' },
            { id: 'muslim_islam', label: 'Muslim/Islam' },
            { id: 'spiritual_not_religious', label: 'Spiritual but not religious' },
            { id: 'other', label: 'Other' },
        ],
    },
    {
        item: EditProfileItemEnum.ASTROLOGICAL_SIGN,
        slug: EditProfileItemEnum.ASTROLOGICAL_SIGN,
        title: EditProfileItemLabels[EditProfileItemEnum.ASTROLOGICAL_SIGN],
        selectorType: 'radio',
        options: [
            { id: 'aquarius', label: 'Aquarius' },
            { id: 'aries', label: 'Aries' },
            { id: 'cancer', label: 'Cancer' },
            { id: 'capricorn', label: 'Capricorn' },
            { id: 'gemini', label: 'Gemini' },
            { id: 'leo', label: 'Leo' },
            { id: 'libra', label: 'Libra' },
            { id: 'pisces', label: 'Pisces' },
            { id: 'sagittarius', label: 'Sagittarius' },
            { id: 'scorpio', label: 'Scorpio' },
            { id: 'taurus', label: 'Taurus' },
            { id: 'virgo', label: 'Virgo' },
        ],
    },
    {
        item: EditProfileItemEnum.CHILDREN,
        slug: EditProfileItemEnum.CHILDREN,
        title: EditProfileItemLabels[EditProfileItemEnum.CHILDREN],
        selectorType: 'radio',
        options: [
            { id: 'dont_want', label: "Don't want" },
            { id: 'want_someday', label: 'Want Someday' },
            { id: 'have_and_want_more', label: 'Have & want more' },
            { id: 'have_and_dont_want_more', label: "Have & don't want more" },
        ],
    },
    {
        item: EditProfileItemEnum.PETS,
        slug: EditProfileItemEnum.PETS,
        title: EditProfileItemLabels[EditProfileItemEnum.PETS],
        selectorType: 'checkbox',
        options: [
            { id: 'cats', label: 'Cat(s)' },
            { id: 'dogs', label: 'Dog(s)' },
            { id: 'other', label: 'Other' },
        ],
    },
    {
        item: EditProfileItemEnum.LOOKING_FOR,
        slug: EditProfileItemEnum.LOOKING_FOR,
        title: EditProfileItemLabels[EditProfileItemEnum.LOOKING_FOR],
        selectorType: 'checkbox',
        options: [
            { id: 'friends', label: 'Friends' },
            { id: 'fwb', label: 'FWB' },
            { id: 'something_casual', label: 'Something Casual' },
            { id: 'exclusive_dating', label: 'Exclusive Dating' },
            { id: 'long_term_relationship', label: 'Long Term Relationship' },
            { id: 'wedding_band', label: 'Wedding Band' },
        ],
    },
];

export const EDIT_PROFILE_SLIDER_PAGES: EditProfileSliderPageConfig[] = [
    {
        item: EditProfileItemEnum.HEIGHT,
        slug: EditProfileItemEnum.HEIGHT,
        title: EditProfileItemLabels[EditProfileItemEnum.HEIGHT],
        min: 40,
        max: 84,
        step: 1,
        unitLabel: "in",
    },
];

export const getEditProfileSelectorPageConfig = (
    item: EditProfileItemEnum,
): EditProfileSelectorPageConfig | undefined => {
    return EDIT_PROFILE_SELECTOR_PAGES.find((p) => p.item === item);
};

export const getEditProfileSliderPageConfig = (
    item: EditProfileItemEnum,
): EditProfileSliderPageConfig | undefined => {
    return EDIT_PROFILE_SLIDER_PAGES.find((p: EditProfileSliderPageConfig) => p.item === item);
};

export const buildEditProfileItemRoute = (item: EditProfileItemEnum): string => {
    return `/edit/${item}`;
};
