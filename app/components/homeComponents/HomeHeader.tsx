import React from "react";
import { FaArrowDownLong } from "react-icons/fa6";
import CustomButton from "../customButton/CustomButton";

const HomeHeader = () => {
  return (
    // Main section container
    <div className="section-container flex flex-col gap-5">
      {/* Top side section with intro and image */}
      <div className="flex flex-col lg:flex-row font-abhaya gap-10">
        {/* Left side text section */}
        <div className="flex flex-col gap-10 flex-1">
          <h1 className="text-4xl capitalize text-[#1F1F1F]">
            a touch of fashion
          </h1>
          <p className="text-darkGray text-2xl">
            The clothing site offers an easy and modern shopping experience that
            allows visitors to discover the latest fashion trends and shop in a
            quick and convenient way. The site starts with an elegant and
            attractive interface that displays the season’s offers and the
            latest collections.
          </p>
        </div>
        {/* Right side image section */}
        <div className="flex justify-center items-center gap-10 flex-1">
          <div className="bg-header1 w-[320px] h-[350px] bg-cover bg-no-repeat shadow-imgShadow ml:0 xl:ml-60 xl:mb-5"></div>
        </div>
      </div>

      {/* Bottom side section with button, info and Image */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left side section with button and info */}
        <div className="flex flex-col gap-10 lg:gap-20 flex-1 justify-center items-center lg:items-start">
          <CustomButton label="Shop Now" otherClasses="w-fit" />
          <div className="text-darkGray font-inter text-xl">
            <div className="flex flex-col md:flex-row gap-5 md:gap-20">
              <div className="flex flex-col gap-3 md:gap-5 justify-center items-center text-center text-nowrap">
                <p>400+</p>
                <p>Projects Completed</p>
              </div>
              <div className="flex flex-col gap-5 justify-center items-center text-center text-nowrap">
                <p>600+</p>
                <p>Satisfied Clients</p>
              </div>
              <div className="flex flex-col gap-5 justify-center items-center text-center text-nowrap">
                <p>100+</p>
                <p>Unique Styles</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side section with image and layers */}
        <div className="flex justify-center lg:justify-start items-center flex-1">
          <div className="relative bg-header2 w-[435px] h-[275px] lg:w-[350px] xl:w-[435px] xl:h-[275px] bg-cover bg-no-repeat shadow-imgShadow">
            <div className="absolute bottom-0 right-0 w-[103px] h-[103px] flex justify-center items-center bg-white border border-black">
              <FaArrowDownLong className="text-4xl" />
            </div>
            <div className="absolute -top-4 -left-4 xl:-top-8 xl:-left-8 border-[3px] border-black w-[240px] h-[220px] -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
