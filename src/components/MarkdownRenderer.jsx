import React from 'react';
import './MarkdownRenderer.css';

const MarkdownRenderer = ({ content }) => {
  const formatText = (text) => {
    if (!text) return '';
    
    const lines = text.split('\n');
    
    return lines.map((line, index) => {
      if (line.startsWith('# ')) {
        return <h1 key={index}>{line.substring(2)}</h1>;
      }
      if (line.startsWith('## ')) {
        return <h2 key={index}>{line.substring(3)}</h2>;
      }
      if (line.startsWith('### ')) {
        return <h3 key={index}>{line.substring(4)}</h3>;
      }
      
      if (line.startsWith('- ')) {
        return <li key={index}>{processInlineFormatting(line.substring(2))}</li>;
      }
      
      if (/^\d+\.\s/.test(line)) {
        return <li key={index}>{processInlineFormatting(line.substring(line.indexOf('.')+1))}</li>;
      }
      
      if (line.trim() === '') {
        return <br key={index} />;
      }
      
      return <p key={index}>{processInlineFormatting(line)}</p>;
    });
  };
  
  const processInlineFormatting = (text) => {
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');
    text = text.replace(/`(.*?)`/g, '<code>$1</code>');
    
    return <span dangerouslySetInnerHTML={{ __html: text }} />;
  };
  
  return (
    <div className="markdown-content">
      {formatText(content)}
    </div>
  );
};

export default MarkdownRenderer;
