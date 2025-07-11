import React, { useEffect, useRef } from 'react';
import './ChatMessages.css';
import MarkdownRenderer from './MarkdownRenderer';

const ChatMessages = ({ messages }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="chat-messages">
      {messages.map((message) => (
        <div 
          key={message.id} 
          className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}
                     ${message.isError ? 'error-message' : ''}`}
        >
          <div className="message-content">
            {message.sender === 'user' ? (
              <p>{message.text}</p>
            ) : (
              <MarkdownRenderer content={message.text} />
            )}
            
            {message.sources && message.sources.length > 0 && (
              <div className="message-sources">
                <div className="sources-title">Sources:</div>
                <ul>
                  {message.sources.map((source, index) => (
                    <li key={`source-${message.id}-${index}`}>
                      <a 
                        href={source.url || '#'} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        {source.title || `Source ${index + 1}`}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            <span className="message-time">
              {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatMessages;
