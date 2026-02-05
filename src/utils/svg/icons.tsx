import type { IconProps } from '@interfaces';

export type { IconProps };

export const ArrowLeftIcon = ({ size = 24, color = 'currentColor', ...props }: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.2071 18.7071C14.8166 19.0976 14.1834 19.0976 13.7929 18.7071L7.79289 12.7071C7.40237 12.3166 7.40237 11.6834 7.79289 11.2929L13.7929 5.29289C14.1834 4.90237 14.8166 4.90237 15.2071 5.29289C15.5976 5.68342 15.5976 6.31658 15.2071 6.70711L9.91421 12L15.2071 17.2929C15.5976 17.6834 15.5976 18.3166 15.2071 18.7071Z"
            fill={color}
        />
    </svg>
);

export const ArrowRightIcon = ({ size = 24, color = 'currentColor', ...props }: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.79289 5.29289C9.18342 4.90237 9.81658 4.90237 10.2071 5.29289L16.2071 11.2929C16.5976 11.6834 16.5976 12.3166 16.2071 12.7071L10.2071 18.7071C9.81658 19.0976 9.18342 19.0976 8.79289 18.7071C8.40237 18.3166 8.40237 17.6834 8.79289 17.2929L14.0858 12L8.79289 6.70711C8.40237 6.31658 8.40237 5.68342 8.79289 5.29289Z"
            fill={color}
        />
    </svg>
);

export const MailIcon = ({ size = 24, color = 'currentColor', ...props }: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
);

export const LockIcon = ({ size = 24, color = 'currentColor', ...props }: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
);

export const EyeIcon = ({ size = 24, color = 'currentColor', ...props }: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
        <circle cx="12" cy="12" r="3" />
    </svg>
);

export const EyeOffIcon = ({ size = 24, color = 'currentColor', ...props }: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
        <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
        <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
        <path d="m2 2 20 20" />
    </svg>
);

export const UserIcon = ({ size = 24, color = 'currentColor', ...props }: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <circle cx="12" cy="8" r="5" />
        <path d="M20 21a8 8 0 0 0-16 0" />
    </svg>
);

export const HeartIcon = ({ size = 24, color = 'currentColor', filled = false, ...props }: IconProps & { filled?: boolean }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={filled ? color : 'none'}
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
);

export const MessageIcon = ({ size = 24, color = 'currentColor', ...props }: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
);

export const SearchIcon = ({ size = 24, color = 'currentColor', ...props }: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
    </svg>
);

export const SettingsIcon = ({ size = 24, color = 'currentColor', ...props }: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
    </svg>
);

export const CloseIcon = ({ size = 24, color = 'currentColor', ...props }: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M18 6 6 18M6 6l12 12" />
    </svg>
);

export const CheckIcon = ({ size = 24, color = 'currentColor', ...props }: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M20 6 9 17l-5-5" />
    </svg>
);

export const CameraIcon = ({ size = 24, color = 'currentColor', ...props }: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
        <circle cx="12" cy="13" r="3" />
    </svg>
);

export const LocationIcon = ({ size, ...props }: IconProps) => (
    <svg width={size || '64'} height={size || '64'} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="32" cy="32" r="32" fill="#6C5CE7" />
        <circle cx="32" cy="32" r="32" fill="url(#paint0_radial_2002_2735)" fill-opacity="0.7" />
        <circle cx="32" cy="32" r="32" fill="url(#paint1_radial_2002_2735)" fill-opacity="0.41" />
        <path d="M31.99 17C24.8789 17 19 22.7627 19 29.8925C19 33.4853 20.2877 36.8208 22.4114 39.6479C24.7324 42.7664 27.6178 45.4835 30.8842 47.6163C31.7 48.1463 32.3709 48.1091 33.1142 47.6163C36.3621 45.4835 39.2476 42.7664 41.5886 39.6479C43.7107 36.8208 45 33.4853 45 29.8925C45 22.7627 39.1211 17 31.99 17" fill="white" />
        <path opacity="0.3" d="M31.9836 37C28.1371 37 25 33.9444 25 30.0592C25 26.2044 28.1371 23 31.9836 23C35.8327 23 39 26.2044 39 30.0592C39 33.9444 35.8327 37 31.9836 37" fill="#1877F2" />
        <path d="M31.9907 34C29.7926 34 28 32.2539 28 30.0339C28 27.8311 29.7926 26 31.9907 26C34.1901 26 36 27.8311 36 30.0339C36 32.2539 34.1901 34 31.9907 34" fill="#6C5CE7" />
        <defs>
            <radialGradient id="paint0_radial_2002_2735" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(16.8889 13.3333) rotate(51.0441) scale(53.7245 53.7245)">
                <stop stop-color="white" stop-opacity="0.59" />
                <stop offset="0.697917" stop-color="white" stop-opacity="0" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
            </radialGradient>
            <radialGradient id="paint1_radial_2002_2735" cx="0" cy="0" r="1" gradientTransform="matrix(-3.50685 -54.6667 -58.9352 34.9778 55.2329 56)" gradientUnits="userSpaceOnUse">
                <stop stop-opacity="0.23" />
                <stop offset="0.861815" stop-opacity="0" />
            </radialGradient>
        </defs>
    </svg>
);

export const HeartFilledIcon = ({ size = 24, color = '#FF6B9D', ...props }: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
);

export const TwoHeartsIcon = ({ size = 24, color = '#FF6B9D', ...props }: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3z" opacity="0.6" />
        <path d="M19 8c-1.1 0-2.04.51-2.84 1.32C15.36 8.51 14.42 8 13.32 8 11.49 8 10 9.49 10 11.32c0 2.39 2.15 4.34 5.41 7.29l.91.83.91-.84c3.27-2.94 5.42-4.9 5.42-7.28C22.65 9.49 21.16 8 19.33 8H19z" />
    </svg>
);

export const SunIcon = ({ size = 24, color = 'currentColor', ...props }: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
);

export const MoonIcon = ({ size = 24, color = 'currentColor', ...props }: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
);

export const MonitorIcon = ({ size = 24, color = 'currentColor', ...props }: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
);

export const FacebookIcon = ({ size = 24, ...props }: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="#1877F2"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
);

export const AppleIcon = ({ size = 24, color = 'currentColor', ...props }: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
);

export const GoogleIcon = ({ size = 24, ...props }: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
);

export const WarningIcon = ({ size, ...props }: IconProps) => (
    <svg width={size || '124'} height={size || '116'} viewBox="0 0 124 116" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g filter="url(#filter0_d_7_30468)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M49.0378 15.1722C50.938 11.9611 54.336 10 58 10C61.664 10 65.062 11.9611 66.9622 15.1722L66.9723 15.1892L81.7696 40.5111L96.5669 65.833L96.5953 65.8824C98.4578 69.1886 98.4689 73.2595 96.6245 76.5763C94.7801 79.8931 91.3573 81.9576 87.633 81.9996L87.5946 82L28.367 81.9998C24.6427 81.9578 21.2199 79.8931 19.3755 76.5763C17.5311 73.2595 17.5422 69.1886 19.4047 65.8824L19.4331 65.833L49.0378 15.1722Z" fill="#F1F1F1" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M49.0378 15.1722C50.938 11.9611 54.336 10 58 10C61.664 10 65.062 11.9611 66.9622 15.1722L66.9723 15.1892L81.7696 40.5111L96.5669 65.833L96.5953 65.8824C98.4578 69.1886 98.4689 73.2595 96.6245 76.5763C94.7801 79.8931 91.3573 81.9576 87.633 81.9996L87.5946 82L28.367 81.9998C24.6427 81.9578 21.2199 79.8931 19.3755 76.5763C17.5311 73.2595 17.5422 69.1886 19.4047 65.8824L19.4331 65.833L49.0378 15.1722Z" fill="url(#paint0_radial_7_30468)" fill-opacity="0.7" />
        </g>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M55.1083 19.6671L26.4427 68.8038C25.8521 69.8702 25.8522 71.1781 26.4444 72.2449C27.0378 73.3138 28.1368 73.9809 29.3342 74H86.6658C87.8632 73.9809 88.9622 73.3138 89.5556 72.2449C90.1478 71.1782 90.1479 69.8704 89.5574 68.804L60.8958 19.6741L60.8917 19.6671C60.277 18.6319 59.1813 18 58 18C56.8187 18 55.723 18.6319 55.1083 19.6671Z" fill="#FF2C29" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M55.1083 19.6671L26.4427 68.8038C25.8521 69.8702 25.8522 71.1781 26.4444 72.2449C27.0378 73.3138 28.1368 73.9809 29.3342 74H86.6658C87.8632 73.9809 88.9622 73.3138 89.5556 72.2449C90.1478 71.1782 90.1479 69.8704 89.5574 68.804L60.8958 19.6741L60.8917 19.6671C60.277 18.6319 59.1813 18 58 18C56.8187 18 55.723 18.6319 55.1083 19.6671Z" fill="url(#paint1_radial_7_30468)" fill-opacity="0.7" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M55.1083 19.6671L26.4427 68.8038C25.8521 69.8702 25.8522 71.1781 26.4444 72.2449C27.0378 73.3138 28.1368 73.9809 29.3342 74H86.6658C87.8632 73.9809 88.9622 73.3138 89.5556 72.2449C90.1478 71.1782 90.1479 69.8704 89.5574 68.804L60.8958 19.6741L60.8917 19.6671C60.277 18.6319 59.1813 18 58 18C56.8187 18 55.723 18.6319 55.1083 19.6671Z" fill="url(#paint2_radial_7_30468)" />
        <g filter="url(#filter1_d_7_30468)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M58 30C60.2091 30 62 31.6416 62 33.6667V48.3333C62 50.3584 60.2091 52 58 52C55.7909 52 54 50.3584 54 48.3333V33.6667C54 31.6416 55.7909 30 58 30Z" fill="white" />
        </g>
        <g filter="url(#filter2_d_7_30468)">
            <path d="M62 62C62 64.2091 60.2091 66 58 66C55.7909 66 54 64.2091 54 62C54 59.7909 55.7909 58 58 58C60.2091 58 62 59.7909 62 62Z" fill="white" />
        </g>
        <defs>
            <filter id="filter0_d_7_30468" x="0" y="0" width="124" height="116" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="4" dy="12" />
                <feGaussianBlur stdDeviation="11" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7_30468" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_7_30468" result="shape" />
            </filter>
            <filter id="filter1_d_7_30468" x="53" y="30" width="10" height="24" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="0.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7_30468" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_7_30468" result="shape" />
            </filter>
            <filter id="filter2_d_7_30468" x="53" y="58" width="10" height="10" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="0.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7_30468" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_7_30468" result="shape" />
            </filter>
            <radialGradient id="paint0_radial_7_30468" cx="0" cy="0" r="1" gradientTransform="matrix(34.0984 45.4426 -50.4918 30.6885 43.5738 24.1639)" gradientUnits="userSpaceOnUse">
                <stop stop-color="white" />
                <stop offset="0.697917" stop-color="white" stop-opacity="0" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
            </radialGradient>
            <radialGradient id="paint1_radial_7_30468" cx="0" cy="0" r="1" gradientTransform="matrix(33.7778 36.5556 -41.7778 29.5556 42.8889 29.6667)" gradientUnits="userSpaceOnUse">
                <stop stop-color="white" stop-opacity="0.59" />
                <stop offset="0.697917" stop-color="white" stop-opacity="0" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
            </radialGradient>
            <radialGradient id="paint2_radial_7_30468" cx="0" cy="0" r="1" gradientTransform="matrix(-3.50685 -47.8333 -58.9352 30.6056 81.2329 67)" gradientUnits="userSpaceOnUse">
                <stop stop-opacity="0.23" />
                <stop offset="0.861815" stop-opacity="0" />
            </radialGradient>
        </defs>
    </svg>
);

export const SuccessIcon = ({size, ...props}: IconProps) => (
    <svg width={size || '124'} height={size || '124'} viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g filter="url(#filter0_d_3_22689)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M71.4926 15.8523C67.4526 11.8119 62.5921 9.83585 57.6184 10.0107C52.7293 10.1825 47.9981 12.421 44.0505 16.3116H43.3998C37.6864 16.3116 32.8524 18.3516 29.4591 21.9925C26.1233 25.5717 24.3605 30.5009 24.32 36.0441C20.4315 39.9901 18.1861 44.7158 18.011 49.6046C17.833 54.5788 19.8105 59.4401 23.86 63.49L24.32 63.9501C24.3605 69.4898 26.114 74.4189 29.4466 77.9994C32.8375 81.6426 37.6729 83.6815 43.3998 83.6815H44.0493L44.5039 84.1362C48.5544 88.1871 53.4161 90.1661 58.3906 89.9891C63.2795 89.8151 68.0053 87.5704 71.951 83.6815H72.5948C78.323 83.6815 83.1599 81.6428 86.5522 77.9998C89.8864 74.4192 91.6409 69.4896 91.6812 63.9491C95.57 60.0029 97.8147 55.2764 97.9891 50.3871C98.1664 45.4125 96.1884 40.5507 92.1389 36.5008L91.6812 36.0431C91.6408 30.503 89.8862 25.5738 86.5528 21.9935C83.161 18.3505 78.3249 16.3116 72.5981 16.3116H71.9518L71.4926 15.8523Z" fill="#F1F1F1" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M71.4926 15.8523C67.4526 11.8119 62.5921 9.83585 57.6184 10.0107C52.7293 10.1825 47.9981 12.421 44.0505 16.3116H43.3998C37.6864 16.3116 32.8524 18.3516 29.4591 21.9925C26.1233 25.5717 24.3605 30.5009 24.32 36.0441C20.4315 39.9901 18.1861 44.7158 18.011 49.6046C17.833 54.5788 19.8105 59.4401 23.86 63.49L24.32 63.9501C24.3605 69.4898 26.114 74.4189 29.4466 77.9994C32.8375 81.6426 37.6729 83.6815 43.3998 83.6815H44.0493L44.5039 84.1362C48.5544 88.1871 53.4161 90.1661 58.3906 89.9891C63.2795 89.8151 68.0053 87.5704 71.951 83.6815H72.5948C78.323 83.6815 83.1599 81.6428 86.5522 77.9998C89.8864 74.4192 91.6409 69.4896 91.6812 63.9491C95.57 60.0029 97.8147 55.2764 97.9891 50.3871C98.1664 45.4125 96.1884 40.5507 92.1389 36.5008L91.6812 36.0431C91.6408 30.503 89.8862 25.5738 86.5528 21.9935C83.161 18.3505 78.3249 16.3116 72.5981 16.3116H71.9518L71.4926 15.8523Z" fill="url(#paint0_radial_3_22689)" fill-opacity="0.7" />
        </g>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M48.3704 22.551C51.3314 19.5897 54.6478 18.1181 57.813 18.0069C60.9536 17.8965 64.1945 19.1143 67.0834 22.0036L68.8588 23.7792H71.3668C75.4677 23.7792 78.6201 25.211 80.7588 27.5082C82.9149 29.824 84.2149 33.2095 84.2149 37.4V39.1372L85.9883 40.9108C88.888 43.8109 90.1048 47.0527 89.993 50.1896C89.8802 53.3518 88.4059 56.6651 85.4431 59.6283L84.2149 60.8566V62.5936C84.2149 66.7841 82.9149 70.1695 80.7586 72.4853C78.6195 74.7824 75.4664 76.2144 71.3637 76.2144H68.859L67.6307 77.4428C64.668 80.4059 61.3552 81.8805 58.1931 81.993C55.0564 82.1046 51.8144 80.8873 48.9134 77.9859L47.1421 76.2144H44.6313C40.5304 76.2144 37.379 74.7826 35.241 72.4857C33.0857 70.17 31.7863 66.7844 31.7863 62.5936V60.8566L30.0107 59.0808C27.111 56.1808 25.8948 52.9396 26.0071 49.8035C26.1203 46.6418 27.5951 43.3289 30.5581 40.3655L31.7863 39.1372V37.4C31.7863 33.2121 33.0909 29.8261 35.2504 27.509C37.3931 25.21 40.5458 23.7792 44.6313 23.7792H47.1424L48.3704 22.551Z" fill="#00B606" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M48.3704 22.551C51.3314 19.5897 54.6478 18.1181 57.813 18.0069C60.9536 17.8965 64.1945 19.1143 67.0834 22.0036L68.8588 23.7792H71.3668C75.4677 23.7792 78.6201 25.211 80.7588 27.5082C82.9149 29.824 84.2149 33.2095 84.2149 37.4V39.1372L85.9883 40.9108C88.888 43.8109 90.1048 47.0527 89.993 50.1896C89.8802 53.3518 88.4059 56.6651 85.4431 59.6283L84.2149 60.8566V62.5936C84.2149 66.7841 82.9149 70.1695 80.7586 72.4853C78.6195 74.7824 75.4664 76.2144 71.3637 76.2144H68.859L67.6307 77.4428C64.668 80.4059 61.3552 81.8805 58.1931 81.993C55.0564 82.1046 51.8144 80.8873 48.9134 77.9859L47.1421 76.2144H44.6313C40.5304 76.2144 37.379 74.7826 35.241 72.4857C33.0857 70.17 31.7863 66.7844 31.7863 62.5936V60.8566L30.0107 59.0808C27.111 56.1808 25.8948 52.9396 26.0071 49.8035C26.1203 46.6418 27.5951 43.3289 30.5581 40.3655L31.7863 39.1372V37.4C31.7863 33.2121 33.0909 29.8261 35.2504 27.509C37.3931 25.21 40.5458 23.7792 44.6313 23.7792H47.1424L48.3704 22.551Z" fill="url(#paint1_radial_3_22689)" fill-opacity="0.7" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M48.3704 22.551C51.3314 19.5897 54.6478 18.1181 57.813 18.0069C60.9536 17.8965 64.1945 19.1143 67.0834 22.0036L68.8588 23.7792H71.3668C75.4677 23.7792 78.6201 25.211 80.7588 27.5082C82.9149 29.824 84.2149 33.2095 84.2149 37.4V39.1372L85.9883 40.9108C88.888 43.8109 90.1048 47.0527 89.993 50.1896C89.8802 53.3518 88.4059 56.6651 85.4431 59.6283L84.2149 60.8566V62.5936C84.2149 66.7841 82.9149 70.1695 80.7586 72.4853C78.6195 74.7824 75.4664 76.2144 71.3637 76.2144H68.859L67.6307 77.4428C64.668 80.4059 61.3552 81.8805 58.1931 81.993C55.0564 82.1046 51.8144 80.8873 48.9134 77.9859L47.1421 76.2144H44.6313C40.5304 76.2144 37.379 74.7826 35.241 72.4857C33.0857 70.17 31.7863 66.7844 31.7863 62.5936V60.8566L30.0107 59.0808C27.111 56.1808 25.8948 52.9396 26.0071 49.8035C26.1203 46.6418 27.5951 43.3289 30.5581 40.3655L31.7863 39.1372V37.4C31.7863 33.2121 33.0909 29.8261 35.2504 27.509C37.3931 25.21 40.5458 23.7792 44.6313 23.7792H47.1424L48.3704 22.551Z" fill="url(#paint2_radial_3_22689)" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M73.1845 39.7737C74.2718 40.8054 74.2718 42.478 73.1845 43.5096L55.566 60.2263C54.4788 61.2578 52.7163 61.2579 51.6289 60.2267L42.8159 51.8684C41.7284 50.8369 41.728 49.1643 42.8151 48.1324C43.9021 47.1006 45.665 47.1002 46.7526 48.1316L53.5968 54.6228L69.247 39.7737C70.3343 38.7421 72.0972 38.7421 73.1845 39.7737Z" fill="white" />
        <defs>
            <filter id="filter0_d_3_22689" x="0" y="0" width="124" height="124" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="4" dy="12" />
                <feGaussianBlur stdDeviation="11" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_22689" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_22689" result="shape" />
            </filter>
            <radialGradient id="paint0_radial_3_22689" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(43.5738 25.7377) rotate(55.9679) scale(60.9272 60.9272)">
                <stop stop-color="white" />
                <stop offset="0.697917" stop-color="white" stop-opacity="0" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
            </radialGradient>
            <radialGradient id="paint1_radial_3_22689" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(42.8889 31.3333) rotate(51.0441) scale(53.7245 53.7245)">
                <stop stop-color="white" stop-opacity="0.59" />
                <stop offset="0.697917" stop-color="white" stop-opacity="0" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
            </radialGradient>
            <radialGradient id="paint2_radial_3_22689" cx="0" cy="0" r="1" gradientTransform="matrix(-3.50685 -54.6667 -58.9352 34.9778 81.2329 74)" gradientUnits="userSpaceOnUse">
                <stop stop-opacity="0.23" />
                <stop offset="0.861815" stop-opacity="0" />
            </radialGradient>
        </defs>
    </svg>

)