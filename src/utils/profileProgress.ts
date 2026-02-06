/**
 * Profile Progress Calculation Utility
 * Calculates profile completion percentage based on filled fields
 */

import type { UserState } from '@interfaces';

/**
 * Profile fields and their weights for progress calculation
 * Total weight = 100
 */
const PROFILE_FIELDS = {
    EMAIL: 5,           // Always present after draft
    FIRST_NAME: 10,     // Step 2
    LOCATION: 10,       // Step 3 (latitude & longitude)
    GENDER: 15,         // Step 4
    SEEKING: 15,        // Step 5
    DATE_OF_BIRTH: 15,  // Step 6
    PHOTOS: 20,         // Step 7 (at least 1 photo)
    RULES_ACCEPTED: 5,  // Step 8
    ACCOUNT_COMPLETED: 5, // Step 9 (password set)
} as const;

/**
 * Calculate profile progress percentage based on completed fields
 * @param user - User state object
 * @returns Progress percentage (0-100)
 */
export const calculateProfileProgress = (user: UserState | null): number => {
    if (!user) {
        return 0;
    }

    let progress = 0;

    // Email (5 points) - Always present after draft
    if (user.email && user.email.trim() !== '') {
        progress += PROFILE_FIELDS.EMAIL;
    }

    // First Name (10 points) - Step 2
    if (user.first_name && user.first_name.trim() !== '') {
        progress += PROFILE_FIELDS.FIRST_NAME;
    }

    // Location (10 points) - Step 3
    // Count if either latitude or longitude is set (location can be skipped)
    if (user.latitude !== null && user.longitude !== null) {
        progress += PROFILE_FIELDS.LOCATION;
    }

    // Gender (15 points) - Step 4
    if (user.gender && (user.gender === 'man' || user.gender === 'woman')) {
        progress += PROFILE_FIELDS.GENDER;
    }

    // Seeking (15 points) - Step 5
    if (user.seeking && (user.seeking === 'man' || user.seeking === 'woman')) {
        progress += PROFILE_FIELDS.SEEKING;
    }

    // Date of Birth (15 points) - Step 6
    if (user.date_of_birth && user.date_of_birth.trim() !== '') {
        progress += PROFILE_FIELDS.DATE_OF_BIRTH;
    }

    // Photos (20 points) - Step 7
    // Award full points if at least 1 photo exists
    // Can be scaled: 1 photo = 10 points, 2+ photos = 20 points
    if (user.photos && user.photos.length > 0) {
        if (user.photos.length >= 2) {
            progress += PROFILE_FIELDS.PHOTOS;
        } else {
            // Partial credit for 1 photo
            progress += PROFILE_FIELDS.PHOTOS * 0.5;
        }
    }

    // Rules Accepted (5 points) - Step 8
    // Check if rules_accepted field exists (from API)
    if (user.rules_accepted === true) {
        progress += PROFILE_FIELDS.RULES_ACCEPTED;
    }

    // Account Completed (5 points) - Step 9
    // If user has created_at and other required fields, account is likely completed
    // This is inferred from having all other fields
    if (user.created_at && user.id) {
        // Check if all critical fields are present (indicating account completion)
        const hasCriticalFields = 
            user.first_name &&
            user.gender &&
            user.seeking &&
            user.date_of_birth &&
            user.photos &&
            user.photos.length > 0;
        
        if (hasCriticalFields) {
            progress += PROFILE_FIELDS.ACCOUNT_COMPLETED;
        }
    }

    // Ensure progress is between 0 and 100
    return Math.min(Math.max(Math.round(progress), 0), 100);
};

/**
 * Get list of missing fields for profile completion
 * @param user - User state object
 * @returns Array of missing field names
 */
export const getMissingProfileFields = (user: UserState | null): string[] => {
    if (!user) {
        return ['email', 'first_name', 'gender', 'seeking', 'date_of_birth', 'photos'];
    }

    const missing: string[] = [];

    if (!user.first_name || user.first_name.trim() === '') {
        missing.push('first_name');
    }

    if (user.latitude === null || user.longitude === null) {
        missing.push('location');
    }

    if (!user.gender || (user.gender !== 'man' && user.gender !== 'woman')) {
        missing.push('gender');
    }

    if (!user.seeking || (user.seeking !== 'man' && user.seeking !== 'woman')) {
        missing.push('seeking');
    }

    if (!user.date_of_birth || user.date_of_birth.trim() === '') {
        missing.push('date_of_birth');
    }

    if (!user.photos || user.photos.length === 0) {
        missing.push('photos');
    }

    if (user.rules_accepted !== true) {
        missing.push('rules_accepted');
    }

    return missing;
};

