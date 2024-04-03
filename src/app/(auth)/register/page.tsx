import React from "react";
import SignUp from "../_components/signUp/signUp";
import styles from "../styles.module.scss";
import Link from "next/link";

function Register() {
  return (
    <>
      <h1 className={styles["auth__title"]}>Registration</h1>
      <SignUp />
      <p className={styles["auth__text"]}>
        Already have an account?
        <Link href="/login" className={styles["link"]}>
          Login
        </Link>
      </p>
    </>
  );
}

export default Register;
