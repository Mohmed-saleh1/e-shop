import React from "react";

// Interface defining props for FieldForm component
interface FieldFormProps {
  label: string; // Label text for the input field
  placeholder: string; // Placeholder text for the input field
  type?: string; // Type of input (default is "text")
  className?: string; // Additional styles for the component
}

// Functional component for creating a labeled form field
const FieldForm: React.FC<FieldFormProps> = ({ 
  label, 
  placeholder, 
  type = "text", 
  className 
}) => {
  return (
    <div className={` ${className}`}>
      {/* Label for the input field */}
      <label className="md:text-[24px]">{label}</label>
      <br />
      {/* Input field with dynamic type, placeholder, and custom styles */}
      <input 
        type={type} 
        placeholder={placeholder} 
        className={`h-[35px] md:h-[42px] p-4 md:p-6 border-[2px] border-[#0000007D] border-opacity-[49%] w-[100%] ${className}`} 
      />
    </div>
  );
};

export default FieldForm;
