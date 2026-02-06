import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Checkbox } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import type { StepProps } from '@interfaces';
import { Routes } from '@/types';
import AuthLayout from '@components/AuthLayout';
import { PrimaryButton } from '@components/Button';
import { welcomeRules } from '@/data';

const StepWelcome = ({ onNext, onBack }: StepProps) => {
    const navigate = useNavigate();
    const [acceptedTerms, setAcceptedTerms] = useState(false);

    const handleTermsClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        navigate(Routes.TERMS_OF_SERVICE);
    };

    const handlePrivacyClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        navigate(Routes.PRIVACY_POLICY);
    };

    return (
        <AuthLayout
            title="Welcome to Prosto"
            description="Please follow these House Rules."
            onBackClick={onBack}
        >
            <div className="auth-welcome-content">
                <div className="auth-rules">
                    {welcomeRules?.map((rule, index) => (
                        <div key={index} className="auth-rule">
                            <div className="auth-rule-header">
                                <CheckOutlined className="auth-rule-icon" />
                                <h3 className="auth-rule-title">{rule.title}</h3>
                            </div>
                            <p className="auth-rule-description">{rule.description}</p>
                        </div>
                    ))}
                </div>

                <div className="auth-welcome-actions">
                    <Checkbox
                        checked={acceptedTerms}
                        onChange={(e) => setAcceptedTerms(e.target.checked)}
                        className="auth-terms"
                    >
                        <span className="auth-terms-text">
                            I agree to the{' '}
                            <span
                                className="auth-terms-link"
                                onClick={handleTermsClick}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        handleTermsClick(e as any);
                                    }
                                }}
                            >
                                Terms &amp; Conditions
                            </span>{' '}
                            and{' '}
                            <span
                                className="auth-terms-link"
                                onClick={handlePrivacyClick}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        handlePrivacyClick(e as any);
                                    }
                                }}
                            >
                                Privacy Policy
                            </span>
                            .
                        </span>
                    </Checkbox>

                    <PrimaryButton
                        onClick={onNext}
                        disabled={!acceptedTerms}
                        className="auth-continue-btn"
                    >
                        Continue
                    </PrimaryButton>
                </div>
            </div>
        </AuthLayout>
    );
};

export default StepWelcome;
