"use client";
import React, { useState, useEffect } from "react";
import SectionLine from "../../sectionLine/SectionLine";
import BestSellerCard from "./BestSellerCard";
import SellerNavigation from "./SellerNavigation";

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
  const [cardsPerView, setCardsPerView] = useState(1);

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
      <section className="section-container py-20">
        {/* Section header */}
        <div className="flex items-center mb-5 font-inter">
          <SectionLine />
          <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold">
            Best Seller's
          </h2>
        </div>

        {/* Carousel container */}
        <div className="relative mx-2">
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

          {/* Seller Navigation Component */}
          <SellerNavigation
            onPrev={prevSlide}
            onNext={nextSlide}
            isPrevDisabled={currentIndex === 0}
            isNextDisabled={currentIndex >= sellers.length - cardsPerView}
          />
        </div>
      </section>
    </div>
  );
};

export default BestSeller;
