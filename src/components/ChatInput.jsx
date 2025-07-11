import React, { useState } from 'react';
import './ChatInput.css';

const ChatInput = ({ onSendMessage, isLoading }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim() || isLoading) return;
    onSendMessage(message);
    setMessage('');
  };

  return (
    <div className="chat-input">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={isLoading ? "Please wait..." : "Ask about the platform..."}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={isLoading}
        />
        <button type="submit" disabled={!message.trim() || isLoading}>
          {isLoading ? (
            <div className="loading-spinner">
              <div className="spinner"></div>
            </div>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          )}
        </button>
      </form>
      {isLoading && (
        <div className="chat-status">
          <div className="typing-indicator">
            <span></span><span></span><span></span>
          </div>
          <span>Getting answer from documentation...</span>
        </div>
      )}
    </div>
  );
};

export default ChatInput;
