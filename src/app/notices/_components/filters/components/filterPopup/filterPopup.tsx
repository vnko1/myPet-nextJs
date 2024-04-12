import React, { FC, useEffect, useRef, useState } from "react";
import cn from "classnames";

import { useOutsideEventHandler } from "@/hooks";
import { FilterPopupProps } from "./filterPopup.type";
import styles from "./filterPopup.module.scss";
import { Icon } from "@/components";
import { IconEnum } from "@/types";

const FilterPopup: FC<FilterPopupProps> = ({
  active,
  classNames,
  isVisible,
  setIsVisible,
  eventHandler,
}) => {
  const nodeRef = useRef(null);

  const [genderIsActive, setGenderIsActive] = useState(false);
  const [ageIsActive, setAgeIsActive] = useState(false);

  useOutsideEventHandler(nodeRef, eventHandler);

  useEffect(() => {
    if (active) {
      setIsVisible(true);
    }
  }, [active, setIsVisible]);

  const popupClassNames = cn(
    styles["filters"],
    {
      [styles["active"]]: isVisible,
    },
    classNames
  );

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

  if (!active) return null;

  return (
    <div ref={nodeRef} className={popupClassNames}>
      <h2>Filters</h2>
      <div className={`${styles["filter"]} ${styles["age"]}`}>
        <button
          className={ageButtonClassNames}
          onClick={() => setAgeIsActive(!ageIsActive)}
        >
          <Icon icon={IconEnum.CHEVRON} size={24} />
          By age
        </button>
      </div>
      <div className={`${styles["filter"]} ${styles["gender"]}`}>
        <button
          className={genderButtonClassNames}
          onClick={() => setGenderIsActive(!genderIsActive)}
        >
          <Icon icon={IconEnum.CHEVRON} size={24} />
          By gender
        </button>
      </div>
    </div>
  );
};

export default FilterPopup;
