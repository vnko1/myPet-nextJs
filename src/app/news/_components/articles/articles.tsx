import React, { FC } from "react";
import { ArticlesParams } from "./articles.type";

const Articles: FC<ArticlesParams> = ({ query, page }) => {
  const currentPage = +page;
  console.log(currentPage, query);
  return <div>Articles</div>;
};

export default Articles;
