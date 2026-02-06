import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '@store/hooks';
import { Routes } from '@/types';
import { PrimaryButton } from '@components/Button';
import './NotFound.css';

const NotFound = () => {
    const navigate = useNavigate();
    const { isAuthenticated } = useAppSelector((state) => state.auth);

    const handleGoBack = () => {
        // Redirect to dashboard if authenticated, otherwise to home
        navigate(isAuthenticated ? Routes.DASHBOARD : Routes.HOME, { replace: true });
    };

    return (
        <div className="not-found-container">
            <div className="not-found-content">
                {/* 404 Number Display */}
                <div className="not-found-number">
                    <span className="not-found-digit">4</span>
                    <span className="not-found-icon">❤️</span>
                    <span className="not-found-digit">4</span>
                </div>

                {/* Title */}
                <h1 className="not-found-title">Page Not Found</h1>

                {/* Description */}
                <p className="not-found-description">
                    Oops! The page you're looking for doesn't exist or has been moved.
                    <br />
                    Let's get you back on track!
                </p>

                {/* Action Button */}
                <div className="not-found-actions">
                    <PrimaryButton onClick={handleGoBack} variant="primary" size="large">
                        {isAuthenticated ? 'Go to Dashboard' : 'Go to Home'}
                    </PrimaryButton>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="not-found-decoration">
                <div className="not-found-circle not-found-circle-1"></div>
                <div className="not-found-circle not-found-circle-2"></div>
                <div className="not-found-circle not-found-circle-3"></div>
            </div>
        </div>
    );
};

export default NotFound;
