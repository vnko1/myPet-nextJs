import { HTMLAttributes } from "react";

export type SearchFieldProps = { classNames?: string } & Partial<
  HTMLAttributes<HTMLInputElement>
>;
