import "./Button.css";

const Button = ({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  icon = null,
  onClick,
  href,
  target = "_self",
  disabled = false,
}) => {
  const className = `btn btn-${variant} btn-${size}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel="noreferrer"
        className={className}
      >
        {icon && <span className="btn-icon">{icon}</span>}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className="btn-icon">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};

export default Button;