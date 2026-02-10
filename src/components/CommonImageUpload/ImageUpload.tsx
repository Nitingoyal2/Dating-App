import React, { useRef, useState } from "react";
import { PlusOutlined, CloseOutlined, EyeFilled } from "@ant-design/icons";
import { message } from "antd";
import type {
  UploadedPhoto,
  ImageUploadProps,
} from "../../interfaces/imageUpload.interface";
import "./ImageUpload.css";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

const ImageUpload: React.FC<ImageUploadProps> = ({
  photos, // Expects UploadedPhoto[]
  maxPhotos = 6,
  onChange,
  onPreview,
  label,
  description,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewPhoto, setPreviewPhoto] = useState<UploadedPhoto | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const isInternalDrag = useRef(false);

  const validateFile = (file: File): string | null => {
    if (!file.type.startsWith("image/")) {
      return "Only image files are allowed";
    }
    if (file.size > MAX_FILE_SIZE) {
      return "Image must be smaller than 5MB";
    }
    return null;
  };

  const reorderPhotos = (from: number, to: number) => {
    const updated = [...photos];
    const [moved] = updated.splice(from, 1);
    updated.splice(to, 0, moved);
    onChange(updated);
  };

  const processFiles = (files: FileList | File[]) => {
    const remainingSlots = maxPhotos - photos.length;
    const filesToProcess = Array.from(files).slice(0, remainingSlots);
    const newPhotos: UploadedPhoto[] = [];

    for (const file of filesToProcess) {
      const error = validateFile(file);
      if (error) {
        message.error(error);
        continue;
      }

      const url = URL.createObjectURL(file);
      newPhotos.push({ url, file });
    }

    if (newPhotos.length > 0) {
      onChange([...photos, ...newPhotos]);
      message.success(
        `${newPhotos.length} photo${newPhotos.length > 1 ? "s" : ""} added`,
      );
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    processFiles(e.target.files);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleDragOver = (e: React.DragEvent) => {
    if (isInternalDrag.current) return;
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    if (isInternalDrag.current) {
      isInternalDrag.current = false;
      return;
    }
    e.preventDefault();
    setIsDragging(false);
    if (!e.dataTransfer.files || e.dataTransfer.files.length === 0) return;

    processFiles(e.dataTransfer.files);
  };

  const handleRemove = (index: number) => {
    const updated = photos.filter((_, i) => i !== index);
    onChange(updated);
  };

  const triggerPreview = (photo: UploadedPhoto) => {
    if (onPreview) {
      onPreview(photo);
    } else {
      setPreviewPhoto(photo);
    }
  };

  const closePreview = () => {
    setPreviewPhoto(null);
  };

  const renderSlots = () => {
    const slots = photos.map((photo, index) => (
      <div
        key={`photo-${index}-${photo.id || index}`}
        className="image-upload-slot filled"
        draggable
        onDragStart={(e) => {
          isInternalDrag.current = true;
          setDragIndex(index);
          e.dataTransfer.effectAllowed = "move";
          e.dataTransfer.setData("text/plain", "drag");
        }}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          e.stopPropagation(); // 🚨 THIS IS THE KEY

          if (dragIndex === null || dragIndex === index) return;

          reorderPhotos(dragIndex, index);
          setDragIndex(null);
          isInternalDrag.current = false;
        }}
      >
        <img src={photo.url} alt={`Photo ${index + 1}`} />

        {/* Preview Overlay */}
        <div
          className="image-upload-overlay"
          onClick={() => triggerPreview(photo)}
        >
          <EyeFilled />
        </div>

        <button
          type="button"
          className="image-upload-remove"
          onClick={(e) => {
            e.stopPropagation();
            handleRemove(index);
          }}
        >
          <CloseOutlined style={{ fontSize: 12 }} />
        </button>
      </div>
    ));

    // Add ONE empty slot if we haven't reached max photos
    if (photos.length < maxPhotos) {
      slots.push(
        <div
          key="add-slot"
          className="image-upload-slot"
          onClick={() => fileInputRef.current?.click()}
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDrop={(e) => {
            e.preventDefault();
            e.stopPropagation();

            // Ignore internal image reordering
            if (isInternalDrag.current) {
              isInternalDrag.current = false;
              return;
            }

            if (!e.dataTransfer.files || e.dataTransfer.files.length === 0)
              return;
            setIsDragging(false);
            processFiles(e.dataTransfer.files);
          }}
        >
          <span className="image-upload-add">
            <PlusOutlined />
          </span>
        </div>,
      );
    }

    return slots;
  };

  return (
    <div className="image-upload-container">
      {previewPhoto && (
        <div className="image-upload-preview-overlay" onClick={closePreview}>
          <img
            src={previewPhoto.url}
            alt="Preview"
            className="image-upload-preview-img"
            onClick={(e) => e.stopPropagation()}
          />
          <button className="image-upload-preview-close" onClick={closePreview}>
            <CloseOutlined />
          </button>
        </div>
      )}

      {label && <h2 className="image-upload-section-title">{label}</h2>}

      <div
        className={`image-upload-grid ${isDragging ? "dragging" : ""}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {renderSlots()}
      </div>
      {description && <p className="image-upload-hint">{description}</p>}

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default ImageUpload;
