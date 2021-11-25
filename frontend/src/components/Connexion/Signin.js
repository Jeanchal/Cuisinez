import React from "react";

const Signin = () => {
  return (
    <div>
      <h2>S'inscrire</h2>
      <input type="text" placeholder="Prénom" />
      <br />
      <input type="text" placeholder="Nom" />
      <br />
      <input type="text" placeholder="email" />
      <br />
      <input type="text" placeholder="Password" />
      <br />
      <input type="text" placeholder="confirm Password" />
      <br />
      <button>S'inscrire</button>
    </div>
  );
};

export default Signin;
