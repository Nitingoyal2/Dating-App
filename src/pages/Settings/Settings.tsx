import { useAppDispatch } from '@store/hooks';
import { logout } from '@store/slices';
import { useNavigate } from 'react-router-dom';
import { Routes } from '@/types';
import './Settings.css';

const Settings = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate(Routes.LOGIN);
    };

    return (
        <div className="settings-page">
            <div className="settings-content">
                <div className="settings-section">
                    <h2 className="settings-section-title">Account</h2>
                    <div className="settings-item">
                        <span>Edit Profile</span>
                        <span className="settings-arrow">→</span>
                    </div>
                    <div className="settings-item">
                        <span>Privacy</span>
                        <span className="settings-arrow">→</span>
                    </div>
                    <div className="settings-item">
                        <span>Security</span>
                        <span className="settings-arrow">→</span>
                    </div>
                </div>

                <div className="settings-section">
                    <h2 className="settings-section-title">Preferences</h2>
                    <div className="settings-item">
                        <span>Notifications</span>
                        <span className="settings-arrow">→</span>
                    </div>
                    <div className="settings-item">
                        <span>Language</span>
                        <span className="settings-arrow">→</span>
                    </div>
                </div>

                <div className="settings-section">
                    <h2 className="settings-section-title">Support</h2>
                    <div className="settings-item">
                        <span>Help Center</span>
                        <span className="settings-arrow">→</span>
                    </div>
                    <div className="settings-item">
                        <span>Contact Us</span>
                        <span className="settings-arrow">→</span>
                    </div>
                    <div
                        className="settings-item"
                        onClick={() => navigate(Routes.TERMS_OF_SERVICE)}
                    >
                        <span>Terms of Service</span>
                        <span className="settings-arrow">→</span>
                    </div>
                    <div
                        className="settings-item"
                        onClick={() => navigate(Routes.PRIVACY_POLICY)}
                    >
                        <span>Privacy Policy</span>
                        <span className="settings-arrow">→</span>
                    </div>
                </div>

                <div className="settings-section">
                    <button className="settings-logout-btn" onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Settings;

