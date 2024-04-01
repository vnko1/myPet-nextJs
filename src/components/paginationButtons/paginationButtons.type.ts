export type CreatePageUrl = (pageNumber: string | number) => string;

export type PaginationButtonsProps = {
  classNames?: string;
  totalPages: number;
  currentPage: number;
  createPageUrl: CreatePageUrl;
};
