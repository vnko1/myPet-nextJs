import DBConstructor from "../dbConstructor/dbConstructor";

import { ArticleTypes, QueryParams } from "@/types";
import { Sort } from "../dbConstructor/dbConstrucor.type";
import { Article } from "../../models";

interface INews {
  getArticlesData(params: QueryParams): Promise<ArticleTypes[]>;
  getArticlesPagesData(params: QueryParams): Promise<number>;
}
class News extends DBConstructor implements INews {
  protected limit = 10;
  constructor(sort: Sort) {
    super(sort);
  }

  getArticlesData({ query, page = 1 }: QueryParams) {
    const queryParams = this.genSearchOptions({ query });

    return Article.find(queryParams, "-id")
      .skip(page)
      .limit(this.limit)
      .sort(this.genSortingOptions("date"));
  }

  getArticlesPagesData({ query }: QueryParams) {
    const queryParams = this.genSearchOptions({ query });
    return Article.countDocuments(queryParams);
  }
}

export default News;
