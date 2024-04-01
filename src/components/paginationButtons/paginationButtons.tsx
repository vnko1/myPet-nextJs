import React, { FC } from "react";
import usePagination, { UsePaginationItem } from "@mui/material/usePagination";

import { NEWS_LIMIT } from "@/types";
import styles from "./paginationButtons.module.scss";

import {
  CreatePageUrl,
  PaginationButtonsProps,
} from "./paginationButtons.type";
import { Button } from "./components";

const createPaginationItem = (
  { page, type, selected, ...item }: UsePaginationItem,
  currentPage: number,
  createPageUrl: CreatePageUrl
) => {
  if (type === "start-ellipsis" || type === "end-ellipsis") return "...";

  if (type === "page" && page)
    return (
      <Button
        href={createPageUrl(page)}
        currentPage={currentPage}
        value={page}
        {...item}
      />
    );

  if (type === "previous" && page) {
    if (page > 1) return <Button href={createPageUrl(page - 1)} />;
    if (page < 2) return <Button href={createPageUrl(1)} />;
  }
};

const PaginationButtons: FC<PaginationButtonsProps> = ({
  currentPage,
  totalPages,
  classNames,
  createPageUrl,
}) => {
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
