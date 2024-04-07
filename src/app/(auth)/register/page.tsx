import React from "react";
import { SignUp } from "../_components";

const fields = [
  { name: "name", type: "text", placeholder: "Name" },
  { name: "email", type: "email", placeholder: "Email" },
  { name: "password", type: "password", placeholder: "Password" },
  {
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirm password",
  },
];

// export const dynamic = "force-static";

function Register() {
  return <SignUp fields={fields} path="register" />;
}

export default Register;
