"use client";
import React from "react";
import Image from "next/image";

import { Typewriter } from "react-simple-typewriter";

const Hero: React.FC = () => {
  return (
    <section className="bg-black p-6 text-white flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20 py-10 pb-20 max-container padding-container">
      <div className="flex flex-1 flex-col text-center md:text-left pt-6 md:pt-0">
        <h4 className="text-2xl font-bold text-amber-500 mb-2">Hello,</h4>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-pink-600 mb-2">
          I'm Tehrim Fatima
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-amber-500 mb-4 capitalize">
          A{" "}
          <span className="inline-block">
            <Typewriter
              words={["programmer", "designer", "developer"]}
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>
        <p className="text-base md:text-lg max-w-lg mx-auto md:mx-0 mb-6">
          Hello! I'm Tehrim Fatima, a creative and ambitious individual with a passion for programming and UI/UX design.
        </p>
        <div className="flex justify-center md:justify-start gap-4">
        
        </div>
      </div>
      <div className="relative flex justify-center items-center w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-pink-700 via-white to-amber-400 rounded-full shadow-lg overflow-hidden hover:shadow-pink-500 hover:shadow-xl">
  <Image
    src="/pictures/bg-profile.avif"
    alt="bg"
    width={400}
    height={400}
    className="rounded-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
  />
</div>

    </section>
  );
};

export default Hero;
