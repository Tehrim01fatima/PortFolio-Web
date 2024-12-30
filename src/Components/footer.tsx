import { FOOTER_LINKS, SOCIALS } from "./constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black px-6 py-10 sm:py-16 text-white">
      <div className="container mx-auto flex flex-col gap-10 sm:gap-14 md:flex-row justify-between pb-6 sm:pb-8">
        
     
        <ul className="flex flex-wrap gap-4 sm:gap-6 justify-center md:justify-start text-gray-300">
          {FOOTER_LINKS.map((link) => (
            <li key={link.key}>
              <Link
                href={link.href}
                className="text-sm font-medium hover:text-amber-400 hover:shadow-md hover:shadow-pink-700 transition-transform transform hover:scale-105"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

  
        <ul className="flex gap-4 justify-center md:justify-end ">
          {SOCIALS.map((social) => (
            <li key={social.key}>
              <Link
                href={social.href}
                className="h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center rounded-full border border-gray-500 hover:border-amber-400 transition-all hover:bg-amber-500 hover:text-black shadow-lg transform hover:rotate-6 hover:shadow-pink-500 hover:shadow-md "
              >
                <span className="text-xl sm:text-2xl ">{social.icon}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

 
      <div className="flex items-center justify-center my-6 sm:my-8">
        <div className="h-0.5 w-2/3 bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
      </div>

      <p className="text-center text-gray-400 text-sm tracking-wider">
        Made with ❤️ by <span className="text-amber-400 font-semibold">Tehrim Fatima</span>
      </p>
    </footer>
  );
};

export default Footer;
