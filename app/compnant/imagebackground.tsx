import React from "react";

// Interface defining props for BackgroundSection component
interface BackgroundSectionProps {
  imageSrc: string; // URL of the background image
  className?: string; // Additional styles for the component
}

// Functional component for creating a background section with overlay
const BackgroundSection: React.FC<BackgroundSectionProps> = ({
  imageSrc, 
  className = ""
}) => {
  return (
    <div
      className={`relative w-full bg-cover bg-center ${className} 
      md:[clip-path:polygon(0_0,_100%_0,_71%_100%,_0_100%)] 
      [clip-path:polygon(0_0,_100%_0,_100%_100%,_0_71%)]`}
      style={{
        backgroundImage: `url(${imageSrc})`, // Dynamic background image
      }}
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
    </div>
  );
};

export default BackgroundSection;
