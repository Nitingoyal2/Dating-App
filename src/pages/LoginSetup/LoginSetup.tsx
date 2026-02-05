import { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { message } from 'antd';
import { useAppDispatch } from '@store/hooks';
import { loginSuccess } from '@store/slices';
import { Routes } from '@/types';
import StepLogin from './steps/Login';
import OtpVerification from './steps/OtpVerification';
import type { LoginIdentifierType } from '@interfaces';
import { ValidationMessages } from '@constants';

const maskIdentifier = (identifier: string) => {
    if (!identifier) return '';
    if (identifier.includes('@')) {
        const [name, domain] = identifier.split('@');
        const safeName = name.length <= 2 ? `${name[0] ?? ''}*` : `${name.slice(0, 2)}***`;
        return `${safeName}@${domain}`;
    }
    // phone: keep last 3-4 digits
    const last = identifier.slice(-4);
    return `***${last}`;
};

const LoginSetup = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useAppDispatch();

    const [currentStep, setCurrentStep] = useState<1 | 2>(1);
    const [loginType, setLoginType] = useState<LoginIdentifierType>('phone');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');

    const from = (location.state as { from?: { pathname?: string } } | null)?.from?.pathname || Routes.DASHBOARD;

    const identifier = loginType === 'phone' ? phone : email;
    const maskedIdentifier = useMemo(() => maskIdentifier(identifier), [identifier]);

    const handleBack = () => {
        if (currentStep === 2) {
            setCurrentStep(1);
            return;
        }
        navigate(Routes.HOME);
    };

    const handleNext = () => {
        if (currentStep === 1) {
            setCurrentStep(2);
            return;
        }

        // Demo login success after OTP step
        dispatch(
            loginSuccess({
                user: {
                    id: '1',
                    name: email ? email.split('@')[0] || 'User' : 'User',
                    email: email || '',
                },
                token: 'demo-token-123',
            })
        );
        navigate(from, { replace: true });
    };

    const renderStep = () => {
        if (currentStep === 1) {
            return (
                <StepLogin
                    loginType={loginType}
                    onLoginTypeChange={setLoginType}
                    phone={phone}
                    onPhoneChange={setPhone}
                    email={email}
                    onEmailChange={setEmail}
                    onNext={handleNext}
                    onBack={handleBack}
                />
            );
        }

        return (
            <OtpVerification
                value={otp}
                onChange={setOtp}
                identifier={maskedIdentifier}
                onResend={() => {
                    message.success(ValidationMessages.OTP_RESENT);
                }}
                onNext={handleNext}
                onBack={handleBack}
            />
        );
    };

    return renderStep();
};

export default LoginSetup;