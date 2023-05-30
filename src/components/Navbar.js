import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="container mx-auto px-2 py-6">
      <nav>
        <NavLink to="/">Logo</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
