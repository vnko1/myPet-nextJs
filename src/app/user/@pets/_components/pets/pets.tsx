"usc client";
import React, { FC, useEffect, useState } from "react";

import { EndpointsEnum, PetsTypes } from "@/types";
import styles from "./pets.module.scss";
import Pet from "../pet/pet";

const Pets: FC = () => {
  const [pets, setPets] = useState<PetsTypes[]>([]);

  useEffect(() => {
    fetch(EndpointsEnum.PET)
      .then((res) => {
        return res.json();
      })
      .then((pets) => setPets(pets));
  }, []);

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
