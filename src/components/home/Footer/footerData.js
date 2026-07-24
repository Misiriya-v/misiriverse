import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export const footerLinks = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Journey",
    href: "#experience",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Achievements",
    href: "#achievements",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/YOUR_GITHUB_USERNAME",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://linkedin.com/in/YOUR_LINKEDIN_USERNAME",
  },
  {
    name: "Email",
    icon: FaEnvelope,
    url: "mailto:YOUR_EMAIL@gmail.com",
  },
];

export const footerInfo = {
  logo: "MisiriVerse",

  title: "Full Stack Developer",

  description:
    "Crafting modern web experiences with clean code, creativity, and innovation.",

  copyright: `© ${new Date().getFullYear()} MisiriVerse. All Rights Reserved.`,

  builtWith: "Built with React • Vite • Tailwind CSS",
};