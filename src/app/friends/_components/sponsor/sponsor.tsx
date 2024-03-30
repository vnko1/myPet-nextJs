import { FC } from "react";
import { SponsorProps } from "./sponsor.type";
import styles from "./sponsor.module.scss";
import Image from "next/image";
import { DropDown } from "./components";

const Sponsor: FC<SponsorProps> = ({
  classNames,
  title,
  url,
  address,
  addressUrl,
  imageUrl,
  phone,
  email,
  workDays,
}) => {
  return (
    <div className={`${styles["card"]} ${classNames}`}>
      <a
        className={styles["card__link"]}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </a>
      <div className={styles["card__box"]}>
        <div className={styles["card__image"]}>
          {imageUrl ? (
            <Image src={imageUrl} alt="Friends logo" width={146} height={104} />
          ) : null}
        </div>
        <div className={styles["card__content"]}>
          <DropDown workDays={workDays} />
          <p className={styles["text"]}>
            <strong>Address:</strong>
            <br />
            {address ? (
              <a href={addressUrl} target="_blank" rel="noreferrer">
                {address}
              </a>
            ) : (
              "website only"
            )}
          </p>
          <p className={styles["text"]}>
            <strong>Email:</strong> <br />
            {email ? <a href={`mailto:${email}`}>{email}</a> : "website only"}
          </p>
          <p className={styles["text"]}>
            <strong>Phone:</strong>
            {phone ? <a href={`tel:${phone}`}>{phone}</a> : "website only"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
