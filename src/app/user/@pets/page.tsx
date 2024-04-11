// "use client";
import React from "react";
// import { useRouter } from "next/navigation";

import { PetsTypes } from "@/types";
// import { UIButton } from "@/components";
import { Pets } from "./_components";
import userStyles from "../user.module.scss";
import petsStyles from "./pets.module.scss";
import { getPets } from "@/lib/actions";

async function PetsPage() {
  // const router = useRouter();
  const pets: PetsTypes[] = await getPets();

  return (
    <div className={petsStyles["pets"]}>
      <div className={petsStyles["head-wrapper"]}>
        <h2 className={userStyles["title"]}>My pets:</h2>
        {/* <UIButton
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
        </UIButton> */}
      </div>
      <Pets pets={JSON.parse(JSON.stringify(pets))} />
    </div>
  );
}

export default PetsPage;
