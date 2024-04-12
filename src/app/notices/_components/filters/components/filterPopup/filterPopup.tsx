import React, { FC, useEffect, useRef } from "react";
import cn from "classnames";

import { useOutsideEventHandler } from "@/hooks";
import { FilterPopupProps } from "./filterPopup.type";
import styles from "./filterPopup.module.scss";

const FilterPopup: FC<FilterPopupProps> = ({
  active,
  classNames,
  isVisible,
  setIsVisible,
  eventHandler,
}) => {
  const nodeRef = useRef(null);

  useOutsideEventHandler(nodeRef, eventHandler);

  useEffect(() => {
    if (active) {
      setIsVisible(true);
    }
  }, [active, setIsVisible]);

  const popupClassNames = cn(
    styles["filter"],
    {
      [styles["active"]]: isVisible,
    },
    classNames
  );

  if (!active) return null;

  return (
    <div ref={nodeRef} className={popupClassNames}>
      FilterPopup
    </div>
  );
};

export default FilterPopup;
