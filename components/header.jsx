import React from 'react';
import { useTheme } from '../context/ThemeContext'; // مسیر را مطابق با محل قرارگیری فایل تغییر دهید

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className={`w-full p-4 shadow-md ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-green-600 text-white'}`}>
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        {/* لوگو */}
        <div className="text-3xl font-bold flex items-center">
          <span className="mr-2">⚽</span>
          <span>Football ChatBot</span>
        </div>

        {/* دکمه تغییر تم */}
      
      </div>
    </div>
  );
};

export default Header;
