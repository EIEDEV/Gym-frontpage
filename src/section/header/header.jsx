import React from "react";
import "./header.css";
import Card from "./../../card/card";
import data from "./data";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="header__text">
          <h1>FIGHT LIKE YOU</h1>
          <h1>RULE</h1>
          <h1>THE</h1>
          <h1>
            <span>WORLD</span>
          </h1>
        </div>
        <div className="header__cards">
          {data.map((item) => (
            <Card classname="header__card" key={item.id}>
              <h1>{item.image}</h1>
              <p>{item.title}</p>
            </Card>
          ))}
        </div>
      </div>
    </header>
  );
};
export default Header;
