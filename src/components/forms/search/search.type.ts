import { FormHTMLAttributes, InputHTMLAttributes } from "react";

export type SearchFromProps = {
  classNames?: string;
  label?: string;
  onSubmit?: (term: string) => void;
} & Partial<
  InputHTMLAttributes<HTMLInputElement> &
    Partial<FormHTMLAttributes<HTMLFormElement>>
>;
