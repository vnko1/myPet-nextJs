import React from "react";
import { SignUp } from "../_components";

const fields = [
  { name: "email", type: "email", placeholder: "Email" },
  { name: "password", type: "password", placeholder: "Password" },
];
// export const dynamic = "force-static";

function Login() {
  return <SignUp fields={fields} path="login" />;
}

export default Login;
