import { Space } from 'antd';
import { EnvironmentOutlined } from '@ant-design/icons';
import type { StepLocationProps } from '@interfaces';
import AuthLayout from '@components/AuthLayout';
import { PrimaryButton } from '@components/Button';

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
                <EnvironmentOutlined />
            </div>

            <Space direction="vertical" size="middle" style={{ width: '100%', marginTop: 'auto' }}>
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
