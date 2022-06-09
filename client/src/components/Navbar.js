import { NavLink } from "react-router-dom";
import { useAuth } from "../util/auth";
import React from "react";

import "./Navbar.css";

export default function Navbar() {
  const { isLoggedIn, logout } = useAuth();
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-link">
        Home
      </NavLink>
      {isLoggedIn ? (
        <>
          <NavLink to="/community" className="navbar-link">
            Community
          </NavLink>
          <NavLink to="/browse" className="navbar-link">
            Browse
          </NavLink>

          <button className="navbar-link" onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <>
          <NavLink to="/login" className="navbar-link">
            Login
          </NavLink>
          <NavLink to="/signup" className="navbar-link">
            Signup
          </NavLink>
        </>
      )}
    </nav>
  );
}
