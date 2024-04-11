import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const res = await fetch(
    "https://worldtimeapi.org/api/timezone/America/Chicago",
    { next: { tags: ["time-api"] } }
  );
  const data = await res.json();

  const path = request.nextUrl.pathname || "/";

  revalidatePath(path);
  //   revalidateTag("time-api");

  return NextResponse.json({ time: data.datetime });
}
