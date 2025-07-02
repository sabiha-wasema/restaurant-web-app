import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundImage from '../../assets/1.png';

const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black p-10">
    <img
      src={NotFoundImage}
      alt="Page Not Found"
      className="w-64 h-48 object-contain md:mb-6 animate-bounce"
    />
    <h1 className="text-3xl md:text-5xl mt-0 font-extrabold mb-4 drop-shadow animate-fade-in">
      404 - Page Not Found
    </h1>
    <p className="mb-6 text-base md:text-lg animate-fade-in delay-200">
      Sorry, the page you’re looking for doesn’t exist.
    </p>
    <Link
      to="/"
      className="px-6 py-3 bg-amber-400 text-black font-bold rounded-full shadow hover:bg-amber-600 transition duration-300 ease-in-out animate-fade-in delay-400"
    >
      Go Back Home
    </Link>
  </div>
);

export default NotFound;
