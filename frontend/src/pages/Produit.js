import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import BtnRemonter from "../components/BtnRemonter";
import axios from "axios";
const object = {
  id: "000000",
  name: "",
  time_cooking: "",
  note: 0,
  imageUrl: "default.jpg",
  ingredients: ["", "", "", ""],
  preparation: ["", "", "", ""],
};

function Produit() {
  const [ingred, setIngred] = useState(true);
  const [recette, setRecette] = useState(object);
  const produitId = window.location.pathname.replace("/produit=", "");

  useEffect(() => {
    axios
      .get("http://localhost:3010/api/produits/" + produitId)
      .then((res) => setRecette(res.data))
      .catch((err) => {
        console.log(err);
        window.location.pathname = "/";
      });
  }, []);

  function activIngr() {
    if (ingred === false) setIngred(true);
  }
  function activPrepa() {
    if (ingred === true) setIngred(false);
  }
  function ListElement({ element }) {
    return <li>{element}</li>;
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
        <img src={"../img/" + recette.imageUrl} alt="recette" />
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
                {recette.ingredients.map((element) => (
                  <ListElement
                    element={element}
                    key={Math.round(Math.random() * 1000)}
                  />
                ))}
              </ul>
            ) : (
              <ul>
                {recette.preparation.map((element) => (
                  <ListElement
                    element={element}
                    key={Math.round(Math.random() * 1000)}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <BtnRemonter />
    </div>
  );
}

export default Produit;
