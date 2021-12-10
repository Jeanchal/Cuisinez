import React, { useState } from "react";

const Recettes = ({ result, recette }) => {
  // const result = data.filter((item) => item.name.includes(search));
  const [like, setLike] = useState(false);

  function activLike() {
    like === false ? setLike(true) : setLike(false);
  }

  return (
    <div className="recette">
      <img src="../img/boeuf_bourguignon.jpg" alt="recette" />
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
