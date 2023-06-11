import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './assets/logo.png';

function Navbar() {
  return (
    <div className="fixed top-0 z-20 bg-[#161b19] border-gray-800 border-b-2 w-full">
      <header className=" container max-w-screen-xl mx-auto px-2 py-6">
        <nav className="text-3xl font-bold">
          <NavLink to="/"><img width={200} alt="logo" src={logo} /></NavLink>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
