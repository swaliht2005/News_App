import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const MoodChangeButton = () => {
  const [isDark, setIsDark] = useState(false);
  const navigate = useNavigate();  
  const toggleMode = () => {
    setIsDark(!isDark);
    document.body.style.backgroundColor = isDark ? 'white' : 'black';
    document.body.style.color = isDark ? 'black' : 'white';
  };

  return (
    <div className="h-screen flex justify-center gap-8 items-center">
      
      <button 
        onClick={toggleMode} 
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        {isDark ? 'Light Mode' : 'Dark Mode'}
      </button>
      <button className="bg-gradient-to-l from-red-400 to-orange-500 text-white px-4 py-2 rounded-md font-medium hover:bg-red-600"
                  onClick={() => navigate("/savedarticlespage")}> 
                    Saved Articles
        </button>
    </div>
  );
};

export default MoodChangeButton;
