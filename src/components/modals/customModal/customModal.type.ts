import { ReactNode } from "react";

export type ModalProps = {
  classNames?: string;
  children: ReactNode;
  portal?: boolean;
};
