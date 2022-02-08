import React, { useState } from "react";
import ListeItems from "./ListeItems";

const FormItems = ({ object }) => {
  const [value, setValue] = useState(object);
  const [items] = useState([]);

  function ajoutItem(tab, val) {
    if (val.value.length < 4) {
      window.alert("impossible");
    } else {
      tab.push(val);
      setValue(object);
    }
  }
  function ajoutIngr(e) {
    e.preventDefault();
    ajoutItem(items, value);
  }

  return (
    <div>
      <ul>
        {items.map((item) => (
          <ListeItems
            key={Math.round(Math.random() * 10000)}
            item={item}
            items={items}
          />
        ))}
      </ul>
      <div className="ajout-ingredients">
        <input
          type="text"
          placeholder="..."
          onChange={(e) =>
            setValue({
              id: Math.round(Math.random() * 1000),
              value: e.target.value,
            })
          }
          value={value.value}
        />
        <button onClick={ajoutIngr}>Ajouter</button>
      </div>
    </div>
  );
};

export default FormItems;
