import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DashboardIcon, MatchesIcon, ChatIcon, ProfileIcon, ExploreIcon, ArrowLeftIcon, FilterIcon, ProstoLogo } from '@svg';
import { Discover } from '@/pages/Discover';
import { Profile } from '@/pages/Profile';
import { Settings } from '@/pages/Settings';
import type { DashboardLayoutProps, DashboardScreen } from '@interfaces';
import {
    DEFAULT_DASHBOARD_SCREEN,
    getScreenTitle,
    getBackNavigationTarget,
    shouldShowBackButton,
} from '@constants';
import { DashboardScreen as DashboardScreenEnum, Routes } from '@/types';
import './DashboardStyle.css';

// Map dashboard screens to routes
const screenToRoute: Record<DashboardScreen, string> = {
    [DashboardScreenEnum.DISCOVER]: Routes.DASHBOARD,
    [DashboardScreenEnum.PROFILE]: Routes.PROFILE,
    [DashboardScreenEnum.SETTINGS]: Routes.SETTINGS,
    [DashboardScreenEnum.MATCHES]: Routes.MATCHES,
    [DashboardScreenEnum.CHAT]: Routes.CHAT,
    [DashboardScreenEnum.EXPLORE]: Routes.DASHBOARD, // Explore uses dashboard route (no separate route)
};

const DashboardLayout = ({ activeScreen: propActiveScreen, onScreenChange }: DashboardLayoutProps) => {
    const navigate = useNavigate();
    const [internalActiveScreen, setInternalActiveScreen] = useState<DashboardScreen>(DEFAULT_DASHBOARD_SCREEN);

    // Use prop if provided, otherwise use internal state
    const activeScreen = propActiveScreen ?? internalActiveScreen;

    const handleScreenChange = (screen: DashboardScreen) => {
        if (onScreenChange) {
            onScreenChange(screen);
        } else {
            setInternalActiveScreen(screen);
            // Update URL when screen changes (only if not controlled by parent)
            const route = screenToRoute[screen];
            if (route) {
                navigate(route, { replace: true });
            }
        }
    };

    const handleBack = () => {
        const backTarget = getBackNavigationTarget(activeScreen);
        if (backTarget) {
            handleScreenChange(backTarget);
        }
    };

    const showBackButton = shouldShowBackButton(activeScreen);

    const renderContent = () => {
        switch (activeScreen) {
            case DashboardScreenEnum.DISCOVER:
                return <Discover />;
            case DashboardScreenEnum.PROFILE:
                return <Profile onSettingsClick={() => handleScreenChange(DashboardScreenEnum.SETTINGS)} />;
            case DashboardScreenEnum.SETTINGS:
                return <Settings />;
            case DashboardScreenEnum.MATCHES:
            case DashboardScreenEnum.EXPLORE:
            case DashboardScreenEnum.CHAT:
            default:
                return (
                    <div className="dashboard-placeholder">
                        <p>{getScreenTitle(activeScreen)}</p>
                        <p>Coming Soon</p>
                    </div>
                );
        }
    };

    const isDiscoverScreen = activeScreen === DashboardScreenEnum.DISCOVER;

    return (
        <div className="dashboard-layout">
            {/* Always show header */}
            <div className="dashboard-head">
                {isDiscoverScreen ? (
                    <>
                        <div className="dashboard-header-slot"></div>
                        <div className="dashboard-header-logo">
                            <ProstoLogo size={32} color="#FF6B9D" />
                        </div>
                        <div className="dashboard-header-slot">
                            <button className="header-filter-btn" onClick={() => {
                                // Handle filter click
                                console.log('Filter clicked');
                            }}>
                                <FilterIcon size={24} color="#000" />
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="dashboard-header-slot">
                            {showBackButton && (
                                <button className="header-back-btn" onClick={handleBack}>
                                    <ArrowLeftIcon size={24} color="#000" />
                                </button>
                            )}
                        </div>
                        <div className="dashboard-header-title">{getScreenTitle(activeScreen)}</div>
                        <div className="dashboard-header-slot"></div>
                    </>
                )}
            </div>

            {/* Content area - changes based on activeScreen */}
            <div className="dashboard-content-wrapper">
                {renderContent()}
            </div>

            {/* Always show footer */}
            <div className="dashboard-footer">
                <button
                    className={`footer-nav-item ${activeScreen === DashboardScreenEnum.DISCOVER ? 'active' : ''}`}
                    onClick={() => handleScreenChange(DashboardScreenEnum.DISCOVER)}
                >
                    <DashboardIcon size={24} color={activeScreen === DashboardScreenEnum.DISCOVER ? '#E94057' : '#ADAFBB'} />
                </button>
                <button
                    className={`footer-nav-item ${activeScreen === DashboardScreenEnum.MATCHES ? 'active' : ''}`}
                    onClick={() => handleScreenChange(DashboardScreenEnum.MATCHES)}
                >
                    <MatchesIcon size={24} color={activeScreen === DashboardScreenEnum.MATCHES ? '#E94057' : '#ADAFBB'} />
                </button>
                <button
                    className={`footer-nav-item ${activeScreen === DashboardScreenEnum.EXPLORE ? 'active' : ''}`}
                    onClick={() => handleScreenChange(DashboardScreenEnum.EXPLORE)}
                >
                    <ExploreIcon size={24} color={activeScreen === DashboardScreenEnum.EXPLORE ? '#E94057' : '#ADAFBB'} />
                </button>
                <button
                    className={`footer-nav-item ${activeScreen === DashboardScreenEnum.CHAT ? 'active' : ''}`}
                    onClick={() => handleScreenChange(DashboardScreenEnum.CHAT)}
                >
                    <ChatIcon size={24} color={activeScreen === DashboardScreenEnum.CHAT ? '#E94057' : '#ADAFBB'} />
                </button>
                <button
                    className={`footer-nav-item ${activeScreen === DashboardScreenEnum.PROFILE ? 'active' : ''}`}
                    onClick={() => handleScreenChange(DashboardScreenEnum.PROFILE)}
                >
                    <ProfileIcon size={24} color={activeScreen === DashboardScreenEnum.PROFILE ? '#E94057' : '#ADAFBB'} />
                </button>
            </div>
        </div>
    );
};

export default DashboardLayout;
