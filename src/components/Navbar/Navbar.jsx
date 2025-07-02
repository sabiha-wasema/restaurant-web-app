import React, { useState } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = ({ query, setQuery, searchMeals}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      searchMeals(query.trim());
    }
  };

  return (
    <nav className="sticky top-0 z-50">
      <div className="bg-white md:bg-transparent max-w-7xl mx-auto px-4 lg:px-10 py-4 flex justify-between items-center">
        <div>
          <Link
            to=""
            className="text-3xl font-bold text-amber-500 hover:text-amber-600 transition"
          >
            🍽️ FOODIED
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-4 lg:space-x-8 ">
          <Link
            to="/"
            className="text-white font-semibold hover:text-amber-500 transition"
          >
            Home
          </Link>
          <Link
            to="/menu"
            className="text-gray-200 font-semibold hover:text-amber-500 transition"
          >
            Menu
          </Link>
          <Link
            to="/about"
            className="text-gray-200 font-semibold hover:text-amber-500 transition"
          >
            About
          </Link>
        
          <form
            onSubmit={handleSubmit}
            className="flex flex-wrap items-center gap-2"
          >
            <input
              type="text"
              placeholder="Search meal..."
              className="border px-4 py-2 rounded w-full sm:w-auto flex-1 min-w-[200px] text-white focus:outline-none"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
              <button
              type="submit"
            aria-label="Search"
            className="text-xl text-gray-200 font-semibold hover:text-amber-500 transition"
           
          >
            <FaSearch />
          </button>
          </form>
        
          <button
            aria-label="Cart"
            className="text-gray-200 hover:text-amber-500 transition text-xl relative"
            onClick={() => alert("Cart clicked!")}
          >
            <FaShoppingCart />{" "}
            <span className="absolute -top-2 -right-2 bg-red-600 text-gray-200 rounded-full text-xs px-1">
              2
            </span>
          </button>
          <Link
            to="/"
            className="ml-4 px-6 py-2 bg-white font-semibold text-gray-700 border-1 rounded-full hover:bg-amber-500 hover:text-white transition"
          >
            Sign Up
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-700 hover:text-amber-600 focus:outline-none focus:ring-2 focus:ring-gray-700 rounded"
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
      {mobileMenuOpen && (
        <div className="md:hidden bg-white px-6 pb-4 space-y-4 shadow-md">
          <Link
            to="/"
            className="block text-gray-700 font-semibold hover:text-amber-500 transition"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block text-gray-700 font-semibold hover:text-amber-500 transition"
          >
            About Us
          </Link>
          <Link
            to="/menu"
            className="block text-gray-700 font-semibold hover:text-amber-500 transition"
          >
            Menu
          </Link>
        

         <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Search meal..."
              className="border px-4 py-2 rounded w-full focus:outline-none"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              type="submit"
              aria-label="Search"
              className="text-xl text-gray-700 hover:text-amber-500 transition"
            >
              <FaSearch />
            </button>
          </form>

          <button
            aria-label="Cart"
            className="flex items-center text-gray-700 font-semibold hover:text-amber-500 transition text-xl relative"
            onClick={() => alert("Cart clicked!")}
          >
            <FaShoppingCart />{" "}
            <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs px-1">
              2
            </span>
          </button>

          <Link
            to="/"
            className="block text-center ml-4 px-6 py-2 bg-white font-semibold text-gray-700 border-1 border-amber-500 rounded-full hover:bg-amber-500 hover:text-white transition"
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
