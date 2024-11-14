import React from "react";
import HomeHeader from "./HomeHeader";
import ProductCarousel from "./carouselSection/ProductCarousel";
import BestSeller from "./bestSellerSection/BestSeller";

const HomePage = () => {
  return (
    <>
      <HomeHeader />
      <ProductCarousel />
      <BestSeller />
    </>
  );
};

export default HomePage;
