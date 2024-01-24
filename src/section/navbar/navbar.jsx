import React from "react";
import "./navbar.css";
import { GiBoxingGlove } from "react-icons/gi";
import data from "./data";
import Header from "../header/header";

const Navbar = () => {
  return (
    <nav id="navbar">
      <div className="container nav__container">
        <a className="logo" href="#">
          <GiBoxingGlove className="logoImage" />
          <h2>BOX CHAMPY!</h2>
        </a>

        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
        <div className="white"></div>
      </div>
      <Header />
    </nav>
  );
};

export default Navbar;
