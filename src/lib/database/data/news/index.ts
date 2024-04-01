import { QueryParams } from "@/types";
import { News } from "@/lib/database/services";
import { IArticle } from "../../models/article/article.type";

const news = new News("desc");

export const getArticles = news.tryCatchWrapper<IArticle[], QueryParams>(
  async function (params: QueryParams) {
    return await news.getArticlesData(params);
  }
);

export const getArticlesPages = news.tryCatchWrapper<number, QueryParams>(
  async (params: QueryParams) => {
    return await news.getArticlesPagesData(params);
  }
);
