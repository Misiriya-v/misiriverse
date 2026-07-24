import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPaperPlane,
  FaUser,
  FaEnvelope,
  FaTag,
  FaCommentDots,
} from "react-icons/fa";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const ContactForm = () => {
  const [formData, setFormData] = useState(initialForm);
  const [loading, setLoading] = useState(false);

  const handleChange = ({ target }) => {
    setFormData((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      // TODO:
      // Integrate EmailJS / Web3Forms / Formspree here

      await new Promise((resolve) => setTimeout(resolve, 1500));

      alert("Message sent successfully!");

      setFormData(initialForm);
    } catch (error) {
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const fields = [
    {
      name: "name",
      type: "text",
      placeholder: "Your Name",
      icon: FaUser,
    },
    {
      name: "email",
      type: "email",
      placeholder: "Your Email",
      icon: FaEnvelope,
    },
    {
      name: "subject",
      type: "text",
      placeholder: "Subject",
      icon: FaTag,
    },
  ];

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-8
        backdrop-blur-xl
        shadow-xl
      "
    >
      <h3 className="mb-2 text-3xl font-bold text-white">
        Send a Message
      </h3>

      <p className="mb-8 text-slate-400">
        Have a project or opportunity? I'd love to hear from you.
      </p>

      <div className="space-y-5">
        {fields.map((field) => {
          const Icon = field.icon;

          return (
            <div key={field.name} className="relative">
              <Icon
                className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-slate-400
                "
              />

              <input
                required
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="
                  w-full
                  rounded-2xl
                  border
                  border-white/10
                  bg-slate-900/40
                  py-4
                  pl-12
                  pr-4
                  text-white
                  outline-none
                  transition
                  duration-300
                  placeholder:text-slate-500
                  focus:border-violet-500
                  focus:ring-2
                  focus:ring-violet-500/20
                "
              />
            </div>
          );
        })}

        <div className="relative">
          <FaCommentDots
            className="
              absolute
              left-4
              top-5
              text-slate-400
            "
          />

          <textarea
            required
            rows={6}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message..."
            className="
              w-full
              resize-none
              rounded-2xl
              border
              border-white/10
              bg-slate-900/40
              py-4
              pl-12
              pr-4
              text-white
              outline-none
              transition
              duration-300
              placeholder:text-slate-500
              focus:border-violet-500
              focus:ring-2
              focus:ring-violet-500/20
            "
          />
        </div>

        <motion.button
          whileHover={{
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.97,
          }}
          disabled={loading}
          type="submit"
          className="
            flex
            w-full
            items-center
            justify-center
            gap-3
            rounded-2xl
            bg-gradient-to-r
            from-violet-600
            via-fuchsia-600
            to-pink-600
            px-6
            py-4
            font-semibold
            text-white
            shadow-lg
            transition
            duration-300
            hover:shadow-violet-500/30
            disabled:cursor-not-allowed
            disabled:opacity-70
          "
        >
          <FaPaperPlane />

          {loading ? "Sending..." : "Send Message"}
        </motion.button>
      </div>
    </motion.form>
  );
};

export default ContactForm;