import React from "react";

interface FormFieldProps {
  id: string;
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
  autoComplete?: string;
  pattern?: string;
  required?: boolean;
  className?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  name,
  type = "text",
  placeholder = "",
  value,
  onChange,
  onKeyDown,
  autoComplete,
  pattern,
  required = false,
  className = "",
}) => {
  return (
    <div>
      <label htmlFor={id} className="block font-medium text-gray-600 mb-1">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        className={`w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 ${className}`}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        autoComplete={autoComplete}
        pattern={pattern}
        aria-required={required}
      />
    </div>
  );
};

export default FormField;
