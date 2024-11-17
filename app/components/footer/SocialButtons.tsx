import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";

const socialIcons = [
  { id: 1, Icon: FaFacebookF, href: "https://facebook.com" },
  { id: 2, Icon: FaTwitter, href: "https://twitter.com" },
  { id: 3, Icon: FaLinkedinIn, href: "https://linkedin.com" },
  { id: 4, Icon: FaInstagram, href: "https://instagram.com" },
];

const SocialButtons = () => {
  return (
    <div className="flex justify-center items-center gap-2 sm:gap-5">
      {socialIcons.map(({ id, Icon, href }) => (
        <Link
          key={id}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-darkGray transition-all duration-300"
        >
          <Icon className="text-sm sm:text-lg md:text-xl" />
        </Link>
      ))}
    </div>
  );
};

export default SocialButtons;
