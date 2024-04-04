import React from "react";
import SignUp from "../_components/signUp/signUp";

const fields = [
  { name: "email", type: "email", placeholder: "Email" },
  { name: "password", type: "password", placeholder: "Password" },
];

function Login() {
  return <SignUp fields={fields} path="login" />;
}

export default Login;
