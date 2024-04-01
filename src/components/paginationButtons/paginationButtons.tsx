import React, { FC } from "react";
// import Link from "next/link";
import styles from "./paginationButtons.module.scss";

import { PaginationButtonsProps } from "./paginationButtons.type";

const PaginationButtons: FC<PaginationButtonsProps> = () => {
  return <div className={styles["pagination"]}>PaginationButtons</div>;
};

export default PaginationButtons;
