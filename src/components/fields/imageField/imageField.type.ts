import { Dispatch, SetStateAction } from "react";

export type ImageFieldProps = {
  variant: "pet" | "user";
  setImage?: Dispatch<SetStateAction<string | null>>;
  setImageUrl?: Dispatch<SetStateAction<string>>;
  imageUrl?: string;
  iconSize?: number;
  classNames?: string;
  isLoading?: boolean;
  error?: string | null;
  name?: string;
};
