import { Space } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import type { StepSeekingProps, GenderType } from '@interfaces';
import AuthLayout from '@components/AuthLayout';
import { PrimaryButton } from '@components/Button';

const options: { value: GenderType; label: string }[] = [
    { value: 'man', label: 'Man' },
    { value: 'woman', label: 'Woman' },
];

const StepSeeking = ({ value, onChange, onNext, onBack }: StepSeekingProps) => {
    return (
        <AuthLayout title="Seeking a" onBackClick={onBack}>
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                {options.map((option) => (
                    <div
                        key={option.value}
                        className={`auth-option ${value === option.value ? 'selected' : ''}`}
                        onClick={() => onChange(option.value)}
                    >
                        <span className="auth-option-text">{option.label}</span>
                        <span className="auth-option-check">
                            <CheckOutlined />
                        </span>
                    </div>
                ))}
            </Space>

            <PrimaryButton
                disabled={!value}
                onClick={onNext}
                style={{ marginTop: 'auto' }}
            >
                Continue
            </PrimaryButton>
        </AuthLayout>
    );
};

export default StepSeeking;
