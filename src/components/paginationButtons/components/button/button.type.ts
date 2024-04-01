import { ReactNode } from "react";

export type ButtonProps = {
  classNames?: string;
  href: string;
  children?: ReactNode;
  icon?: boolean;
  arrow?: "left" | "right";
};
