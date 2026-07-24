export const scrollToSection = (id) => {
  const section = document.getElementById(id);

  if (!section) return;

  section.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

export const openLink = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

export const downloadResume = () => {
  const link = document.createElement("a");

  link.href = "/resume.pdf";

  link.download = "Nabeesathul_Misiriya_Resume.pdf";

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);
};

export const getCurrentYear = () => new Date().getFullYear();

export const capitalize = (text) =>
  text.charAt(0).toUpperCase() + text.slice(1);

export const delay = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));