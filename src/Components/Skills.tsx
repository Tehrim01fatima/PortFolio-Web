"use client"; 

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 
import Image from "next/image";
import { skills } from "./constants/index";

const SkillsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 500, 
      easing: "ease-in-out", 
      once: true, 
    });
  }, []);

  return (
    <section className="bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-amber-500">
          MY SKILLS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              data-aos="fade-up" 
              data-aos-delay={index * 100} 
              className="flex flex-col items-center p-4 rounded-lg bg-amber-400 shadow-md hover:shadow-xl hover:shadow-pink-700 transition-shadow duration-300"
            >
              <Image
                src={skill.icon}
                alt={skill.name}
                width={64}
                height={64}
                className="mb-4"
              />
              <p className="text-lg font-medium text-black">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
