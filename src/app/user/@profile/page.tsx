import React from "react";
import { redirect } from "next/navigation";

import { currentUser } from "@/lib/database";
import { LinksEnum } from "@/types";
import userStyles from "../user.module.scss";
import profileStyles from "./profile.module.scss";
import { UserForm } from "./_components";

async function Profile() {
  const user = await currentUser();

  if (user)
    return (
      <div className={profileStyles["profile"]}>
        <h2 className={userStyles["title"]}>My information:</h2>
        <div className={`wrapper ${profileStyles["profile__wrapper"]}`}>
          <UserForm user={JSON.parse(JSON.stringify(user))} />
        </div>
      </div>
    );

  return redirect(LinksEnum.HOME);
}

export default Profile;
