import { Sponsors } from "@/lib/database";
import { NextRequest, NextResponse } from "next/server";
// import { revalidatePath } from "next/cache";
// import { NextRequest } from "next/server";

const sponsors = new Sponsors();

// export const dynamic = "force-dynamic";
// export const revalidate = 1;

export async function GET(request: NextRequest) {
  request;
  try {
    const res = await sponsors.findSponsorsData();

    // const path = request.nextUrl.pathname;

    // revalidatePath(path);

    return NextResponse.json(res);
  } catch (error) {
    error;
  }
}
