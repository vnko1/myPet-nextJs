"use client";
import { FC } from "react";
import { usePathname } from "next/navigation";

import styles from "./header.module.scss";
import { Icon, Logo, UIButton } from "@/components";
import { IconEnum, LinksEnum } from "@/types";

const links = [
  { label: "News", href: LinksEnum.NEWS },
  { label: "Find pet", href: LinksEnum.PETS },
  { label: "Our friends", href: LinksEnum.FRIENDS },
];

const Header: FC = () => {
  const pathName = usePathname();

  return (
    <header className={styles["header"]}>
      <div className={`container ${styles["header__wrapper"]}`}>
        <nav className={styles["nav"]}>
          <Logo />
          <ul className={styles["nav__links"]}>
            {links.map((link, index) => (
              <li key={index}>
                <UIButton
                  href={link.href}
                  variant="text"
                  isCurrent={link.href === pathName}
                >
                  {link.label}
                </UIButton>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles["menu"]}>
          <UIButton variant="text">
            <Icon icon={IconEnum.MENU} size={24} className={styles["icon"]} />
          </UIButton>
        </div>
        <div className={styles["auth"]}>
          <UIButton
            variant="contained"
            size="medium"
            icon={IconEnum.PET}
            alignIcon="right"
          >
            Log IN
          </UIButton>
          <UIButton variant="outlined" size="medium">
            Registration
          </UIButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
