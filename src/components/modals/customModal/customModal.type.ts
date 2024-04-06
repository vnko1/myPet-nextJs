import { Dispatch, ReactNode, SetStateAction } from "react";

export type ModalProps = {
  classNames?: string;
  children: ReactNode;
  portal?: boolean;
  onCrossClick?: () => void;
  onBackdropClick?: () => void;
  onHandleClick?: () => void;
  setIsActive?: Dispatch<SetStateAction<boolean>>;
};
