import React, { FC } from "react";
// import Link from "next/link";
import styles from "./paginationButtons.module.scss";

import { PaginationButtonsProps } from "./paginationButtons.type";
import { Button } from "./components";

const PaginationButtons: FC<PaginationButtonsProps> = () => {
  return (
    <div className={styles["pagination"]}>
      <Button href="#">button</Button>
    </div>
  );
};

export default PaginationButtons;
