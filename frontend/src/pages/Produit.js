import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import data from "../objet";

let WindLoc = window.location.search;
let idObjet = WindLoc.replace("?id=", "");
const result = data.filter((item) => item.id.includes(idObjet));
let recette = result[0];

const Produit = ({ selectProduit }) => {
  const [ingred, setIngred] = useState(true);

  console.log(selectProduit);

  function activIngr() {
    ingred === false ? setIngred(true) : setIngred(false);
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
            <button>Préparation</button>
          </div>
          <div>
            {ingred === false ? null : (
              <ul>
                <li>{recette.ingredients[0]}</li>
                <li>{recette.ingredients[1]}</li>
                <li>{recette.ingredients[2]}</li>
                <li>{recette.ingredients[3]}</li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Produit;
