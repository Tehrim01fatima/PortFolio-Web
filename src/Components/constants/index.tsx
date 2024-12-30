
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export const NAV_LINKS = [
  { href: "/", key: "home", label: "Home" },
  { href: "/about", key: "about", label: "about" },
  { href: "/skills", key: "skills", label: "Skills" },
  { href: "/contact", key: "contact", label: "contact" },
];

 export const skills = [
  { name: 'HTML 5', icon: '/pictures/html-1.svg' },
  { name: 'CSS 3', icon: '/pictures/css-3.svg' },
  { name: 'JavaScript', icon: '/pictures/logo-javascript.svg' },
  { name: 'Typescript', icon: '/pictures/typescript.svg' }, 
  { name: 'NEXT.JS', icon: '/pictures/next-js.svg' },
  { name: 'Tailwind CSS', icon: '/pictures/tailwind-css-2.svg' },
 
];


export const FOOTER_LINKS = [
  { href: "/", key: "home", label: "Home" },
  { href: "/skills", key: "skills", label: "Skills" },
  { href: "/contact", key: "contact", label: "Contact" },
];

export const SOCIALS = [
  { href: "https://github.com/Tehrim01fatima", key: "github", icon: <FaGithub /> },
  { href: "https://www.linkedin.com/tehrim-fatima", key: "linkedin", icon: <FaLinkedin /> },
  { href: "https://instagram.com/fatima_tehrim22", key: "instagram", icon: <FaInstagram /> },
];
