import { FC } from "react";
import { CSSTransition } from "@/lib/ui";

import { IAnimationProps } from "./animation.type";
import styles from "./animation.module.scss";

const Animation: FC<IAnimationProps> = ({
  children,
  classNames,
  timeout = 200,
  ...props
}) => {
  const defaultClassNames = {
    enter: styles["animation-enter"],
    enterActive: styles["animation-enter-active"],
    exit: styles["animation-exit"],
    exitActive: styles["animation-exit-active"],
  };

  const transitionClassNames = classNames ? classNames : defaultClassNames;

  return (
    <CSSTransition
      timeout={timeout}
      classNames={transitionClassNames}
      {...props}
    >
      {children}
    </CSSTransition>
  );
};

export default Animation;
