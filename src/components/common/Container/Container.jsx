const Container = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`
        relative
        z-10
        mx-auto
        w-full
        max-w-7xl
        px-6
        sm:px-8
        lg:px-10
        xl:px-12
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Container;