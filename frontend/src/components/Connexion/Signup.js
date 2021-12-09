import React from "react";

const Signup = () => {
  return (
    <div>
      <h2>Se connecter</h2>
      <input type="text" placeholder="email" />
      <br />
      <input type="text" placeholder="Password" />
      <br />
      <button className="red_btn">Se connecter</button>
    </div>
  );
};

export default Signup;
