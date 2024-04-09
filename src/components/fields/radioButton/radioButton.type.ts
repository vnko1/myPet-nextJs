import { InputHTMLAttributes } from "react";

export type RadioButtonProps = { classNames?: string; label: string } & Partial<
  InputHTMLAttributes<HTMLInputElement>
>;
