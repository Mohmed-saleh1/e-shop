"use client";

import Image from "next/image";
import React, { useState } from "react";
import TestimonialCard from "./TestimonalCard";
import NavigationButton from "./NavigationButton";

const testimonials = [
  {
    id: 1,
    text: `Great site to shop! Organized and easy to use, variety of selections at reasonable prices. Received the products as pictured and in excellent quality. Smooth shopping experience, highly recommend!`,
    name: "Asmaa Ali",
    location: "Egypt, Cairo",
    image: "/home/testimonial1.png",
  },
  {
    id: 2,
    text: `Excellent shopping site, easy and simple, and the selection is diverse. I received my orders with the same quality as the pictures. A wonderful experience and I recommend trying it!`,
    name: "Ahmed Hassan",
    location: "Egypt, Aswan",
    image: "/home/testimonial2.jpeg",
  },
  {
    id: 3,
    text: `The best online shopping experience. The site is user-friendly, the customer support is responsive, and the products I received were exactly as described.`,
    name: "Asmaa Ali",
    location: "Egypt, Alexandria",
    image: "/home/testimonial1.png",
  },
  {
    id: 4,
    text: `Great prices and quick shipping. Everything arrived in perfect condition. Will definitely be shopping here again!`,
    name: "Mohamed El-Sayed",
    location: "Egypt, Cairo",
    image: "/home/testimonial2.jpeg",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNavigation = (direction: "left" | "right") => {
    if (direction === "left") {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 2 : prevIndex - 1
      );
    } else {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 2 ? 0 : prevIndex + 1
      );
    }
  };

  return (
    <section className="section-container pt-20 overflow-hidden">
      <div className="flex items-center gap-10 relative">
        {/* Section Image */}
        <div className="min-w-[550px] self-start">
          <Image
            src={"/home/testimonial-bg.jpeg"}
            alt="testimonial background"
            width={550}
            height={550}
            className="rounded-[10px]"
          />
        </div>

        <div className="flex flex-col gap-10">
          {/* Title */}
          <h2 className="text-5xl font-semibold self-start">
            What Our Customers Say About Us
          </h2>

          {/* Testimonial Cards */}
          <div className="flex justify-center gap-10 items-center lg:-ml-[500px] xl:-ml-96 bg-white lg:py-2 xl:py-10 rounded-[4px]">
            {testimonials
              .slice(currentIndex, currentIndex + 2)
              .map(({ id, text, name, location, image }) => (
                <TestimonialCard
                  key={id}
                  text={text}
                  name={name}
                  location={location}
                  image={image}
                />
              ))}
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-4 items-center">
        <NavigationButton
          direction="left"
          onClick={() => handleNavigation("left")}
        />
        <NavigationButton
          direction="right"
          onClick={() => handleNavigation("right")}
        />
      </div>
    </section>
  );
};

export default Testimonials;
