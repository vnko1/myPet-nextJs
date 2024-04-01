import React, { FC } from "react";
import { ButtonProps } from "./button.type";
import styles from "./button.module.scss";
import Link from "next/link";

const Button: FC<ButtonProps> = ({ classNames, href, children }) => {
  return (
    <Link
      className={`${styles["button"]} ${classNames}`}
      href={href}
      scroll={false}
    >
      {children}
    </Link>
  );
};

export default Button;
