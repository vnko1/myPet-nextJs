import { Dispatch, ReactNode, SetStateAction } from "react";

export type ModalProps = {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
  classNames?: string;
  eventHandler?: () => void;
};
