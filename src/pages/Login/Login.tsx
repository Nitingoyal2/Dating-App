import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Form, Input } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useAppDispatch } from '@store/hooks';
import { loginSuccess } from '@store/slices';
import { Routes } from '@/types';
import { PrimaryButton } from '@components/Button';
import { loginBackgroundImages } from '@/data';
import './Login.css';

type LoginType = 'phone' | 'email';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useAppDispatch();
    const [form] = Form.useForm();
    const [loginType, setLoginType] = useState<LoginType>('phone');
    const [currentBgIndex, setCurrentBgIndex] = useState(0);
    const [phone, setPhone] = useState('');

    const from = location.state?.from?.pathname || Routes.DASHBOARD;

    // Background carousel auto-change
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBgIndex((prev) => (prev + 1) % loginBackgroundImages.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const handleSubmit = (values: { email?: string }) => {
        const identifier = loginType === 'phone' ? phone : values.email;

        if (identifier) {
            dispatch(loginSuccess({
                user: {
                    id: '1',
                    name: loginType === 'email' ? values.email?.split('@')[0] || 'User' : 'User',
                    email: loginType === 'email' ? values.email || '' : '',
                },
                token: 'demo-token-123',
            }));
            navigate(from, { replace: true });
        }
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
                        className={`login-toggle-btn ${loginType === 'phone' ? 'active' : ''}`}
                        onClick={() => setLoginType('phone')}
                    >
                        Phone
                    </button>
                    <button
                        className={`login-toggle-btn ${loginType === 'email' ? 'active' : ''}`}
                        onClick={() => setLoginType('email')}
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
                    {loginType === 'phone' ? (
                        <Form.Item
                            label="Phone Number"
                            required
                            validateStatus={phone.length > 0 && phone.length < 10 ? 'error' : ''}
                            help={phone.length > 0 && phone.length < 10 ? 'Please enter a valid phone number' : ''}
                        >
                            <PhoneInput
                                country={'us'}
                                value={phone}
                                onChange={(value) => setPhone(value)}
                                inputClass="phone-input-field"
                                containerClass="phone-input-container"
                                buttonClass="phone-input-button"
                                dropdownClass="phone-input-dropdown"
                                searchClass="phone-input-search"
                                enableSearch
                                countryCodeEditable={false}
                                searchPlaceholder="Search country..."
                                // preferredCountries={['us', 'in', 'gb', 'au', 'ca']}
                                placeholder="331-623-8413"
                            />
                        </Form.Item>
                    ) : (
                        <Form.Item
                            name="email"
                            label="Email Address"
                            rules={[
                                { required: true, message: 'Please enter your email' },
                                { type: 'email', message: 'Please enter a valid email' },
                            ]}
                        >
                            <Input
                                prefix={<MailOutlined style={{ color: 'var(--color-text-tertiary)' }} />}
                                placeholder="Enter your email"
                                size="large"
                                className="login-input"
                            />
                        </Form.Item>
                    )}

                    <div className="login-trouble">
                        <span onClick={() => navigate(Routes.FORGOT_PASSWORD)}>
                            Trouble Signing in
                        </span>
                    </div>

                    <Form.Item style={{ marginBottom: 0 }}>
                        <PrimaryButton htmlType="submit">
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
                    By taping continue, you agree to our{' '}
                    <span className="login-link">Terms</span> and{' '}
                    <span className="login-link">Privacy Policy</span>
                </p>
            </div>
        </div>
    );
};

export default Login;
