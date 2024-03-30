import { FC } from "react";
import { SponsorProps } from "./sponsor.type";
import styles from "./sponsor.module.scss";

const Sponsor: FC<SponsorProps> = ({ title }) => {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
};

export default Sponsor;
