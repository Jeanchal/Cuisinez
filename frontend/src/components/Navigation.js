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
    </div>
  );
};

export default Navigation;
