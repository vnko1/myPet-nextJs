import { SponsorType, WorkDays as DayOfWork } from "@/lib";

export type WorkDays = DayOfWork;

export interface ISponsor extends SponsorType {
  _id: string | number;
}
