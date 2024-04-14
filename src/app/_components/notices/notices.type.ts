import { JWTPayloadType, NoticesTypes } from "@/types";

export type NoticesProps = {
  notices: NoticesTypes[];
  user: JWTPayloadType | null;
};
