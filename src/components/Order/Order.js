import React from "react";

import classes from "./Order.css";
const order = props => {
  const Ingredients = [];

  for (let ingredientName in props.ingredients) {
    Ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName]
    });
  }

  const ingredientOutput = Ingredients.map(ig => {
    return (
      <span
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0  8px",
          border: "1px solid #ccc",
          padding: "5px",
          color: "white",
          backgroundColor: "lightblue"
        }}
        key={ig.name}
      >
        {ig.name} ({ig.amount})
      </span>
    );
  });
  return (
    <div className={classes.Order}>
      <p>Ingredients:{ingredientOutput} </p>
      <p>
        Price:
        <strong>{Number.parseFloat(props.price).toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default order;
