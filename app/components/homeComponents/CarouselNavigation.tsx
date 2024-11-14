import React from "react";
import CarouselButton from "./CarouselButton";
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
      <CarouselButton
        onClick={goToFirstProduct}
        disabled={currentIndex === 0}
        icon={<RiPlayReverseLargeFill />}
      />

      <div className="flex items-center gap-4">
        {/* Left (Previous) button */}
        <CarouselButton
          onClick={prevSlide}
          disabled={currentIndex === 0}
          icon={<RiPlayReverseLargeFill />}
        />

        {/* Right (Next) button */}
        <CarouselButton
          onClick={nextSlide}
          disabled={isAtLastProduct}
          icon={<RiPlayLargeFill />}
        />
      </div>
    </div>
  );
};

export default CarouselNavigation;
