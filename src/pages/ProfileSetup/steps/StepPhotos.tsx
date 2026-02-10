import React, { useRef, useEffect } from 'react';
import { message } from 'antd';
import { PlusOutlined, CloseOutlined, EyeFilled } from '@ant-design/icons';
import type { StepPhotosProps, PhotoItem } from '@interfaces';
import AuthLayout from '@components/AuthLayout';
import { PrimaryButton } from '@components/Button';
import { ValidationMessages } from '@constants';
import './StepPhotos.css';

const MAX_PHOTOS = 6;
const MIN_PHOTOS = 3;
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

const StepPhotos = ({ value, onChange, onNext, onBack }: StepPhotosProps) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [preview, setPreview] = React.useState<string | null>(null);
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

    const handlePreview = (url: string) => {
        setPreview(url);
    };

    const renderSlots = () => {
        // Show all filled slots
        const slots = value.map((photoItem, index) => (
            <div
                key={`photo-${index}`}
                className="auth-photo-slot filled"
            >
                <img src={photoItem.preview} alt={`Photo ${index + 1}`} />

                {/* Preview Overlay */}
                <div
                    className="auth-photo-overlay"
                    onClick={() => handlePreview(photoItem.preview)}
                >
                    <EyeFilled />
                </div>

                <button
                    type="button"
                    className="auth-photo-remove"
                    onClick={(e) => {
                        e.stopPropagation();
                        handleRemovePhoto(index);
                    }}
                >
                    <CloseOutlined style={{ fontSize: 12 }} />
                </button>
            </div>
        ));

        // Add ONE empty slot if we haven't reached max photos
        if (value.length < MAX_PHOTOS) {
            slots.push(
                <div
                    key="add-slot"
                    className="auth-photo-slot"
                    onClick={() => fileInputRef.current?.click()}
                >
                    <span className="auth-photo-add">
                        <PlusOutlined />
                    </span>
                </div>
            );
        }

        return slots;
    };

    return (
        <AuthLayout
            title="Add Photos"
            description={`Add at least ${MIN_PHOTOS} photos to continue`}
            onBackClick={onBack}
        >
            {preview && (
                <div className="preview-photo-overlay" onClick={() => setPreview(null)}>
                    <img src={preview} alt="Preview" className="preview-photo" onClick={(e) => e.stopPropagation()} />
                    <button className="preview-close-btn" onClick={() => setPreview(null)}>
                        <CloseOutlined />
                    </button>
                </div>
            )}
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
