import React, { useEffect, useRef, useState } from "react";
import { Checkbox, Radio } from "antd";
import { EditOutlined, EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import type { FormFieldProps, ValidationRule } from "@/types";
import "./FormField.css";

function validateValue(value: string, rules: ValidationRule[]): string | null {
  for (const rule of rules) {
    switch (rule.type) {
      case "required":
        if (!value?.trim()) return rule.message;
        break;

      case "minLength":
        if (value.length < rule.value) return rule.message;
        break;

      case "maxLength":
        if (value.length > rule.value) return rule.message;
        break;

      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return rule.message;
        break;

      case "number":
        if (isNaN(Number(value))) return rule.message;
        break;

      case "url":
        try {
          new URL(value);
        } catch {
          return rule.message;
        }
        break;

      case "date":
        if (isNaN(Date.parse(value))) return rule.message;
        break;
    }
  }

  return null;
}

const FormField = (props: FormFieldProps) => {
  const { label, placeholder } = props;
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const [isEditing, setIsEditing] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const runValidation = (value: string) => {
    if (!props.rules) return;
    const errorMsg = validateValue(value, props.rules);
    setError(errorMsg);
  };

  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setIsEditing(false);
        if (!Array.isArray(props?.value)) runValidation(props?.value);
      }
    }

    if (isEditing) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isEditing]);

  switch (props.type) {
    case "textarea":
      return (
        <ErrorWrapper error={error}>
          <div className="edit-profile-field" ref={wrapperRef}>
            <div className="edit-profile-field-header">
              <label className="edit-profile-field-label">{label}</label>
              <span>{props?.value?.length ?? 0}/500</span>
            </div>

            {!isEditing ?
              <div className="about-view-box">
                <div className="about-view-text">
                  {props?.value || placeholder}
                </div>

                <button
                  className="edit-profile-edit-icon-about"
                  onClick={() => {
                    setError(null);
                    setIsEditing(true);
                  }}
                >
                  <EditOutlined />
                </button>
              </div>
            : <textarea
                rows={7}
                name={props.name}
                maxLength={500}
                autoFocus
                value={props?.value}
                onChange={(e) => props?.onChange(e.target.value)}
                className="edit-profile-textarea"
                placeholder={placeholder}
              />
            }
          </div>
        </ErrorWrapper>
      );

    case "input":
      const isPassword = props.inputType === "password";

      return (
        <ErrorWrapper error={error}>
          <div className="edit-profile-field" ref={wrapperRef}>
            <div className="edit-profile-field-header">
              <label className="edit-profile-field-label">{label}</label>
            </div>

            {!isEditing ?
              <>
                <div className="about-view-box">
                  <div className="about-view-text">
                    {isPassword ?
                      props.value ?
                        "••••••••"
                      : placeholder
                    : props.value || placeholder}
                  </div>

                  <button
                    className="edit-profile-edit-icon-about"
                    onClick={() => {
                      setError(null);
                      setIsEditing(true);
                      setShowPassword(false);
                    }}
                  >
                    <EditOutlined />
                  </button>
                </div>
              </>
            : <div
                className={isPassword ? "password-input-wrapper" : undefined}
              >
                <input
                  type={
                    isPassword ?
                      showPassword ?
                        "text"
                      : "password"
                    : (props.inputType ?? "text")
                  }
                  name={props.name}
                  value={props.value}
                  onChange={(e) => props.onChange(e.target.value)}
                  className="edit-profile-input"
                  placeholder={placeholder}
                  autoFocus
                />

                {isPassword && (
                  <button
                    className="edit-profile-edit-icon-about"
                    onClick={() => setShowPassword((p) => !p)}
                  >
                    {showPassword ?
                      <EyeInvisibleFilled />
                    : <EyeFilled />}
                  </button>
                )}
              </div>
            }
          </div>
        </ErrorWrapper>
      );
    case "radio":
      return (
        <ErrorWrapper error={error}>
          <div className="edit-profile-field" ref={wrapperRef}>
            <label className="edit-profile-field-label">{label}</label>

            {!isEditing ?
              <>
                <div className="about-view-box">
                  <div className="radio-view-text">
                    {props?.value || placeholder}
                  </div>

                  <button
                    className="edit-profile-edit-icon-about"
                    onClick={() => {
                      setError(null);
                      setIsEditing(true);
                    }}
                  >
                    <EditOutlined />
                  </button>
                </div>
                {error && <span className="edit-profile-error">{error}</span>}
              </>
            : <Radio.Group
                name={props.name}
                value={props?.value}
                onChange={(e) => props?.onChange(e.target.value)}
                className="edit-profile-gender-group"
              >
                {props?.radioValue?.map((item) => (
                  <Radio key={item} value={item} className="edit-profile-radio">
                    {item}
                  </Radio>
                ))}
              </Radio.Group>
            }
          </div>
        </ErrorWrapper>
      );

    case "select":
      return (
        <ErrorWrapper error={error}>
          <div className="edit-profile-field is-select" ref={wrapperRef}>
            <label className="edit-profile-field-label">{label}</label>

            {!isEditing ?
              <>
                <div className="about-view-box">
                  <div className="about-view-text">
                    {props?.options?.find((opt) => opt?.value === props?.value)
                      ?.label || placeholder}
                  </div>

                  <button
                    className="edit-profile-edit-icon-about"
                    onClick={() => {
                      setError(null);
                      setIsEditing(true);
                    }}
                  >
                    <EditOutlined />
                  </button>
                </div>
                {error && <span className="edit-profile-error">{error}</span>}
              </>
            : <select
                value={props.value}
                name={props.name}
                onChange={(e) => props.onChange(e.target.value)}
                className="edit-profile-select"
              >
                <option value="">{placeholder}</option>
                {props?.options.map((opt) => (
                  <option key={opt?.value} value={opt?.value}>
                    {opt?.label}
                  </option>
                ))}
              </select>
            }
          </div>
        </ErrorWrapper>
      );

    case "checkbox":
      return (
        <ErrorWrapper error={error}>
          <div className="edit-profile-field" ref={wrapperRef}>
            <label className="edit-profile-field-label">{label}</label>

            {!isEditing ?
              <>
                <div className="about-view-box">
                  <div className="radio-view-text">
                    {props?.value?.length ?
                      props.value.join(", ")
                    : placeholder}
                  </div>

                  <button
                    className="edit-profile-edit-icon-about"
                    onClick={() => {
                      setError(null);
                      setIsEditing(true);
                    }}
                  >
                    <EditOutlined />
                  </button>
                </div>

                {error && <span className="edit-profile-error">{error}</span>}
              </>
            : <Checkbox.Group
                name={props.name}
                value={props?.value || []}
                onChange={(checkedValues) => props?.onChange(checkedValues)}
                className="edit-profile-checkbox-group"
              >
                {props?.options?.map((item) => (
                  <Checkbox
                    key={item?.label}
                    value={item?.value}
                    className="edit-profile-checkbox"
                  >
                    {item?.label}
                  </Checkbox>
                ))}
              </Checkbox.Group>
            }
          </div>
        </ErrorWrapper>
      );

    default:
      return null;
  }
};

export default FormField;

const ErrorWrapper = ({
  error,
  children,
}: {
  error: string | null;
  children: React.ReactNode;
}) => {
  return (
    <>
      {children}
      {error && <span className="edit-profile-error">{error}</span>}
    </>
  );
};
