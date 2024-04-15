import React, { FC } from "react";
import Image from "next/image";
import { ArticleProps } from "./article.type";
import styles from "./article.module.scss";

const Article: FC<ArticleProps> = ({ classNames, article }) => {
  const { url, title, imgUrl, text, date } = article;

  return (
    <div className={`${styles["article"]} ${classNames}`}>
      <Image
        src={imgUrl}
        alt="article's image"
        width={727}
        height={252}
        className={styles["article__image"]}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk8LpfDwADJQGq85EagQAAAABJRU5ErkJggg=="
      />
      <div className={styles["article__content"]}>
        <div className={styles["article__text"]}>
          <h2 className={styles["title"]}>{title}</h2>
          <p className={styles["text"]}>{text}</p>
        </div>
        <div className={styles["article__info"]}>
          <p className={styles["date"]}>{date.toLocaleDateString("en-GB")}</p>
          <a
            className={styles["link"]}
            href={url}
            target="_blank"
            rel="noreferrer noopener"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Article;
