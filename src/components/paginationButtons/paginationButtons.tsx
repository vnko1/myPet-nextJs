import React, { FC } from "react";
import usePagination, { UsePaginationItem } from "@mui/material/usePagination";

import { NEWS_LIMIT } from "@/types";
import styles from "./paginationButtons.module.scss";

import { PaginationButtonsProps } from "./paginationButtons.type";
import { Button } from "./components";

const createPagimationItem = ({
  page,
  type,
  selected,
  ...item
}: UsePaginationItem) => {
  let children = null;
};

const PaginationButtons: FC<PaginationButtonsProps> = ({
  currentPage,
  totalPages,
  classNames,
  createPageUrl,
}) => {
  totalPages;
  createPageUrl;

  const { items } = usePagination({
    count: Math.floor(totalPages / NEWS_LIMIT),
  });

  console.log(items);

  return (
    <ul className={`${styles["pagination"]} ${classNames}`}>
      {items.map((item, index) => (
        <li key={index}></li>
      ))}
    </ul>
  );
};

export default PaginationButtons;
