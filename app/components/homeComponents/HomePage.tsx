import React from "react";
import HomeHeader from "./HomeHeader";
import ProductCarousel from "./carouselSection/ProductCarousel";
import BestSeller from "./bestSellerSection/BestSeller";
import Testimonials from "./testimonialsSection/Testimonials";

const HomePage = () => {
  return (
    <>
      <HomeHeader />
      <ProductCarousel />
      <BestSeller />
      <Testimonials />
    </>
  );
};

export default HomePage;
