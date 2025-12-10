import React, { useContext } from "react";
import "./Cart.css";
import CartPortal from "../UI/CartPortal";
import CartContext from "../../store/CartContext";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItems = (
    <ul>
      {cartCtx.items.map((item) => (
        <li key={item.id}>
          <div className="cart-item-info">
            <span>{item.name}</span>
            <span>x {item.amount}</span>
            <span>₹{(item.price * item.amount).toFixed(2)}</span>
          </div>

          <div className="cart-item-actions">
            <button onClick={() => cartCtx.removeItem(item.id)}>−</button>
            <button onClick={() => cartCtx.addItem({ ...item, amount: 1 })}>
              +
            </button>
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <CartPortal>
      <div className="cart-backdrop" onClick={props.onClose}></div>

      <div className="cart-modal">
        {cartItems}

        <div className="cart-total">
          <span>Total Amount</span>
          <span>₹{cartCtx.totalAmount.toFixed(2)}</span>
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
