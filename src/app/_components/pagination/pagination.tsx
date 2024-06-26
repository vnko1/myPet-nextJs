"use client";
import React, { FC } from "react";

import { usePathname, useSearchParams } from "next/navigation";

import { PaginationProps } from "./pagination.type";
import { ConstantsEnum } from "@/types";
import { PaginationButtons } from "@/components";

const Pagination: FC<PaginationProps> = ({ classNames, totals, limit }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get(ConstantsEnum.PAGE_PARAM)) || 1;

  const createPageUrl = (pageNumber: string | number) => {
    const params = new URLSearchParams(searchParams);
    params.set(ConstantsEnum.PAGE_PARAM, pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className={`${classNames}`}>
      <PaginationButtons
        limit={limit}
        totals={totals}
        currentPage={currentPage}
        createPageUrl={createPageUrl}
      />
    </div>
  );
};

export default Pagination;
