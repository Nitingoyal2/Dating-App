import { useState } from 'react';
import { DatePicker, Typography } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import type { StepBirthdayProps } from '@interfaces';
import AuthLayout from '@components/AuthLayout';
import { PrimaryButton } from '@components/Button';
import { ConfirmModal } from '@components/ConfirmModal';

const { Text } = Typography;

const StepBirthday = ({ value, onChange, onNext, onBack }: StepBirthdayProps) => {
    const [showConfirm, setShowConfirm] = useState(false);

    const dateValue = value ? dayjs(value) : null;
    const age = dateValue ? dayjs().diff(dateValue, 'year') : null;
    const isValid = age !== null && age >= 18;

    const handleDateChange = (date: Dayjs | null) => {
        if (date) onChange(date.format('YYYY-MM-DD'));
    };

    const handleConfirm = () => {
        setShowConfirm(false);
        onNext();
    };

    return (
        <AuthLayout title="What's your date of Birth?" onBackClick={onBack}>
            <DatePicker
                value={dateValue}
                onChange={handleDateChange}
                format="MM-DD-YYYY"
                placeholder="MM-DD-YYYY"
                suffixIcon={<CalendarOutlined />}
                size="large"
                style={{ width: '100%', height: 52, borderRadius: 12 }}
                disabledDate={(current) => current && current > dayjs().subtract(18, 'year')}
            />

            {age !== null && (
                <div className="auth-age-display">
                    <div className="auth-age-number">Age {age}</div>
                    <Text type="secondary" style={{ fontSize: 12 }}>
                        This can't be changed later
                    </Text>
                </div>
            )}

            <PrimaryButton
                disabled={!isValid}
                onClick={() => setShowConfirm(true)}
                style={{ marginTop: '24px' }}
            >
                Continue
            </PrimaryButton>

            <ConfirmModal
                open={showConfirm}
                onClose={() => setShowConfirm(false)}
                onConfirm={handleConfirm}
                type="success"
                title="Please confirm your info"
                description={
                    <>
                        {age} years old<br />
                        Born {dateValue?.format('MMM D, YYYY')}
                    </>
                }
                cancelText="Edit"
                confirmText="Confirm"
                cancelVariant="secondary"
                confirmVariant="primary"
            />
        </AuthLayout>
    );
};

export default StepBirthday;
