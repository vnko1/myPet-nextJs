import React, { FC } from "react";
import { ArticlesParams } from "./articles.type";
import { getArticles } from "@/lib";

const Articles: FC<ArticlesParams> = async ({ query, page }) => {
  const currentPage = +page;

  const [articles, total] = await getArticles({ query, page: currentPage });
  articles;
  total;
  // console.log(articles);

  return <div>Articles</div>;
};

export default Articles;
