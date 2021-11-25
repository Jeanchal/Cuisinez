import React, { useState } from "react";
import Signin from "../components/Connexion/Signin";
import Signup from "../components/Connexion/Signup";
import Header from "../components/Header";

const Connexion = () => {
  const [signin, setSignin] = useState(false);

  function activSignin() {
    signin === false ? setSignin(true) : setSignin(false);
  }

  return (
    <div className="page">
      <Header />
      <div>
        {signin === false ? (
          <div>
            <Signup />
            <br />
            <br />
            <button onClick={activSignin}>S'inscrire</button>
          </div>
        ) : null}
      </div>
      <div>
        {signin === true ? (
          <div>
            <Signin />
            <br />
            <br />
            <button onClick={activSignin}>Se Connecter</button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Connexion;
