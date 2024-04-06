import React from "react";
import { redirect } from "next/navigation";

import { isAuth } from "@/lib/database";
import { LinksEnum } from "@/types";
import userStyles from "../user.module.scss";
import profileStyles from "./profile.module.scss";

async function Profile() {
  const user = await isAuth();
  console.log(user);
  if (user)
    return (
      <div className={profileStyles["profile"]}>
        <h2 className={userStyles["title"]}>My information:</h2>
        <div className={`wrapper ${profileStyles["profile__wrapper"]}`}>
          Profile
        </div>
      </div>
    );

  return redirect(LinksEnum.HOME);
}

export default Profile;
