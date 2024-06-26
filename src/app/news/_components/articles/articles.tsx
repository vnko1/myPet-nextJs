import React, { FC } from "react";
import { ArticlesParams } from "./articles.type";
import { getArticles } from "@/lib/database";
import styles from "./articles.module.scss";
import { Article } from "..";

const Articles: FC<ArticlesParams> = async ({ query, page }) => {
  const currentPage = +page;
  const articles = await getArticles({ query, page: currentPage });

  return (
    <ul className={styles["articles"]}>
      {articles &&
        articles.map((article) => (
          <li key={article._id.toString()} className={styles["article"]}>
            <Article article={article} />
          </li>
        ))}
    </ul>
  );
};

export default Articles;
