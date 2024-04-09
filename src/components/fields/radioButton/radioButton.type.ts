import { HTMLAttributes } from "react";

export type RadioButtonProps = { classNames?: string } & Partial<
  HTMLAttributes<HTMLInputElement>
>;
