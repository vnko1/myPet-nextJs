"use client";
import React, { useState } from "react";
import Image from "next/image";
import cn from "classnames";

import { UserFormProps } from "./userForm.type";
import { Icon, UIButton } from "@/components";
import { IconEnum } from "@/types";
import { Field, ImageField } from "@/components/fields";
import styles from "./userForm.module.scss";
import { FormProvider, useForm } from "react-hook-form";

function UserForm({ user }: UserFormProps) {
  const methods = useForm({
    mode: "all",
  });
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
  const buttonsClassName = cn(styles["form__buttons"], {
    [styles["edit"]]: isEditing,
  });

  return (
    <FormProvider {...methods}>
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
        <div className={styles["form__content"]}>
          <Field name="name" variant="small" label="Name:" />

          <div className={buttonsClassName}>
            {isEditing ? (
              <UIButton color="secondary" variant="contained" fullWidth>
                Save
              </UIButton>
            ) : (
              <button className={styles["custom-btn"]}>
                <Icon size={24} icon={IconEnum.LOGOUT} /> <span>Log Out</span>
              </button>
            )}
          </div>
        </div>
      </form>
    </FormProvider>
  );
}

export default UserForm;
