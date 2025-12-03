import React from "react";
import "./CartButton.css";

const CartButton = (props) => {
  return (
    <div className="cart-btn-container">
      <button className="cart-btn" onClick={props.onClick}>{props.children}</button>
    </div>
  );
};

export default CartButton;
