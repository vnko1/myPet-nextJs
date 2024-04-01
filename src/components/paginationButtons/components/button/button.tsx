import React, { FC } from "react";
import Link from "next/link";
import cn from "classnames";
import { IconEnum } from "@/types";
import { ButtonProps } from "./button.type";
import styles from "./button.module.scss";
import { Icon } from "@/components";

const Button: FC<ButtonProps> = ({
  classNames,
  href,
  children,
  icon = false,
  arrow = "left",
}) => {
  const iconButtonClassNames = cn(styles["button"], classNames);

  const buttonClassNames = cn(styles["button"], classNames);

  if (icon)
    return (
      <Link href={href} className={iconButtonClassNames} scroll={false}>
        <Icon icon={IconEnum.ARROW} size={24} />
      </Link>
    );

  return (
    <Link className={buttonClassNames} href={href} scroll={false}>
      {children}
    </Link>
  );
};

export default Button;
