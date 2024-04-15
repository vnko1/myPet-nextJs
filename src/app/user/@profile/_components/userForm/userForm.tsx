"use client";
import React, { useState } from "react";
import Image from "next/image";
import cn from "classnames";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import { UserFormProps } from "./userForm.type";
import { Icon, UIButton, Field, ImageField } from "@/components";
import { LogOutModal } from "@/app/_components";
import { IconEnum } from "@/types";
import { userSchema } from "@/schema";
import styles from "./userForm.module.scss";
import { updateUserProfile } from "@/lib/actions";

function UserForm({ user }: UserFormProps) {
  const methods = useForm({
    mode: "all",
    resolver: zodResolver(userSchema),
    values: {
      name: user.name,
      email: user.email,
      birthday: user.birthday,
      phone: user.phone,
      city: user.city,
    },
  });
  const [isEditing, setIsEditing] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [imageUrl, setImageUrl] = useState(user.avatarUrl);
  const [avatar, setAvatar] = useState<string | null>(null);

  const onHandleCrossClick = () => {
    if (isEditing) {
      setAvatar(null);
      setImageUrl(user.avatarUrl);
    }
    setIsEditing(!isEditing);
  };

  const onHandleAction = async (formData: FormData) => {
    avatar && formData.set("avatarUrl", avatar);
    formData.delete("image");

    await updateUserProfile(formData);
    setIsEditing(false);
  };

  const buttonsClassName = cn(styles["form__buttons"], {
    [styles["edit"]]: isEditing,
  });

  return (
    <>
      <FormProvider {...methods}>
        <form className={styles["form"]} action={onHandleAction} noValidate>
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
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk8LpfDwADJQGq85EagQAAAABJRU5ErkJggg=="
            />
            {isEditing && (
              <ImageField
                variant="user"
                classNames={styles["image-field"]}
                setImageUrl={setImageUrl}
                setImage={setAvatar}
                imageUrl={user.avatarUrl}
              />
            )}
          </div>
          <div className={styles["form__content"]}>
            <Field
              name="name"
              variant="small"
              label="Name:"
              type="text"
              disabled={!isEditing}
            />
            <Field
              name="email"
              variant="small"
              label="Email:"
              type="email"
              disabled={!isEditing}
            />
            <Field
              name="birthday"
              variant="small"
              label="Birthday:"
              type="text"
              disabled={!isEditing}
              placeholder="00.00.0000"
            />
            <Field
              name="phone"
              variant="small"
              label="Phone:"
              type="text"
              disabled={!isEditing}
              placeholder="+380000000000"
            />
            <Field
              name="city"
              variant="small"
              label="City:"
              type="text"
              placeholder="Kyiv"
              disabled={!isEditing}
            />
            <div className={buttonsClassName}>
              {isEditing ? (
                <UIButton
                  color="secondary"
                  variant="contained"
                  fullWidth
                  type="submit"
                >
                  Save
                </UIButton>
              ) : (
                <button
                  className={styles["custom-btn"]}
                  type="button"
                  onClick={() => setIsActive(true)}
                >
                  <Icon size={24} icon={IconEnum.LOGOUT} /> <span>Log Out</span>
                </button>
              )}
            </div>
          </div>
        </form>
      </FormProvider>
      <LogOutModal setIsActive={setIsActive} isActive={isActive} />
    </>
  );
}

export default UserForm;
