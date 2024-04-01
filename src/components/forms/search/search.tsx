"use client";

import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import { SearchFromProps } from "./search.type";

import styles from "./search.module.scss";
import { IconEnum } from "@/types";
import { Icon } from "@/components";

const SearchFrom: FC<SearchFromProps> = ({
  onSubmit,
  classNames,
  label,
  id = "search",
  ...props
}) => {
  const [value, setValue] = useState("");
  const onHandleSubmit = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onSubmit && onSubmit(value.trim());
  };

  const onHandleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value.trim());
  };

  return (
    <form {...props} className={`${styles["search"]} ${classNames}`}>
      {label ? (
        <label className={styles["search__label"]} htmlFor={id}>
          {label}
        </label>
      ) : null}
      <span className={styles["search__wrapper"]}>
        <input
          {...props}
          className={styles["search__field"]}
          value={value}
          onChange={onHandleChange}
        />
        <button
          onSubmit={onHandleSubmit}
          className={styles["search__icon"]}
          type="submit"
        >
          <Icon icon={IconEnum.SEARCH} size={24} />
        </button>
      </span>
    </form>
  );
};

export default SearchFrom;
