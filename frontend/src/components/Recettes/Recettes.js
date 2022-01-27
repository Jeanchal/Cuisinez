import React, { useState } from "react";
import { Link } from "react-router-dom";

const Recettes = ({ recette }) => {
  const [like, setLike] = useState(false);

  function activLike() {
    like === false ? setLike(true) : setLike(false);
  }

  const yellowStar = "fas fa-star yellow_color";

  return (
    <div className="recette" id={recette.id}>
      <Link to={"/produit=" + recette.id}>
        <img src={recette.url_image} alt="recette" />
      </Link>
      <div className="recette_text">
        <div id="titre_coeur_container">
          <h3>{recette.name}</h3>
          <div
            id="coeur"
            onClick={activLike}
            className={like === true ? "red_color" : null}
          >
            <i className="fas fa-heart"></i>
          </div>
        </div>
        <div id="stars">
          <i className={recette.note > 0 ? yellowStar : "fas fa-star"}></i>
          <i className={recette.note > 1 ? yellowStar : "fas fa-star"}></i>
          <i className={recette.note > 2 ? yellowStar : "fas fa-star"}></i>
          <i className={recette.note > 3 ? yellowStar : "fas fa-star"}></i>
          <i className={recette.note > 4 ? yellowStar : "fas fa-star"}></i>
        </div>
      </div>
    </div>
  );
};

export default Recettes;
