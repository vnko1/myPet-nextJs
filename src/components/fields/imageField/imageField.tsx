"use client";
import { ChangeEvent, FC, useEffect, useState } from "react";

import { ImageFieldProps } from "./imageField.type";
import styles from "./imageField.module.scss";
import { Icon } from "@/components";
import { IconEnum } from "@/types";
import { blobToBase64 } from "@/utils";
import { useFormContext } from "react-hook-form";
import Image from "next/image";

const ImageField: FC<ImageFieldProps> = ({
  setImage,
  setImageUrl,
  imageUrl,
  variant,
  name = "file",
  iconSize = 24,
  classNames,
  isLoading,
  error,
}) => {
  const { register, setValue, trigger, getValues } = useFormContext();

  const imageValue = getValues("file");

  const [isActive, setIsActive] = useState(false);
  const [file, setFile] = useState<string | null>(null);

  useEffect(() => {
    if (typeof imageValue === "string") setFile(imageValue);
  }, [imageValue]);

  const disabledPattern =
    variant === "user" ? isLoading || isActive : isLoading;

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.currentTarget.files?.length) return;
    const file = e.currentTarget.files;

    blobToBase64(file[0])
      .then((res: string) => {
        setFile(res);
        setValue(name, res);
        setImageUrl && setImageUrl(res);
      })
      .finally(() => {
        trigger();
      });

    e.currentTarget.value = "";
    setIsActive(true);
  };

  const onHandleConfirm = () => {
    setImage && setImage(file);
    setTimeout(() => setIsActive(false), 0);
  };

  const onHandleReset = () => {
    setFile(null);
    setImageUrl && setImageUrl(imageUrl || "");
    setTimeout(() => setIsActive(false), 0);
  };

  return (
    <label className={`${styles["field"]} ${classNames}`}>
      <input
        {...register(name)}
        disabled={disabledPattern}
        type="file"
        className={styles["field__input"]}
        onChange={handleChange}
        accept="image/*"
        aria-label="Image upload field"
      />
      {variant === "user" ? (
        !isActive ? (
          <span className={`${styles["button"]} ${styles["button-text"]}`}>
            <Icon icon={IconEnum.CAMERA} size={iconSize} />
            <span>Edit photo</span>
          </span>
        ) : (
          <span className={styles["buttons"]}>
            <button
              type="button"
              onClick={onHandleConfirm}
              className={`${styles["button"]} ${styles["button-text"]}`}
            >
              <Icon icon={IconEnum.CHECK} size={iconSize} />
              <span>Confirm</span>
            </button>
            <button
              type="button"
              onClick={onHandleReset}
              className={`${styles["button"]} ${styles["button-icon"]}`}
            >
              <Icon icon={IconEnum.CROSS} size={iconSize} />
            </button>
          </span>
        )
      ) : null}
      {variant === "pet" ? (
        file ? (
          <Image
            width={182}
            height={182}
            src={file || ""}
            alt="pet photo"
            className={styles["image"]}
          />
        ) : (
          <span className={`${styles["button"]} ${styles["button-plus"]}`}>
            <Icon icon={IconEnum.PLUS} size={72} />
          </span>
        )
      ) : null}
      {error ? <span className={styles["error"]}>{error}</span> : null}
    </label>
  );
};

export default ImageField;
