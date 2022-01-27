import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

function Produit({ data }) {
  const [ingred, setIngred] = useState(true);
  let idObjet = window.location.search.replace("=", "");
  let recette;

  console.log(data);

  function activIngr() {
    if (ingred === false) setIngred(true);
  }
  function activPrepa() {
    if (ingred === true) setIngred(false);
  }

  for (let i = 0; i < data.length; i++) {
    if (data[i].id.includes(idObjet)) recette = data[i];
  }

  return (
    <div className="page">
      <Header />
      <div id="produit_container">
        <div id="produit_titre_container">
          <Link to="/">
            <i className="fas fa-arrow-left"></i>
          </Link>
          <h1>{recette.name}</h1>
        </div>
        <img src={recette.url_image} alt="recette" />
        <div id="produit_txt">
          <p>
            temps de préparation: <span>{recette.time_cooking}</span>
          </p>
          <div id="button_container">
            <button
              onClick={activIngr}
              className={ingred === true ? "red_btn" : null}
            >
              Ingrédients
            </button>
            <button
              onClick={activPrepa}
              className={ingred === false ? "red_btn" : null}
            >
              Préparation
            </button>
          </div>
          <div>
            {ingred === true ? (
              <ul>
                <li>{recette.ingredients[0]}</li>
                <li>{recette.ingredients[1]}</li>
                <li>{recette.ingredients[2]}</li>
                <li>{recette.ingredients[3]}</li>
              </ul>
            ) : (
              <ul>
                <li>{recette.preparation[0]}</li>
                <li>{recette.preparation[1]}</li>
                <li>{recette.preparation[2]}</li>
                <li>{recette.preparation[3]}</li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Produit;
