import React from "react";
import { User } from "./profile.type";
import styles from "./profile.module.scss";

function Profile({ user }: { user: User }) {
  console.log(user);
  return <div className={`wrapper ${styles["profile"]}`}>Profile</div>;
}

export default Profile;
