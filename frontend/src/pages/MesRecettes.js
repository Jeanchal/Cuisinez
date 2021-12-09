import React, { useState } from "react";
import Header from "../components/Header";
import CreateRecette from "../components/MesRecettes/CreateRecette";

const MesRecettes = () => {
  const [createRctt, setCreateRctt] = useState(false);

  function activCreate() {
    createRctt === false ? setCreateRctt(true) : setCreateRctt(false);
  }

  return (
    <div className="page">
      <Header />
      <div id="mes_recettes">
        <h1>Mes Recettes</h1>
        <button onClick={activCreate} className="red_btn">
          {" "}
          Créer une nouvelle recette
        </button>
        <br />
        <div>{createRctt === true ? <CreateRecette /> : null}</div>
        <br />
        <div>Vous n'avez créer aucune recette pour le moment...</div>
      </div>
    </div>
  );
};

export default MesRecettes;
