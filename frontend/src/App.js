import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Acceuil from "./pages/Acceuil";
import Notfound from "./pages/Notfound";
import Profil from "./pages/Profil";
import MesRecettes from "./pages/MesRecettes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/mes_recettes" element={<MesRecettes />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
