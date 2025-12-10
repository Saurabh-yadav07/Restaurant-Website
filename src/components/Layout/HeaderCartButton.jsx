import React, { useContext } from 'react';
import './HeaderCartButton.css';
import CartContext from '../../store/CartContext';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((cur, item) => {
    return cur + item.amount;
  }, 0);

  return (
    <button className="button" onClick={props.onClick}>
      <span>My Cart</span>
      <span className="badge">{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;
