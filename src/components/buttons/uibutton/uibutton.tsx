import Link from "next/link";
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
  const variantClassName = cn({
    [styles["btn--contained"]]: variant === "contained",
    [styles["btn--outlined"]]: variant === "outlined",
    [styles["btn--text"]]: variant === "text",
  });

  const sizeClassName = cn({
    [styles["btn--small"]]: size === "small",
    [styles["btn--medium"]]: size === "medium",
    [styles["btn--large"]]: size === "large",
  });

  const colorClassName = cn({
    [styles["btn--primary"]]: color === "primary",
    [styles["btn--secondary"]]: color === "secondary",
  });

  const alignIconClassName = cn({
    [styles["btn--with-icon"]]: icon || isCustomIcon,
    [styles["btn--icon-left"]]: alignIcon === "left",
    [styles["btn--icon-right"]]: alignIcon === "right",
  });
  const baseClassNames = cn(
    styles["btn"],
    variantClassName,
    sizeClassName,
    colorClassName,
    alignIconClassName,
    className
  );

  if (href)
    return (
      <Link href={href} className={baseClassNames}>
        {icon ? <Icon className="btn__icon" icon={icon} /> : null}
        {children}
      </Link>
    );
  return (
    <button type={type} className={baseClassNames} {...props}>
      {icon ? <Icon icon={icon} /> : null}
      {children}
    </button>
  );
};

export default UIButton;