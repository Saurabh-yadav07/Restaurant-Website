import React from "react";
import HeaderImg from "../assets/cuisines.jpg";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <h1>Cuisines by Srv</h1>
        <button>Cart</button>
      </header>
      <div className="main-image">
        <img src={HeaderImg}></img>
      </div>
    </>
  );
};
export default Header;
