import { HTMLAttributes } from "react";

export type RadioButtonProps = { classNames?: string; label: string } & Partial<
  HTMLAttributes<HTMLInputElement>
>;
