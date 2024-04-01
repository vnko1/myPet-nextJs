import React, { ChangeEvent, FC } from "react";
import { useRouter } from "next/navigation";
import { Pagination } from "@mui/material";

import { NEWS_LIMIT } from "@/types";
import styles from "./paginationButtons.module.scss";

import { PaginationButtonsProps } from "./paginationButtons.type";

const PaginationButtons: FC<PaginationButtonsProps> = ({
  currentPage,
  totalPages,
  classNames,
  createPageUrl,
}) => {
  const count = Math.floor(totalPages / NEWS_LIMIT);
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
