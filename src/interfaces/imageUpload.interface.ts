export interface ProfilePhoto {
  id?: string;
  url: string;
  is_primary?: boolean;
}

export interface ImageUploadProps {
  label?: string;
  description?: string;
  photos: string[];
  maxPhotos?: number;
  onChange: (photos: string[]) => void;
  onPreview?: () => void;
  uploadImage: (file: File) => Promise<ProfilePhoto>;
}


