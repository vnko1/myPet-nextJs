import { JWTPayload } from "jose";
import { Types } from "mongoose";

interface TokenPayload {
  email: string;
  _id: Types.ObjectId;
  name: string;
}

export interface JWTPayloadType extends JWTPayload, Partial<TokenPayload> {}
