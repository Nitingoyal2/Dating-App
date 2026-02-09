import React, { useEffect } from "react";
import "./CommonTextArea.css";
import { EditOutlined } from "@ant-design/icons";
import type { CommonTextareaProps } from "@/interfaces";

const CommonTextarea = ({
  value,
  onChange,
  label = "About Me",
  placeholder = "Enter about me...",
}: CommonTextareaProps) => {
  const [isAboutEditing, setIsAboutEditing] = React.useState(false);
  const aboutWrapperRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (
        aboutWrapperRef.current &&
        !aboutWrapperRef.current.contains(e.target as Node)
      ) {
        setIsAboutEditing(false);
      }
    }

    if (isAboutEditing) {
      document.addEventListener("mousedown", handleOutside);
    }

    return () => document.removeEventListener("mousedown", handleOutside);
  }, [isAboutEditing]);
  return (
    <div className="edit-profile-field" ref={aboutWrapperRef}>
      <div className="edit-profile-field-header">
        <label className="edit-profile-field-label">{label}</label>
        <span>{value?.length ?? 0}/500</span>
      </div>

      {!isAboutEditing ?
        <div className="about-view-box">
          <div className="about-view-text">{value || placeholder}</div>

          <button
            className="edit-profile-edit-icon-about"
            onClick={() => setIsAboutEditing(true)}
          >
            <EditOutlined />
          </button>
        </div>
      : <textarea
          rows={7}
          maxLength={500}
          autoFocus
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="edit-profile-textarea"
          placeholder={placeholder}
        />
      }
    </div>
  );
};

export default CommonTextarea;
