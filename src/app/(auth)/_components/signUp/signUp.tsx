"use client";
import React, { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpProps } from "./signUp.type";
import { loginSchema, registerSchema } from "@/schema";
import styles from "./signUp.module.scss";
import { Field, UIButton } from "@/components";

const SignUp: FC<SignUpProps> = ({
  classNames,
  fields = [],
  path = "register",
}) => {
  const methods = useForm({
    resolver: zodResolver(path === "register" ? registerSchema : loginSchema),
    mode: "all",
  });

  return (
    <FormProvider {...methods}>
      <form
        className={`${styles["form"]} ${classNames}`}
        noValidate
        onSubmit={methods.handleSubmit((e) => {
          console.log(e);
        })}
      >
        {fields.map((field, index) => (
          <Field key={index} {...field} />
        ))}
        <UIButton type="submit" fullWidth color="secondary">
          Registration
        </UIButton>
      </form>
    </FormProvider>
  );
};

export default SignUp;
