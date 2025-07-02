import React from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div>
        <div>🍽️ FOODIED</div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact"> contact</Link>
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
