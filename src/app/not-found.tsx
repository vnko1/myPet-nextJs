import React from "react";
import Image from "next/image";

import styles from "./styles.module.scss";

function NotFound() {
  return (
    <main>
      <section className={styles["not-found"]}>
        <div className="container">
          <h1>
            Ooops! <br />
            This page not found :(
          </h1>
          <Image
            src="/images/404.webp"
            alt="404"
            fill
            objectFit="contain"
            objectPosition="center"
          />
        </div>
      </section>
    </main>
  );
}

export default NotFound;
