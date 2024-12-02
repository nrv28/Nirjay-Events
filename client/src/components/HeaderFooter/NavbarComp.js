// src/components/NavbarComp.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import logo from '../../assets/icons/logo.png';
import Sidebar from './Sidebar';

const NavbarComp = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between p-4 bg-transparent backdrop-blur-md text-white z-50">
      <div className="flex items-center">
        <img className="w-48 h-auto" src={logo} alt="Logo" />
      </div>
      <ul className="hidden md:flex md:items-center font-helvetica font-bold md:gap-8">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to="/services" className="hover:underline">Services</Link></li>
        <li><Link to="/contact" className="hover:underline">Contact</Link></li>
        <li><Link to="/about" className="hover:underline">About</Link></li>
        <li className="mt-2 md:mt-0"><Link to="/partnersearch" className="bg-blue-500 hover:bg-green-700 text-white py-2 px-4 rounded">Booking</Link></li>
        <li className="mt-2 md:mt-0"><Link to="/profileredirect" className="bg-blue-500 hover:bg-green-700 text-white py-2 px-4 rounded">Profile</Link></li>
      </ul>
      <button className="md:hidden" onClick={toggleMenu}>
        <FaBars size={24} />
      </button>
      <Sidebar menuOpen={menuOpen} toggleMenu={toggleMenu} />
    </nav>
  );
};

export default NavbarComp;
