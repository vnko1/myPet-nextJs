import React, { FC, useEffect, useState } from "react";
import cn from "classnames";

import { FilterPopupProps } from "./filterPopup.type";
import styles from "./filterPopup.module.scss";
import { Icon } from "@/components";
import { IconEnum } from "@/types";
import { CheckBox } from "./components";

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

  const ageContentClassNames = cn(styles["filter__content"], {
    [styles["active"]]: ageIsActive,
  });

  const genderContentClassNames = cn(styles["filter__content"], {
    [styles["active"]]: genderIsActive,
  });

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
        <div className={ageContentClassNames}>
          <CheckBox name="age" value={0.5} label="3-12 m" />
        </div>
      </div>
      <div className={`${styles["filter"]} ${styles["gender"]}`}>
        <button
          className={genderButtonClassNames}
          onClick={() => setGenderIsActive(!genderIsActive)}
        >
          <Icon icon={IconEnum.CHEVRON} size={24} />
          By gender
        </button>
        <div className={genderContentClassNames}></div>
      </div>
    </>
  );
};

export default FilterPopup;
