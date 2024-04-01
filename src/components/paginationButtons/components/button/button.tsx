"use client";
import React, { FC, MouseEvent } from "react";

import cn from "classnames";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { IconEnum } from "@/types";
import { ButtonProps } from "./button.type";
import styles from "./button.module.scss";
import { Icon } from "@/components";

const Button: FC<ButtonProps> = ({
  classNames,
  href,
  page,
  currentPage,
  icon = false,
  type,
  disabled,
  onClick,
}) => {
  const router = useRouter();
  const onHandleClick = (event: MouseEvent<HTMLButtonElement>) => {
    onClick && onClick(event);
    router.push(href);
  };
  const iconButtonClassNames = cn(
    styles["button"],
    styles["icon"],
    {
      [styles["left"]]: type === "previous",
      [styles["right"]]: type === "next",
    },
    classNames
  );

  const buttonClassNames = cn(
    styles["button"],
    {
      [styles["current"]]: currentPage === page,
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
      {page}
    </Link>
  );
};

export default Button;
