"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { EndpointsEnum, IconEnum, LinksEnum, PetsTypes } from "@/types";
import { UIButton } from "@/components";
import userStyles from "../user.module.scss";
import petsStyles from "./pets.module.scss";

function Pets() {
  const router = useRouter();
  const [pets, setPets] = useState<PetsTypes[]>([]);

  useEffect(() => {
    fetch(EndpointsEnum.GET_PET)
      .then((res) => {
        return res.json();
      })
      .then((pets) => setPets(pets));
  }, []);

  console.log(pets);
  return (
    <div className={petsStyles["pets"]}>
      <div className={petsStyles["head-wrapper"]}>
        <h2 className={userStyles["title"]}>My pets:</h2>
        <UIButton
          color="secondary"
          variant="contained"
          onClick={() => {
            router.push(LinksEnum.ADD_PET_CATEGORY);
            router.refresh();
          }}
          icon={IconEnum.PLUS}
          alignIcon="right"
          size="small"
        >
          Add pet
        </UIButton>
      </div>
      <div className={`wrapper ${petsStyles["wrapper"]}`}>Pets</div>
    </div>
  );
}

export default Pets;
