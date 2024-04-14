"use client";
import { RadioButtonField } from "@/components";
import React from "react";
import styles from "./styles.module.scss";

const inputs = [
  {
    label: "your pet",
    name: "category",
    value: "your-pet",
  },
  {
    label: "sell",
    name: "category",
    value: "sell",
  },
  {
    label: "lost/found",
    name: "category",
    value: "lost-found",
  },
  {
    label: "in good hands",
    name: "category",
    value: "in-good-hands",
  },
];

function Category() {
  return (
    <div className={styles["category"]}>
      {inputs.map((input, index) => (
        <RadioButtonField key={index} {...input} />
      ))}
    </div>
  );
}

export default Category;
