import { SponsorProps } from "../../sponsor.type";

export type DropDownProps = { classNames?: string } & Pick<
  SponsorProps,
  "workDays"
>;
