"use client";

import React, { useState } from "react";
import Image from "next/image";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const shortText = `
    Welcome to My Portfolio! As a passionate and driven individual, I'm excited to share my journey, skills, 
    and experiences with you. With a strong foundation in programming, UI/UX design, and education, 
    I'm always looking for opportunities to grow, learn, and collaborate with like-minded individuals.
  `;

  const fullText = `
    Welcome to My Portfolio! As a passionate and driven individual, I'm excited to share my journey, skills, 
    and experiences with you. With a strong foundation in programming, UI/UX design, and education, 
    I'm always looking for opportunities to grow, learn, and collaborate with like-minded individuals.
    Hello! I'm Tehrim Fatima, a creative and ambitious individual with a passion for programming, UI/UX design, 
    and education. As a student teacher at school, I've had the privilege of sharing my knowledge with others 
    and inspiring the next generation of leaders. With a strong foundation in programming languages and UI/UX design 
    principles, I'm always looking for opportunities to grow and learn.
    I've had a strong academic foundation, with a Matriculation Degree from New Jilani Secondary School, Karachi 
    Board in 2021. I then pursued my Intermediate Degree in Commerce from Sir Syed Govt. Girls College, Nazimabad, Karachi, 
    BIEK in 2023. Currently, I'm pursuing my BA from Karachi University, Pakistan, and I'm also a student at the 
    Governor's Initiative of AI and Metaverse 3.0 at Governor House, Sindh.
    Feel free to reach out to me for potential collaborations or projects. I'm always eager to learn and work with like-minded individuals.
  `;

  return (

<section id="about" className="max-container bg-black text-white py-6 px-4 sm:py-8 sm:px-6 md:py-10 md:px-8 lg:py-12 lg:px-20 xl:px-32 flex flex-col gap-6 md:gap-12">
  <div className="text-center text-3xl md:text-4xl font-bold uppercase tracking-wide text-amber-500 mb-4">
    About
  </div>

  <div className="flex flex-col-reverse xl:flex-row items-center gap-8 md:gap-16">
    <div className="flex-1 flex flex-col items-center text-center xl:text-left">
      <p className="text-base md:text-lg lg:text-xl leading-relaxed mb-6">
        {isExpanded ? fullText : shortText}
      </p>

    </div>

    <div className="flex-1 flex justify-center">
      <Image
        src="/pictures/about hover.avif"
        alt="about"
        width={300}
        height={300}
        className="w-50 h-50 md:w-64 md:h-94 lg:w-80 lg:h-80 rounded-full object-cover transition-transform transform hover:scale-110 duration-500 shadow-lg hover:shadow-pink-700"
      />
    </div>
  </div>
</section>
 );
  };
export default About;