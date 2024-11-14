import React from "react";
import { RiPlayReverseLargeFill, RiPlayLargeFill } from "react-icons/ri";

interface CarouselNavigationProps {
  goToFirstProduct: () => void;
  prevSlide: () => void;
  nextSlide: () => void;
  currentIndex: number;
  productsLength: number;
  itemsToShow: number;
}

const CarouselNavigation = ({
  goToFirstProduct,
  prevSlide,
  nextSlide,
  currentIndex,
  productsLength,
  itemsToShow,
}: CarouselNavigationProps) => {
  const isAtLastProduct = currentIndex >= productsLength - itemsToShow;

  return (
    <div className="flex justify-between items-center mt-4">
      {/* Return to first product button */}
      <button
        onClick={goToFirstProduct}
        className={`p-3 md:p-5 bg-white rounded-full border border-black text-lg md:text-2xl flex justify-center items-center ${
          currentIndex === 0 ? "text-lightGray" : ""
        }`}
        disabled={currentIndex === 0}
      >
        <RiPlayReverseLargeFill />
      </button>

      <div className="flex items-center gap-4">
        {/* Left (Previous) button */}
        <button
          onClick={prevSlide}
          className={`p-3 md:p-5 bg-white rounded-full border border-black text-lg md:text-2xl flex justify-center items-center ${
            currentIndex === 0 ? "text-lightGray" : ""
          }`}
          disabled={currentIndex === 0}
        >
          <RiPlayReverseLargeFill />
        </button>

        {/* Right (Next) button */}
        <button
          onClick={nextSlide}
          className={`p-3 md:p-5 bg-white rounded-full border border-black text-lg md:text-2xl flex justify-center items-center ${
            isAtLastProduct ? "text-lightGray" : ""
          }`}
          disabled={isAtLastProduct}
        >
          <RiPlayLargeFill />
        </button>
      </div>
    </div>
  );
};

export default CarouselNavigation;
