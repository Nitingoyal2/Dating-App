import { useAppSelector } from '@store/hooks';
import { VerifiedIcon } from '@svg';
import { coinIcon, diamondIcon, fireIcon, pencilIcon, settingIcon, shieldIcon } from '@assets';
import './Profile.css';

interface ProfileProps {
    onSettingsClick?: () => void;
}

const Profile = ({ onSettingsClick }: ProfileProps) => {
    const { user } = useAppSelector((state) => state.auth);

    const profileActions = [
        { icon: settingIcon, label: 'Settings', color: '#FF6B9D', action: 'settings' },
        { icon: pencilIcon, label: 'Edit Profile', color: '#8B4513', action: 'edit' },
        { icon: shieldIcon, label: 'Safety', color: '#4CAF50', action: 'safety' },
        { icon: coinIcon, label: 'Prosto Gold', color: '#FFD700', action: 'gold' },
        { icon: fireIcon, label: 'Prosto Platinum', color: '#FF9500', action: 'platinum' },
        { icon: diamondIcon, label: 'Prosto Diamond', color: '#4A90E2', action: 'diamond' },
    ];

    const handleActionClick = (action: string) => {
        if (action === 'settings' && onSettingsClick) {
            onSettingsClick();
        }
        // Handle other actions here
    };

    const profileProgress = 65; // This should come from user data

    return (
        <div className="profile-page">
            {/* Profile Section */}
            <div className="profile-section">
                <div className="profile-avatar-container">
                    <div className="profile-avatar-wrapper">
                        <div
                            className="profile-avatar-border"
                            style={{
                                background: `conic-gradient(from 0deg, #FF6B9D 0%, #FF6B9D ${profileProgress * 3.6}deg, #e0e0e0 ${profileProgress * 3.6}deg, #e0e0e0 360deg)`
                            }}
                        >
                            <div className="profile-avatar-inner">
                                <img
                                    src={
                                        user?.photos && user.photos.length > 0
                                            ? `${import.meta.env.VITE_API_BASE_URL || ''}${user.photos.find(p => p.is_primary)?.url || user.photos[0]?.url || ''}`
                                            : "https://picsum.photos/160/160?random=profile"
                                    }
                                    alt="Profile"
                                    className="profile-avatar-image"
                                />
                            </div>
                        </div>
                        <div className="profile-progress-badge">
                            {profileProgress}% COMPLETE
                        </div>
                    </div>
                </div>

                <div className="profile-info">
                    <div className="profile-name-row">
                        <h2>{user?.first_name || user?.name || user?.email?.split('@')[0] || 'User'}, {user?.age || 28}</h2>
                        <VerifiedIcon size={36} color="#9E9E9E" />
                    </div>
                    <p className="profile-verify-text">Get Verified</p>
                </div>
            </div>

            {/* Action Buttons Grid */}
            <div className="profile-actions-grid">
                {profileActions?.map((action, index) => (
                    <div
                        key={index}
                        className="profile-action-item"
                        onClick={() => handleActionClick(action.action)}
                    >
                        <div
                            className="profile-action-icon"
                            style={{ backgroundColor: `${action.color}15` }}
                        >
                            <img
                                src={action.icon}
                                alt={action.label}
                                style={{ filter: `hue-rotate(${action.color === '#FF6B9D' ? '0deg' : action.color === '#8B4513' ? '180deg' : action.color === '#4CAF50' ? '120deg' : action.color === '#FFD700' ? '45deg' : action.color === '#FF9500' ? '30deg' : '210deg'})` }}
                            />
                        </div>
                        <h5 className="profile-action-label">{action.label}</h5>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Profile;
