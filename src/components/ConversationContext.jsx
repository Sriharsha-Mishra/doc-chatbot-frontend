import React from 'react';
import './ConversationContext.css';

const ConversationContext = ({ onNewConversation, hasActiveConversation }) => {
  return (
    <div className="conversation-context">
      {hasActiveConversation && (
        <button 
          className="new-conversation-btn" 
          onClick={onNewConversation}
          title="Start a new conversation"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          New Conversation
        </button>
      )}
    </div>
  );
};

export default ConversationContext;
