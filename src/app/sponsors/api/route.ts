import { Sponsors } from "@/lib";
// import { revalidatePath } from "next/cache";
// import { NextRequest } from "next/server";

const sponsors = new Sponsors();

export async function GET() {
  try {
    const res = await sponsors.getSponsors();

    // const path = request.nextUrl.pathname;

    // revalidatePath(path);

    return Response.json(res);
  } catch (error) {
    console.log(error);
  }
}
