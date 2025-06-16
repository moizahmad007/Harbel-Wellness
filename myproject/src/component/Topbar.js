import React, { useState } from "react";
import image from "./assets/herbal1.png";
import "./Topbar.css";
import Menu from "./assets/list.png"; // Menu icon image

const Topbar = ({ handlePageChange }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false); // State to toggle menu visibility

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible); // Toggle the menu visibility on mobile
  };

  return (
    <div className="top-bar">
      <div className="logo">
        <img src={image} alt="logo" />
      </div>

      <nav className={`nav ${isMenuVisible ? "show" : ""}`}>
        <button onClick={() => handlePageChange("home")} className="nav-link">
          Home
        </button>
        <button onClick={() => handlePageChange("product")} className="nav-link">
          wellness
        </button>
        <button className="nav-link">Cart</button>
        <button
          onClick={() => handlePageChange("registration")}
          className="nav-link"
        >
          Registration
        </button>
      <button onClick={() => handlePageChange("login")} className="nav-link">
          Login
        </button>
        </nav>

      {/* Menu Icon for Mobile */}
      <img
        src={Menu}
        alt="Menu"
        className="menu-icon"
        onClick={toggleMenu}
      />
    </div>
  );
};

export default Topbar;
