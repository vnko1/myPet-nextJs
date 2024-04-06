import { Dispatch, SetStateAction } from "react";
import {
  IAnimationProps,
  ITransitionArgs,
} from "../../animation/animation.type";

export type ModalProps = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
  isOpen: boolean;
  transitionClassName?: ITransitionArgs;
  disableScroll?: boolean;
  transitionTimeOut?: number;
  portal?: boolean;
  backdropClassName?: string;
  bodyClassName?: string;
  axis?: "clientX" | "clientY";
  touchDistinction?: number;
  enableSwipeUpToScreen?: number;
  enableSwipe?: boolean;
  swipe?: "left" | "right";
} & Pick<IAnimationProps, "mountOnEnter" | "unmountOnExit">;
