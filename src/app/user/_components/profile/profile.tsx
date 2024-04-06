import React from "react";
import { User } from "./profile.type";

function Profile({ user }: { user: User }) {
  console.log(user);
  return <div className="wrapper">Profile</div>;
}

export default Profile;
