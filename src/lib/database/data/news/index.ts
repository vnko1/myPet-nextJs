import { ArticleTypes, QueryParams } from "@/types";
import { News } from "@/lib/database/services";

const news = new News("desc");

export const getArticles = news.tryCatchWrapper<
  [ArticleTypes[], number],
  QueryParams
>(async function (params: QueryParams) {
  params;
  const res = await news.getArticlesData(params);

  return res;
});
