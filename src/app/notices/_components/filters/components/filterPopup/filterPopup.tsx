import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import cn from "classnames";

import { FilterPopupProps } from "./filterPopup.type";
import styles from "./filterPopup.module.scss";
import { Icon, CheckBox } from "@/components";
import { ConstantsEnum, IconEnum } from "@/types";

const genderCheckBoxes = [
  {
    id: "female",
    value: "female",
    label: "female",
    checked: false,
  },
  {
    id: "male",
    value: "male",
    label: "male",
    checked: false,
  },
];

const ageCheckBoxes = [
  {
    id: "0.5",
    value: 0.5,
    label: "3-12 m",
    checked: false,
  },
  {
    id: "1",
    value: 1,
    label: "up to 1 year",
    checked: false,
  },
  {
    id: "2",
    value: 2,
    label: "up to 2 year",
    checked: false,
  },
];

const FilterPopup: FC<FilterPopupProps> = () => {
  const [genderIsActive, setGenderIsActive] = useState(false);
  const [ageIsActive, setAgeIsActive] = useState(false);
  const [selectedGenderCheckBoxes, setSelectedGenderCheckBoxes] = useState<
    string[]
  >([]);
  const [selectedAgeCheckBoxes, setSelectedAgeCheckBoxes] = useState<string[]>(
    []
  );

  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    return () => {
      setGenderIsActive(false);
      setAgeIsActive(false);
    };
  }, []);

  useEffect(() => {
    if (searchParams.has(ConstantsEnum.SEX))
      setSelectedGenderCheckBoxes(
        searchParams.get(ConstantsEnum.SEX)?.split(",") || []
      );

    if (searchParams.has(ConstantsEnum.AGE))
      setSelectedAgeCheckBoxes(
        searchParams.get(ConstantsEnum.AGE)?.split(",") || []
      );
  }, [searchParams]);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    if (selectedGenderCheckBoxes.length) {
      params.set(ConstantsEnum.PAGE_PARAM, "1");
      params.set(ConstantsEnum.SEX, selectedGenderCheckBoxes.join(","));
    } else {
      params.delete(ConstantsEnum.PAGE_PARAM);
      params.delete(ConstantsEnum.SEX);
    }
    if (selectedAgeCheckBoxes.length) {
      params.set(ConstantsEnum.PAGE_PARAM, "1");
      params.set(ConstantsEnum.AGE, selectedAgeCheckBoxes.join(","));
    } else {
      params.delete(ConstantsEnum.PAGE_PARAM);
      params.delete(ConstantsEnum.AGE);
    }

    replace(pathname + "?" + params.toString());
  }, [
    pathname,
    searchParams,
    selectedAgeCheckBoxes,
    selectedGenderCheckBoxes,
    replace,
  ]);

  const onHandleChangeGender = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;

    if (checked)
      return setSelectedGenderCheckBoxes((state) => [...state, value]);
    setSelectedGenderCheckBoxes((state) => state.filter((e) => e !== value));
  };

  const onHandleChangeAge = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;

    if (checked) return setSelectedAgeCheckBoxes((state) => [...state, value]);
    setSelectedAgeCheckBoxes((state) => state.filter((e) => e !== value));
  };

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
                <CheckBox
                  {...checkBox}
                  name="age"
                  onChange={onHandleChangeAge}
                  checked={selectedAgeCheckBoxes.includes(checkBox.id)}
                />
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
                <CheckBox
                  {...checkBox}
                  name="sex"
                  onChange={onHandleChangeGender}
                  checked={selectedGenderCheckBoxes.includes(checkBox.id)}
                />
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </>
  );
};

export default FilterPopup;
