import React from "react";

const RecetteDetail = () => {
  return (
    <div>
      <div>temps de préparation: {recette.time_cooking}</div>
      <br />
      <div>Ingédients:</div>
      <ul>
        <li>{recette.ingredients[0]}</li>
        <li>{recette.ingredients[1]}</li>
        <li>{recette.ingredients[2]}</li>
        <li>{recette.ingredients[3]}</li>
      </ul>
    </div>
  );
};

export default RecetteDetail;
