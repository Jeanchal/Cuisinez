import React from "react";
import Header from "../components/Header";
import data from "../objet";

let WindLoc = window.location.search;
let idObjet = WindLoc.replace("?id=", "");

console.log(WindLoc);
const result = data.filter((item) => item.id.includes(idObjet));
console.log(result[0]);
let recette = result[0];

const Produit = () => {
  return (
    <div className="page">
      <Header />
      <h1>Produit</h1>
      <h3>{recette.name}</h3>
    </div>
  );
};

export default Produit;
