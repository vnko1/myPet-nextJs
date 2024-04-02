import React from "react";

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
        </div>
      </section>
    </main>
  );
}

export default NotFound;
