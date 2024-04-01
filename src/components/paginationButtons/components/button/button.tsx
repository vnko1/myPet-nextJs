import React, { FC } from "react";
import { useRouter } from "next/router";
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
  disabled,
}) => {
  const router = useRouter();

  const onHandleClick = () => {
    router.push(href);
  };
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
      <button
        className={iconButtonClassNames}
        onClick={onHandleClick}
        disabled={disabled}
      >
        <Icon icon={IconEnum.ARROW} size={16} />
      </button>
    );

  return (
    <Link className={buttonClassNames} href={href} scroll={false}>
      {value}
    </Link>
  );
};

export default Button;
