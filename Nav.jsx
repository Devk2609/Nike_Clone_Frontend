import React, { useContext } from "react";
import { ThemeContext } from "../App";

const Nav = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <nav className="container">
        <div className="logo">
          {/* Render different logos based on the theme */}
          {theme === "light" ? (
            <img src="/Images/brand_logo_light.png" alt="Nike Light" />
          ) : (
            <img src="/Images/brand_logo_dark.png" alt="Nike Dark" />
          )}
        </div>

        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>

        <button>Login</button>
      </nav>
    </div>
  );
};

export default Nav;
