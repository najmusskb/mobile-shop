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
          <Link
            to={"/contact"}
            title=""
            target="_blank"
            class="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
          >
            <span className="p-5 text-5xl text-primary ">
              <span class="material-symbols-outlined icons">phone_iphone</span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
