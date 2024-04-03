import React from "react";
import styles from "./styles.module.scss";

function Layou({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <section className="section">
        <div className="container">
          <div className={styles["auth"]}>{children}</div>
        </div>
      </section>
    </main>
  );
}

export default Layou;
