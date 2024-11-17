// Import necessary modules and components for a reusable TextBlock component
import React from "react";

interface TextBlockProps {
  title: string; // Title text for the block
  description: string; // Description text for the block
  titleStyle?: string; // Optional custom styling for the title
  descriptionStyle?: string; // Optional custom styling for the description
  className?: string; // Optional additional class names for the container
}

// A functional component for displaying a title and description block
const TextBlock: React.FC<TextBlockProps> = ({ 
  title, 
  description, 
  titleStyle = "", // Default empty style for title
  descriptionStyle = "", // Default empty style for description
  className = " " // Default empty additional classes for the container
}) => {
  return (
    <div className={`font-abhaya text-center text-white ${className}`}> 
      {/* Container with base styles and optional classes */}
      <h2 className={`text-[20px] md:text-[40px] ${titleStyle}`}>{title}</h2> 
      {/* Title with responsive font size and optional styles */}
      <p className={`${descriptionStyle}`}>{description}</p> 
      {/* Description with optional styles */}
    </div>
  );
};

export default TextBlock;