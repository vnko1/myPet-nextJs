import { JWTPayloadType, NoticesTypes } from "@/types";

export type NoticeProps = {
  classNames?: string;
  user: JWTPayloadType | null;
} & NoticesTypes;
