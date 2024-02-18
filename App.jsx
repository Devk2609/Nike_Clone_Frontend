import React, { useState, useContext } from "react";
import "./App.css";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import { createContext } from "react";

export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`App ${theme}`}>
        <Nav />
        <Hero />
        <ToggleButton />
      </div>
    </ThemeContext.Provider>
  );
};

const ToggleButton = () => {
  const { toggleTheme } = useContext(ThemeContext);

  const handleClick = () => {
    toggleTheme();
  };

  return (
    <button onClick={handleClick} className="toggle-button">
      Change Theme
    </button>
  );
};

export default App;
