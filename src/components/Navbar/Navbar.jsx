import React, { useState } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [mobileMenuOpen,setMobileMenuOpen]= useState(false);
  return (
    <nav>
      <div className="max-w-7xl mx-auto px-10 py-4 flex justify-between items-center">
        <div>
          <Link
            to=""
            className="text-3xl font-bold text-amber-500 hover:text-amber-600 transition"
          >
            🍽️ FOODIED
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-8 ">
          <Link to="/" className="text-gray-700 font-semibold hover:text-amber-500 transition">Home</Link>
          <Link to="/menu" className="text-gray-700 font-semibold hover:text-amber-500 transition">Menu</Link>
          <Link to="/about" className="text-gray-700 font-semibold hover:text-amber-500 transition">About</Link>
          <Link to="/contact" className="text-gray-700 font-semibold hover:text-amber-500 transition"> contact</Link>
          <button 
          aria-label="Search"
          className="text-xl ext-gray-700 font-semibold hover:text-amber-500 transition"
          onClick={()=>alert("SearchBar Clicked!")}
          >
            <FaSearch />
          </button>
          <button
          aria-label="Cart"
          className="text-gray-700 hover:text-blue-600 transition text-xl relative"
            onClick={() => alert("Cart clicked!")}

          >
            <FaShoppingCart /> <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs px-1">2</span>
          </button>
          <Link 
          to="/" 
          className="ml-4 px-6 py-2 bg-white font-semibold text-gray-700 border-1 rounded-full hover:bg-gray-400 transition">
            Sign Up
            </Link>
        </div>
        <div className="md:hidden">
            <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
