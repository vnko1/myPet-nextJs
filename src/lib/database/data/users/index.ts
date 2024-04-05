import { IJWT } from "@/types";
import { Users } from "../../services";

const users = new Users();

export async function getUser(payload: IJWT) {
  let user = null;

  if (payload.email) user = await users.findUser({ email: payload.email });
  if (payload.id) user = await users.findUserById(payload.id);

  return user;
}
