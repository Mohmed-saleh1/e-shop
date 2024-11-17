import React from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

interface NavigationButtonProps {
  direction: "left" | "right";
  onClick: () => void; 
}

function NavigationButton({ direction, onClick }: NavigationButtonProps) {
  return (
    // Define testimonials button with onclick function and direction
    <button
      onClick={onClick}
      className="bg-[#F1F1F1] rounded-[4px] flex justify-center items-center p-4 transition-all duration-300 hover:bg-darkGray"
    >
      {direction === "left" ? (
        <GoArrowLeft className="text-4xl" />
      ) : (
        <GoArrowRight className="text-4xl" />
      )}
    </button>
  );
}

export default NavigationButton;
