import React from 'react';

const ThemeToggle = ({ darkMode, toggleTheme }) => {
  return (
    <div className="theme-switch-container">
      <label className="theme-switch">
        <input type="checkbox" checked={!darkMode} onChange={toggleTheme} />
        <span className="slider">
          <span className="theme-icon theme-icon-moon">🌙</span>
          <span className="theme-icon theme-icon-sun">☀️</span>
        </span>
      </label>
    </div>
  );
};

export default ThemeToggle;
