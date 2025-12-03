import React from "react";
import "./Cart.css";
import CartPortal from "../UI/CartPortal";

const Cart = (props) => {
  const cartItems = (
    <ul>
      {[
        { id: 1, name: "Shushi" },
        { id: 2, name: "Ramen" },
      ].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <CartPortal>
      <div className="cart-backdrop"></div>
      <div className="cart-modal">
        {cartItems}
        <div className="cart-total">
          <span>Total Amount</span>
          <span>35.98</span>
        </div>
        <div className="cart-actions">
          <button onClick={props.onClose}>Close</button>
          <button>Order</button>
        </div>
      </div>
    </CartPortal>
  );
};

export default Cart;
