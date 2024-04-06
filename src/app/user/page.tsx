import React from "react";
import { redirect } from "next/navigation";
import { isAuth } from "@/lib/database";
import { LinksEnum } from "@/types";

async function User() {
  const user = await isAuth();

  if (user)
    return (
      <section className="section">
        <div className="container">User</div>
      </section>
    );

  return redirect(LinksEnum.HOME);
}

export default User;
