import { useState } from 'react';
import { Form, Input, Typography, Space } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import type { StepSuccessProps, PasswordFormData } from '@interfaces';
import { PrimaryButton } from '@components/Button';
import { ProstoLogo } from '@svg';
import './StepSuccess.css';

const { Title, Text } = Typography;

const StepSuccess = ({ onComplete, isLoading }: StepSuccessProps) => {
    const [form] = Form.useForm<PasswordFormData>();
    const [isValid, setIsValid] = useState(false);

    const handleValuesChange = () => {
        const values = form.getFieldsValue();
        const hasPassword = Boolean(values.password && values.password.length >= 8);
        const passwordsMatch = Boolean(values.password && values.password === values.confirm_password);
        setIsValid(hasPassword && passwordsMatch);
    };

    const handleSubmit = () => {
        form.validateFields().then((values) => {
            onComplete(values.password);
        });
    };

    return (
        <div className="step-success">
            <div className="success-hearts-bg">
                <div className="heart heart-1">💗</div>
                <div className="heart heart-2">💕</div>
                <div className="heart heart-3">💗</div>
                <div className="heart heart-4">💕</div>
            </div>

            <div className="step-success-content">
                <Space direction="vertical" align="center" size="small">
                    <div className="success-icon">
                        <ProstoLogo size={80} />
                    </div>
                    <Title level={2} style={{ margin: 0, textAlign: 'center' }}>
                        Yaaay you Made It
                    </Title>
                    <Text type="secondary" style={{ textAlign: 'center' }}>
                        Create a password to secure your account
                    </Text>
                </Space>

                <Form
                    form={form}
                    layout="vertical"
                    onValuesChange={handleValuesChange}
                    className="password-form"
                >
                    <Form.Item
                        name="password"
                        rules={[
                            { required: true, message: 'Please enter a password' },
                            { min: 8, message: 'Password must be at least 8 characters' },
                            {
                                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                                message: 'Password must contain uppercase, lowercase, and number',
                            },
                        ]}
                    >
                        <Input.Password
                            prefix={<LockOutlined />}
                            placeholder="Create password"
                            size="large"
                        />
                    </Form.Item>

                    <Form.Item
                        name="confirm_password"
                        dependencies={['password']}
                        rules={[
                            { required: true, message: 'Please confirm your password' },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('Passwords do not match'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password
                            prefix={<LockOutlined />}
                            placeholder="Confirm password"
                            size="large"
                        />
                    </Form.Item>
                </Form>

                <PrimaryButton
                    onClick={handleSubmit}
                    disabled={!isValid}
                    loading={isLoading}
                    block
                >
                    Complete Registration
                </PrimaryButton>
            </div>
        </div>
    );
};

export default StepSuccess;
