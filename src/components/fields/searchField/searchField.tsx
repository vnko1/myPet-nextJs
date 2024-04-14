"use client";
import { ChangeEvent, FC } from "react";
import { SearchFieldProps } from "./searchField.type";

import styles from "./searchField.module.scss";
import { Icon } from "@/components";
import { IconEnum } from "@/types";

const SearchField: FC<SearchFieldProps> = ({
  classNames,
  placeholder = "Search",
  label,
  onHandleChange,
  ...props
}) => {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    onHandleChange(event.target.value);
  };
  return (
    <label
      className={`${styles["search"]} ${classNames}`}
      aria-label="search input"
    >
      {label ? <span className={styles["search__label"]}>{label}</span> : null}
      <span className={styles["search__wrapper"]}>
        <input
          className={styles["search__field"]}
          placeholder={placeholder}
          onChange={onChange}
          {...props}
        />
        <span className={styles["search__icon"]}>
          <Icon icon={IconEnum.SEARCH} size={24} />
        </span>
      </span>
    </label>
  );
};

export default SearchField;
