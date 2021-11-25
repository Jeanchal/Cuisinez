import React from "react";

const CreateRecette = () => {
  return (
    <div id="createRecette">
      <h3>Créer une nouvelle recette</h3>
      <input type="text" placeholder="nom de la recette" />
      <input type="text" placeholder="temps de préparation" />
      <input type="text" placeholder="ingrédients" />
    </div>
  );
};

export default CreateRecette;
