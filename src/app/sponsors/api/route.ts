import { Sponsors } from "@/lib";
// import { revalidatePath } from "next/cache";
// import { NextRequest } from "next/server";

const { getSponsorsData } = new Sponsors();

// export const dynamic = "force-dynamic";
// export const revalidate = 1;

export async function GET() {
  try {
    const res = await getSponsorsData();

    // const path = request.nextUrl.pathname;

    // revalidatePath(path);

    return Response.json(res);
  } catch (error) {
    console.log(error);
  }
}
