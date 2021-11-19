import React, { useState } from "react";
import Header from "../components/Header";
import Recettes from "../components/Recettes";
import data from "../objet";

const Acceuil = () => {
  const [inputSearch, setInputSearch] = useState("");
  const [search, setSearch] = useState("");
  const result = data.filter((item) => item.name.includes(search));
  console.log(result);

  return (
    <div id="acceuil" className="page">
      <Header />
      <div id="recherche-container">
        <input
          type="text"
          id="recherche"
          placeholder="Que recherchez vous..."
          onChange={(e) => {
            setInputSearch(e.target.value);
          }}
        />
        <i
          className="fas fa-search"
          onClick={() => {
            setSearch(inputSearch);
          }}
        ></i>
      </div>
      <div id="indicResults">
        {result === "" ? (
          ""
        ) : result.length < 1 ? (
          <div>Aucun résultat...</div>
        ) : null}
      </div>
      <div id="recette_container">
        {result.map((recette) => (
          <Recettes key={recette.id} recette={recette} result={result} />
        ))}
      </div>
    </div>
  );
};

export default Acceuil;
