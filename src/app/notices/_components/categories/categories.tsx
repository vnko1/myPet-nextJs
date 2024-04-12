"use client";
import React, { FC } from "react";

import { CategoriesProps } from "./categories.type";
import styles from "./categories.module.scss";
import { LinksEnum } from "@/types";
import { RadioButtonField } from "@/components";

const notices = [
  {
    label: "sell",
    name: "category",
    value: LinksEnum.NOTICES_SELL,
  },
  {
    label: "lost/found",
    name: "category",
    value: LinksEnum.NOTICES_LOST_FOUND,
  },
  {
    label: "in good hands",
    name: "category",
    value: LinksEnum.NOTICES_IN_GOOD_HANDS,
  },
  {
    label: "favorite ads",
    name: "category",
    value: LinksEnum.NOTICES_FAVORITE,
  },
  {
    label: "my ads",
    name: "category",
    value: LinksEnum.NOTICES_OWN,
  },
];

const Categories: FC<CategoriesProps> = ({ user }) => {
  const endSliceValue = user ? notices.length : 3;
  return (
    <ul className={styles["categories"]}>
      {notices.slice(0, endSliceValue).map((notice) => (
        <li key={notice.value}>
          <RadioButtonField {...notice} />
        </li>
      ))}
    </ul>
  );
};

export default Categories;
