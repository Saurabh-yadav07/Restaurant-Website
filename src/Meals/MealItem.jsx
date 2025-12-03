import React from "react";
import "./MealItem.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  return (
    <>
      {props.mealsList.map((meal) => {
        return (
          <li className="meal" key={meal.id}>
            <div>
              <h3>{meal.name}</h3>
              <p className="description">{meal.description}</p>
              <h4 className="price">${meal.price}</h4>
            </div>
            <div>
              <MealItemForm id={meal.id} onClick={props.onClick} />
            </div>
          </li>
        );
      })}
    </>
  );
};

export default MealItem;
