import React from "react";

interface CarouselButtonProps {
  onClick: () => void;
  disabled: boolean;
  icon: React.ReactNode;
}

const CarouselButton = ({
  onClick,
  disabled,
  icon,
}: CarouselButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`p-3 md:p-5 bg-white rounded-full border border-black text-lg md:text-2xl flex justify-center items-center ${
        disabled ? "text-lightGray" : ""
      }`}
      disabled={disabled}
    >
      {icon}
    </button>
  );
};

export default CarouselButton;
