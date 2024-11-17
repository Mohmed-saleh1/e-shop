"use client";

import Image from "next/image";
import React, { useState } from "react";
import TestimonialCard from "./TestimonalCard";
import NavigationButton from "./NavigationButton";
import { FaCaretRight } from "react-icons/fa6";

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
    <section className="section-container lg:pt-20 lg:overflow-hidden">
      <div className="hidden lg:flex items-center gap-10 relative">
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
      <div className="hidden lg:flex gap-4 items-center">
        <NavigationButton
          direction="left"
          onClick={() => handleNavigation("left")}
        />
        <NavigationButton
          direction="right"
          onClick={() => handleNavigation("right")}
        />
      </div>

      {/* Small screen testimonials*/}

      <div className="lg:hidden flex gap-20 sm:gap-40 items-center">
        <div className="flex flex-col items-center justify-center gap-10">
          <h3 className="font-abhaya font-extrabold text-sm sm:text-2xl capitalize text-center">
            what our customers say about us
          </h3>
          <div className="min-w-[250px] sm:min-w-[450px] md:min-w-[500px] self-start -ml-5 relative">
            <Image
              src={"/home/testimonial-bg.jpeg"}
              alt="testimonial background"
              width={250}
              height={250}
              className="w-full rounded-[10px]"
            />
            <div className="bg-white p-5 absolute z-10 top-1/4 left-[20px] sm:left-1/3 rounded-[4px]">
              <div className="w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] bg-[#1F1F1F] text-white rounded-[4px] flex flex-col items-start justify-center p-5 relative">
                {/* Quote */}
                <p className="text-[96px] absolute top-0 left-[15px] font-inter">
                  “
                </p>
                <p className="text-[10px] sm:text-base md:text-lg leading-relaxed mt-20">
                  "Great site to shop! Organized and easy to use, variety of
                  selections at reasonable prices. Received the products as
                  pictured and in excellent quality. Smooth shopping experience,
                  highly recommend!"
                </p>
                <div className="flex items-center mt-6 mb-2">
                  <Image
                    src={testimonials[0].image}
                    alt={testimonials[0].name}
                    width={1000}
                    height={1000}
                    className="w-[40px] h-[40px] rounded-full border-2 border-gray-300"
                  />
                  <div className="ml-2">
                    <p className="text-sm">{testimonials[0].name}</p>
                    <p className="text-sm text-gray-400">
                      {testimonials[0].location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-72">
          <button className="bg-[#CDCDCD] flex items-center justify-center w-[40px] h-[40px] rounded-[4px] ">
            <FaCaretRight className="text-lg" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
