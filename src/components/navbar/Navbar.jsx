import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="logistics__navbar">
      <div className="logistics__navbar-links">
        <div className="logistics__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="logistics__navbar-links_container">
          <p>
            <a href="/">Home</a>
          </p>
          <p>
            <a href="/#brandSection">About</a>
          </p>
          <p>
            <a href="/#footer">Contact</a>
          </p>
        </div>
      </div>
      <div className="logistics__navbar-sign">
        <button
          type="button"
          onClick={() => {
            navigate("/registration");
          }}
        >
          Register
        </button>
      </div>
      <div className="logistics__navbar-menu">
        {/* {toggleMenu ? (
          <RiCloseLine
            color="#272727"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#272727"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )} */}
        {/* {toggleMenu && (
          <div className="logistics__navbar-menu_container scale-up-center">
            <div className="logistics__navbar-menu_container-links">
              <Menu />
              <div className="logistics__navbar-menu_container-links-sign">
                <button type="button">Registration</button>
              </div>
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Navbar;
