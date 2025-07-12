import React from 'react';
import './ChatHeader.css';
import ThemeToggle from './ThemeToggle';

const ChatHeader = ({ darkMode, toggleTheme }) => {
  return (
    <div className="chat-header">
      <div className="logo-title-container">
        <div className="logo-container">
          {/* Conditionally render logo based on theme */}
          {darkMode ? (
            <img src="/logo-dark.png" alt="Logo" className="header-logo" />
          ) : (
            <img src="/logo-light.png" alt="Logo" className="header-logo" />
          )}
        </div>
        <h1>Platform FAQ Chatbot</h1>
      </div>
      <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
    </div>
  );
};

export default ChatHeader;
