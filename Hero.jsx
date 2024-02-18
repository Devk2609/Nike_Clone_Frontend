import React, { useContext } from "react";
import { ThemeContext } from "../App";

const Hero = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={`hero container ${theme === "dark" ? "dark" : ""}`}>
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
        </p>

        <div className="hero-button">
          <button>Shop Now</button>
          <button className="secondary-btn App dark">Category</button>
        </div>
        <div className="shopping">
          <p>We're also available at:</p>
          <div className="portals">
            <img src="/Images/amazon.png" alt="" />
            <img src="/Images/flipkart.png" alt="" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        {/* Render different hero images based on the theme */}
        {theme === "light" ? (
          <img src="/Images/hero-image.png" alt="" />
        ) : (
          <img src="/Images/hero-image-dark.png" alt="" />
        )}
      </div>
    </main>
  );
};

export default Hero;
