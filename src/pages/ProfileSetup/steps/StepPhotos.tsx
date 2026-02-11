import { useEffect } from 'react';
import type { StepPhotosProps, PhotoItem } from '@interfaces';
import AuthLayout from '@components/AuthLayout';
import { PrimaryButton } from '@components/Button';
import ImageUpload from '@/components/CommonImageUpload/ImageUpload';
import type { UploadedPhoto } from '@/interfaces/imageUpload.interface';
import './StepPhotos.css';

const StepPhotos = ({ value, onChange, onNext, onBack }: StepPhotosProps) => {
    const MIN_PHOTOS = 3;
    const isValid = value.length >= MIN_PHOTOS;

    // Cleanup object URLs on unmount to prevent memory leaks
    useEffect(() => {
        return () => {
            value.forEach((item) => URL.revokeObjectURL(item.preview));
        };
    }, []);

    const handlePhotosChange = (uploadedPhotos: UploadedPhoto[]) => {
        const newPhotos: PhotoItem[] = uploadedPhotos.map((p) => ({
            file: p.file!,
            preview: p.url,
        }));
        onChange(newPhotos);
    };

    // Map PhotoItem[] to UploadedPhoto[]
    const photosForUpload: UploadedPhoto[] = value.map(p => ({
        url: p.preview,
        file: p.file
    }));

    return (
        <AuthLayout
            title="Add Photos"
            description={`Add at least ${MIN_PHOTOS} photos to continue`}
            onBackClick={onBack}
        >
            <ImageUpload
                photos={photosForUpload}
                onChange={handlePhotosChange}
                maxPhotos={6}
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
