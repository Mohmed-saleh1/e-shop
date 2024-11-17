import React from "react";
import TextBlock from "./TextBlock";  

// Interface defining the props accepted by the FormContainer component
interface FormContainerProps {
  children: React.ReactNode; // The content inside the form container
  className?: string; // Additional custom styles for the main container
  contentClassName?: string; // Custom styles for the content section
  buttonsClassName?: string; // Custom styles for the buttons container
  title?: string;  // Title displayed at the top of the form
  description?: string;  // Description text displayed below the title
  titleStyle?: string;  // Additional styles for the title
  descriptionStyle?: string; // Additional styles for the description
  firstBotton?: string; // Label for the primary button
  scoundtBotton?: string; // Label for the secondary button
}

// Functional component for creating a reusable form container
const FormContainer: React.FC<FormContainerProps> = ({
  children, // The dynamic content passed into the component
  className, // Styles applied to the main wrapper
  contentClassName, // Styles applied to the content section
  buttonsClassName, // Styles applied to the buttons container
  title, // Title for the form
  description, // Description for the form
  titleStyle, // Additional custom styles for the title
  descriptionStyle, // Additional custom styles for the description
  firstBotton, // Label for the first button
  scoundtBotton, // Label for the second button
}) => {
  return (
    // Main container with optional styles and a shadow effect
    <div className={`text-black  ${className}`}>
      
      {/* Conditional rendering for the title and description */}
      {title && description && (  
        <TextBlock
          title={title} // Title text
          description={description} // Description text
          titleStyle={titleStyle} // Custom styles for the title
          descriptionStyle={descriptionStyle} // Custom styles for the description
        />
      )}
      
      {/* Content section containing child elements */}
      <div className={` ${contentClassName}`}>{children}</div>
      
      {/* Buttons section with custom layout and spacing */}
      <div className={`px-9 md:px-0 md:mr-24 md:ml-4 text-[24px] ${buttonsClassName}`}>
        
        {/* Primary button with black background */}
        <button className="bg-black text-white h-[50px] border-[2px] border-[#0000007D] border-opacity-[49%]">
          {firstBotton}
        </button>
        
        {/* Secondary button with an icon */}
        <button className="h-[50px] border-[2px]  border-[#0000007D] border-opacity-[49%] mt-4 flex items-center justify-center">
          <img
            src="/RegisterImage/Social Icons.png" // Path to the icon image
            alt="Register Icon" // Accessible description of the icon
            className="h-6 w-6 mr-1" // Styles for the icon
          />
          {scoundtBotton}
        </button>
        
      </div>
    </div>
  );
};

export default FormContainer;
