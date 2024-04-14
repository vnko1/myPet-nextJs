import React from "react";
import { redirect } from "next/navigation";

import { currentUser } from "@/lib/database";
import { LinksEnum } from "@/types";
import { JSONParser } from "@/utils";
import userStyles from "../user.module.scss";
import profileStyles from "./profile.module.scss";
import { UserForm } from "./_components";

async function Profile() {
  const data = await currentUser();

  const user = JSONParser(data);

  if (user)
    return (
      <div className={profileStyles["profile"]}>
        <h2 className={userStyles["title"]}>My information:</h2>
        <div className={`wrapper ${profileStyles["profile__wrapper"]}`}>
          <UserForm user={user} />
        </div>
      </div>
    );

  return redirect(LinksEnum.HOME);
}

export default Profile;
