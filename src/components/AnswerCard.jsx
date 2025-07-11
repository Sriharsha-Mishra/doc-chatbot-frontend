import React from 'react';
import './AnswerCard.css';
import MarkdownRenderer from './MarkdownRenderer';

const AnswerCard = ({ answer, isLoading }) => {
  if (!answer && !isLoading) {
    return null;
  }

  return (
    <div className={`answer-card ${isLoading ? 'loading' : ''}`}>
      {isLoading ? (
        <div className="answer-skeleton">
          <div className="skeleton-header"></div>
          <div className="skeleton-line"></div>
          <div className="skeleton-line"></div>
          <div className="skeleton-line short"></div>
          <div className="skeleton-line"></div>
          <div className="skeleton-line short"></div>
        </div>
      ) : (
        <>
          <div className="answer-content">
            <MarkdownRenderer content={answer.text} />
          </div>
          
          {answer.sources && answer.sources.length > 0 && (
            <div className="answer-sources">
              <div className="sources-title">Sources:</div>
              <ul>
                {answer.sources.map((source, index) => (
                  <li key={`source-${index}`}>
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
          
          <div className="answer-actions">
            <button 
              className="copy-button"
              onClick={() => {
                navigator.clipboard.writeText(answer.text);
                // Optional: Show a copy confirmation here
              }}
              title="Copy to clipboard"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              Copy
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default AnswerCard;
