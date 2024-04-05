"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./styles.module.scss";

function Layout({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();

  const isRegister = pathName === "/register";

  return (
    <main>
      <section className="section">
        <div className="container">
          <div className={styles["auth"]}>
            <h1 className={styles["auth__title"]}>
              {isRegister ? "Registration" : "Login"}
            </h1>
            {children}
            <p className={styles["auth__text"]}>
              Already have an account?
              <Link
                href={isRegister ? "/login" : "/register"}
                className={styles["link"]}
              >
                {" "}
                {isRegister ? "Login" : "Register"}
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Layout;
