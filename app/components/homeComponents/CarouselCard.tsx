import React from "react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

type CarouselCardProps = {
  category: string;
  image: string;
  rating: number;
};

function CarouselCard({category, image, rating }: CarouselCardProps) {
  return (
    <div className="flex-shrink-0 w-1/4 p-2">
        {/* Display card in carousel */}
      <div className="bg-carouselCard shadow-carouselShadow border border-black overflow-hidden relative">
        <Image
          src={image}
          alt={category}
          width={300}
          height={400}
          className="w-full h-64 object-contain mt-5 mb-10"
        />
        {/* Carousel card layer with category and rating */}
        <div className="absolute bottom-0 left-0 bg-carouselLayer text-white min-w-[150px] py-2">
          <p className="text-center font-semibold capitalize">
            {category}
          </p>
          <div className="flex justify-center items-center mt-2 text-yellow-400 gap-2">
            {Array.from({ length: rating }, (_, index) => (
              <FaStar key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarouselCard;
