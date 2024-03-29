import { FC } from "react";

import styles from "./header.module.scss";
import { Icon, Logo, UIButton } from "@/components";
import { IconEnum } from "@/types";

const links = [];

const Header: FC = () => {
  return (
    <header className={styles["header"]}>
      <div className={`container ${styles["header__wrapper"]}`}>
        <nav className={styles["nav"]}>
          <Logo />
        </nav>
        <UIButton>
          <Icon icon={IconEnum.MENU} size={24} className={styles["icon"]} />
        </UIButton>
      </div>
    </header>
  );
};

export default Header;
