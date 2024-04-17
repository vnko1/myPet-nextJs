import { getIronSession } from "iron-session";
import { SessionData, defaultSession, sessionOptions, sleep } from "@/services";
import { cookies } from "next/headers";
import { JSONParser } from "@/utils";
import { revalidatePath } from "next/cache";

export async function getSession(shouldSleep = true) {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
    session.username = defaultSession.username;
  }

  if (shouldSleep) {
    await sleep(250);
  }

  return session;
}

export async function getParsedSession() {
  const data = await getSession();
  return JSONParser(data);
}

export async function handleAuth(token: string) {
  const session = await getSession(true);
  session.username = token;
  session.isLoggedIn = true;
  await session.save();
}

export async function logout() {
  const session = await getSession(false);
  session.destroy();
  revalidatePath("/", "layout");
}
