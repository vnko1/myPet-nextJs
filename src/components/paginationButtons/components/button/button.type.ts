import { UsePaginationItem } from "@mui/material/usePagination";

export type ButtonProps = {
  href: string;
  classNames?: string;
  value?: number;
  icon?: boolean;
  arrow?: "left" | "right";
  currentPage?: number;
} & Partial<UsePaginationItem>;
