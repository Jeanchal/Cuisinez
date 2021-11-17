import React from "react";

const Recettes = ({ result, recette }) => {
  // const result = data.filter((item) => item.name.includes(search));

  return (
    <div className="recette">
      <img src="../img/boeuf_bourguignon.jpg" alt="recette" />
      <div className="recette_text">
        <h3>{recette.name}</h3>
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
    </div>
  );
};

export default Recettes;
