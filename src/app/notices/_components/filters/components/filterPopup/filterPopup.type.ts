import { Dispatch, SetStateAction } from "react";

export type FilterPopupProps = {
  classNames?: string;
  active: boolean;
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
  eventHandler?: () => void;
};
