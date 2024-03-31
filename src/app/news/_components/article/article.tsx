import React, { FC } from "react";
import { ArticleProps } from "./article.type";
import styles from "./article.module.scss";

const Article: FC<ArticleProps> = ({ classNames }) => {
  return <div className={`${styles["article"]} ${classNames}`}>Article</div>;
};

export default Article;
