
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="flex justify-between items-center px-8 py-4 w-full max-w-screen-xl m-auto pt-10">
      
      
      <div className="flex items-center">
        <img src="./logo.png" alt="Carboncrunch" className="w-[205px] h-[52px]" />
      </div>

      
      <div className="hidden md:flex bg-white shadow-md px-[24px] py-[16px] rounded-[15px]">
        <ul className="flex space-x-8 text-gray-800 font-medium">
          <li className="cursor-pointer hover:text-green-600">Home</li>
          <li className="cursor-pointer hover:text-green-600">Services</li>
          <li className="cursor-pointer hover:text-green-600">Blog</li>
          <li className="cursor-pointer hover:text-green-600">About Us</li>
          <li className="cursor-pointer hover:text-green-600">Contact</li>
        </ul>
      </div>

      
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-gray-800">
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hidden sm:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      
      <div
        className={`md:hidden  fixed z-20 top-0 left-0 w-3/4 h-full bg-white shadow-md py-4 transition-transform transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
        style={{ transition: "transform 0.3s ease-in-out" }}
      >
        <div className="flex justify-end px-4">
          <button onClick={toggleMenu} className="text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <ul className="flex flex-col items-center space-y-6 text-gray-800 font-medium">
          <li className="cursor-pointer hover:text-green-600">Home</li>
          <li className="cursor-pointer hover:text-green-600">Services</li>
          <li className="cursor-pointer hover:text-green-600">Blog</li>
          <li className="cursor-pointer hover:text-green-600">About Us</li>
          <li className="cursor-pointer hover:text-green-600">Contact</li>
        </ul>

        
        <div className="flex flex-col items-center gap-4 mt-6 absolute px-10 bottom-4">
          <button className="px-4 py-2 bg-green-200 text-green-700 rounded-md w-50">
            Login
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-md w-50">
            Book Demo
          </button>
        </div>
      </div>

      
      <div className="space-x-4 hidden md:flex">
        <button className="px-4 py-2 bg-green-200 text-green-700 rounded-md ">
          Login
        </button>
        <button className="px-4 py-2 bg-green-600 text-white rounded-md">
          Book Demo
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

