import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import { Routes } from '@/types';
import { useAppDispatch } from '@store/hooks';
import { loginSuccess } from '@store/slices';
import { forgotPasswordApi, forgotPasswordVerifyApi, forgotPasswordResendApi } from '@services';
import { StepEmail, StepEmailSent, StepVerifyOtp } from './steps';
import './ForgotPassword.css';

const ForgotPassword = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [currentStep, setCurrentStep] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep((prev) => prev - 1);
        } else {
            navigate(Routes.LOGIN);
        }
    };

    // Step 1: Send OTP to email
    const handleSendOtp = async () => {
        if (!email) return;

        setIsLoading(true);
        try {
            await forgotPasswordApi({ email });
            message.success('Verification code sent to your email');
            setCurrentStep(2);
        } catch (error) {
            const err = error as Error;
            message.error(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    // Step 2: Go to OTP verification
    const handleProceedToVerify = () => {
        setCurrentStep(3);
    };

    // Step 3: Verify OTP and login
    const handleVerifyOtp = async () => {
        if (!email || !otp) return;

        setIsLoading(true);
        try {
            const response = await forgotPasswordVerifyApi({ email, otp });

            // Login user with received token
            dispatch(
                loginSuccess({
                    user: {
                        id: response.user.id,
                        name: response.user.first_name,
                        email: response.user.email,
                    },
                    token: response.access_token,
                })
            );

            message.success('Account recovered successfully!');
            navigate(Routes.DASHBOARD, { replace: true });
        } catch (error) {
            const err = error as Error;
            message.error(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    // Resend OTP
    const handleResendOtp = async () => {
        await forgotPasswordResendApi({ email });
    };

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <StepEmail
                        value={email}
                        onChange={setEmail}
                        onNext={handleSendOtp}
                        onBack={handleBack}
                        isLoading={isLoading}
                    />
                );
            case 2:
                return (
                    <StepEmailSent
                        email={email}
                        onNext={handleProceedToVerify}
                        onBack={handleBack}
                    />
                );
            case 3:
                return (
                    <StepVerifyOtp
                        email={email}
                        value={otp}
                        onChange={setOtp}
                        onVerify={handleVerifyOtp}
                        onResend={handleResendOtp}
                        onBack={handleBack}
                        isLoading={isLoading}
                    />
                );
            default:
                return null;
        }
    };

    return <div style={{ minHeight: '100%' }}>{renderStep()}</div>;
};

export default ForgotPassword;
