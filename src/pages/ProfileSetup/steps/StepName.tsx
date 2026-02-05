import { Form, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import type { StepNameProps } from '@interfaces';
import AuthLayout from '@components/AuthLayout';
import { PrimaryButton } from '@components/Button';
import { ValidationMessages } from '@constants';

const StepName = ({ value, onChange, onNext, onBack }: StepNameProps) => {
    const [form] = Form.useForm();

    const handleFinish = () => {
        onNext();
    };

    return (
        <AuthLayout
            title="Enter your First Name"
            description="This is how your name will appear in Prosto."
            descriptionColor="accent"
            onBackClick={onBack}
        >
            <Form
                form={form}
                layout="vertical"
                onFinish={handleFinish}
                initialValues={{ firstName: value }}
                style={{ display: 'flex', flexDirection: 'column', flex: 1 }}
            >
                <Form.Item
                    name="firstName"
                    label="First Name"
                    rules={[
                        { required: true, message: ValidationMessages.NAME_REQUIRED },
                        { min: 2, message: ValidationMessages.NAME_MIN_2 },
                    ]}
                >
                    <Input
                        prefix={<UserOutlined style={{ color: 'var(--color-text-tertiary)' }} />}
                        placeholder="Your name"
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

export default StepName;
