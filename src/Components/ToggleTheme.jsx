import React from "react";

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button onClick={() => setDarkMode((prevMode) => !prevMode)}>
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ThemeToggle;
