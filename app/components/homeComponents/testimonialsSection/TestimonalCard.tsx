import React from "react";
import Image from "next/image";

interface TestimonialCardProps {
  text: string;
  name: string;
  location: string;
  image: string;
}

function TestimonialCard({ text, name, location, image }: TestimonialCardProps) {
  return (
    <div className="w-[400px] h-[400px] bg-[#1F1F1F] text-white rounded-[4px] flex flex-col items-start justify-center px-5 relative">
      {/* Quote */}
      <p className="text-[150px] absolute top-0 left-[15px] font-inter">“</p>
      <p className="text-lg leading-relaxed mt-20">"{text}"</p>

      {/* User Info */}
      <div className="flex items-center mt-6">
        <Image
          src={image}
          alt={name}
          width={1000}
          height={1000}
          className="w-[65px] h-[65px] rounded-full border-2 border-gray-300"
        />
        <div className="ml-4">
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-gray-400">{location}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
