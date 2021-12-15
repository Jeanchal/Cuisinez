import React, { useState } from "react";
import Header from "../components/Header";
import Recettes from "../components/Recettes/Recettes";
import BtnRemonter from "../components/BtnRemonter";
import "../fonctions";
import Product from "../components/Product";

const Acceuil = ({ data, setSelectProduit }) => {
  const [search, setSearch] = useState("");
  const [activProduit, setActivProduit] = useState(false);
  let result = [];

  for (let i = 0; i < data.length; i++) {
    let name = data[i].name.toLowerCase().noAccent();
    if (name.includes(search)) result.push(data[i]);
  }

  // for (let i = 0; i < data.length; i++) {
  //   let item = data[i];
  //   let ingredient = item.ingredients;
  //   if (item.name.includes(search)) result.push(item);
  //   for (let x = 0; x < ingredient.length; x++) {
  //     if (ingredient.includes(search)) result.push(item);
  //   }
  // }

  return (
    <div id="acceuil" className="page">
      <Header />
      <div id="recherche-container">
        <input
          type="text"
          id="recherche"
          placeholder="Que recherchez vous..."
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase().noAccent());
          }}
        />
        <i className="fas fa-search"></i>
      </div>
      <div id="indicResults">
        {result === "" ? (
          ""
        ) : result.length < 1 ? (
          <div>Aucun résultat...</div>
        ) : null}
      </div>
      <div id="recette_container">
        {activProduit === false ? (
          result.map((recette) => (
            <Recettes
              key={recette.id}
              recette={recette}
              setActivProduit={setActivProduit}
            />
          ))
        ) : (
          <Product data={data} setActivProduit={setActivProduit} />
        )}
      </div>
      <BtnRemonter />
    </div>
  );
};

export default Acceuil;
