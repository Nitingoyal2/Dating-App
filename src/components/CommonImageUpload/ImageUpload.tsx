import React, { useRef, useState, useEffect } from "react";
import { PlusOutlined, CloseOutlined, EyeFilled } from "@ant-design/icons";
import { message } from "antd";
import type {
  UploadedPhoto,
  ImageUploadProps,
} from "../../interfaces/imageUpload.interface";
import "./ImageUpload.css";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

const ImageUpload: React.FC<ImageUploadProps> = ({
  photos,
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

  /* ---------------- cleanup object urls ---------------- */

  useEffect(() => {
    return () => {
      photos.forEach((p) => {
        if (p.file) URL.revokeObjectURL(p.url);
      });
    };
  }, []);

  /* ---------------- validation ---------------- */

  const validateFile = (file: File): string | null => {
    if (!file.type.startsWith("image/")) return "Only image files are allowed";
    if (file.size > MAX_FILE_SIZE) return "Image must be smaller than 5MB";
    return null;
  };

  /* ---------------- reorder ---------------- */

  const reorderPhotos = (from: number, to: number) => {
    const updated = [...photos];
    const [moved] = updated.splice(from, 1);
    updated.splice(to, 0, moved);
    onChange(updated);
  };

  /* ---------------- file processing ---------------- */

  const processFiles = (files: FileList | File[]) => {
    if (photos.length >= maxPhotos) {
      message.warning("Maximum photos reached");
      return;
    }

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
      newPhotos.push({
        id: crypto.randomUUID(),
        url,
        file,
      });
    }

    if (newPhotos.length > 0) {
      onChange([...photos, ...newPhotos]);
      message.success(
        `${newPhotos.length} photo${newPhotos.length > 1 ? "s" : ""} added`
      );
    }
  };

  /* ---------------- handlers ---------------- */

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    processFiles(e.target.files);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleRemove = (index: number) => {
    const photo = photos[index];
    if (photo.file) URL.revokeObjectURL(photo.url);
    onChange(photos.filter((_, i) => i !== index));
  };

  const triggerPreview = (photo: UploadedPhoto) => {
    onPreview ? onPreview(photo) : setPreviewPhoto(photo);
  };

  const closePreview = () => setPreviewPhoto(null);

  /* ---------------- drag ---------------- */

  const handleDragOver = (e: React.DragEvent) => {
    if (isInternalDrag.current) return;
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const handleDrop = (e: React.DragEvent) => {
    if (isInternalDrag.current) {
      isInternalDrag.current = false;
      return;
    }

    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files?.length) {
      processFiles(e.dataTransfer.files);
    }
  };

  /* ---------------- slots ---------------- */

  const renderSlots = () => {
    const slots = photos.map((photo, index) => (
      <div
        key={photo.id || photo.url}
        className="image-upload-slot filled"
        draggable
        onDragStart={(e) => {
          isInternalDrag.current = true;
          setDragIndex(index);
          e.dataTransfer.effectAllowed = "move";
        }}
        onDragEnd={() => {
          setDragIndex(null);
          isInternalDrag.current = false;
        }}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          e.stopPropagation();

          if (dragIndex === null || dragIndex === index) return;
          reorderPhotos(dragIndex, index);
          setDragIndex(null);
          isInternalDrag.current = false;
        }}
      >
        <img src={photo.url} alt={`Photo ${index + 1}`} />

        <div
          className="image-upload-overlay"
          role="button"
          tabIndex={0}
          onClick={() => triggerPreview(photo)}
          onKeyDown={(e) => e.key === "Enter" && triggerPreview(photo)}
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

    if (photos.length < maxPhotos) {
      slots.push(
        <div
          key="add-slot"
          className="image-upload-slot"
          onClick={() => fileInputRef.current?.click()}
        >
          <span className="image-upload-add">
            <PlusOutlined />
          </span>
        </div>
      );
    }

    return slots;
  };

  /* ---------------- render ---------------- */

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
