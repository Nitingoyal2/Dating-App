import { useRef } from 'react';
import { message } from 'antd';
import { PlusOutlined, CloseOutlined } from '@ant-design/icons';
import type { StepPhotosProps } from '@interfaces';
import AuthLayout from '@components/AuthLayout';
import { PrimaryButton } from '@components/Button';
import { ValidationMessages } from '@constants';

const MAX_PHOTOS = 6;
const MIN_PHOTOS = 3;

const StepPhotos = ({ value, onChange, onNext, onBack }: StepPhotosProps) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const isValid = value.length >= MIN_PHOTOS;

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files || files.length === 0) return;

        const file = files[0];

        if (!file.type.startsWith('image/')) {
            message.error(ValidationMessages.PHOTO_INVALID_TYPE);
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            message.error(ValidationMessages.PHOTO_SIZE_LIMIT);
            return;
        }

        if (value.length < MAX_PHOTOS) {
            const reader = new FileReader();
            reader.onloadend = () => {
                onChange([...value, reader.result as string]);
                message.success(ValidationMessages.PHOTO_ADDED);
            };
            reader.readAsDataURL(file);
        }

        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    const handleRemovePhoto = (index: number) => {
        onChange(value.filter((_, i) => i !== index));
        message.info(ValidationMessages.PHOTO_REMOVED);
    };

    const renderSlots = () => {
        return Array.from({ length: MAX_PHOTOS }, (_, i) => {
            const photo = value[i];
            return (
                <div
                    key={i}
                    className={`auth-photo-slot ${photo ? 'filled' : ''}`}
                    onClick={!photo ? () => fileInputRef.current?.click() : undefined}
                >
                    {photo ? (
                        <>
                            <img src={photo} alt={`Photo ${i + 1}`} />
                            <button
                                type="button"
                                className="auth-photo-remove"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleRemovePhoto(i);
                                }}
                            >
                                <CloseOutlined style={{ fontSize:8 }} />
                            </button>
                        </>
                    ) : (
                        <span className="auth-photo-add">
                            <PlusOutlined />
                        </span>
                    )}
                </div>
            );
        });
    };

    return (
        <AuthLayout
            title="Add Photos"
            description={`Add at least ${MIN_PHOTOS} photos to continue`}
            onBackClick={onBack}
        >
            <div className="auth-photos-grid">{renderSlots()}</div>

            <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: 'none' }}
            />

            <PrimaryButton
                disabled={!isValid}
                onClick={onNext}
                style={{ marginTop: '24px' }}
            >
                Continue
            </PrimaryButton>
        </AuthLayout>
    );
};

export default StepPhotos;
