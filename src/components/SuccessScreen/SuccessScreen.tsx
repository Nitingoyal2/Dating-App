import { Space, Typography } from 'antd';
import { PrimaryButton } from '@components/Button';
import type { SuccessScreenProps } from '@interfaces';
import './SuccessScreen.css';

const { Title, Text } = Typography;

const SuccessScreen = ({
    icon,
    title,
    description,
    buttonText,
    onButtonClick,
    secondaryButtonText,
    onSecondaryClick,
    showHearts = true,
}: SuccessScreenProps) => {
    return (
        <div className="success-screen">
            {showHearts && (
                <div className="success-hearts-bg">
                    <div className="heart heart-1">💗</div>
                    <div className="heart heart-2">💕</div>
                    <div className="heart heart-3">💗</div>
                    <div className="heart heart-4">💕</div>
                </div>
            )}

            <div className="success-content">
                <div className="success-icon">{icon}</div>
                <Title level={2} className="success-title" style={{ margin: 0 }}>
                    {title}
                </Title>
                {description && (
                    <Text type="secondary" className="success-description">
                        {description}
                    </Text>
                )}
            </div>

            <Space direction="vertical" size="middle" className="success-actions">
                <PrimaryButton onClick={onButtonClick}>
                    {buttonText}
                </PrimaryButton>

                {secondaryButtonText && onSecondaryClick && (
                    <PrimaryButton variant="text" onClick={onSecondaryClick}>
                        {secondaryButtonText}
                    </PrimaryButton>
                )}
            </Space>
        </div>
    );
};

export default SuccessScreen;
