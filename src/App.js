import React, { useState } from 'react';
import './App.css';
import ChatHeader from './components/ChatHeader';
import ChatMessages from './components/ChatMessages';
import ChatInput from './components/ChatInput';
import { sendChatMessage } from './services/api';

function App() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your FAQ assistant. Ask me anything about our platform!",
      sender: 'bot',
      timestamp: new Date().toISOString()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
    
  const handleSendMessage = async (message) => {
    if (message.trim() === '') return;
    
    const userMessage = {
      id: Date.now(),
      text: message,
      sender: 'user',
      timestamp: new Date().toISOString()
    };
    
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setIsLoading(true);
    
    try {
      const response = await sendChatMessage(message);
      
      console.log('Processed response for UI:', response);
      
      const botMessage = {
        id: Date.now() + 1,
        text: response.reply || 'Error: Could not parse response',
        sender: 'bot',
        timestamp: new Date().toISOString()
      };
      
      setMessages(prevMessages => [...prevMessages, botMessage]);
    } catch (err) {
      console.error('Error:', err);
      
      const errorMessage = {
        id: Date.now() + 1,
        text: 'Sorry, I encountered an error. Please try again.',
        sender: 'bot',
        timestamp: new Date().toISOString(),
        isError: true
      };
      
      setMessages(prevMessages => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <ChatHeader />
      <ChatMessages messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
    </div>
  );
}

export default App;
