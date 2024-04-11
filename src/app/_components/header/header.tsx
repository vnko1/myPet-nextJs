"use client";
import { FC, useState } from "react";
import { usePathname } from "next/navigation";

import styles from "./header.module.scss";
import { Icon, Logo, UIButton } from "@/components";
import { IconEnum, LinksEnum } from "@/types";
import { Buttons, Menu } from "./components";
import { HeaderProps } from "./header.type";

const links = [
  { label: "News", href: LinksEnum.NEWS },
  { label: "Find pet", href: LinksEnum.NOTICES },
  { label: "Our friends", href: LinksEnum.FRIENDS },
  // { label: "Sponsors", href: "/sponsors" },
  // { label: "User", href: "/user" },
  // { label: "Register", href: "/register" },
];

const Header: FC<HeaderProps> = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
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
                  size="medium"
                  isCurrent={link.href === pathName}
                >
                  {link.label}
                </UIButton>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles["btn-wrapper"]}>
          <div className={styles["auth"]}>
            <Buttons user={user} />
          </div>
          <div className={styles["menu"]}>
            <UIButton variant="text" onClick={() => setIsOpen(!isOpen)}>
              <Icon
                icon={isOpen ? IconEnum.CROSS : IconEnum.MENU}
                size={24}
                className={styles["icon"]}
              />
            </UIButton>
          </div>
        </div>
      </div>
      <Menu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        links={links}
        pathName={pathName}
        user={user}
      />
    </header>
  );
};

export default Header;
