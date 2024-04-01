import React, { FC } from "react";
import cn from "classnames";

import Link from "next/link";

import { IconEnum } from "@/types";
import { ButtonProps } from "./button.type";
import styles from "./button.module.scss";
import { Icon } from "@/components";

const Button: FC<ButtonProps> = ({
  classNames,
  href,
  value,
  currentPage,
  icon = false,
  arrow = "left",
}) => {
  const iconButtonClassNames = cn(
    styles["button"],
    styles["icon"],
    {
      [styles["left"]]: arrow === "left",
      [styles["right"]]: arrow === "right",
    },
    classNames
  );

  const buttonClassNames = cn(
    styles["button"],
    {
      [styles["current"]]: currentPage === value,
    },
    classNames
  );

  if (icon)
    return (
      <Link href={href} className={iconButtonClassNames} scroll={false}>
        <Icon icon={IconEnum.ARROW} size={16} />
      </Link>
    );

  return (
    <Link className={buttonClassNames} href={href} scroll={false}>
      {value}
    </Link>
  );
};

export default Button;
