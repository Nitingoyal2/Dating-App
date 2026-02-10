import type { ComponentType } from "react";
import type { IconProps } from "@interfaces";
import { EditProfileItem } from "@/types";

export type EditProfileIconComponent = ComponentType<IconProps>;

// Simple, lightweight SVG icons for Edit Profile items.
// They use `currentColor` by default so you can style via CSS.

export const BirthdayIcon = ({
    size = 18,
    color = "currentColor",
    ...props
}: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M12 3c1.2 1.2 1.2 2.6 0 3.8C10.8 5.6 10.8 4.2 12 3Z"
            fill={color}
        />
        <path
            d="M6 10h12v9a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-9Z"
            stroke={color}
            strokeWidth="2"
            strokeLinejoin="round"
        />
        <path d="M5 10h14" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <path d="M9 13v2" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <path d="M12 13v2" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <path d="M15 13v2" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
);

export const GenderIcon = ({
    size = 18,
    color = "currentColor",
    ...props
}: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <circle cx="12" cy="10" r="5" stroke={color} strokeWidth="2" />
        <path d="M12 15v6" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <path d="M9 18h6" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
);

export const AboutMeIcon = ({
    size = 18,
    color = "currentColor",
    ...props
}: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
            stroke={color}
            strokeWidth="2"
            strokeLinejoin="round"
        />
        <path d="M8 8h8" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <path d="M8 12h8" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <path d="M8 16h6" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
);

export const CurrentWorkIcon = ({
    size = 18,
    color = "currentColor",
    ...props
}: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M9 7V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
        />
        <path
            d="M4 9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9Z"
            stroke={color}
            strokeWidth="2"
            strokeLinejoin="round"
        />
        <path d="M4 13h16" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
);

export const SchoolIcon = ({
    size = 18,
    color = "currentColor",
    ...props
}: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M12 3 3 8l9 5 9-5-9-5Z"
            stroke={color}
            strokeWidth="2"
            strokeLinejoin="round"
        />
        <path
            d="M5 10v6c0 2 3 4 7 4s7-2 7-4v-6"
            stroke={color}
            strokeWidth="2"
            strokeLinejoin="round"
        />
    </svg>
);

export const LookingForIcon = ({
    size = 18,
    color = "currentColor",
    ...props
}: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <circle cx="11" cy="11" r="7" stroke={color} strokeWidth="2" />
        <path d="m20 20-3.5-3.5" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
);

export const PetsIcon = ({
    size = 18,
    color = "currentColor",
    ...props
}: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <circle cx="8" cy="9" r="1.5" fill={color} />
        <circle cx="16" cy="9" r="1.5" fill={color} />
        <circle cx="6.5" cy="13" r="1.5" fill={color} />
        <circle cx="17.5" cy="13" r="1.5" fill={color} />
        <path
            d="M8.5 18c.8-1.8 2.1-3 3.5-3s2.7 1.2 3.5 3c.4 1-0.3 2-1.4 2h-4.2c-1.1 0-1.8-1-1.4-2Z"
            fill={color}
        />
    </svg>
);

export const ChildrenIcon = ({
    size = 18,
    color = "currentColor",
    ...props
}: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <circle cx="12" cy="8" r="4" stroke={color} strokeWidth="2" />
        <path
            d="M4 21a8 8 0 0 1 16 0"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
        />
    </svg>
);

export const AstrologicalSignIcon = ({
    size = 18,
    color = "currentColor",
    ...props
}: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M12 2l2.2 6.6H21l-5.4 3.9 2.1 6.5L12 15.9 6.3 19l2.1-6.5L3 8.6h6.8L12 2Z"
            stroke={color}
            strokeWidth="2"
            strokeLinejoin="round"
        />
    </svg>
);

export const ReligionIcon = ({
    size = 18,
    color = "currentColor",
    ...props
}: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M15 4a7 7 0 1 0 0 16 6 6 0 1 1 0-16Z"
            stroke={color}
            strokeWidth="2"
            strokeLinejoin="round"
        />
    </svg>
);

export const EducationIcon = ({
    size = 18,
    color = "currentColor",
    ...props
}: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M12 3 3 8l9 5 9-5-9-5Z"
            stroke={color}
            strokeWidth="2"
            strokeLinejoin="round"
        />
        <path d="M21 8v6" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <path
            d="M5 10v5c0 2 3 4 7 4s7-2 7-4v-5"
            stroke={color}
            strokeWidth="2"
            strokeLinejoin="round"
        />
    </svg>
);

export const HeightIcon = ({
    size = 18,
    color = "currentColor",
    ...props
}: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path d="M7 3v18" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <path d="M10 7h4" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <path d="M10 11h6" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <path d="M10 15h4" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <path d="M10 19h6" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
);

export const BodyTypeIcon = ({
    size = 18,
    color = "currentColor",
    ...props
}: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <circle cx="9" cy="8" r="3" stroke={color} strokeWidth="2" />
        <circle cx="17" cy="9" r="2.5" stroke={color} strokeWidth="2" />
        <path
            d="M3 21a6 6 0 0 1 12 0"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
        />
        <path
            d="M14.5 21a5 5 0 0 1 7.5 0"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
        />
    </svg>
);

export const ExerciseIcon = ({
    size = 18,
    color = "currentColor",
    ...props
}: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <circle cx="15" cy="5" r="2" fill={color} />
        <path d="M7 21l4-7 3 2 3-5" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <path d="M10 10l3-2" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
);

export const DrinkIcon = ({
    size = 18,
    color = "currentColor",
    ...props
}: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M7 4h10l-1.5 16H8.5L7 4Z"
            stroke={color}
            strokeWidth="2"
            strokeLinejoin="round"
        />
        <path d="M9 10h6" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <path d="M10 2h4" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
);

export const SmokerIcon = ({
    size = 18,
    color = "currentColor",
    ...props
}: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path d="M3 17h13" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <path d="M16 17v-3" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <path d="M6 14v3" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <path
            d="M19 14c1-1 1-2 0-3s-1-2 0-3"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
        />
        <path d="M18 17h3" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
);

export const MarijuanaIcon = ({
    size = 18,
    color = "currentColor",
    ...props
}: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M12 21c0-6 5-9 8-10-2 4-4 6-8 7"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M12 21c0-6-5-9-8-10 2 4 4 6 8 7"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path d="M12 21V7" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
);

export const EditProfileItemIcons: Record<EditProfileItem, EditProfileIconComponent> =
    {
        // BASIC
        [EditProfileItem.BIRTHDAY]: BirthdayIcon,
        [EditProfileItem.GENDER]: GenderIcon,
        [EditProfileItem.ABOUT_ME]: AboutMeIcon,
        [EditProfileItem.CURRENT_WORK]: CurrentWorkIcon,
        [EditProfileItem.SCHOOL]: SchoolIcon,
        // PERSONAL
        [EditProfileItem.LOOKING_FOR]: LookingForIcon,
        [EditProfileItem.PETS]: PetsIcon,
        [EditProfileItem.CHILDREN]: ChildrenIcon,
        [EditProfileItem.ASTROLOGICAL_SIGN]: AstrologicalSignIcon,
        [EditProfileItem.RELIGION]: ReligionIcon,
        [EditProfileItem.EDUCATION]: EducationIcon,
        // APPEARANCE
        [EditProfileItem.HEIGHT]: HeightIcon,
        [EditProfileItem.BODY_TYPE]: BodyTypeIcon,
        // HABITS
        [EditProfileItem.EXERCISE]: ExerciseIcon,
        [EditProfileItem.DRINK]: DrinkIcon,
        [EditProfileItem.SMOKER]: SmokerIcon,
        [EditProfileItem.MARIJUANA]: MarijuanaIcon,
    } as const;


