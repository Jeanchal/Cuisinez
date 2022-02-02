import React, { useState } from "react";

const CreateRecette = () => {
  const object = { id: 0, value: "" };
  const [value, setValue] = useState(object);
  const [items] = useState([]);

  function Tache({ item }) {
    return (
      <li>
        <div>
          <input
            type="text"
            id={item.id}
            defaultValue={item.value}
            onChange={modif}
          />
          <button onClick={suppr}>X</button>
        </div>
      </li>
    );
  }

  function button(e) {
    e.preventDefault();
    if (value.value.length < 4) {
      window.alert("impossible");
    } else {
      items.push(value);
      setValue(object);
    }
  }
  function modif(e) {
    e.preventDefault();
    const selectInput = e.target.parentNode.firstElementChild;
    const resultat = items.find((item) => item.id === selectInput.id);
    resultat.value = selectInput.value;
  }
  function suppr(e) {
    e.preventDefault();
    let reponse = window.confirm(
      "voulez-vous vraiment supprimer cet ingrédient ?"
    );
    if (reponse === true) {
      const selectInput = e.target.parentNode.firstElementChild;
      const resultat = items.find((item) => item.id === selectInput.id);
      const index = items.indexOf(resultat);
      items.splice(index, 1);
      selectInput.parentNode.parentNode.style = "display:none";
    }
  }
  function saveRecette(e) {
    e.preventDefault();
  }

  return (
    <div id="createRecette">
      <h3>Créer une nouvelle recette</h3>
      <form action="">
        <input type="text" placeholder="nom de la recette" />
        <div className="time-container">
          <label>Temps de préparation</label>
          <div className="input-container">
            <input
              type="number"
              max="24"
              min="0"
              placeholder="0"
              maxLength="2"
            />
            <span></span>
            <label>heures</label>
          </div>
          <input type="number" max="60" min="0" placeholder="0" maxLength="2" />
          <label>minutes</label>
          <input type="number" max="60" min="0" placeholder="0" maxLength="2" />
          <label>secondes</label>
        </div>
        <ul>
          {items.map((item) => (
            <Tache key={Math.round(Math.random() * 10000)} item={item} />
          ))}
        </ul>
        <div className="ajout-ingredients">
          <input
            type="text"
            placeholder="ingrédient..."
            onChange={(e) =>
              setValue({
                id: Math.round(Math.random() * 1000),
                value: e.target.value,
              })
            }
            value={value.value}
          />
          <button onClick={button}>Ajouter</button>
        </div>
        <button onClick={saveRecette}>Sauvegarder</button>
      </form>
    </div>
  );
};

export default CreateRecette;
