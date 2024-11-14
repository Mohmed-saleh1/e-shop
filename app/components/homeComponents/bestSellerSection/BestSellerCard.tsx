import Image from "next/image";
import React from "react";
import { FaRegHeart, FaStar } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";

interface BestSellerCardProps {
  imgSrc: string;
  name: string;
  price: string;
  rating: number;
}

const BestSellerCard = ({
  imgSrc,
  name,
  price,
  rating,
}: BestSellerCardProps) => {
  return (
    <div className="bg-white px-3 pt-5 pb-2">
      {/* Inner image container */}
      <div className="bg-[#c4c4c438] relative cursor-pointer flex justify-center items-center">
        <Image
          src={imgSrc}
          alt={name}
          width={240}
          height={240}
          className="px-3 pt-20"
        />
        {/* Wishlist Icon */}
        <div className="absolute top-3 right-2">
          <button className="bg-white p-2 rounded-full flex items-center justify-center">
            <FaRegHeart />
          </button>
        </div>
        {/* Cart Icon */}
        <div className="absolute top-16 right-2">
          <button className="bg-white p-2 rounded-full flex items-center justify-center">
            <FiShoppingCart />
          </button>
        </div>
      </div>
      {/* Rating, name and price display */}
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-center mt-2 text-yellow-400 gap-2">
          {Array.from({ length: rating }, (_, index) => (
            <FaStar key={index} />
          ))}
        </div>
        <p>{name}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default BestSellerCard;
