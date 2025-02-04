import React, { useState, useEffect } from 'react';

const MoodChangeButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMood = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Update the body class when isDarkMode changes
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('bg-gray-900', 'text-white');
      document.body.classList.remove('bg-white', 'text-black');
    } else {
      document.body.classList.add('bg-white', 'text-black');
      document.body.classList.remove('bg-gray-900', 'text-white');
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <button 
        onClick={toggleMood} 
        className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
      >
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
}

export default MoodChangeButton;
