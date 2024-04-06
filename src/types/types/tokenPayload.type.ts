import { JWTPayload } from "jose";

interface TokenPayload {
  email: string;
  id: string;
}

export interface JWTPayloadType extends JWTPayload, Partial<TokenPayload> {}
