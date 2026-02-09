import { useAppDispatch } from '@store/hooks';
import { logout } from '@store/slices';
import { useNavigate } from 'react-router-dom';
import { Routes } from '@/types';
import { getAllSettingsSections, SETTINGS_LOGOUT_TEXT } from '@constants';
import './Settings.css';
import { ArrowRightIcon } from '@/utils/svg';

const Settings = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate(Routes.LOGIN);
    };

    const handleItemClick = (route: string | null) => {
        if (route) {
            // Pass state to indicate we came from Settings
            navigate(route, { state: { from: Routes.SETTINGS } });
        }
        // Handle other items here (e.g., Edit, Privacy, etc.)
    };

    const settingsSections = getAllSettingsSections();

    return (
        <div className="settings-page">
            <div className="settings-content">
                {settingsSections?.map(({ section, title, items }) => (
                    <div key={section} className="settings-section">
                        <h2 className="settings-section-title">{title}</h2>
                        {items.map((itemConfig) => (
                            <div
                                key={itemConfig.item}
                                className="settings-item"
                                onClick={() => handleItemClick(itemConfig.route)}
                            >
                                <span>{itemConfig.label}</span>
                                <span className="settings-arrow"><ArrowRightIcon size={14} color="#000" /></span>
                            </div>
                        ))}
                    </div>
                ))}

                <div className="settings-section">
                    <button className="settings-logout-btn" onClick={handleLogout}>
                        {SETTINGS_LOGOUT_TEXT}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Settings;

