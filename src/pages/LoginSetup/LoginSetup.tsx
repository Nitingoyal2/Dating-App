import { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { message } from 'antd';
import { useAppDispatch } from '@store/hooks';
import { loginSuccess } from '@store/slices';
import { Routes, LoginType } from '@/types';
import { loginApi, otpVerifyApi, resendOtpApi } from '@services';
import StepLogin from './steps/Login';
import OtpVerification from './steps/OtpVerification';
import { ValidationMessages } from '@constants';
import { ConfirmModal } from '@components/ConfirmModal';
import { ProfileStatus } from '@/types/enums';

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
    const [isLoading, setIsLoading] = useState(false);
    const [isSuspendedModalOpen, setIsSuspendedModalOpen] = useState(false);
    const [loginType, setLoginType] = useState<LoginType>(LoginType.PHONE);
    const [phone, setPhone] = useState('');
    const [countryCode, setCountryCode] = useState('1'); // Default US
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');

    const from = (location.state as { from?: { pathname?: string } } | null)?.from?.pathname || Routes.DASHBOARD;

    const identifier = loginType === LoginType.PHONE ? phone : email;
    const maskedIdentifier = useMemo(() => maskIdentifier(identifier), [identifier]);

    // Get phone number without country code
    const getPhoneWithoutCode = () => {
        if (phone.startsWith(countryCode)) {
            return phone.slice(countryCode.length);
        }
        return phone;
    };

    const handleBack = () => {
        if (currentStep === 2) {
            setCurrentStep(1);
            setOtp('');
            return;
        }
        navigate(Routes.HOME);
    };

    // Step 1: Send OTP
    const handleSendOtp = async () => {
        setIsLoading(true);
        try {
            const payload = loginType === LoginType.PHONE
                ? { country_code: `+${countryCode}`, phone: getPhoneWithoutCode() }
                : { email };

            await loginApi(payload);
            setCurrentStep(2);
        } catch (error) {
            const err = error as Error;
            const msg = (err.message).toLowerCase();
            const isSuspended = msg.includes(ProfileStatus.SUSPENDED.toLowerCase());
            if (isSuspended) {
                setIsSuspendedModalOpen(true);
                return;
            }

            message.error(err.message || ValidationMessages.OTP_SEND_FAILED);
        } finally {
            setIsLoading(false);
        }
    };

    // Step 2: Verify OTP
    const handleVerifyOtp = async () => {
        if (otp.length < 4) return;

        setIsLoading(true);
        try {
            const payload = loginType === LoginType.PHONE
                ? { country_code: `+${countryCode}`, phone: getPhoneWithoutCode(), otp }
                : { email, otp };

            const response = await otpVerifyApi(payload);

            dispatch(
                loginSuccess({
                    user: {
                        id: response.user.id,
                        name: response.user.first_name,
                        email: response.user.email ?? '',
                    },
                    token: response.access_token,
                })
            );

            navigate(from, { replace: true });
        } catch (error) {
            const err = error as Error;
            message.error(err.message || ValidationMessages.OTP_INVALID);
        } finally {
            setIsLoading(false);
        }
    };

    // Resend OTP
    const handleResendOtp = async () => {
        try {
            const payload = loginType === LoginType.PHONE
                ? { country_code: `+${countryCode}`, phone: getPhoneWithoutCode() }
                : { email };

            await resendOtpApi(payload);
            message.success(ValidationMessages.OTP_RESENT);
        } catch (error) {
            const err = error as Error;
            message.error(err.message || ValidationMessages.OTP_RESEND_FAILED);
        }
    };

    const renderStep = () => {
        if (currentStep === 1) {
            return (
                <StepLogin
                    loginType={loginType}
                    onLoginTypeChange={setLoginType}
                    phone={phone}
                    onPhoneChange={setPhone}
                    countryCode={countryCode}
                    onCountryCodeChange={setCountryCode}
                    email={email}
                    onEmailChange={setEmail}
                    onNext={handleSendOtp}
                    onBack={handleBack}
                    isLoading={isLoading}
                />
            );
        }

        return (
            <OtpVerification
                value={otp}
                onChange={setOtp}
                identifier={maskedIdentifier}
                onResend={handleResendOtp}
                onNext={handleVerifyOtp}
                onBack={handleBack}
                isLoading={isLoading}
            />
        );
    };

    return (
        <>
            {renderStep()}
            <ConfirmModal
                open={isSuspendedModalOpen}
                onClose={() => setIsSuspendedModalOpen(false)}
                onConfirm={() => setIsSuspendedModalOpen(false)}
                type="warning"
                title=""
                description={
                    'Your DateMe Account has been banned for activity that violates our Terms of Use.'
                }
                confirmText="Okay"
                showCancel={false}
                width={340}
            />
        </>
    );
};

export default LoginSetup;
