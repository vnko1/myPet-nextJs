import React, { FC } from "react";

import { CategoriesProps } from "./categories.type";
import styles from "./categories.module.scss";

const Categories: FC<CategoriesProps> = () => {
  return <div className={styles["categories"]}>Categories</div>;
};

export default Categories;
