"use client";
import React, { FC, useState } from "react";
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
  const [errors, setErrors] = useState<string | null>();

  const methods = useForm({
    resolver: zodResolver(isRegister ? registerSchema : loginSchema),
    mode: "all",
  });

  const handleAction = async (formData: FormData) => {
    try {
      setErrors(null);
      const res = isRegister
        ? await createUser(formData)
        : await authenticate(formData);

      if (res?.errors && typeof res.errors === "object") {
        const [key] = Object.keys(res.errors);
        return methods.setError(key, { message: res.errors[key] });
      }

      methods.reset();
    } catch (error) {
      console.log(error);
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
          {errors && <p className="text-sm text-red text-center">{errors}</p>}
        </span>
      </form>
    </FormProvider>
  );
};

export default SignUp;
