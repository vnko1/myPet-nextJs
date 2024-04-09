"use client";
import React, { FC } from "react";
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

const NavBar: FC<NavBarProps> = ({ options, details, info, path }) => {
  const links = [
    {
      label: "Choose option",
      href: LinksEnum.ADD_PET_CATEGORY,
      isChecked: options,
      isActive:
        path === LinksEnum.ADD_PET_CATEGORY ||
        path === LinksEnum.ADD_PET_DETAILS ||
        path === LinksEnum.ADD_PET_INFO,
    },
    {
      label: "Personal details",
      href: LinksEnum.ADD_PET_DETAILS,
      isChecked: details,
      isActive:
        path === LinksEnum.ADD_PET_DETAILS || path === LinksEnum.ADD_PET_INFO,
    },
    {
      label: "More info",
      href: LinksEnum.ADD_PET_INFO,
      isChecked: info,
      isActive: path === LinksEnum.ADD_PET_INFO,
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
