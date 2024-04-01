import React, { FC } from "react";
// import Link from "next/link";
import styles from "./paginationButtons.module.scss";

import { PaginationButtonsProps } from "./paginationButtons.type";
import { Button } from "./components";

const PaginationButtons: FC<PaginationButtonsProps> = ({
  currentPage,
  totalPages,
  classNames,
  createPageUrl,
}) => {
  totalPages;
  createPageUrl;
  return (
    <div className={`${styles["pagination"]} ${classNames}`}>
      <Button href="#" value={1} currentPage={currentPage} />
    </div>
  );
};

export default PaginationButtons;
