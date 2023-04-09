import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <div className="navbar navbar-back ">
        <div className="navbar-start">
          <Link to={"/home"} className="btn btn-ghost normal-case text-3xl">
            <h1>
              <span className="mobile">Mobile Sell</span>
            </h1>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/booking">Booking</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn getstarted text-white">Get started</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
