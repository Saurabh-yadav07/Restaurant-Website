import React from "react";
import "./MealItem.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const price = `$${props.meal.price.toFixed(2)}`;

  return (
    <li className="meal">
      <div>
        <h3>{props.meal.name}</h3>
        <p className="description">{props.meal.description}</p>
        <h4 className="price">{price}</h4>
      </div>
      <MealItemForm meal={props.meal} />
    </li>
  );
};

export default MealItem;
