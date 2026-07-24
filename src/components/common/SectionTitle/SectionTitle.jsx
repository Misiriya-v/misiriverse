import "./SectionTitle.css";

const SectionTitle = ({
  title,
  subtitle,
  align = "center",
  badge,
}) => {
  return (
    <div className={`section-title-wrapper ${align}`}>
      {badge && (
        <span className="section-badge">
          {badge}
        </span>
      )}

      <h2 className="section-title">
        {title}
      </h2>

      {subtitle && (
        <p className="section-subtitle">
          {subtitle}
        </p>
      )}

      <div className="section-divider">
        <span></span>
      </div>
    </div>
  );
};

export default SectionTitle;