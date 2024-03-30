import { FC } from "react";

import { IconEnum } from "@/types";
import { IMenu } from "./menu.type";
import styles from "./menu.module.scss";
import { UIButton, Modal } from "@/components";

const transitionClassNames = {
  enter: styles["modal-enter"],
  enterActive: styles["modal-enter-active"],
  exit: styles["modal-exit"],
  exitActive: styles["modal-exit-active"],
};

const Menu: FC<IMenu> = ({ isOpen, links, pathName, setIsOpen }) => {
  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      backdropClassName={styles["modal"]}
      bodyClassName={styles["modal__body"]}
      transitionClassName={transitionClassNames}
      enableSwipe
      enableSwipeUpToScreen={1279}
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
  );
};

export default Menu;
