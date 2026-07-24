import "./Card.css";

const Card = ({
  children,
  title,
  subtitle,
  icon,
  image,
  footer,
  className = "",
  hover = true,
  onClick,
}) => {
  return (
    <div
      className={`card ${hover ? "card-hover" : ""} ${className}`}
      onClick={onClick}
    >
      {image && (
        <div className="card-image">
          <img src={image} alt={title || "card"} />
        </div>
      )}

      {(icon || title || subtitle) && (
        <div className="card-header">
          {icon && <div className="card-icon">{icon}</div>}

          <div className="card-heading">
            {title && <h3>{title}</h3>}
            {subtitle && <p>{subtitle}</p>}
          </div>
        </div>
      )}

      <div className="card-body">
        {children}
      </div>

      {footer && (
        <div className="card-footer">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;