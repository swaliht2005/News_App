import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-3 shadow-md bg-white box ">
      {/* Left - Logo */}
      <div className="flex items-center space-x-2">
        
        <span className="text-xl font-bold text-black"> News Aggregator </span>
      </div>

      {/* Center - Search Bar */}
      <div className="flex items-center border rounded-md bg-gray-100 px-4 py-2">
        
        <input
          type="text"
          placeholder="Search Flipboard"
          className="bg-transparent outline-none ml-2 text-gray-600 w-64"
        />
      </div>

      {/* Right - Links */}
      <div className="flex items-center space-x-4">
        <a href="#" className="text-gray-700 font-medium hover:underline">
          Newsletters
        </a>
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
