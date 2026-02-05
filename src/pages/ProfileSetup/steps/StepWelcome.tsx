import { useState } from 'react';
import { Checkbox, Typography } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import type { StepProps, WelcomeRule } from '@interfaces';
import AuthLayout from '@components/AuthLayout';
import { PrimaryButton } from '@components/Button';

const { Text } = Typography;

const rules: WelcomeRule[] = [
    {
        title: 'Be yourself',
        description: 'Make sure your photos, age, and bio are true to who you are.',
    },
    {
        title: 'Stay safe',
        description: (
            <>
                Don't be too quick to give out personal information.{' '}
                <Text type="danger" underline style={{ cursor: 'pointer' }}>
                    Date Safely
                </Text>
            </>
        ),
    },
    {
        title: 'Play it cool',
        description: 'Respect others and treat them as you would like to be treated.',
    },
    {
        title: 'Be Proactive',
        description: 'Always report bad behavior.',
    },
];

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
                    {rules.map((rule, index) => (
                        <div key={index} className="auth-rule">
                            <div className="auth-rule-icon">
                                <CheckOutlined style={{ fontSize: 20 }} />
                            </div>
                            <div className="auth-rule-content">
                                <h3 className="auth-rule-title">{rule.title}</h3>
                                <p className="auth-rule-description">{rule.description}</p>
                            </div>
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
