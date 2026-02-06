import { useState } from 'react';
import { DashboardIcon, MatchesIcon, ChatIcon, ProfileIcon, ExploreIcon, ArrowLeftIcon } from '@svg';
import { Discover } from '@/pages/Discover';
import { Profile } from '@/pages/Profile';
import { Settings } from '@/pages/Settings';
import type { DashboardLayoutProps, DashboardScreen } from '@interfaces';
import './DashboardStyle.css';

const DashboardLayout = ({ activeScreen: propActiveScreen, onScreenChange }: DashboardLayoutProps) => {
    const [internalActiveScreen, setInternalActiveScreen] = useState<DashboardScreen>('discover');

    // Use prop if provided, otherwise use internal state
    const activeScreen = propActiveScreen ?? internalActiveScreen;

    const handleScreenChange = (screen: DashboardScreen) => {
        if (onScreenChange) {
            onScreenChange(screen);
        } else {
            setInternalActiveScreen(screen);
        }
    };

    const getHeaderTitle = () => {
        switch (activeScreen) {
            case 'discover':
                return 'Discover';
            case 'matches':
                return 'Matches';
            case 'explore':
                return 'Explore';
            case 'chat':
                return 'Messages';
            case 'profile':
                return 'My Profile';
            case 'settings':
                return 'Settings';
            default:
                return 'Dashboard';
        }
    };

    const handleBack = () => {
        if (activeScreen === 'settings') {
            handleScreenChange('profile');
        } else if (activeScreen === 'profile') {
            handleScreenChange('discover');
        }
    };

    const showBackButton = activeScreen === 'profile' || activeScreen === 'settings';

    const renderContent = () => {
        switch (activeScreen) {
            case 'discover':
                return <Discover />;
            case 'profile':
                return <Profile onSettingsClick={() => handleScreenChange('settings')} />;
            case 'settings':
                return <Settings />;
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

    return (
        <div className="dashboard-layout">
            {/* Always show header */}
            <div className="dashboard-head">
                <div className="dashboard-header-slot">
                    {showBackButton && (
                        <button className="header-back-btn" onClick={handleBack}>
                            <ArrowLeftIcon size={24} color="#000" />
                        </button>
                    )}
                </div>
                <div className="dashboard-header-title">{getHeaderTitle()}</div>
                <div className="dashboard-header-slot"></div>
            </div>

            {/* Content area - changes based on activeScreen */}
            <div className="dashboard-content-wrapper">
                {renderContent()}
            </div>

            {/* Always show footer */}
            <div className="dashboard-footer">
                <button
                    className={`footer-nav-item ${activeScreen === 'discover' ? 'active' : ''}`}
                    onClick={() => handleScreenChange('discover')}
                >
                    <DashboardIcon size={24} color={activeScreen === 'discover' ? '#FF6B9D' : '#ADAFBB'} />
                </button>
                <button
                    className={`footer-nav-item ${activeScreen === 'matches' ? 'active' : ''}`}
                    onClick={() => handleScreenChange('matches')}
                >
                    <MatchesIcon size={24} color={activeScreen === 'matches' ? '#FF6B9D' : '#ADAFBB'} />
                </button>
                <button
                    className={`footer-nav-item ${activeScreen === 'explore' ? 'active' : ''}`}
                    onClick={() => handleScreenChange('explore')}
                >
                    <ExploreIcon size={24} color={activeScreen === 'explore' ? '#FF6B9D' : '#ADAFBB'} />
                </button>
                <button
                    className={`footer-nav-item ${activeScreen === 'chat' ? 'active' : ''}`}
                    onClick={() => handleScreenChange('chat')}
                >
                    <ChatIcon size={24} color={activeScreen === 'chat' ? '#FF6B9D' : '#ADAFBB'} />
                </button>
                <button
                    className={`footer-nav-item ${activeScreen === 'profile' ? 'active' : ''}`}
                    onClick={() => handleScreenChange('profile')}
                >
                    <ProfileIcon size={24} color={activeScreen === 'profile' ? '#FF6B9D' : '#ADAFBB'} />
                </button>
            </div>
        </div>
    );
};

export default DashboardLayout;
