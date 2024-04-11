// "usc client";
import React, { FC } from "react";

import styles from "./pets.module.scss";
import Pet from "../pet/pet";
import { PetsProps } from "./pets.type";

const Pets: FC<PetsProps> = ({ pets }) => {
  return (
    <ul className={styles["pets"]}>
      {pets.map((pet) => (
        <li key={pet._id.toString()}>
          <Pet {...pet} />
        </li>
      ))}
    </ul>
  );
};

export default Pets;
