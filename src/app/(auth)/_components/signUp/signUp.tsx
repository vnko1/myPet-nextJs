"use client";
import React, { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema, SignupProps } from "./signUp.type";
import { registerSchema } from "@/schema";
import styles from "./signUp.module.scss";
import { Field, UIButton } from "@/components";

const SignUp: FC<SignupProps> = ({ classNames }) => {
  const methods = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });
  return (
    <FormProvider {...methods}>
      <form className={`${styles["form"]} ${classNames}`}>
        <Field name="name" />
        <UIButton type="submit" fullWidth color="secondary">
          Registration
        </UIButton>
      </form>
    </FormProvider>
  );
};

export default SignUp;
