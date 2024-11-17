import React from "react";

const CustomButton = ({
  label,
  otherClasses,
}: {
  label: string;
  otherClasses?: string;
}) => {
  return (
    <button
      className={`font-abhaya font-bold text-[#1E1E1E] text-xl px-14 py-4 border border-black rounded-[4px] hover:bg-milk transition-all duration-500 ${otherClasses}`}
    >
      {label}
    </button>
  );
};

export default CustomButton;
