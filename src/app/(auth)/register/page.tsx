import React from "react";
import { SignUp } from "../_components";

const fields = [
  { name: "name", type: "text", placeholder: "Name", fieldValidation: true },
  { name: "email", type: "email", placeholder: "Email", fieldValidation: true },
  {
    name: "password",
    type: "password",
    placeholder: "Password",
    fieldValidation: true,
  },
  {
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirm password",
    fieldValidation: true,
  },
];

// export const dynamic = "force-static";

function Register() {
  return <SignUp fields={fields} path="register" />;
}

export default Register;
