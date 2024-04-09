"use client";
import { LinksEnum } from "@/types";
import Link from "next/link";
import React from "react";
import styles from './addPet.module.scss'
import { NavBar } from "./_components";

function AddPetLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`wrapper ${styles['add-pet']}`}>
             <h1 className={styles['title']}>Add pet</h1>
            <NavBar/>
            <Link href={LinksEnum.ADD_PET_OPTION}>Option</Link>
            <Link href={LinksEnum.ADD_PET_DETAILS}>Details</Link>
            <Link href={LinksEnum.ADD_PET_INFO}>Info</Link>
            {children}
          </div>
  );
}

export default AddPetLayout;
