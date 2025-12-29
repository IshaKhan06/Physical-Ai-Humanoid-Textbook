import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './ChatbotIcon.module.css';

const ChatbotIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const closeChat = () => {
    setIsOpen(false);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      const newMessage = { id: Date.now(), text: inputValue, sender: 'user' };
      setMessages(prev => [...prev, newMessage]);

      // Simulate bot response
      setTimeout(() => {
        const botResponse = {
          id: Date.now() + 1,
          text: "Thank you for your message! This is a demo response from the chatbot.",
          sender: 'bot'
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1000);

      setInputValue('');
    }
  };

  return (
    <>
      {/* Chatbot Icon - Fixed to bottom right */}
      <div className={clsx(styles.chatbotIcon, isOpen && styles.hidden)} onClick={toggleChat}>
        <div className={styles.icon}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 13.54 2.36 15.01 3.02 16.32L2 22L7.68 20.97C8.98 21.63 10.45 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="white"/>
            <path d="M9.5 13.5H10.5C10.78 13.5 11 13.28 11 13V12.5C11 12.22 10.78 12 10.5 12H9.5C9.22 12 9 12.22 9 12.5V13C9 13.28 9.22 13.5 9.5 13.5Z" fill="#212121"/>
            <path d="M13.5 13.5H14.5C14.78 13.5 15 13.28 15 13V12.5C15 12.22 14.78 12 14.5 12H13.5C13.22 12 13 12.22 13 12.5V13C13 13.28 13.22 13.5 13.5 13.5Z" fill="#212121"/>
            <path d="M11.5 16C12.33 16 13 15.33 13 14.5C13 13.67 12.33 13 11.5 13C10.67 13 10 13.67 10 14.5C10 15.33 10.67 16 11.5 16Z" fill="#212121"/>
          </svg>
        </div>
      </div>

      {/* Chat Interface */}
      {isOpen && (
        <div className={styles.chatContainer}>
          <div className={styles.chatHeader}>
            <div className={styles.chatTitle}>Chat with us</div>
            <button className={styles.closeButton} onClick={closeChat}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="white"/>
              </svg>
            </button>
          </div>
          <div className={styles.chatMessages}>
            {messages.length === 0 ? (
              <div className={styles.welcomeMessage}>
                Hello! How can I help you today?
              </div>
            ) : (
              messages.map((message) => (
                <div
                  key={message.id}
                  className={clsx(
                    styles.message,
                    message.sender === 'user' ? styles.userMessage : styles.botMessage
                  )}
                >
                  {message.text}
                </div>
              ))
            )}
          </div>
          <form onSubmit={handleSendMessage} className={styles.chatInputForm}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              className={styles.chatInput}
            />
            <button type="submit" className={styles.sendButton}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z" fill="white"/>
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatbotIcon;