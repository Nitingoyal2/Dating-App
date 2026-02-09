import React, { useRef } from "react";
import { CloseOutlined } from "@ant-design/icons";
import "./ImageUpload.css";

export interface ProfilePhoto {
  id?: string;
  url: string;
  is_primary?: boolean;
}

interface ImageUploadProps {
  photos: ProfilePhoto[];
  maxPhotos?: number;
  onChange: (photos: ProfilePhoto[]) => void;
  onPreview?: () => void;
  uploadImage: (file: File) => Promise<ProfilePhoto>;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  photos,
  maxPhotos = 9,
  onChange,
  onPreview,
  uploadImage,
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const photoSlots = Array.from({ length: maxPhotos }).map((_, index) => ({
    index,
    photo: photos[index] || null,
  }));

  /* ---------------- Remove ---------------- */
  const handleRemove = (index: number) => {
    const updated = photos.filter((_, i) => i !== index);
    onChange(updated);
  };

  /* ---------------- Add ---------------- */
  const handleAddClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const uploadedPhoto = await uploadImage(file);
      onChange([...photos, uploadedPhoto]);
    } catch (err) {
      console.error("Image upload failed", err);
    } finally {
      e.target.value = "";
    }
  };

  return (
    <div className="edit-profile-section">
      <div className="edit-profile-section-header">
        <h2 className="edit-profile-section-title">UPLOAD IMAGES</h2>
        {onPreview && (
          <button
            className="edit-profile-preview-link-inline"
            onClick={onPreview}
          >
            Preview
          </button>
        )}
      </div>

      <div className="edit-profile-photos-grid">
        {photoSlots.map(({ photo }, index) => (
          <div key={index} className="edit-profile-photo-slot">
            {photo ? (
              <div className="edit-profile-photo-wrapper">
                <img
                  src={`${import.meta.env.VITE_API_BASE_URL || ""}${photo.url}`}
                  alt={`Photo ${index + 1}`}
                  className="edit-profile-photo"
                />
                <button
                  className="edit-profile-photo-remove"
                  onClick={() => handleRemove(index)}
                >
                  <CloseOutlined />
                </button>
              </div>
            ) : (
              <button
                className="edit-profile-photo-add"
                onClick={handleAddClick}
                disabled={photos.length >= maxPhotos}
              >
                <span className="edit-profile-photo-add-icon">+</span>
              </button>
            )}
          </div>
        ))}
      </div>

      <p className="edit-profile-photos-hint">
        Drag and drop to reorder Photos
      </p>

      {/* Hidden input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={handleFileChange}
      />
    </div>
  );
};

export default ImageUpload;