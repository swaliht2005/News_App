import React from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {

  const navigate = useNavigate();  
  return (
    <nav className="flex items-center justify-between px-6 py-3 shadow-md bg-white">
      {/* Left - Logo */}
      <div className="flex items-center space-x-2">
        <span className="text-xl font-bold text-black">News Aggregator</span>
      </div>

     
      {/* Right - Links */}
      <div className="flex items-center space-x-4">
               
         
        <button className="bg-red-500 text-white px-4 py-2 rounded-md font-medium hover:bg-red-600">
          Sign up
        </button>
        
        <a href="#" className="text-gray-700 font-medium hover:underline">
          Log in
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
