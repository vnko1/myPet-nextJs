import { Dispatch, SetStateAction } from "react";

export type LogOutModalProps = {
  classNames?: string;
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
};
