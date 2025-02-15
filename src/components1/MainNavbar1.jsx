import React from "react";
import { Link } from "react-router-dom";
import logoimg from "./../image/logo.png";
import logo2 from "./../image/logo1.png"; // Second logo

const MainNavBar = () => {
  return (
    <div className="main-navbar-div">
       <div className="navbar">
      <img src={logoimg} alt="Logo" className="logo" />
        <div className="center-text">
          <h2>SGM College Karad</h2>
          <h6 className="sub-text">Education through self-help is our main motto</h6>
          </div>
        <img src={logo2} alt="Logo 2" className="logo" />
      </div>
      
      {/* Navigation Links */}
      <ul className="nav-list">
  <li className="nav-link"><Link to="/">Home</Link></li>
  <li className="nav-link"><Link to="/about">About Us</Link></li>
  <li className="nav-link"><Link to="/department">Departments</Link></li> 
  <li className="nav-link"><span>Gallery</span></li>
  <li className="nav-link"><span>Contact Us</span></li>
  <li className="nav-link"><span>FAQ</span></li>
</ul>

    </div>
  );
};

export default MainNavBar;