import React, { FC } from "react";
import { useFormContext, useFormState } from "react-hook-form";
import cn from "classnames";

import { FiledProps } from "./field.type";
import styles from "./field.module.scss";

const Field: FC<FiledProps> = ({ classNames, label, name, ...props }) => {
  const { register } = useFormContext();
  const { errors } = useFormState();

  const inputClassName = cn(styles["field__input"], {
    [styles["error"]]: errors[name],
  });

  return (
    <label className={`${styles["field"]} ${classNames}`}>
      {label ? <span className={styles["field__label"]}>{label}</span> : null}
      <span className={styles["field__wrapper"]}>
        <input
          {...props}
          {...register(name)}
          className={inputClassName}
          name={name}
        />
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
