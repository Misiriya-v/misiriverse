import Section from "../../common/Section";
import Container from "../../common/Container";
import SectionHeading from "../../common/SectionHeading";

import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import SocialLinks from "./SocialLinks";

import contactHero from "../../../images/illustrations/contact-hero.png";

const Contact = () => {
  return (
    <Section
      id="contact"
      className="relative overflow-hidden"
    >
      {/* Background Glow */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute -left-32 top-16 h-[450px] w-[450px] rounded-full bg-violet-500/10 blur-[180px]" />

        <div className="absolute -right-24 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[180px]" />

      </div>

      <Container className="relative z-10">

        <SectionHeading
          badge="Contact"
          heading="Let's Work Together"
          description="I'm actively seeking Full Stack Developer opportunities. Whether you have a project, internship, or full-time role, I'd love to hear from you."
        />

        <div className="mt-20 grid items-center gap-20 lg:grid-cols-2">

          {/* Left Side - Illustration */}

          <div className="relative flex justify-center">

            <div className="absolute h-72 w-72 rounded-full bg-violet-500/20 blur-[120px]" />

            <img
              src={contactHero}
              alt="Let's Connect Illustration"
              className="
                relative
                z-10
                w-full
                max-w-xl
                select-none
                drop-shadow-[0_0_50px_rgba(139,92,246,0.35)]
              "
              draggable={false}
            />

          </div>

          {/* Right Side */}

          <div>

            <ContactInfo />

            <SocialLinks />

            <div className="mt-10">
              <ContactForm />
            </div>

          </div>

        </div>

      </Container>
    </Section>
  );
};

export default Contact;