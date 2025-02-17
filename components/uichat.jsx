import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle'; // ✅ دکمه تغییر حالت

const Uichat = () => {
  const { isDarkMode } = useTheme();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [aiTypingMessage, setAiTypingMessage] = useState('');

  const handleSendMessage = () => {
    if (input.trim() === '') return;
    setMessages([...messages, { text: input, isUser: true }]);
    setInput('');
    
    setIsTyping(true);
    setAiTypingMessage('');

    setTimeout(() => {
      const aiResponse = "⚽ فوتبال یک ورزش تیمی است که 11 بازیکن در هر تیم دارد!";
      typeMessage(aiResponse);
    }, 1000);
  };

  const typeMessage = (message) => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < message.length) {
        setAiTypingMessage((prev) => prev + message[i]);
        i++;
      } else {
        clearInterval(interval);
        setMessages(prevMessages => [...prevMessages, { text: message, isUser: false }]);
        setIsTyping(false);
        setAiTypingMessage('');
      }
    }, 50);
  };

  return (
    <div className={`relative flex flex-col items-center justify-start h-screen p-5 transition-all duration-300 ${
      isDarkMode ? 'bg-[#121212] text-white' : 'bg-gray-100 text-black'
    }`}>

      {/* ✅ دکمه تغییر حالت */}
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      {/* 📌 جعبه چت */}
      <div className={`w-full max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl h-[400px] overflow-y-auto rounded-xl p-4 shadow-lg transition-all duration-300 ${
        isDarkMode 
          ? 'bg-[#1e1e1e] border border-gray-800' 
          : 'bg-white border border-gray-200'
      }`}>
        {messages.map((msg, index) => (
          <div 
            key={index} 
            className={`my-2 p-3 rounded-xl max-w-[80%] transition-all duration-300 ${
              msg.isUser 
                ? isDarkMode ? 'bg-blue-600 text-white self-end' : 'bg-blue-500 text-white self-end' 
                : isDarkMode ? 'bg-gray-700 text-gray-300 self-start' : 'bg-gray-100 text-black self-start'
            }`}>
            {msg.text}
          </div>
        ))}

        {/* ⌨️ نمایش پیام در حال تایپ */}
        {isTyping && (
          <div className={`my-2 p-3 rounded-xl max-w-[80%] text-left animate-pulse ${
            isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-black'
          }`}>
            {aiTypingMessage || 'در حال تایپ...'}
          </div>
        )}
      </div>

      {/* 📝 فیلد ورودی و دکمه ارسال */}
      <div className="mt-5 flex w-full max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="سوالی در مورد فوتبال بپرس..."
          className={`w-full sm:w-4/5 p-3 rounded-l-xl border outline-none transition-all duration-300 ${
            isDarkMode 
              ? 'bg-gray-800 text-white border-gray-700 placeholder-gray-400' 
              : 'bg-white text-black border-gray-300'
          }`}
        />
        <button 
          onClick={handleSendMessage} 
          className={`w-full sm:w-1/5 p-3 rounded-r-xl transition-all duration-300 transform active:scale-95 ${
            isDarkMode 
              ? 'bg-gradient-to-r from-blue-500 to-green-500 text-white' 
              : 'bg-gradient-to-r from-blue-400 to-green-400 text-white'
          }`}
        >
          ارسال
        </button>
      </div>
    </div>
  );
};

export default Uichat;
