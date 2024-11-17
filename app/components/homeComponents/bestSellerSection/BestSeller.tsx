"use client";
import React, { useState, useEffect } from "react";
import SectionLine from "../../sectionLine/SectionLine";
import BestSellerCard from "./BestSellerCard";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";

const sellers = [
  {
    id: 1,
    name: "Children's cotton T-shirt",
    image: "/home/seller1.png",
    price: "200$",
    rating: 5,
  },
  {
    id: 2,
    name: "Women's chemise",
    image: "/home/seller2.png",
    price: "300$",
    rating: 5,
  },
  {
    id: 3,
    name: "Men's shirt",
    image: "/home/seller1.png",
    price: "100$",
    rating: 5,
  },
  {
    id: 4,
    name: "Men's clothing",
    image: "/home/seller2.png",
    price: "200$",
    rating: 5,
  },
  {
    id: 5,
    name: "Children's cotton T-shirt",
    image: "/home/seller1.png",
    price: "200$",
    rating: 5,
  },
  {
    id: 6,
    name: "Women's chemise",
    image: "/home/seller2.png",
    price: "300$",
    rating: 5,
  },
  {
    id: 7,
    name: "Men's shirt",
    image: "/home/seller1.png",
    price: "100$",
    rating: 5,
  },
  {
    id: 8,
    name: "Men's clothing",
    image: "/home/seller2.png",
    price: "200$",
    rating: 5,
  },
];

const BestSeller = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1); // Default to 1 for server-side rendering

  // Determine visible cards based on screen size
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(4); // Large screens
      } else if (window.innerWidth >= 768) {
        setCardsPerView(2); // Medium screens
      } else {
        setCardsPerView(1); // Small screens
      }
    };

    // Call on mount
    updateCardsPerView();

    // Add resize event listener
    window.addEventListener("resize", updateCardsPerView);

    // Clean up the event listener on unmount
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  // Handle Next and Previous buttons
  const nextSlide = () => {
    if (currentIndex < sellers.length - cardsPerView) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="bg-[#C4C4C438]">
      <section className="section-container py-20 ">
        {/* Section header */}
        <div className="flex items-center mb-5 font-inter">
          <SectionLine />
          <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold">
            Best Seller's
          </h2>
        </div>

        {/* Carousel container */}
        <div className=" relative mx-2">
          {/* Cards container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out gap-5"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / cardsPerView)
                }%)`,
              }}
            >
              {sellers.map((item) => (
                <div
                  key={item.id}
                  className="flex-none"
                  style={{
                    width: `calc(${100 / cardsPerView}% - 20px)`,
                  }}
                >
                  <BestSellerCard
                    imgSrc={item.image}
                    name={item.name}
                    price={item.price}
                    rating={item.rating}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`absolute top-1/2 -left-10 transform -translate-y-1/2 bg-gray-200 hover:bg-darkGray transition-all duration-300 p-2 rounded-full z-10 ${
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <FaCaretLeft />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex >= sellers.length - cardsPerView}
            className={`absolute top-1/2 -right-5 transform -translate-y-1/2 bg-gray-200 hover:bg-darkGray transition-all duration-300 p-2 rounded-full z-10 ${
              currentIndex >= sellers.length - cardsPerView
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
          >
            <FaCaretRight />
          </button>
        </div>
      </section>
    </div>
  );
};

export default BestSeller;
