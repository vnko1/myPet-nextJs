import { FC } from "react";
import { SearchFieldProps } from "./searchField.type";

import styles from "./searchField.module.scss";

const SearchField: FC<SearchFieldProps> = ({ classNames, label, ...props }) => {
  return (
    <label
      className={`${styles["field"]} ${classNames}`}
      aria-label="search input"
    >
      {label ? <span>{label}</span> : null}
      <span>
        <input className={styles["input"]} {...props} />
      </span>
    </label>
  );
};

export default SearchField;
