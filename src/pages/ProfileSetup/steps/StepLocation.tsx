import { Space } from 'antd';
import type { StepLocationProps } from '@interfaces';
import AuthLayout from '@components/AuthLayout';
import { PrimaryButton } from '@components/Button';
import { LocationIcon } from '@/utils/svg';

const StepLocation = ({ onAllow, onSkip, onBack }: StepLocationProps) => {
    const handleAllowLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    onAllow({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    });
                },
                () => onSkip()
            );
        } else {
            onSkip();
        }
    };

    return (
        <AuthLayout
            title="Allow Location"
            description="We use your location to show you potential matches in your area."
            onBackClick={onBack}
            centered
        >
            <div className="auth-location-icon">
                <LocationIcon />
            </div>

            <Space direction="vertical" size="middle" style={{ width: '100%', marginTop: '24px' }}>
                <PrimaryButton onClick={handleAllowLocation}>
                    Continue
                </PrimaryButton>
                <PrimaryButton variant="text" onClick={onSkip}>
                    Not Now
                </PrimaryButton>
            </Space>
        </AuthLayout>
    );
};

export default StepLocation;
