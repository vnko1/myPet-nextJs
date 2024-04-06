"use client";
import React, { useState } from "react";
import Image from "next/image";

import { UserFormProps } from "./userForm.type";
import { UIButton } from "@/components";
import { IconEnum } from "@/types";
import { ImageField } from "@/components/fields";
import styles from "./userForm.module.scss";

function UserForm({ user }: UserFormProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [imageUrl, setImageUrl] = useState(user.avatarUrl);
  const [, setImage] = useState<File | null>(null);

  const onHandleCrossClick = () => {
    if (isEditing) {
      setImage(null);
      setImageUrl(user.avatarUrl);
    }
    setIsEditing(!isEditing);
  };

  // console.log(user);
  return (
    <form className={styles["form"]}>
      <div className={styles["cross-btn-wrapper"]}>
        <UIButton
          variant="text"
          color="accent"
          iconSize={24}
          onClick={onHandleCrossClick}
          icon={!isEditing ? IconEnum.EDIT : IconEnum.CROSS}
        />
      </div>
      <div className={styles["image-thumb"]}>
        <Image
          width={182}
          height={182}
          src={imageUrl}
          alt="user avatar"
          className={styles["image"]}
        />
        {isEditing && (
          <ImageField
            variant="user"
            classNames={styles["image-field"]}
            setImageUrl={setImageUrl}
            setImage={setImage}
            imageUrl={user.avatarUrl}
          />
        )}
      </div>
    </form>
  );
}

export default UserForm;
