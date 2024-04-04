"use client";
import React, { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpProps } from "./signUp.type";
import { loginSchema, registerSchema } from "@/schema";
import { authenticate, createUser } from "@/lib/actions";
import styles from "./signUp.module.scss";
import { Field, UIButton } from "@/components";

const SignUp: FC<SignUpProps> = ({
  classNames,
  fields = [],
  path = "register",
}) => {
  const isRegister = path === "register";
  const methods = useForm({
    resolver: zodResolver(isRegister ? registerSchema : loginSchema),
    mode: "all",
  });

  const handleAction = async (formData: FormData) => {
    isRegister ? await createUser(formData) : await authenticate(formData);
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <form
        action={handleAction}
        className={`${styles["form"]} ${classNames}`}
        noValidate
      >
        {fields.map((field, index) => (
          <Field key={index} {...field} />
        ))}
        <UIButton type="submit" fullWidth color="secondary">
          {isRegister ? "Registration" : "Login"}
        </UIButton>
      </form>
    </FormProvider>
  );
};

export default SignUp;
