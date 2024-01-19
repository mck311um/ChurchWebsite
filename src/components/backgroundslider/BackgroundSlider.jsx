import "../../assets/style.css";
import backgroundImages from "./BackgroundImages.js";
import React, { useState, useEffect } from "react";

const BackgroundSlider = () => {
  const [currentState, setCurrentState] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentState((prevState) =>
        prevState < backgroundImages.length - 1 ? prevState + 1 : 0
      );
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  const bgImageStyle = {
    backgroundImage: `url(${backgroundImages[currentState].url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
    position: "absolute",
    transition: "background-image 2s ease-in-out",
  };

  return (
    <div className="slider">
      <div style={bgImageStyle}>
        <div className="slider-text">
          <h1>Word Revival Center</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
            consectetur asperiores aliquid rerum saepe quibusdam suscipit
          </p>
        </div>
      </div>
    </div>
  );
};

export default BackgroundSlider;
