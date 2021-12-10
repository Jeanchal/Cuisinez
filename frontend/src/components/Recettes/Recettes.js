import React, { useState } from "react";
import { Link } from "react-router-dom";

const Recettes = ({ result, recette, selectProduit, setSelectProduit }) => {
  // const result = data.filter((item) => item.name.includes(search));
  const [like, setLike] = useState(false);
  let lien = "/produit" + "?id=" + recette.id;

  function activLike() {
    like === false ? setLike(true) : setLike(false);
  }
  function selectId() {
    setSelectProduit(recette.id);
  }

  return (
    <div className="recette">
      <Link to={lien}>
        <img src={recette.url_image} alt="recette" onClick={selectId} />
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
          <i className="fas fa-star yellow_color"></i>
          <i className="fas fa-star yellow_color"></i>
          <i className="fas fa-star yellow_color"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
      </div>
    </div>
  );
};

export default Recettes;
