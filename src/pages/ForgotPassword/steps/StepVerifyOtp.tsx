import { useEffect, useMemo, useState } from 'react';
import { Form, Input, message } from 'antd';
import AuthLayout from '@components/AuthLayout';
import { PrimaryButton } from '@components/Button';
import { ValidationMessages } from '@constants';
import type { StepVerifyOtpProps } from '@interfaces';

const RESEND_COOLDOWN_SECONDS = 60;

const StepVerifyOtp = ({
    email,
    value,
    onChange,
    onVerify,
    onResend,
    onBack,
    isLoading
}: StepVerifyOtpProps) => {
    const [form] = Form.useForm();
    const [secondsLeft, setSecondsLeft] = useState(RESEND_COOLDOWN_SECONDS);

    const canResend = secondsLeft <= 0;
    const timerLabel = useMemo(() => {
        const s = Math.max(0, secondsLeft);
        return `00:${String(s).padStart(2, '0')}`;
    }, [secondsLeft]);

    useEffect(() => {
        if (canResend) return;
        const id = window.setInterval(() => setSecondsLeft((prev) => prev - 1), 1000);
        return () => window.clearInterval(id);
    }, [canResend]);

    const handleResend = async () => {
        if (!canResend) return;
        setSecondsLeft(RESEND_COOLDOWN_SECONDS);
        try {
            await onResend();
            message.success(ValidationMessages.OTP_RESENT);
        } catch (e) {
            const err = e as Error;
            message.error(err.message || 'Failed to resend code');
            setSecondsLeft(0);
        }
    };

    const handleFinish = () => {
        onVerify();
    };

    return (
        <AuthLayout
            title="Verify Your Code"
            description={`Enter the 6-digit code sent to ${email}`}
            onBackClick={onBack}
        >
            <Form
                form={form}
                layout="vertical"
                onFinish={handleFinish}
                initialValues={{ otp: value }}
                style={{ display: 'flex', flexDirection: 'column', flex: 1 }}
            >
                <Form.Item
                    name="otp"
                    label="Verification Code"
                    rules={[
                        { required: true, message: ValidationMessages.OTP_REQUIRED },
                        { len: 6, message: ValidationMessages.OTP_LEN_6 },
                    ]}
                >
                    <Input.OTP
                        length={6}
                        value={value}
                        onChange={(next) => onChange(next)}
                        autoFocus
                        style={{ borderRadius: 12, height: 52 }}
                    />
                </Form.Item>

                <div className="auth-resend">
                    <span className="auth-resend-text">Didn&apos;t receive the code?</span>{' '}
                    {canResend ? (
                        <span className="auth-resend-link" onClick={handleResend}>
                            Resend Code
                        </span>
                    ) : (
                        <span className="auth-resend-disabled">Resend in {timerLabel}</span>
                    )}
                </div>

                <Form.Item style={{ marginTop: 'auto', marginBottom: 0 }}>
                    <PrimaryButton htmlType="submit" loading={isLoading}>
                        Verify & Login
                    </PrimaryButton>
                </Form.Item>
            </Form>
        </AuthLayout>
    );
};

export default StepVerifyOtp;

