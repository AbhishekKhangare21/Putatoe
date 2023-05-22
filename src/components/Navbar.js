import React from "react";
import logo from "../assets/logo.png";
import { FaBell, FaShoppingCart, FaSearch } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="start">
        <a href="#">
          <img src={logo} alt="image" height="50" width="50" />
        </a>
        <div>
          <h1>PUTATOE</h1>
          <h2>One Solution</h2>
        </div>
      </div>
      <div className="middle">
        <input type="text" placeholder={`Search for products and brands  `} />
        <span className="nav-search-button">
          <FaSearch />
        </span>
        <span className="icons">
          <TiMessages style={{ marginLeft: "30px" }} />
          <FaShoppingCart style={{ marginLeft: "30px" }} />
          <FaBell style={{ marginLeft: "30px" }} />
        </span>
      </div>
      <div className="end">
        <button className="login-btn">LOGIN</button>
      </div>
    </div>
  );
};

export default Navbar;
