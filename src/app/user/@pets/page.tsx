import React from "react";

import userStyles from "../user.module.scss";
import petsStyles from "./pets.module.scss";

function Pets() {
  return (
    <div className={petsStyles["pets"]}>
      <h2 className={userStyles["title"]}>My pets:</h2>
      <div className={`wrapper ${petsStyles["wrapper"]}`}>Pets</div>
    </div>
  );
}

export default Pets;
