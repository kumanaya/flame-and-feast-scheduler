import React, { useState } from "react";
import { FieldError } from "react-hook-form";

interface InputProps {
  register: any;
  type: string;
  name: string;
  error?: FieldError | undefined;
  disabled?: boolean;
}

const CustomInput: React.FC<InputProps> = ({
  register,
  type = "text",
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
      <input
        {...register(name)}
        type={type}
        value={formattedValue}
        className={`w-full border-b border-gray-300 p-2 bg-transparent ${
          isError ? "border-red-500" : "border-gray-500"
        }`}
        onChange={(event) => handleInputChange(event.target.value)}
      />
      {isError && "message" in error && error.message && (
        <p className="message-error mt-4 text-red-500">{error.message}</p>
      )}
    </div>
  );
};

export default CustomInput;
