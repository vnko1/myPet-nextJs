import { sign } from "jsonwebtoken";
import { jwtDecode } from "jwt-decode";

type Payload = { [name: string]: string };

export const createToken = async (
  payloadData: Payload,
  secretKey: string,
  tokenExpirationValue = "2d"
): Promise<[string, number]> => {
  const [key] = Object.keys(payloadData);

  const token = sign({ [key]: payloadData[key] }, secretKey, {
    expiresIn: tokenExpirationValue,
  });
  const { exp }: { exp: number } = jwtDecode(token);

  const tokenLifeTime = exp * 1000;

  return [token, tokenLifeTime];
};
