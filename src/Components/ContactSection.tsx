"use client"; 
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };
  





  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: "ease-in-out", 
      once: true, 
    });
  }, []);

  return (
    <section className="bg-black py-12 px-4 sm:py-16 sm:px-6 lg:px-8" id="contact">
      <div className="container mx-auto max-w-4xl">
        <h2
          className="text-3xl sm:text-4xl font-bold mb-8 text-center text-amber-500"
         
        >
          CONTACT ME
        </h2>
        <form
          onSubmit={handleSubmit}
          className="bg-amber-400 p-6 sm:p-8 rounded-lg shadow-xl shadow-pink-700"
          data-aos="fade-up" 
        >
          <div className="mb-6" > 
            <label htmlFor="name" className="block text-gray-900 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="mb-6" >
            <label htmlFor="email" className="block text-gray-900 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="mb-6" >
            <label htmlFor="message" className="block text-gray-900 font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Your Message"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md font-medium hover:bg-white hover:text-black transition-colors duration-300"
           
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
