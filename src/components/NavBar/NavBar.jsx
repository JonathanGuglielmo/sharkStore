import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import logo from '../../img/logo.png';
import fondo from '../../img/fondo.jpg';

const NavBar = () => {
  return (
    <div>
      <nav className="row align-items-center" style={{ backgroundImage: `url(${fondo})` }}>
        <div className="col-lg-4 col-md-4 col-sm-12 m-auto d-flex justify-content-center">
        <img src={logo} className="logo" alt="logo shark store" />
        </div>
        <ul className="col-lg-4 col-md-4 col-sm-12">
          <li>
            <Link to="/" className="btn">
              Home
            </Link>
          </li>
        </ul>
        <div className="col-lg-4 col-md-4 col-sm-12 m-auto d-flex justify-content-center">
          <Link to="/cart"> 
            <CartWidget />
          </Link>
        </div>        
      </nav>
    </div>
  );
};

export default NavBar;