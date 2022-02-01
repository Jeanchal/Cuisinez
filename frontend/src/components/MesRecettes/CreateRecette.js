import React, { useState } from "react";

const CreateRecette = () => {
  const object = { id: 0, value: "" };
  const [value, setValue] = useState(object);
  const [items] = useState([]);

  function Tache({ item }) {
    return (
      <li>
        <div>
          <input type="text" id={item.id} defaultValue={item.value} />
          <button onClick={suppr}>X</button>
          <button onClick={modif}>/</button>
        </div>
      </li>
    );
  }

  function button(e) {
    e.preventDefault();
    items.push(value);
    setValue(object);
  }
  function suppr(e) {
    e.preventDefault();
    const selectInput = e.target.parentNode.firstElementChild;
    const resultat = items.find((item) => item.id == selectInput.id);
    const index = items.indexOf(resultat);
    items.splice(index, 1);
    console.log(items);
    selectInput.parentNode.parentNode.style = "display:none";
  }
  function modif(e) {
    e.preventDefault();
    const selectInput = e.target.parentNode.firstElementChild;
    const resultat = items.find((item) => item.id == selectInput.id);
    resultat.value = selectInput.value;
  }

  return (
    <div id="createRecette">
      <h3>Créer une nouvelle recette</h3>
      <form action="">
        <input type="text" placeholder="nom de la recette" />
        <input type="text" placeholder="temps de préparation" />
        <ul>
          {items.map((item) => (
            <Tache key={Math.round(Math.random() * 10000)} item={item} />
          ))}
        </ul>
        <div className="ajout-ingredients">
          <input
            type="text"
            placeholder="ingrédient"
            onChange={(e) =>
              setValue({
                id: Math.round(Math.random() * 1000),
                value: e.target.value,
              })
            }
            value={value.value}
          />
          <button onClick={button}>Envoyer</button>
        </div>
      </form>
    </div>
  );
};

export default CreateRecette;
