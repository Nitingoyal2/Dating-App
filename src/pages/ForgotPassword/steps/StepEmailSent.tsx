import { SuccessIcon } from '@/utils/svg';
import AuthLayout from '@components/AuthLayout';
import { PrimaryButton } from '@components/Button';
import type { StepEmailSentProps } from '@interfaces';

const StepEmailSent = ({ email, onNext, onBack }: StepEmailSentProps) => {
    return (
        <AuthLayout
            title="Check Your Email"
            description={`We've sent a 6-digit verification code to ${email}. Enter the code to recover your account.`}
            onBackClick={onBack}
        >
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                flex: 1,
            }}>

                <SuccessIcon />

                <p style={{
                    color: 'var(--color-text-secondary)',
                    textAlign: 'center',
                    fontSize: 14,
                    lineHeight: 1.6,
                    marginBottom: 40,
                }}>
                    Didn't receive the email? Check your spam folder or make sure you entered the correct email address.
                </p>

                <div style={{ marginTop: 'auto', width: '100%' }}>
                    <PrimaryButton onClick={onNext}>
                        Enter Code
                    </PrimaryButton>
                </div>
            </div>
        </AuthLayout>
    );
};

export default StepEmailSent;

