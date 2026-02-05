import { useNavigate } from 'react-router-dom';
import { Form, Input } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { Routes } from '@/types';
import type { ForgotPasswordFormData } from '@interfaces';
import AuthLayout from '@components/AuthLayout';
import { PrimaryButton } from '@components/Button';
import { ValidationMessages } from '@constants';
import './ForgotPassword.css';

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [form] = Form.useForm();

    const handleBack = () => {
        navigate(Routes.LOGIN);
    };

    const handleSubmit = (values: ForgotPasswordFormData) => {
        console.log('Reset password for:', values.email);
        // TODO: Call API to send reset email
    };

    return (
        <AuthLayout
            title="Account Recovery"
            description="We'll email you a link that will instantly log you in"
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
                    label="Your Email"
                    rules={[
                        { required: true, message: ValidationMessages.EMAIL_REQUIRED },
                        { type: 'email', message: ValidationMessages.EMAIL_INVALID },
                    ]}
                >
                    <Input
                        prefix={<MailOutlined style={{ color: 'var(--color-text-tertiary)' }} />}
                        placeholder="Email Address"
                        size="large"
                        style={{ borderRadius: 12, height: 52 }}
                    />
                </Form.Item>

                <span className="form-link">Resend email</span>

                <Form.Item style={{ marginTop: 32, marginBottom: 0 }}>
                    <PrimaryButton htmlType="submit">
                        Send Email
                    </PrimaryButton>
                </Form.Item>
            </Form>
        </AuthLayout>
    );
};

export default ForgotPassword;
