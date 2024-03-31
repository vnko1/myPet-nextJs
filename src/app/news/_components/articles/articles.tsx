import React, { FC } from "react";
import { ArticlesParams } from "./articles.type";
import { getArticles } from "@/lib";

const Articles: FC<ArticlesParams> = async ({ query, page }) => {
  const currentPage = +page;
  const articles = await getArticles({ query, page: currentPage });
  articles;

  return <div>Articles</div>;
};

export default Articles;
