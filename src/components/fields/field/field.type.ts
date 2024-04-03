import { InputHTMLAttributes } from "react";

export type FiledProps = {
  classNames?: string;
  label?: string;
  name: string;
} & Partial<InputHTMLAttributes<HTMLInputElement>>;
