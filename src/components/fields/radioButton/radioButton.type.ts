import { InputHTMLAttributes } from "react";

export type RadioButtonProps = {
  classNames?: string;
  label: string;

  name: string;
} & Partial<InputHTMLAttributes<HTMLInputElement>>;
