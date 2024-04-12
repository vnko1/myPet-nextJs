import React, { FC, useEffect, useState } from "react";
import cn from "classnames";

import { FilterPopupProps } from "./filterPopup.type";
import styles from "./filterPopup.module.scss";
import { Icon, CheckBox } from "@/components";
import { IconEnum } from "@/types";

const genderCheckBoxes = [
  { value: "female", label: "female" },
  { value: "male", label: "male" },
];

const ageCheckBoxes = [
  { value: 0.5, label: "3-12 m" },
  { value: 1, label: "up to 1 year" },
  { value: 2, label: "up to 2 year" },
];

const FilterPopup: FC<FilterPopupProps> = () => {
  const [genderIsActive, setGenderIsActive] = useState(false);
  const [ageIsActive, setAgeIsActive] = useState(false);

  useEffect(() => {
    return () => {
      setGenderIsActive(false);
      setAgeIsActive(false);
    };
  }, []);

  const ageButtonClassNames = cn(
    styles["filter__button"],
    styles["age__button"],
    { [styles["active"]]: ageIsActive }
  );

  const genderButtonClassNames = cn(
    styles["filter__button"],
    styles["gender__button"],
    { [styles["active"]]: genderIsActive }
  );

  const ageContentClassNames = cn(styles["filter__content"], {});

  const genderContentClassNames = cn(styles["filter__content"], {});

  return (
    <>
      <h2 className={styles["title"]}>Filters</h2>
      <div className={`${styles["filter"]} ${styles["age"]}`}>
        <button
          className={ageButtonClassNames}
          onClick={() => setAgeIsActive(!ageIsActive)}
        >
          <Icon icon={IconEnum.CHEVRON} size={24} />
          By age
        </button>
        {ageIsActive ? (
          <ul className={ageContentClassNames}>
            {ageCheckBoxes.map((checkBox) => (
              <li key={checkBox.value}>
                <CheckBox name="age" {...checkBox} />
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      <div className={`${styles["filter"]} ${styles["gender"]}`}>
        <button
          className={genderButtonClassNames}
          onClick={() => setGenderIsActive(!genderIsActive)}
        >
          <Icon icon={IconEnum.CHEVRON} size={24} />
          By gender
        </button>
        {genderIsActive ? (
          <ul className={genderContentClassNames}>
            {genderCheckBoxes.map((checkBox) => (
              <li key={checkBox.value}>
                <CheckBox name="sex" {...checkBox} />
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </>
  );
};

export default FilterPopup;
