import React from "react";
import { SignUp } from "../_components";

const fields = [
  {
    name: "email",
    type: "email",
    placeholder: "Email",
    fieldValidation: false,
  },
  {
    name: "password",
    type: "password",
    placeholder: "Password",
    fieldValidation: false,
  },
];
// export const dynamic = "force-static";

function Login() {
  return <SignUp fields={fields} path="login" />;
}

export default Login;
