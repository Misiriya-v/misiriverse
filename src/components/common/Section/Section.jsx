const Section = ({
  id,
  children,
  className = "",
}) => {
  return (
    <section
      id={id}
      className={`
        relative
        overflow-hidden
        bg-[#050816]
        py-24
        md:py-28
        lg:py-32
        ${className}
      `}
    >
      {children}
    </section>
  );
};

export default Section;