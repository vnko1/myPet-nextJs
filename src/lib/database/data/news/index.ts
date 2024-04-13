import { ArticleTypes, QueryParams } from "@/types";
import { News } from "@/lib/database/services";

const news = new News("desc");

export const getArticles = news.tryCatchWrapper<ArticleTypes[], QueryParams>(
  async function (params: QueryParams) {
    return await news.findArticlesData(params);
  }
);

export const getArticlesPages = news.tryCatchWrapper<number, QueryParams>(
  async (params: QueryParams) => {
    return await news.countArticlesPagesData(params);
  }
);
