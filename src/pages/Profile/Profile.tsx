import { Progress } from 'antd';
import { useAppSelector } from '@store/hooks';
import { VerifiedIcon } from '@svg';
import {
    getAllProfileActions,
    DEFAULT_PROFILE_AGE,
    DEFAULT_PROFILE_NAME,
    DEFAULT_PROFILE_PROGRESS,
    DEFAULT_PROFILE_IMAGE_URL,
    VERIFIED_ICON_SIZE,
    PROFILE_VERIFY_TEXT,
    PROFILE_PROGRESS_SUFFIX,
    PROFILE_PROGRESS_STROKE_COLOR_START,
    PROFILE_PROGRESS_STROKE_COLOR_END,
    PROFILE_PROGRESS_TRAIL_COLOR,
    PROFILE_PROGRESS_BADGE_GRADIENT_START,
    PROFILE_PROGRESS_BADGE_GRADIENT_END,
} from '@constants';
import { ProfileAction } from '@/types';
import type { ProfileProps } from '@interfaces';
import './Profile.css';

const Profile = ({ onSettingsClick }: ProfileProps) => {
    const { user } = useAppSelector((state) => state.auth);
    const profileActions = getAllProfileActions();

    const handleActionClick = (action: ProfileAction) => {
        if (action === ProfileAction.SETTINGS && onSettingsClick) {
            onSettingsClick();
        }
        // Handle other actions here
    };

    const profileProgress = DEFAULT_PROFILE_PROGRESS; // This should come from user data
    const isVerified = user?.verified === true || user?.is_verified === true;

    return (
        <div className="profile-page">
            {/* Profile Section */}
            <div className="profile-section">
                <div className="profile-avatar-container">
                    <div className="profile-avatar-wrapper">
                        <div className="profile-avatar-progress-wrapper">
                            <Progress
                                type="circle"
                                percent={profileProgress}
                                size={180}
                                strokeWidth={20}
                                strokeColor={{
                                    '0%': PROFILE_PROGRESS_STROKE_COLOR_START,
                                    '100%': PROFILE_PROGRESS_STROKE_COLOR_END,
                                }}
                                trailColor={PROFILE_PROGRESS_TRAIL_COLOR}
                                format={() => null}
                                className="profile-progress-circle"
                            />
                            <div className="profile-avatar-inner">
                                <img
                                    src={
                                        user?.photos && user.photos.length > 0
                                            ? `${import.meta.env.VITE_API_BASE_URL || ''}${user.photos.find(p => p.is_primary)?.url || user.photos[0]?.url || ''}`
                                            : DEFAULT_PROFILE_IMAGE_URL
                                    }
                                    alt="Profile"
                                    className="profile-avatar-image"
                                />
                            </div>
                        </div>
                        <div
                            className="profile-progress-badge"
                            style={{
                                background: `linear-gradient(to right, ${PROFILE_PROGRESS_BADGE_GRADIENT_START}, ${PROFILE_PROGRESS_BADGE_GRADIENT_END})`
                            }}
                        >
                            {profileProgress}{PROFILE_PROGRESS_SUFFIX}
                        </div>
                    </div>
                </div>

                <div className="profile-info">
                    <div className="profile-name-row">
                        <h2>
                            {user?.first_name || user?.name || user?.email?.split('@')[0] || DEFAULT_PROFILE_NAME}, {user?.age || DEFAULT_PROFILE_AGE}
                        </h2>
                        <div className="profile-verification-section">
                            <VerifiedIcon
                                size={VERIFIED_ICON_SIZE}
                                verified={isVerified}
                            />
                            {!isVerified && (
                                <p className="profile-verify-text">{PROFILE_VERIFY_TEXT}</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Action Buttons Grid */}
            <div className="profile-actions-grid">
                {profileActions.map((actionConfig) => (
                    <div
                        key={actionConfig.action}
                        className="profile-action-item"
                        onClick={() => handleActionClick(actionConfig.action)}
                    >
                        <div className="profile-action-icon">
                            <img
                                src={actionConfig.icon}
                                alt={actionConfig.label}
                            // style={{ filter: `hue-rotate(${actionConfig.filter})` }}
                            />
                        </div>
                        <h5 className="profile-action-label">{actionConfig.label}</h5>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Profile;
