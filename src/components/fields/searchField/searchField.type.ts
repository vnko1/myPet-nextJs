import { InputHTMLAttributes } from "react";

export type SearchFieldProps = {
  classNames?: string;
  label?: string;
} & Partial<InputHTMLAttributes<HTMLInputElement>>;
