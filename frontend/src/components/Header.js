import React, { useState } from "react";
import Navigation from "./Navigation";
const Header = () => {
  const [displayMenu, setDisplayMenu] = useState(true);

  function activDisplayMenu() {
    displayMenu === false ? setDisplayMenu(true) : setDisplayMenu(false);
  }

  return (
    <header>
      <div id="logo">
        <div id="burger_menu" onClick={activDisplayMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h1>Cuisinez</h1>
      </div>
      <div className={displayMenu === false ? null : "displayNav"}>
        <Navigation activDisplayMenu={activDisplayMenu} />
      </div>
    </header>
  );
};

export default Header;
