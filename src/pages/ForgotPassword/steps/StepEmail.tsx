import { Form, Input } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import AuthLayout from '@components/AuthLayout';
import { PrimaryButton } from '@components/Button';
import { ValidationMessages } from '@constants';
import type { StepEmailProps } from '@interfaces';

const StepEmail = ({ value, onChange, onNext, onBack, isLoading }: StepEmailProps) => {
    const [form] = Form.useForm();

    const handleFinish = () => {
        onNext();
    };

    return (
        <AuthLayout
            title="Account Recovery"
            description="We'll send you a verification code to recover your account"
            onBackClick={onBack}
        >
            <Form
                form={form}
                layout="vertical"
                onFinish={handleFinish}
                initialValues={{ email: value }}
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
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        style={{ borderRadius: 12, height: 52 }}
                    />
                </Form.Item>

                <Form.Item style={{ marginTop: 'auto', marginBottom: 0 }}>
                    <PrimaryButton htmlType="submit" loading={isLoading}>
                        Send Code
                    </PrimaryButton>
                </Form.Item>
            </Form>
        </AuthLayout>
    );
};

export default StepEmail;

