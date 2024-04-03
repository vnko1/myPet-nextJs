"use client";
import React, { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "./signUp.type";
import { registerSchema } from "./schema";
import { Field } from "@/components";

const SignUp: FC = () => {
  const methods = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });
  return (
    <FormProvider {...methods}>
      <form>
        <Field name="name" />
      </form>
    </FormProvider>
  );
};

export default SignUp;
