"use client";
import React, { useState } from "react";
import Image from "next/image";
import cn from "classnames";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import { UserFormProps } from "./userForm.type";
import { Icon, LogOutModal, UIButton } from "@/components";
import { IconEnum } from "@/types";
import { Field, ImageField } from "@/components/fields";
import { userSchema } from "@/schema";
import styles from "./userForm.module.scss";

function UserForm({ user }: UserFormProps) {
  const methods = useForm({
    mode: "all",
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: user.name,
      email: user.email,
      birthday: user.birthday?.toLocaleDateString(),
      phone: user.phone,
      city: user.city,
    },
  });
  const [isEditing, setIsEditing] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [imageUrl, setImageUrl] = useState(user.avatarUrl);
  const [image, setImage] = useState<File | null>(null);

  const onHandleCrossClick = () => {
    if (isEditing) {
      setImage(null);
      setImageUrl(user.avatarUrl);
    }
    setIsEditing(!isEditing);
  };

  const onHandleAction = async (formData: FormData) => {
    image && formData.set("avatarUrl", image);
    const birthday = formData.get("birthday");
    if (birthday && typeof birthday === "string") {
      const formattedBirthday = new Date();
      formData.set("birthday", formattedBirthday + "");
    }
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
      {isActive && <LogOutModal setIsActive={setIsActive} />}
    </>
  );
}

export default UserForm;
