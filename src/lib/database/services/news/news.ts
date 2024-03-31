import DBConstructor from "../dbConstructor/dbConstructor";

import { ArticleTypes, QueryParams } from "@/types";
import { Sort } from "../dbConstructor/dbConstrucor.type";
import { Article } from "../../models";

interface INews {
  getArticlesData(params: QueryParams): Promise<[ArticleTypes[], number]>;
}
class News extends DBConstructor implements INews {
  constructor(sort: Sort) {
    super(sort);
  }

  getArticlesData({ query, page = 1 }: QueryParams) {
    const queryParams = this.genSearchOptions({ query });

    const articles = Article.find(queryParams, "-id")
      .skip(page)
      .limit(this.limit)
      .sort(this.genSortingOptions("date"));

    const total = Article.countDocuments(queryParams);

    return Promise.all([articles, total]);
  }
}

export default News;
