import React, { useState } from "react";
import HeaderImg from "../assets/cuisines.jpg";
import "./Header.css";
import Cart from "../Cart/Cart";
import CartButton from "../Cart/CartButton";

const Header = () => {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => setShowCart(true);
  const hideCartHandler = () => setShowCart(false);

  return (
    <>
      {showCart && <Cart onClose={hideCartHandler} />}

      <header className="header">
        <h1>Cuisines by Srv</h1>
        <CartButton onClick={showCartHandler}>My Cart</CartButton>
      </header>

      <div className="main-image">
        <img src={HeaderImg} alt="cuisines" />
      </div>
    </>
  );
};

export default Header;
