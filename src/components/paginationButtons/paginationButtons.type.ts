export type CreatePageUrl = (pageNumber: string | number) => string;

export type PaginationButtonsProps = {
  classNames?: string;
  totals: number;
  currentPage: number;
  limit: number;
  createPageUrl: CreatePageUrl;
};
