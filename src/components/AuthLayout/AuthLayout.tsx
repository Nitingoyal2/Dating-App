import type { AuthLayoutProps } from '@interfaces';
import { ArrowLeftIcon } from '@svg';
import './AuthLayout.css';

const AuthLayout = ({
    title,
    description,
    descriptionColor = 'default',
    onBackClick,
    showBackButton = true,
    centered = false,
    children,
    footer,
}: AuthLayoutProps) => {
    return (
        <div className={`auth-layout ${centered ? 'auth-layout--centered' : ''}`}>
            {/* Header with back button */}
            <div className="auth-header">
                {showBackButton && (
                    <button type="button" className="back-button" onClick={onBackClick}>
                        <ArrowLeftIcon size={24} />
                    </button>
                )}
            </div>

            {/* Title and Description */}
            <div className="auth-title-section">
                <h1 className="auth-title">{title}</h1>
                {description && (
                    <p className={`auth-description ${descriptionColor === 'accent' ? 'auth-description--accent' : ''}`}>
                        {description}
                    </p>
                )}
            </div>

            {/* Form Content */}
            <div className="auth-form-section">
                {children}
            </div>

            {/* Optional Footer */}
            {footer && <div className="auth-footer-section">{footer}</div>}
        </div>
    );
};

export default AuthLayout;

