export type ValidationRule =
  | { type: "required"; message: string }
  | { type: "minLength"; value: number; message: string }
  | { type: "maxLength"; value: number; message: string }
  | { type: "email"; message: string }
  | { type: "number"; message: string }
  | { type: "url"; message: string }
  | { type: "date"; message: string };

export type InputType = "text" | "password" | "email" | "number" | "date" | "url";

export type BaseFormFieldProps = {
  name: string;
  label?: string;
  placeholder?: string;
  rules?: ValidationRule[];
};

export type TextFieldProps = BaseFormFieldProps & {
  type: "textarea" | "input";
  value: string;
  inputType?: InputType;
  onChange: (value: string) => void;
};

export type RadioFieldProps = BaseFormFieldProps & {
  type: "radio";
  value: string;
  radioValue: string[];
  onChange: (value: string) => void;
};

export type SelectFieldProps = BaseFormFieldProps & {
  type: "select";
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
};

export type CheckboxFieldProps = BaseFormFieldProps & {
  type: "checkbox";
  value: string[];
  options: { value: string; label: string }[];
  onChange: (value: string[]) => void;
};

export type FormFieldProps =
  | TextFieldProps
  | RadioFieldProps
  | SelectFieldProps
  | CheckboxFieldProps;


