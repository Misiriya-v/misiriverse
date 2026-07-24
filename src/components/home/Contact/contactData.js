import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaFileDownload,
} from "react-icons/fa";

export const contactInfo = [
  {
    id: 1,
    icon: FaEnvelope,
    title: "Email",
    value: "nabeesathulmisiriyav@gmail.com",
    link: "mailto:nabeesathulmisiriyav@gmail.com",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    icon: FaPhoneAlt,
    title: "Phone",
    value: "+91 8714392425",
    link: "tel:+918714392425",
    color: "from-emerald-500 to-green-500",
  },
  {
    id: 3,
    icon: FaMapMarkerAlt,
    title: "Location",
    value: "Palakkad, Ernakulam, Kerala",
    link: "https://maps.google.com/?q=Kalamassery,Kerala",
    color: "from-orange-500 to-red-500",
  },
];

export const socialLinks = [
  {
    id: 1,
    icon: FaGithub,
    name: "GitHub",
    url: "https://github.com/Misiriya-v",
  },
  {
    id: 2,
    icon: FaLinkedin,
    name: "LinkedIn",
    url: "https://linkedin.com/in/nabeesathulmisiriyav",
  },
];

export const resume = {
  icon: FaFileDownload,
  title: "Download Resume",
  file: "/resume.pdf",
};