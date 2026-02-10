import React, { useRef } from "react";
import { CloseOutlined, EyeFilled } from "@ant-design/icons";
import "./ImageUpload.css";

export interface ProfilePhoto {
  id?: string;
  url: string;
  is_primary?: boolean;
}

interface ImageUploadProps {
  label?: string;
  description?: string;
  photos: string[];
  maxPhotos?: number;
  onChange: (photos: string[]) => void;
  onPreview?: () => void;
  uploadImage: (file: File) => Promise<ProfilePhoto>;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  photos,
  maxPhotos = 9,
  onChange,
  onPreview,
  uploadImage,
  label,
  description,
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [photoSlots, setPhotoSlots] = React.useState<
    { index: number; photo: string | null }[]
  >([
    {
      index: 0,
      photo: photos[0] || null,
    },
  ]);

  /* ---------------- Remove ---------------- */
  const handleRemove = (index: number) => {
    const updated = photos.filter((_, i) => i !== index);
    onChange(updated);
  };

  /* ---------------- Add ---------------- */
  const handleAddClick = () => {
    console.log("Add clicked");
    fileInputRef.current?.click();
  };

  const handlePreview = (photo: string | null) => {
    console.log("Preview clicked", photo);
    setPreview(photo);
  };

  const handleFileChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    setLoading(true);
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const uploadedPhoto = URL.createObjectURL(file);
      console.log("uploadedPhoto", uploadedPhoto);
      onChange([...photos, uploadedPhoto]);
      setPhotoSlots((prevSlots) => {
        const newSlots = [...prevSlots];
        newSlots[index].photo = uploadedPhoto;
        if (newSlots.length === maxPhotos) return newSlots;
        return [...newSlots, { index: newSlots.length, photo: null }];
      });
    } catch (err) {
      setLoading(false);
      console.error("Image upload failed", err);
    } finally {
      setLoading(false);
      e.target.value = "";
    }
  };

  return (
    <div className="edit-profile-section">
      {loading && (
        <div className="preview-photo-overlay">
          <div className="loading-spin"></div>
        </div>
      )}
      {preview && (
        <div className="preview-photo-overlay">
          <img src={preview} alt="Preview" className="preview-photo" />
          <button onClick={() => setPreview(null)}>
            <CloseOutlined />
          </button>
        </div>
      )}
      <div className="edit-profile-section-header">
        {label && <h2 className="edit-profile-section-title">{label}</h2>}
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
            {photo ?
              <div className="edit-profile-photo-wrapper">
                <img
                  src={photo}
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
            : <button
                className="edit-profile-photo-add"
                onClick={handleAddClick}
                disabled={photos.length >= maxPhotos}
              >
                <span className="edit-profile-photo-add-icon">+</span>
              </button>
            }

            {photo && (
              <div
                className="edit-profile-photo-overlay"
                onClick={() => handlePreview(photo)}
              >
                <EyeFilled />
              </div>
            )}
          </div>
        ))}
      </div>

      {description && <p className="edit-profile-photos-hint">{description}</p>}

      {/* Hidden input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={(e) => handleFileChange(e, photoSlots?.length - 1)}
      />
    </div>
  );
};

export default ImageUpload;
