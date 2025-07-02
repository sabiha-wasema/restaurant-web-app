import React from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
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
        <div className="flex items-center space-x-8 ">
          <Link to="/" className="text-gray-700 font-semibold hover:text-amber-500 transition">Home</Link>
          <Link to="/menu" className="text-gray-700 font-semibold hover:text-amber-500 transition">Menu</Link>
          <Link to="/about" className="text-gray-700 font-semibold hover:text-amber-500 transition">About</Link>
          <Link to="/contact" className="text-gray-700 font-semibold hover:text-amber-500 transition"> contact</Link>
          <button>
            <FaSearch />
          </button>
          <button>
            <FaShoppingCart />
          </button>
          <Link to="">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
