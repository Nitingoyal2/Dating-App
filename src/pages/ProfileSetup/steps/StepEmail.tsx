import { Form, Input } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import type { StepEmailProps } from '@interfaces';
import AuthLayout from '@components/AuthLayout';
import { PrimaryButton } from '@components/Button';

const StepEmail = ({ value, onChange, onNext, onBack }: StepEmailProps) => {
    const [form] = Form.useForm();

    const handleFinish = () => {
        onNext();
    };

    return (
        <AuthLayout
            title="What's your email?"
            description="Don't lose access to your account, verify your email."
            descriptionColor="accent"
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
                        { required: true, message: 'Please enter your email' },
                        { type: 'email', message: 'Please enter a valid email' },
                    ]}
                >
                    <Input
                        prefix={<MailOutlined style={{ color: 'var(--color-text-tertiary)' }} />}
                        placeholder="Email Address"
                        size="large"
                        onChange={(e) => onChange(e.target.value)}
                        autoFocus
                        style={{ borderRadius: 12, height: 52 }}
                    />
                </Form.Item>

                <Form.Item style={{ marginTop: 'auto', marginBottom: 0 }}>
                    <PrimaryButton htmlType="submit">
                        Continue
                    </PrimaryButton>
                </Form.Item>
            </Form>
        </AuthLayout>
    );
};

export default StepEmail;
