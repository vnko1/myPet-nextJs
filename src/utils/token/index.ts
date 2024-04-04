import { sign } from "jsonwebtoken";
import { jwtDecode } from "jwt-decode";

type Payload = { [name: string]: string };

export const createToken = async (
  payloadData: Payload,
  secretKey: string,
  tokenExpirationValue = "2d"
): Promise<[string, Date]> => {
  const [key] = Object.keys(payloadData);

  const token = sign({ [key]: payloadData[key] }, secretKey, {
    expiresIn: tokenExpirationValue,
  });
  const { exp } = jwtDecode(token);

  const tokenLifeTime = new Date(exp || 1 * 1000);

  return [token, tokenLifeTime];
};
