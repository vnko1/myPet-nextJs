import { Dispatch, SetStateAction } from "react";

export type AuthModalProps = {
  classNames?: string;
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
};
