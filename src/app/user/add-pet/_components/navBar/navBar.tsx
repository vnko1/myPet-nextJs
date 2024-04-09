"use client";
import React, { FC } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import cn from "classnames";

import { LinksEnum } from "@/types";
import { NavBarProps, NavLinkProps } from "./navBar.type";
import styles from "./navBar.module.scss";

const NavItem: FC<NavLinkProps> = ({ label, href, isActive, isChecked }) => {
  const classNames = cn(styles["link"], {
    [styles["active"]]: isActive,
    [styles["checked"]]: isChecked,
  });
  return (
    <Link href={href} className={classNames}>
      {label}
    </Link>
  );
};

const NavBar: FC<NavBarProps> = ({ options, details, info }) => {
  const pathName = usePathname();

  const path = pathName.split("/");

  const links = [
    {
      label: "Choose option",
      href: LinksEnum.ADD_PET_OPTION,
      isChecked: options,
      isActive:
        path[path.length - 1] === "option" ||
        path[path.length - 1] === "details" ||
        path[path.length - 1] === "info",
    },
    {
      label: "Personal details",
      href: LinksEnum.ADD_PET_DETAILS,
      isChecked: details,
      isActive:
        path[path.length - 1] === "details" || path[path.length - 1] === "info",
    },
    {
      label: "More info",
      href: LinksEnum.ADD_PET_INFO,
      isChecked: info,
      isActive: path[path.length - 1] === "info",
    },
  ];

  return (
    <ul className={styles["nav"]}>
      {links.map((link) => (
        <li key={link.href}>
          <NavItem {...link} />
        </li>
      ))}
    </ul>
  );
};

export default NavBar;
