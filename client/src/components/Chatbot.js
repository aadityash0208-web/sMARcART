import React, { useState, useEffect, useRef } from 'react';
import '../styles/Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm SmartBot 🤖. Ask me about orders, returns, or product suggestions!", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // 1. Add User Message
    const userMsg = { text: input, sender: 'user' };
    setMessages((prev) => [...prev, userMsg]);
    
    const userInput = input.toLowerCase();
    setInput('');

    // 2. AI Logic (Simulated)
    setTimeout(() => {
      let botResponse = "I didn't quite catch that. Try asking about 'shoes', 'tracking', or 'support'.";

      if (userInput.includes('hello') || userInput.includes('hi')) {
        botResponse = "Hello there! 👋 How can I help you shop today?";
      } else if (userInput.includes('track') || userInput.includes('order')) {
        botResponse = "You can track your orders in the 'My Orders' section under your Profile! 📦";
      } else if (userInput.includes('return') || userInput.includes('refund')) {
        botResponse = "We have a 7-day no-questions-asked return policy. Just email support@smartcart.com.";
      } else if (userInput.includes('shoe') || userInput.includes('fashion')) {
        botResponse = "Our summer collection is trending! Check out the 'Clothing' category for the latest drops. 👟";
      } else if (userInput.includes('price') || userInput.includes('discount')) {
        botResponse = "Use code 'SUMMER2026' for a special discount at checkout! 💸";
      }

      setMessages((prev) => [...prev, { text: botResponse, sender: 'bot' }]);
    }, 1000);
  };

  return (
    <div className="chatbot-wrapper">
      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <span>🤖 Smart Assistant</span>
            <button onClick={toggleChat}>×</button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={handleSend} className="chatbot-input">
            <input 
              type="text" 
              placeholder="Type a message..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">➤</button>
          </form>
        </div>
      )}

      {/* Floating Button */}
      <button className="chatbot-toggle" onClick={toggleChat}>
        {isOpen ? 'Close' : '💬 Chat with AI'}
      </button>
    </div>
  );
};

export default Chatbot;