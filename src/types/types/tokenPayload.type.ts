import { JWTPayload } from "jose";
import { Types } from "mongoose";

interface TokenPayload {
  email: string;
  _id: Types.ObjectId;
}

export interface JWTPayloadType extends JWTPayload, Partial<TokenPayload> {}
