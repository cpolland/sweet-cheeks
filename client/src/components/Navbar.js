import { NavLink } from "react-router-dom";
import { useAuth } from "../util/auth";
// import React from "react";

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
          <NavLink to="/add-comment" className="navbar-link">
            Add comment
          </NavLink>
          <NavLink to="/browse-profiles" className="navbar-link">
            Browse profiles
          </NavLink>
          <NavLink to="/community" className="navbar-link">
            community
          </NavLink>
          <NavLink to="/profile" className="navbar-link">
            profile
          </NavLink>
          <NavLink to="/view-comments" className="navbar-link">
            view comment
          </NavLink>
          <NavLink to="/view-profiles/123" className="navbar-link">
            view profile
          </NavLink>
          {/* some of these links wont be here later just temp for testing */}

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
