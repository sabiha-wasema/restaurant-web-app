import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-2xl font-bold text-amber-500">🍽️ FOODIED</div>

        <div className="flex items-center space-x-6">
          <Link
            to="https://www.facebook.com/"
            className="hover:text-amber-500 transition"
            aria-label="Facebook"
          >
            <FaFacebook size={20} />
          </Link>
          <Link
            to="https://www.instagram.com/"
            className="hover:text-amber-500 transition"
            aria-label="Instagram"
          >
            <FaInstagram size={20} />
          </Link>
          <Link
            to="https://www.youtube.com/"
            className="hover:text-amber-500 transition"
            aria-label="YouTube"
          >
            <FaYoutube size={20} />
          </Link>
        </div>

        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} FOODIED. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
