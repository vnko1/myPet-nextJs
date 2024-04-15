export type QueryParams = { page?: number | string; query?: string };

export type NoticeQueryParams = {
  sex?: "male" | "female";
  age?: "0.5" | "1" | "2";
  category: "sell" | "lost-found" | "in-good-hands" | "favorites" | "own";
} & QueryParams;
