import React, { FC } from "react";

import { FilterProps } from "./filters.type";
import styles from "./filters.module.scss";

const Filters: FC<FilterProps> = () => {
  return <div className={styles["filters"]}>Filters</div>;
};

export default Filters;
