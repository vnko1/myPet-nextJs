"use client";
import { FC, useState } from "react";
import { usePathname } from "next/navigation";

import styles from "./header.module.scss";
import { Icon, Logo, Modal, UIButton } from "@/components";
import { IconEnum, LinksEnum } from "@/types";

const links = [
  { label: "News", href: LinksEnum.NEWS },
  { label: "Find pet", href: LinksEnum.PETS },
  { label: "Our friends", href: LinksEnum.FRIENDS },
];

const transitionClassNames = {
  enter: styles["modal-enter"],
  enterActive: styles["modal-enter-active"],
  exit: styles["modal-exit"],
  exitActive: styles["modal-exit-active"],
};

const Header: FC = () => {
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
            <UIButton
              variant="contained"
              size="small"
              icon={IconEnum.PET}
              alignIcon="right"
            >
              Log IN
            </UIButton>
            <UIButton variant="outlined" size="small">
              Registration
            </UIButton>
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
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        backdropClassName={styles["modal"]}
        bodyClassName={styles["modal__body"]}
        transitionClassName={transitionClassNames}
        enableSwipe
      >
        <div className={styles["menu__auth"]}>
          <UIButton
            variant="contained"
            size="small"
            icon={IconEnum.PET}
            alignIcon="right"
          >
            Log IN
          </UIButton>
          <UIButton variant="outlined" size="small">
            Registration
          </UIButton>
        </div>
        <nav className={styles["menu-nav"]}>
          <ul className={styles["menu-nav__links"]}>
            {links.map((link, index) => (
              <li key={index} className="text-center">
                <UIButton
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  variant="text"
                  size="large"
                  isCurrent={link.href === pathName}
                >
                  {link.label}
                </UIButton>
              </li>
            ))}
          </ul>
        </nav>
      </Modal>
    </header>
  );
};

export default Header;
