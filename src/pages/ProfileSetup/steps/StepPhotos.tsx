import { useRef } from 'react';
import { message } from 'antd';
import { PlusOutlined, CloseOutlined } from '@ant-design/icons';
import type { StepPhotosProps } from '@interfaces';
import AuthLayout from '@components/AuthLayout';
import { PrimaryButton } from '@components/Button';

const MAX_PHOTOS = 6;
const MIN_PHOTOS = 2;

const StepPhotos = ({ value, onChange, onNext, onBack }: StepPhotosProps) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const isValid = value.length >= MIN_PHOTOS;

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files || files.length === 0) return;

        const file = files[0];

        if (!file.type.startsWith('image/')) {
            message.error('Please select an image file');
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            message.error('Image size should be less than 5MB');
            return;
        }

        if (value.length < MAX_PHOTOS) {
            const reader = new FileReader();
            reader.onloadend = () => {
                onChange([...value, reader.result as string]);
                message.success('Photo added successfully');
            };
            reader.readAsDataURL(file);
        }

        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    const handleRemovePhoto = (index: number) => {
        onChange(value.filter((_, i) => i !== index));
        message.info('Photo removed');
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
                                <CloseOutlined style={{ fontSize: 12 }} />
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
                style={{ marginTop: 'auto' }}
            >
                Continue
            </PrimaryButton>
        </AuthLayout>
    );
};

export default StepPhotos;
