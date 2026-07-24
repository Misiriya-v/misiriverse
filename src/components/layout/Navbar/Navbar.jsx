import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";

import navLinks from "./navLinks";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((link) =>
        document.getElementById(link.id)
      );

      sections.forEach((section) => {
        if (!section) return;

        const top = section.offsetTop - 120;
        const bottom = top + section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050816]/90 backdrop-blur-xl shadow-lg border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between px-6 transition-all duration-300 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        {/* Logo */}

        <a
          href="#home"
          className="text-3xl font-bold tracking-wide select-none"
        >
          <span className="text-white">Misiri</span>

          <span className="text-emerald-400">Verse</span>
        </a>

        {/* Desktop Navigation */}

        <nav className="hidden lg:flex items-center gap-8">

          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`relative transition duration-300 ${
                active === link.id
                  ? "text-emerald-400"
                  : "text-gray-300 hover:text-emerald-400"
              }`}
            >
              {link.title}

              {active === link.id && (
                <motion.span
                  layoutId="activeNav"
                  className="absolute left-0 -bottom-2 w-full h-[2px] bg-emerald-400 rounded-full"
                />
              )}
            </a>
          ))}

        </nav>

        {/* Right Side */}

        <div className="hidden lg:flex items-center gap-5">

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-xl text-gray-300 hover:text-emerald-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-xl text-gray-300 hover:text-emerald-400 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 transition px-5 py-2 rounded-full text-white font-medium"
          >
            <FaDownload />

            Resume
          </a>

        </div>

        {/* Mobile Button */}

        <button
          aria-label="Toggle Menu"
          className="lg:hidden text-3xl text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}

      <AnimatePresence>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#07111f]/95 backdrop-blur-xl border-t border-white/10"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMenuOpen(false)}
                className={`block px-6 py-5 transition ${
                  active === link.id
                    ? "bg-emerald-500/10 text-emerald-400"
                    : "text-gray-300 hover:bg-white/5"
                }`}
              >
                {link.title}
              </a>
            ))}

            <div className="flex items-center justify-center gap-6 py-6">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="text-2xl hover:text-emerald-400"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="text-2xl hover:text-emerald-400"
              >
                <FaLinkedin />
              </a>

            </div>

          </motion.div>
        )}

      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;