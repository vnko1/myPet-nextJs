"use client";
import { FC, MouseEvent, useState } from "react";
import { DropDownProps } from "./dropDown.type";
import { WorkDays } from "@/types";
import styles from "./dropDown.module.scss";
import sponsorStyles from "../../sponsor.module.scss";

const daysOfWeek = ["MN", "TU", "WE", "TH", "FR", "SA", "SU"];

function getDefaultTime(workDays: WorkDays[] | null) {
  if (workDays && workDays.length > 0) {
    const firstWorkDay = workDays[0];
    const from = firstWorkDay.from ? firstWorkDay.from : "11:00";
    const to = firstWorkDay.to ? firstWorkDay.to : "16:00";
    return `${from} - ${to}`;
  } else {
    return "Day and night";
  }
}

const DropDown: FC<DropDownProps> = ({ workDays }) => {
  const [isOpen, setIsOpen] = useState(false);

  const defaultTime = getDefaultTime(workDays);
  const handleClick = () => setIsOpen(!isOpen);
  const handleScheduleClick = (e: MouseEvent<HTMLDivElement>) =>
    e.stopPropagation();

  return (
    <div className={styles["dropdown"]}>
      <div onClick={handleClick}>
        <p className={sponsorStyles["text"]}>
          <strong>Time:</strong>
          <br /> {defaultTime}
        </p>
      </div>
      {isOpen && (
        <div className={styles["time"]}>
          {workDays && workDays.length ? (
            <div onClick={handleScheduleClick}>
              <ul className={styles["time__list"]}>
                {workDays.map((day, index) => (
                  <li
                    className={sponsorStyles["time__item"]}
                    key={day._id.toString()}
                  >
                    <strong>{daysOfWeek[index]}</strong> {day.from}-{day.to}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p>No time specified</p>
          )}
        </div>
      )}
    </div>
  );
};

export default DropDown;
