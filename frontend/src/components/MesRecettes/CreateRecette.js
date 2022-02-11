import React, { useState } from "react";
import FormItems from "./FormItems";

const CreateRecette = () => {
  const object = { id: 0, value: "" };
  const [name, setName] = useState("");
  const [tabIngredients] = useState([]);
  const [tabPrepas] = useState([]);

  function saveRecette(e) {
    e.preventDefault();
    const objetData = {
      userId: "userId",
      name: name,
      description: "description...",
      imageUrl: "image.jpg",
      tempsPrepa: { heures: 0, minutes: 5 },
      ingredients: tabIngredients,
      preparation: tabPrepas,
    };
    console.log(objetData);
  }

  return (
    <div id="createRecette">
      <h3>Créer une nouvelle recette</h3>
      <form action="">
        <input
          type="text"
          placeholder="nom de la recette"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
        <div className="time-container">
          <label>Temps de préparation :</label>
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
          <input type="number" max="59" min="0" placeholder="0" maxLength="2" />
          <label>minutes</label>
        </div>
        <h3>Ingrédients</h3>
        <FormItems object={object} items={tabIngredients} />
        <h3>Etapes préparation</h3>
        <FormItems object={object} items={tabPrepas} />
        <button onClick={saveRecette}>Sauvegarder</button>
      </form>
    </div>
  );
};

export default CreateRecette;
