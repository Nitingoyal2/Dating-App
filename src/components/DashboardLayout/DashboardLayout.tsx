import { useState } from 'react';
import { DashboardIcon, MatchesIcon, ChatIcon, ProfileIcon, ExploreIcon } from '@svg';
import { Discover } from '@/pages/Discover';
import { Profile } from '@/pages/Profile';
import { Settings } from '@/pages/Settings';
import './DashboardStyle.css';

type ActiveScreen = 'discover' | 'matches' | 'explore' | 'chat' | 'profile' | 'settings';

const DashboardLayout = () => {
    const [activeScreen, setActiveScreen] = useState<ActiveScreen>('discover');

    const renderHeader = () => {
        switch (activeScreen) {
            case 'profile':
                return (
                    <div className="dashboard-head">
                        <div className="dashboard-header-slot">
                            <button className="header-back-btn" onClick={() => setActiveScreen('discover')}>
                                ←
                            </button>
                        </div>
                        <div className="dashboard-header-title">My Profile</div>
                        <div className="dashboard-header-slot"></div>
                    </div>
                );
            case 'settings':
                return null; // Settings has its own header
            case 'discover':
            default:
                return null; // Discover has its own header
        }
    };

    const renderContent = () => {
        switch (activeScreen) {
            case 'discover':
                return <Discover />;
            case 'profile':
                return <Profile onSettingsClick={() => setActiveScreen('settings')} />;
            case 'settings':
                return <Settings onBack={() => setActiveScreen('profile')} />;
            case 'matches':
            case 'explore':
            case 'chat':
            default:
                return (
                    <div className="dashboard-placeholder">
                        <p>{activeScreen.charAt(0).toUpperCase() + activeScreen.slice(1)} Screen</p>
                        <p>Coming Soon</p>
                    </div>
                );
        }
    };

    const hasHeader = activeScreen === 'profile';

    return (
        <div className="dashboard-layout">
            {renderHeader()}
            <div className={`dashboard-content-wrapper ${!hasHeader ? 'no-header' : ''}`}>
                {renderContent()}
            </div>
            <div className="dashboard-footer">
                <button
                    className={`footer-nav-item ${activeScreen === 'discover' ? 'active' : ''}`}
                    onClick={() => setActiveScreen('discover')}
                >
                    <DashboardIcon size={24} color={activeScreen === 'discover' ? '#FF6B9D' : '#ADAFBB'} />
                </button>
                <button
                    className={`footer-nav-item ${activeScreen === 'matches' ? 'active' : ''}`}
                    onClick={() => setActiveScreen('matches')}
                >
                    <MatchesIcon size={24} color={activeScreen === 'matches' ? '#FF6B9D' : '#ADAFBB'} />
                </button>
                <button
                    className={`footer-nav-item ${activeScreen === 'explore' ? 'active' : ''}`}
                    onClick={() => setActiveScreen('explore')}
                >
                    <ExploreIcon size={24} color={activeScreen === 'explore' ? '#FF6B9D' : '#ADAFBB'} />
                </button>
                <button
                    className={`footer-nav-item ${activeScreen === 'chat' ? 'active' : ''}`}
                    onClick={() => setActiveScreen('chat')}
                >
                    <ChatIcon size={24} color={activeScreen === 'chat' ? '#FF6B9D' : '#ADAFBB'} />
                </button>
                <button
                    className={`footer-nav-item ${activeScreen === 'profile' ? 'active' : ''}`}
                    onClick={() => setActiveScreen('profile')}
                >
                    <ProfileIcon size={24} color={activeScreen === 'profile' ? '#FF6B9D' : '#ADAFBB'} />
                </button>
            </div>
        </div>
    );
};

export default DashboardLayout;
