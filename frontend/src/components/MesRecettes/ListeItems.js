import React from "react";

function ListeItems({ item, items }) {
  function modif(e) {
    e.preventDefault();
    const selectInput = e.target.parentNode.firstElementChild;
    const resultat = items.find((item) => item.id === Number(selectInput.id));
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

export default ListeItems;
