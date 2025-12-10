import Input from '../UI/Input';
import './MealItemForm.css';
import React, { useRef, useContext } from 'react';
import CartContext from '../../store/CartContext';

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const cartCtx = useContext(CartContext);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = +amountInputRef.current.value;

    const meal = props.meal;

    cartCtx.addItem({
      id: meal.id,
      name: meal.name,
      price: meal.price,
      amount: enteredAmount,
    });
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <Input
        label="Amount"
        input={{
          id: 'amount_' + props.meal.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
          ref: amountInputRef,
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
