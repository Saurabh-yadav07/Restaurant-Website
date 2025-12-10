import React, { useState } from "react";
import HeaderImg from "../../assets/FoodPic.jpg";
import './Header.css';
import HeaderCartButton from "./HeaderCartButton";
import Cart from "../Cart/Cart";

const Header = () => {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => setShowCart(true);
  const hideCartHandler = () => setShowCart(false);

  return (
    <>
      {showCart && <Cart onClose={hideCartHandler} />}

      <header className="header">
        <h1>Cuisines by Srv</h1>
        <HeaderCartButton onClick={showCartHandler} />
      </header>

      <div className="main-image">
        <img src={HeaderImg} alt="cuisines" />
      </div>
    </>
  );
};

export default Header;
