import React, { useState } from "react";
import Header from "../components/Header";
import Recettes from "../components/Recettes";

const Acceuil = () => {
  const [search, setSearch] = useState("");

  return (
    <div id="acceuil" className="page">
      <Header />
      <div id="recherche-container">
        <input
          type="text"
          id="recherche"
          placeholder="Que recherchez vous..."
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <Recettes search={search} />
    </div>
  );
};

export default Acceuil;
