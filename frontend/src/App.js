import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Acceuil from "./pages/Acceuil";
import Profil from "./pages/Profil";
import Produit from "./pages/Produit";
import MesRecettes from "./pages/MesRecettes";
import Connexion from "./pages/Connexion";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/mes_recettes" element={<MesRecettes />} />
        <Route path="/se_connecter" element={<Connexion />} />
        <Route path="/produit" element={<Produit />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
