import { SignJWT, jwtVerify } from "jose";
import { JWTPayloadType } from "@/types";

type Payload = { [name: string]: string };

export const createToken = async (
  payloadData: Payload,
  secretKey: string,
  tokenExpirationValue: number
): Promise<[string, Date]> => {
  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + tokenExpirationValue;
  // console.log(secretKey);
  const token = await new SignJWT({ ...payloadData })
    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
    .setExpirationTime(exp)
    .setIssuedAt(iat)
    .setNotBefore(iat)
    .sign(new TextEncoder().encode(secretKey));

  return [token, new Date(exp * 1000)];
};

export const verifyToken = async (
  cred: string,
  secretKey: string | undefined
): Promise<false | JWTPayloadType> => {
  const { payload } = await jwtVerify(
    cred,
    new TextEncoder().encode(secretKey)
  );
  if (!payload) return false;

  return payload;
};
