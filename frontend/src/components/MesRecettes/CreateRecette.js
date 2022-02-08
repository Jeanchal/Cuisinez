import React, { useState } from "react";
import ListeIngredients from "./ListeIngredients";

const CreateRecette = () => {
  const object = { id: 0, value: "" };

  function saveRecette(e) {
    e.preventDefault();
  }

  return (
    <div id="createRecette">
      <h3>Créer une nouvelle recette</h3>
      <form action="">
        <input type="text" placeholder="nom de la recette" />
        <div className="time-container">
          <label>Temps de préparation :</label>
          <div className="input-container">
            <input
              type="number"
              max="24"
              min="0"
              placeholder="0"
              maxLength="2"
            />
            <span></span>
            <label>heures</label>
          </div>
          <input type="number" max="59" min="0" placeholder="0" maxLength="2" />
          <label>minutes</label>
        </div>
        <h3>Ingrédients</h3>
        <ListeIngredients object={object} />
        <h3>Etapes préparation</h3>
        <ListeIngredients object={object} />
        <button onClick={saveRecette}>Sauvegarder</button>
      </form>
    </div>
  );
};

export default CreateRecette;
