"use client";
import React, { useState } from "react";
import { UserFormProps } from "./userForm.type";
import Image from "next/image";
import { UIButton } from "@/components";
import { IconEnum } from "@/types";
import styles from "./userForm.module.scss";

function UserForm({ user }: UserFormProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [imageUrl] = useState(user.avatarUrl);

  // console.log(user);
  return (
    <form className={styles["form"]}>
      <div className={styles["cross-btn-wrapper"]}>
        <UIButton
          variant="text"
          color="accent"
          iconSize={24}
          onClick={() => {
            setIsEditing(!isEditing);
          }}
          icon={!isEditing ? IconEnum.EDIT : IconEnum.CROSS}
        />
      </div>
      <div className={styles["image=thumb"]}>
        <Image
          width={182}
          height={182}
          src={imageUrl}
          alt="user avatar"
          className={styles["image"]}
        />
      </div>
    </form>
  );
}

export default UserForm;
