import React, { useState } from "react";
import Header from "../components/Header";
import CreateRecette from "../components/MesRecettes/CreateRecette";

const MesRecettes = () => {
  const [createRctt, setCreateRctt] = useState(false);

  function activCreate() {
    if (createRctt === true) {
      if (window.confirm("Êtes vous sur de quitter cette page ?") === true)
        createRctt === false ? setCreateRctt(true) : setCreateRctt(false);
    } else {
      createRctt === false ? setCreateRctt(true) : setCreateRctt(false);
    }
  }

  return (
    <div className="page">
      <Header />
      <div id="mes_recettes">
        <h1>Mes Recettes</h1>
        <div></div>
        <button onClick={activCreate} className="red_btn">
          {createRctt === true ? "Voir mes recettes" : "Créer une recette"}
        </button>
        <br />
        <div>{createRctt === true ? <CreateRecette /> : <p>Hello</p>}</div>
        <br />
      </div>
    </div>
  );
};

export default MesRecettes;
