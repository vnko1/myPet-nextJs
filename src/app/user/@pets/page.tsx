import React from "react";

import { PetsTypes } from "@/types";
import { getPets } from "@/lib/actions";
import { NavButton, Pets } from "./_components";
import userStyles from "../user.module.scss";
import petsStyles from "./pets.module.scss";

async function PetsPage() {
  const pets: PetsTypes[] = await getPets();

  return (
    <div className={petsStyles["pets"]}>
      <div className={petsStyles["head-wrapper"]}>
        <h2 className={userStyles["title"]}>My pets:</h2>
        <NavButton />
      </div>
      <Pets pets={JSON.parse(JSON.stringify(pets))} />
    </div>
  );
}

export default PetsPage;
