import DBConstructor from "../dbConstructor/dbConstructor";

import { ArticleTypes, QueryParams } from "@/types";
import { Sort } from "../dbConstructor/dbConstrucor.type";
import { Article } from "../../models";

interface IArticles {
  getArticlesData(params: QueryParams): Promise<ArticleTypes[]>;
}
class Articles extends DBConstructor implements IArticles {
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
}

export default Articles;
