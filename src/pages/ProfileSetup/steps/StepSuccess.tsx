import { useState } from 'react';
import { Form, Input, Typography, Space } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import type { StepSuccessProps, PasswordFormData } from '@interfaces';
import { PrimaryButton } from '@components/Button';
import { ProstoLogo, HeartFilledIcon, TwoHeartsIcon } from '@svg';
import { ValidationMessages } from '@constants';
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
                <div className="heart heart-1"><HeartFilledIcon size={24} /></div>
                <div className="heart heart-2"><TwoHeartsIcon size={20} /></div>
                <div className="heart heart-3"><HeartFilledIcon size={28} /></div>
                <div className="heart heart-4"><TwoHeartsIcon size={22} /></div>
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
                            { required: true, message: ValidationMessages.PASSWORD_REQUIRED },
                            { min: 8, message: ValidationMessages.PASSWORD_MIN_8 },
                            {
                                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                                message: ValidationMessages.PASSWORD_PATTERN,
                            },
                        ]}
                    >
                        <Input.Password
                            prefix={<LockOutlined />}
                            placeholder="Create password"
                            size="large"
                            style={{ borderRadius: 12, height: 52 }}
                        />
                    </Form.Item>

                    <Form.Item
                        name="confirm_password"
                        dependencies={['password']}
                        rules={[
                            { required: true, message: ValidationMessages.PASSWORD_CONFIRM_REQUIRED },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error(ValidationMessages.PASSWORD_MISMATCH));
                                },
                            }),
                        ]}
                    >
                        <Input.Password
                            prefix={<LockOutlined />}
                            placeholder="Confirm password"
                            size="large"
                            style={{ borderRadius: 12, height: 52 }}
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
