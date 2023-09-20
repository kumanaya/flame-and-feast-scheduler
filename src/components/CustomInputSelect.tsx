import React, { useState } from "react";
import { FieldError } from "react-hook-form";

interface InputProps {
  register: any;
  name: string;
  options: { value: string; label: string }[];
  error?: FieldError | undefined;
  disabled?: boolean;
}

const CustomInputSelect: React.FC<InputProps> = ({
  register,
  options,
  name,
  error = false,
}) => {
  const isError = typeof error === "object" && !!error;
  const [formattedValue, setFormattedValue] = useState("");

  const handleInputChange = (value: string) => {
    setFormattedValue(value);
  };

  return (
    <div>
      <select
        {...register(name)}
        value={formattedValue}
        className={`w-full border-b border-gray-300 p-2 ${
          isError ? "border-red-500" : "border-gray-500"
        }`}
        onChange={(event) => handleInputChange(event.target.value)}
      >
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {isError && "message" in error && error.message && (
        <p className="mt-4 text-red-500">{error.message}</p>
      )}
    </div>
  );
};

export default CustomInputSelect;
