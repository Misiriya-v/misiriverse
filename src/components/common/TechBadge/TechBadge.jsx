import "./TechBadge.css";

const TechBadge = ({
  name,
  icon,
  color,
  outlined = false,
  size = "md",
}) => {
  return (
    <div
      className={`tech-badge tech-${size} ${
        outlined ? "outlined" : ""
      }`}
      style={{
        "--badge-color": color || "#10b981",
      }}
    >
      {icon && (
        <span className="tech-icon">
          {icon}
        </span>
      )}

      <span className="tech-name">
        {name}
      </span>
    </div>
  );
};

export default TechBadge;