/**
 * Centralized validation messages for form fields
 * Change messages here to update them across the entire app
 */

export const ValidationMessages = {
    // Email
    EMAIL_REQUIRED: 'Please enter your email',
    EMAIL_INVALID: 'Please enter a valid email',

    // Password
    PASSWORD_REQUIRED: 'Please enter your password',
    PASSWORD_MIN_6: 'Password must be at least 6 characters',
    PASSWORD_MIN_8: 'Password must be at least 8 characters',
    PASSWORD_PATTERN: 'Password must contain uppercase, lowercase, and number',
    PASSWORD_CONFIRM_REQUIRED: 'Please confirm your password',

    // Name
    NAME_REQUIRED: 'Please enter your name',
    NAME_MIN_2: 'Name must be at least 2 characters',

    // Password Confirmation
    PASSWORD_MISMATCH: 'Passwords do not match',

    // Photo Upload
    PHOTO_INVALID_TYPE: 'Please select an image file',
    PHOTO_SIZE_LIMIT: 'Image size should be less than 5MB',
    PHOTO_ADDED: 'Photo added successfully',
    PHOTO_REMOVED: 'Photo removed',

    // Account
    ACCOUNT_CREATED: 'Account created successfully!',
} as const;

// Type for the messages
export type ValidationMessageKey = keyof typeof ValidationMessages;

