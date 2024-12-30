"use client"
import React, { useState } from "react";
import { NAV_LINKS } from "../Components/constants";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="padding-container relative z-30 bg-black text-amber-500 shadow-xl py-4">
      <div className="flex justify-between items-center max-container">
        <span className="text-5xl md:text-7xl font-extrabold italic text-pink-700 tracking-wider drop-shadow-md">
          TF
        </span>

        <ul className="hidden lg:flex h-full gap-6 px-4 py-3">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="text-[15px] font-[500] text-amber-500 hover:bg-pink-700 hover:text-white px-4 py-1 rounded-full cursor-pointer transition-all duration-300"
            >
              {link.label}
            </Link>
          ))}
        
        </ul>
       
        
     

        <button onClick={toggleMenu} className="lg:hidden inline-block cursor-pointer">
          <Image
            src="/pictures/menu.svg"
            alt="menu"
            width={28}
            height={28}
          />
        </button>
      </div>

      {isOpen && (
        <ul className="lg:hidden flex flex-col gap-4 bg-black px-4 py-3 mt-2 rounded-md shadow-lg">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="text-[15px] font-[500] text-amber-500 hover:bg-pink-700 hover:text-white px-4 py-1 rounded-full cursor-pointer transition-all duration-300"
            >
              {link.label}
            </Link>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
