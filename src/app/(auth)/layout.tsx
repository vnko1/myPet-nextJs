"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./styles.module.scss";

function Layout({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();

  const isRegister = pathName === "/register";
  function getTitle() {
    if (isRegister) return "Registration";
    return "Login";
  }

  function getLinkText() {
    if (isRegister) return "Login";
    return "Register";
  }

  function getPath() {
    if (isRegister) return "/login";
    return "/register";
  }

  return (
    <main>
      <section className="section">
        <div className="container">
          <div className={styles["auth"]}>
            <h1 className={styles["auth__title"]}>{getTitle()}</h1>
            {children}
            <p className={styles["auth__text"]}>
              Already have an account?
              <Link href={getPath()} className={styles["link"]}>
                {" "}
                {getLinkText()}
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Layout;
