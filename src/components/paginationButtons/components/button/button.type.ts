import { UsePaginationItem } from "@mui/material/usePagination";

export type ButtonProps = {
  href: string;
  classNames?: string;
  icon?: boolean;
  currentPage?: number;
} & Partial<UsePaginationItem>;
