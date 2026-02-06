import { useState } from 'react';
import { VerifiedIcon, LocationSymbol, StartIcon, HeartIcon, CloseIcon } from '@svg';
import './Discover.css';

const Discover = () => {
    const [currentProfileIndex, setCurrentProfileIndex] = useState(0);

    // Mock profile data - replace with actual API data
    const profiles = [
        {
            id: 1,
            name: 'Gabrielle',
            age: 26,
            distance: 5,
            verified: true,
            image: 'https://picsum.photos/400/600?random=1',
        },
        {
            id: 2,
            name: 'Sarah',
            age: 24,
            distance: 3,
            verified: false,
            image: 'https://picsum.photos/400/600?random=2',
        },
    ];

    const currentProfile = profiles[currentProfileIndex] || profiles[0];

    const handleLike = () => {
        // Handle like action
        console.log('Like');
        if (currentProfileIndex < profiles.length - 1) {
            setCurrentProfileIndex(currentProfileIndex + 1);
        }
    };

    const handleSuperLike = () => {
        // Handle super like action
        console.log('Super Like');
        if (currentProfileIndex < profiles.length - 1) {
            setCurrentProfileIndex(currentProfileIndex + 1);
        }
    };

    const handleDislike = () => {
        // Handle dislike action
        console.log('Dislike');
        if (currentProfileIndex < profiles.length - 1) {
            setCurrentProfileIndex(currentProfileIndex + 1);
        }
    };

    return (
        <div className="discover-screen">
            {/* Profile Card */}
            <div className="discover-content">
                <div className="profile-card">
                    <div className="profile-card-image">
                        <img src={currentProfile.image} alt={currentProfile.name} />
                        <div className="profile-card-overlay">
                            <div className="profile-card-info">
                                <div className="profile-card-name">
                                    <h2>{currentProfile.name}, {currentProfile.age}</h2>
                                    {currentProfile.verified && (
                                        <VerifiedIcon size={20} color="#4A90E2" />
                                    )}
                                </div>
                                <div className="profile-card-distance">
                                    <LocationSymbol size={16} color="#fff" />
                                    <span>{currentProfile.distance} miles away</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="discover-actions">
                    <button className="action-btn dislike-btn" onClick={handleDislike}>
                        <CloseIcon size={24} color="#FF9500" />
                    </button>
                    <button className="action-btn superlike-btn" onClick={handleSuperLike}>
                        <StartIcon size={36} color="#fff" />
                    </button>
                    <button className="action-btn like-btn" onClick={handleLike}>
                        <HeartIcon size={24} color="#FF6B9D" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Discover;

