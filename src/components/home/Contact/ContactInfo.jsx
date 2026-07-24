import ContactCard from "./ContactCard";
import { contactInfo } from "./contactData";

const ContactInfo = () => {
  return (
    <div className="space-y-6">
      {/* Section Title */}
      <div>
        <h3 className="text-3xl font-bold text-white">
          Get In Touch
        </h3>

        <p className="mt-3 max-w-md text-slate-400 leading-relaxed">
          I'm currently open to full-time opportunities, internships, and
          freelance projects. Feel free to reach out if you'd like to discuss a
          project or just say hello.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="space-y-5">
        {contactInfo.map((item, index) => (
          <ContactCard
            key={item.id}
            item={item}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;