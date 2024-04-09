"use client";
import React, { useState } from "react";
import styles from "./addPet.module.scss";
import { NavBar } from "./_components";
import { AddPetContext, Details, Info, Options } from "./_context";

function AddPetLayout({ children }: { children: React.ReactNode }) {
  const [options, setOptions] = useState<Options | null>(null);
  const [details, setDetails] = useState<Details | null>(null);
  const [info, setInfo] = useState<Info | null>(null);

  return (
    <div className={`wrapper ${styles["add-pet"]}`}>
      <h1 className={styles["title"]}>Add pet</h1>
      <NavBar options={!!options} details={!!details} info={!!info} />
      <AddPetContext.Provider
        value={{ options, details, info, setOptions, setDetails, setInfo }}
      >
        {children}
      </AddPetContext.Provider>
    </div>
  );
}

export default AddPetLayout;
