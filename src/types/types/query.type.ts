export type QueryParams = { page?: number | string; query?: string };

export type NoticeQueryParams = {
  sex?: "male" | "female";
  age?: "0.5" | "1" | "2";
  category: string;
} & QueryParams;
