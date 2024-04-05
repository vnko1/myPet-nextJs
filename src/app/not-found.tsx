"use client";
import React from "react";

import styles from "./styles.module.scss";
import Image from "next/image";
import { UIButton } from "@/components";
import { IconEnum } from "@/types";

function NotFound() {
  return (
    <main>
      <section className={styles["not-found"]}>
        <div className={`container ${styles["not-found__wrapper"]}`}>
          <h1>Ooops! This page not found :(</h1>
          <Image
            alt="Not found"
            src="/images/404-desc@2x.webp"
            width={822}
            height={360}
          />
          <div className={styles["not-found__link"]}>
            <UIButton
              href="/"
              icon={IconEnum.PET}
              variant="contained"
              color="secondary"
              alignIcon="right"
              fullWidth
            >
              To main page
            </UIButton>
          </div>
        </div>
      </section>
    </main>
  );
}

export default NotFound;
