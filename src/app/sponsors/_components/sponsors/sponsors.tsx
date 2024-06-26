"use client";
import { FC, useState, useEffect } from "react";
import { SponsorsProps } from "./sponsors.type";
import { Sponsor } from "..";
import { SponsorType } from "@/types";
import styles from "./sponsors.module.scss";
import { Loader } from "@/components";
import { getSponsors } from "../../api/utils/dataFetch";

const Sponsors: FC<SponsorsProps> = ({ classNames }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [sponsors, setSponsors] = useState<SponsorType[]>([]);

  useEffect(() => {
    setIsLoading(true);
    getSponsors()
      .then((sponsors: SponsorType[]) => setSponsors(sponsors))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <Loader />;
  return (
    <ul className={`${styles["sponsors"]} ${classNames}`}>
      {sponsors.map((sponsor) => {
        return (
          <li className={styles["sponsors__item"]} key={sponsor._id.toString()}>
            <Sponsor {...sponsor} />
          </li>
        );
      })}
    </ul>
  );
};

export default Sponsors;
