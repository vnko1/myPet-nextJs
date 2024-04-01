export type PaginationButtonsProps = {
  classNames?: string;
  totalPages: number;
  currentPage: number;
  createPageUrl: (pageNumber: string | number) => string;
};
