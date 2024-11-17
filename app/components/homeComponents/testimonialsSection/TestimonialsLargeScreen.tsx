import React, { useState } from "react";
import Image from "next/image";
import TestimonialCard from "./TestimonalCard";
import NavigationButton from "./NavigationButton";

interface Testimonial {
  id: number;
  text: string;
  name: string;
  location: string;
  image: string;
}

interface Props {
  testimonials: Testimonial[];
}

const TestimonialsLargeScreen: React.FC<Props> = ({ testimonials }) => {
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
  </section>

  );
};

export default TestimonialsLargeScreen;
