import { FC } from "react";
import { SponsorsProps } from "./sponsors.type";
import { Sponsor } from "..";

import styles from "./sponsors.module.scss";

const Sponsors: FC<SponsorsProps> = ({ classNames, sponsors }) => {
  return (
    <ul className={`${styles["sponsors"]} ${classNames}`}>
      {sponsors.map((sponsor) => {
        return (
          <li className={styles["sponsors__item"]} key={sponsor._id.toString()}>
            <Sponsor sponsor={sponsor} />
          </li>
        );
      })}
    </ul>
  );
};

export default Sponsors;
