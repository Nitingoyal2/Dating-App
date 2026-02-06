import { useRef, useEffect } from 'react';
import { message } from 'antd';
import { PlusOutlined, CloseOutlined } from '@ant-design/icons';
import type { StepPhotosProps, PhotoItem } from '@interfaces';
import AuthLayout from '@components/AuthLayout';
import { PrimaryButton } from '@components/Button';
import { ValidationMessages } from '@constants';

const MAX_PHOTOS = 6;
const MIN_PHOTOS = 3;
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

const StepPhotos = ({ value, onChange, onNext, onBack }: StepPhotosProps) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const isValid = value.length >= MIN_PHOTOS;

    // Cleanup object URLs on unmount to prevent memory leaks
    useEffect(() => {
        return () => {
            value.forEach((item) => URL.revokeObjectURL(item.preview));
        };
    }, []);

    const validateFile = (file: File): string | null => {
        if (!file.type.startsWith('image/')) {
            return ValidationMessages.PHOTO_INVALID_TYPE;
        }
        if (file.size > MAX_FILE_SIZE) {
            return ValidationMessages.PHOTO_SIZE_LIMIT;
        }
        return null;
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files || files.length === 0) return;

        const remainingSlots = MAX_PHOTOS - value.length;
        const filesToProcess = Array.from(files).slice(0, remainingSlots);
        const newPhotos: PhotoItem[] = [];

        for (const file of filesToProcess) {
            const error = validateFile(file);
            if (error) {
                message.error(error);
                continue;
            }

            newPhotos.push({
                file,
                preview: URL.createObjectURL(file),
            });
        }

        if (newPhotos.length > 0) {
            onChange([...value, ...newPhotos]);
            message.success(
                newPhotos.length === 1
                    ? ValidationMessages.PHOTO_ADDED
                    : `${newPhotos.length} photos added`
            );
        }

        // Reset input to allow re-selecting same file
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    const handleRemovePhoto = (index: number) => {
        // Revoke the object URL before removing to prevent memory leaks
        URL.revokeObjectURL(value[index].preview);
        onChange(value.filter((_, i) => i !== index));
        message.info(ValidationMessages.PHOTO_REMOVED);
    };

    const renderSlots = () => {
        return Array.from({ length: MAX_PHOTOS }, (_, i) => {
            const photoItem = value[i];
            return (
                <div
                    key={i}
                    className={`auth-photo-slot ${photoItem ? 'filled' : ''}`}
                    onClick={!photoItem ? () => fileInputRef.current?.click() : undefined}
                >
                    {photoItem ? (
                        <>
                            <img src={photoItem.preview} alt={`Photo ${i + 1}`} />
                            <button
                                type="button"
                                className="auth-photo-remove"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleRemovePhoto(i);
                                }}
                            >
                                <CloseOutlined style={{ fontSize: 8 }} />
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
                multiple
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
