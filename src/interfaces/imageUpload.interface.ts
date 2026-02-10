export interface UploadedPhoto {
  id?: string;
  url: string; // Preview URL (blob:...) or Remote URL (http...)
  file?: File; // Associated file if it's a new upload
}

export interface ImageUploadProps {
  label?: string;
  description?: string;
  photos: UploadedPhoto[];
  maxPhotos?: number;
  minPhotos?: number;
  onChange: (photos: UploadedPhoto[]) => void;
  onPreview?: (photo: UploadedPhoto) => void;
}
