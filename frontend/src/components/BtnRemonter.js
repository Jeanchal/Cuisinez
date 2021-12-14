import React from "react";

window.addEventListener("scroll", () => {
  let btn = document.getElementById("btnRemonter");
  if (window.scrollY > 200) btn.classList.remove("displayNone");
  if (window.scrollY < 200) btn.classList.add("displayNone");
});

function remonter() {
  window.scrollTo(0, 0);
}

const BtnRemonter = () => {
  return (
    <div id="btnRemonter" className="displayNone" onClick={remonter}>
      <i className="fas fa-arrow-alt-circle-up"></i>
    </div>
  );
};

export default BtnRemonter;
