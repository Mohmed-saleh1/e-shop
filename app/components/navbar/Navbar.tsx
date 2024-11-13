"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { FaRegHeart } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { TiArrowSortedDown } from "react-icons/ti";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Define navlinks and labels
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/contact", label: "Contact" },
  ];

  // Define icon buttons with components and optional links
  const iconButtons = [
    { component: <FaRegHeart />, href: "/wishlist" },
    { component: <FiShoppingCart />, href: "/cart" },
    {
      component: (
        <div className="flex items-center">
          <IoPersonOutline />
          <TiArrowSortedDown className="mt-[3px]" />
        </div>
      ),
      href: null,
    },
  ];

  return (
    <header className="w-full text-black z-50">
      <nav className="w-full flex items-center justify-around py-5 border-b-2">
        {/* Logo section */}
        <div className="flex items-center justify-center gap-2 cursor-pointer">
          <Link className="font-extrabold text-[40px]" href="/">
            Logo
          </Link>
        </div>

        {/* Navlinks visible on larger screens */}
        <div className="hidden md:flex">
          <ul className="flex items-center gap-6">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`nav-link text-[22px] text-[#5E5E5E] ${
                    pathname === href ? "active-link font-semibold" : ""
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Icon buttons */}
        <div className="hidden md:flex">
          <ul className="flex items-center gap-10">
            {iconButtons.map(({ component, href }, index) => (
              <li key={index}>
                {href ? (
                  <Link href={href}>
                    <button className="flex items-center">{component}</button>
                  </Link>
                ) : (
                  <button className="flex items-center">{component}</button>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Navbar toggler icon, visible on smaller screens */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`${
          isOpen
            ? "max-h-screen opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-full"
        } w-full shadow-md transition-all duration-300 ease-in-out overflow-hidden md:hidden transform`}
      >
        {/* Main navigation links */}
        <ul className="flex flex-col items-center py-8 space-y-8 text-xl font-oswald text-black">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`nav-link py-1 ${
                  pathname === href ? "active-link font-semibold" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile icon links */}
        <ul className="flex justify-center gap-10 py-4 border-t border-gray-200 mt-4">
          {iconButtons.map(({ component, href }, index) => (
            <li key={index}>
              {href ? (
                <Link href={href}>
                  <button className="flex items-center text-2xl text-[#5E5E5E]">
                    {component}
                  </button>
                </Link>
              ) : (
                <button className="flex items-center text-2xl text-[#5E5E5E]">
                  {component}
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
