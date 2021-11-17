import React from "react";
import data from "../objet";

const Recettes = ({ search }) => {
  const result = data.filter((item) => item.name.includes(search));

  return (
    <div id="recette_container">
      {result.length < 1 ? (
        <div>Aucun résultat...</div>
      ) : (
        <div className="recette">
          <img src="../img/boeuf_bourguignon.jpg" alt="recette" />
          <div className="recette_text">
            <h3>{result[0].name}</h3>
            <div>temps de préparation: {data[0].time_cooking}</div>
            <br />
            <div>Ingédients:</div>
            <ul>
              <li>{result[0].ingredients[0]}</li>
              <li>{result[0].ingredients[1]}</li>
              <li>{result[0].ingredients[2]}</li>
              <li>{result[0].ingredients[3]}</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Recettes;
