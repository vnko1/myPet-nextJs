import React from "react";
import { isAuth } from "@/lib/database";

async function User() {
  const user = await isAuth();

  if (user)
    return (
      <section className="section">
        <div className="container">User</div>
      </section>
    );

  return null;
}

export default User;
