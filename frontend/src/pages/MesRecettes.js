import React from "react";
import Header from "../components/Header";

const MesRecettes = () => {
  return (
    <div className="page">
      <Header />
      <div id="createRecette">
        <h1>Mes Recettes</h1>
        <h3>Créer une nouvelle recette</h3>
        <input type="text" placeholder="nom de la recette" />
        <input type="text" placeholder="temps de préparation" />
        <input type="text" placeholder="ingrédients" />
      </div>
    </div>
  );
};

export default MesRecettes;
