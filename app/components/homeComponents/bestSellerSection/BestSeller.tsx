import React from "react";
import SectionLine from "../../sectionLine/SectionLine";
import BestSellerCard from "./BestSellerCard";

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
];

const BestSeller = () => {
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

        {/* Grid layout with responsive columns */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {sellers.map((item, index) => (
            <BestSellerCard
              key={index}
              imgSrc={item.image}
              name={item.name}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default BestSeller;
