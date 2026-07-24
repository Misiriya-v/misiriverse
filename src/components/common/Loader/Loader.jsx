import "./Loader.css";

const Loader = ({
  fullScreen = true,
  text = "Loading...",
}) => {
  return (
    <div
      className={`loader-wrapper ${
        fullScreen ? "fullscreen" : ""
      }`}
    >
      <div className="loader-container">
        <div className="loader-ring">
          <span></span>
        </div>

        <h2 className="loader-logo">
          Misiri<span>Verse</span>
        </h2>

        <p className="loader-text">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Loader;