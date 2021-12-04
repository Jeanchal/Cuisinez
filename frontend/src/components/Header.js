import React, { useState } from "react";
import Navigation from "./Navigation";
const Header = () => {
  const [displayMenu, setDisplayMenu] = useState(true);

  function activDisplayMenu() {
    displayMenu === false ? setDisplayMenu(true) : setDisplayMenu(false);
  }

  return (
    <header>
      <div id="header">
        <div id="logo">
          <div id="couverts">
            <svg
              width="30"
              height="34"
              viewBox="0 0 30 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.9928 1.00947C15.0505 1.32158 16.1538 7.28484 16.1538 9.56257C16.1538 13.0356 14.149 15.5126 11.1851 16.5086L12.1154 32.3199C12.1659 33.2297 11.3798 34 10.3846 34H5.76923C4.78125 34 3.98798 33.2363 4.03846 32.3199L4.96875 16.5086C1.9976 15.5126 0 13.029 0 9.56257C0 7.2782 1.10337 1.32158 1.16106 1.00947C1.39183 -0.338576 4.42788 -0.358498 4.61538 1.08251V10.4591C4.70913 10.6848 5.70433 10.6716 5.76923 10.4591C5.87019 8.77898 6.33894 1.21533 6.34615 1.04267C6.58413 -0.338576 9.56971 -0.338576 9.80048 1.04267C9.8149 1.22197 10.2764 8.77898 10.3774 10.4591C10.4423 10.6716 11.4447 10.6848 11.5312 10.4591V1.08251C11.7187 -0.351857 14.762 -0.338576 14.9928 1.00947ZM23.5889 19.9817L22.5072 32.2734C22.4207 33.2031 23.2212 34 24.2308 34H28.2692C29.2284 34 30 33.2895 30 32.4063V1.59384C30 0.71728 29.2284 9.49223e-05 28.2692 9.49223e-05C22.3197 9.49223e-05 12.3029 11.8536 23.5889 19.9817Z"
                fill="white"
              />
            </svg>
          </div>
          <h1>Cuisinez</h1>
        </div>
        <div id="burger_menu" onClick={activDisplayMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className={displayMenu === false ? null : "displayNav"}>
        <Navigation activDisplayMenu={activDisplayMenu} />
      </div>
    </header>
  );
};

export default Header;
