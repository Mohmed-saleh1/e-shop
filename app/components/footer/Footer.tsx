import GradientLine from "./GradientLine";
import RoundedBackground from "./RoundedBackground";
import SocialButtons from "./SocialButtons";
import FooterLinks from "./FooterLinks";

function Footer() {
  return (
    <footer className="w-full flex flex-col bg-footer font-roboto text-[#0E0F1D] overflow-hidden">
      <div className="section-container flex flex-col justify-center items-center gap-5 md:gap-16">
        {/* Title with Gradient Lines */}
        <div className="flex items-center justify-center">
          {/* Reversed Gradient Line */}
          <GradientLine reverse={true} />

          {/* Text */}
          <h2 className="text-base md:text-[24px] lg:text-[32px] font-bold whitespace-nowrap mx-4">
            Name Company
          </h2>

          {/* Normal Gradient Line */}
          <GradientLine />
        </div>

        {/* Footer Links Component */}
        <FooterLinks />  {/* Using FooterLinks here */}

        <p className="text-sm sm:text-lg text-center font-normal md:px-20 lg:px-36 xl:px-56">
          We are here to provide you with the latest fashion trends with the
          best quality and prices to suit everyone. Discover our diverse
          collections and enjoy a unique shopping experience
        </p>
      </div>

      {/* Footer Bottom Section */}
      <div className="flex items-center justify-between">
        {/* Left Background */}
        <RoundedBackground side="left" />

        {/* Social Media Buttons */}
        <SocialButtons />

        {/* Right Background */}
        <RoundedBackground side="right" />
      </div>
    </footer>
  );
}

export default Footer;
