import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/style.css";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}>
      <div className="title-and-toggle">
        <Link to="/" className="title">
          Word Revival Center
        </Link>
        <div className="menu-toggle">
          <MenuIcon onClick={toggleMobileMenu} />
        </div>
      </div>
      <ul className={`nav-links ${isMobileMenuOpen ? "show" : ""}`}>
        <li>
          <Link to="/" onClick={toggleMobileMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/photos" onClick={toggleMobileMenu}>
            Photos
          </Link>
        </li>
        <li>
          <Link to="/events" onClick={toggleMobileMenu}>
            Events
          </Link>
        </li>
        <li>
          <Link to="/ministries" onClick={toggleMobileMenu}>
            Ministries
          </Link>
        </li>
        <li>
          <Link to="/donate" onClick={toggleMobileMenu}>
            Donate
          </Link>
        </li>
        <li>
          <Link to="/aboutus" onClick={toggleMobileMenu}>
            About Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
