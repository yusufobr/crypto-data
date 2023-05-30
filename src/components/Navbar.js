import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav>
        <NavLink to="/">Logo</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
