import DBConstructor from "../dbConstructor/dbConstructor";
import { QueryParams } from "@/types";
import { Sort } from "../dbConstructor/dbConstrucor.type";
import { Article } from "../../models";
import { IArticle } from "../../models/article/article.type";

interface INews {
  getArticlesData(params: QueryParams): Promise<IArticle[]>;
  getArticlesPagesData(params: QueryParams): Promise<number>;
}
class News extends DBConstructor implements INews {
  protected limit = 6;
  constructor(sort: Sort) {
    super(sort);
  }

  async getArticlesData({ query, page }: QueryParams) {
    const queryPattern = this.getSearchPattern({ query });
    const sortPattern = this.getSortingPattern("date");
    const perPage = this.getSkipPattern(page, this.limit);

    return Article.find(queryPattern, "-id")
      .skip(perPage)
      .limit(this.limit)
      .sort(sortPattern);
  }

  getArticlesPagesData({ query }: QueryParams) {
    const queryParams = this.getSearchPattern({ query });
    return Article.countDocuments(queryParams);
  }
}

export default News;
