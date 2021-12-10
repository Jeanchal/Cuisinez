import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = ({ activDisplayMenu }) => {
  return (
    <div id="Navigation">
      <NavLink to="/" onClick={activDisplayMenu}>
        Acceuil
      </NavLink>
      <NavLink to="/profil" onClick={activDisplayMenu}>
        Profil
      </NavLink>
      <NavLink to="/mes_recettes" onClick={activDisplayMenu}>
        Mes recettes
      </NavLink>
      <NavLink to="/favoris" onClick={activDisplayMenu}>
        Favoris
      </NavLink>
      <NavLink to="/se_connecter" onClick={activDisplayMenu}>
        Se Connecter
      </NavLink>
    </div>
  );
};

export default Navigation;
