// Main Signup Page Component
'use client'; // Declare the component as a client-side component
import React, { useState } from "react"; // Import React hooks
import FormContainer from "../compnant/FormSection"; // Import custom form container
import FieldForm from "../compnant/FildForm"; // Import individual field component
import BackgroundSection from "../compnant/imagebackground"; // Import background section component
import TextBlock from "../compnant/TextBlock"; // Import TextBlock for title and description

const SignUpPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  return (
    <section
      id="signup"
      className="w-full min-h-screen flex flex-col md:flex-row bg-white relative"
    >
      {/* Signup section with responsive layout */}
      <div className="w-full md:w-[60%] relative ">
        {/* Left-side container for background and text */}
        <BackgroundSection
          imageSrc="/RegisterImage/efe1fb41ff9f3a15f97d7df84beb7bae.jfif"
          className="h-[45vh] md:h-full"
        />
        {/* Positioned content over the background */}
        <div className="absolute inset-0 flex flex-col items-center mt-[8vh] md:mt-[25vh] md:mr-32 ">
          <TextBlock
            title="Already Signed up?"
            description="Log in to your account so you can continue building and editing your onboarding flows"
            titleStyle="font-extrabold mb-1 md:mb-4"
            descriptionStyle="px-10 md:px-28 text-[14px] md:text-[24px] font-medium md:tracking-wider"
          />
          {/* Login button with responsive styles */}
          <button className="w-[205px] md:w-[330px] h-[40px] md:h-[75px] mt-4 md:mt-16 md:px-6 border-[1px] md:border-[2px] border-white text-white font-abhaya font-medium text-[20px] md:text-[28px]">
            LOG IN
          </button>
        </div>
      </div>

      {/* Form section for signing up */}
      <form className="w-[80%] md:w-[50%] flex justify-center mx-auto mb-10 md:mb-0 md:mt-16 font-abhaya">
        <FormContainer
          className="px-2 md:px-8 shadow-2xl md:shadow-none pb-10 md:pb-0 z-20 -mt-20 md:-mt-0 bg-white"
          contentClassName="w-full"
          buttonsClassName="flex flex-col"
          firstBotton="SIGN UP"
          scoundtBotton="Sign up with Google"
          title="Sign Up For An Account"
          description="Let’s get you all set up so you can start creating your first onboarding experience"
          titleStyle="text-black font-extrabold md:font-medium mb-3 pt-12 md:pt-0"
          descriptionStyle="text-black text-[16px] md:text-[25px] md:px-16 font-bold mb-7"
        >
          {/* Input fields with labels */}
          <div className="mr-4 md:mr-24 ml-4 px-6 md:px-0">
            <div className="flex flex-col md:flex-row md:space-x-2 w-full">
              <FieldForm
                label="First Name"
                placeholder="Your first name"
                className="mb-0 w-full"
              />
              <FieldForm
                label="Last Name"
                placeholder="Your last name"
                className="mb-1 w-full"
              />
            </div>
            <FieldForm
              label="Email"
              placeholder="Enter your email address"
              type="email"
              className="mb-1 w-full"
            />
            <div className="relative">
              <FieldForm
                label="Password"
                placeholder="Enter Strong Password"
                type={showPassword ? "text" : "password"}
                className="mb-2 w-full"
              />
              {/* Button for toggling password visibility */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-[65%] transform -translate-y-1/2"
              >
                {showPassword ? (
                  <img
                    src="https://img.icons8.com/material-outlined/24/000000/visible.png"
                    alt="Show Password"
                    className="w-5 h-5"
                  />
                ) : (
                  <img
                    src="https://img.icons8.com/material-outlined/24/000000/invisible.png"
                    alt="Hide Password"
                    className="w-5 h-5"
                  />
                )}
              </button>
            </div>
          </div>
        </FormContainer>
      </form>
    </section>
  );
};

export default SignUpPage;