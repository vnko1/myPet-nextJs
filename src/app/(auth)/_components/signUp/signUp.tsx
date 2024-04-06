"use client";
import React, { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { ResType, SignUpProps } from "./signUp.type";
import { loginSchema, registerSchema } from "@/schema";
import { login, createUser } from "@/lib/actions";
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
    try {
      const res: ResType = isRegister
        ? await createUser(formData)
        : await login(formData);

      if (res?.errors && typeof res.errors === "object") {
        const [key] = Object.keys(res.errors);
        return methods.setError(key, { message: res.errors[key] });
      }

      // methods.reset();
    } catch (error) {
      console.log("🚀 ~ handleAction ~ error:", error);
    }
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
        <span>
          <UIButton type="submit" fullWidth color="secondary">
            {isRegister ? "Registration" : "Login"}
          </UIButton>
        </span>
      </form>
    </FormProvider>
  );
};

export default SignUp;
