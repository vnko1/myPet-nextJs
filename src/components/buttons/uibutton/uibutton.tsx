import { FC } from "react";
import cn from "classnames";
import { IUIButton } from "./uibutton.type";
import styles from "./uibutton.module.scss";

import { Icon } from "@/components";

const UIButton: FC<IUIButton> = ({
  isLoading = false,
  className,
  children,
  fullWidth,
  color = "primary",
  variant = "contained",
  size = "small",
  type = "button",
  icon,
  isCustomIcon,
  alignIcon,
  href,
  ...props
}) => {
  const baseClassNames = cn(styles["button"], className);
  return (
    <button type={type} className={baseClassNames} {...props}>
      {icon ? <Icon icon={icon} /> : null}
      {children}
    </button>
  );
};

export default UIButton;
