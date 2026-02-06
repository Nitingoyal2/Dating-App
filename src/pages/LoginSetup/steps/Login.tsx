import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Routes, LoginType } from '@/types';
import { PrimaryButton } from '@components/Button';
import { loginBackgroundImages } from '@/data';
import type { LoginSetupLoginProps } from '@interfaces';
import { ValidationMessages } from '@constants';
import './Login.css';

const Login = ({
    loginType,
    onLoginTypeChange,
    phone,
    onPhoneChange,
    countryCode: _countryCode,
    onCountryCodeChange,
    email,
    onEmailChange,
    onNext,
    isLoading,
}: LoginSetupLoginProps) => {
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const [currentBgIndex, setCurrentBgIndex] = useState(0);

    // Background carousel auto-change
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBgIndex((prev) => (prev + 1) % loginBackgroundImages.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const handleSubmit = (values: { email?: string }) => {
        const identifier = loginType === LoginType.PHONE ? phone : values.email;
        if (!identifier) return;
        if (loginType === LoginType.PHONE && identifier.length < 10) return;
        if (loginType === LoginType.EMAIL && values.email) onEmailChange(values.email);
        onNext();
    };

    return (
        <div className="login-screen">
            {/* Background Images */}
            <div className="login-bg-carousel">
                {loginBackgroundImages.map((img, index) => (
                    <div
                        key={index}
                        className={`login-bg-slide ${index === currentBgIndex ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${img})` }}
                    />
                ))}
                <div className="login-bg-overlay" />
            </div>

            {/* Login Card */}
            <div className="login-card">
                {/* Title */}
                <h1 className="login-title">Sign in</h1>

                {/* Login Type Toggle */}
                <div className="login-toggle">
                    <button
                        className={`login-toggle-btn ${loginType === LoginType.PHONE ? 'active' : ''}`}
                        onClick={() => {
                            onLoginTypeChange(LoginType.PHONE);
                            form.resetFields();
                        }}
                    >
                        Phone
                    </button>
                    <button
                        className={`login-toggle-btn ${loginType === LoginType.EMAIL ? 'active' : ''}`}
                        onClick={() => {
                            onLoginTypeChange(LoginType.EMAIL);
                            form.resetFields();
                        }}
                    >
                        Email
                    </button>
                </div>

                <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleSubmit}
                    className="login-form"
                >
                    {loginType === LoginType.PHONE ? (
                        <Form.Item
                            label="Phone Number"
                            required
                            validateStatus={phone.length > 0 && phone.length < 10 ? 'error' : ''}
                            help={phone.length > 0 && phone.length < 10 ? ValidationMessages.PHONE_INVALID : ''}
                        >
                            <PhoneInput
                                country={'us'}
                                value={phone}
                                onChange={(value, country) => {
                                    onPhoneChange(value);
                                    const countryData = country as { dialCode?: string };
                                    if (countryData?.dialCode) {
                                        onCountryCodeChange(countryData.dialCode);
                                    }
                                }}
                                inputClass="phone-input-field"
                                containerClass="phone-input-container"
                                buttonClass="phone-input-button"
                                dropdownClass="phone-input-dropdown"
                                searchClass="phone-input-search"
                                enableSearch
                                countryCodeEditable={false}
                                searchPlaceholder="Search country..."
                                placeholder="331-623-8413"
                            />
                        </Form.Item>
                    ) : (
                        <Form.Item
                            name="email"
                            label="Email Address"
                            rules={[
                                { required: true, message: ValidationMessages.EMAIL_REQUIRED },
                                { type: 'email', message: ValidationMessages.EMAIL_INVALID },
                            ]}
                        >
                            <Input
                                prefix={<MailOutlined style={{ color: 'var(--color-text-tertiary)' }} />}
                                placeholder="Enter your email"
                                size="large"
                                className="login-input"
                                value={email}
                                onChange={(e) => onEmailChange(e.target.value)}
                            />
                        </Form.Item>
                    )}

                    <div className="login-trouble">
                        <span onClick={() => navigate(Routes.FORGOT_PASSWORD)}>
                            Trouble Signing in
                        </span>
                    </div>

                    <Form.Item style={{ marginBottom: 0 }}>
                        <PrimaryButton htmlType="submit" loading={isLoading}>
                            Continue
                        </PrimaryButton>
                    </Form.Item>

                    <div className="login-signup">
                        <span className="login-signup-text">Don&apos;t have an account?</span>{' '}
                        <span
                            className="login-signup-link"
                            onClick={() => navigate(Routes.PROFILE_SETUP)}
                        >
                            Sign up
                        </span>
                    </div>
                </Form>

                {/* Terms */}
                <p className="login-terms">
                    By tapping continue, you agree to our{' '}
                    <span
                        className="login-link"
                        onClick={() => navigate(Routes.TERMS_OF_SERVICE)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                navigate(Routes.TERMS_OF_SERVICE);
                            }
                        }}
                    >
                        Terms
                    </span>{' '}
                    and{' '}
                    <span
                        className="login-link"
                        onClick={() => navigate(Routes.PRIVACY_POLICY)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                navigate(Routes.PRIVACY_POLICY);
                            }
                        }}
                    >
                        Privacy Policy
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Login;
