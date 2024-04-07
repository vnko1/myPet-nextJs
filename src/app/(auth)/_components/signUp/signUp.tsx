"use client";
import React, { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema, registerSchema } from "@/schema";
import { ConstantsEnum } from "@/types";
import { login, register } from "@/lib/actions";
import { Field, UIButton } from "@/components";
import { ResType, SignUpProps } from "./signUp.type";
import styles from "./signUp.module.scss";

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
    const formValues = methods.getValues();

    try {
      const res: ResType = isRegister
        ? await register(formData)
        : await login(formData);

      if (res?.errors && typeof res.errors === "object") {
        const [key] = Object.keys(res.errors);

        if (key in formValues)
          return methods.setError(key, { message: res.errors[key] });
        else throw new Error(res.errors[key]);
      }
      isRegister && localStorage.removeItem(ConstantsEnum.IS_NEW_USER);
      methods.reset();
    } catch (error) {
      if (error instanceof Error) throw new Error(error.message);
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
