import { JWTPayload } from "jose";

interface TokenPayload {
  email: string;
  id: string;
}

export interface IJWT extends JWTPayload, Partial<TokenPayload> {}
