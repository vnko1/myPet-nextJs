import { ArticleTypes, QueryParams } from "@/types";
import { Articles } from "@/lib/database/services";

const articles = new Articles("desc");

export const getArticles = articles.tryCatchWrapper<
  ArticleTypes[],
  QueryParams
>(async function (params: QueryParams) {
  params;
  const res = await articles.getArticlesData(params);

  return res;
});
