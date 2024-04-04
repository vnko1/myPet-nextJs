"use client";

import React, { FC, useState } from "react";
import { useFormContext, useFormState } from "react-hook-form";
import cn from "classnames";

import { FiledProps } from "./field.type";
import styles from "./field.module.scss";
import { Icon } from "@/components";
import { IconEnum } from "@/types";

const Field: FC<FiledProps> = ({ classNames, label, type, name, ...props }) => {
  const { errors } = useFormState();
  const { register, getFieldState } = useFormContext();
  const { isDirty, invalid } = getFieldState(name);

  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const isPassword = type === "password";

  const inputClassName = cn(styles["field__input"], {
    [styles["error"]]: errors[name],
    [styles["valid"]]: isDirty && !invalid && isPassword,
  });

  return (
    <label className={`${styles["field"]} ${classNames}`}>
      {label ? <span className={styles["field__label"]}>{label}</span> : null}
      <span className={styles["field__wrapper"]}>
        <input
          {...props}
          {...register(name)}
          type={isPassword ? (isVisiblePassword ? "text" : "password") : type}
          className={inputClassName}
          name={name}
        />
        <span className={styles["icons"]}>
          {isPassword ? (
            <button
              className={`${styles["icon"]} ${styles["eye"]}`}
              type="button"
              onClick={() => setIsVisiblePassword(!isVisiblePassword)}
            >
              <Icon
                size={24}
                icon={
                  isVisiblePassword ? IconEnum.EYE_OPEN : IconEnum.EYE_CLOSED
                }
              />
            </button>
          ) : null}
          {isDirty && !invalid ? (
            <span className={`${styles["icon"]} ${styles["check"]}`}>
              <Icon icon={IconEnum.CHECK} size={24} />
            </span>
          ) : null}
          {isDirty && invalid ? (
            <span className={`${styles["icon"]} ${styles["cross"]}`}>
              <Icon icon={IconEnum.CROSS_SMALL} size={24} />
            </span>
          ) : null}
        </span>
      </span>
      {errors[name] && (
        <span className={styles["field__error"]}>
          {errors[name]?.message as string}
        </span>
      )}
    </label>
  );
};

export default Field;