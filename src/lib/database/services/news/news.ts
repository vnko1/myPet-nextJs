import DBConstructor from "../dbConstructor/dbConstructor";
import { Sort } from "../dbConstructor/dbConstructor.type";
import { Article } from "../../models";
import { ArticleTypes, NEWS_LIMIT, QueryParams } from "@/types";

interface INews {
  findArticlesData(params: QueryParams): Promise<ArticleTypes[]>;
  countArticlesPagesData(params: QueryParams): Promise<number>;
}
class News extends DBConstructor implements INews {
  protected limit = NEWS_LIMIT;
  constructor(sort: Sort) {
    super(sort);
  }

  async findArticlesData({ query, page }: QueryParams) {
    const queryPattern = this.getSearchQueryPattern({ query });
    const sortPattern = this.getSortingPattern("date");
    const perPage = this.getSkipPattern(page, this.limit);

    return Article.find(queryPattern, "-id")
      .skip(perPage)
      .limit(this.limit)
      .sort(sortPattern);
  }

  countArticlesPagesData({ query }: QueryParams) {
    const queryParams = this.getSearchQueryPattern({ query });
    return Article.countDocuments(queryParams);
  }
}

export default News;
