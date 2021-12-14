import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Acceuil from "./pages/Acceuil";
import Profil from "./pages/Profil";
import Produit from "./pages/Produit";
import MesRecettes from "./pages/MesRecettes";
import Connexion from "./pages/Connexion";
import Favoris from "./pages/Favoris";
import axios from "axios";

const App = () => {
  const [data, setData] = useState("");
  const [selectProduit, setSelectProduit] = useState("");

  useEffect(() => {
    axios
      .get("objet.json")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Acceuil data={data} setSelectProduit={setSelectProduit} />}
        />
        <Route path="/profil" element={<Profil />} />
        <Route path="/mes_recettes" element={<MesRecettes />} />
        <Route path="/se_connecter" element={<Connexion />} />
        <Route
          path="/produit"
          element={<Produit data={data} selectProduit={selectProduit} />}
        />
        <Route path="/favoris" element={<Favoris />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
