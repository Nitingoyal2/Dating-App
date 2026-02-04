import { useNavigate, useLocation } from 'react-router-dom';
import { Form, Input } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { useAppDispatch } from '@store/hooks';
import { loginSuccess } from '@store/slices';
import { Routes } from '@/types';
import type { LoginFormData } from '@interfaces';
import AuthLayout from '@components/AuthLayout';
import { PrimaryButton } from '@components/Button';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useAppDispatch();
    const [form] = Form.useForm();

    const from = location.state?.from?.pathname || Routes.DASHBOARD;

    const handleBack = () => {
        navigate(Routes.HOME);
    };

    const handleSubmit = (values: LoginFormData) => {
        const { email, password } = values;

        if (email && password) {
            dispatch(loginSuccess({
                user: {
                    id: '1',
                    name: email.split('@')[0],
                    email: email,
                },
                token: 'demo-token-123',
            }));

            navigate(from, { replace: true });
        }
    };

    const handleSignUp = () => {
        navigate(Routes.PROFILE_SETUP);
    };

    return (
        <AuthLayout
            title="Welcome Back"
            description="Sign in to continue finding your perfect match"
            onBackClick={handleBack}
        >
            <Form
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
                style={{ display: 'flex', flexDirection: 'column', flex: 1 }}
            >
                <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                        { required: true, message: 'Please enter your email' },
                        { type: 'email', message: 'Please enter a valid email' },
                    ]}
                >
                    <Input
                        prefix={<MailOutlined style={{ color: 'var(--color-text-tertiary)' }} />}
                        placeholder="Enter your email"
                        size="large"
                        style={{ borderRadius: 12, height: 52 }}
                    />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        { required: true, message: 'Please enter your password' },
                        { min: 6, message: 'Password must be at least 6 characters' },
                    ]}
                >
                    <Input.Password
                        prefix={<LockOutlined style={{ color: 'var(--color-text-tertiary)' }} />}
                        placeholder="Enter your password"
                        size="large"
                        style={{ borderRadius: 12, height: 52 }}
                    />
                </Form.Item>

                <span className="form-link" onClick={() => navigate(Routes.FORGOT_PASSWORD)}>
                    Forgot password?
                </span>

                <Form.Item style={{ marginTop: 32, marginBottom: 0 }}>
                    <PrimaryButton htmlType="submit">
                        Sign In
                    </PrimaryButton>
                </Form.Item>
            </Form>

            <p className="login-footer">
                Don't have an account?{' '}
                <span className="form-link" onClick={handleSignUp}>
                    Sign Up
                </span>
            </p>
        </AuthLayout>
    );
};

export default Login;
