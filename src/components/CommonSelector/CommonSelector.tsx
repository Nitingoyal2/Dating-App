import React from "react";
import "./CommonSelector.css";
import { CheckIcon } from "@/utils/svg";
import type { CommonSelectorProps } from "@/interfaces";

const CommonSelector = <T extends string | number>({
  data,
  type,
  value,
  onChange,
}: CommonSelectorProps<T>) => {
  const isChecked = (id: T): boolean =>
    type === "checkbox"
      ? Array.isArray(value) && value.includes(id)
      : value === id;

  const handleClick = (id: T) => {
    if (!onChange) return;

    if (type === "checkbox") {
      const current = Array.isArray(value) ? value : [];
      onChange(
        current.includes(id)
          ? current.filter((v) => v !== id)
          : [...current, id]
      );
    } else {
      onChange(id);
    }
  };

  return (
    <div className="common-selector-container">
      {data.map((item) => (
        <div
          key={item.id}
          className="common-selector-item"
          onClick={() => handleClick(item.id)}
        >
          <h3>{item.label}</h3>

          {type === "radio" && (
            <span className={`radio ${isChecked(item.id) ? "active" : ""}`} />
          )}

          {type === "checkbox" && (
            <span className={`checkbox ${isChecked(item.id) ? "active" : ""}`}>
              <CheckIcon size={10} />
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default CommonSelector;