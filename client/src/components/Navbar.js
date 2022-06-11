import { NavLink } from "react-router-dom";
import { useAuth } from "../util/auth";
import Navbar from "react-bootstrap/Navbar";
// import { Container } from "react-bootstrap";
// import React from "react";

import "./Navbar.css";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navbars() {
  const { isLoggedIn, logout } = useAuth();
  return (
    <nav className="navbar">
      <div className="sweet-cheeks">
        Sweet <br></br>Cheeks
      </div>
      {isLoggedIn ? (
        <>
          {/* <NavLink to="SignUp" className="navbar-link">
            Add comment
          </NavLink>
          <NavLink to="/view-comments" className="navbar-link">
            view comment
          </NavLink>
          <NavLink to="/view-profiles/123" className="navbar-link">
            view profile
          </NavLink> */}

          <p className="text-center mt-4 mb-4"></p>
          <Nav className="justify-content-end" activeKey="/">
            <Nav.Item>
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/community">
                Community
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/browse-profiles">
                Browse
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/profile">
                Profile
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} onClick={logout} to="/">
                Sign Out
              </Nav.Link>
            </Nav.Item>
          </Nav>
          {/* some of these links wont be here later just temp for testing */}
        </>
      ) : (
        <>
          <p className="text-center mt-4 mb-4"></p>
          <Nav className="justify-content-end" activeKey="/">
            <Nav.Item>
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/login">
                Log In
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/signup">
                Sign Up
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </>
      )}
    </nav>
  );
}
