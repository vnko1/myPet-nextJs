"use client";
import React, { ChangeEvent, FC } from "react";
import { useRouter } from "next/navigation";
import { Pagination } from "@mui/material";

import styles from "./paginationButtons.module.scss";

import { PaginationButtonsProps } from "./paginationButtons.type";

const PaginationButtons: FC<PaginationButtonsProps> = ({
  currentPage,
  totals,
  classNames,
  limit,
  createPageUrl,
}) => {
  const count = Math.floor(totals / limit);
  const router = useRouter();

  const onHandleChange = (_: ChangeEvent<unknown>, page: number) => {
    router.push(createPageUrl(page), { scroll: false });
  };

  return (
    <Pagination
      count={count}
      variant="outlined"
      page={currentPage}
      onChange={onHandleChange}
      className={`${styles["pagination"]} ${classNames}`}
    />
  );
};

export default PaginationButtons;
