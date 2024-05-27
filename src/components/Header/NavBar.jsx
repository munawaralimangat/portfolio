import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" bg-gradient-to-r from-black to-slate-950 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-400 hover:bg-clip-text hover:text-transparent font-bold text-sm sm:text-lg">
              MERN STACK DEVELOPER
            </Link>
          </div>
          <div className="hidden md:flex items-center">
            <Link to="/about" className="text-gray-300 hover:bg-gradient-to-r hover:from-indigo-400 hover:to-cyan-400 hover:bg-clip-text hover:text-transparent px-3 py-2">
              About Me
            </Link>
            <Link to="/projects" className="text-gray-300 hover:bg-gradient-to-r hover:from-indigo-400 hover:to-cyan-400 hover:bg-clip-text hover:text-transparent px-3 py-2">
              Projects
            </Link>
            <Link to="/contact" className="text-gray-300 hover:bg-gradient-to-r hover:from-indigo-400 hover:to-cyan-400 hover:bg-clip-text hover:text-transparent px-3 py-2">
              Contact
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-300 hover:text-white focus:outline-none px-4">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-slate-700 to-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/about" className="text-gray-300 hover:text-white block px-3 py-2">
              About
            </Link>
            <Link to="/projects" className="text-gray-300 hover:text-white block px-3 py-2">
              Projects
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white block px-3 py-2">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
