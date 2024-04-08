import { ChangeEvent, FC, useState } from "react";

import { ImageFieldProps } from "./imageField.type";
import styles from "./imageField.module.scss";
import { Icon } from "@/components";
import { IconEnum } from "@/types";
import { blobToBase64 } from "@/utils";

const ImageField: FC<ImageFieldProps> = ({
  setImage,
  setImageUrl,
  imageUrl,
  variant,
  iconSize = 24,
  classNames,
  isLoading,
  error,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [file, setFile] = useState<string | null>(null);

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.currentTarget.files?.length) return;
    const file = e.currentTarget.files;
    blobToBase64(file[0]).then((res: string) => {
      setFile(res);
      setImageUrl(res);
    });

    e.currentTarget.value = "";
    setIsActive(true);
  };

  const onHandleConfirm = () => {
    setImage(file);
    setTimeout(() => setIsActive(false), 0);
  };

  const onHandleReset = () => {
    setFile(null);
    setImageUrl(imageUrl);
    setTimeout(() => setIsActive(false), 0);
  };

  return (
    <label className={`${styles["field"]} ${classNames}`}>
      <input
        disabled={isLoading || isActive}
        type="file"
        name="image"
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
      {error ? <span className={styles["error"]}>{error}</span> : null}
    </label>
  );
};

export default ImageField;
