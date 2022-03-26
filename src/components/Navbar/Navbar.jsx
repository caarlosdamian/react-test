import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbarContainer">
      <Link
        to="/"
        style={{ textDecoration: "none" }}
      >
        <h2 className="logo">LOGO</h2>
      </Link>
      <div className="linksContainer">
      <Link to="/users" style={{ textDecoration: "none" }}>
        <h3>Users</h3>
      </Link>
      <Link to="/login" style={{ textDecoration: "none" }}>
        <h3>Login</h3>
      </Link>
        
      </div>
     
    </div>
  );
};
