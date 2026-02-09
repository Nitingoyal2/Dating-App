import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";

interface CommonDatePickerProps {
  label: string;
  value: Dayjs | null;
  onChange: (date: Dayjs | null) => void;
  placeholder?: string;
}

const CommonDatePicker = ({
  label,
  value,
  onChange,
  placeholder = "Select date",
}: CommonDatePickerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDateChange = (date: Dayjs | null) => {
    onChange(date);
    setIsOpen(false);
  };

  const formattedValue = value
    ? value.format("MMM D, YYYY")
    : placeholder;

  return (
    <div className="edit-profile-field">
      <label className="edit-profile-field-label">{label}</label>

      <div
        className="edit-profile-field-value edit-profile-birthday"
        onClick={() => setIsOpen(true)}
      >
        {isOpen ? (
          <input
            type="date"
            value={value?.format("YYYY-MM-DD") || ""}
            onChange={(e) =>
              handleDateChange(
                e.target.value ? dayjs(e.target.value) : null,
              )
            }
            autoFocus
          />
        ) : (
          <div>{formattedValue}</div>
        )}
      </div>
    </div>
  );
};

export default CommonDatePicker;