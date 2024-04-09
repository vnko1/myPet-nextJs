// "use client";
import React from "react";
import styles from "./addPet.module.scss";
import { NavBar } from "./_components";

function AddPetLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`wrapper ${styles["add-pet"]}`}>
      <h1 className={styles["title"]}>Add pet</h1>
      <NavBar />
      {children}
    </div>
  );
}

export default AddPetLayout;
