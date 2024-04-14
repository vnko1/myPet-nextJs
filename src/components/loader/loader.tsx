"use client";
import { FC } from "react";
import { ThreeDots } from "react-loader-spinner";

import { ILoaderProps } from "./loader.type";
import styles from "./loader.module.scss";

const Loader: FC<ILoaderProps> = ({ classNames }) => {
  return (
    <div className={`${styles["loader"]} ${classNames}`}>
      <ThreeDots height="80" width="80" color="#FFC107" radius="9" />
    </div>
  );
};

export default Loader;
