import { useState } from 'react';
import { Checkbox } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import type { StepProps } from '@interfaces';
import AuthLayout from '@components/AuthLayout';
import { PrimaryButton } from '@components/Button';
import { welcomeRules } from '@/data';

const StepWelcome = ({ onNext, onBack }: StepProps) => {
    const [acceptedTerms, setAcceptedTerms] = useState(false);

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
                                onClick={(e) => e.stopPropagation()}
                                role="button"
                                tabIndex={0}
                            >
                                Terms &amp; Conditions
                            </span>{' '}
                            and{' '}
                            <span
                                className="auth-terms-link"
                                onClick={(e) => e.stopPropagation()}
                                role="button"
                                tabIndex={0}
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
