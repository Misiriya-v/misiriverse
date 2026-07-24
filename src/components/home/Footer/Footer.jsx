import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

import Container from "../../common/Container";

import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterSocials from "./FooterSocials";
import { footerInfo } from "./footerData";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050816]">
      {/* Aurora Background */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 left-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <Container>
        <div className="relative z-10 py-16">

          {/* Top Section */}

          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">

            <FooterBrand />

            <FooterLinks />

            <FooterSocials />

          </div>

          {/* Divider */}

          <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Bottom Section */}

          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row">

            <div>
              <p className="text-sm text-gray-400">
                {footerInfo.copyright}
              </p>

              <p className="mt-2 text-xs text-gray-500">
                {footerInfo.builtWith}
              </p>
            </div>

            {/* Back To Top */}

            <motion.button
              whileHover={{
                y: -4,
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={scrollToTop}
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-emerald-500/30
                bg-white/5
                text-emerald-400
                backdrop-blur-md
                transition-all
                duration-300
                hover:bg-emerald-500/10
                hover:shadow-[0_0_25px_rgba(16,185,129,0.3)]
              "
              aria-label="Back to Top"
            >
              <FaArrowUp />
            </motion.button>

          </div>

        </div>
      </Container>
    </footer>
  );
};

export default Footer;