export type WorkDays = {
  isOpen: boolean;
  from: string;
  to: string;
  _id: string | number;
};

export type SponsorType = {
  title: string;
  url: string;
  addressUrl: string;
  imageUrl: string;
  address: string | null;
  phone: string | null;
  email: string | null;
  workDays: WorkDays[] | null;
};

export interface ISponsor extends SponsorType {
  _id: string | number;
}
