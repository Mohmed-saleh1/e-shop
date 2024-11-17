import React from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";

interface SellerNavigationProps {
  onPrev: () => void;
  onNext: () => void;
  isPrevDisabled: boolean;
  isNextDisabled: boolean;
}

function SellerNavigation({
  onPrev,
  onNext,
  isPrevDisabled,
  isNextDisabled,
}: SellerNavigationProps) {
  return (
    <div className="absolute inset-0 flex items-center justify-between px-5">
      {/* Previous button */}
      <button
        onClick={onPrev} // Trigger previous slide function
        disabled={isPrevDisabled} // Disable button if isPrevDisabled is true
        className={`bg-gray-200 hover:bg-darkGray transition-all duration-300 p-2 rounded-full z-10 ${
          isPrevDisabled ? "opacity-50 cursor-not-allowed" : "" // Apply styles if disabled
        }`}
      >
        <FaCaretLeft /> {/* Left arrow icon */}
      </button>

      {/* Next button */}
      <button
        onClick={onNext} // Trigger next slide function
        disabled={isNextDisabled} // Disable button if isNextDisabled is true
        className={`bg-gray-200 hover:bg-darkGray transition-all duration-300 p-2 rounded-full z-10 ${
          isNextDisabled ? "opacity-50 cursor-not-allowed" : "" // Apply styles if disabled
        }`}
      >
        <FaCaretRight /> {/* Right arrow icon */}
      </button>
    </div>
  );
}

export default SellerNavigation;
