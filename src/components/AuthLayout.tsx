import type { AuthLayoutProps } from '@/types';
import { ArrowLeftIcon } from '@svg';
import './AuthLayout.css';

const AuthLayout = ({
    title,
    description,
    onBackClick,
    showBackButton = true,
    children
}: AuthLayoutProps) => {
    return (
        <div className="auth-layout">
            {/* Header with back button */}
            <div className="auth-header">
                {showBackButton && (
                    <button className="back-button" onClick={onBackClick}>
                        <ArrowLeftIcon size={24} />
                    </button>
                )}
            </div>

            {/* Title and Description */}
            <div className="auth-title-section">
                <h1 className="auth-title">{title}</h1>
                <p className="auth-description">{description}</p>
            </div>

            {/* Form Content */}
            <div className="auth-form-section">
                {children}
            </div>
        </div>
    );
};

export default AuthLayout;
