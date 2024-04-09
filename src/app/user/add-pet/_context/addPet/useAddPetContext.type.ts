import { Dispatch, SetStateAction } from "react";

export type Options = string;

export type Details = {
  name: string;
  date: string;
  type: string;
  title?: string;
};

export type Info = {
  sex?: "male" | "female";
  imageUrl: string;
  location?: string;
  price?: number;
  comment?: string;
};

export interface AddPetContextType {
  options: Options | null;
  setOptions: Dispatch<SetStateAction<Options | null>>;
  details: Details | null;
  setDetails: Dispatch<SetStateAction<Details | null>>;
  info: Info | null;
  setInfo: Dispatch<SetStateAction<Info | null>>;
}
