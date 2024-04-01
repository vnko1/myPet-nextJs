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
  { page, type, ...item }: UsePaginationItem,
  currentPage: number,
  createPageUrl: CreatePageUrl
) => {
  if (type === "start-ellipsis" || type === "end-ellipsis") return "...";

  if (page && type === "page")
    return (
      <Button
        href={createPageUrl(page)}
        currentPage={currentPage}
        page={page}
        type={type}
        {...item}
      />
    );

  if (page && type === "next")
    return (
      <Button
        href={createPageUrl(page)}
        page={page}
        type={type}
        icon
        {...item}
      />
    );

  return (
    <Button
      href={createPageUrl(page || 0)}
      page={page}
      type={type}
      icon
      {...item}
    />
  );
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

  return (
    <ul className={`${styles["pagination"]} ${classNames}`}>
      {items.map((item, index) => (
        <li key={index}>
          {createPaginationItem(item, currentPage, createPageUrl)}
        </li>
      ))}
    </ul>
  );
};

export default PaginationButtons;
