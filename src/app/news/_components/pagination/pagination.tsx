"use client";
import React, { FC } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

import { PaginationProps } from "./pagination.type";
import { ConstantsEnum } from "@/types";

const Pagination: FC<PaginationProps> = ({ classNames, totalPages }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get(ConstantsEnum.PAGE_PARAM)) || 1;
  currentPage;
  const createPageUrl = (pageNumber: string | number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  console.log(totalPages, currentPage);
  return (
    <div className={`${classNames}`}>
      <Link href={createPageUrl(1)}>Pagination</Link>
    </div>
  );
};

export default Pagination;
