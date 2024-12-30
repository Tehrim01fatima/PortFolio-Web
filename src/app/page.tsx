import React from 'react';
import Hero from '@/Components/Hero';
import Skills from '@/Components/Skills';
import ContactSection from '@/Components/ContactSection';
import About from '@/Components/About';
const Page = () => {
  return (
    <main>
      <Hero />
    <About/>
      <Skills />
      <ContactSection />
    </main>
  );
};

export default Page;
