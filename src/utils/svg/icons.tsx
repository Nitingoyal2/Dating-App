import type { IconProps, VerifiedIconProps } from '@interfaces';

export type { IconProps, VerifiedIconProps };

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
        <circle cx="32" cy="32" r="32" fill="url(#paint0_radial_2002_2735)" fillOpacity="0.7" />
        <circle cx="32" cy="32" r="32" fill="url(#paint1_radial_2002_2735)" fillOpacity="0.41" />
        <path d="M31.99 17C24.8789 17 19 22.7627 19 29.8925C19 33.4853 20.2877 36.8208 22.4114 39.6479C24.7324 42.7664 27.6178 45.4835 30.8842 47.6163C31.7 48.1463 32.3709 48.1091 33.1142 47.6163C36.3621 45.4835 39.2476 42.7664 41.5886 39.6479C43.7107 36.8208 45 33.4853 45 29.8925C45 22.7627 39.1211 17 31.99 17" fill="white" />
        <path opacity="0.3" d="M31.9836 37C28.1371 37 25 33.9444 25 30.0592C25 26.2044 28.1371 23 31.9836 23C35.8327 23 39 26.2044 39 30.0592C39 33.9444 35.8327 37 31.9836 37" fill="#1877F2" />
        <path d="M31.9907 34C29.7926 34 28 32.2539 28 30.0339C28 27.8311 29.7926 26 31.9907 26C34.1901 26 36 27.8311 36 30.0339C36 32.2539 34.1901 34 31.9907 34" fill="#6C5CE7" />
        <defs>
            <radialGradient id="paint0_radial_2002_2735" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(16.8889 13.3333) rotate(51.0441) scale(53.7245 53.7245)">
                <stop stopColor="white" stopOpacity="0.59" />
                <stop offset="0.697917" stopColor="white" stopOpacity="0" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="paint1_radial_2002_2735" cx="0" cy="0" r="1" gradientTransform="matrix(-3.50685 -54.6667 -58.9352 34.9778 55.2329 56)" gradientUnits="userSpaceOnUse">
                <stop stopOpacity="0.23" />
                <stop offset="0.861815" stopOpacity="0" />
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
            <path fillRule="evenodd" clipRule="evenodd" d="M49.0378 15.1722C50.938 11.9611 54.336 10 58 10C61.664 10 65.062 11.9611 66.9622 15.1722L66.9723 15.1892L81.7696 40.5111L96.5669 65.833L96.5953 65.8824C98.4578 69.1886 98.4689 73.2595 96.6245 76.5763C94.7801 79.8931 91.3573 81.9576 87.633 81.9996L87.5946 82L28.367 81.9998C24.6427 81.9578 21.2199 79.8931 19.3755 76.5763C17.5311 73.2595 17.5422 69.1886 19.4047 65.8824L19.4331 65.833L49.0378 15.1722Z" fill="#F1F1F1" />
            <path fillRule="evenodd" clipRule="evenodd" d="M49.0378 15.1722C50.938 11.9611 54.336 10 58 10C61.664 10 65.062 11.9611 66.9622 15.1722L66.9723 15.1892L81.7696 40.5111L96.5669 65.833L96.5953 65.8824C98.4578 69.1886 98.4689 73.2595 96.6245 76.5763C94.7801 79.8931 91.3573 81.9576 87.633 81.9996L87.5946 82L28.367 81.9998C24.6427 81.9578 21.2199 79.8931 19.3755 76.5763C17.5311 73.2595 17.5422 69.1886 19.4047 65.8824L19.4331 65.833L49.0378 15.1722Z" fill="url(#paint0_radial_7_30468)" fillOpacity="0.7" />
        </g>
        <path fillRule="evenodd" clipRule="evenodd" d="M55.1083 19.6671L26.4427 68.8038C25.8521 69.8702 25.8522 71.1781 26.4444 72.2449C27.0378 73.3138 28.1368 73.9809 29.3342 74H86.6658C87.8632 73.9809 88.9622 73.3138 89.5556 72.2449C90.1478 71.1782 90.1479 69.8704 89.5574 68.804L60.8958 19.6741L60.8917 19.6671C60.277 18.6319 59.1813 18 58 18C56.8187 18 55.723 18.6319 55.1083 19.6671Z" fill="#FF2C29" />
        <path fillRule="evenodd" clipRule="evenodd" d="M55.1083 19.6671L26.4427 68.8038C25.8521 69.8702 25.8522 71.1781 26.4444 72.2449C27.0378 73.3138 28.1368 73.9809 29.3342 74H86.6658C87.8632 73.9809 88.9622 73.3138 89.5556 72.2449C90.1478 71.1782 90.1479 69.8704 89.5574 68.804L60.8958 19.6741L60.8917 19.6671C60.277 18.6319 59.1813 18 58 18C56.8187 18 55.723 18.6319 55.1083 19.6671Z" fill="url(#paint1_radial_7_30468)" fillOpacity="0.7" />
        <path fillRule="evenodd" clipRule="evenodd" d="M55.1083 19.6671L26.4427 68.8038C25.8521 69.8702 25.8522 71.1781 26.4444 72.2449C27.0378 73.3138 28.1368 73.9809 29.3342 74H86.6658C87.8632 73.9809 88.9622 73.3138 89.5556 72.2449C90.1478 71.1782 90.1479 69.8704 89.5574 68.804L60.8958 19.6741L60.8917 19.6671C60.277 18.6319 59.1813 18 58 18C56.8187 18 55.723 18.6319 55.1083 19.6671Z" fill="url(#paint2_radial_7_30468)" />
        <g filter="url(#filter1_d_7_30468)">
            <path fillRule="evenodd" clipRule="evenodd" d="M58 30C60.2091 30 62 31.6416 62 33.6667V48.3333C62 50.3584 60.2091 52 58 52C55.7909 52 54 50.3584 54 48.3333V33.6667C54 31.6416 55.7909 30 58 30Z" fill="white" />
        </g>
        <g filter="url(#filter2_d_7_30468)">
            <path d="M62 62C62 64.2091 60.2091 66 58 66C55.7909 66 54 64.2091 54 62C54 59.7909 55.7909 58 58 58C60.2091 58 62 59.7909 62 62Z" fill="white" />
        </g>
        <defs>
            <filter id="filter0_d_7_30468" x="0" y="0" width="124" height="116" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="4" dy="12" />
                <feGaussianBlur stdDeviation="11" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7_30468" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_7_30468" result="shape" />
            </filter>
            <filter id="filter1_d_7_30468" x="53" y="30" width="10" height="24" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="0.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7_30468" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_7_30468" result="shape" />
            </filter>
            <filter id="filter2_d_7_30468" x="53" y="58" width="10" height="10" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="0.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7_30468" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_7_30468" result="shape" />
            </filter>
            <radialGradient id="paint0_radial_7_30468" cx="0" cy="0" r="1" gradientTransform="matrix(34.0984 45.4426 -50.4918 30.6885 43.5738 24.1639)" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" />
                <stop offset="0.697917" stopColor="white" stopOpacity="0" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="paint1_radial_7_30468" cx="0" cy="0" r="1" gradientTransform="matrix(33.7778 36.5556 -41.7778 29.5556 42.8889 29.6667)" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" stopOpacity="0.59" />
                <stop offset="0.697917" stopColor="white" stopOpacity="0" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="paint2_radial_7_30468" cx="0" cy="0" r="1" gradientTransform="matrix(-3.50685 -47.8333 -58.9352 30.6056 81.2329 67)" gradientUnits="userSpaceOnUse">
                <stop stopOpacity="0.23" />
                <stop offset="0.861815" stopOpacity="0" />
            </radialGradient>
        </defs>
    </svg>
);

export const SuccessIcon = ({ size, ...props }: IconProps) => (
    <svg width={size || '124'} height={size || '124'} viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g filter="url(#filter0_d_3_22689)">
            <path fillRule="evenodd" clipRule="evenodd" d="M71.4926 15.8523C67.4526 11.8119 62.5921 9.83585 57.6184 10.0107C52.7293 10.1825 47.9981 12.421 44.0505 16.3116H43.3998C37.6864 16.3116 32.8524 18.3516 29.4591 21.9925C26.1233 25.5717 24.3605 30.5009 24.32 36.0441C20.4315 39.9901 18.1861 44.7158 18.011 49.6046C17.833 54.5788 19.8105 59.4401 23.86 63.49L24.32 63.9501C24.3605 69.4898 26.114 74.4189 29.4466 77.9994C32.8375 81.6426 37.6729 83.6815 43.3998 83.6815H44.0493L44.5039 84.1362C48.5544 88.1871 53.4161 90.1661 58.3906 89.9891C63.2795 89.8151 68.0053 87.5704 71.951 83.6815H72.5948C78.323 83.6815 83.1599 81.6428 86.5522 77.9998C89.8864 74.4192 91.6409 69.4896 91.6812 63.9491C95.57 60.0029 97.8147 55.2764 97.9891 50.3871C98.1664 45.4125 96.1884 40.5507 92.1389 36.5008L91.6812 36.0431C91.6408 30.503 89.8862 25.5738 86.5528 21.9935C83.161 18.3505 78.3249 16.3116 72.5981 16.3116H71.9518L71.4926 15.8523Z" fill="#F1F1F1" />
            <path fillRule="evenodd" clipRule="evenodd" d="M71.4926 15.8523C67.4526 11.8119 62.5921 9.83585 57.6184 10.0107C52.7293 10.1825 47.9981 12.421 44.0505 16.3116H43.3998C37.6864 16.3116 32.8524 18.3516 29.4591 21.9925C26.1233 25.5717 24.3605 30.5009 24.32 36.0441C20.4315 39.9901 18.1861 44.7158 18.011 49.6046C17.833 54.5788 19.8105 59.4401 23.86 63.49L24.32 63.9501C24.3605 69.4898 26.114 74.4189 29.4466 77.9994C32.8375 81.6426 37.6729 83.6815 43.3998 83.6815H44.0493L44.5039 84.1362C48.5544 88.1871 53.4161 90.1661 58.3906 89.9891C63.2795 89.8151 68.0053 87.5704 71.951 83.6815H72.5948C78.323 83.6815 83.1599 81.6428 86.5522 77.9998C89.8864 74.4192 91.6409 69.4896 91.6812 63.9491C95.57 60.0029 97.8147 55.2764 97.9891 50.3871C98.1664 45.4125 96.1884 40.5507 92.1389 36.5008L91.6812 36.0431C91.6408 30.503 89.8862 25.5738 86.5528 21.9935C83.161 18.3505 78.3249 16.3116 72.5981 16.3116H71.9518L71.4926 15.8523Z" fill="url(#paint0_radial_3_22689)" fillOpacity="0.7" />
        </g>
        <path fillRule="evenodd" clipRule="evenodd" d="M48.3704 22.551C51.3314 19.5897 54.6478 18.1181 57.813 18.0069C60.9536 17.8965 64.1945 19.1143 67.0834 22.0036L68.8588 23.7792H71.3668C75.4677 23.7792 78.6201 25.211 80.7588 27.5082C82.9149 29.824 84.2149 33.2095 84.2149 37.4V39.1372L85.9883 40.9108C88.888 43.8109 90.1048 47.0527 89.993 50.1896C89.8802 53.3518 88.4059 56.6651 85.4431 59.6283L84.2149 60.8566V62.5936C84.2149 66.7841 82.9149 70.1695 80.7586 72.4853C78.6195 74.7824 75.4664 76.2144 71.3637 76.2144H68.859L67.6307 77.4428C64.668 80.4059 61.3552 81.8805 58.1931 81.993C55.0564 82.1046 51.8144 80.8873 48.9134 77.9859L47.1421 76.2144H44.6313C40.5304 76.2144 37.379 74.7826 35.241 72.4857C33.0857 70.17 31.7863 66.7844 31.7863 62.5936V60.8566L30.0107 59.0808C27.111 56.1808 25.8948 52.9396 26.0071 49.8035C26.1203 46.6418 27.5951 43.3289 30.5581 40.3655L31.7863 39.1372V37.4C31.7863 33.2121 33.0909 29.8261 35.2504 27.509C37.3931 25.21 40.5458 23.7792 44.6313 23.7792H47.1424L48.3704 22.551Z" fill="#00B606" />
        <path fillRule="evenodd" clipRule="evenodd" d="M48.3704 22.551C51.3314 19.5897 54.6478 18.1181 57.813 18.0069C60.9536 17.8965 64.1945 19.1143 67.0834 22.0036L68.8588 23.7792H71.3668C75.4677 23.7792 78.6201 25.211 80.7588 27.5082C82.9149 29.824 84.2149 33.2095 84.2149 37.4V39.1372L85.9883 40.9108C88.888 43.8109 90.1048 47.0527 89.993 50.1896C89.8802 53.3518 88.4059 56.6651 85.4431 59.6283L84.2149 60.8566V62.5936C84.2149 66.7841 82.9149 70.1695 80.7586 72.4853C78.6195 74.7824 75.4664 76.2144 71.3637 76.2144H68.859L67.6307 77.4428C64.668 80.4059 61.3552 81.8805 58.1931 81.993C55.0564 82.1046 51.8144 80.8873 48.9134 77.9859L47.1421 76.2144H44.6313C40.5304 76.2144 37.379 74.7826 35.241 72.4857C33.0857 70.17 31.7863 66.7844 31.7863 62.5936V60.8566L30.0107 59.0808C27.111 56.1808 25.8948 52.9396 26.0071 49.8035C26.1203 46.6418 27.5951 43.3289 30.5581 40.3655L31.7863 39.1372V37.4C31.7863 33.2121 33.0909 29.8261 35.2504 27.509C37.3931 25.21 40.5458 23.7792 44.6313 23.7792H47.1424L48.3704 22.551Z" fill="url(#paint1_radial_3_22689)" fillOpacity="0.7" />
        <path fillRule="evenodd" clipRule="evenodd" d="M48.3704 22.551C51.3314 19.5897 54.6478 18.1181 57.813 18.0069C60.9536 17.8965 64.1945 19.1143 67.0834 22.0036L68.8588 23.7792H71.3668C75.4677 23.7792 78.6201 25.211 80.7588 27.5082C82.9149 29.824 84.2149 33.2095 84.2149 37.4V39.1372L85.9883 40.9108C88.888 43.8109 90.1048 47.0527 89.993 50.1896C89.8802 53.3518 88.4059 56.6651 85.4431 59.6283L84.2149 60.8566V62.5936C84.2149 66.7841 82.9149 70.1695 80.7586 72.4853C78.6195 74.7824 75.4664 76.2144 71.3637 76.2144H68.859L67.6307 77.4428C64.668 80.4059 61.3552 81.8805 58.1931 81.993C55.0564 82.1046 51.8144 80.8873 48.9134 77.9859L47.1421 76.2144H44.6313C40.5304 76.2144 37.379 74.7826 35.241 72.4857C33.0857 70.17 31.7863 66.7844 31.7863 62.5936V60.8566L30.0107 59.0808C27.111 56.1808 25.8948 52.9396 26.0071 49.8035C26.1203 46.6418 27.5951 43.3289 30.5581 40.3655L31.7863 39.1372V37.4C31.7863 33.2121 33.0909 29.8261 35.2504 27.509C37.3931 25.21 40.5458 23.7792 44.6313 23.7792H47.1424L48.3704 22.551Z" fill="url(#paint2_radial_3_22689)" />
        <path fillRule="evenodd" clipRule="evenodd" d="M73.1845 39.7737C74.2718 40.8054 74.2718 42.478 73.1845 43.5096L55.566 60.2263C54.4788 61.2578 52.7163 61.2579 51.6289 60.2267L42.8159 51.8684C41.7284 50.8369 41.728 49.1643 42.8151 48.1324C43.9021 47.1006 45.665 47.1002 46.7526 48.1316L53.5968 54.6228L69.247 39.7737C70.3343 38.7421 72.0972 38.7421 73.1845 39.7737Z" fill="white" />
        <defs>
            <filter id="filter0_d_3_22689" x="0" y="0" width="124" height="124" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="4" dy="12" />
                <feGaussianBlur stdDeviation="11" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_22689" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_22689" result="shape" />
            </filter>
            <radialGradient id="paint0_radial_3_22689" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(43.5738 25.7377) rotate(55.9679) scale(60.9272 60.9272)">
                <stop stopColor="white" />
                <stop offset="0.697917" stopColor="white" stopOpacity="0" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="paint1_radial_3_22689" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(42.8889 31.3333) rotate(51.0441) scale(53.7245 53.7245)">
                <stop stopColor="white" stopOpacity="0.59" />
                <stop offset="0.697917" stopColor="white" stopOpacity="0" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="paint2_radial_3_22689" cx="0" cy="0" r="1" gradientTransform="matrix(-3.50685 -54.6667 -58.9352 34.9778 81.2329 74)" gradientUnits="userSpaceOnUse">
                <stop stopOpacity="0.23" />
                <stop offset="0.861815" stopOpacity="0" />
            </radialGradient>
        </defs>
    </svg>

)

export const FilterIcon = ({ size = 24, color = 'currentColor', ...props }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path fillRule="evenodd" clipRule="evenodd" d="M7.9998 9.12386C6.82782 9.12386 5.87598 8.17076 5.87598 7.00003C5.87598 5.82805 6.82782 4.8762 7.9998 4.8762C9.17179 4.8762 10.1236 5.82805 10.1236 7.00003C10.1236 8.17076 9.17179 9.12386 7.9998 9.12386ZM8 3C5.79362 3 4 4.79362 4 7C4 9.20513 5.79362 11 8 11C10.2064 11 12 9.20513 12 7C12 4.79362 10.2064 3 8 3Z" fill="#171A20" />
        <path fillRule="evenodd" clipRule="evenodd" d="M15.9998 14.8762C17.1718 14.8762 18.1236 15.8293 18.1236 17C18.1236 18.1708 17.1718 19.1239 15.9998 19.1239C14.8291 19.1239 13.876 18.1708 13.876 17C13.876 15.8293 14.8291 14.8762 15.9998 14.8762ZM16 21C18.2064 21 20 19.2051 20 17C20 14.7949 18.2064 13 16 13C13.7949 13 12 14.7949 12 17C12 19.2051 13.7949 21 16 21Z" fill="#171A20" />
        <path fillRule="evenodd" clipRule="evenodd" d="M21.1175 16C21.6046 16 21.9998 16.448 21.9998 17C21.9998 17.552 21.6046 18 21.1175 18H19V16H21.1175ZM13 16V18L2.88234 18C2.39529 18 2 17.552 2 17C2 16.448 2.39529 16 2.88234 16H13Z" fill="#171A20" />
        <path fillRule="evenodd" clipRule="evenodd" d="M11 6H21.1163C21.6034 6 21.9987 6.448 21.9987 7C21.9987 7.552 21.6034 8 21.1163 8H11V6ZM5 6H2.88234C2.39529 6 2 6.448 2 7C2 7.552 2.39529 8 2.88234 8H5V6Z" fill="#171A20" />
    </svg>
)


export const VerifiedIcon = ({ size = 56, verified = false, ...props }: VerifiedIconProps) => {
    const filterId = verified ? 'filter0_d_3_20317' : 'filter0_d_3_20945';
    const paint0Id = verified ? 'paint0_radial_3_20317' : 'paint0_radial_3_20945';
    const paint1Id = verified ? 'paint1_radial_3_20317' : 'paint1_radial_3_20945';
    const paint2Id = verified ? 'paint2_radial_3_20317' : 'paint2_radial_3_20945';
    const innerColor = verified ? '#1877F2' : '#6D6D6D';

    return (
        <svg width={size} height={size} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g filter={`url(#${filterId})`}>
                <path fillRule="evenodd" clipRule="evenodd" d="M30.0717 8.63352C28.2537 6.81534 26.0664 5.92613 23.8283 6.0048C21.6282 6.08212 19.4992 7.08946 17.7227 8.84021H17.4299C14.8589 8.84021 12.6836 9.75822 11.1566 11.3966C9.65546 13.0073 8.86222 15.2254 8.84401 17.7199C7.09416 19.4955 6.08372 21.6221 6.00497 23.8221C5.92484 26.0605 6.81472 28.248 8.63699 30.0705L8.84401 30.2776C8.86224 32.7704 9.6513 34.9885 11.151 36.5997C12.6769 38.2391 14.8528 39.1567 17.4299 39.1567H17.7222L17.9268 39.3613C19.7495 41.1842 21.9373 42.0748 24.1757 41.9951C26.3758 41.9168 28.5024 40.9067 30.2779 39.1567H30.5676C33.1454 39.1567 35.322 38.2392 36.8485 36.5999C38.3489 34.9886 39.1384 32.7703 39.1566 30.2771C40.9065 28.5013 41.9166 26.3744 41.9951 24.1742C42.0749 21.9356 41.1848 19.7478 39.3625 17.9254L39.1566 17.7194C39.1383 15.2264 38.3488 13.0082 36.8487 11.3971C35.3225 9.75773 33.1462 8.84021 30.5692 8.84021H30.2783L30.0717 8.63352Z" fill="#F1F1F1" />
                <path fillRule="evenodd" clipRule="evenodd" d="M30.0717 8.63352C28.2537 6.81534 26.0664 5.92613 23.8283 6.0048C21.6282 6.08212 19.4992 7.08946 17.7227 8.84021H17.4299C14.8589 8.84021 12.6836 9.75822 11.1566 11.3966C9.65546 13.0073 8.86222 15.2254 8.84401 17.7199C7.09416 19.4955 6.08372 21.6221 6.00497 23.8221C5.92484 26.0605 6.81472 28.248 8.63699 30.0705L8.84401 30.2776C8.86224 32.7704 9.6513 34.9885 11.151 36.5997C12.6769 38.2391 14.8528 39.1567 17.4299 39.1567H17.7222L17.9268 39.3613C19.7495 41.1842 21.9373 42.0748 24.1757 41.9951C26.3758 41.9168 28.5024 40.9067 30.2779 39.1567H30.5676C33.1454 39.1567 35.322 38.2392 36.8485 36.5999C38.3489 34.9886 39.1384 32.7703 39.1566 30.2771C40.9065 28.5013 41.9166 26.3744 41.9951 24.1742C42.0749 21.9356 41.1848 19.7478 39.3625 17.9254L39.1566 17.7194C39.1383 15.2264 38.3488 13.0082 36.8487 11.3971C35.3225 9.75773 33.1462 8.84021 30.5692 8.84021H30.2783L30.0717 8.63352Z" fill={`url(#${paint0Id})`} fillOpacity="0.7" />
            </g>
            <path fillRule="evenodd" clipRule="evenodd" d="M19.6663 11.648C20.9987 10.3154 22.4911 9.65324 23.9155 9.60318C25.3287 9.55351 26.7871 10.1016 28.0871 11.4017L28.8861 12.2007H30.0147C31.8601 12.2007 33.2787 12.845 34.2411 13.8788C35.2113 14.9209 35.7963 16.4444 35.7963 18.3301V19.1119L36.5943 19.91C37.8992 21.215 38.4468 22.6738 38.3964 24.0854C38.3457 25.5084 37.6822 26.9994 36.349 28.3328L35.7963 28.8856V29.6672C35.7963 31.5529 35.2113 33.0764 34.241 34.1185C33.2784 35.1522 31.8595 35.7966 30.0133 35.7966H28.8862L28.3334 36.3494C27.0002 37.6828 25.5094 38.3463 24.0865 38.3969C22.675 38.4472 21.2161 37.8994 19.9106 36.5937L19.1136 35.7966H17.9837C16.1383 35.7966 14.7201 35.1523 13.7581 34.1186C12.7882 33.0766 12.2034 31.5531 12.2034 29.6672V28.8856L11.4044 28.0865C10.0995 26.7814 9.55228 25.3229 9.6028 23.9117C9.65373 22.4889 10.3174 20.9981 11.6507 19.6646L12.2034 19.1118V18.3301C12.2034 16.4455 12.7905 14.9219 13.7623 13.8792C14.7265 12.8446 16.1452 12.2007 17.9837 12.2007H19.1137L19.6663 11.648Z" fill={innerColor} />
            <path fillRule="evenodd" clipRule="evenodd" d="M19.6663 11.648C20.9987 10.3154 22.4911 9.65324 23.9155 9.60318C25.3287 9.55351 26.7871 10.1016 28.0871 11.4017L28.8861 12.2007H30.0147C31.8601 12.2007 33.2787 12.845 34.2411 13.8788C35.2113 14.9209 35.7963 16.4444 35.7963 18.3301V19.1119L36.5943 19.91C37.8992 21.215 38.4468 22.6738 38.3964 24.0854C38.3457 25.5084 37.6822 26.9994 36.349 28.3328L35.7963 28.8856V29.6672C35.7963 31.5529 35.2113 33.0764 34.241 34.1185C33.2784 35.1522 31.8595 35.7966 30.0133 35.7966H28.8862L28.3334 36.3494C27.0002 37.6828 25.5094 38.3463 24.0865 38.3969C22.675 38.4472 21.2161 37.8994 19.9106 36.5937L19.1136 35.7966H17.9837C16.1383 35.7966 14.7201 35.1523 13.7581 34.1186C12.7882 33.0766 12.2034 31.5531 12.2034 29.6672V28.8856L11.4044 28.0865C10.0995 26.7814 9.55228 25.3229 9.6028 23.9117C9.65373 22.4889 10.3174 20.9981 11.6507 19.6646L12.2034 19.1118V18.3301C12.2034 16.4455 12.7905 14.9219 13.7623 13.8792C14.7265 12.8446 16.1452 12.2007 17.9837 12.2007H19.1137L19.6663 11.648Z" fill={`url(#${paint1Id})`} fillOpacity="0.7" />
            <path fillRule="evenodd" clipRule="evenodd" d="M19.6663 11.648C20.9987 10.3154 22.4911 9.65324 23.9155 9.60318C25.3287 9.55351 26.7871 10.1016 28.0871 11.4017L28.8861 12.2007H30.0147C31.8601 12.2007 33.2787 12.845 34.2411 13.8788C35.2113 14.9209 35.7963 16.4444 35.7963 18.3301V19.1119L36.5943 19.91C37.8992 21.215 38.4468 22.6738 38.3964 24.0854C38.3457 25.5084 37.6822 26.9994 36.349 28.3328L35.7963 28.8856V29.6672C35.7963 31.5529 35.2113 33.0764 34.241 34.1185C33.2784 35.1522 31.8595 35.7966 30.0133 35.7966H28.8862L28.3334 36.3494C27.0002 37.6828 25.5094 38.3463 24.0865 38.3969C22.675 38.4472 21.2161 37.8994 19.9106 36.5937L19.1136 35.7966H17.9837C16.1383 35.7966 14.7201 35.1523 13.7581 34.1186C12.7882 33.0766 12.2034 31.5531 12.2034 29.6672V28.8856L11.4044 28.0865C10.0995 26.7814 9.55228 25.3229 9.6028 23.9117C9.65373 22.4889 10.3174 20.9981 11.6507 19.6646L12.2034 19.1118V18.3301C12.2034 16.4455 12.7905 14.9219 13.7623 13.8792C14.7265 12.8446 16.1452 12.2007 17.9837 12.2007H19.1137L19.6663 11.648Z" fill={`url(#${paint2Id})`} />
            <path fillRule="evenodd" clipRule="evenodd" d="M30.8328 19.3982C31.3221 19.8625 31.3221 20.6152 30.8328 21.0794L22.9045 28.6019C22.4153 29.066 21.6221 29.0661 21.1328 28.602L17.167 24.8408C16.6776 24.3767 16.6774 23.624 17.1666 23.1596C17.6558 22.6953 18.4491 22.6951 18.9385 23.1593L22.0184 26.0803L29.061 19.3982C29.5503 18.934 30.3436 18.934 30.8328 19.3982Z" fill="white" />
            <defs>
                <filter id="filter0_d_3_20945" x="0" y="0" width="56" height="56" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="4" dy="4" />
                    <feGaussianBlur stdDeviation="5" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_20945" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_20945" result="shape" />
                </filter>
                <filter id="filter0_d_3_20317" x="0" y="0" width="56" height="56" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="4" dy="4" />
                    <feGaussianBlur stdDeviation="5" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_20317" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_20317" result="shape" />
                </filter>
                <radialGradient id="paint0_radial_3_20945" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(17.5082 13.082) rotate(55.9679) scale(27.4172 27.4172)">
                    <stop stopColor="white" />
                    <stop offset="0.697917" stopColor="white" stopOpacity="0" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="paint0_radial_3_20317" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(17.5082 13.082) rotate(55.9679) scale(27.4172 27.4172)">
                    <stop stopColor="white" />
                    <stop offset="0.697917" stopColor="white" stopOpacity="0" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="paint1_radial_3_20945" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(17.1996 15.6001) rotate(51.0441) scale(24.176 24.176)">
                    <stop stopColor="white" stopOpacity="0.59" />
                    <stop offset="0.697917" stopColor="white" stopOpacity="0" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="paint1_radial_3_20317" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(17.1996 15.6001) rotate(51.0441) scale(24.176 24.176)">
                    <stop stopColor="white" stopOpacity="0.59" />
                    <stop offset="0.697917" stopColor="white" stopOpacity="0" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="paint2_radial_3_20945" cx="0" cy="0" r="1" gradientTransform="matrix(-1.57808 -24.6 -26.5208 15.74 34.4544 34.8001)" gradientUnits="userSpaceOnUse">
                    <stop stopOpacity="0.23" />
                    <stop offset="0.861815" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="paint2_radial_3_20317" cx="0" cy="0" r="1" gradientTransform="matrix(-1.57808 -24.6 -26.5208 15.74 34.4544 34.8001)" gradientUnits="userSpaceOnUse">
                    <stop stopOpacity="0.23" />
                    <stop offset="0.861815" stopOpacity="0" />
                </radialGradient>
            </defs>
        </svg>
    );
};

export const LocationSymbol = ({ size = 16, color = 'currentColor', ...props }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path fillRule="evenodd" clipRule="evenodd" d="M2.33301 6.87842C2.33301 3.81185 4.8956 1.33325 7.99531 1.33325C11.1038 1.33325 13.6663 3.81185 13.6663 6.87842C13.6663 8.42371 13.1043 9.85834 12.1793 11.0743C11.1589 12.4156 9.90111 13.5842 8.48537 14.5015C8.16135 14.7135 7.86892 14.7295 7.51331 14.5015C6.0895 13.5842 4.83173 12.4156 3.82001 11.0743C2.89433 9.85834 2.33301 8.42371 2.33301 6.87842ZM4.66634 7.36146C4.66634 9.21152 6.1602 10.6666 7.99189 10.6666C9.82477 10.6666 11.333 9.21152 11.333 7.36146C11.333 5.52582 9.82477 3.99992 7.99189 3.99992C6.1602 3.99992 4.66634 5.52582 4.66634 7.36146Z" fill="white" />
    </svg>

)

export const CancleIcon = ({ size = 20, color = 'currentColor', ...props }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path fillRule="evenodd" clipRule="evenodd" d="M5.24408 5.24408C5.56951 4.91864 6.09715 4.91864 6.42259 5.24408L10 8.82149L13.5774 5.24408C13.9028 4.91864 14.4305 4.91864 14.7559 5.24408C15.0814 5.56951 15.0814 6.09715 14.7559 6.42259L11.1785 10L14.7559 13.5774C15.0814 13.9028 15.0814 14.4305 14.7559 14.7559C14.4305 15.0814 13.9028 15.0814 13.5774 14.7559L10 11.1785L6.42259 14.7559C6.09715 15.0814 5.56951 15.0814 5.24408 14.7559C4.91864 14.4305 4.91864 13.9028 5.24408 13.5774L8.82149 10L5.24408 6.42259C4.91864 6.09715 4.91864 5.56951 5.24408 5.24408Z" fill="#F27121" stroke="#F27121" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)


export const HeartSymbol = ({ size = 20, color = 'currentColor', ...props }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M6.25033 3.33325C3.71902 3.33325 1.66699 5.38529 1.66699 7.91658C1.66699 12.4999 7.08366 16.6666 10.0003 17.6358C12.917 16.6666 18.3337 12.4999 18.3337 7.91658C18.3337 5.38529 16.2816 3.33325 13.7503 3.33325C12.2002 3.33325 10.8298 4.10279 10.0003 5.28067C9.17087 4.10279 7.80045 3.33325 6.25033 3.33325Z" fill="#E94057" stroke="#E94057" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

export const StartIcon = ({ size = 36, color = 'currentColor', ...props }: IconProps) => (<svg width={size} height={size} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M17.999 3.75L13.4142 13.1082L3 14.6183L10.5442 21.9938L8.7408 32.25L17.999 27.3144L27.2591 32.25L25.4689 21.9938L33 14.6183L22.6435 13.1082L17.999 3.75Z" fill="white" stroke="white" strokeWidth="2" strokeLinejoin="round" />
</svg>
)

export const DashboardIcon = ({ size = 24, color = 'currentColor', ...props }: IconProps) => <svg width={size} height={size} {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="9.49902" y="4.49756" width="13" height="18" rx="2" fill={color} stroke="white" />
    <rect x="0.391602" y="4.48901" width="13" height="18" rx="2" transform="rotate(-15 0.391602 4.48901)" fill={color} stroke="white" />
</svg>

export const MatchesIcon = ({ size = 24, color = 'currentColor', ...props }: IconProps) => <svg width={size} height={size} {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.5 4C4.46244 4 2 6.46245 2 9.5C2 15 8.5 20 12 21.1631C15.5 20 22 15 22 9.5C22 6.46245 19.5375 4 16.5 4C14.6398 4 12.9953 4.92345 12 6.3369C11.0047 4.92345 9.36015 4 7.5 4Z" fill={color} stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
</svg>

export const ChatIcon = ({ size = 24, color = 'currentColor', ...props }: IconProps) => <svg width={size} height={size} {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 12C22 17.5229 17.5229 22 12 22C9.01325 22 2 22 2 22C2 22 2 14.5361 2 12C2 6.47715 6.47715 2 12 2C17.5229 2 22 6.47715 22 12Z" fill={color} stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7 9H16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7 13H16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7 17H12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
</svg>

export const ProfileIcon = ({ size = 24, color = 'currentColor', ...props }: IconProps) => <svg width={size} height={size} {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 10C13.933 10 15.5 8.433 15.5 6.5C15.5 4.56701 13.933 3 12 3C10.067 3 8.5 4.56701 8.5 6.5C8.5 8.433 10.067 10 12 10Z" fill={color} stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 20.4V21H21V20.4C21 18.1598 21 17.0397 20.5641 16.184C20.1806 15.4314 19.5686 14.8195 18.816 14.436C17.9603 14 16.8402 14 14.6 14H9.4C7.1598 14 6.0397 14 5.18405 14.436C4.43139 14.8195 3.81947 15.4314 3.43598 16.184C3 17.0397 3 18.1598 3 20.4Z" fill={color} stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
</svg>


export const ExploreIcon = ({ size = 24, color = 'currentColor', ...props }: IconProps) => <svg width={size} height={size} {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12.5998" cy="11" r="7.8" fill="white" />
    <path d="M11.4831 2.01338C8.1349 2.18463 5.14102 3.99676 3.38928 6.9121C1.72115 9.68405 1.542 13.2764 2.92348 16.2117C3.39327 17.2074 3.90684 17.9681 4.64735 18.7726C6.17614 20.4294 8.14286 21.5007 10.3087 21.8631C12.5342 22.2335 14.9189 21.8432 16.7702 20.7998C18.705 19.7125 20.1343 18.1951 21.0619 16.2436C22.4713 13.2725 22.2802 9.63626 20.5722 6.84439C20.1025 6.07971 19.7402 5.61374 19.1151 4.98049C17.1126 2.94135 14.3416 1.86602 11.4831 2.01338ZM12.9601 3.89719C13.9555 4.02862 14.5686 4.19589 15.3767 4.55832C16.2009 4.92473 16.8458 5.35486 17.5346 5.99607C18.6055 6.99175 19.354 8.17063 19.7601 9.49687C19.8437 9.76769 19.8477 9.8115 19.7959 9.8115C19.7601 9.8115 19.4774 9.76371 19.1629 9.70397C18.6055 9.60042 18.5936 9.60042 18.4144 9.66812C18.2711 9.72388 18.1875 9.79557 18.0442 9.98276C17.6261 10.5483 17.2638 10.6439 16.5194 10.389C15.8744 10.166 15.325 10.3372 15.325 10.7594C15.325 10.8828 15.4006 10.9744 16.0934 11.6794C16.5154 12.1095 16.8896 12.5237 16.9254 12.5994C17.1006 12.9738 17.0369 13.4397 16.7742 13.7464C16.6069 13.9416 16.4079 14.0531 16.1212 14.1168C15.8226 14.1805 15.7908 14.2482 15.7589 14.9253C15.7231 15.7656 15.6475 15.9369 14.8234 17.06C14.1824 17.9322 14.0948 18.0278 13.832 18.1592C13.1433 18.4938 12.2714 18.1553 12.0405 17.4583C12.0206 17.4025 11.9967 16.8091 11.9847 16.136C11.9609 14.9771 11.9569 14.9094 11.8773 14.8018C11.6901 14.5509 11.6105 14.535 10.6072 14.5071C9.78313 14.4872 9.66767 14.4792 9.46463 14.3956C8.9192 14.1845 8.57284 13.838 8.34989 13.2844C8.2623 13.0693 8.25832 13.0096 8.25832 12.0617C8.25832 10.9267 8.27026 10.8669 8.60469 10.5045C8.8356 10.2536 10.3883 9.07072 10.6192 8.96717C10.7227 8.91938 10.9218 8.87557 11.0651 8.86362C11.3 8.84769 11.4035 8.87158 12.1679 9.11055C12.6337 9.25392 13.0995 9.38137 13.207 9.3973C13.3662 9.41721 13.5613 9.38137 14.254 9.2141C14.7238 9.0986 15.1737 8.97115 15.2533 8.93132C15.8147 8.64855 15.8863 7.85998 15.3887 7.49357C15.1259 7.3024 14.0629 6.78465 13.9355 6.78465C13.848 6.78465 13.7524 6.84041 13.5693 7.0037C13.1473 7.38205 12.8527 7.40197 12.2077 7.09928C11.7419 6.88023 11.4951 6.82448 11.304 6.90413C11.2323 6.93201 11.0253 7.14309 10.8023 7.40993C10.3883 7.90379 10.241 8.00336 9.99413 7.96353C9.82294 7.93565 9.6836 7.83608 9.56416 7.66084C9.47657 7.5334 9.47259 7.50154 9.47259 6.5656C9.47259 5.45443 9.46463 5.40265 9.13817 4.83313C8.95105 4.50654 8.93115 4.4468 8.9829 4.40698C9.16604 4.2636 10.3962 3.94897 11.0492 3.88126C11.5667 3.8255 12.4943 3.83347 12.9601 3.89719Z" fill={color} />
</svg>


export const BigVerifiedIcon = ({ size = 56, color = 'currentColor', ...props }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g filter="url(#filter0_d_3_20317)">
            <path fillRule="evenodd" clipRule="evenodd" d="M30.0717 8.63352C28.2537 6.81534 26.0664 5.92613 23.8283 6.0048C21.6282 6.08212 19.4992 7.08946 17.7227 8.84021H17.4299C14.8589 8.84021 12.6836 9.75822 11.1566 11.3966C9.65546 13.0073 8.86222 15.2254 8.84401 17.7199C7.09416 19.4955 6.08372 21.6221 6.00497 23.8221C5.92484 26.0605 6.81472 28.248 8.63699 30.0705L8.84401 30.2776C8.86224 32.7704 9.6513 34.9885 11.151 36.5997C12.6769 38.2391 14.8528 39.1567 17.4299 39.1567H17.7222L17.9268 39.3613C19.7495 41.1842 21.9373 42.0748 24.1757 41.9951C26.3758 41.9168 28.5024 40.9067 30.2779 39.1567H30.5676C33.1454 39.1567 35.322 38.2392 36.8485 36.5999C38.3489 34.9886 39.1384 32.7703 39.1566 30.2771C40.9065 28.5013 41.9166 26.3744 41.9951 24.1742C42.0749 21.9356 41.1848 19.7478 39.3625 17.9254L39.1566 17.7194C39.1383 15.2264 38.3488 13.0082 36.8487 11.3971C35.3225 9.75773 33.1462 8.84021 30.5692 8.84021H30.2783L30.0717 8.63352Z" fill="#F1F1F1" />
            <path fillRule="evenodd" clipRule="evenodd" d="M30.0717 8.63352C28.2537 6.81534 26.0664 5.92613 23.8283 6.0048C21.6282 6.08212 19.4992 7.08946 17.7227 8.84021H17.4299C14.8589 8.84021 12.6836 9.75822 11.1566 11.3966C9.65546 13.0073 8.86222 15.2254 8.84401 17.7199C7.09416 19.4955 6.08372 21.6221 6.00497 23.8221C5.92484 26.0605 6.81472 28.248 8.63699 30.0705L8.84401 30.2776C8.86224 32.7704 9.6513 34.9885 11.151 36.5997C12.6769 38.2391 14.8528 39.1567 17.4299 39.1567H17.7222L17.9268 39.3613C19.7495 41.1842 21.9373 42.0748 24.1757 41.9951C26.3758 41.9168 28.5024 40.9067 30.2779 39.1567H30.5676C33.1454 39.1567 35.322 38.2392 36.8485 36.5999C38.3489 34.9886 39.1384 32.7703 39.1566 30.2771C40.9065 28.5013 41.9166 26.3744 41.9951 24.1742C42.0749 21.9356 41.1848 19.7478 39.3625 17.9254L39.1566 17.7194C39.1383 15.2264 38.3488 13.0082 36.8487 11.3971C35.3225 9.75773 33.1462 8.84021 30.5692 8.84021H30.2783L30.0717 8.63352Z" fill="url(#paint0_radial_3_20317)" fillOpacity="0.7" />
        </g>
        <path fillRule="evenodd" clipRule="evenodd" d="M19.6663 11.648C20.9987 10.3154 22.4911 9.65324 23.9155 9.60318C25.3287 9.55351 26.7871 10.1016 28.0871 11.4017L28.8861 12.2007H30.0147C31.8601 12.2007 33.2787 12.845 34.2411 13.8788C35.2113 14.9209 35.7963 16.4444 35.7963 18.3301V19.1119L36.5943 19.91C37.8992 21.215 38.4468 22.6738 38.3964 24.0854C38.3457 25.5084 37.6822 26.9994 36.349 28.3328L35.7963 28.8856V29.6672C35.7963 31.5529 35.2113 33.0764 34.241 34.1185C33.2784 35.1522 31.8595 35.7966 30.0133 35.7966H28.8862L28.3334 36.3494C27.0002 37.6828 25.5094 38.3463 24.0865 38.3969C22.675 38.4472 21.2161 37.8994 19.9106 36.5937L19.1136 35.7966H17.9837C16.1383 35.7966 14.7201 35.1523 13.7581 34.1186C12.7882 33.0766 12.2034 31.5531 12.2034 29.6672V28.8856L11.4044 28.0865C10.0995 26.7814 9.55228 25.3229 9.6028 23.9117C9.65373 22.4889 10.3174 20.9981 11.6507 19.6646L12.2034 19.1118V18.3301C12.2034 16.4455 12.7905 14.9219 13.7623 13.8792C14.7265 12.8446 16.1452 12.2007 17.9837 12.2007H19.1137L19.6663 11.648Z" fill="#6D6D6D" />
        <path fillRule="evenodd" clipRule="evenodd" d="M19.6663 11.648C20.9987 10.3154 22.4911 9.65324 23.9155 9.60318C25.3287 9.55351 26.7871 10.1016 28.0871 11.4017L28.8861 12.2007H30.0147C31.8601 12.2007 33.2787 12.845 34.2411 13.8788C35.2113 14.9209 35.7963 16.4444 35.7963 18.3301V19.1119L36.5943 19.91C37.8992 21.215 38.4468 22.6738 38.3964 24.0854C38.3457 25.5084 37.6822 26.9994 36.349 28.3328L35.7963 28.8856V29.6672C35.7963 31.5529 35.2113 33.0764 34.241 34.1185C33.2784 35.1522 31.8595 35.7966 30.0133 35.7966H28.8862L28.3334 36.3494C27.0002 37.6828 25.5094 38.3463 24.0865 38.3969C22.675 38.4472 21.2161 37.8994 19.9106 36.5937L19.1136 35.7966H17.9837C16.1383 35.7966 14.7201 35.1523 13.7581 34.1186C12.7882 33.0766 12.2034 31.5531 12.2034 29.6672V28.8856L11.4044 28.0865C10.0995 26.7814 9.55228 25.3229 9.6028 23.9117C9.65373 22.4889 10.3174 20.9981 11.6507 19.6646L12.2034 19.1118V18.3301C12.2034 16.4455 12.7905 14.9219 13.7623 13.8792C14.7265 12.8446 16.1452 12.2007 17.9837 12.2007H19.1137L19.6663 11.648Z" fill="url(#paint1_radial_3_20317)" fillOpacity="0.7" />
        <path fillRule="evenodd" clipRule="evenodd" d="M19.6663 11.648C20.9987 10.3154 22.4911 9.65324 23.9155 9.60318C25.3287 9.55351 26.7871 10.1016 28.0871 11.4017L28.8861 12.2007H30.0147C31.8601 12.2007 33.2787 12.845 34.2411 13.8788C35.2113 14.9209 35.7963 16.4444 35.7963 18.3301V19.1119L36.5943 19.91C37.8992 21.215 38.4468 22.6738 38.3964 24.0854C38.3457 25.5084 37.6822 26.9994 36.349 28.3328L35.7963 28.8856V29.6672C35.7963 31.5529 35.2113 33.0764 34.241 34.1185C33.2784 35.1522 31.8595 35.7966 30.0133 35.7966H28.8862L28.3334 36.3494C27.0002 37.6828 25.5094 38.3463 24.0865 38.3969C22.675 38.4472 21.2161 37.8994 19.9106 36.5937L19.1136 35.7966H17.9837C16.1383 35.7966 14.7201 35.1523 13.7581 34.1186C12.7882 33.0766 12.2034 31.5531 12.2034 29.6672V28.8856L11.4044 28.0865C10.0995 26.7814 9.55228 25.3229 9.6028 23.9117C9.65373 22.4889 10.3174 20.9981 11.6507 19.6646L12.2034 19.1118V18.3301C12.2034 16.4455 12.7905 14.9219 13.7623 13.8792C14.7265 12.8446 16.1452 12.2007 17.9837 12.2007H19.1137L19.6663 11.648Z" fill="url(#paint2_radial_3_20317)" />
        <path fillRule="evenodd" clipRule="evenodd" d="M30.8328 19.3982C31.3221 19.8625 31.3221 20.6152 30.8328 21.0794L22.9045 28.6019C22.4153 29.066 21.6221 29.0661 21.1328 28.602L17.167 24.8408C16.6776 24.3767 16.6774 23.624 17.1666 23.1596C17.6558 22.6953 18.4491 22.6951 18.9385 23.1593L22.0184 26.0803L29.061 19.3982C29.5503 18.934 30.3436 18.934 30.8328 19.3982Z" fill="white" />
        <defs>
            <filter id="filter0_d_3_20317" x="0" y="0" width="56" height="56" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="4" dy="4" />
                <feGaussianBlur stdDeviation="5" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_20317" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_20317" result="shape" />
            </filter>
            <radialGradient id="paint0_radial_3_20317" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(17.5082 13.082) rotate(55.9679) scale(27.4172 27.4172)">
                <stop stopColor="white" />
                <stop offset="0.697917" stopColor="white" stopOpacity="0" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="paint1_radial_3_20317" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(17.1996 15.6001) rotate(51.0441) scale(24.176 24.176)">
                <stop stopColor="white" stopOpacity="0.59" />
                <stop offset="0.697917" stopColor="white" stopOpacity="0" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="paint2_radial_3_20317" cx="0" cy="0" r="1" gradientTransform="matrix(-1.57808 -24.6 -26.5208 15.74 34.4544 34.8001)" gradientUnits="userSpaceOnUse">
                <stop stopOpacity="0.23" />
                <stop offset="0.861815" stopOpacity="0" />
            </radialGradient>
        </defs>
    </svg>
)