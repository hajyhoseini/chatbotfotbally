import React from "react";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`fixed top-5 left-5 flex items-center justify-center w-14 h-14 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border-2 transition-all duration-300 shadow-lg ${
        isDarkMode
          ? "bg-gray-900 border-yellow-500 shadow-[0_0_15px_rgba(255,215,0,0.6)]"
          : "bg-white border-blue-500 shadow-[0_0_15px_rgba(0,132,255,0.6)]"
      }`}
      whileTap={{ scale: 0.9 }}
      whileHover={{ rotate: [0, 10, -10, 0] }} // حرکت نوسانی برای حس هیجان فوتبال
    >
      {isDarkMode ? (
        <Moon className="text-yellow-400 w-8 h-8 sm:w-6 sm:h-6 md:w-8 md:h-8 animate-pulse" />
      ) : (
        <Sun className="text-blue-500 w-8 h-8 sm:w-6 sm:h-6 md:w-8 md:h-8 animate-spin-slow" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;
