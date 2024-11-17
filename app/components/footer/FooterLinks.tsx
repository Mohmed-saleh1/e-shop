// components/FooterLinks.jsx

import Link from "next/link";
import React from "react";

function FooterLinks() {
  // Array of link objects
  const links = [
    { id: 1, label: "Home", href: "/" },
    { id: 2, label: "About", href: "/about" },
    { id: 3, label: "Product", href: "/products" },
    { id: 4, label: "Contact", href: "/contact" },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-3 items-center justify-center md:space-x-8 text-base font-normal text-center w-full">
      {links.map(({ id, label, href }, index) => (
        <React.Fragment key={id}>
          <Link
            href={href}
            className="hover:text-darkGray transition-all duration-300 text-sm md:text-lg"
          >
            {label}
          </Link>
          {/* Add a pipe separator if it's not the last item */}
          {index < links.length - 1 && (
            <span className="hidden md:block">|</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default FooterLinks;
