"use client";

import React, { useState } from "react";
import { IoMdFastforward } from "react-icons/io";
import SectionLine from "../sectionLine/SectionLine";
import CarouselNavigation from "./CarouselNavigation";
import CarouselCard from "./CarouselCard";

// Products data array
const products = [
  {
    id: 1,
    category: "Men's clothing",
    image: "/home/carousel1.png",
    rating: 5,
  },
  {
    id: 2,
    category: "Women's clothing",
    image: "/home/carousel2.png",
    rating: 5,
  },
  {
    id: 3,
    category: "Children's clothing",
    image: "/home/carousel3.png",
    rating: 5,
  },
  { id: 4, category: "Shoes", image: "/home/carousel4.png", rating: 5 },
  {
    id: 5,
    category: "Men's clothing",
    image: "/home/carousel1.png",
    rating: 5,
  },
  {
    id: 6,
    category: "Women's clothing",
    image: "/home/carousel2.png",
    rating: 5,
  },
  {
    id: 7,
    category: "Children's clothing",
    image: "/home/carousel3.png",
    rating: 5,
  },
  { id: 8, category: "Shoes", image: "/home/carousel4.png", rating: 5 },
];

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 4;
  const isAtLastProduct = currentIndex >= products.length - itemsToShow;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < products.length - itemsToShow ? prevIndex + 1 : prevIndex
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const goToFirstProduct = () => {
    setCurrentIndex(0);
  };

  return (
    <div className="section-container pt-20">
      {/* Section header */}
      <div className="flex items-center mb-5 font-inter">
        <SectionLine />
        <h2 className="text-4xl font-semibold">Our Products</h2>
        <button className="flex items-center font-semibold gap-3 ml-auto">
          <p>View All</p>
          <IoMdFastforward />
        </button>
      </div>

      <div className="relative">
        {/* Carousel wrapper */}
        <div className="flex overflow-hidden">
          <div
            className={`flex -mr-60 transition-all duration-500 ${
              isAtLastProduct && `-mr-0`
            }`}
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
            }}
          >
            {/* Map over products array to show a card component for each element */}
            {products.map((product) => (
              <CarouselCard
                key={product.id}
                category={product.category}
                image={product.image}
                rating={product.rating}
              />
            ))}
          </div>
        </div>

        {/* CarouselNavigation component */}
        <CarouselNavigation
          goToFirstProduct={goToFirstProduct}
          prevSlide={prevSlide}
          nextSlide={nextSlide}
          currentIndex={currentIndex}
          productsLength={products.length}
          itemsToShow={itemsToShow}
        />
      </div>
    </div>
  );
};

export default ProductCarousel;
