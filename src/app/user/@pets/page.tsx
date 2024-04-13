import React from "react";

import { PetsTypes } from "@/types";
import { JSONParser } from "@/utils";
import { getPets } from "@/lib/actions";
import { NavButton, Pets } from "./_components";
import userStyles from "../user.module.scss";
import petsStyles from "./pets.module.scss";

async function PetsPage() {
  const data: PetsTypes[] = await getPets();

  const pets = JSONParser(data);

  return (
    <div className={petsStyles["pets"]}>
      <div className={petsStyles["head-wrapper"]}>
        <h2 className={userStyles["title"]}>My pets:</h2>
        <NavButton />
      </div>
      <Pets pets={pets} />
    </div>
  );
}

export default PetsPage;
