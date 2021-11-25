import React from "react";
import Header from "../components/Header";

const Connexion = () => {
  return (
    <div className="page">
      <Header />
      <button>Se Connecter</button>
      <br />
      <button>S'inscrire</button>
      <div>
        <h2>Se connecter</h2>
        <input type="text" placeholder="email" />
        <br />
        <input type="text" placeholder="Password" />
        <br />
        <button>Se connecter</button>
      </div>
      <div>
        <h2>S'inscrire</h2>
        <input type="text" placeholder="Prénom" />
        <br />
        <input type="text" placeholder="Nom" />
        <br />
        <input type="text" placeholder="email" />
        <br />
        <input type="text" placeholder="Password" />
        <br />
        <input type="text" placeholder="confirm Password" />
        <br />
        <button>S'inscrire'</button>
      </div>
    </div>
  );
};

export default Connexion;
