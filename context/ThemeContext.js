import React, { createContext, useState, useContext } from 'react';

// ایجاد کانتکست برای تم
const ThemeContext = createContext();

// کامپوننت Provider برای مدیریت تم
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // تغییر تم بین شب و روز
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// هُک برای استفاده از کانتکست تم
export const useTheme = () => useContext(ThemeContext);
