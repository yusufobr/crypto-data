import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './assets/logo.png';

function Navbar() {
  return (
    <header className="container mx-auto px-2 py-6">
      <nav className="text-3xl font-bold">
        <NavLink to="/"><img width={200} alt="logo" src={logo} /></NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
