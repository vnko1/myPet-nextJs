import { Dispatch, SetStateAction } from "react";

export type LogOutModalProps = {
  classNames?: string;
  setIsActive: Dispatch<SetStateAction<boolean>>;
};
