import React from "react";

function GradientLine({ reverse = false }) {
  return (
    <div
      className={`h-[1px] border w-[80px] sm:w-[100px] md:w-[215px] 
                  ${reverse ? "transform rotate-[-179.97deg]" : ""}`}
      style={{
        borderImageSource:
          "linear-gradient(90deg, #000000 0%, rgba(102, 102, 102, 0.2) 100%)",
        borderImageSlice: 1,
      }}
    ></div>
  );
}

export default GradientLine;
