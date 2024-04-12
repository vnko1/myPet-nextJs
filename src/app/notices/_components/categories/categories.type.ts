import { JWTPayloadType } from "@/types";

export type CategoriesProps = {
  classNames?: string;
  user: JWTPayloadType | null;
};
