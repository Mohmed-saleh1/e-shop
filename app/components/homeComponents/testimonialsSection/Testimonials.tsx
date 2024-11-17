"use client";

import React, { useState } from "react";
import TestimonialsLargeScreen from "./TestimonialsLargeScreen";
import TestimonialsSmallScreen from "./TestimonialsSmallScreen";

const testimonials = [
  {
    id: 1,
    text: `Great site to shop! Organized and easy to use, variety of selections at reasonable prices. Received the products as pictured and in excellent quality. Smooth shopping experience, highly recommend!`,
    name: "Asmaa Ali",
    location: "Egypt, Cairo",
    image: "/home/testimonial1.png",
  },
  {
    id: 2,
    text: `Excellent shopping site, easy and simple, and the selection is diverse. I received my orders with the same quality as the pictures. A wonderful experience and I recommend trying it!`,
    name: "Ahmed Hassan",
    location: "Egypt, Aswan",
    image: "/home/testimonial2.jpeg",
  },
  {
    id: 3,
    text: `The best online shopping experience. The site is user-friendly, the customer support is responsive, and the products I received were exactly as described.`,
    name: "Asmaa Ali",
    location: "Egypt, Alexandria",
    image: "/home/testimonial1.png",
  },
  {
    id: 4,
    text: `Great prices and quick shipping. Everything arrived in perfect condition. Will definitely be shopping here again!`,
    name: "Mohamed El-Sayed",
    location: "Egypt, Cairo",
    image: "/home/testimonial2.jpeg",
  },
];

const Testimonials = () => {
  return (
    <section>
      <TestimonialsLargeScreen testimonials={testimonials} />
      <TestimonialsSmallScreen testimonials={testimonials} />
    </section>
  );
};

export default Testimonials;
