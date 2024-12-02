import React from 'react';
import { Link } from 'react-router-dom';
import { MdHome, MdBuild, MdContactMail, MdBook, MdPerson, MdInfo } from 'react-icons/md';

const Sidebar = ({ menuOpen, toggleMenu }) => {
  return (
    <div className={`fixed inset-0 z-50 transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
      <div className="absolute top-0 left-0 w-1/2 h-full bg-white py-8 px-4 rounded-r-lg shadow-lg">
        <button onClick={toggleMenu} className="text-black focus:outline-none mb-4">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <ul className="mt-4 space-y-4 text-lg text-black bg-white">
          <li>
            <Link to="/" className="flex items-center space-x-2 px-2 py-1 rounded hover:bg-gray-200 transition duration-300" onClick={toggleMenu}>
              <MdHome className="text-blue-600" /> <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/services" className="flex items-center space-x-2 px-2 py-1 rounded hover:bg-gray-200 transition duration-300" onClick={toggleMenu}>
              <MdBuild className="text-blue-600" /> <span>Services</span>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="flex items-center space-x-2 px-2 py-1 rounded hover:bg-gray-200 transition duration-300" onClick={toggleMenu}>
              <MdContactMail className="text-blue-600" /> <span>Contact</span>
            </Link>
          </li>
          <li>
            <Link to="/PartnerSearch" className="flex items-center space-x-2 px-2 py-1 rounded hover:bg-gray-200 transition duration-300" onClick={toggleMenu}>
              <MdBook className="text-blue-600" /> <span>Booking</span>
            </Link>
          </li>
          <li>
            <Link to="/profileredirect" className="flex items-center space-x-2 px-2 py-1 rounded hover:bg-gray-200 transition duration-300" onClick={toggleMenu}>
              <MdPerson className="text-blue-600" /> <span>Profile</span>
            </Link>
          </li>
          <li>
            <Link to="#" className="flex items-center space-x-2 px-2 py-1 rounded hover:bg-gray-200 transition duration-300" onClick={toggleMenu}>
              <MdInfo className="text-blue-600" /> <span>About</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
