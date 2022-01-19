import React from "react";
import Header from "../components/Header";

const Profil = () => {
  return (
    <div className="page" id="profil">
      <Header />
      <h1>Profil</h1>
      <figure>
        <img src="./img/profil.jpg" alt="" />
      </figure>
      <br />
      <div id="infos-container">
        <p>Pseudo: JM-Cuiz78</p>
        <p>Prénom: Jean-Michel</p>
        <p>Nom: Caneloni</p>
        <p>Âge: 31 ans</p>
        <p>Niveau: Aprenti</p>
      </div>
    </div>
  );
};

export default Profil;
