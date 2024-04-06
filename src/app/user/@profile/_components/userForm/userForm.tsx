"use client";
import React from "react";
import { UserFormProps } from "./userForm.type";
import styles from "./userForm.module.scss";

function UserForm({ user }: UserFormProps) {
  console.log(user);
  return <div className={styles["form"]}>UserForm</div>;
}

export default UserForm;
