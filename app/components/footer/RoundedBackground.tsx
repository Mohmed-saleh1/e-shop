function RoundedBackground({ side }: { side: "left" | "right" }) {
    const roundedStyle =
      side === "left"
        ? "rounded-tr-[100px]"
        : "rounded-tl-[100px]";
  
    return (
      <div
        className={`bg-[#1F1F1F] h-[40px] md:h-[64px] ${roundedStyle} w-[160px] md:w-[260px] lg:w-[580px] max-w-[580px]`}
      ></div>
    );
  }
  
  export default RoundedBackground;
  