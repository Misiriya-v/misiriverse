import "./SocialLinks.css";

const SocialLinks = ({
  links = [],
  size = "md",
  direction = "row",
}) => {
  return (
    <div
      className={`social-links social-${direction} social-${size}`}
    >
      {links.map((item) => {
        const Icon = item.icon;

        return (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label={item.name}
            title={item.name}
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;