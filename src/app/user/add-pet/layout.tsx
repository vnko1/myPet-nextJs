"use client";
import { LinksEnum } from "@/types";
import Link from "next/link";
import React from "react";

function AddPetLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <section className="section">
        <div className="container">
          <div className="wrapper">
            <Link href={LinksEnum.ADD_PET_OPTION}>Option</Link>
            <Link href={LinksEnum.ADD_PET_DETAILS}>Details</Link>
            <Link href={LinksEnum.ADD_PET_INFO}>Info</Link>
            <h1>Add pet</h1>
            {children}
          </div>
        </div>
      </section>
    </main>
  );
}

export default AddPetLayout;
