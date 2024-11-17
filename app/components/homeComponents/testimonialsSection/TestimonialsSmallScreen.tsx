import React, { useState } from "react";
import Image from "next/image";
import { FaCaretRight } from "react-icons/fa6";

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

function TestimonialsSmallScreen({ testimonials }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next testimonial in the list
  const showNextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="section-container">
      {/* Wrapper for small screen testimonials */}
      <div className="lg:hidden flex flex-col xs:flex-row gap-10 sm:gap-40 items-center">
        <div className="flex flex-col items-center justify-center gap-10">
          {/* Section Title */}
          <h3 className="font-abhaya font-extrabold text-sm sm:text-2xl capitalize text-center">
            what our customers say about us
          </h3>

          {/* Testimonial card with background */}
          <div className="min-w-[250px] sm:min-w-[450px] md:min-w-[500px] self-start -ml-5 relative">
            {/* Background image */}
            <Image
              src={"/home/testimonial-bg.jpeg"}
              alt="testimonial background"
              width={250}
              height={250}
              className="w-full rounded-[10px]"
            />
            {/* Testimonial content overlay */}
            <div className="bg-white p-5 absolute z-10 top-1/4 left-[20px] sm:left-1/3 rounded-[4px]">
              <div className="w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] bg-[#1F1F1F] text-white rounded-[4px] flex flex-col items-start justify-center p-5 relative">
                {/* Quotation mark */}
                <p className="text-[96px] absolute top-0 left-[15px] font-inter">
                  “
                </p>
                {/* Testimonial text */}
                <p className="text-[10px] sm:text-base md:text-lg leading-relaxed mt-20">
                  {testimonials[currentIndex].text}
                </p>
                {/* User info (image, name, location) */}
                <div className="flex items-center mt-6 mb-2">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    width={1000}
                    height={1000}
                    className="w-[40px] h-[40px] rounded-full border-2 border-gray-300"
                  />
                  <div className="ml-2">
                    <p className="text-sm">{testimonials[currentIndex].name}</p>
                    <p className="text-sm text-gray-400">
                      {testimonials[currentIndex].location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation button */}
        <div className="flex justify-center items-center mt-10 self-end xs:self-center xs:mt-72">
          <button
            onClick={showNextTestimonial} // Show next testimonial on click
            className="bg-[#CDCDCD] flex items-center justify-center w-[40px] h-[40px] rounded-[4px] z-20 transition-all duration-300 hover:bg-darkGray"
          >
            <FaCaretRight className="text-lg" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSmallScreen;
